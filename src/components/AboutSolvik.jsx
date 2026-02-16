import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import './AboutSolvik.css';

const AboutSolvik = () => {
    const [activeMetric, setActiveMetric] = useState(0);
    
    const metrics = [
        { label: 'Tests Generated', value: '1,247', color: '#FD7B41' },
        { label: 'Coverage', value: '94.7%', color: '#28a745' },
        { label: 'Time Saved', value: '280hrs', color: '#569cd6' },
        { label: 'Bugs Found', value: '142', color: '#ff5f57' }
    ];

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveMetric((prev) => (prev + 1) % metrics.length);
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section id="about" className="section bg-alt about-section">
            <div className="container">
                <div className="about-grid">
                    <ScrollReveal animation="slide-left" className="about-content">
                        <span className="about-label">WHAT IS SOLVIK</span>
                        <h2 className="about-primary-statement">AI-Powered Testing That Actually Works</h2>
                        <p className="about-description">
                            Solvik is your autonomous testing engineer. It discovers your app, generates intelligent test cases, 
                            executes them across environments, and maintains everything as your code evolves.
                        </p>
                        <div className="about-outcome-separator"></div>
                        <p className="about-outcome">
                            From zero to full coverage in hours. No scripts. No maintenance. Just results.
                        </p>
                    </ScrollReveal>

                    <ScrollReveal animation="fade-up" delay="200" className="about-visual">
                        <div className="terminal-window">
                            <div className="terminal-header">
                                <div className="terminal-dots">
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                    <span className="dot"></span>
                                </div>
                                <span className="terminal-title">solvik-agent.log</span>
                            </div>
                            <div className="terminal-body">
                                <div className="terminal-line">
                                    <span className="prompt">$</span> solvik analyze --app=production
                                </div>
                                <div className="terminal-line output">
                                    <span className="success">✓</span> Connected to application
                                </div>
                                <div className="terminal-line output">
                                    <span className="success">✓</span> Mapped 47 user flows
                                </div>
                                <div className="terminal-line output">
                                    <span className="success">✓</span> Generated 1,247 test cases
                                </div>
                                <div className="terminal-line output">
                                    <span className="success">✓</span> Executing across 12 environments
                                </div>
                                <div className="terminal-line output highlight">
                                    <span className="metric-label">{metrics[activeMetric].label}:</span>
                                    <span className="metric-value" style={{ color: metrics[activeMetric].color }}>
                                        {metrics[activeMetric].value}
                                    </span>
                                </div>
                                <div className="terminal-cursor">_</div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default AboutSolvik;
