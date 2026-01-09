import React from 'react';
import ScrollReveal from './ScrollReveal';
import './Features.css';

const features = [
    {
        title: 'Integrate seamlessly',
        desc: 'Connect with Jira, GitHub, Slack, and GitLab to sync your workflow.',
        icon: '🔗',
        isIntegration: true
    },
    {
        title: 'Understands your application',
        desc: 'Deep analysis of your UI, user flows, and module relationships to build a comprehensive map of your software.',
        icon: '🔍'
    },
    {
        title: 'Generates intelligent test cases',
        desc: 'Creates realistic user scenarios, edge cases, and regression tests automatically based on usage patterns.',
        icon: '⚡'
    },
    {
        title: 'Executes test cases',
        desc: 'Autonomous agents run the generated test cases in real cloud environments and report clear, actionable results.',
        icon: '🚀'
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
        <section className="section feature-section">
            <div className="container">
                <ScrollReveal animation="slide-right">
                    <div className="section-header">
                        <h2>What AgentCertify does</h2>
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
