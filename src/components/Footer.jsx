import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-cta">
                <h1>Talk to Her</h1>
                <button className="btn btn-primary btn-lg">Contact Sales</button>
            </div>

            <div className="footer-grid-container">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h4>Madame<span style={{ color: 'var(--color-primary)' }}>QA</span></h4>
                            <p className="footer-desc">Automated AI testing for modern engineering teams.</p>
                            <div className="social-links">
                                {/* Social icons placeholders */}
                                <span>Twitter</span>
                                <span>GitHub</span>
                                <span>LinkedIn</span>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h5>Product</h5>
                            <a href="#">Features</a>
                            <a href="#">Integrations</a>
                            <a href="#">Pricing</a>
                            <a href="#">Changelog</a>
                        </div>
                        <div className="footer-col">
                            <h5>Resources</h5>
                            <a href="#">Documentation</a>
                            <a href="#">API Reference</a>
                            <a href="#">Blog</a>
                            <a href="#">Community</a>
                        </div>
                        <div className="footer-col">
                            <h5>Company</h5>
                            <a href="#">About</a>
                            <a href="#">Careers</a>
                            <a href="#">Legal</a>
                            <a href="#">Contact</a>
                        </div>
                    </div>
                    <div className="footer-bottom">
                        <p>&copy; {new Date().getFullYear()} MadameQA. All rights reserved.</p>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
