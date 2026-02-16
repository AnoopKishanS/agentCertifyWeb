import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './SubPage.css';

const Platform = () => {
    return (
        <div className="subpage">
            {/* Section 1: Hero */}
            <section className="subpage-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <header className="subpage-header">
                            <h1 className="page-title text-gradient">🚀 The Solvik Platform</h1>
                            <p className="page-subtitle">A comprehensive AI-driven testing ecosystem built for high-scale speed, reliability, and security.</p>
                        </header>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 2: How it Works */}
            <section className="subpage-section bg-alt">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <h2 className="block-title center" style={{ textAlign: 'center', marginBottom: '60px' }}>Workflow Intelligence</h2>
                        <div className="content-grid">
                            <div className="content-block">
                                <span className="block-icon">1️⃣</span>
                                <h3 className="block-title">Connect</h3>
                                <p className="block-text">Connect your application or provide requirements to initiate the setup.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">2️⃣</span>
                                <h3 className="block-title">Discover</h3>
                                <p className="block-text">AI discovers workflows and functionality automatically, understanding every path.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">3️⃣</span>
                                <h3 className="block-title">Generate</h3>
                                <p className="block-text">Generate comprehensive test cases instantly without writing a single line of script.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">4️⃣</span>
                                <h3 className="block-title">Maintain</h3>
                                <p className="block-text">Receive continuous quality insights and automated updates as your application evolves.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 3: Core Capabilities & Security */}
            <section className="subpage-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <h2 className="block-title center" style={{ textAlign: 'center', marginBottom: '60px' }}>Capabilities & Security</h2>
                        <div className="feature-grid">
                            <div className="content-block">
                                <span className="block-icon">🛡️</span>
                                <h3 className="block-title">Secure Discovery</h3>
                                <p className="block-text">Auto-crawls workflows with data isolation and enterprise-grade encryption.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">🔑</span>
                                <h3 className="block-title">Intelligent RBAC</h3>
                                <p className="block-text">Granular permissions ensure only authorized users access test configurations.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">📝</span>
                                <h3 className="block-title">Compliance Ready</h3>
                                <p className="block-text">Infrastructure designed for SOC 2, ISO 27001, and GDPR standards.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">🔍</span>
                                <h3 className="block-title">Quality & Security Evaluation</h3>
                                <p className="block-text">Insights across usability, accessibility, and security provided in every run.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 4: Enterprise Infrastructure */}
            <section className="subpage-section bg-alt">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <div className="full-width-section">
                            <h2 className="block-title">Enterprise Infrastructure</h2>
                            <div className="feature-grid" style={{ marginTop: '40px' }}>
                                <div style={{ textAlign: 'left' }}>
                                    <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>Intelligent Automation</h4>
                                    <p className="block-text">AI-driven discovery and testing eliminate manual scripting entirely.</p>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>Continuous Quality Monitoring</h4>
                                    <p className="block-text">Get actionable insights into usability, performance, and accessibility.</p>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>Safe Integrations</h4>
                                    <p className="block-text">Compatible with CI/CD workflows and PM tools with secure API hooks.</p>
                                </div>
                                <div style={{ textAlign: 'left' }}>
                                    <h4 style={{ fontWeight: 700, marginBottom: '10px' }}>Data Isolation</h4>
                                    <p className="block-text">Multi-tenant architecture ensuring your proprietary data remains private.</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Platform;
