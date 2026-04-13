import React from 'react';
import { Link } from 'react-router-dom';
import ScrollReveal from '../components/ScrollReveal';
import './SubPage.css';

const Privacy = () => {
  return (
    <div className="subpage">
      <section className="subpage-jumbotron">
        <div className="container">
          <nav className="subpage-breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            <span className="subpage-breadcrumb-sep" aria-hidden>
              /
            </span>
            <span aria-current="page">Privacy &amp; Cookies</span>
          </nav>
          <h1 className="subpage-jumbotron-title text-gradient">Privacy &amp; Cookie Policy</h1>
          <p className="subpage-jumbotron-subtitle">
            How we handle personal data and cookies on this website, in line with the GDPR.
          </p>
        </div>
      </section>

      <section className="subpage-section bg-alt">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <p className="section-label">Overview</p>
            <h2 className="section-title">Who we are</h2>
            <p className="block-text" style={{ maxWidth: '720px', marginBottom: '1rem' }}>
              This site is operated by Solvik (&quot;we&quot;, &quot;us&quot;). This notice explains what information we
              collect when you visit solvik.ai (or our related marketing pages), how we use cookies, and what rights you
              have under the EU General Data Protection Regulation (GDPR) and similar laws.
            </p>
            <p className="block-text" style={{ maxWidth: '720px' }}>
              For questions about this policy or your data, contact us at{' '}
              <a href="mailto:info@solvik.ai">info@solvik.ai</a>.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="subpage-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <p className="section-label">Cookies</p>
            <h2 className="section-title">Cookies and similar technologies</h2>
            <p className="block-text" style={{ maxWidth: '720px', marginBottom: '1rem' }}>
              Cookies are small text files stored on your device. We group them as follows:
            </p>
            <ul style={{ maxWidth: '720px', marginLeft: '1.25rem', lineHeight: 1.65, color: 'var(--color-text-light)' }}>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--color-text-main)' }}>Strictly necessary.</strong> Required to operate the
                site securely, maintain sessions where needed, and remember your cookie choices. These are used based on
                our legitimate interest in providing a functional website, and (where applicable) to perform a contract
                with you.
              </li>
              <li style={{ marginBottom: '0.75rem' }}>
                <strong style={{ color: 'var(--color-text-main)' }}>Analytics.</strong> Optional. Help us understand how
                visitors use the site (for example aggregated traffic or errors). We only enable these if you consent.
              </li>
              <li>
                <strong style={{ color: 'var(--color-text-main)' }}>Marketing.</strong> Optional. Used to measure
                campaigns or deliver relevant content if we use such tools. We only enable these if you consent.
              </li>
            </ul>
            <p className="block-text" style={{ maxWidth: '720px', marginTop: '1.25rem' }}>
              You can accept or reject non-essential cookies via the banner when you first visit, or anytime through
              &quot;Cookie settings&quot; in the site footer (Legal). You can also change your browser settings to block or
              delete cookies; blocking strictly necessary cookies may affect how the site works.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="subpage-section bg-alt">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <p className="section-label">Your rights</p>
            <h2 className="section-title">GDPR rights</h2>
            <p className="block-text" style={{ maxWidth: '720px', marginBottom: '1rem' }}>
              Where the GDPR applies, you may have the right to access, rectify, or erase your personal data; restrict or
              object to certain processing; data portability; and to withdraw consent at any time where processing is
              based on consent (without affecting the lawfulness of processing before withdrawal). You may also lodge a
              complaint with a supervisory authority in your country.
            </p>
            <p className="block-text" style={{ maxWidth: '720px' }}>
              To exercise these rights, email <a href="mailto:info@solvik.ai">info@solvik.ai</a>. We will respond within
              the timeframes required by law.
            </p>
          </ScrollReveal>
        </div>
      </section>

      <section className="subpage-section">
        <div className="container">
          <ScrollReveal animation="fade-up">
            <p className="section-label">Updates</p>
            <h2 className="section-title">Changes</h2>
            <p className="block-text" style={{ maxWidth: '720px' }}>
              We may update this policy when our practices or the law change. The &quot;last updated&quot; date on this
              page will change when we do; material changes may be highlighted on the site.
            </p>
            <p className="block-text" style={{ maxWidth: '720px', marginTop: '1rem', fontSize: '0.9rem' }}>
              Last updated: April 13, 2026
            </p>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
};

export default Privacy;
