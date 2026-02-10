import React, { useEffect, useState } from 'react';
import './TargetAudience.css';

const industries = [
    { name: 'SaaS & Technology', icon: '💻' },
    { name: 'Banking / FinTech', icon: '🏦' },
    { name: 'E-Commerce & Retail', icon: '🛍️' },
    { name: 'Healthcare', icon: '🏥' },
    { name: 'Telecom & Media', icon: '📡' },
    { name: 'Enterprise IT', icon: '🏢' }
];

const TargetAudience = () => {
    return (
        <section id="industries" className="section industries-section">
            <div className="container">
                <div className="impact-snapshot" style={{ marginBottom: '5rem' }}>
                    <div className="section-header center">
                        <h2>Impact <span style={{ color: 'var(--color-primary)' }}>Snapshot</span></h2>
                    </div>
                    <div className="impact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem', textAlign: 'center' }}>
                        <div className="impact-item">
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>100x</h3>
                            <p>Faster test creation</p>
                        </div>
                        <div className="impact-item">
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>AI</h3>
                            <p>Automated quality evaluation</p>
                        </div>
                        <div className="impact-item">
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Auto</h3>
                            <p>Continuous test maintenance</p>
                        </div>
                        <div className="impact-item">
                            <h3 style={{ fontSize: '2.5rem', color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Scale</h3>
                            <p>Enterprise-ready security</p>
                        </div>
                    </div>
                </div>

                <div className="section-header center">
                    <h2>Industries <span style={{ color: 'var(--color-primary)' }}>We Serve</span></h2>
                </div>

                <div className="industry-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    {industries.map((industry, idx) => (
                        <div key={idx} className="industry-icon-card" style={{
                            background: 'rgba(255, 255, 255, 0.03)',
                            border: '1px solid rgba(255, 255, 255, 0.05)',
                            borderRadius: '16px',
                            padding: '2rem',
                            textAlign: 'center',
                            transition: 'transform 0.3s ease, background 0.3s ease'
                        }}>
                            <div className="industry-icon" style={{ fontSize: '3rem', marginBottom: '1rem' }}>
                                {industry.icon}
                            </div>
                            <h3 style={{ fontSize: '1.1rem' }}>{industry.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TargetAudience;
