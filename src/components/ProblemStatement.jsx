import React from 'react';
import ScrollReveal from './ScrollReveal';
import './ProblemStatement.css';

const reasons = [
    {
        title: 'Test case creation in hours, not months',
        desc: 'Solvik intelligently generates comprehensive test suites in a fraction of the time required by manual scripting.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        )
    },
    {
        title: 'Self-maintaining automated tests',
        desc: 'Tests automatically evolve as your application changes, eliminating the overhead of manual test maintenance.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
        )
    },
    {
        title: 'Complete quality insights',
        desc: 'Go beyond functional testing with actionable insights across usability, security, and performance.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path>
                <line x1="12" y1="9" x2="12" y2="13"></line>
                <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
        )
    }
];

const ProblemStatement = () => {
    return (
        <section id="product" className="section bg-alt problem-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header center">
                        <h2 style={{ marginBottom: '1.5rem' }}>What is <span style={{ color: 'var(--color-primary)' }}>Solvik</span>?</h2>
                        <p style={{ maxWidth: '800px', margin: '0 auto 3rem', fontSize: '1.2rem', lineHeight: '1.6', opacity: '0.9' }}>
                            Solvik is an AI-first software testing platform designed to eliminate testing bottlenecks. It automatically discovers your application, generates comprehensive test cases, evaluates quality, and maintains tests as your app evolves — turning months of manual work into minutes of intelligent automation.
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="fade-up">
                    <div className="section-header center">
                        <h2>Why <span style={{ color: 'var(--color-primary)' }}>Solvik</span>?</h2>
                    </div>
                </ScrollReveal>

                <div className="problem-grid">
                    {reasons.map((reason, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${(idx + 1) * 100}`} className="problem-card-wrapper">
                            <div className="problem-card">
                                <div className="problem-icon">
                                    {reason.icon}
                                </div>
                                <h3>{reason.title}</h3>
                                <p>{reason.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="fade-up" delay="400">
                    <div className="center" style={{ marginTop: '2rem' }}>
                        <p className="highlight-text" style={{ fontSize: '1.1rem', fontWeight: '500' }}>
                            <span style={{ color: 'var(--color-primary)' }}>✓</span> Faster releases with reduced manual effort
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default ProblemStatement;
