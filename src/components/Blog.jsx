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
        image: 'https://images.unsplash.com/photo-1684369175809-f9642140a1bd?q=80&w=1242&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
        title: 'From Manual Testing to AI Testing: What Businesses Need to Know',
        category: 'Digital Transformation',
        date: 'March 2026',
        image: 'https://images.unsplash.com/photo-1680783954745-3249be59e527?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
];


const Blog = ({ detailed = false }) => {
    return (
        <section id="blog-section" className={`subpage-section bg-alt ${detailed ? 'detailed-view' : ''}`}>
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="section-header center">
                        <span className="eyebrow-label">{detailed ? 'THE BLOG' : 'INSIGHTS'}</span>
                        <h2 className="blog-main-title text-gradient">{detailed ? 'The Solvik Blog' : 'Insights & Innovation'}</h2>
                        <p className="page-subtitle center" style={{ marginTop: '20px', marginBottom: '40px' }}>
                            {detailed ? 'A deep dive into the intersection of AI and quality assurance. Expert perspectives on the future of testing.' : 'Our latest thoughts on AI and software quality.'}
                        </p>
                    </div>
                </ScrollReveal>

                <div className={`blog-posts-grid ${detailed ? 'detailed-grid' : ''}`}>
                    {blogPosts.map((post, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${(idx * 100) + 100}`}>
                            <div className={`blog-post-card ${detailed ? 'big-card' : ''}`}>
                                <div className="post-image-container">
                                    <img src={post.image} alt={post.title} className="post-image" />
                                </div>
                                <div className="post-content">
                                    <div className="post-meta">
                                        <span className="post-label">{post.category}</span>
                                        {detailed && <span className="post-date">{post.date}</span>}
                                    </div>
                                    <h3 className="post-title">{post.title}</h3>
                                    {detailed && (
                                        <p className="post-excerpt">
                                            Discover how AI is reshaping the landscape of software quality by automating the most time-consuming parts of the QA lifecycle...
                                        </p>
                                    )}
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
