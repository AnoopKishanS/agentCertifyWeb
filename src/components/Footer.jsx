import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-grid-container">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h4>Solvik</h4>
                            <p className="footer-desc" style={{ maxWidth: '250px' }}>AI-powered testing that understands your application automatically.</p>
                            <div className="social-links" style={{ display: 'flex', gap: '1rem', marginTop: '1rem' }}>
                                <a href="#">Twitter</a>
                                <a href="#">GitHub</a>
                                <a href="#">LinkedIn</a>
                            </div>
                        </div>
                        <div className="footer-col">
                            <h5>Product</h5>
                            <a href="#home">Home</a>
                            <a href="#product">Product</a>
                            <a href="#features">Features</a>
                            <a href="#pricing">Pricing</a>
                        </div>
                        <div className="footer-col">
                            <h5>Resources</h5>
                            <a href="#blog">Blog</a>
                            <a href="#">Documentation</a>
                            <a href="#">Security</a>
                        </div>
                        <div className="footer-col">
                            <h5>Company</h5>
                            <a href="#about">About Us</a>
                            <a href="#contact">Contact</a>
                            <a href="#">Privacy Policy</a>
                            <a href="#">Terms of Service</a>
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
