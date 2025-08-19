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
    // Check if we're in browser environment
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
          
          // Load Google Analytics if consent given
          if (data.consent.analytics) {
            console.log('Analytics consent found, loading Google Analytics');
            loadGoogleAnalytics();
          } else {
            console.log('No analytics consent found');
          }
          return;
        }
      }
    } catch {
      // Handle silently in production
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
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem(CONSENT_KEY, JSON.stringify(data));
      }
      setHasConsent(true);
      setConsentData(consent);
      setShowBanner(false);
      
      // Load Google Analytics if consent given
      if (consent.analytics) {
        console.log('Analytics consent given, loading Google Analytics');
        loadGoogleAnalytics();
      } else {
        console.log('Analytics consent not given');
      }
    } catch {
      // Handle silently in production
    }
  };

  const loadGoogleAnalytics = () => {
    try {
      // Only load if not already loaded and we're in browser
      if (typeof window === 'undefined') {
        console.log('Not in browser environment');
        return;
      }

      if (window.gtag) {
        console.log('Google Analytics already loaded, sending page view');
        window.gtag('config', 'G-ZK9LRZQ2RS', {
          page_title: document.title,
          page_location: window.location.href
        });
        return;
      }

      console.log('Loading Google Analytics with mobile-optimized settings...');

      // Initialize dataLayer first
      window.dataLayer = window.dataLayer || [];
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      // Create and load gtag script with retry mechanism
      const script = document.createElement('script');
      script.async = true;
      script.src = 'https://www.googletagmanager.com/gtag/js?id=G-ZK9LRZQ2RS';
      
      script.onload = () => {
        console.log('✅ Google Analytics script loaded successfully');
        
        // Initialize with mobile-friendly settings
        gtag('js', new Date());
        gtag('config', 'G-ZK9LRZQ2RS', {
          anonymize_ip: true,
          cookie_flags: 'SameSite=Lax;Secure',
          transport_type: 'beacon',
          custom_map: {'custom_parameter_1': 'mobile_user'},
          send_page_view: true
        });
        
        // Send initial page view
        gtag('event', 'page_view', {
          page_title: document.title,
          page_location: window.location.href,
          page_path: window.location.pathname,
          user_agent: navigator.userAgent
        });
        
        console.log('✅ Google Analytics initialized successfully');
      };
      
      script.onerror = (error) => {
        console.error('❌ Failed to load Google Analytics script:', error);
        // Retry once after 2 seconds
        setTimeout(() => {
          console.log('🔄 Retrying Google Analytics load...');
          document.head.appendChild(script.cloneNode(true));
        }, 2000);
      };
      
      document.head.appendChild(script);
    } catch (error) {
      console.error('❌ Error loading Google Analytics:', error);
    }
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
      if (typeof localStorage !== 'undefined') {
        localStorage.removeItem(CONSENT_KEY);
      }
      setHasConsent(false);
      setConsentData(null);
      setShowBanner(true);
      
      // Reload page to clear any loaded analytics
      if (typeof window !== 'undefined') {
        window.location.reload();
      }
    } catch {
      // Handle silently in production
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