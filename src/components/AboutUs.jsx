import React from 'react';
import ScrollReveal from './ScrollReveal';

const AboutUs = () => {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="section-header center">
                        <h2>About <span style={{ color: 'var(--color-primary)' }}>Solvik</span></h2>
                    </div>
                </ScrollReveal>

                <div className="about-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '3rem', marginTop: '3rem' }}>
                    <ScrollReveal animation="slide-right" delay="100">
                        <div className="about-card" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Our Mission</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                To redefine software testing through intelligent automation — helping teams build reliable applications faster without testing becoming a bottleneck.
                            </p>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-left" delay="200">
                        <div className="about-card" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2.5rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                            <h3 style={{ color: 'var(--color-primary)', marginBottom: '1rem' }}>Our Vision</h3>
                            <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
                                A world where testing keeps pace with innovation, enabling organizations to deliver high-quality software continuously.
                            </p>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal animation="fade-up" delay="300">
                    <div className="why-built" style={{ marginTop: '4rem', background: 'var(--color-bg-alt)', padding: '3rem', borderRadius: '24px', textAlign: 'center' }}>
                        <h3 style={{ marginBottom: '1.5rem' }}>Why We Built Solvik</h3>
                        <p style={{ maxWidth: '900px', margin: '0 auto', fontSize: '1.2rem', lineHeight: '1.7', opacity: '0.9' }}>
                            Traditional testing struggles to keep up with rapid development cycles. Solvik was created to bridge this gap by automating discovery, test creation, maintenance, and quality evaluation using AI. We believe in bridging the gap between fast development and slow testing.
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default AboutUs;
