import React, { useState, useEffect } from 'react';
import './HeroAnimation.css';

const HeroAnimation = () => {
    const [step, setStep] = useState(0);

    // Cycle through 4 steps: 0=Connect, 1=Analyze (Complex), 2=Generate, 3=Execute
    useEffect(() => {
        const timer = setInterval(() => {
            setStep((prev) => (prev + 1) % 4);
        }, 4000); // Increased duration to 4s to let animations play out
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="hero-animation-container">
            {/* Floating Elements for Parallax Depth */}
            <div className="ha-floating-badge badge-1">
                <span>AI Agent</span>
            </div>
            <div className="ha-floating-badge badge-2">
                <span>Coverage</span>
            </div>

            {/* Frameless animation content - no window shell */}
            <div className="ha-content">
                {/* Step 0: Connect */}
                <div className={`ha-stage stage-connect ${step === 0 ? 'active' : ''}`}>
                    <div className="ha-app-icon">
                        <span className="ha-icon-label">www.YourApp.com</span>
                    </div>
                    <div className="ha-connection-stream">
                        {/* Downward stream */}
                        <div className="stream-particle down-p1"></div>
                        <div className="stream-particle down-p2"></div>
                        {/* Upward stream */}
                        <div className="stream-particle up-p1"></div>
                        <div className="stream-particle up-p2"></div>
                    </div>
                    <div className="ha-agent-icon">
                        <span><span style={{ color: 'var(--color-primary)' }}>Solvik</span>'s Consciousness</span>
                    </div>
                    <div className="ha-status-pill">Establishing Bidirectional Link</div>
                </div>

                {/* Step 1: Mapping & Intelligence - Cosmic Graph */}
                <div className={`ha-stage stage-analyze ${step === 1 ? 'active' : ''}`}>
                    <div className="orbit-container">
                        {/* Central Cognitive Core */}
                        <div className="cognitive-core"></div>

                        {/* Orbit Rings */}
                        <div className="orbit-ring r1"></div>
                        <div className="orbit-ring r2"></div>

                        {/* Interconnected Orbiting Nodes */}
                        <div className="orbit-node node-a"></div>
                        <div className="orbit-node node-b"></div>
                        <div className="orbit-node node-c"></div>
                        <div className="orbit-node node-d"></div>
                        <div className="orbit-node node-e"></div>

                        {/* Neural Connections - All Dots Connected to Core and each other */}
                        <svg className="neural-web" viewBox="0 0 300 300">
                            {/* Connections to Core (Center 150,150) */}
                            <line x1="150" y1="150" x2="80" y2="80" className="neural-path" />
                            <line x1="150" y1="150" x2="220" y2="80" className="neural-path" />
                            <line x1="150" y1="150" x2="220" y2="220" className="neural-path" />
                            <line x1="150" y1="150" x2="80" y2="220" className="neural-path" />
                            <line x1="150" y1="150" x2="40" y2="150" className="neural-path" />

                            {/* Connections between nodes */}
                            <line x1="80" y1="80" x2="220" y2="80" className="neural-path" />
                            <line x1="220" y1="80" x2="220" y2="220" className="neural-path" />
                            <line x1="220" y1="220" x2="80" y2="220" className="neural-path" />
                            <line x1="80" y1="220" x2="40" y2="150" className="neural-path" />
                            <line x1="40" y1="150" x2="80" y2="80" className="neural-path" />
                        </svg>
                    </div>
                    <div className="ha-status-pill">Discovering Application</div>
                </div>

                {/* Step 2: Generate Tests */}
                <div className={`ha-stage stage-generate ${step === 2 ? 'active' : ''}`}>
                    <div className="test-grid">
                        <div className="ha-test-card c1 unit">
                            <div className="tc-header">
                                <div className="tc-tag">Unit</div>
                                <div className="tc-status"></div>
                            </div>
                            <div className="tc-title">Verify Login</div>
                        </div>
                        <div className="ha-test-card c2 e2e">
                            <div className="tc-header">
                                <div className="tc-tag">E2E</div>
                                <div className="tc-status"></div>
                            </div>
                            <div className="tc-title">Checkout Flow</div>
                        </div>
                        <div className="ha-test-card c3 edge">
                            <div className="tc-header">
                                <div className="tc-tag">Edge</div>
                                <div className="tc-status"></div>
                            </div>
                            <div className="tc-title">Invalid Input</div>
                        </div>
                        <div className="ha-test-card c4 perf">
                            <div className="tc-header">
                                <div className="tc-tag">Perf</div>
                                <div className="tc-status"></div>
                            </div>
                            <div className="tc-title">Load Test</div>
                        </div>
                    </div>
                    <div className="ha-status-pill">Test Cases Generated</div>
                </div>

                {/* Step 3: Execute */}
                <div className={`ha-stage stage-execute ${step === 3 ? 'active' : ''}`}>
                    <div className="ha-dashboard-split">
                        <div className="ha-run-list">
                            <div className="ha-run-item pass">
                                <div className="ri-spinner spin-done"></div>
                                <div className="ri-text">Auth Module</div>
                            </div>
                            <div className="ha-run-item pass">
                                <div className="ri-spinner spin-done"></div>
                                <div className="ri-text">User Profile</div>
                            </div>
                            <div className="ha-run-item pass">
                                <div className="ri-spinner spin-done"></div>
                                <div className="ri-text">Payment Gateway</div>
                            </div>
                            <div className="ha-run-item running">
                                <div className="ri-spinner"></div>
                                <div className="ri-text">Reporting...</div>
                            </div>
                        </div>
                        <div className="ha-stats-panel">
                            <div className="stats-card">
                                <div className="stat-row">
                                    <div className="stat-label">Passed</div>
                                    <div className="stat-value passed">42</div>
                                </div>
                                <div className="stat-row">
                                    <div className="stat-label">Failed</div>
                                    <div className="stat-value failed">1</div>
                                </div>
                                <div className="stat-divider"></div>
                                <div className="stat-row total">
                                    <div className="stat-label">Success Rate</div>
                                    <div className="stat-value">98%</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="ha-status-pill">Executing Test Suite</div>
                </div>
            </div>
        </div>
    );
};

export default HeroAnimation;
