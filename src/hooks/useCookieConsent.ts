import { useState, useEffect } from 'react';

export interface ConsentData {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

const CONSENT_KEY = 'cookie-consent';
const CONSENT_VERSION = '1.0';
const ANALYTICS_ID = 'G-ZK9LRZQ2RS';
const DEBUG_MODE = true; // Enable for debugging

// Analytics Debug Logger
const analyticsLogger = {
  log: (message: string, data?: any) => {
    if (DEBUG_MODE) {
      console.log(`🔍 [Analytics Debug] ${message}`, data || '');
    }
  },
  error: (message: string, error?: any) => {
    console.error(`❌ [Analytics Error] ${message}`, error || '');
  },
  success: (message: string, data?: any) => {
    if (DEBUG_MODE) {
      console.log(`✅ [Analytics Success] ${message}`, data || '');
    }
  }
};

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

  // Analytics Status Checker - runs every 30 seconds
  useEffect(() => {
    if (consentData?.analytics) {
      const interval = setInterval(() => {
        checkAnalyticsStatus();
      }, 30000);
      return () => clearInterval(interval);
    }
  }, [consentData]);

  const checkAnalyticsStatus = () => {
    const status = {
      scriptLoaded: !!document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${ANALYTICS_ID}"]`),
      gtagExists: typeof window.gtag === 'function',
      dataLayerExists: Array.isArray(window.dataLayer),
      cookieConsent: !!consentData?.analytics,
      timestamp: new Date().toISOString()
    };
    
    analyticsLogger.log('Analytics Status Check:', status);
    
    // Store status in window for manual checking
    (window as any).analyticsStatus = status;
    
    if (!status.scriptLoaded && consentData?.analytics) {
      analyticsLogger.error('Analytics script not loaded despite consent');
      // Attempt to reload
      loadGoogleAnalytics();
    }
  };

  const checkExistingConsent = () => {
    analyticsLogger.log('Checking existing consent...');
    try {
      if (typeof localStorage === 'undefined') return;
      
      const stored = localStorage.getItem(CONSENT_KEY);
      if (stored) {
        const data = JSON.parse(stored);
        analyticsLogger.log('Found stored consent:', data);
        
        if (data.version === CONSENT_VERSION) {
          setHasConsent(true);
          setConsentData(data.consent);
          setShowBanner(false);
          
          // Load Google Analytics if consent given
          if (data.consent.analytics) {
            analyticsLogger.log('Analytics consent found, loading Google Analytics...');
            loadGoogleAnalytics();
          } else {
            analyticsLogger.log('No analytics consent found');
          }
          return;
        }
      }
    } catch (error) {
      analyticsLogger.error('Error checking existing consent:', error);
    }
    
    // No valid consent found, show banner
    analyticsLogger.log('No valid consent found, showing banner');
    setHasConsent(false);
    setShowBanner(true);
  };

