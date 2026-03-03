import React, { useState, useMemo, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import './ROISection.css';

const COST_PER_HOUR = 75; // $/hr for QA engineer

// Solvik reduction factors (what % of original hours remain with Solvik)
const REDUCTION_FACTORS = {
    testExecution: 0.2,    // 160 → 8 hrs (95% reduction)
    maintenance: 0.2,      // 80 → 4 hrs (95% reduction)
    bugReporting: 0.2,     // 40 → 2 hrs (95% reduction)
};

const ROISection = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const [inputs, setInputs] = useState({
        testExecution: 160,
        maintenance: 80,
        bugReporting: 40,
        qaTeamSize: 4,
    });

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const handleChange = (field, value) => {
        const numValue = value === '' ? 0 : parseInt(value, 10);
        if (isNaN(numValue) || numValue < 0) return;
        setInputs(prev => ({ ...prev, [field]: numValue }));
    };

    const calculations = useMemo(() => {
        const { testExecution, maintenance, bugReporting, qaTeamSize } = inputs;

        const totalManualHoursPerPerson = testExecution + maintenance + bugReporting;
        const totalManualHours = totalManualHoursPerPerson * qaTeamSize;
        const totalManualCost = totalManualHours * COST_PER_HOUR;

        const solvikTestExecution = Math.round(testExecution * REDUCTION_FACTORS.testExecution);
        const solvikMaintenance = Math.round(maintenance * REDUCTION_FACTORS.maintenance);
        const solvikBugReporting = Math.round(bugReporting * REDUCTION_FACTORS.bugReporting);
        const solvikHoursPerPerson = solvikTestExecution + solvikMaintenance + solvikBugReporting;
        const solvikTotalHours = solvikHoursPerPerson * qaTeamSize;
        const solvikTotalCost = solvikTotalHours * COST_PER_HOUR;

        const savedHours = totalManualHours - solvikTotalHours;
        const savedCost = totalManualCost - solvikTotalCost;
        const reductionPercent = totalManualHours > 0
            ? Math.round((savedHours / totalManualHours) * 100)
            : 0;

        return {
            totalManualHours, totalManualCost,
            solvikTestExecution, solvikMaintenance, solvikBugReporting,
            solvikTotalHours, solvikTotalCost,
            savedHours, savedCost, reductionPercent,
        };
    }, [inputs]);

    const formatCurrency = (amount) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency', currency: 'USD', maximumFractionDigits: 0,
        }).format(amount);
    };

    const formatNumber = (num) => {
        return new Intl.NumberFormat('en-US').format(num);
    };

    // ── Mobile: compact single-viewport layout ──
    if (isMobile) {
        return (
            <section id="roi" className="roi-section roi-section-mobile">
                <div className="container">
                    <div className="roi-header">
                        <h2 className="roi-title">
                            Smart <span className="text-gradient">ROI</span>
                        </h2>
                    </div>

                    {/* Compact input fields */}
                    <div className="roi-mobile-inputs">
                        <div className="roi-mobile-input-row">
                            <label>Test execution</label>
                            <div className="roi-mobile-input-wrap">
                                <input type="number" min="0" value={inputs.testExecution || ''} onChange={(e) => handleChange('testExecution', e.target.value)} className="roi-mobile-field" placeholder="160" />
                                <span className="roi-mobile-unit">hrs</span>
                            </div>
                        </div>
                        <div className="roi-mobile-input-row">
                            <label>Maintenance</label>
                            <div className="roi-mobile-input-wrap">
                                <input type="number" min="0" value={inputs.maintenance || ''} onChange={(e) => handleChange('maintenance', e.target.value)} className="roi-mobile-field" placeholder="80" />
                                <span className="roi-mobile-unit">hrs</span>
                            </div>
                        </div>
                        <div className="roi-mobile-input-row">
                            <label>Bug reporting</label>
                            <div className="roi-mobile-input-wrap">
                                <input type="number" min="0" value={inputs.bugReporting || ''} onChange={(e) => handleChange('bugReporting', e.target.value)} className="roi-mobile-field" placeholder="40" />
                                <span className="roi-mobile-unit">hrs</span>
                            </div>
                        </div>
                        <div className="roi-mobile-input-row team-row">
                            <label>Team size</label>
                            <div className="roi-mobile-input-wrap">
                                <input type="number" min="1" value={inputs.qaTeamSize || ''} onChange={(e) => handleChange('qaTeamSize', e.target.value)} className="roi-mobile-field" placeholder="4" />
                                <span className="roi-mobile-unit">ppl</span>
                            </div>
                        </div>
                    </div>

                    {/* Big stat */}
                    <div className="roi-mobile-hero">
                        <div className="roi-mobile-big-stat">
                            <span className="roi-mobile-big-number">{calculations.reductionPercent}%</span>
                            <span className="roi-mobile-big-label">QA Time Reduction</span>
                        </div>
                    </div>

                    {/* Before → After */}
                    <div className="roi-mobile-comparison">
                        <div className="roi-mobile-col">
                            <span className="roi-mobile-col-badge badge-old">Before</span>
                            <span className="roi-mobile-col-hours">{formatNumber(calculations.totalManualHours)} hrs</span>
                            <span className="roi-mobile-col-cost">{formatCurrency(calculations.totalManualCost)}/mo</span>
                        </div>
                        <div className="roi-mobile-arrow-col">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                        </div>
                        <div className="roi-mobile-col solvik-col">
                            <span className="roi-mobile-col-badge badge-new">With Solvik</span>
                            <span className="roi-mobile-col-hours positive">{formatNumber(calculations.solvikTotalHours)} hrs</span>
                            <span className="roi-mobile-col-cost">{formatCurrency(calculations.solvikTotalCost)}/mo</span>
                        </div>
                    </div>

                    {/* Savings pills */}
                    <div className="roi-mobile-savings-row">
                        <div className="roi-mobile-stat-pill">
                            <span className="pill-value">{formatCurrency(calculations.savedCost)}</span>
                            <span className="pill-label">Saved / month</span>
                        </div>
                        <div className="roi-mobile-stat-pill">
                            <span className="pill-value">{formatNumber(calculations.savedHours)}</span>
                            <span className="pill-label">Hours saved</span>
                        </div>
                        <div className="roi-mobile-stat-pill">
                            <span className="pill-value">{formatCurrency(calculations.savedCost * 12)}</span>
                            <span className="pill-label">Saved / year</span>
                        </div>
                    </div>
                </div>
            </section>
        );
    }


    // ── Desktop: full interactive layout ──
    return (
        <section id="roi" className="roi-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="roi-header">
                        <h2 className="roi-title">
                            Calculate Your <span className="text-gradient">QA Savings</span>
                        </h2>
                        <p className="roi-subtitle">
                            Enter your team's current QA hours and see how much you can save with Solvik's AI-powered testing.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="roi-comparison">
                    <ScrollReveal animation="slide-left" delay="100">
                        <div className="roi-card traditional">
                            <div className="roi-card-header">
                                <h3>Your Current QA</h3>
                                <span className="roi-badge badge-old">Manual Process</span>
                            </div>
                            <div className="roi-metrics">
                                <div className="roi-input-group">
                                    <label className="input-label" htmlFor="testExecution">
                                        <span className="input-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
                                        </span>
                                        Manual test execution
                                    </label>
                                    <div className="input-wrapper">
                                        <input id="testExecution" type="number" min="0" value={inputs.testExecution || ''} onChange={(e) => handleChange('testExecution', e.target.value)} className="roi-input" placeholder="160" />
                                        <span className="input-unit">hrs/person/month</span>
                                    </div>
                                </div>
                                <div className="roi-input-group">
                                    <label className="input-label" htmlFor="maintenance">
                                        <span className="input-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
                                        </span>
                                        Test maintenance &amp; updates
                                    </label>
                                    <div className="input-wrapper">
                                        <input id="maintenance" type="number" min="0" value={inputs.maintenance || ''} onChange={(e) => handleChange('maintenance', e.target.value)} className="roi-input" placeholder="80" />
                                        <span className="input-unit">hrs/person/month</span>
                                    </div>
                                </div>
                                <div className="roi-input-group">
                                    <label className="input-label" htmlFor="bugReporting">
                                        <span className="input-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>
                                        </span>
                                        Bug reproduction &amp; reporting
                                    </label>
                                    <div className="input-wrapper">
                                        <input id="bugReporting" type="number" min="0" value={inputs.bugReporting || ''} onChange={(e) => handleChange('bugReporting', e.target.value)} className="roi-input" placeholder="40" />
                                        <span className="input-unit">hrs/person/month</span>
                                    </div>
                                </div>
                                <div className="roi-divider"></div>
                                <div className="roi-input-group team-size-group">
                                    <label className="input-label" htmlFor="qaTeamSize">
                                        <span className="input-icon">
                                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                                        </span>
                                        QA team size
                                    </label>
                                    <div className="input-wrapper">
                                        <input id="qaTeamSize" type="number" min="1" value={inputs.qaTeamSize || ''} onChange={(e) => handleChange('qaTeamSize', e.target.value)} className="roi-input" placeholder="4" />
                                        <span className="input-unit">persons</span>
                                    </div>
                                </div>
                                <div className="roi-divider"></div>
                                <div className="roi-metric total">
                                    <div className="metric-value negative large">{formatNumber(calculations.totalManualHours)} hrs</div>
                                    <div className="metric-label">Total monthly QA hours</div>
                                </div>
                                <div className="roi-cost">
                                    <span className="cost-label">Estimated cost:</span>
                                    <span className="cost-value">{formatCurrency(calculations.totalManualCost)}/month</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay="200">
                        <div className="roi-arrow">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-right" delay="300">
                        <div className="roi-card solvik">
                            <div className="roi-card-header">
                                <h3>With Solvik</h3>
                                <span className="roi-badge badge-new">AI-Powered</span>
                            </div>
                            <div className="roi-metrics">
                                <div className="roi-metric">
                                    <div className="metric-comparison">
                                        <div className="metric-value positive">{formatNumber(calculations.solvikTestExecution)} hrs/month</div>
                                        <span className="metric-saved">↓ {formatNumber(inputs.testExecution * inputs.qaTeamSize - calculations.solvikTestExecution * inputs.qaTeamSize)} hrs saved</span>
                                    </div>
                                    <div className="metric-label">Automated test execution</div>
                                    <div className="metric-bar">
                                        <div className="metric-bar-fill" style={{ width: `${Math.min(REDUCTION_FACTORS.testExecution * 100, 100)}%` }}></div>
                                    </div>
                                </div>
                                <div className="roi-metric">
                                    <div className="metric-comparison">
                                        <div className="metric-value positive">{formatNumber(calculations.solvikMaintenance)} hrs/month</div>
                                        <span className="metric-saved">↓ {formatNumber(inputs.maintenance * inputs.qaTeamSize - calculations.solvikMaintenance * inputs.qaTeamSize)} hrs saved</span>
                                    </div>
                                    <div className="metric-label">Self-healing maintenance</div>
                                    <div className="metric-bar">
                                        <div className="metric-bar-fill" style={{ width: `${Math.min(REDUCTION_FACTORS.maintenance * 100, 100)}%` }}></div>
                                    </div>
                                </div>
                                <div className="roi-metric">
                                    <div className="metric-comparison">
                                        <div className="metric-value positive">{formatNumber(calculations.solvikBugReporting)} hrs/month</div>
                                        <span className="metric-saved">↓ {formatNumber(inputs.bugReporting * inputs.qaTeamSize - calculations.solvikBugReporting * inputs.qaTeamSize)} hrs saved</span>
                                    </div>
                                    <div className="metric-label">Instant bug reports</div>
                                    <div className="metric-bar">
                                        <div className="metric-bar-fill" style={{ width: `${Math.min(REDUCTION_FACTORS.bugReporting * 100, 100)}%` }}></div>
                                    </div>
                                </div>
                                <div className="roi-divider"></div>
                                <div className="roi-metric total">
                                    <div className="metric-value positive large">{formatNumber(calculations.solvikTotalHours)} hrs</div>
                                    <div className="metric-label">Total monthly QA hours</div>
                                </div>
                                <div className="roi-cost solvik-cost">
                                    <span className="cost-label">Estimated cost:</span>
                                    <span className="cost-value solvik-cost-value">{formatCurrency(calculations.solvikTotalCost)}/month</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal animation="scale-up" delay="400">
                    <div className="roi-savings">
                        <div className="savings-card highlight-card">
                            <div className="savings-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                            <div className="savings-content">
                                <div className="savings-value">{formatCurrency(calculations.savedCost)}/month</div>
                                <div className="savings-label">Total savings</div>
                            </div>
                        </div>
                        <div className="savings-card">
                            <div className="savings-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <circle cx="12" cy="12" r="10"></circle>
                                    <polyline points="12 6 12 12 16 14"></polyline>
                                </svg>
                            </div>
                            <div className="savings-content">
                                <div className="savings-value">{calculations.reductionPercent}% reduction</div>
                                <div className="savings-label">In QA hours ({formatNumber(calculations.savedHours)} hrs saved)</div>
                            </div>
                        </div>
                        <div className="savings-card">
                            <div className="savings-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
                                    <polyline points="17 6 23 6 23 12"></polyline>
                                </svg>
                            </div>
                            <div className="savings-content">
                                <div className="savings-value">{formatCurrency(calculations.savedCost * 12)}/year</div>
                                <div className="savings-label">Annual projected savings</div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ROISection;
