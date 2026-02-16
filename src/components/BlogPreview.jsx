import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import './BlogPreview.css';

const recentPosts = [
    {
        slug: 'omnisight-quality-evaluation-system',
        title: 'OmniSight® Quality Evaluation System',
        excerpt: 'Comprehensive assessment: usability, accessibility, responsive design, and security analysis with heuristic-based scoring.',
        category: 'Product',
        date: 'October 17, 2025'
    },
    {
        slug: 'ai-transforming-qa',
        title: 'The Future of Software Testing: How AI Is Transforming QA',
        excerpt: 'Explore how artificial intelligence is revolutionizing quality assurance and enabling teams to ship faster with confidence.',
        category: 'Future of Tech',
        date: 'June 2026'
    },
    {
        slug: 'faster-releases-quality',
        title: 'Faster Releases Without Compromising Quality',
        excerpt: 'A modern testing approach for continuous deployment while maintaining high quality through intelligent automation.',
        category: 'Agile & DevOps',
        date: 'May 2026'
    }
];

const BlogPreview = () => {
    return (
        <section id="blog-preview" className="blog-preview-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="blog-preview-header">
                        <h2 className="blog-preview-title">From the <span className="text-gradient">Blog</span></h2>
                        <p className="blog-preview-subtitle">Insights on AI testing, quality, and building better software.</p>
                    </div>
                </ScrollReveal>

                <div className="blog-preview-grid">
                    {recentPosts.map((post, index) => (
                        <ScrollReveal key={post.slug} animation="fade-up" delay={`${index * 100}`}>
                            <Link to={`/blog/${post.slug}`} className="blog-preview-card">
                                <div className="preview-card-meta">
                                    <span className="preview-category">{post.category}</span>
                                    <span className="preview-date">{post.date}</span>
                                </div>
                                <h3 className="preview-card-title">{post.title}</h3>
                                <p className="preview-card-excerpt">{post.excerpt}</p>
                                <span className="preview-read-more">
                                    Read article
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <line x1="5" y1="12" x2="19" y2="12"></line>
                                        <polyline points="12 5 19 12 12 19"></polyline>
                                    </svg>
                                </span>
                            </Link>
                        </ScrollReveal>
                    ))}
                </div>

                <ScrollReveal animation="fade-up" delay="300">
                    <div className="blog-preview-cta">
                        <Link to="/blog" className="blog-preview-link">
                            View all articles
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default BlogPreview;
