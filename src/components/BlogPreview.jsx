import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from './ScrollReveal';
import './BlogPreview.css';

const recentPosts = [
    {
        slug: 'next-era-ai-systems-not-models',
        title: "Why the Next Era of AI Won't Be About Models — It Will Be About Systems",
        excerpt:
            'From model benchmarks to production systems: reliability, integration, and real-world operations.',
        category: 'Enterprise AI',
        date: 'January 8, 2026',
        previewImage: '/blog/next-era-ai-systems-cover.png'
    },
    {
        slug: 'ai-agents-tools-to-teammates',
        title: 'The Rise of AI Agents: From Tools to Teammates',
        excerpt:
            'How AI is evolving from assistants to systems that execute work alongside people.',
        category: 'AI Agents',
        date: 'January 29, 2026',
        previewImage: '/blog/ai-agents-cover.png'
    },
    {
        slug: 'where-ai-delivering-roi-today',
        title: 'Where AI Is Actually Delivering ROI Today',
        excerpt:
            'Three areas where practical deployments are producing measurable returns.',
        category: 'Operations & ROI',
        date: 'February 19, 2026',
        previewImage: '/blog/where-ai-roi-cover.png'
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
                                {post.previewImage ? (
                                    <div className="preview-card-image-wrap">
                                        <img src={post.previewImage} alt="" className="preview-card-image" />
                                    </div>
                                ) : null}
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
                            View Articles
                        </Link>
                    </div>
                </ScrollReveal>
            </div>
        </section>
    );
};

export default BlogPreview;
