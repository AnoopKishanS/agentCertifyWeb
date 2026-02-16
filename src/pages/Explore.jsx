import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './SubPage.css';

const Explore = () => {
    const sections = [
        {
            title: "🚀 The Platform",
            desc: "Discover how Solvik automates your testing lifecycle with AI, built on enterprise-grade security.",
            link: "/platform",
            cta: "Explore the Platform"
        },
        {
            title: "🧠 About Us",
            desc: "Learn about our mission to redefine software testing.",
            link: "/about",
            cta: "Meet the Team"
        }
    ];

    return (
        <div className="subpage">
            <section className="subpage-section">
                <div className="container">
                    <ScrollReveal animation="fade-up">
                        <header className="subpage-header center">
                            <h1 className="page-title text-gradient">Explore Solvik</h1>
                            <p className="page-subtitle">Your gateway to smarter testing, team insights, and innovation.</p>
                        </header>
                    </ScrollReveal>
                </div>
            </section>

            <section className="subpage-section bg-alt">
                <div className="container">
                    <div className="content-grid">
                        {sections.map((section, idx) => (
                            <ScrollReveal key={idx} animation="fade-up" delay={`${idx * 100}`}>
                                <div className="content-block" style={{ textAlign: 'center', padding: '50px' }}>
                                    <h2 className="block-title">{section.title}</h2>
                                    <p className="block-text" style={{ marginBottom: '30px' }}>{section.desc}</p>
                                    <Link to={section.link} className="btn btn-primary">{section.cta}</Link>
                                </div>
                            </ScrollReveal>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Explore;
