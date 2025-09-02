import { useEffect, useCallback } from 'react';

interface SecurityEvent {
  type: 'form_submission' | 'rate_limit_exceeded' | 'suspicious_activity' | 'error';
  details: any;
  timestamp: number;
  userAgent: string;
  url: string;
}

export const useSecurityMonitoring = () => {
  
  const logSecurityEvent = useCallback((type: SecurityEvent['type'], details: any) => {
    const event: SecurityEvent = {
      type,
      details,
      timestamp: Date.now(),
      userAgent: navigator.userAgent,
      url: window.location.href
    };

    // Store locally for debugging (limit to 100 events)
    try {
      const stored = JSON.parse(localStorage.getItem('security_events') || '[]');
      stored.push(event);
      
      // Keep only last 100 events
      if (stored.length > 100) {
        stored.splice(0, stored.length - 100);
      }
      
      localStorage.setItem('security_events', JSON.stringify(stored));
    } catch (error) {
      console.warn('Failed to log security event:', error);
    }

    // Console log in development
    if (import.meta.env.DEV) {
      console.log('🔒 Security Event:', event);
    }
  }, []);

  const validateHeaders = useCallback(() => {
    // Check if security headers are present
    const requiredHeaders = [
      'X-Frame-Options',
      'X-Content-Type-Options', 
      'X-XSS-Protection',
      'Strict-Transport-Security'
    ];

    // This would normally be done server-side, but we can check client-side for monitoring
    const missingHeaders = requiredHeaders.filter(header => 
      !document.querySelector(`meta[http-equiv="${header}"]`)
    );

    if (missingHeaders.length > 0) {
      logSecurityEvent('error', { 
        type: 'missing_security_headers',
        missing: missingHeaders 
      });
    }
  }, [logSecurityEvent]);

  const detectSuspiciousActivity = useCallback(() => {
    // Monitor for rapid page navigation (potential bot behavior)
    let navigationCount = 0;
    const startTime = Date.now();

    const checkNavigation = () => {
      navigationCount++;
      if (navigationCount > 10 && (Date.now() - startTime) < 5000) {
        logSecurityEvent('suspicious_activity', {
          type: 'rapid_navigation',
          count: navigationCount,
          timeWindow: Date.now() - startTime
        });
      }
    };

    window.addEventListener('beforeunload', checkNavigation);
    return () => window.removeEventListener('beforeunload', checkNavigation);
  }, [logSecurityEvent]);

  // Initialize monitoring on mount
  useEffect(() => {
    validateHeaders();
    const cleanup = detectSuspiciousActivity();

    // Monitor for console manipulation attempts
    let devtools = false;
    const devtoolsDetection = setInterval(() => {
      if (console.clear.toString().indexOf('native code') === -1) {
        if (!devtools) {
          devtools = true;
          logSecurityEvent('suspicious_activity', {
            type: 'devtools_manipulation'
          });
        }
      }
    }, 1000);

    return () => {
      cleanup && cleanup();
      clearInterval(devtoolsDetection);
    };
  }, [validateHeaders, detectSuspiciousActivity, logSecurityEvent]);

  return {
    logSecurityEvent,
    getSecurityEvents: () => {
      try {
        return JSON.parse(localStorage.getItem('security_events') || '[]');
      } catch {
        return [];
      }
    },
    clearSecurityEvents: () => {
      localStorage.removeItem('security_events');
    }
  };
};
