import { useState, useCallback } from 'react';

interface RateLimitConfig {
  maxAttempts: number;
  windowMs: number;
  blockDurationMs: number;
}

interface RateLimitState {
  attempts: number;
  firstAttempt: number;
  blockedUntil: number;
}

export const useRateLimit = (key: string, config: RateLimitConfig) => {
  const [state, setState] = useState<RateLimitState>(() => {
    const stored = localStorage.getItem(`rateLimit_${key}`);
    if (stored) {
      try {
        const parsed = JSON.parse(stored);
        const now = Date.now();
        
        // Reset if outside window or block period expired
        if (now - parsed.firstAttempt > config.windowMs || 
            (parsed.blockedUntil && now > parsed.blockedUntil)) {
          return { attempts: 0, firstAttempt: 0, blockedUntil: 0 };
        }
        
        return parsed;
      } catch {
        return { attempts: 0, firstAttempt: 0, blockedUntil: 0 };
      }
    }
    return { attempts: 0, firstAttempt: 0, blockedUntil: 0 };
  });

  const isBlocked = useCallback(() => {
    const now = Date.now();
    return state.blockedUntil > 0 && now < state.blockedUntil;
  }, [state.blockedUntil]);

  const getRemainingTime = useCallback(() => {
    const now = Date.now();
    return Math.max(0, Math.ceil((state.blockedUntil - now) / 1000));
  }, [state.blockedUntil]);

  const checkLimit = useCallback(() => {
    const now = Date.now();
    
    if (isBlocked()) {
      return {
        allowed: false,
        remainingTime: getRemainingTime(),
        attemptsLeft: 0
      };
    }

    let newState = { ...state };

    // Reset window if expired
    if (now - newState.firstAttempt > config.windowMs) {
      newState = { attempts: 0, firstAttempt: 0, blockedUntil: 0 };
    }

    // First attempt in window
    if (newState.attempts === 0) {
      newState.firstAttempt = now;
    }

    newState.attempts++;

    // Check if limit exceeded
    if (newState.attempts > config.maxAttempts) {
      newState.blockedUntil = now + config.blockDurationMs;
      setState(newState);
      localStorage.setItem(`rateLimit_${key}`, JSON.stringify(newState));
      
      return {
        allowed: false,
        remainingTime: Math.ceil(config.blockDurationMs / 1000),
        attemptsLeft: 0
      };
    }

    setState(newState);
    localStorage.setItem(`rateLimit_${key}`, JSON.stringify(newState));

    return {
      allowed: true,
      remainingTime: 0,
      attemptsLeft: config.maxAttempts - newState.attempts
    };
  }, [state, config, isBlocked, getRemainingTime]);

  return {
    checkLimit,
    isBlocked,
    getRemainingTime,
    attemptsLeft: Math.max(0, config.maxAttempts - state.attempts),
    reset: () => {
      const resetState = { attempts: 0, firstAttempt: 0, blockedUntil: 0 };
      setState(resetState);
      localStorage.removeItem(`rateLimit_${key}`);
    }
  };
};