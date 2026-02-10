import React from 'react';
import ScrollReveal from './ScrollReveal';
import './AboutSolvik.css';

const AboutSolvik = () => {
    return (
        <section id="about" className="section bg-alt about-section">
            <div className="container">
                <div className="about-grid">
                    <ScrollReveal animation="slide-left" className="about-content">
                        <div className="section-header">
                            <h2 className="text-gradient">Solvik</h2>
                        </div>
                        <p className="about-description">
                            Solvik is an AI-first software testing platform designed to eliminate testing bottlenecks. It automatically discovers your application, generates comprehensive test cases, evaluates quality, and maintains tests as your app evolves — turning months of manual work into minutes of intelligent automation.
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
