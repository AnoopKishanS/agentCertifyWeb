import React from 'react';
import { useModal } from '../context/ModalContext';
import ScrollReveal from './ScrollReveal';
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
        popular: true,
        features: [
            'Everything in Starter',
            'Unlimited Test Executions',
            'Priority Email & Slack Support',
            'Custom Feature Discovery',
            'Advanced Security Evaluation'
        ]
    },
    {
        name: 'Enterprise',
        price: 'Bespoke',
        period: '',
        desc: 'Advanced security & scale',
        features: [
            'Everything in Professional',
            'Dedicated Account Manager',
            'Self-Hosted Option Available',
            'SSO & Advanced Governance',
            '24/7 Priority Support'
        ]
    },
    {
        name: 'Flexible Pricing',
        price: 'Usage-Based',
        period: '',
        desc: 'Pay for what you use.',
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
    const { openModal } = useModal();

    return (
        <section id="pricing" className="section pricing-section bg-alt">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="section-header center">
                        <span className="eyebrow-label">PRICING</span>
                        <h2 className="text-gradient">Flexible Pricing</h2>
                        <p className="page-subtitle center" style={{ marginTop: '10px' }}>Pay for what you use. Scale as you grow.</p>
                    </div>
                </ScrollReveal>

                <div className="pricing-grid">
                    {plans.map((plan, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${(idx * 100) + 100}`}>
                            <div className={`pricing-card ${plan.popular ? 'popular' : ''}`}>
                                {plan.popular && <div className="popular-badge">MOST POPULAR</div>}
                                <div className="plan-name">{plan.name}</div>
                                <div className="plan-price-container">
                                    <span className="plan-price">{plan.price}</span>
                                    <span className="plan-period">{plan.period}</span>
                                </div>
                                <p className="plan-desc">{plan.desc}</p>
                                <ul className="plan-features">
                                    {plan.features.map((feature, fIdx) => (
                                        <li key={fIdx}>
                                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                <polyline points="20 6 9 17 4 12" />
                                            </svg>
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <button className={`btn ${plan.popular ? 'btn-primary' : 'btn-outline'} btn-block`} onClick={openModal}>
                                    Get Started
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
