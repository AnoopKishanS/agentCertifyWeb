import React from 'react';
import ScrollReveal from './ScrollReveal';
import Footer from './Footer';
import './Pricing.css';

const plans = [
    {
        name: 'Starter',
        price: 'Ideal',
        period: '',
        desc: 'For small teams needing intelligent test automation.',
        features: [
            'Basic User Flow Discovery',
            'AI Test Generation',
            'Standard Quality Insights',
            'Slack & Jira Integration',
            'Email Support'
        ]
    },
    {
        name: 'Professional',
        price: 'Scale',
        period: '',
        desc: 'For growing organizations shipping daily with confidence.',
        features: [
            'Deep Application Mapping',
            'Self-Healing Test Scripts',
            'Continuous Integration',
            'Advanced Quality Metrics',
            'Priority Support Channel'
        ],
        highlight: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        period: '',
        desc: 'Advanced security, global scale, and dedicated support.',
        features: [
            'Unlimited Parallel Executions',
            'On-Premise Deployment',
            'SSO & Granular RBAC',
            'Custom Compliance Reports',
            'Dedicated Success Manager'
        ]
    }
];

const Pricing = () => {
    return (
        <section id="pricing" className="section bg-alt pricing-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header center">
                        <h2>Flexible <span style={{ color: 'var(--color-primary)' }}>Pricing</span></h2>
                        <p style={{ maxWidth: '600px', margin: '0 auto 40px' }}>
                            Pay for what you use. Scale as you grow. Choose a plan that fits your testing needs.
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
                                        {plan.price === 'Custom' ? 'Contact Sales' : 'Get Started'}
                                    </button>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
                <ScrollReveal animation="fade-up" delay="500">
                    <div className="center" style={{ marginTop: '3rem' }}>
                        <p style={{ fontSize: '1.2rem', fontWeight: '500' }}>
                            👉 Contact Sales for Custom Plans
                        </p>
                    </div>
                </ScrollReveal>
            </div>
        </section >
    );
};

export default Pricing;
