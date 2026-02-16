import React from 'react';
import { useLocation } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const { pathname } = useLocation();
    const isHome = pathname === '/';

    return (
        <footer className={`footer ${!isHome ? 'footer-no-cta' : ''}`}>
            {isHome && (
                <div className="footer-cta">
                    <h1>Transform Your Testing</h1>
                    <button className="btn btn-primary btn-lg">Get Started</button>
                </div>
            )}

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
                            <a href="#blog">Blog</a>
                        </div>
                        <div className="footer-col">
                            <h5>Contact</h5>
                            <a href="mailto:info@solvik.ai">info@solvik.ai</a>
                            <div className="footer-address-info" style={{ marginTop: '16px' }}>
                                <p style={{ fontSize: '0.9rem', color: 'var(--color-text-light)', lineHeight: '1.5' }}>
                                    Solvik AI Solutions<br />
                                    RMZ Millenia Business Park,<br />
                                    OMR Road, Kandancavadi,<br />
                                    Chennai, TN 600096
                                </p>
                            </div>
                        </div>
                        <div className="footer-col map-col">
                            <div className="footer-map-mini">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1414.731776964121!2d80.24436853241477!3d12.96222879654117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6f6e5e8f47%3A0x6b8a8b1b1b1b1b1b!2sRMZ%20Millenia%20Business%20Park!5e0!3m2!1sen!2sin!4v1718280000000!5m2!1sen!2sin"
                                    width="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Solvik Office Location"
                                ></iframe>
                            </div>
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
