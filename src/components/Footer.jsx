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
                            <h4><span style={{ color: 'var(--color-primary)' }}>Solvik</span></h4>
                            <p className="footer-desc">AI-powered testing that really understands your application.</p>
                            <div className="social-links-container">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="Twitter">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                                </a>
                                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                                </a>
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
