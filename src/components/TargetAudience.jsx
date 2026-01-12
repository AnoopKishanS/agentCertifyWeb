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
        <section id="industry" className="industry-carousel-section">
            <div className="industry-header">
                <h2>Every Industry needs <span style={{ color: 'var(--color-primary)' }}>AgentCertify</span>.</h2>
                <p>It adapts validation protocols to your specific domain requirements.</p>
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
                                        {industry.name === 'E-Commerce' ? (
                                            <div className="illustration-3d-wrapper">
                                                <img
                                                    src="/assets/ecommerce-3d.png"
                                                    alt="Ecommerce 3D Illustration"
                                                    className="illustration-3d illustration-ecommerce"
                                                />
                                            </div>
                                        ) : industry.name === 'Healthcare' ? (
                                            <div className="illustration-3d-wrapper">
                                                <img
                                                    src="/assets/healthcare-3d.png"
                                                    alt="Healthcare 3D Illustration"
                                                    className="illustration-3d"
                                                />
                                            </div>
                                        ) : industry.name === 'FinTech' ? (
                                            <div className="illustration-3d-wrapper">
                                                <img
                                                    src="/assets/fintech-3d.png"
                                                    alt="FinTech 3D Illustration"
                                                    className="illustration-3d"
                                                />
                                            </div>
                                        ) : industry.name === 'Enterprise' ? (
                                            <div className="illustration-3d-wrapper">
                                                <img
                                                    src="/assets/enterprise-3d.png"
                                                    alt="Enterprise 3D Illustration"
                                                    className="illustration-3d"
                                                />
                                            </div>
                                        ) : industry.name === 'SaaS & Cloud' ? (
                                            <div className="illustration-3d-wrapper">
                                                <img
                                                    src="/assets/cloud-3d.png"
                                                    alt="SaaS & Cloud 3D Illustration"
                                                    className="illustration-3d"
                                                />
                                            </div>
                                        ) : (
                                            <div className="illustration-placeholder">
                                                <svg width="400" height="400" viewBox="0 0 300 300" fill="none">
                                                    <circle cx="150" cy="150" r="120" fill={`url(#gradient${idx})`} opacity="0.1" />
                                                    <circle cx="150" cy="150" r="90" fill={`url(#gradient${idx})`} opacity="0.2" />
                                                    <circle cx="150" cy="150" r="60" fill={`url(#gradient${idx})`} opacity="0.3" />
                                                    <defs>
                                                        <linearGradient id={`gradient${idx}`} x1="0%" y1="0%" x2="100%" y2="100%">
                                                            <stop offset="0%" stopColor="#5E5653" />
                                                            <stop offset="100%" stopColor="#AB978C" />
                                                        </linearGradient>
                                                    </defs>
                                                </svg>
                                            </div>
                                        )}
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

                {/* New Tab Navigation */}
                <div className="carousel-tabs">
                    {industries.map((industry, idx) => (
                        <button
                            key={idx}
                            className={`carousel-tab-item ${idx === currentIndex ? 'active' : ''}`}
                            onClick={() => goToSlide(idx)}
                        >
                            <span className="tab-name">{industry.name}</span>
                        </button>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
