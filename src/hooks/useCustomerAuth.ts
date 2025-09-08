import { useState, useCallback, useEffect } from 'react';

export interface CustomerConfig {
  id: string;
  name: string;
  chatbotWebhooks: {
    support: string;
    booking: string;
  };
  voiceAgentIds: {
    support: string;
    booking: string;
  };
  contactFormWebhook: string;
}

interface CustomerCredentials {
  username: string;
  password: string;
  customerConfig: CustomerConfig;
}

// Define customer credentials
const customerCredentials: CustomerCredentials[] = [
  {
    username: 'C3',
    password: 'KI2USE2025',
    customerConfig: {
      id: 'c3-marketing',
      name: 'C3 Marketing Agentur',
      chatbotWebhooks: {
        support: 'https://n8n.srv929188.hstgr.cloud/webhook/295fef3d-10fd-43bb-95a2-de0cbd4512d1',
        booking: 'https://n8n.srv929188.hstgr.cloud/webhook/placeholder-booking-chat'
      },
      voiceAgentIds: {
        support: 'agent_9001k47yszvrfgb8xqy45xyhwcts',
        booking: 'agent_placeholder_booking_voice'
      },
      contactFormWebhook: 'https://n8n.srv929188.hstgr.cloud/webhook/kontaktformular'
    }
  }
];

interface CustomerAuthConfig {
  sessionDuration?: number; // in milliseconds, default 30 minutes
}

export const useCustomerAuth = (config: CustomerAuthConfig = {}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentCustomer, setCurrentCustomer] = useState<CustomerConfig | null>(null);
  
  const sessionKey = 'demoportal_session';
  const sessionDuration = config.sessionDuration || 30 * 60 * 1000; // 30 minutes default

  // Check existing session on mount
  useEffect(() => {
    const checkSession = () => {
      const sessionData = sessionStorage.getItem(sessionKey);
      if (sessionData) {
        try {
          const { timestamp, authenticated, customer } = JSON.parse(sessionData);
          const now = Date.now();
          
          if (authenticated && (now - timestamp) < sessionDuration && customer) {
            setIsAuthenticated(true);
            setCurrentCustomer(customer);
            
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

  const authenticate = useCallback((username: string, password: string): boolean => {
    const credentials = customerCredentials.find(
      cred => cred.username === username && cred.password === password
    );
    
    if (credentials) {
      const sessionData = {
        timestamp: Date.now(),
        authenticated: true,
        customer: credentials.customerConfig
      };
      
      sessionStorage.setItem(sessionKey, JSON.stringify(sessionData));
      setIsAuthenticated(true);
      setCurrentCustomer(credentials.customerConfig);
      
      // Auto-logout after session duration
      setTimeout(() => {
        logout();
      }, sessionDuration);
      
      return true;
    }
    return false;
  }, [sessionDuration]);

  const logout = useCallback(() => {
    sessionStorage.removeItem(sessionKey);
    setIsAuthenticated(false);
    setCurrentCustomer(null);
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
    currentCustomer,
    authenticate,
    logout,
    getRemainingTime
  };
};