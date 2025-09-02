import { useEffect } from 'react';
import { useSecurityMonitoring } from '@/hooks/useSecurityMonitoring';

// Component to initialize security monitoring globally
const SecurityMonitor = () => {
  const { logSecurityEvent } = useSecurityMonitoring();

  useEffect(() => {
    // Monitor for potential security threats
    const monitorSecurity = () => {
      // Check for suspicious console access
      const originalConsole = console.log;
      console.log = function(...args) {
        if (args.some(arg => 
          typeof arg === 'string' && 
          (arg.includes('script') || arg.includes('XSS') || arg.includes('inject'))
        )) {
          logSecurityEvent('suspicious_activity', {
            type: 'console_injection_attempt',
            args: args.map(arg => String(arg).substring(0, 100))
          });
        }
        originalConsole.apply(console, args);
      };

      // Monitor for suspicious DOM manipulation
      const observer = new MutationObserver((mutations) => {
        mutations.forEach((mutation) => {
          if (mutation.type === 'childList') {
            mutation.addedNodes.forEach((node) => {
              if (node.nodeType === Node.ELEMENT_NODE) {
                const element = node as Element;
                // Check for suspicious script injections
                if (element.tagName === 'SCRIPT' && 
                    !element.getAttribute('data-approved')) {
                  logSecurityEvent('suspicious_activity', {
                    type: 'unauthorized_script_injection',
                    tagName: element.tagName,
                    src: element.getAttribute('src') || 'inline',
                    content: element.textContent?.substring(0, 200)
                  });
                }
              }
            });
          }
        });
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true
      });

      return () => {
        console.log = originalConsole;
        observer.disconnect();
      };
    };

    const cleanup = monitorSecurity();

    // Performance monitoring for potential DDoS
    let requestCount = 0;
    const requestStartTime = Date.now();
    
    const originalFetch = window.fetch;
    window.fetch = function(...args) {
      requestCount++;
      
      // Log if too many requests in short time
      if (requestCount > 50 && (Date.now() - requestStartTime) < 60000) {
        logSecurityEvent('suspicious_activity', {
          type: 'high_request_volume',
          requestCount,
          timeWindow: Date.now() - requestStartTime
        });
      }
      
      return originalFetch.apply(this, args);
    };

    return () => {
      cleanup();
      window.fetch = originalFetch;
    };
  }, [logSecurityEvent]);

  // This component doesn't render anything, just monitors
  return null;
};

export default SecurityMonitor;