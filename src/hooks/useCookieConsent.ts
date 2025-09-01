import { useState, useEffect } from 'react';

export interface ConsentData {
  necessary: boolean;
  analytics: boolean;
  timestamp: number;
}

const CONSENT_KEY = 'cookie-consent';
const CONSENT_VERSION = '1.0';
const GTM_ID = 'GTM-NG98VCL9';
const DEBUG_MODE = true; // Enable for debugging

// GTM Container Validation
const validateGTMContainer = async (containerId: string): Promise<boolean> => {
  try {
    const response = await fetch(`https://www.googletagmanager.com/gtm.js?id=${containerId}`, {
      method: 'HEAD',
      mode: 'no-cors'
    });
    return response.status !== 404;
  } catch {
    return false;
  }
};

// GTM Container Status Checker
const checkGTMContainerStatus = async () => {
  analyticsLogger.log('Checking GTM container status for:', GTM_ID);
  
  // Check if container exists
  const containerExists = await validateGTMContainer(GTM_ID);
  
  if (!containerExists) {
    analyticsLogger.error(`GTM Container ${GTM_ID} returns 404 - Container may not exist, be unpublished, or deleted`);
    
    // Provide troubleshooting info
    analyticsLogger.log('GTM 404 Troubleshooting:');
    analyticsLogger.log('1. Verify the container ID is correct');
    analyticsLogger.log('2. Check if the container is published in GTM');
    analyticsLogger.log('3. Ensure the GTM account has not been suspended');
    analyticsLogger.log('4. Container URL being tested:', `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
    
    return false;
  }
  
  analyticsLogger.success('GTM container exists and is accessible');
  return true;
};

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
      // First check GTM container status
      checkGTMContainerStatus().then(containerValid => {
        if (!containerValid) {
          analyticsLogger.error('GTM container validation failed - analytics may not work properly');
          // Still check consent, but warn user
          (window as any).gtmContainerError = true;
        }
        checkExistingConsent();
      });
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
    const gtmScript = document.querySelector(`script[src*="googletagmanager.com/gtm.js?id=${GTM_ID}"]`);
    const windowGTMStatus = (window as any).gtmLoadStatus;
    const windowCheckStatus = (window as any).checkGTMStatus;
    
    const status = {
      gtmScriptPresent: !!gtmScript,
      gtmLoaded: windowGTMStatus?.loaded || false,
      gtmError: windowGTMStatus?.error || null,
      gtmAttempts: windowGTMStatus?.attempts || 0,
      fallbackMode: windowGTMStatus?.fallbackMode || false,
      dataLayerExists: Array.isArray(window.dataLayer),
      dataLayerLength: window.dataLayer?.length || 0,
      gtmInitialized: !!(window.dataLayer && window.dataLayer.some((item: any) => item.event === 'gtm.js')),
      cookieConsent: !!consentData?.analytics,
      containerID: GTM_ID,
      timestamp: new Date().toISOString()
    };
    
    // Enhanced logging with detailed status
    analyticsLogger.log('Enhanced GTM Status Check:', status);
    
    // Check for network issues
    if (gtmScript && !status.gtmLoaded && !status.gtmError) {
      analyticsLogger.log('GTM script present but not loaded - possible network issue');
    }
    
    // Store comprehensive status in window for manual checking
    (window as any).gtmStatus = status;
    
    // Get additional status from enhanced GTM loader if available
    if (windowCheckStatus && typeof windowCheckStatus === 'function') {
      const enhancedStatus = windowCheckStatus();
      (window as any).gtmEnhancedStatus = enhancedStatus;
      analyticsLogger.log('Enhanced GTM Loader Status:', enhancedStatus);
    }
    
    // Trigger events if consent given but GTM not initialized
    if (consentData?.analytics && !status.gtmInitialized) {
      analyticsLogger.log('GTM consent given but not initialized, triggering analytics events');
      triggerGTMEvents();
    }
    
    // Alert on critical issues
    if (status.gtmError) {
      analyticsLogger.error('Critical GTM Error detected:', status.gtmError);
    }
    
    if (status.fallbackMode) {
      analyticsLogger.log('GTM running in fallback mode');
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

      // Enhanced GTM status check before triggering events
      const windowGTMStatus = (window as any).gtmLoadStatus;
      analyticsLogger.log('GTM Status before triggering events:', windowGTMStatus);

      // Initialize dataLayer if not exists
      window.dataLayer = window.dataLayer || [];

      // Enhanced consent event with more context
      const consentEvent = {
        event: 'consent_update',
        analytics_consent: 'granted',
        consent_timestamp: Date.now(),
        gtm_container_id: GTM_ID,
        page_url: window.location.href,
        page_path: window.location.pathname,
        user_agent: navigator.userAgent.substring(0, 100), // Truncated for privacy
        timestamp: Date.now()
      };

      window.dataLayer.push(consentEvent);
      analyticsLogger.success('Enhanced GTM consent event triggered:', consentEvent);

      // Validate GTM is responding
      setTimeout(() => {
        validateGTMResponse();
      }, 500);

      // Track page view with enhanced data
      trackPageView(window.location.pathname);
      
      // Test event to verify functionality with delay
      setTimeout(() => {
        testGTMEvent();
      }, 1500);

      // Additional container validation
      setTimeout(() => {
        validateGTMContainerInternal();
      }, 3000);

    } catch (error) {
      analyticsLogger.error('Error triggering GTM events:', error);
      initializeFallbackTracking();
    }
  };

  const validateGTMResponse = () => {
    try {
      const windowGTMStatus = (window as any).gtmLoadStatus;
      const dataLayerLength = window.dataLayer?.length || 0;
      
      analyticsLogger.log('GTM Response Validation:', {
        gtmLoaded: windowGTMStatus?.loaded,
        dataLayerLength,
        fallbackMode: windowGTMStatus?.fallbackMode
      });
      
      if (!windowGTMStatus?.loaded && !windowGTMStatus?.fallbackMode) {
        analyticsLogger.error('GTM not responding after consent - potential container issue');
      }
    } catch (error) {
      analyticsLogger.error('Error validating GTM response:', error);
    }
  };

  const validateGTMContainerInternal = () => {
    try {
      const hasGTMEvents = window.dataLayer?.some((item: any) => 
        item.event === 'gtm.js' || item.event === 'consent_update'
      );
      
      const containerValidation = {
        gtm_container_id: GTM_ID,
        has_gtm_events: hasGTMEvents,
        dataLayer_length: window.dataLayer?.length || 0,
        gtm_script_loaded: !!(window as any).gtmLoadStatus?.loaded,
        timestamp: new Date().toISOString()
      };

      analyticsLogger.log('GTM Container Validation:', containerValidation);
      
      // Store validation results
      (window as any).gtmContainerValidation = containerValidation;
      
      if (!hasGTMEvents) {
        analyticsLogger.error('No GTM events detected - container may not be published or configured correctly');
      }
    } catch (error) {
      analyticsLogger.error('Error validating GTM container:', error);
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

  // Expose enhanced debug functions to window for manual testing
  useEffect(() => {
    if (DEBUG_MODE) {
      (window as any).gtmDebug = {
        // Status checking
        checkStatus: checkAnalyticsStatus,
        checkFullStatus: () => {
          checkAnalyticsStatus();
          if ((window as any).checkGTMStatus) {
            return (window as any).checkGTMStatus();
          }
        },
        
        // Event testing
        testEvent: testGTMEvent,
        trackPageView,
        triggerEvents: triggerGTMEvents,
        
        // Validation
        validateResponse: validateGTMResponse,
        validateContainerInternal: validateGTMContainerInternal,
        
        // Data access
        getConsent: () => consentData,
        getDataLayer: () => window.dataLayer,
        getGTMStatus: () => (window as any).gtmLoadStatus,
        getContainerValidation: () => (window as any).gtmContainerValidation,
        
        // Utilities
        logger: analyticsLogger,
        containerId: GTM_ID,
        
        // Manual triggers for testing
        forceRetrigger: () => {
          analyticsLogger.log('Forcing GTM events retrigger...');
          triggerGTMEvents();
        },
        
        // Container validation and testing
        validateContainerStatus: async () => {
          return await checkGTMContainerStatus();
        },
        
        // Test different container ID
        testContainerID: async (newContainerID: string) => {
          analyticsLogger.log(`Testing container ID: ${newContainerID}`);
          const isValid = await validateGTMContainer(newContainerID);
          analyticsLogger.log(`Container ${newContainerID} is ${isValid ? 'valid' : 'invalid'}`);
          return isValid;
        },
        
        // Network diagnostics
        checkNetworkConnectivity: () => {
          const testUrl = `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`;
          fetch(testUrl, { method: 'HEAD', mode: 'no-cors' })
            .then(() => analyticsLogger.success('GTM network connectivity OK'))
            .catch(err => analyticsLogger.error('GTM network connectivity failed:', err));
        },
        
        // Container troubleshooting guide
        troubleshoot: () => {
          analyticsLogger.log('🔧 GTM TROUBLESHOOTING GUIDE:');
          analyticsLogger.log('1. Check GTM account: https://tagmanager.google.com/');
          analyticsLogger.log(`2. Verify container ${GTM_ID} exists and is published`);
          analyticsLogger.log('3. Check if container has at least one published version');
          analyticsLogger.log('4. Verify workspace is not in preview mode only');
          analyticsLogger.log('5. Container URL:', `https://www.googletagmanager.com/gtm.js?id=${GTM_ID}`);
          analyticsLogger.log('6. Test manually: Open above URL in browser - should NOT return 404');
          
          // Auto-run container validation
          setTimeout(() => {
            if ((window as any).gtmDebug.validateContainerStatus) {
              (window as any).gtmDebug.validateContainerStatus();
            }
          }, 1000);
        }
      };
      
      // Auto-run network check on debug initialization
      if ((window as any).gtmDebug.checkNetworkConnectivity) {
        setTimeout(() => {
          (window as any).gtmDebug.checkNetworkConnectivity();
        }, 2000);
      }
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