import React, { useId, useState } from 'react';
import { Link } from 'react-router-dom';
import { useCookieConsent } from '../hooks/useCookieConsent';
import './CookieConsent.css';

function CookiePreferencesPanel({ consent, onClose, acceptAll, rejectNonEssential, savePreferences }) {
  const titleId = useId();
  const analyticsId = useId();
  const marketingId = useId();
  const [draftAnalytics, setDraftAnalytics] = useState(consent?.analytics ?? false);
  const [draftMarketing, setDraftMarketing] = useState(consent?.marketing ?? false);

  return (
    <div className="cookie-consent-modal" role="dialog" aria-modal="true" aria-labelledby={`${titleId}-prefs`}>
      <div className="cookie-consent-modal-card">
        <div className="cookie-consent-modal-head">
          <h2 id={`${titleId}-prefs`} className="cookie-consent-modal-title">
            Cookie preferences
          </h2>
          <button type="button" className="cookie-consent-close" onClick={onClose} aria-label="Close cookie preferences">
            ×
          </button>
        </div>
        <p className="cookie-consent-modal-intro">
          Choose which optional cookies we may set. Necessary cookies are always on because the site needs them to function.
          Read more in our{' '}
          <Link to="/privacy" className="cookie-consent-link" onClick={onClose}>
            Privacy &amp; Cookie Policy
          </Link>
          .
        </p>

        <ul className="cookie-consent-categories">
          <li className="cookie-category">
            <div className="cookie-category-row">
              <span className="cookie-category-name">Strictly necessary</span>
              <span className="cookie-category-always">Always on</span>
            </div>
            <p className="cookie-category-desc">
              Required for security, load balancing, and remembering your cookie choices (e.g. consent storage).
            </p>
          </li>
          <li className="cookie-category">
            <div className="cookie-category-row">
              <label className="cookie-category-name" htmlFor={analyticsId}>
                Analytics
              </label>
              <input
                id={analyticsId}
                type="checkbox"
                className="cookie-toggle"
                checked={draftAnalytics}
                onChange={(e) => setDraftAnalytics(e.target.checked)}
              />
            </div>
            <p className="cookie-category-desc">
              Helps us understand how the site is used so we can improve content and performance.
            </p>
          </li>
          <li className="cookie-category">
            <div className="cookie-category-row">
              <label className="cookie-category-name" htmlFor={marketingId}>
                Marketing
              </label>
              <input
                id={marketingId}
                type="checkbox"
                className="cookie-toggle"
                checked={draftMarketing}
                onChange={(e) => setDraftMarketing(e.target.checked)}
              />
            </div>
            <p className="cookie-category-desc">
              Used to measure campaigns and personalize relevant messages if we add such tools in the future.
            </p>
          </li>
        </ul>

        <div className="cookie-consent-modal-actions">
          <button type="button" className="cookie-btn cookie-btn-ghost" onClick={rejectNonEssential}>
            Reject non-essential
          </button>
          <button
            type="button"
            className="cookie-btn cookie-btn-outline"
            onClick={() => savePreferences({ analytics: draftAnalytics, marketing: draftMarketing })}
          >
            Save choices
          </button>
          <button type="button" className="cookie-btn cookie-btn-primary" onClick={acceptAll}>
            Accept all
          </button>
        </div>
      </div>
    </div>
  );
}

export default function CookieConsent() {
  const {
    consent,
    preferencesOpen,
    preferencesNonce,
    openPreferences,
    closePreferences,
    acceptAll,
    rejectNonEssential,
    savePreferences,
  } = useCookieConsent();

  const titleId = useId();
  const showInitialBanner = !consent;

  return (
    <>
      {preferencesOpen && (
        <div
          className="cookie-consent-backdrop"
          role="presentation"
          aria-hidden="true"
          onClick={closePreferences}
        />
      )}

      {showInitialBanner && !preferencesOpen && (
        <div
          className="cookie-consent-bar"
          role="region"
          aria-label="Cookie consent"
          aria-describedby={titleId}
        >
          <div className="cookie-consent-bar-inner container">
            <div className="cookie-consent-text">
              <p id={titleId} className="cookie-consent-title">
                Cookies and your privacy
              </p>
              <p className="cookie-consent-desc">
                We use necessary cookies to run this site. With your permission, we also use optional cookies for
                analytics and marketing. You can change your choice anytime. See our{' '}
                <Link to="/privacy" className="cookie-consent-link">
                  Privacy &amp; Cookie Policy
                </Link>{' '}
                for details.
              </p>
            </div>
            <div className="cookie-consent-actions">
              <button type="button" className="cookie-btn cookie-btn-ghost" onClick={rejectNonEssential}>
                Reject non-essential
              </button>
              <button type="button" className="cookie-btn cookie-btn-outline" onClick={openPreferences}>
                Customize
              </button>
              <button type="button" className="cookie-btn cookie-btn-primary" onClick={acceptAll}>
                Accept all
              </button>
            </div>
          </div>
        </div>
      )}

      {preferencesOpen && (
        <CookiePreferencesPanel
          key={preferencesNonce}
          consent={consent}
          onClose={closePreferences}
          acceptAll={acceptAll}
          rejectNonEssential={rejectNonEssential}
          savePreferences={savePreferences}
        />
      )}
    </>
  );
}
