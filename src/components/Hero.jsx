import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import { useModal } from '../context/ModalContext';
import './Hero.css';

const Hero = () => {
    const { openModal } = useModal();
    const [currentTagline, setCurrentTagline] = useState(0);
    
    const taglines = [
        { type: 'Automation', label: 'Testing' },
        { type: 'AI Vision', label: 'Testing' },
        { type: 'Smoke', label: 'Testing' },
        { type: 'Regression', label: 'Testing' },
        { type: 'Integration', label: 'Testing' },
        { type: 'API', label: 'Testing' },
        { type: 'RWD', label: 'Testing' },
        { type: 'UX Heuristics', label: 'Analysis' },
        { type: '508 Accessibility', label: 'Compliance' },
        { type: 'Security', label: 'Testing' },
        { type: 'Coverage', label: 'Analysis' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTagline((prev) => (prev + 1) % taglines.length);
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
                            Testing that thinks.<br />
                            <span className="hero-title-highlight">Quality that scales.</span>
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
                            <button className="hero-btn hero-btn-secondary" onClick={openModal}>
                                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <polygon points="5 3 19 12 5 21 5 3"></polygon>
                                </svg>
                                Watch Demo
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
                                <span className="proof-number">99.8%</span>
                                <span className="proof-text">Uptime</span>
                            </div>
                            <div className="proof-item">
                                <span className="proof-number">280hrs</span>
                                <span className="proof-text">Saved per Month</span>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal animation="fade-up" delay="400">
                    <div className="hero-visual">
                        <div className="hero-brand">
                            <span className="brand-text">Solvik</span>
                            <p className="brand-tagline-fixed">One Platform to Do It All</p>
                            <div className="brand-tagline-container">
                                {taglines.map((tagline, index) => (
                                    <p 
                                        className={`brand-tagline ${index === currentTagline ? 'active' : ''}`} 
                                        key={index}
                                    >
                                        <span className="tagline-type">{tagline.type}</span>{' '}
                                        <span className="tagline-label">{tagline.label}</span>
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
