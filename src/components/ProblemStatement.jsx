import React from 'react';
import ScrollReveal from './ScrollReveal';
import './ProblemStatement.css';

const problems = [
    {
        title: 'Manual test creation is time-consuming',
        desc: 'Engineers spend 30% of their time writing boilerplate test code instead of building features.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <polyline points="12 6 12 12 16 14"></polyline>
            </svg>
        )
    },
    {
        title: 'Test coverage is inconsistent',
        desc: 'Critical user paths often go untested due to tight deadlines and human oversight.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                <line x1="12" y1="22.08" x2="12" y2="12"></line>
            </svg>
        )
    },
    {
        title: 'Execution results are hard to trust',
        desc: 'Flaky tests and unclear failure logs make debugging a nightmare for QA teams.',
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
        <section className="section bg-alt problem-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header center">
                        <h2><span style={{ color: 'var(--color-primary)' }}>AgentCertify</span> handles the overhead you hate...</h2>
                    </div>
                </ScrollReveal>
                <div className="problem-grid">
                    {problems.map((prob, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${(idx + 1) * 100}`} className="problem-card-wrapper">
                            <div className="problem-card">
                                <div className="problem-icon">
                                    {prob.icon}
                                </div>
                                <h3>{prob.title}</h3>
                                <p>{prob.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProblemStatement;
