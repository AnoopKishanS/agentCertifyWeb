import React, { useState, useEffect } from 'react';
import ScrollReveal from './ScrollReveal';
import Footer from './Footer';
import './Pricing.css';

const plans = [
    {
        name: 'Starter',
        price: 'Standard',
        period: '',
        desc: 'Ideal for small teams',
        features: [
            'Autonomous User Flow Discovery',
            'Up to 500 Test Executions / mo',
            'Full Maintenance Support',
            'Slack & Jira Integration',
            'Standard Quality Insights'
        ]
    },
    {
        name: 'Professional',
        price: 'Growth',
        period: '',
        desc: 'Growing organizations',
        features: [
            'Everything in Starter',
            'Unlimited Parallel Executions',
            'Priority CI/CD Support',
            'Deep Semantic Application Mapping',
            'Self-Healing Test Scripts',
            'Advanced Security Insights'
        ],
        highlight: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        desc: 'Advanced security & scale',
        features: [
            'Everything in Professional',
            'On-Premise / VPC Deployment',
            'SSO & Granular RBAC',
            'Dedicated Success Manager',
            'Custom Invoicing & SLAs',
            '24/7 Premium Support'
        ]
    },
    {
        name: 'Flexible Pricing',
        price: 'Usage-Based',
        period: '',
        desc: 'Pay for what you use. Scale as you grow.',
        features: [
            'On-Demand Test Executions',
            'No Monthly Commitments',
            'Burst Capacity Support',
            'Dynamic Resource Scaling',
            'Real-time Usage Billing',
            'Full Enterprise API Access'
        ]
    }
];

const Pricing = () => {
    const [activePlan, setActivePlan] = useState(0); // Default to Starter
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 900);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 900);
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Auto-advance active plan on mobile every 4s
    useEffect(() => {
        if (!isMobile || !isAutoPlaying) return;
        const t = setInterval(() => setActivePlan(prev => (prev + 1) % plans.length), 4000);
        return () => clearInterval(t);
    }, [isMobile, isAutoPlaying]);

    const handleTabClick = (idx) => {
        setActivePlan(idx);
        setIsAutoPlaying(false); // Stop auto-play on manual interaction
    };

    return (
        <section id="pricing" className="section bg-alt pricing-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header center">
                        <h2 className="text-gradient">Choose Your Plan</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
                            Flexible options tailored to your engineering needs.
                        </p>
                    </div>
                </ScrollReveal>

                {/* Mobile Tab Selectors */}
                <div className="pricing-mobile-tabs">
                    {plans.map((plan, idx) => (
                        <button
                            key={idx}
                            className={`pricing-tab-btn ${activePlan === idx ? 'active' : ''}`}
                            onClick={() => handleTabClick(idx)}
                        >
                            {plan.name}
                        </button>
                    ))}
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, idx) => (
                        <ScrollReveal
                            key={idx}
                            animation="fade-up"
                            delay={`${(idx * 100) + 100}`}
                            className={`pricing-card-wrapper ${activePlan === idx ? 'mobile-visible' : 'mobile-hidden'}`}
                        >
                            <div
                                className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}
                            >
                                <div className="card-header">
                                    <div className="mobile-header-trigger">
                                        <h3>{plan.name}</h3>
                                    </div>
                                    <p className="plan-desc">{plan.desc}</p>
                                    <div className="price">
                                        {plan.price}
                                        <span className="period">{plan.period}</span>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <ul className="features-list">
                                        {plan.features.map((feat, i) => (
                                            <li key={i}>
                                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="check-icon">
                                                    <polyline points="20 6 9 17 4 12"></polyline>
                                                </svg>
                                                {feat}
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                                <div className="card-footer">
                                    <button className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                                        {plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Pricing;
