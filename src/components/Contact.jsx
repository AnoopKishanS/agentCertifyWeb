import React, { useState } from 'react';
import ScrollReveal from './ScrollReveal';

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        dateTime: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you! Your demo request has been sent.');
    };

    return (
        <section id="contact" className="section contact-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="section-header center">
                        <h2>Let’s Transform Your <span style={{ color: 'var(--color-primary)' }}>Testing</span> Together</h2>
                        <p>Smarter testing starts here. Let’s show you how.</p>
                    </div>
                </ScrollReveal>

                <div className="contact-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', marginTop: '3rem' }}>
                    <ScrollReveal animation="slide-right">
                        <div className="contact-info">
                            <h3 style={{ marginBottom: '1.5rem' }}>Get in Touch</h3>
                            <div className="info-item" style={{ marginBottom: '2rem' }}>
                                <h4 style={{ color: 'var(--color-primary)', marginBottom: '0.5rem' }}>Sales & Support</h4>
                                <p style={{ opacity: '0.8' }}>Email: info@solvik.ai</p>
                                <p style={{ opacity: '0.8' }}>Our team will get back to you shortly.</p>
                            </div>

                            <div className="demo-highlights" style={{ background: 'rgba(255, 255, 255, 0.03)', padding: '2rem', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.05)' }}>
                                <h4 style={{ marginBottom: '1rem' }}>What You’ll Experience in a Demo:</h4>
                                <ul style={{ listStyle: 'none', padding: '0', opacity: '0.8', lineHeight: '1.8' }}>
                                    <li>✓ How Solvik understands your application automatically</li>
                                    <li>✓ Instant test generation with AI</li>
                                    <li>✓ Real-time quality insights</li>
                                    <li>✓ How your team can release faster with confidence</li>
                                </ul>
                            </div>
                        </div>
                    </ScrollReveal>

                    <ScrollReveal animation="slide-left">
                        <div className="demo-form-container" style={{ background: 'var(--color-bg-alt)', padding: '3rem', borderRadius: '24px', border: '1px solid rgba(255, 255, 255, 0.1)' }}>
                            <h3 style={{ marginBottom: '2rem', textAlign: 'center' }}>Book Your Demo Now</h3>
                            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    required
                                    style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                    onChange={handleChange}
                                />
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Work Email"
                                    required
                                    style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="company"
                                    placeholder="Company"
                                    required
                                    style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                    onChange={handleChange}
                                />
                                <input
                                    type="text"
                                    name="dateTime"
                                    placeholder="Preferred Date & Time"
                                    required
                                    style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white' }}
                                    onChange={handleChange}
                                />
                                <textarea
                                    name="message"
                                    placeholder="Message (Optional)"
                                    rows="4"
                                    style={{ padding: '1rem', borderRadius: '8px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', resize: 'none' }}
                                    onChange={handleChange}
                                ></textarea>
                                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '1.2rem', fontSize: '1.1rem' }}>
                                    Schedule Demo
                                </button>
                            </form>
                        </div>
                    </ScrollReveal>
                </div>

                <ScrollReveal animation="fade-up" delay="400">
                    <div className="final-cta center" style={{ marginTop: '5rem', padding: '4rem', background: 'linear-gradient(135deg, var(--color-primary-dark), var(--color-bg-alt))', borderRadius: '30px' }}>
                        <h2 style={{ marginBottom: '1rem' }}>Ready to transform your testing process?</h2>
                        <p style={{ fontSize: '1.2rem', marginBottom: '2.5rem', opacity: '0.9' }}>Start your Solvik journey today.</p>
                        <div style={{ display: 'flex', gap: '1.5rem', justifyContent: 'center' }}>
                            <button className="btn btn-primary btn-lg">Try Now</button>
                            <button className="btn btn-secondary btn-lg">Schedule Demo</button>
                        </div>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default Contact;
