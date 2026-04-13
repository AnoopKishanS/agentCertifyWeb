import React, { useCallback, useMemo, useState } from 'react';
import { CookieConsentContext } from './cookieConsentContextBase';
import { loadConsent, saveConsent } from '../lib/cookieConsentStorage';

function readInitialConsent() {
  if (typeof window === 'undefined') return null;
  return loadConsent();
}

export function CookieConsentProvider({ children }) {
  const [consent, setConsent] = useState(readInitialConsent);
  const [preferencesOpen, setPreferencesOpen] = useState(false);
  const [preferencesNonce, setPreferencesNonce] = useState(0);

  const openPreferences = useCallback(() => {
    setPreferencesNonce((n) => n + 1);
    setPreferencesOpen(true);
  }, []);

  const closePreferences = useCallback(() => setPreferencesOpen(false), []);

  const acceptAll = useCallback(() => {
    const next = saveConsent({ necessary: true, analytics: true, marketing: true });
    setConsent(next);
    setPreferencesOpen(false);
  }, []);

  const rejectNonEssential = useCallback(() => {
    const next = saveConsent({ necessary: true, analytics: false, marketing: false });
    setConsent(next);
    setPreferencesOpen(false);
  }, []);

  const savePreferences = useCallback((prefs) => {
    const next = saveConsent({
      necessary: true,
      analytics: Boolean(prefs.analytics),
      marketing: Boolean(prefs.marketing),
    });
    setConsent(next);
    setPreferencesOpen(false);
  }, []);

  const hasConsent = useCallback(
    (category) => {
      if (!consent) return false;
      if (category === 'necessary') return true;
      if (category === 'analytics') return consent.analytics === true;
      if (category === 'marketing') return consent.marketing === true;
      return false;
    },
    [consent],
  );

  const value = useMemo(
    () => ({
      consent,
      hasConsent,
      preferencesOpen,
      preferencesNonce,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectNonEssential,
      savePreferences,
    }),
    [
      consent,
      hasConsent,
      preferencesOpen,
      preferencesNonce,
      openPreferences,
      closePreferences,
      acceptAll,
      rejectNonEssential,
      savePreferences,
    ],
  );

  return <CookieConsentContext.Provider value={value}>{children}</CookieConsentContext.Provider>;
}
