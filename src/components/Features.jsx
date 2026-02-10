import React from 'react';
import ScrollReveal from './ScrollReveal';
import './Features.css';

const features = [
    {
        title: 'Intelligent Automation',
        desc: 'AI-driven discovery and testing eliminate manual scripting, ensuring 100% logic coverage.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
            </svg>
        )
    },
    {
        title: 'Continuous Quality Monitoring',
        desc: 'Get actionable insights into usability, performance, accessibility, and security with every run.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.35-4.35"></path>
            </svg>
        )
    },
    {
        title: 'Seamless Integrations',
        desc: 'Compatible with CI/CD workflows and project management tools like Jira, GitHub, and Slack.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
                <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </svg>
        ),
        isIntegration: true
    },
    {
        title: 'Enterprise Security',
        desc: 'Role-based access, data isolation, and compliance-ready architecture for total peace of mind.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
                <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
            </svg>
        )
    }
];

const integrations = [
    { name: 'Jira', color: '#0052CC' },
    { name: 'GitHub', color: '#181717' },
    { name: 'Slack', color: '#4A154B' },
    { name: 'GitLab', color: '#FC6D26' },
    { name: 'Jenkins', color: '#D24939' }
];

const Features = () => {
    return (
        <section id="features" className="section feature-section">
            <div className="container">
                <ScrollReveal animation="slide-right">
                    <div className="section-header">
                        <h2>Advanced <span style={{ color: 'var(--color-primary)' }}>Features</span></h2>
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
