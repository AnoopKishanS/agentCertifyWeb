import React from 'react';
import ScrollReveal from './ScrollReveal';

const posts = [
    {
        title: 'The Future of Software Testing: How AI Is Transforming QA',
        date: 'Feb 10, 2026',
        category: 'Trends'
    },
    {
        title: 'Faster Releases Without Compromising Quality — A Modern Testing Approach',
        date: 'Feb 05, 2026',
        category: 'Best Practices'
    },
    {
        title: 'Why Intelligent Test Automation Is Becoming Essential for Product Teams',
        date: 'Jan 28, 2026',
        category: 'Strategy'
    },
    {
        title: 'From Manual Testing to AI Testing: What Businesses Need to Know',
        date: 'Jan 15, 2026',
        category: 'Guide'
    }
];

const BlogInsights = () => {
    return (
        <section id="blog" className="section bg-alt blog-section">
            <div className="container">
                <ScrollReveal animation="fade-up">
                    <div className="section-header center">
                        <h2>Blog & <span style={{ color: 'var(--color-primary)' }}>Insights</span></h2>
                        <p>Stay updated with the latest in AI-powered testing.</p>
                    </div>
                </ScrollReveal>

                <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '2rem', marginTop: '3rem' }}>
                    {posts.map((post, idx) => (
                        <ScrollReveal key={idx} animation="fade-up" delay={`${idx * 100}`}>
                            <div className="blog-card" style={{
                                background: 'rgba(255, 255, 255, 0.02)',
                                padding: '2rem',
                                borderRadius: '16px',
                                border: '1px solid rgba(255, 255, 255, 0.05)',
                                cursor: 'pointer',
                                transition: 'transform 0.3s ease'
                            }}>
                                <span style={{ color: 'var(--color-primary)', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>{post.category}</span>
                                <h3 style={{ fontSize: '1.2rem', marginTop: '1rem', marginBottom: '1.5rem', lineHeight: '1.4' }}>{post.title}</h3>
                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', opacity: '0.6', fontSize: '0.9rem' }}>
                                    <span>{post.date}</span>
                                    <span>Read More →</span>
                                </div>
                            </div>
                        </ScrollReveal>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogInsights;
