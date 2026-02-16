import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './BlogArticle.css';

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
                type: 'heading',
                level: 3,
                content: 'Human-Like Perception'
            },
            {
                type: 'paragraph',
                content: 'Uses computer vision to understand layouts, contrast, and visual hierarchy'
            },
            {
                type: 'heading',
                level: 3,
                content: 'Contextual Understanding'
            },
            {
                type: 'paragraph',
                content: 'Understands user workflows and can identify broken user journeys'
            },
            {
                type: 'heading',
                level: 3,
                content: 'Real-Time Interaction'
            },
            {
                type: 'paragraph',
                content: 'Tests dynamic features like modals, dropdowns, and animations'
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
                type: 'list',
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
            }
        ]
    }
};

const BlogArticle = () => {
    const { slug } = useParams();
    const navigate = useNavigate();
    const article = articles[slug];

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
            </div>
        </div>
    );
};

export default BlogArticle;
