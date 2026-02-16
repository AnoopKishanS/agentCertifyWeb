import React from 'react';
import ScrollReveal from '../components/ScrollReveal';
import './SubPage.css';

const BookDemo = () => {
    return (
        <div className="subpage">
            {/* Section 1: Hero & Info */}
            <section className="subpage-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <header className="subpage-header center">
                            <h1 className="page-title text-gradient">📅 Book A Demo</h1>
                            <p className="page-subtitle">See Smarter Testing in Action. Discover how Solvik uses AI to simplify testing, speed up releases, and improve product quality.</p>
                        </header>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-left" delay="200">
                        <section className="demo-info" style={{ marginTop: '40px', textAlign: 'center' }}>
                            <h2 className="block-title">What You’ll Experience</h2>
                            <ul className="block-list" style={{ fontSize: '1.1rem', display: 'inline-block', textAlign: 'left' }}>
                                <li>How Solvik understands your application automatically</li>
                                <li>Instant test generation with AI</li>
                                <li>Real-time quality insights (Usability, Performance, Security)</li>
                                <li>How your team can release faster with confidence</li>
                            </ul>
                        </section>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 2: The Form */}
            <section className="subpage-section bg-alt">
                <div className="container">
                    <ScrollReveal animation="slide-right">
                        <div className="demo-form-container">
                            <h2 className="block-title" style={{ textAlign: 'center' }}>Schedule Your Personalized Walkthrough</h2>
                            <form className="demo-form" onSubmit={(e) => e.preventDefault()}>
                                <div className="form-group">
                                    <label>Full Name</label>
                                    <input type="text" placeholder="John Doe" required />
                                </div>
                                <div className="form-group">
                                    <label>Work Email</label>
                                    <input type="email" placeholder="john@company.com" required />
                                </div>
                                <div className="form-group">
                                    <label>Company</label>
                                    <input type="text" placeholder="Acme Inc." required />
                                </div>
                                <div className="form-group">
                                    <label>Preferred Date & Time</label>
                                    <input type="datetime-local" required />
                                </div>
                                <div className="form-group">
                                    <label>Message (Optional)</label>
                                    <textarea placeholder="Tell us about your testing challenges..." rows="4"></textarea>
                                </div>
                                <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '10px' }}>
                                    👉 Schedule Demo
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default BookDemo;
