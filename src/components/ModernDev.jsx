import React from 'react';
import ScrollReveal from './ScrollReveal';
import './ModernDev.css';

const ModernDev = () => {
    return (
        <section id="modern-dev" className="modern-dev-section">
            <div className="container">
                <div className="modern-dev-content">
                    <ScrollReveal animation="slide-left">
                        <div className="modern-dev-text">
                            <span className="modern-dev-badge">BUILT FOR TODAY</span>
                            <h2 className="modern-dev-title">
                                Fast-Paced Development.<br />
                                <span className="text-gradient">Fearless Deployment.</span>
                            </h2>
                            <p className="modern-dev-description">
                                In today's world of continuous deployment, daily releases, and rapid iterations, 
                                your testing can't be the bottleneck. Solvik is designed for teams who ship fast 
                                and break things—then fix them even faster.
                            </p>
                            
                            <div className="modern-dev-features">
                                <div className="dev-feature">
                                    <div className="dev-feature-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polyline points="16 18 22 12 16 6"></polyline>
                                            <polyline points="8 6 2 12 8 18"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>CI/CD Native</h4>
                                        <p>Integrates seamlessly with GitHub Actions, GitLab CI, Jenkins, and more</p>
                                    </div>
                                </div>

                                <div className="dev-feature">
                                    <div className="dev-feature-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <polyline points="12 6 12 12 16 14"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Real-Time Feedback</h4>
                                        <p>Get instant test results in your pull requests and Slack channels</p>
                                    </div>
                                </div>

                                <div className="dev-feature">
                                    <div className="dev-feature-icon">
                                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                                            <polyline points="22 4 12 14.01 9 11.01"></polyline>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4>Zero Config</h4>
                                        <p>Start testing in minutes, not days. No complex setup or maintenance</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-right" delay="200">
                        <div className="modern-dev-visual">
                            <div className="code-window">
                                <div className="code-window-header">
                                    <div className="window-dots">
                                        <span className="dot dot-red"></span>
                                        <span className="dot dot-yellow"></span>
                                        <span className="dot dot-green"></span>
                                    </div>
                                    <span className="window-title">continuous-deployment.yml</span>
                                </div>
                                <div className="code-window-body">
                                    <div className="code-line">
                                        <span className="line-number">1</span>
                                        <span className="code-text"><span className="code-key">name:</span> Deploy & Test</span>
                                    </div>
                                    <div className="code-line">
                                        <span className="line-number">2</span>
                                        <span className="code-text"><span className="code-key">on:</span> [push, pull_request]</span>
                                    </div>
                                    <div className="code-line">
                                        <span className="line-number">3</span>
                                        <span className="code-text"></span>
                                    </div>
                                    <div className="code-line">
                                        <span className="line-number">4</span>
                                        <span className="code-text"><span className="code-key">jobs:</span></span>
                                    </div>
                                    <div className="code-line">
                                        <span className="line-number">5</span>
                                        <span className="code-text">  <span className="code-key">test:</span></span>
                                    </div>
                                    <div className="code-line highlight">
                                        <span className="line-number">6</span>
                                        <span className="code-text">    - <span className="code-key">uses:</span> solvik/test-action@v1</span>
                                    </div>
                                    <div className="code-line highlight">
                                        <span className="line-number">7</span>
                                        <span className="code-text">      <span className="code-key">with:</span></span>
                                    </div>
                                    <div className="code-line highlight">
                                        <span className="line-number">8</span>
                                        <span className="code-text">        <span className="code-key">coverage:</span> <span className="code-value">full</span></span>
                                    </div>
                                </div>
                            </div>
                            
                            <div className="stats-overlay">
                                <div className="stat-badge">
                                    <span className="stat-icon">⚡</span>
                                    <div>
                                        <div className="stat-value">3.2s</div>
                                        <div className="stat-label">Avg Test Time</div>
                                    </div>
                                </div>
                                <div className="stat-badge">
                                    <span className="stat-icon">✓</span>
                                    <div>
                                        <div className="stat-value">99.8%</div>
                                        <div className="stat-label">Success Rate</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default ModernDev;
