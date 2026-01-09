import React, { useEffect, useState } from 'react';
import './TargetAudience.css';

const industries = [
    {
        name: 'SaaS & Cloud',
        description: 'Scale test coverage across microservices and cloud-native applications with AI-powered test generation.',
        useCases: ['API Testing', 'Microservices', 'Integration Tests']
    },
    {
        name: 'E-Commerce',
        description: 'Validate checkout flows, payment integrations, and user journeys automatically before every deployment.',
        useCases: ['Checkout Flows', 'Payment Testing', 'User Experience']
    },
    {
        name: 'FinTech',
        description: 'Ensure compliance and security with comprehensive test coverage for financial transactions and data handling.',
        useCases: ['Transaction Testing', 'Compliance', 'Security Audits']
    },
    {
        name: 'Healthcare',
        description: 'Meet regulatory requirements with thorough testing of patient data systems and medical workflows.',
        useCases: ['HIPAA Compliance', 'Patient Systems', 'Data Privacy']
    },
    {
        name: 'Enterprise',
        description: 'Streamline testing across complex enterprise systems with automated test case generation and execution.',
        useCases: ['Legacy Systems', 'Enterprise Apps', 'Scalability']
    }
];

const TargetAudience = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    // Auto-advance carousel
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % industries.length);
        }, 5000); // Change slide every 5 seconds

        return () => clearInterval(interval);
    }, []);

    const goToSlide = (index) => {
        setCurrentIndex(index);
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev + 1) % industries.length);
    };

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev - 1 + industries.length) % industries.length);
    };

    return (
        <section className="industry-carousel-section">
            <div className="industry-header">
                <h2>Who MadameQA is for</h2>
                <p>Trusted by teams across industries to deliver quality software faster</p>
            </div>

            <div className="industry-carousel-viewport">
                <div
                    className="industry-cards-container"
                    style={{
                        transform: `translateX(-${currentIndex * 100}vw)`,
                    }}
                >
                    {industries.map((industry, idx) => (
                        <div key={idx} className="industry-card-fullwidth">
                            <div className="industry-card-content">
                                <div className="industry-content-wrapper">
                                    <div className="industry-illustration">
                                        <div className="illustration-placeholder">
                                            <svg width="400" height="400" viewBox="0 0 300 300" fill="none">
                                                {/* Increased size */}
                                                <circle cx="150" cy="150" r="120" fill={`url(#gradient${idx})`} opacity="0.1" />
                                                <circle cx="150" cy="150" r="90" fill={`url(#gradient${idx})`} opacity="0.2" />
                                                <circle cx="150" cy="150" r="60" fill={`url(#gradient${idx})`} opacity="0.3" />
                                                <defs>
                                                    <linearGradient id={`gradient${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                        <stop offset="0%" stopColor="#FD7B41" />
                                                        <stop offset="100%" stopColor="#EDBF9B" />
                                                    </linearGradient>
                                                </defs>
                                            </svg>
                                        </div>
                                    </div>
                                    <div className="industry-text-content">
                                        <h3>{industry.name}</h3>
                                        <p>{industry.description}</p>
                                        <div className="use-cases">
                                            {industry.useCases.map((useCase, i) => (
                                                <span key={i} className="use-case-pill">{useCase}</span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Navigation arrows */}
                <button className="carousel-nav prev" onClick={prevSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="15 18 9 12 15 6"></polyline>
                    </svg>
                </button>
                <button className="carousel-nav next" onClick={nextSlide}>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="9 18 15 12 9 6"></polyline>
                    </svg>
                </button>

                {/* Progress indicator */}
                <div className="carousel-progress">
                    {industries.map((_, idx) => (
                        <div
                            key={idx}
                            className={`progress-dot ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(idx)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
