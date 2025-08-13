import { useState, useEffect } from 'react';

export interface ConsentData {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

const CONSENT_KEY = 'cookie-consent';
const CONSENT_VERSION = '1.0';

export const useCookieConsent = () => {
  const [hasConsent, setHasConsent] = useState<boolean | null>(null);
  const [consentData, setConsentData] = useState<ConsentData | null>(null);
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    checkExistingConsent();
  }, []);

  const checkExistingConsent = () => {
    try {
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        if (data.version === CONSENT_VERSION) {
          setHasConsent(true);
          setConsentData(data.consent);
          setShowBanner(false);
          
          // Load Google Analytics if consent given
          if (data.consent.analytics) {
            loadGoogleAnalytics();
          }
          return;
        }
      }
    } catch (error) {
      console.error('Error reading consent data:', error);
    }
    
    // No valid consent found, show banner
    setHasConsent(false);
    setShowBanner(true);
  };

  const saveConsent = (consent: ConsentData) => {
    const data = {
      version: CONSENT_VERSION,
      consent,
      timestamp: Date.now()
    };
    
    try {
      localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
      setHasConsent(true);
      setConsentData(consent);
      setShowBanner(false);
      
      // Load Google Analytics if consent given
      if (consent.analytics) {
        loadGoogleAnalytics();
      }
    } catch (error) {
      console.error('Error saving consent data:', error);
    }
  };

  const loadGoogleAnalytics = () => {
    // Only load if not already loaded
    if (window.gtag) return;

    // Create and load gtag script
    const script = document.createElement('script');
    script.async = true;
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZK9LRZQ2RS';
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
      window.dataLayer.push(args);
    }
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', 'G-ZK9LRZQ2RS', {
      anonymize_ip: true,
      cookie_flags: 'SameSite=Strict;Secure'
    });
  };

  const acceptAll = () => {
    const consent: ConsentData = {
      necessary: true,
      analytics: true,
      timestamp: Date.now()
    };
    saveConsent(consent);
  };

  const acceptSelected = (preferences: { analytics: boolean }) => {
    const consent: ConsentData = {
      necessary: true,
      analytics: preferences.analytics,
      timestamp: Date.now()
    };
    saveConsent(consent);
  };

  const reject = () => {
    const consent: ConsentData = {
      necessary: true,
      analytics: false,
      timestamp: Date.now()
    };
    saveConsent(consent);
  };

  const revokeConsent = () => {
    try {
      localStorage.removeItem(CONSENT_KEY);
      setHasConsent(false);
      setConsentData(null);
      setShowBanner(true);
      
      // Reload page to clear any loaded analytics
      window.location.reload();
    } catch (error) {
      console.error('Error revoking consent:', error);
    }
  };

  return {
    hasConsent,
    consentData,
    showBanner,
    acceptAll,
    acceptSelected,
    reject,
    revokeConsent
  };
};

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}