/** @typedef {{ version: number, necessary: true, analytics: boolean, marketing: boolean, updatedAt: string }} StoredConsent */

export const CONSENT_STORAGE_KEY = 'solvik_cookie_consent';
export const CONSENT_VERSION = 1;

/**
 * @returns {StoredConsent | null}
 */
export function loadConsent() {
  try {
    const raw = localStorage.getItem(CONSENT_STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    if (parsed.version !== CONSENT_VERSION || typeof parsed.analytics !== 'boolean' || typeof parsed.marketing !== 'boolean') {
      return null;
    }
    return parsed;
  } catch {
    return null;
  }
}

/**
 * @param {Omit<StoredConsent, 'version' | 'updatedAt'>} consent
 */
export function saveConsent(consent) {
  const stored = {
    ...consent,
    version: CONSENT_VERSION,
    necessary: true,
    updatedAt: new Date().toISOString(),
  };
  localStorage.setItem(CONSENT_STORAGE_KEY, JSON.stringify(stored));
  window.dispatchEvent(new CustomEvent('cookieconsentchange', { detail: stored }));
  return stored;
}
