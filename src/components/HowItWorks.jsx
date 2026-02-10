import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import './HowItWorks.css';

const steps = [
    {
        id: 1,
        title: 'Connect App',
        desc: 'Connect your application in minutes — no complex setup required. Just point Solvik to your URL or repository.',
        visual: '> Establishing secure connection...\n> Handshake: SUCCESS\n> Environment: PROD\n> Authentication: VERIFIED\n> Connection stabilized.'
    },
    {
        id: 2,
        title: 'Discover',
        desc: 'AI automatically understands your workflows, features, and functionality with superhuman depth.',
        visual: '> Initializing neural discovery...\n> Mapping document Object Model (DOM)\n> Discovered 47 user flows, 23 edge states\n> Architecture analysis: COMPLETE'
    },
    {
        id: 3,
        title: 'Generate Tests',
        desc: 'Instantly create comprehensive, ready-to-run test cases that cover every corner of your app.',
        visual: '> Synthesizing test scenarios...\n> Generated 142 intelligent test cases\n> Targeting critical failure points\n> Test suite generation: 100%'
    },
    {
        id: 4,
        title: 'Evaluate Quality',
        desc: 'Get actionable insights across usability, security, and performance with every automated run.',
        visual: '> Executing quality audit...\n> Usability: 92% | Security: 98%\n> Performance: OPTIMAL\n> Accessibility: WCAG 2.1 Compliant'
    },
    {
        id: 5,
        title: 'Continuous Updates',
        desc: 'Tests automatically evolve as your application changes, so you never have to worry about maintenance.',
        visual: '> Detecting application changes...\n> New UI elements identified\n> Updating 12 test cases automatically\n> System synchronized with latest build.'
    }
];

const HowItWorks = () => {
    const [activeStep, setActiveStep] = useState(0);
    const stepRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        const index = Number(entry.target.dataset.index);
                        setActiveStep(index);
                    }
                });
            },
            {
                root: null,
                rootMargin: '-50% 0px -50% 0px', // Trigger when element is in middle of screen
                threshold: 0
            }
        );

        stepRefs.current.forEach((ref) => {
            if (ref) observer.observe(ref);
        });

        return () => {
            stepRefs.current.forEach((ref) => {
                if (ref) observer.unobserve(ref);
            });
        };
    }, []);

    return (
        <section id="product" className="section bg-alt how-it-works-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header">
                        <h2>Product <span style={{ color: 'var(--color-primary)' }}>Overview</span></h2>
                    </div>
                </ScrollReveal>

                <div className="hiw-container">
                    <div className="hiw-steps">
                        {steps.map((step, idx) => (
                            <div
                                key={step.id}
                                className={`hiw-step ${activeStep === idx ? 'active' : ''}`}
                                ref={el => stepRefs.current[idx] = el}
                                data-index={idx}
                            >
                                {/* Adding subtle fade up reveal to content inside step too */}
                                <ScrollReveal animation="fade-up" delay="100">
                                    <h3>{step.title}</h3>
                                    <p>{step.desc}</p>
                                </ScrollReveal>
                            </div>
                        ))}
                    </div>
                    <div className="hiw-visual-container">
                        <div className="hiw-sticky-visual">
                            <div className="mock-screen">
                                <div className="mock-header">
                                    <span className="dot red"></span>
                                    <span className="dot yellow"></span>
                                    <span className="dot green"></span>
                                </div>
                                <div className="mock-content">
                                    <div className="console-text">
                                        &gt; {steps[activeStep].visual}
                                        <span className="cursor">_</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
