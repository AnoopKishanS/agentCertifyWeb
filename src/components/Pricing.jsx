import React from 'react';
import ScrollReveal from './ScrollReveal';
import './Pricing.css';

const plans = [
    {
        name: 'Basic',
        price: 'Free',
        features: ['50 Test Runs / mo', 'Basic AI Analysis', 'Community Support']
    },
    {
        name: 'Pro',
        price: '$49',
        features: ['Unlimited Test Runs', 'Deep Flow Analysis', 'CI/CD Integration', 'Priority Support'],
        highlight: true
    },
    {
        name: 'Enterprise',
        price: 'Custom',
        features: ['On-premise Deployment', 'Dedicated Success Manager', 'SSO & Audit Logs', 'SLA Guarantees']
    }
];

const Pricing = () => {
    return (
        <section className="section bg-alt pricing-section">
            <div className="container">
                <ScrollReveal animation="slide-left">
                    <div className="section-header center">
                        <h2>Plans that scale with your team</h2>
                        <button className="btn btn-primary btn-lg" style={{ marginTop: '24px' }}>Request Demo</button>
                    </div>
                </ScrollReveal>

                <div className="pricing-grid">
                    {plans.map((plan, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${(idx * 100) + 100}`} className={`pricing-card-wrapper`}>
                            <div className={`pricing-card ${plan.highlight ? 'highlight' : ''}`}>
                                <h3>{plan.name}</h3>
                                <div className="price">{plan.price}</div>
                                <ul className="features-list">
                                    {plan.features.map((feat, i) => (
                                        <li key={i}>✓ {feat}</li>
                                    ))}
                                </ul>
                                <button className={`btn ${plan.highlight ? 'btn-primary' : 'btn-secondary'}`} style={{ width: '100%' }}>
                                    {plan.highlight ? 'Start Free Trial' : 'Contact Sales'}
                                </button>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
