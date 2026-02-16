import React, { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useModal } from '../context/ModalContext';
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

const articles = {
    'omnisight-quality-evaluation-system': {
        title: 'OmniSight® Quality Evaluation System',
        description: 'Comprehensive Assessment: Usability, accessibility, responsive design, and security analysis with heuristic-based scoring and actionable recommendations.',
        category: 'Product',
        date: 'October 17, 2025',
        readTime: '5 min read',
        tldr: 'We developed Omnisight®, an internal AI tool that uses computer vision and autonomous navigation to evaluate websites across UX, security, and accessibility dimensions. It browses sites like a human would, identifying issues that traditional scanners miss.',
        sections: [
            {
                type: 'heading',
                level: 2,
                content: 'The Challenge'
            },
            {
                type: 'paragraph',
                content: 'As we scaled Solvik, we needed to ensure our platform maintained exceptional quality across three critical dimensions:'
            },
            {
                type: 'list',
                items: [
                    'UX: Is the user experience intuitive and delightful?',
                    'Security: Are there vulnerabilities or security misconfigurations?',
                    'Accessibility: Can everyone, including users with disabilities, access our platform?'
                ]
            },
            {
                type: 'paragraph',
                content: 'Traditional tools like Lighthouse and manual testing were helpful but had limitations. They couldn\'t truly "experience" a website the way a human does—clicking through workflows, understanding context, and identifying subtle UX issues.'
            },
            {
                type: 'heading',
                level: 2,
                content: 'Enter Omnisight®'
            },
            {
                type: 'paragraph',
                content: 'Omnisight is our internal AI-powered evaluation system that uses Computer Use technology to autonomously navigate and analyze websites. Here\'s how it works:'
            },
            {
                type: 'heading',
                level: 3,
                content: 'How It Works'
            },
            {
                type: 'steps',
                items: [
                    { number: 1, title: 'URL Input', desc: 'You provide a website URL to evaluate' },
                    { number: 2, title: 'Autonomous Navigation', desc: 'The AI agent launches a browser and begins exploring the site like a human would—clicking links, filling forms, scrolling through content' },
                    { number: 3, title: 'Multi-Dimensional Analysis', desc: 'As it navigates, Omnisight evaluates UX patterns, security headers, WCAG compliance, and more' },
                    { number: 4, title: 'Comprehensive Report', desc: 'You receive detailed scores (0-100) for UX, security, and accessibility, along with specific issues and recommendations' }
                ]
            },
            {
                type: 'heading',
                level: 2,
                content: 'What Makes Omnisight Different?'
            },
            {
                type: 'cards',
                items: [
                    { title: 'Human-Like Perception', description: 'Uses computer vision to understand layouts, contrast, and visual hierarchy', icon: 'eye' },
                    { title: 'Contextual Understanding', description: 'Understands user workflows and can identify broken user journeys', icon: 'flow' },
                    { title: 'Real-Time Interaction', description: 'Tests dynamic features like modals, dropdowns, and animations', icon: 'bolt' }
                ]
            },
            {
                type: 'heading',
                level: 2,
                content: 'Real Results'
            },
            {
                type: 'paragraph',
                content: 'We\'ve been using Omnisight internally for the past few months, and it has helped us:'
            },
            {
                type: 'check-list',
                items: [
                    'Identify 40% more UX issues compared to manual testing alone',
                    'Catch security misconfigurations before they reach production',
                    'Improve WCAG 2.1 AA compliance score from 82% to 96%',
                    'Reduce QA time by 60% through automated pre-checks'
                ]
            },
            {
                type: 'heading',
                level: 2,
                content: 'The Technology Behind It'
            },
            {
                type: 'paragraph',
                content: 'Omnisight is built on a sophisticated tech stack:'
            },
            {
                type: 'tech-list',
                items: [
                    'Playwright for browser automation',
                    'Claude Sonnet 4 for decision-making and analysis',
                    'Custom computer vision models for visual analysis',
                    'Security scanners (OWASP, CSP analyzers)',
                    'Accessibility testing libraries (axe-core, pa11y)'
                ]
            },
            {
                type: 'heading',
                level: 2,
                content: "What's Next?"
            },
            {
                type: 'paragraph',
                content: "While Omnisight is currently an internal tool, we're exploring ways to make it available to our customers. Imagine running automated quality checks on your scheduling portal before every deployment, or getting actionable insights to improve your employee-facing apps."
            },
            {
                type: 'paragraph',
                content: "We're also working on adding more evaluation dimensions: performance, SEO, mobile responsiveness, and even brand consistency checks."
            },
            {
                type: 'cta-card',
                title: 'Interested in Omnisight?',
                body: "We're considering a beta program for select customers. If you'd like early access or want to learn more about how we use AI internally, reach out to us.",
                buttonText: 'Get in Touch'
            }
        ]
    },
    'ai-transforming-qa': {
        title: 'The Future of Software Testing: How AI Is Transforming QA',
        description: 'Explore how artificial intelligence is revolutionizing quality assurance processes and enabling teams to ship faster with confidence.',
        category: 'Future of Tech',
        date: 'June 2026',
        readTime: '8 min read',
        tldr: 'AI is not just augmenting QA—it\'s reimagining it. From autonomous test generation to self-healing scripts, intelligent testing is becoming the new standard for teams who ship fast.',
        sections: [
            { type: 'heading', level: 2, content: 'The New QA Landscape' },
            { type: 'paragraph', content: 'For decades, software testing has been the bottleneck in the development lifecycle. Manual test creation, brittle automation scripts, and endless maintenance cycles have held teams back from achieving true continuous deployment.' },
            { type: 'heading', level: 2, content: 'How AI Changes the Game' },
            { type: 'paragraph', content: 'AI-powered testing brings three major shifts: autonomous test generation that analyzes your app and creates comprehensive suites, self-healing tests that adapt to UI changes without manual updates, and intelligent analysis that surfaces root causes and prioritizes risk.' },
            { type: 'heading', level: 2, content: 'Real-World Impact' },
            { type: 'paragraph', content: 'Teams using AI-powered testing are seeing dramatic improvements:' },
            { type: 'check-list', items: ['10x faster test creation', '95% reduction in maintenance time', '3x increase in test coverage', '50% faster release cycles'] },
            { type: 'heading', level: 2, content: 'The Human Element' },
            { type: 'paragraph', content: 'AI doesn\'t replace QA engineers—it empowers them. By automating repetitive tasks, AI frees teams to focus on strategic test planning, complex scenario design, and business logic verification.' }
        ]
    },
    'faster-releases-quality': {
        title: 'Faster Releases Without Compromising Quality',
        description: 'A modern testing approach that enables continuous deployment while maintaining high quality standards through intelligent automation.',
        category: 'Agile & DevOps',
        date: 'May 2026',
        readTime: '6 min read',
        tldr: 'Speed and quality aren\'t mutually exclusive. With the right approach and tools, you can ship 5x faster while cutting production incidents by 80%.',
        sections: [
            { type: 'heading', level: 2, content: 'The Speed vs. Quality Dilemma' },
            { type: 'paragraph', content: 'Traditional wisdom says you can have fast releases or high quality, but not both. Modern testing approaches prove this wrong.' },
            { type: 'heading', level: 2, content: 'Keys to Success' },
            { type: 'paragraph', content: 'Shift-left testing catches issues early. Continuous testing runs on every commit. Intelligent automation adapts to change without constant maintenance.' },
            { type: 'heading', level: 2, content: 'The Results' },
            { type: 'paragraph', content: 'Teams implementing these strategies see:' },
            { type: 'check-list', items: ['5x faster release cycles', '80% reduction in production incidents', '90% improvement in deployment frequency', '50% faster time to recovery'] },
            { type: 'heading', level: 2, content: 'Getting Started' },
            { type: 'paragraph', content: 'Assess your current testing maturity, identify automation opportunities, implement continuous testing, and measure and iterate. The right platform makes the difference.' }
        ]
    },
    'intelligent-test-automation': {
        title: 'Why Intelligent Test Automation Is Essential',
        description: 'Product teams are discovering that intelligent test automation is no longer optional—it\'s a competitive advantage.',
        category: 'Product Strategy',
        date: 'April 2026',
        readTime: '7 min read',
        tldr: 'Intelligent test automation delivers 10x faster test creation, 95% less maintenance, and comprehensive coverage. The ROI is measurable—often in the first few months.',
        sections: [
            { type: 'heading', level: 2, content: 'The Competitive Landscape' },
            { type: 'paragraph', content: 'Today\'s market demands rapid feature delivery, zero-defect releases, and exceptional user experience. Traditional testing approaches simply can\'t keep pace.' },
            { type: 'heading', level: 2, content: 'What Makes Automation Intelligent' },
            { type: 'paragraph', content: 'Adaptive learning, context awareness, and self-maintenance. Tests that learn and evolve, understand your application, and update automatically when the UI changes.' },
            { type: 'heading', level: 2, content: 'Business Impact' },
            { type: 'paragraph', content: 'Faster time to market, lower QA costs, higher quality assurance, and teams that can focus on innovation instead of maintenance.' },
            { type: 'heading', level: 2, content: 'The ROI Case' },
            { type: 'paragraph', content: 'Consider a typical mid-size team: traditional QA can mean 280 hours per month and $21K in costs. With intelligent automation, oversight drops to 14 hours and about $1K—saving nearly $20K per month while improving coverage.' },
            { type: 'heading', level: 2, content: 'Take Action' },
            { type: 'paragraph', content: 'Intelligent test automation isn\'t the future—it\'s the present. Assess your current state, define success metrics, choose the right platform, and start small to scale fast.' }
        ]
    }
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
    const ogImage = `${origin}/vite.svg`;

    useEffect(() => {
        if (!article) return;
        const prevTitle = document.title;
        document.title = `${article.title} | Solvik Blog`;
        setMetaTag('og:title', article.title, true);
        setMetaTag('og:description', article.description, true);
        setMetaTag('og:url', shareUrl, true);
        setMetaTag('og:type', 'article', true);
        setMetaTag('og:image', ogImage, true);
        setMetaTag('twitter:card', 'summary_large_image');
        setMetaTag('twitter:title', article.title);
        setMetaTag('twitter:description', article.description);
        setMetaTag('twitter:image', ogImage);
        setMetaTag('description', article.description);
        return () => {
            document.title = prevTitle;
            setMetaTag('og:title', DEFAULT_TITLE, true);
            setMetaTag('og:description', DEFAULT_DESC, true);
            setMetaTag('og:url', origin || '', true);
            setMetaTag('og:type', 'website', true);
            setMetaTag('twitter:title', DEFAULT_TITLE);
            setMetaTag('twitter:description', DEFAULT_DESC);
            setMetaTag('twitter:image', `${origin}/vite.svg`);
            setMetaTag('description', DEFAULT_DESC);
        };
    }, [article, shareUrl, origin, ogImage]);

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
