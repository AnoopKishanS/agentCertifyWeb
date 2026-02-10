import React from 'react';
import ScrollReveal from './ScrollReveal';

const SecurityEnterprise = () => {
    return (
        <section id="security" className="section bg-alt security-section">
            <div className="container">
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '4rem', alignItems: 'center' }}>
                    <ScrollReveal animation="slide-right">
                        <div className="security-content">
                            <h2 style={{ marginBottom: '1.5rem' }}>Enterprise-Grade <span style={{ color: 'var(--color-primary)' }}>Security</span></h2>
                            <p style={{ fontSize: '1.2rem', marginBottom: '2rem', opacity: '0.9' }}>
                                Built for organizations that require reliability, scalability, and security from day one. Solvik ensures your data and workflows remain protected.
                            </p>
                            <ul style={{ listStyle: 'none', padding: '0' }}>
                                {[
                                    'Enterprise-grade data security',
                                    'Role-based access control (RBAC)',
                                    'Compliance-ready infrastructure',
                                    'Secure integrations & collaboration'
                                ].map((item, idx) => (
                                    <li key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '1rem', fontSize: '1.1rem' }}>
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="20 6 9 17 4 12"></polyline>
                                        </svg>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </ScrollReveal>
                    <ScrollReveal animation="slide-left">
                        <div className="security-visual" style={{ background: 'rgba(255, 255, 255, 0.02)', padding: '3rem', borderRadius: '30px', border: '1px solid rgba(255, 255, 255, 0.05)', textAlign: 'center' }}>
                            <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>🔐</div>
                            <h3>Secure by Design</h3>
                            <p style={{ opacity: '0.7', marginTop: '1rem' }}>ISO 27001, SOC2, and GDPR compliant architecture.</p>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default SecurityEnterprise;
