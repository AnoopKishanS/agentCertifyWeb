import React from 'react';
import ScrollReveal from './ScrollReveal';
import './ImpactSnapshot.css';

const ImpactSnapshot = () => {
    const stats = [
        {
            value: '100x',
            label: 'Faster test creation',
            description: 'Reduced from hours to seconds with AI-powered automation.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
                    <polyline points="17 6 23 6 23 12" />
                </svg>
            )
        },
        {
            value: 'Automated',
            label: 'Quality Evaluation',
            description: 'Comprehensive analysis that captures every detail.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" />
                </svg>
            )
        },
        {
            value: 'Continuous',
            label: 'Test Maintenance',
            description: 'Self-healing tests that adapt to UI changes automatically.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M23 4v6h-6" />
                    <path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10" />
                </svg>
            )
        },
        {
            value: 'Enterprise',
            label: 'Ready Security',
            description: 'Built for scale with top-tier security standards.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
                    <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
            )
        }
    ];

    return (
        <section id="impact-snapshot" className="section impact-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="section-header">
                        <span className="eyebrow-label">IMPACT</span>
                        <h2 className="text-gradient">Impact Snapshot</h2>
                        <p className="subheading">Real-world results delivered by Agent Certify.</p>
                    </div>
                </ScrollReveal>

                <div className="impact-grid">
                    {stats.map((stat, index) => (
                        <ScrollReveal key={index} animation="fade-up" delay={`${(index * 100) + 100}`}>
                            <div className="impact-card">
                                <div className="impact-icon">{stat.icon}</div>
                                <div className="impact-value">{stat.value}</div>
                                <h3 className="impact-label">{stat.label}</h3>
                                <p className="impact-description">{stat.description}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ImpactSnapshot;
