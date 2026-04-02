import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogPage.css';

const blogPosts = [
    {
        slug: 'next-era-ai-systems-not-models',
        title: "Why the Next Era of AI Won't Be About Models — It Will Be About Systems",
        description:
            'From model benchmarks to production systems: reliability, integration, and real-world operations.',
        category: 'Enterprise AI',
        date: 'January 8, 2026',
        readTime: '2 min read',
        listImage: '/blog/next-era-ai-systems-cover.png'
    },
    {
        slug: 'ai-agents-tools-to-teammates',
        title: 'The Rise of AI Agents: From Tools to Teammates',
        description:
            'How AI is evolving from assistants to systems that execute work alongside people—and what that means for enterprises.',
        category: 'AI Agents',
        date: 'January 29, 2026',
        readTime: '2 min read',
        listImage: '/blog/ai-agents-cover.png'
    },
    {
        slug: 'where-ai-delivering-roi-today',
        title: 'Where AI Is Actually Delivering ROI Today',
        description:
            'Three areas where practical deployments are producing measurable returns.',
        category: 'Operations & ROI',
        date: 'February 19, 2026',
        readTime: '2 min read',
        listImage: '/blog/ai-workspace-robot.png'
    },
    {
        slug: 'future-software-engineering-age-of-ai',
        title: 'The Future of Software Engineering in the Age of AI',
        description:
            'Intelligent validation and automation—without replacing the engineers who design systems.',
        category: 'Software Engineering',
        date: 'March 19, 2026',
        readTime: '2 min read',
        listImage: '/blog/future-software-engineering-cover.png'
    },
    {
        slug: 'ai-regulated-industries-real-world-constraints',
        title: 'AI in Regulated Industries: Innovation Within Real-World Constraints',
        description:
            'Reliability, safety, and compliance: where AI creates quiet, durable impact.',
        category: 'Regulated Industries',
        date: 'April 2, 2026',
        readTime: '2 min read',
        listImage: '/blog/regulated-industries-cover.png'
    }
];

const BlogPage = () => {
    const navigate = useNavigate();

    return (
        <div className="blog-page">
            <div className="blog-hero">
                <div className="container">
                    <button className="back-button" onClick={() => navigate('/')}>
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Home
                    </button>
                    <h1 className="blog-hero-title">The Blog</h1>
                    <p className="blog-hero-subtitle">
                        Solvik Insights on AI, and building better software
                    </p>
                </div>
            </div>

            <div className="blog-content">
                <div className="container">
                    <div className="blog-posts-list">
                        {blogPosts.map((post, index) => (
                            <article key={index} className="blog-post-item">
                                <div className="post-icon-wrapper">
                                    {post.listImage ? (
                                        <div className="post-thumb-wrap">
                                            <img src={post.listImage} alt="" className="post-thumb" />
                                        </div>
                                    ) : (
                                        <div className="post-icon">
                                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                                <polyline points="14 2 14 8 20 8"></polyline>
                                                <line x1="16" y1="13" x2="8" y2="13"></line>
                                                <line x1="16" y1="17" x2="8" y2="17"></line>
                                                <polyline points="10 9 9 9 8 9"></polyline>
                                            </svg>
                                        </div>
                                    )}
                                </div>
                                <div className="post-details">
                                    <div className="post-meta">
                                        <span className="post-category">{post.category}</span>
                                        <span className="post-date">{post.date}</span>
                                        <span className="post-read-time">{post.readTime}</span>
                                    </div>
                                    <h2 className="post-title">{post.title}</h2>
                                    <p className="post-description">{post.description}</p>
                                    <div className="post-footer">
                                        <span className="post-author">By Agent Solvik</span>
                                        <button
                                            className="read-more-btn"
                                            onClick={() => navigate(`/blog/${post.slug}`)}
                                        >
                                            Read More
                                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                                <polyline points="12 5 19 12 12 19"></polyline>
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BlogPage;
