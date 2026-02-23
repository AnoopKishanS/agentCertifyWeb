import React from 'react';
import HeroAnimation from './HeroAnimation';
import ScrollReveal from './ScrollReveal';
import './IntroAnimation.css';

const IntroAnimation = () => {
    return (
        <section className="intro-animation-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="intro-animation-header">
                        <h2 className="intro-animation-title">
                            See <span style={{ color: 'var(--color-primary)' }}>Solvik</span> in Action
                        </h2>
                        <p className="intro-animation-subtitle">
                            From connection to execution—watch how Solvik transforms your testing workflow
                        </p>
                    </div>
                </ScrollReveal>

                <ScrollReveal animation="scale-up" delay="200">
                    <div className="intro-animation-wrapper">
                        <HeroAnimation />
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default IntroAnimation;
