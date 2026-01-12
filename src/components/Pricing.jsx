import React from 'react';
import ScrollReveal from './ScrollReveal';
import Footer from './Footer';
import './Pricing.css';

const plans = [
    {
        name: 'Startup',
        price: '$1,000',
        period: '/ mo',
        desc: 'For small teams needing autonomous quality assurance.',
        features: [
            '1 Autonomous QA Agent',
            'Up to 1,000 Test Executions / mo',
            'Basic User Flow Discovery',
            'Slack & Jira Integration',
            'Weekly Quality Reports'
        ]
    },
    {
        name: 'Scale',
        price: '$2,500',
        period: '/ mo',
        desc: 'For growing engineering organizations shipping daily.',
        features: [
            '3 Autonomous QA Agents',
            'Up to 10,000 Test Executions / mo',
            'Deep Semantic Application Mapping',
            'Self-Healing Test Scripts',
            'CI/CD Pipeline Integration',
            'Priority Support Channel'
        ],
        highlight: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        desc: 'Global scale, security compliance, and dedicated support.',
        features: [
            'Unlimited Autonomous QA Agents',
            'Unlimited Parallel Executions',
            'On-Premise / VPC Deployment',
            'SSO & Granular RBAC',
            'Dedicated Success Manager',
            'Custom Invoicing & SLAs'
        ]
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section bg-alt pricing-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header center">
                        <h2>Flexible Plans to Hire Her</h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
                            Deploy MadameQA to your team for a fraction of the cost of a traditional QA engineer, with 24/7 availability.
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
                                        {plan.price === 'Custom' ? 'Contact Sales' : 'Hire MadameQA'}
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
