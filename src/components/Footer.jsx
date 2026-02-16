import React from 'react';
import { Link } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import './Footer.css';

const Footer = () => {
    const { openModal } = useModal();

    return (
        <footer className="footer">
            <div className="footer-cta">
                <h1>Transform Your Testing</h1>
                <button onClick={openModal} className="btn btn-primary btn-lg">Get Started</button>
            </div>

            <div className="footer-grid-container">
                <div className="container">
                    <div className="footer-grid">
                        <div className="footer-col">
                            <h4 className="footer-title">Platform</h4>
                            <ul className="footer-links">
                                <li><Link to="/product">Product Features</Link></li>
                                <li><Link to="/about">About Solvik</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className="footer-title">Company</h4>
                            <ul className="footer-links">
                                <li><Link to="/about">About Us</Link></li>
                                <li><Link to="/blog">Blog</Link></li>
                            </ul>
                        </div>
                        <div className="footer-col">
                            <h4 className="footer-title">Office</h4>
                            <p className="footer-text">
                                Solvik AI Solutions<br />
                                RMZ Millenia Business Park,<br />
                                OMR Road, Kandancavadi,<br />
                                Chennai, TN 600096
                            </p>
                        </div>
                        <div className="footer-col map-col">
                            <div className="footer-map-mini">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1414.731776964121!2d80.24436853241477!3d12.96222879654117!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a525d6f6e5e8f47%3A0x6b8a8b1b1b1b1b1b!2sRMZ%20Millenia%20Business%20Park!5e0!3m2!1sen!2sin!4v1718280000000!5m2!1sen!2sin"
                                    width="100%"
                                    height="120"
                                    style={{ border: 0, borderRadius: '8px' }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                    title="Solvik Office Location"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <div className="container">
                    <p>&copy; {new Date().getFullYear()} Solvik AI. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
