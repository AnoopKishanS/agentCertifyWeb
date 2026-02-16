import React from 'react';
import './Integrations.css';

const integrations = [
    { name: 'Jira', color: '#0052CC' },
    { name: 'GitHub', color: '#181717' },
    { name: 'Slack', color: '#4A154B' },
    { name: 'GitLab', color: '#FC6D26' }
];

const Integrations = () => {
    return (
        <section className="section integrations-section">
            <div className="container">
                <div className="section-header center">
                    <h2><span style={{ color: 'var(--color-primary)' }}>Solvik</span> joins your team... seamlessly.</h2>
                    <p className="section-subtitle">No complex onboarding. Solvik connects with your stack like it's been there from Day 1.</p>
                </div>
                <div className="integrations-grid">
                    {integrations.map((tool) => (
                        <div className="integration-card" key={tool.name}>
                            <div className="integration-logo-placeholder" style={{ backgroundColor: tool.color }}>
                                {tool.name[0]}
                            </div>
                            <span>{tool.name}</span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Integrations;
