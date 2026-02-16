import React from 'react';
import ScrollReveal from './ScrollReveal';
import './ROISection.css';

const ROISection = () => {
    return (
        <section id="roi" className="roi-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="roi-header">
                        <h2 className="roi-title">
                            The Real Cost of <span className="text-gradient">Manual Testing</span>
                        </h2>
                        <p className="roi-subtitle">
                            Your QA team is burning hours on repetitive tasks. Here's what you're actually paying for.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="roi-comparison">
                    <ScrollReveal animation="slide-left" delay="100">
                        <div className="roi-card traditional">
                            <div className="roi-card-header">
                                <h3>Traditional QA</h3>
                                <span className="roi-badge badge-old">Manual Process</span>
                            </div>
                            <div className="roi-metrics">
                                <div className="roi-metric">
                                    <div className="metric-value negative">160 hrs/month</div>
                                    <div className="metric-label">Manual test execution</div>
                                </div>
                                <div className="roi-metric">
                                    <div className="metric-value negative">80 hrs/month</div>
                                    <div className="metric-label">Test maintenance & updates</div>
                                </div>
                                <div className="roi-metric">
                                    <div className="metric-value negative">40 hrs/month</div>
                                    <div className="metric-label">Bug reproduction & reporting</div>
                                </div>
                                <div className="roi-divider"></div>
                                <div className="roi-metric total">
                                    <div className="metric-value negative large">280 hrs</div>
                                    <div className="metric-label">Total monthly QA hours</div>
                                </div>
                                <div className="roi-cost">
                                    <span className="cost-label">Estimated cost:</span>
                                    <span className="cost-value">$21,000/month</span>
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
                                    <div className="metric-value positive">8 hrs/month</div>
                                    <div className="metric-label">Automated test execution</div>
                                </div>
                                <div className="roi-metric">
                                    <div className="metric-value positive">4 hrs/month</div>
                                    <div className="metric-label">Self-healing maintenance</div>
                                </div>
                                <div className="roi-metric">
                                    <div className="metric-value positive">2 hrs/month</div>
                                    <div className="metric-label">Instant bug reports</div>
                                </div>
                                <div className="roi-divider"></div>
                                <div className="roi-metric total">
                                    <div className="metric-value positive large">14 hrs</div>
                                    <div className="metric-label">Total monthly QA hours</div>
                                </div>
                                <div className="roi-cost">
                                    <span className="cost-label">Estimated cost:</span>
                                    <span className="cost-value">$1,050/month</span>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal animation="scale-up" delay="400">
                    <div className="roi-savings">
                        <div className="savings-card">
                            <div className="savings-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="1" x2="12" y2="23"></line>
                                    <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                                </svg>
                            </div>
                            <div className="savings-content">
                                <div className="savings-value">$19,950/month</div>
                                <div className="savings-label">Average savings</div>
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
                                <div className="savings-value">95% reduction</div>
                                <div className="savings-label">In manual QA hours</div>
                            </div>
                        </div>
                        <div className="savings-card">
                            <div className="savings-icon">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                    <polyline points="19 12 12 19 5 12"></polyline>
                                </svg>
                            </div>
                            <div className="savings-content">
                                <div className="savings-value">3-6 months</div>
                                <div className="savings-label">Typical ROI timeline</div>
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ROISection;
