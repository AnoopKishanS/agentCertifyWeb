import React from 'react';
import ScrollReveal from './ScrollReveal';
import './Blog.css';

const blogPosts = [
    {
        title: 'The Future of Software Testing: How AI Is Transforming QA',
        category: 'Future of Tech',
        date: 'June 2026',
        image: 'https://images.unsplash.com/photo-1669023414171-56f0740e34cd?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTM2fHxjb2Rpbmd8ZW58MHx8MHx8fDA%3D',
    },
    {
        title: 'Faster Releases Without Compromising Quality — A Modern Testing Approach',
        category: 'Agile & DevOps',
        date: 'May 2026',
        image: 'https://media.istockphoto.com/id/2240394697/photo/ai-robotic-arm-hold-smartphone-isolate-on-white-background.jpg?s=2048x2048&w=is&k=20&c=Tclbvi-DVAa9P_yTD2SUcZViHNeJxPNdmzc3fZf83W4=',
    },
    {
        title: 'Why Intelligent Test Automation Is Becoming Essential for Product Teams',
        category: 'Product Strategy',
        date: 'April 2026',
        image: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&fit=crop&q=80&w=800',
    },
    {
        title: 'From Manual Testing to AI Testing: What Businesses Need to Know',
        category: 'Digital Transformation',
        date: 'March 2026',
        image: 'https://media.istockphoto.com/id/2240394697/photo/ai-robotic-arm-hold-smartphone-isolate-on-white-background.jpg?s=2048x2048&w=is&k=20&c=Tclbvi-DVAa9P_yTD2SUcZViHNeJxPNdmzc3fZf83W4=',
    },
];


const Blog = () => {
    return (
        <section id="blog" className="section blog-section bg-alt">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="section-header center">
                        <h2 className="blog-main-title">Your Solvik deep dive starts here.</h2>
                    </div>
                </ScrollReveal>

                <div className="blog-posts-grid">
                    {blogPosts.map((post, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${idx * 100}`}>
                            <div className="blog-post-card">
                                <div className="post-image-container">
                                    <img src={post.image} alt={post.title} className="post-image" />
                                </div>
                                <div className="post-content">
                                    <div className="post-label">{post.category}</div>
                                    <h3 className="post-title">{post.title}</h3>
                                    <div className="post-footer-cta">
                                        <span className="cta-text">READ NOW</span>
                                        <svg className="cta-arrow" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <line x1="5" y1="12" x2="19" y2="12"></line>
                                            <polyline points="12 5 19 12 12 19"></polyline>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};


export default Blog;
