import { useEffect } from 'react';
import { useSecurityMonitoring } from '@/hooks/useSecurityMonitoring';

// Lightweight security monitor - observes DOM for unauthorized script injections
const SecurityMonitor = () => {
  const { logSecurityEvent } = useSecurityMonitoring();

  useEffect(() => {
    // Monitor for unauthorized script injections via MutationObserver
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'childList') {
          mutation.addedNodes.forEach((node) => {
            if (node.nodeType === Node.ELEMENT_NODE) {
              const element = node as Element;
              if (element.tagName === 'SCRIPT' && !element.getAttribute('data-approved')) {
                logSecurityEvent('suspicious_activity', {
                  type: 'unauthorized_script_injection',
                  src: element.getAttribute('src') || 'inline',
                });
              }
            }
          });
        }
      });
    });

    observer.observe(document.body, { childList: true, subtree: true });
    return () => observer.disconnect();
  }, [logSecurityEvent]);

  return null;
};

export default SecurityMonitor;
