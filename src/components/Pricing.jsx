import React from 'react';
import ScrollReveal from './ScrollReveal';
import Footer from './Footer';
import './Pricing.css';

const plans = [
    {
        name: 'Starter',
        price: 'Flexible',
        period: '',
        desc: 'Ideal for small teams looking to start their automation journey.',
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
        price: 'Usage-Based',
        period: '',
        desc: 'Growing organizations needing scale and speed.',
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
        desc: 'Advanced security, compliance, and global scale.',
        features: [
            'Everything in Professional',
            'On-Premise / VPC Deployment',
            'SSO & Granular RBAC',
            'Dedicated Success Manager',
            'Custom Invoicing & SLAs',
            '24/7 Premium Support'
        ]
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section bg-alt pricing-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header center">
                        <h2 className="text-gradient">Flexible Pricing</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
                            Pay for what you use. Scale as you grow.
                        </p>
                    </div>
                </ScrollReveal>

                <div className="pricing-grid">
                    {plans.map((plan, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${(idx * 100) + 100}`} className={`pricing-card-wrapper`}>
                            <div className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                                <div className="card-header">
                                    <h3>{plan.name}</h3>
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
