import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import HeroAnimation from '../components/HeroAnimation';
import './SubPage.css';

const Product = () => {
    return (
        <div className="subpage">
            {/* Section 1: Hero */}
            <section className="subpage-section">
                <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', alignItems: 'center', gap: '40px' }}>
                    <ScrollReveal animation="fade-up">
                        <header className="subpage-header" style={{ textAlign: 'left', padding: 0 }}>
                            <h1 className="page-title text-gradient">🚀 Solvik Product</h1>
                            <p className="page-subtitle">The intelligent testing platform that evolves with your application.</p>
                        </header>
                    </ScrollReveal>
                    <ScrollReveal animation="slide-right" delay="200">
                        <div className="product-hero-visual">
                            <HeroAnimation />
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 2: How Solvik Works */}
            <section className="subpage-section bg-alt">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <h2 className="block-title center" style={{ textAlign: 'center', marginBottom: '60px' }}>How Solvik Works</h2>
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

            {/* Section 3: Core Capabilities */}
            <section className="subpage-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <h2 className="block-title center" style={{ textAlign: 'center', marginBottom: '60px' }}>Core Capabilities</h2>
                        <div className="feature-grid">
                            <div className="content-block">
                                <h3 className="block-title">Smart Discovery</h3>
                                <p className="block-text">Understands your application automatically by crawling and mapping workflows.</p>
                            </div>
                            <div className="content-block">
                                <h3 className="block-title">Intelligent Test Generation</h3>
                                <p className="block-text">Creates executable test cases instantly based on discovered patterns.</p>
                            </div>
                            <div className="content-block">
                                <h3 className="block-title">Continuous Maintenance</h3>
                                <p className="block-text">Tests update automatically as your application changes, eliminating manual debt.</p>
                            </div>
                            <div className="content-block">
                                <h3 className="block-title">Quality Evaluation</h3>
                                <p className="block-text">Insights across usability, accessibility, and security provided in every run.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 4: FEATURES */}
            <section className="subpage-section bg-alt">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <h2 className="block-title center" style={{ textAlign: 'center', marginBottom: '60px' }}>Key Features</h2>
                        <div className="feature-grid">
                            <div className="content-block">
                                <h3 className="block-title">Intelligent Automation</h3>
                                <p className="block-text">AI-driven discovery and testing eliminate manual scripting entirely.</p>
                            </div>
                            <div className="content-block">
                                <h3 className="block-title">Continuous Quality Monitoring</h3>
                                <p className="block-text">Get actionable insights into usability, performance, accessibility, and security.</p>
                            </div>
                            <div className="content-block">
                                <h3 className="block-title">Seamless Integrations</h3>
                                <p className="block-text">Compatible with CI/CD workflows and project management tools out of the box.</p>
                            </div>
                            <div className="content-block">
                                <h3 className="block-title">Enterprise Security</h3>
                                <p className="block-text">Role-based access, data isolation, and compliance-ready architecture.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 5: USE CASES */}
            <section className="subpage-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <h2 className="block-title center" style={{ textAlign: 'center', marginBottom: '60px' }}>Use Cases</h2>
                        <div className="content-grid">
                            <div className="content-block">
                                <span className="block-icon">👥</span>
                                <h3 className="block-title">QA Teams</h3>
                                <p className="block-text">Accelerate test coverage without expanding resources.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">🛠️</span>
                                <h3 className="block-title">Engineering Teams</h3>
                                <p className="block-text">Release faster while maintaining quality.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">📊</span>
                                <h3 className="block-title">Product Managers</h3>
                                <p className="block-text">Data-driven insights into application health.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">🏢</span>
                                <h3 className="block-title">Enterprises</h3>
                                <p className="block-text">Secure, scalable testing across multiple projects.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 6: SECURITY & ENTERPRISE */}
            <section className="subpage-section bg-alt">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <header className="subpage-header center">
                            <h2 className="page-title text-gradient">🔐 Security & Enterprise</h2>
                            <p className="page-subtitle center" style={{ marginBottom: '40px' }}>Built for organizations that require reliability, scalability, and security from day one.</p>
                        </header>

                        <div className="content-grid" style={{ marginTop: '20px' }}>
                            <div className="content-block">
                                <span className="block-icon">🛡️</span>
                                <h3 className="block-title">Enterprise Security</h3>
                                <p className="block-text">Enterprise-grade data security with end-to-end encryption.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">🔑</span>
                                <h3 className="block-title">Access Control</h3>
                                <p className="block-text">Role-based access control (RBAC) for granular permissions.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">📋</span>
                                <h3 className="block-title">Compliance</h3>
                                <p className="block-text">Compliance-ready infrastructure targeting SOC 2, ISO, and GDPR.</p>
                            </div>
                            <div className="content-block">
                                <span className="block-icon">🤝</span>
                                <h3 className="block-title">Collaboration</h3>
                                <p className="block-text">Secure integrations and collaboration across your entire organization.</p>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default Product;
