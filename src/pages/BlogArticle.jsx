import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
import { articles } from '../data/blogArticles';
import './BlogArticle.css';

const setMetaTag = (attr, value, isProperty = false) => {
  const key = isProperty ? 'property' : 'name';
  let el = document.querySelector(`meta[${key}="${attr}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute(key, attr);
    document.head.appendChild(el);
  }
  el.setAttribute('content', value || '');
};

const DEFAULT_TITLE = 'Solvik - AI-Powered Testing Platform';
const DEFAULT_DESC = 'End-to-end AI testing platform. Autonomous test generation, self-healing automation, and continuous quality insights.';

const BlogArticle = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const { openModal } = useModal();
    const article = articles[slug];
    const shareUrl = typeof window !== 'undefined' ? `${window.location.origin}/blog/${slug}` : '';
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const coverImageUrl =
        article?.coverImage && origin ? `${origin}${article.coverImage}` : '';
    const coverAltText = article?.coverAlt || article?.title || '';

    useEffect(() => {
        if (!article) return;
        const prevTitle = document.title;
        document.title = `${article.title} | Solvik Blog`;
        setMetaTag('og:title', article.title, true);
        setMetaTag('og:description', article.description, true);
        setMetaTag('og:url', shareUrl, true);
        setMetaTag('og:type', 'article', true);
        if (coverImageUrl) {
            setMetaTag('og:image', coverImageUrl, true);
            setMetaTag('og:image:type', 'image/png', true);
            setMetaTag('og:image:alt', coverAltText, true);
        }
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', article.title);
        setMetaTag('twitter:description', article.description);
        if (coverImageUrl) {
            setMetaTag('twitter:image', coverImageUrl);
        }
        setMetaTag('description', article.description);
        return () => {
            document.title = prevTitle;
            setMetaTag('og:title', DEFAULT_TITLE, true);
            setMetaTag('og:description', DEFAULT_DESC, true);
            setMetaTag('og:url', origin || '', true);
            setMetaTag('og:type', 'website', true);
            setMetaTag('twitter:title', DEFAULT_TITLE);
            setMetaTag('twitter:description', DEFAULT_DESC);
            setMetaTag('twitter:image', '');
            setMetaTag('og:image', '', true);
            setMetaTag('og:image:type', '', true);
            setMetaTag('og:image:alt', '', true);
            setMetaTag('description', DEFAULT_DESC);
        };
    }, [article, shareUrl, origin, coverImageUrl, coverAltText]);

    if (!article) {
        return (
            <div className="blog-article-page">
                <div className="article-container">
                    <h1>Article Not Found</h1>
                    <button onClick={() => navigate('/blog')}>Back to Blog</button>
                </div>
            </div>
        );
    }

    const renderSection = (section, index) => {
        switch (section.type) {
            case 'heading':
                const HeadingTag = `h${section.level}`;
                return React.createElement(HeadingTag, { key: index }, section.content);
            
            case 'paragraph':
                if (section.parts?.length) {
                    return (
                        <p key={index}>
                            {section.parts.map((part, i) =>
                                part.bold ? (
                                    <strong key={i}>{part.text}</strong>
                                ) : (
                                    <React.Fragment key={i}>{part.text}</React.Fragment>
                                )
                            )}
                        </p>
                    );
                }
                if (section.emphasis) {
                    return (
                        <p key={index}>
                            <strong>{section.content}</strong>
                        </p>
                    );
                }
                return <p key={index}>{section.content}</p>;
            
            case 'list':
                return (
                    <ul key={index} className="bullet-list">
                        {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                );
            
            case 'tech-list':
                return (
                    <ul key={index} className="tech-list">
                        {section.items.map((item, i) => (
                            <li key={i}>{item}</li>
                        ))}
                    </ul>
                );
            
            case 'steps':
                return (
                    <div key={index} className="steps-container">
                        {section.items.map((step, i) => (
                            <div key={i} className="step-item">
                                <div className="step-number">{step.number}</div>
                                <div className="step-content">
                                    <h4 className="step-title">{step.title}</h4>
                                    <p className="step-desc">{step.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                );
            
            case 'cards':
                return (
                    <div key={index} className="feature-cards">
                        {section.items.map((card, i) => (
                            <div key={i} className="feature-card">
                                <div className="feature-card-icon">
                                    {card.icon === 'eye' && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                                            <circle cx="12" cy="12" r="3"></circle>
                                        </svg>
                                    )}
                                    {card.icon === 'flow' && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <rect x="3" y="3" width="7" height="7"></rect>
                                            <rect x="14" y="3" width="7" height="7"></rect>
                                            <rect x="14" y="14" width="7" height="7"></rect>
                                            <rect x="3" y="14" width="7" height="7"></rect>
                                        </svg>
                                    )}
                                    {card.icon === 'bolt' && (
                                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                                        </svg>
                                    )}
                                </div>
                                <h3 className="feature-card-title">{card.title}</h3>
                                <p className="feature-card-desc">{card.description}</p>
                            </div>
                        ))}
                    </div>
                );
            
            case 'check-list':
                return (
                    <ul key={index} className="check-list">
                        {section.items.map((item, i) => (
                            <li key={i}>
                                <span className="check-icon">
                                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="20 6 9 17 4 12"></polyline>
                                    </svg>
                                </span>
                                {item}
                            </li>
                        ))}
                    </ul>
                );
            
            case 'cta-card':
                return (
                    <div key={index} className="article-cta-card">
                        <h3 className="cta-card-title">{section.title}</h3>
                        <p className="cta-card-body">{section.body}</p>
                        <button type="button" className="cta-card-button" onClick={() => window.location.href = '/#contact'}>
                            {section.buttonText}
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <line x1="5" y1="12" x2="19" y2="12"></line>
                                <polyline points="12 5 19 12 12 19"></polyline>
                            </svg>
                        </button>
                    </div>
                );
            
            default:
                return null;
        }
    };

    return (
        <div className="blog-article-page">
            <div className="article-container">
                <button className="back-to-blog" onClick={() => navigate('/blog')}>
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="19" y1="12" x2="5" y2="12"></line>
                        <polyline points="12 19 5 12 12 5"></polyline>
                    </svg>
                    Back to Blog
                </button>

                <div className="article-header-compact">
                    <div className="article-meta-compact">
                        <span className="meta-category">{article.category}</span>
                        <span className="meta-date">{article.date}</span>
                        <span className="meta-separator">•</span>
                        <span className="meta-read-time">{article.readTime}</span>
                    </div>
                    <h1 className="article-title-main">{article.title}</h1>
                    <p className="article-description">{article.description}</p>
                    <div className="article-byline">By Agent Solvik</div>
                </div>

                {article.coverImage && (
                    <div className="article-cover-wrap">
                        <img
                            className="article-cover-image"
                            src={article.coverImage}
                            alt={article.coverAlt || ''}
                            loading="eager"
                        />
                    </div>
                )}

                {article.tldr && (
                    <div className="tldr-box">
                        <strong>TL;DR:</strong> {article.tldr}
                    </div>
                )}

                <div className="article-body-content">
                    {article.sections.map((section, index) => renderSection(section, index))}
                </div>

                <div className="article-solvik-cta">
                    <h3 className="solvik-cta-title">Ready to transform your testing?</h3>
                    <p className="solvik-cta-text">See how Solvik delivers end-to-end AI testing—autonomous generation, self-healing automation, and continuous quality insights. Try it free.</p>
                    <button type="button" className="solvik-cta-button" onClick={openModal}>
                        Request a Demo
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="5" y1="12" x2="19" y2="12"></line>
                            <polyline points="12 5 19 12 12 19"></polyline>
                        </svg>
                    </button>
                </div>

                <footer className="article-footer">
                    <button type="button" className="article-back-link" onClick={() => navigate('/blog')}>
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <line x1="19" y1="12" x2="5" y2="12"></line>
                            <polyline points="12 19 5 12 12 5"></polyline>
                        </svg>
                        Back to Blog
                    </button>
                    <div className="article-share">
                        <span className="share-label">Share:</span>
                        <a href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="share-link" aria-label="Share on X (Twitter)">X</a>
                        <a href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(shareUrl)}`} target="_blank" rel="noopener noreferrer" className="share-link" aria-label="Share on LinkedIn">LinkedIn</a>
                    </div>
                </footer>
            </div>
        </div>
    );
};

export default BlogArticle;
