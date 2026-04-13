import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import './HowItWorks.css';

const steps = [
    {
        id: 1,
        title: 'Solvik studies your world',
        desc: 'Solvik quietly understands your application, observing every user flow, documentation and UI nuance with the curiosity of a dedicated engineer.',
        visual: '> Initializing cognitive mapping protocol...\n> Discovered 47 user flows, 23 edge states\n> Building contextual understanding\n> Architecture analysis: COMPLETE'
    },
    {
        id: 2,
        title: 'Solvik imagines the breaks',
        desc: 'Where others test happy paths, solvik creatively drafts edge cases and scenarios tailored to break your specific logic.',
        visual: '> Synthesizing adversarial test scenarios...\n> Generated 142 intelligent test cases\n> Targeting critical failure points\n> Edge case coverage: 94.7%'
    },
    {
        id: 3,
        title: 'Solvik executes relentlessly',
        desc: 'Solvik runs and maintains thousands of tests across parallel universes (cloud environments), validating your code with ruthless precision.',
        visual: '> Executing across 12 parallel environments\n> Auth Module: PASS | Payment Gateway: PASS\n> User Profile: PASS | API Routes: PASS\n> Validating 1,247 assertions...'
    },
    {
        id: 4,
        title: 'Solvik reports the truth',
        desc: 'No vague errors. Solvik hands you a dossier of exactly what failed, why it failed, and often, how to fix it.',
        visual: '> Test Suite Complete: 142/142 PASSED\n> Code Coverage: 94.7%\n> Zero regressions detected\n> Status: Production Ready'
    }
];

const HowItWorks = () => {
    const [activeStep, setActiveStep] = useState(0);
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const stepRefs = useRef([]);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 768);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Mobile auto-advance steps every 4s
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    useEffect(() => {
        if (!isMobile || !isAutoPlaying) return;
        const t = setInterval(() => setActiveStep(prev => (prev + 1) % steps.length), 4000);
        return () => clearInterval(t);
    }, [isMobile, isAutoPlaying]);

    const handleTabClick = (idx) => {
        setActiveStep(idx);
        setIsAutoPlaying(false);
    };

    useEffect(() => {
        if (isMobile) return; // Skip observer on mobile

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
                rootMargin: '-50% 0px -50% 0px',
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
    }, [isMobile]);

    // ── Mobile: single-viewport tabbed layout ──
    if (isMobile) {
        return (
            <section id="how-it-works" className="section bg-alt how-it-works-section hiw-mobile-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Inside the Intelligence of <span style={{ color: 'var(--color-primary)' }}>Solvik</span></h2>
                    </div>

                    {/* Mock screen */}
                    <div className="hiw-mobile-screen">
                        <div className="mock-screen">
                            <div className="mock-header">
                                <span className="dot red"></span>
                                <span className="dot yellow"></span>
                                <span className="dot green"></span>
                            </div>
                            <div className="mock-content">
                                <div className="console-text" key={activeStep}>
                                    &gt; {steps[activeStep].visual}
                                    <span className="cursor">_</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Step tabs */}
                    <div className="hiw-mobile-tabs">
                        {steps.map((step, idx) => (
                            <button
                                key={step.id}
                                className={`hiw-mobile-tab ${activeStep === idx ? 'active' : ''}`}
                                onClick={() => handleTabClick(idx)}
                            >
                                <span className="hiw-tab-num">0{step.id}</span>
                                <span className="hiw-tab-title">{step.title.replace('Solvik ', '')}</span>
                            </button>
                        ))}
                    </div>

                    {/* Active step description */}
                    <div className="hiw-mobile-desc" key={`desc-${activeStep}`}>
                        <p>{steps[activeStep].desc}</p>
                    </div>
                </div>
            </section>
        );
    }

    // ── Desktop: scroll-based sticky layout ──
    return (
        <section id="how-it-works" className="section bg-alt how-it-works-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header">
                        <h2>Inside the Intelligence of <span style={{ color: 'var(--color-primary)' }}>Solvik</span></h2>
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

