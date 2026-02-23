import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { useModal } from '../context/ModalContext';
import './Hero.css';

const Hero = () => {
    const { openModal } = useModal();
    const [currentTagline, setCurrentTagline] = useState(0);

    const personas = [
        { persona: "QA Engineers", capability: "Automation Testing" },
        { persona: "Developers", capability: "API Testing" },
        { persona: "Product Teams", capability: "UX Heuristics Analysis" },
        { persona: "Security Teams", capability: "Security Testing" },
        { persona: "Compliance Teams", capability: "508 Accessibility Compliance" },
        { persona: "Engineering Leaders", capability: "Regression Testing" },
        { persona: "Startups", capability: "Smoke Testing" },
        { persona: "Growth Teams", capability: "Coverage Analysis" },
        { persona: "Frontend Teams", capability: "RWD Testing" },
        { persona: "AI Teams", capability: "AI Vision Testing" },
        { persona: "Platform Teams", capability: "Integration Testing" },
        { persona: "IT Operations", capability: "System Health Validation" },
        { persona: "Release Managers", capability: "Pre-Release Risk Assessment" }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagline((prev) => (prev + 1) % personas.length);
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="hero-section">
            <div className="hero-background">
                <div className="hero-gradient-orb"></div>
            </div>

            <div className="container hero-container">
                <div className="hero-content">
                    <ScrollReveal animation="fade-up" delay="0">
                        <h1 className="hero-title">
                            AI-Powered <br />Testing.<br />
                            <span className="hero-title-highlight">Built To Scale.</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay="100">
                        <p className="hero-description">
                            The end-to-end AI testing platform built for teams who refuse to slow down.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay="200">
                        <div className="hero-cta">
                            <button className="hero-btn hero-btn-primary" onClick={openModal}>
                                Start Testing Free
                            </button>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay="300">
                        <div className="hero-social-proof">
                            <div className="proof-item">
                                <span className="proof-number">10K+</span>
                                <span className="proof-text">Tests Generated Daily</span>
                            </div>
                            <div className="proof-item">
                                <span className="proof-number">70%</span>
                                <span className="proof-text">Lower QA Cost</span>
                            </div>
                            <div className="proof-item">
                                <span className="proof-number">160hrs</span>
                                <span className="proof-text">Saved per Month</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal animation="fade-up" delay="400">
                    <div className="hero-visual">
                        <div className="hero-brand">
                            <span className="brand-text">Solvik</span>
                            <p className="brand-tagline-fixed">The Testing Hub</p>
                            <div className="hero-persona-cycle-visual">
                                {personas.map((item, index) => (
                                    <div
                                        key={index}
                                        className={`persona-item ${index === currentTagline ? 'active' : ''}`}
                                    >
                                        <span className="tagline-label">FOR</span>{' '}
                                        <span className="tagline-type">{item.persona}</span>
                                    </div>
                                ))}
                            </div>
                            <div className="brand-tagline-container">
                                {personas.map((item, index) => (
                                    <p
                                        className={`brand-tagline ${index === currentTagline ? 'active' : ''}`}
                                        key={index}
                                    >
                                        <span className="tagline-type">
                                            {item.capability.substring(0, item.capability.lastIndexOf(' '))}
                                        </span>{' '}
                                        <span className="tagline-label">
                                            {item.capability.substring(item.capability.lastIndexOf(' ') + 1)}
                                        </span>
                                    </p>
                                ))}
                            </div>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Hero;
