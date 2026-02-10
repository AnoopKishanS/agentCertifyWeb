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
                            The AI testing platform that <br />
                            <span className="text-gradient">really understands your application</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-right" delay="200">
                        <p className="hero-subtitle" style={{ fontWeight: '600', color: 'var(--color-primary)', marginBottom: '10px' }}>
                            Smarter Testing. Faster Releases. Zero Hassle.
                        </p>
                        <p className="hero-subtitle">
                            AI-powered testing that understands your application, automatically generates test cases, and keeps them updated.
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
