import React from 'react';
import { useNavigate } from 'react-router-dom';
import './BlogPage.css';

const blogPosts = [
    {
        slug: 'omnisight-quality-evaluation-system',
        title: 'OmniSight® Quality Evaluation System',
        description: 'Comprehensive Assessment: Usability, accessibility, responsive design, and security analysis. Detailed Scoring: Heuristic-based scoring with actionable recommendations. Session Persistence: Complete evaluation history with detailed results.',
        category: 'Product',
        date: 'October 17, 2025',
        readTime: '5 min read'
    },
    {
        slug: 'ai-transforming-qa',
        title: 'The Future of Software Testing: How AI Is Transforming QA',
        description: 'Explore how artificial intelligence is revolutionizing quality assurance processes and enabling teams to ship faster with confidence.',
        category: 'Future of Tech',
        date: 'June 2026',
        readTime: '8 min read'
    },
    {
        slug: 'faster-releases-quality',
        title: 'Faster Releases Without Compromising Quality',
        description: 'A modern testing approach that enables continuous deployment while maintaining high quality standards through intelligent automation.',
        category: 'Agile & DevOps',
        date: 'May 2026',
        readTime: '6 min read'
    },
    {
        slug: 'intelligent-test-automation',
        title: 'Why Intelligent Test Automation Is Essential',
        description: 'Product teams are discovering that intelligent test automation is no longer optional—it\'s a competitive advantage.',
        category: 'Product Strategy',
        date: 'April 2026',
        readTime: '7 min read'
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
                        Solvik Insights on AI, workforce management, and building better software
                    </p>
                </div>
            </div>

            <div className="blog-content">
                <div className="container">
                    <div className="blog-posts-list">
                        {blogPosts.map((post, index) => (
                            <article key={index} className="blog-post-item">
                                <div className="post-icon-wrapper">
                                    <div className="post-icon">
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                                            <polyline points="14 2 14 8 20 8"></polyline>
                                            <line x1="16" y1="13" x2="8" y2="13"></line>
                                            <line x1="16" y1="17" x2="8" y2="17"></line>
                                            <polyline points="10 9 9 9 8 9"></polyline>
                                        </svg>
                                    </div>
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
