import React, { useEffect, useState } from 'react';
import HeroAnimation from './HeroAnimation';
import ScrollReveal from './ScrollReveal';

const Hero = () => {
    const [offset, setOffset] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            // Limit offset to avoid element flying off too far
            if (window.scrollY < 800) {
                setOffset(window.scrollY);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <section className="hero-section">
            <div className="container hero-container">
                <div className="hero-content">
                    <ScrollReveal animation="fade-up" delay="100">
                        <h1 className="hero-title">
                            Meet <span style={{ color: 'var(--color-primary)' }}>AgentCertify</span>, the AI engine that <br />
                            <span className="text-gradient">Understands Your App Better Than You</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-right" delay="200">
                        <p className="hero-subtitle">
                            It observes with human-like intuition and validates with machine-like precision. AgentCertify is the autonomous platform that doesn't just run tests—it deeply understands your product's logic.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="scale-up" delay="300">
                        <div className="hero-actions">
                            <button className="btn btn-primary btn-lg">Get Started</button>
                            <button className="btn btn-secondary btn-lg">Request a Demo</button>
                        </div>
                    </ScrollReveal>
                </div>
                <div className="hero-visual">
                    <div className="visual-wrapper">
                        <HeroAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
