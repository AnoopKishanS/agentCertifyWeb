import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './SubPage.css';

const Security = () => {
    return (
        <div className="subpage">
            {/* Section 1: Hero */}
            <section className="subpage-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <header className="subpage-header">
                            <h1 className="page-title text-gradient">🔐 Security & Enterprise</h1>
                            <p className="page-subtitle">Built for organizations that require reliability, scalability, and security from day one.</p>
                        </header>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 2: Security Features */}
            <section className="subpage-section bg-alt">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <div className="content-grid">
                            <div className="content-block">
                                <span className="block-icon">🛡️</span>
                                <h2 className="block-title">Enterprise-grade Security</h2>
                                <p className="block-text">We implement industry-leading protocols to ensure your data and intellectual property remain protected at all times.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">🔑</span>
                                <h2 className="block-title">Role-based Access Control</h2>
                                <p className="block-text">Granular permissions and authentication systems allow you to manage team access with precision and confidence.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">📝</span>
                                <h2 className="block-title">Compliance-ready</h2>
                                <p className="block-text">Our infrastructure is designed to meet rigorous compliance standards, including ISO 27001, SOC 2, and GDPR requirements.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">🤝</span>
                                <h2 className="block-title">Secure Collaboration</h2>
                                <p className="block-text">Safe integrations and sharing tools enable your team to work together without compromising security or data isolation.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 3: Inquire */}
            <section className="subpage-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <div className="content-block full-width-section" style={{ background: 'var(--color-text-main)', color: '#fff' }}>
                            <h2 className="block-title" style={{ color: '#fff' }}>Ready for Your Enterprise?</h2>
                            <p className="block-text" style={{ color: 'rgba(255,255,255,0.8)' }}>
                                Solvik is built to scale with your organization, providing the reliability and security needed for high-stakes software development.
                            </p>
                            <button className="btn btn-primary" style={{ marginTop: '30px' }}>Inquire for Enterprise</button>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Security;