  const saveConsent = (consent: ConsentData) => {
    analyticsLogger.log('Saving consent:', consent);
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
        analyticsLogger.log('Analytics consent given, loading Google Analytics...');
        loadGoogleAnalytics();
      } else {
        analyticsLogger.log('Analytics consent denied');
      }
    } catch (error) {
      analyticsLogger.error('Error saving consent:', error);
    }
  };

  const loadGoogleAnalytics = () => {
    // Check if already loaded
    if (window.gtag && window.dataLayer) {
      analyticsLogger.log('Google Analytics already loaded');
      return;
    }

    analyticsLogger.log('Loading Google Analytics...');

    try {
      // Only load if not already loaded and we're in browser
      if (typeof window === 'undefined') {
        analyticsLogger.log('Not in browser environment');
        return;
      }

      // Initialize dataLayer first
      window.dataLayer = window.dataLayer || [];
      
      // Create gtag function
      function gtag(...args: any[]) {
        window.dataLayer.push(args);
      }
      window.gtag = gtag;

      // Load debug version if in debug mode
      const scriptSrc = DEBUG_MODE 
        ? `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}&l=dataLayer&debug=true`
        : `https://www.googletagmanager.com/gtag/js?id=${ANALYTICS_ID}`;

      // Check if script already exists
      const existingScript = document.querySelector(`script[src*="googletagmanager.com/gtag/js?id=${ANALYTICS_ID}"]`);
      if (existingScript) {
        analyticsLogger.log('Analytics script already exists');
        initializeAnalytics();
        return;
      }

      // Create and append the Google Analytics script
      const script = document.createElement('script');
      script.async = true;
      script.src = scriptSrc;
      
      script.onload = () => {
        analyticsLogger.success('Google Analytics script loaded');
        initializeAnalytics();
        
        // Test event to verify functionality
        setTimeout(() => {
          testAnalyticsEvent();
        }, 1000);
      };

      script.onerror = (error) => {
        analyticsLogger.error('Failed to load Google Analytics script', error);
        // Try fallback tracking
        initializeFallbackTracking();
      };

      document.head.appendChild(script);
      analyticsLogger.log('Analytics script added to DOM');

    } catch (error) {
      analyticsLogger.error('Error setting up Google Analytics:', error);
      initializeFallbackTracking();
    }
  };

  const initializeAnalytics = () => {
    try {
      // Initialize Google Analytics
      window.gtag('js', new Date());
      window.gtag('config', ANALYTICS_ID, {
        anonymize_ip: true,
        cookie_flags: 'SameSite=Lax;Secure',
        transport_type: 'beacon',
        debug_mode: DEBUG_MODE,
        send_page_view: true,
        custom_map: {'custom_parameter_1': 'mobile_user'}
      });

      analyticsLogger.success('Google Analytics initialized');
      
      // Track initial page view
      trackPageView(window.location.pathname);
      
    } catch (error) {
      analyticsLogger.error('Error initializing Google Analytics:', error);
    }
  };

  const testAnalyticsEvent = () => {
    try {
      if (window.gtag) {
        window.gtag('event', 'analytics_test', {
          event_category: 'System',
          event_label: 'Analytics Working',
          value: 1
        });
        analyticsLogger.success('Test event sent');
      }
    } catch (error) {
      analyticsLogger.error('Error sending test event:', error);
    }
  };

  const trackPageView = (path: string) => {
    try {
      if (window.gtag && consentData?.analytics) {
        window.gtag('config', ANALYTICS_ID, {
          page_path: path
        });
        analyticsLogger.log('Page view tracked:', path);
      }
    } catch (error) {
      analyticsLogger.error('Error tracking page view:', error);
    }
  };

  const initializeFallbackTracking = () => {
    analyticsLogger.log('Initializing fallback tracking...');
    
    // Simple fallback tracking to console
    (window as any).fallbackAnalytics = {
      pageViews: [],
      events: [],
      track: (type: string, data: any) => {
        const entry = {
          type,
          data,
          timestamp: new Date().toISOString(),
          url: window.location.href
        };
        
        if (type === 'pageview') {
          (window as any).fallbackAnalytics.pageViews.push(entry);
        } else {
          (window as any).fallbackAnalytics.events.push(entry);
        }
        
        analyticsLogger.log(`Fallback ${type} tracked:`, entry);
      }
    };
    
    // Track initial page view with fallback
    (window as any).fallbackAnalytics.track('pageview', {
      path: window.location.pathname
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

  // Expose debug functions to window for manual testing
  useEffect(() => {
    if (DEBUG_MODE) {
      (window as any).analyticsDebug = {
        checkStatus: checkAnalyticsStatus,
        testEvent: testAnalyticsEvent,
        trackPageView,
        getConsent: () => consentData,
        logger: analyticsLogger
      };
    }
  }, [consentData]);

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

// Extend window type for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
    analyticsStatus?: any;
    fallbackAnalytics?: any;
    analyticsDebug?: any;
  }
}