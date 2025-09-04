import { useState, useCallback, useEffect } from 'react';

interface PasswordProtectionConfig {
  password: string;
  sessionDuration?: number; // in milliseconds, default 30 minutes
}

export const usePasswordProtection = (config: PasswordProtectionConfig) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  
  const sessionKey = 'demoportal_session';
  const sessionDuration = config.sessionDuration || 30 * 60 * 1000; // 30 minutes default

  // Check existing session on mount
  useEffect(() => {
    const checkSession = () => {
      const sessionData = sessionStorage.getItem(sessionKey);
      if (sessionData) {
        try {
          const { timestamp, authenticated } = JSON.parse(sessionData);
          const now = Date.now();
          
          if (authenticated && (now - timestamp) < sessionDuration) {
            setIsAuthenticated(true);
            
            // Set timeout to auto-logout when session expires
            const remainingTime = sessionDuration - (now - timestamp);
            setTimeout(() => {
              logout();
            }, remainingTime);
          } else {
            // Session expired
            sessionStorage.removeItem(sessionKey);
          }
        } catch {
          // Invalid session data
          sessionStorage.removeItem(sessionKey);
        }
      }
      setIsLoading(false);
    };
    
    checkSession();
  }, [sessionDuration]);

  const authenticate = useCallback((inputPassword: string): boolean => {
    if (inputPassword === config.password) {
      const sessionData = {
        timestamp: Date.now(),
        authenticated: true
      };
      
      sessionStorage.setItem(sessionKey, JSON.stringify(sessionData));
      setIsAuthenticated(true);
      
      // Auto-logout after session duration
      setTimeout(() => {
        logout();
      }, sessionDuration);
      
      return true;
    }
    return false;
  }, [config.password, sessionDuration]);

  const logout = useCallback(() => {
    sessionStorage.removeItem(sessionKey);
    setIsAuthenticated(false);
  }, []);

  const getRemainingTime = useCallback((): number => {
    const sessionData = sessionStorage.getItem(sessionKey);
    if (!sessionData) return 0;
    
    try {
      const { timestamp } = JSON.parse(sessionData);
      const elapsed = Date.now() - timestamp;
      const remaining = Math.max(0, sessionDuration - elapsed);
      return Math.floor(remaining / 1000); // Return in seconds
    } catch {
      return 0;
    }
  }, [sessionDuration]);

  return {
    isAuthenticated,
    isLoading,
    authenticate,
    logout,
    getRemainingTime
  };
};