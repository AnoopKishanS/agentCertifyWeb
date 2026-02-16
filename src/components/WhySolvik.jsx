import React from 'react';
import ScrollReveal from './ScrollReveal';
import './WhySolvik.css';

const WhySolvik = () => {
    const features = [
        {
            title: 'Vibe Coding Era',
            subtitle: 'Ship Fast, Break Nothing',
            description: 'In the age of vibe coding and rapid iteration, your tests should keep up. Solvik adapts to your velocity—generating, executing, and maintaining tests as fast as you ship features.',
            highlight: 'Zero friction. Pure momentum.'
        },
        {
            title: 'Self-Healing Intelligence',
            subtitle: 'Tests That Never Break',
            description: 'UI changed? API updated? No problem. Solvik automatically detects changes and heals your tests in real-time. No more maintenance hell.',
            highlight: '95% reduction in test maintenance'
        },
        {
            title: 'Total Coverage',
            subtitle: 'Every Flow. Every Edge Case.',
            description: 'From happy paths to nightmare scenarios—Solvik discovers and tests everything. Performance, accessibility, security, and functional coverage in one platform.',
            highlight: 'Comprehensive by default'
        }
    ];

    return (
        <section id="why-solvik" className="why-solvik-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="why-solvik-header">
                        <h2 className="section-title">
                            Why <span className="text-gradient">Solvik</span>
                        </h2>
                        <p className="section-subtitle">
                            Built for the vibe coding generation. Ship fast, test faster.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="why-solvik-features">
                    {features.map((feature, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${idx * 150}`}>
                            <div className="feature-block">
                                <div className="feature-number">0{idx + 1}</div>
                                <div className="feature-content">
                                    <h3 className="feature-title">{feature.title}</h3>
                                    <h4 className="feature-subtitle">{feature.subtitle}</h4>
                                    <p className="feature-description">{feature.description}</p>
                                    <div className="feature-highlight">
                                        <span className="highlight-icon">→</span>
                                        {feature.highlight}
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default WhySolvik;
