import React from 'react';
import ScrollReveal from './ScrollReveal';
import './AboutSolvik.css';

const AboutSolvik = () => {
    return (
        <section id="about" className="section bg-alt about-section">
            <div className="container">
                <div className="about-grid">
                    <ScrollReveal animation="slide-left" className="about-content">
                        <span className="about-label">WHAT IS SOLVIK</span>
                        <h2 className="about-primary-statement">An AI-first software testing platform</h2>
                        <p className="about-description">
                            Solvik eliminates testing bottlenecks by automatically discovering your application,
                            generating test cases, evaluating quality, and maintaining tests as your app evolves.
                        </p>
                        <div className="about-outcome-separator"></div>
                        <p className="about-outcome">
                            Turn months of manual testing into minutes of intelligent automation.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay="200" className="about-visual">
                        <div className="ai-brain-card">
                            <div className="pulse-circle"></div>
                            <div className="scan-line"></div>
                            <div className="card-content">
                                <div className="stat-row">
                                    <span>Discovery</span>
                                    <div className="progress-bar"><div className="progress" style={{ width: '95%' }}></div></div>
                                </div>
                                <div className="stat-row">
                                    <span>Automation</span>
                                    <div className="progress-bar"><div className="progress" style={{ width: '88%' }}></div></div>
                                </div>
                                <div className="stat-row">
                                    <span>Maintenance</span>
                                    <div className="progress-bar"><div className="progress" style={{ width: '92%' }}></div></div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default AboutSolvik;
