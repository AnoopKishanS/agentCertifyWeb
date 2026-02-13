import React from 'react';
import ScrollReveal from './ScrollReveal';
import './UseCases.css';

const UseCases = () => {
    const cases = [
        {
            role: 'QA Teams',
            outcome: 'Accelerate test coverage without expanding resources.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M9 11l3 3L22 4" />
                    <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
                </svg>
            )
        },
        {
            role: 'Engineering Teams',
            outcome: 'Release faster while maintaining quality.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="16 18 22 12 16 6" />
                    <polyline points="8 6 2 12 8 18" />
                </svg>
            )
        },
        {
            role: 'Product Managers',
            outcome: 'Data-driven insights into application health.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <line x1="18" y1="20" x2="18" y2="10" />
                    <line x1="12" y1="20" x2="12" y2="4" />
                    <line x1="6" y1="20" x2="6" y2="14" />
                </svg>
            )
        },
        {
            role: 'Enterprises',
            outcome: 'Secure, scalable testing across multiple projects.',
            icon: (
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
            )
        }
    ];

    return (
        <section id="use-cases" className="section use-cases-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header">
                        <span className="eyebrow-label">USE CASES</span>
                        <h2 className="text-gradient">Who Is Solvik Built For?</h2>
                        <p className="subheading">Designed to support teams across the software lifecycle.</p>
                    </div>
                </ScrollReveal>

                <div className="use-cases-grid">
                    {cases.map((item, index) => (
                        <ScrollReveal key={index} animation="fade-up" delay={`${(index * 100) + 100}`}>
                            <div className="use-case-card">
                                <div className="card-icon">{item.icon}</div>
                                <h3 className="role-title">{item.role}</h3>
                                <p className="outcome-statement">{item.outcome}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="fade-up" delay="500">
                    <div className="use-cases-footer">
                        <p>Whether you're scaling QA, shipping features, or managing enterprise systems — Solvik adapts to your workflow.</p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default UseCases;
