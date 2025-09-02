import { useCallback, useEffect, useState } from 'react';

// CSRF Token Management Hook
export const useCSRFProtection = () => {
  const [csrfToken, setCSRFToken] = useState<string>('');

  // Generate a secure CSRF token
  const generateCSRFToken = useCallback(() => {
    const array = new Uint8Array(32);
    crypto.getRandomValues(array);
    const token = Array.from(array, byte => byte.toString(16).padStart(2, '0')).join('');
    return token;
  }, []);

  // Initialize CSRF token on mount
  useEffect(() => {
    let token = sessionStorage.getItem('csrf_token');
    if (!token) {
      token = generateCSRFToken();
      sessionStorage.setItem('csrf_token', token);
    }
    setCSRFToken(token);
  }, [generateCSRFToken]);

  // Validate CSRF token for forms
  const validateCSRF = useCallback((token: string) => {
    const storedToken = sessionStorage.getItem('csrf_token');
    return token === storedToken;
  }, []);

  // Get headers with CSRF token
  const getSecureHeaders = useCallback(() => {
    return {
      'Content-Type': 'application/json',
      'X-CSRF-Token': csrfToken,
      'X-Requested-With': 'XMLHttpRequest'
    };
  }, [csrfToken]);

  // Refresh token (call after successful form submission)
  const refreshToken = useCallback(() => {
    const newToken = generateCSRFToken();
    sessionStorage.setItem('csrf_token', newToken);
    setCSRFToken(newToken);
    return newToken;
  }, [generateCSRFToken]);

  return {
    csrfToken,
    validateCSRF,
    getSecureHeaders,
    refreshToken
  };
};