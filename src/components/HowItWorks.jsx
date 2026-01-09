import React, { useState, useEffect, useRef } from 'react';
import ScrollReveal from './ScrollReveal';
import './HowItWorks.css';

const steps = [
    {
        id: 1,
        title: 'Application Analysis',
        desc: 'Our AI agents crawl your application to understand the UI structure, user flows, and potential edge cases.',
        visual: 'Analyzing UI Structure...'
    },
    {
        id: 2,
        title: 'Test Case Generation',
        desc: 'Based on the analysis, the system automatically generates a comprehensive suite of test cases covering all critical paths.',
        visual: 'Generating Test Cases: 100%...'
    },
    {
        id: 3,
        title: 'Test Execution',
        desc: 'Tests are executed in parallel across multiple environments. No manual intervention required.',
        visual: 'Running Tests: Pass, Pass, Pass...'
    },
    {
        id: 4,
        title: 'Result Summary',
        desc: 'Get a detailed report of the test run, highlighting failures, bugs, and performance regressions.',
        visual: 'Success! 142/142 Tests Passed.'
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
        <section className="section bg-alt how-it-works-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header">
                        <h2>See AgentCertify in action</h2>
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
