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
            {/* Floating Elements for Parallax Depth (handled in CSS/Parent usually, but we'll add local movement) */}
            <div className="ha-floating-badge badge-1">
                <span>AI Agent</span>
            </div>
            <div className="ha-floating-badge badge-2">
                <span>Coverage</span>
            </div>

            <div className="ha-animation-content">
                {/* Step 0: Connect */}
                <div className={`ha-stage stage-connect ${step === 0 ? 'active' : ''}`}>
                    <div className="ha-app-icon">
                        <span className="ha-icon-label">Your App</span>
                    </div>
                    <div className="ha-connection-stream">
                        <div className="stream-particle p1"></div>
                        <div className="stream-particle p2"></div>
                        <div className="stream-particle p3"></div>
                    </div>
                    <div className="ha-agent-icon">
                        <span>Brain</span>
                    </div>
                    <div className="ha-status-pill">Est. Connection...</div>
                </div>

                {/* Step 1: Understand/Analyze (ENHANCED) */}
                <div className={`ha-stage stage-analyze ${step === 1 ? 'active' : ''}`}>
                    <div className="analyze-layout">
                        {/* Left: UI Mockup being scanned */}
                        <div className="ha-wireframe-lg">
                            <div className="wf-nav"></div>
                            <div className="wf-hero-lg"></div>
                            <div className="wf-row">
                                <div className="wf-col"></div>
                                <div className="wf-col"></div>
                            </div>
                            {/* Scanning Overlay */}
                            <div className="ha-scan-overlay"></div>
                            {/* Detected Nodes popping up */}
                            <div className="detected-node dn-1"></div>
                            <div className="detected-node dn-2"></div>
                            <div className="detected-node dn-3"></div>
                        </div>

                        {/* Right: DOM/Graph Tree building up */}
                        <div className="ha-structure-tree">
                            <div className="tree-node root"></div>
                            <div className="tree-branch b1"></div>
                            <div className="tree-node child c1"></div>
                            <div className="tree-branch b2"></div>
                            <div className="tree-node child c2"></div>
                            <div className="tree-branch b3"></div>
                            <div className="tree-node child c3"></div>
                        </div>
                    </div>
                    <div className="ha-status-pill">Building Application Graph...</div>
                </div>

                {/* Step 2: Generate Tests */}
                <div className={`ha-stage stage-generate ${step === 2 ? 'active' : ''}`}>
                    <div className="test-grid">
                        <div className="ha-test-card c1">
                            <div className="tc-header">
                                <div className="tc-tag">Unit</div>
                            </div>
                            <div className="tc-title">Verify Login</div>
                        </div>
                        <div className="ha-test-card c2">
                            <div className="tc-header">
                                <div className="tc-tag">E2E</div>
                            </div>
                            <div className="tc-title">Checkout Flow</div>
                        </div>
                        <div className="ha-test-card c3">
                            <div className="tc-header">
                                <div className="tc-tag">Edge</div>
                            </div>
                            <div className="tc-title">Invalid Input</div>
                        </div>
                        <div className="ha-test-card c4">
                            <div className="tc-header">
                                <div className="tc-tag">Perf</div>
                            </div>
                            <div className="tc-title">Load Test</div>
                        </div>
                    </div>
                    <div className="ha-status-pill">Generated 42 Test Cases</div>
                </div>

                {/* Step 3: Execute */}
                <div className={`ha-stage stage-execute ${step === 3 ? 'active' : ''}`}>
                    <div className="ha-dashboard-split">
                        <div className="ha-run-list">
                            <div className="ha-run-item pass">
                                <div className="ri-spinner spin-done">✓</div>
                                <div className="ri-text">Auth Module</div>
                            </div>
                            <div className="ha-run-item pass">
                                <div className="ri-spinner spin-done">✓</div>
                                <div className="ri-text">User Profile</div>
                            </div>
                            <div className="ha-run-item pass">
                                <div className="ri-spinner spin-done">✓</div>
                                <div className="ri-text">Payment Gat...</div>
                            </div>
                            <div className="ha-run-item running">
                                <div className="ri-spinner"></div>
                                <div className="ri-text">Reporting...</div>
                            </div>
                        </div>
                        <div className="ha-stats-panel">
                            <div className="stat-donut">
                                <div className="stat-inner">98%</div>
                            </div>
                            <div className="stat-legend">
                                <div className="sl-item"><span className="dot pl-pass"></span>Pass</div>
                                <div className="sl-item"><span className="dot pl-fail"></span>Fail</div>
                            </div>
                        </div>
                    </div>
                    <div className="ha-status-pill">Executing Suite...</div>
                </div>
            </div>
        </div>
    );
};

export default HeroAnimation;
