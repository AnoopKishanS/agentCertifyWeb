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
                            Meet <span style={{ color: 'var(--color-primary)' }}>MadameQA</span>, the Sentinel who <br />
                            <span className="text-gradient">Understands Your Code Better Than You</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-right" delay="200">
                        <p className="hero-subtitle">
                            She observes like a person, validates like a machine. MadameQA is the autonomous teammate who doesn't just run tests—she understands your vision.
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
