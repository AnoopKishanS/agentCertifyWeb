import React from 'react';
import ScrollReveal from './ScrollReveal';

const useCases = [
    {
        title: 'QA Teams',
        desc: 'Accelerate test coverage without expanding resources. Focus on strategy while Solvik handles the execution.',
        icon: '🧪'
    },
    {
        title: 'Engineering Teams',
        desc: 'Release faster while maintaining quality. Integrate Solvik into your CI/CD for instant feedback.',
        icon: '🛠️'
    },
    {
        title: 'Product Managers',
        desc: 'Data-driven insights into application health. Understand quality trends and release readiness at a glance.',
        icon: '📊'
    },
    {
        title: 'Enterprises',
        desc: 'Secure, scalable testing across multiple projects. Standardize quality across your entire organization.',
        icon: '🏢'
    }
];

const UseCases = () => {
    return (
        <section id="use-cases" className="section use-cases-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="section-header center">
                        <h2>Use <span style={{ color: 'var(--color-primary)' }}>Cases</span></h2>
                        <p>Empowering every team to deliver excellence.</p>
                    </div>
                </ScrollReveal>

                <div className="use-cases-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    {useCases.map((useCase, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${idx * 100}`}>
                            <div className="use-case-card" style={{
                                background: 'rgba(255, 255, 255, 0.03)',
                                padding: '2rem',
                                borderRadius: '20px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                height: '100%'
                            }}>
                                <div style={{ fontSize: '2.5rem', marginBottom: '1.5rem' }}>{useCase.icon}</div>
                                <h3 style={{ marginBottom: '1rem' }}>{useCase.title}</h3>
                                <p style={{ opacity: '0.8', lineHeight: '1.6' }}>{useCase.desc}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default UseCases;
