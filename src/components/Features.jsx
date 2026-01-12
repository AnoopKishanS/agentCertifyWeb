import React from 'react';
import ScrollReveal from './ScrollReveal';
import './Features.css';

const features = [
    {
        title: 'Integrate seamlessly',
        desc: 'Connect with Jira, GitHub, Slack, and GitLab to sync your workflow.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
        ),
        isIntegration: true
    },
    {
        title: 'State-Aware Mapping',
        desc: 'It doesn’t just click. It learns your architecture, understanding complex dependencies automatically.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
        )
    },
    {
        title: 'Autonomous Flow Discovery',
        desc: 'It anticipates scenarios you might miss—edge cases and chaotic user flows—to ensure high-fidelity reliability.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
        )
    },
    {
        title: 'Intelligent Logic Checks',
        desc: 'It executes purposeful tests, checking not just for crashes, but for experience degradations and logical fallacies.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path>
                <path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path>
                <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path>
                <path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path>
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
                    <div className="section-header">
                        <h2>What <span style={{ color: 'var(--color-primary)' }}>AgentCertify</span> is truly capable of...</h2>
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
