import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-cta">
                <h1>Transform Your Testing</h1>
                <button className="btn btn-primary btn-lg">Get Started</button>
            </div>

            <div className="footer-grid-container">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h4>Sol<span style={{ color: 'var(--color-primary)' }}>vik</span></h4>
                            <p className="footer-desc">AI-powered testing that really understands your application.</p>
                            <div className="social-links">
                                {/* Social icons placeholders */}
                                <span>Twitter</span>
                                <span>GitHub</span>
                                <span>LinkedIn</span>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h5>Platform</h5>
                            <a href="#about">Solvik</a>
                            <a href="#features">Features</a>
                            <a href="#how-it-works">How it Works</a>
                            <a href="#industry">Industry</a>
                            <a href="#pricing">Pricing</a>
                        </div>
                        <div className="footer-col">
                            <h5>Contact</h5>
                            <a href="mailto:info@solvik.ai">info@solvik.ai</a>
                            <span>Phone: Coming Soon</span>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} Solvik. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
