import React from 'react';
import ScrollReveal from './ScrollReveal';
import './Features.css';

const features = [
    {
        title: 'Test case creation in hours, not months',
        desc: 'Solvik automatically discovers your application and generates comprehensive test cases in a fraction of the time.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        )
    },
    {
        title: 'Self-maintaining automated tests',
        desc: 'Tests that evolve with your application. Solvik detects UI changes and updates scripts automatically to prevent breakage.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 2v6h-6"></path>
                <path d="M3 12a9 9 0 0 1 15-6.7L21 8"></path>
                <path d="M3 22v-6h6"></path>
                <path d="M21 12a9 9 0 0 1-15 6.7L3 16"></path>
            </svg>
        )
    },
    {
        title: 'Complete quality insights',
        desc: 'Go beyond functional testing with deep analysis of performance, accessibility, and security across all user flows.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="20" x2="18" y2="10"></line>
                <line x1="12" y1="20" x2="12" y2="4"></line>
                <line x1="6" y1="20" x2="6" y2="14"></line>
            </svg>
        )
    },
    {
        title: 'Faster releases, reduced effort',
        desc: 'Eliminate manual testing bottlenecks and ship with confidence. Turn mundane QA tasks into intelligent automation.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
        )
    }
];

const integrations = [
    { name: 'Jira', color: '#0052CC' },
    { name: 'GitHub', color: '#181717' },
    { name: 'Slack', color: '#4A154B' },
    { name: 'GitLab', color: '#FC6D26' }
];

const Features = () => {
    return (
        <section id="features" className="section feature-section">
            <div className="container">
                <ScrollReveal animation="slide-right">
                    <div className="section-header center">
                        <h2 className="text-gradient">Why Solvik</h2>
                    </div>
                </ScrollReveal>

                <div className="feature-row">
                    {features.map((feat, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${idx * 100}`} className={`feature-item-wrapper`}>
                            <div className={`feature-item ${feat.isIntegration ? 'integration-feature-card' : ''}`}>
                                <div className="feature-icon-wrapper">
                                    <span className="feature-icon">{feat.icon}</span>
                                </div>
                                <div className="feature-content">
                                    <h3>{feat.title}</h3>
                                    <p>{feat.desc}</p>
                                    {/* Embedded Integration List if active */}
                                    {feat.isIntegration && (
                                        <div className="mini-integration-list">
                                            {integrations.map(t => (
                                                <span key={t.name} className="mini-pill" style={{ borderColor: t.color }}>{t.name}</span>
                                            ))}
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
