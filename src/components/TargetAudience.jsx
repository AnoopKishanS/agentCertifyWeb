import React from 'react';
import ScrollReveal from './ScrollReveal';
import './TargetAudience.css';

const personas = [
    {
        role: 'QA Teams',
        benefit: 'Reduce manual testing effort by 80% and focus on explorative testing.'
    },
    {
        role: 'Product Teams',
        benefit: 'Release with confidence knowing user flows are validated every commit.'
    },
    {
        role: 'Engineering Teams',
        benefit: 'Catch regressions early with reliable automated execution in CI/CD pipelines.'
    },
    {
        role: 'Enterprises',
        benefit: 'Scale test validation across hundreds of microservices effortlessly.'
    }
];

const TargetAudience = () => {
    return (
        <section className="section audience-section">
            <div className="container">
                <ScrollReveal animation="slide-right">
                    <div className="section-header center">
                        <h2>Who AgentCertify is for</h2>
                    </div>
                </ScrollReveal>

                <div className="audience-grid">
                    {personas.map((p, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${(idx % 2) * 100}`} className="audience-card-wrapper">
                            <div className="audience-card">
                                <h3>{p.role}</h3>
                                <p>{p.benefit}</p>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
