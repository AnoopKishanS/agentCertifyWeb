import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './SubPage.css';

const AboutUs = () => {
    return (
        <div className="subpage">
            <section className="subpage-jumbotron">
                <div className="container">
                    <nav className="subpage-breadcrumb" aria-label="Breadcrumb">
                        <Link to="/">Home</Link>
                        <span className="subpage-breadcrumb-sep" aria-hidden>/</span>
                        <span aria-current="page">About</span>
                    </nav>
                    <h1 className="subpage-jumbotron-title text-gradient">About Us</h1>
                    <p className="subpage-jumbotron-subtitle">Redefining software testing through intelligent automation.</p>
                </div>
            </section>
            {/* Section 1: Mission & Vision */}
            <section className="subpage-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <div className="content-grid content-grid-about">
                            <section className="content-block content-block-accent">
                                <h2 className="block-title">Our Mission</h2>
                                <p className="block-text">
                                    To redefine software testing through intelligent automation — helping teams build reliable applications faster without testing becoming a bottleneck.
                                </p>
                            </section>
                            <section className="content-block content-block-accent">
                                <h2 className="block-title">Our Vision</h2>
                                <p className="block-text">
                                    A world where testing keeps pace with innovation, enabling organizations to deliver high-quality software continuously.
                                </p>
                            </section>
                        </div>
                    </ScrollReveal>
                </div>
            </section>

            {/* Section 2: Why We Built Solvik & Leadership */}
            <section className="subpage-section bg-alt">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <p className="section-label">Our story</p>
                        <section className="content-block full-width-section" style={{ textAlign: 'center', marginBottom: '60px' }}>
                            <h2 className="section-title">Why We Built Solvik</h2>
                            <p className="block-text">
                                Traditional testing struggles to keep up with rapid development cycles. Solvik was created to bridge this gap by automating discovery, test creation, maintenance, and quality evaluation using AI.
                            </p>
                        </section>

                        <p className="section-label">Teams</p>
                        <h2 className="section-title">Leadership & Technical</h2>
                        <div className="content-grid">
                            <section className="content-block content-block-accent">
                                <h3 className="block-title">Leadership Team</h3>
                                <p className="block-text">Our leadership brings decades of experience in software engineering, AI, and quality assurance.</p>
                                <ul className="block-list">
                                    <li>Visionary Product Leadership</li>
                                    <li>Strategic Growth Experts</li>
                                    <li>Customer-Centric Operations</li>
                                </ul>
                            </section>
                            <section className="content-block content-block-accent">
                                <h3 className="block-title">Technical Team</h3>
                                <p className="block-text">Comprised of world-class AI researchers and automation engineers dedicated to perfection.</p>
                                <ul className="block-list">
                                    <li>AI & Machine Learning Specialists</li>
                                    <li>Senior Automation Engineers</li>
                                    <li>Infrastructure & Security Experts</li>
                                </ul>
                            </section>
                        </div>
                    </ScrollReveal>
                </div>
            </section>
        </div>
    );
};

export default AboutUs;
