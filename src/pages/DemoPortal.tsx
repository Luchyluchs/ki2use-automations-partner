import React, { useEffect, useState } from 'react';
import { usePasswordProtection } from '@/hooks/usePasswordProtection';
import DemoLogin from '@/components/DemoLogin';
import DemoInterface from '@/components/DemoInterface';
import { Loader2 } from 'lucide-react';

const DemoPortal: React.FC = () => {
  const { isAuthenticated, isLoading, authenticate, logout, getRemainingTime } = usePasswordProtection({
    password: 'KI2USE2025',
    sessionDuration: 30 * 60 * 1000 // 30 minutes
  });

  const [remainingTime, setRemainingTime] = useState(0);

  // Update remaining time every second when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      const interval = setInterval(() => {
        const time = getRemainingTime();
        setRemainingTime(time);
        
        // Auto-logout when time expires
        if (time <= 0) {
          logout();
        }
      }, 1000);

      // Set initial time
      setRemainingTime(getRemainingTime());

      return () => clearInterval(interval);
    }
  }, [isAuthenticated, getRemainingTime, logout]);

  // Show loading spinner during initial auth check
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-subtle flex items-center justify-center">
        <div className="text-center">
          <Loader2 className="w-8 h-8 animate-spin mx-auto mb-4 text-primary" />
          <p className="text-muted-foreground">Lade Demoportal...</p>
        </div>
      </div>
    );
  }

  // Show login form if not authenticated
  if (!isAuthenticated) {
    return <DemoLogin onLogin={authenticate} />;
  }

  // Show demo interface when authenticated
  return <DemoInterface onLogout={logout} remainingTime={remainingTime} />;
};

export default DemoPortal;