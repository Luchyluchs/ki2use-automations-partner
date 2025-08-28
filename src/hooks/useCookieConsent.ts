import { useState, useEffect } from 'react';

export interface ConsentData {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

const CONSENT_KEY = 'cookie-consent';
const CONSENT_VERSION = '1.0';
const GTM_ID = 'GTM-N098VCL9';
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
      gtmLoaded: !!document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${GTM_ID}"]`),
      dataLayerExists: Array.isArray(window.dataLayer),
      gtmInitialized: !!(window.dataLayer && window.dataLayer.some((item: any) => item.event === 'gtm.js')),
      cookieConsent: !!consentData?.analytics,
      timestamp: new Date().toISOString()
    };
    
    analyticsLogger.log('GTM Status Check:', status);
    
    // Store status in window for manual checking
    (window as any).gtmStatus = status;
    
    if (consentData?.analytics && !status.gtmInitialized) {
      analyticsLogger.log('GTM consent given, triggering analytics events');
      triggerGTMEvents();
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
          
          // Trigger GTM events if consent given
          if (data.consent.analytics) {
            analyticsLogger.log('Analytics consent found, triggering GTM events...');
            triggerGTMEvents();
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
      
      // Trigger GTM events if consent given
      if (consent.analytics) {
        analyticsLogger.log('Analytics consent given, triggering GTM events...');
        triggerGTMEvents();
      } else {
        analyticsLogger.log('Analytics consent denied');
      }
    } catch (error) {
      analyticsLogger.error('Error saving consent:', error);
    }
  };

  const triggerGTMEvents = () => {
    try {
      if (typeof window === 'undefined') {
        analyticsLogger.log('Not in browser environment');
        return;
      }

      // Initialize dataLayer if not exists
      window.dataLayer = window.dataLayer || [];

      // Push consent event to GTM
      window.dataLayer.push({
        event: 'consent_update',
        analytics_consent: 'granted',
        timestamp: Date.now()
      });

      analyticsLogger.success('GTM consent event triggered');

      // Track page view
      trackPageView(window.location.pathname);
      
      // Test event to verify functionality
      setTimeout(() => {
        testGTMEvent();
      }, 1000);

    } catch (error) {
      analyticsLogger.error('Error triggering GTM events:', error);
      initializeFallbackTracking();
    }
  };

  const testGTMEvent = () => {
    try {
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'analytics_test',
          event_category: 'System',
          event_label: 'GTM Working',
          value: 1,
          timestamp: Date.now()
        });
        analyticsLogger.success('GTM test event sent');
      }
    } catch (error) {
      analyticsLogger.error('Error sending GTM test event:', error);
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
        analyticsLogger.log('GTM page view tracked:', path);
      }
    } catch (error) {
      analyticsLogger.error('Error tracking GTM page view:', error);
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
      (window as any).gtmDebug = {
        checkStatus: checkAnalyticsStatus,
        testEvent: testGTMEvent,
        trackPageView,
        triggerEvents: triggerGTMEvents,
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

// Extend window type for GTM
declare global {
  interface Window {
    dataLayer: any[];
    gtmStatus?: any;
    fallbackAnalytics?: any;
    gtmDebug?: any;
  }
}