import { useState, useCallback, useEffect, useRef } from 'react';
import { supabase } from '@/integrations/supabase/client';

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

interface CustomerAuthConfig {
  /** Optional client-side inactivity timeout; the server is the source of truth. */
  sessionDuration?: number;
}

const TOKEN_KEY = 'demoportal_token';

export const useCustomerAuth = (_config: CustomerAuthConfig = {}) => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [currentCustomer, setCurrentCustomer] = useState<CustomerConfig | null>(null);
  const [expiresAt, setExpiresAt] = useState<number | null>(null);
  const logoutTimerRef = useRef<number | null>(null);

  const clearLogoutTimer = () => {
    if (logoutTimerRef.current !== null) {
      window.clearTimeout(logoutTimerRef.current);
      logoutTimerRef.current = null;
    }
  };

  const logout = useCallback(async () => {
    const token = sessionStorage.getItem(TOKEN_KEY);
    sessionStorage.removeItem(TOKEN_KEY);
    clearLogoutTimer();
    setIsAuthenticated(false);
    setCurrentCustomer(null);
    setExpiresAt(null);
    if (token) {
      try {
        await supabase.functions.invoke('demo-auth', { body: { action: 'logout', token } });
      } catch {
        /* ignore */
      }
    }
  }, []);

  const scheduleAutoLogout = useCallback((expiresAtMs: number) => {
    clearLogoutTimer();
    const remaining = expiresAtMs - Date.now();
    if (remaining <= 0) {
      void logout();
      return;
    }
    logoutTimerRef.current = window.setTimeout(() => {
      void logout();
    }, remaining);
  }, [logout]);

  // Verify existing token on mount
  useEffect(() => {
    let cancelled = false;
    const verify = async () => {
      const token = sessionStorage.getItem(TOKEN_KEY);
      if (!token) {
        setIsLoading(false);
        return;
      }
      try {
        const { data, error } = await supabase.functions.invoke('demo-auth', {
          body: { action: 'verify', token },
        });
        if (cancelled) return;
        if (error || !data || (data as any).error || !(data as any).customer) {
          sessionStorage.removeItem(TOKEN_KEY);
        } else {
          const expMs = new Date((data as any).expiresAt).getTime();
          setCurrentCustomer((data as any).customer as CustomerConfig);
          setIsAuthenticated(true);
          setExpiresAt(expMs);
          scheduleAutoLogout(expMs);
        }
      } catch {
        sessionStorage.removeItem(TOKEN_KEY);
      } finally {
        if (!cancelled) setIsLoading(false);
      }
    };
    void verify();
    return () => {
      cancelled = true;
      clearLogoutTimer();
    };
  }, [scheduleAutoLogout]);

  const authenticate = useCallback(async (username: string, password: string): Promise<boolean> => {
    try {
      const { data, error } = await supabase.functions.invoke('demo-auth', {
        body: { action: 'login', username, password },
      });
      if (error || !data || (data as any).error || !(data as any).token) {
        return false;
      }
      const payload = data as { token: string; customer: CustomerConfig; expiresAt: string };
      sessionStorage.setItem(TOKEN_KEY, payload.token);
      const expMs = new Date(payload.expiresAt).getTime();
      setCurrentCustomer(payload.customer);
      setIsAuthenticated(true);
      setExpiresAt(expMs);
      scheduleAutoLogout(expMs);
      return true;
    } catch {
      return false;
    }
  }, [scheduleAutoLogout]);

  const getRemainingTime = useCallback((): number => {
    if (!expiresAt) return 0;
    return Math.max(0, Math.floor((expiresAt - Date.now()) / 1000));
  }, [expiresAt]);

  return {
    isAuthenticated,
    isLoading,
    currentCustomer,
    authenticate,
    logout,
    getRemainingTime,
  };
};
