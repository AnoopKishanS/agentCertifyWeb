/**
 * Draft — not merged into `articles` until publish.
 * To ship: in blogArticles.js import this and add
 * `'omnisight-quality-evaluation-system': omnisightArticle` before `...seriesArticles`.
 */
export const omnisightArticle = {
  title: 'OmniSight® Quality Evaluation System',
  description:
    'Comprehensive Assessment: Usability, accessibility, responsive design, and security analysis with heuristic-based scoring and actionable recommendations.',
  category: 'Product',
  date: 'October 17, 2025',
  readTime: '5 min read',
  coverImage: '/blog/robot-hand-neural-network.png',
  coverAlt:
    'A robotic hand reaches toward a glowing digital neural network, representing AI-driven quality evaluation.',
  tldr:
    'We developed Omnisight®, an internal AI tool that uses computer vision and autonomous navigation to evaluate websites across UX, security, and accessibility dimensions. It browses sites like a human would, identifying issues that traditional scanners miss.',
  sections: [
    { type: 'heading', level: 2, content: 'The Challenge' },
    {
      type: 'paragraph',
      content:
        'As we scaled Solvik, we needed to ensure our platform maintained exceptional quality across three critical dimensions:',
    },
    {
      type: 'list',
      items: [
        'UX: Is the user experience intuitive and delightful?',
        'Security: Are there vulnerabilities or security misconfigurations?',
        'Accessibility: Can everyone, including users with disabilities, access our platform?',
      ],
    },
    {
      type: 'paragraph',
      content:
        'Traditional tools like Lighthouse and manual testing were helpful but had limitations. They couldn\'t truly "experience" a website the way a human does—clicking through workflows, understanding context, and identifying subtle UX issues.',
    },
    { type: 'heading', level: 2, content: 'Enter Omnisight®' },
    {
      type: 'paragraph',
      content:
        'Omnisight is our internal AI-powered evaluation system that uses Computer Use technology to autonomously navigate and analyze websites. Here\'s how it works:',
    },
    { type: 'heading', level: 3, content: 'How It Works' },
    {
      type: 'steps',
      items: [
        { number: 1, title: 'URL Input', desc: 'You provide a website URL to evaluate' },
        {
          number: 2,
          title: 'Autonomous Navigation',
          desc: 'The AI agent launches a browser and begins exploring the site like a human would—clicking links, filling forms, scrolling through content',
        },
        {
          number: 3,
          title: 'Multi-Dimensional Analysis',
          desc: 'As it navigates, Omnisight evaluates UX patterns, security headers, WCAG compliance, and more',
        },
        {
          number: 4,
          title: 'Comprehensive Report',
          desc: 'You receive detailed scores (0-100) for UX, security, and accessibility, along with specific issues and recommendations',
        },
      ],
    },
    { type: 'heading', level: 2, content: 'What Makes Omnisight Different?' },
    {
      type: 'cards',
      items: [
        {
          title: 'Human-Like Perception',
          description: 'Uses computer vision to understand layouts, contrast, and visual hierarchy',
          icon: 'eye',
        },
        {
          title: 'Contextual Understanding',
          description: 'Understands user workflows and can identify broken user journeys',
          icon: 'flow',
        },
        {
          title: 'Real-Time Interaction',
          description: 'Tests dynamic features like modals, dropdowns, and animations',
          icon: 'bolt',
        },
      ],
    },
    { type: 'heading', level: 2, content: 'Real Results' },
    {
      type: 'paragraph',
      content: "We've been using Omnisight internally for the past few months, and it has helped us:",
    },
    {
      type: 'check-list',
      items: [
        'Identify 40% more UX issues compared to manual testing alone',
        'Catch security misconfigurations before they reach production',
        'Improve WCAG 2.1 AA compliance score from 82% to 96%',
        'Reduce QA time by 60% through automated pre-checks',
      ],
    },
    { type: 'heading', level: 2, content: 'The Technology Behind It' },
    { type: 'paragraph', content: 'Omnisight is built on a sophisticated tech stack:' },
    {
      type: 'tech-list',
      items: [
        'Playwright for browser automation',
        'Claude Sonnet 4 for decision-making and analysis',
        'Custom computer vision models for visual analysis',
        'Security scanners (OWASP, CSP analyzers)',
        'Accessibility testing libraries (axe-core, pa11y)',
      ],
    },
    { type: 'heading', level: 2, content: "What's Next?" },
    {
      type: 'paragraph',
      content:
        "While Omnisight is currently an internal tool, we're exploring ways to make it available to our customers. Imagine running automated quality checks on your scheduling portal before every deployment, or getting actionable insights to improve your employee-facing apps.",
    },
    {
      type: 'paragraph',
      content:
        "We're also working on adding more evaluation dimensions: performance, SEO, mobile responsiveness, and even brand consistency checks.",
    },
    {
      type: 'cta-card',
      title: 'Interested in Omnisight?',
      body: "We're considering a beta program for select customers. If you'd like early access or want to learn more about how we use AI internally, reach out to us.",
      buttonText: 'Get in Touch',
    },
  ],
};
