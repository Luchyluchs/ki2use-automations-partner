import { useState, useEffect } from 'react';

export interface ConsentData {
  necessary: boolean;
  analytics: boolean;
  marketing: boolean;
  timestamp: number;
}

const CONSENT_KEY = 'cookie-consent';
const CONSENT_VERSION = '2.0';
const GTM_ID = 'GTM-NG98VCL9';

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [consentData, setConsentData] = useState<ConsentData | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      checkExistingConsent();
    }
  }, []);

  const checkExistingConsent = () => {
    try {
      if (typeof localStorage === 'undefined') return;
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        if (data.version === CONSENT_VERSION) {
          setHasConsent(true);
          setConsentData(data.consent);
          setShowBanner(false);
          if (data.consent.analytics) {
            triggerGTMEvents();
          }
          return;
        }
      }
    } catch {
      // Invalid stored consent
    }
    setHasConsent(false);
    setShowBanner(true);
  };

  const saveConsent = (consent: ConsentData) => {
    const data = { version: CONSENT_VERSION, consent, timestamp: Date.now() };
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
      }
      setHasConsent(true);
      setConsentData(consent);
      setShowBanner(false);
      if (consent.analytics) {
        triggerGTMEvents();
      }
    } catch {
      // Storage error - continue without persisting
    }
  };

  const triggerGTMEvents = () => {
    try {
      if (typeof window === 'undefined') return;
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'consent_update',
        analytics_consent: 'granted',
        timestamp: Date.now()
      });
      trackPageView(window.location.pathname);
    } catch {
      // GTM not available
    }
  };

  const trackPageView = (path: string) => {
    try {
      if (window.dataLayer && consentData?.analytics) {
        window.dataLayer.push({
          event: 'page_view',
          page_path: path,
          page_title: document.title,
          timestamp: Date.now()
        });
      }
    } catch {
      // Tracking error
    }
  };

  const acceptAll = () => {
    saveConsent({ necessary: true, analytics: true, marketing: true, timestamp: Date.now() });
  };

  const acceptSelected = (preferences: { analytics: boolean; marketing?: boolean }) => {
    saveConsent({
      necessary: true,
      analytics: preferences.analytics,
      marketing: preferences.marketing || false,
      timestamp: Date.now()
    });
  };

  const reject = () => {
    saveConsent({ necessary: true, analytics: false, marketing: false, timestamp: Date.now() });
  };

  const revokeConsent = () => {
    try {
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(CONSENT_KEY);
      }
      setHasConsent(false);
      setConsentData(null);
      setShowBanner(true);
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    } catch {
      // Handle silently
    }
  };

  return {
    hasConsent,
    consentData,
    showBanner,
    acceptAll,
    acceptSelected,
    reject,
    revokeConsent,
    trackPageView
  };
};

declare global {
  interface Window {
    dataLayer: any[];
  }
}
