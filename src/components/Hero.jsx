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
                            Generate and execute <br />
                            <span className="text-gradient">test cases with AI.</span>
                        </h1>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-right" delay="200">
                        <p className="hero-subtitle">
                            AI agents analyze your application to generate and execute test cases automatically.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="scale-up" delay="300">
                        <div className="hero-actions">
                            <button className="btn btn-primary btn-lg">See how it works</button>
                            <button className="btn btn-secondary btn-lg">Get Started</button>
                        </div>
                    </ScrollReveal>
                </div>
                <div className="hero-visual">
                    <div
                        className="visual-wrapper"
                        // Re-added parallax logic that was lost in previous overwrite
                        style={{ transform: `perspective(1000px) rotateY(-10deg) rotateX(5deg) translateY(${offset * 0.25}px)` }}
                    >
                        <HeroAnimation />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
