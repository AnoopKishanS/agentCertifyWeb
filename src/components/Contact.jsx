import React from 'react';
import ScrollReveal from './ScrollReveal';
import './Contact.css';

const Contact = () => {
    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="section-header center">
                        <h2 className="text-gradient">Let’s Transform Your Testing Together</h2>
                        <p>Have questions? We’re here to help you scale your engineering quality.</p>
                    </div>
                </ScrollReveal>

                <div className="contact-grid">
                    <ScrollReveal animation="slide-right" delay="100" className="contact-info">
                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                                </svg>
                            </div>
                            <h3>Sales Queries</h3>
                            <p>Interested in our custom plans or enterprise features? Reach out to our sales team.</p>
                            <a href="mailto:info@solvik.ai" className="contact-link">info@solvik.ai</a>
                        </div>

                        <div className="contact-card">
                            <div className="contact-card-icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                    <path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path>
                                </svg>
                            </div>
                            <h3>Technical Support</h3>
                            <p>Need help with your current deployment? Our engineers are ready to assist.</p>
                            <a href="mailto:info@solvik.ai" className="contact-link">info@solvik.ai</a>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-left" delay="200" className="contact-details">
                        <div className="details-wrapper">
                            <div className="detail-item">
                                <div className="detail-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                        <polyline points="22,6 12,13 2,6"></polyline>
                                    </svg>
                                </div>
                                <div className="detail-text">
                                    <label>Email</label>
                                    <p>info@solvik.ai</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                                        <circle cx="12" cy="10" r="3"></circle>
                                    </svg>
                                </div>
                                <div className="detail-text">
                                    <label>Office Address</label>
                                    <p>Coming Soon</p>
                                </div>
                            </div>
                            <div className="detail-item">
                                <div className="detail-icon">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                    </svg>
                                </div>
                                <div className="detail-text">
                                    <label>Phone</label>
                                    <p>Coming Soon</p>
                                </div>
                            </div>
                        </div>
                    </ScrollReveal>
                </div>
            </div>
        </section>
    );
};

export default Contact;
