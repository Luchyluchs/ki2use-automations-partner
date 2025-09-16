import { useState, useEffect } from 'react';
import { Clock, AlertCircle } from 'lucide-react';

interface UrgencyTimerProps {
  title?: string;
  subtitle?: string;
  variant?: 'default' | 'warning' | 'critical';
}

const UrgencyTimer = ({ 
  title = "Begrenzte Verfügbarkeit", 
  subtitle = "Nur noch wenige Plätze verfügbar",
  variant = 'default' 
}: UrgencyTimerProps) => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0
  });

  useEffect(() => {
    // Calculate time until end of month
    const calculateTimeLeft = () => {
      const now = new Date();
      const endOfMonth = new Date(now.getFullYear(), now.getMonth() + 1, 0, 23, 59, 59);
      const difference = endOfMonth.getTime() - now.getTime();

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));

        setTimeLeft({ days, hours, minutes });
      }
    };

    calculateTimeLeft();
    const timer = setInterval(calculateTimeLeft, 60000); // Update every minute

    return () => clearInterval(timer);
  }, []);

  const getVariantClasses = () => {
    switch (variant) {
      case 'warning':
        return 'bg-yellow-500/10 border-yellow-500/20 text-yellow-700 dark:text-yellow-300';
      case 'critical':
        return 'bg-red-500/10 border-red-500/20 text-red-700 dark:text-red-300';
      default:
        return 'bg-primary/10 border-primary/20 text-primary';
    }
  };

  const getIcon = () => {
    switch (variant) {
      case 'warning':
      case 'critical':
        return AlertCircle;
      default:
        return Clock;
    }
  };

  const IconComponent = getIcon();

  return (
    <div className={`inline-flex items-center gap-3 px-4 py-3 rounded-xl border font-medium text-sm ${getVariantClasses()}`}>
      <IconComponent className="w-5 h-5 animate-pulse" />
      <div>
        <div className="font-semibold">{title}</div>
        <div className="text-xs opacity-80">{subtitle}</div>
      </div>
      <div className="flex items-center gap-2 ml-2">
        {timeLeft.days > 0 && (
          <div className="text-center">
            <div className="font-bold text-lg">{timeLeft.days}</div>
            <div className="text-xs opacity-60">Tage</div>
          </div>
        )}
        <div className="text-center">
          <div className="font-bold text-lg">{timeLeft.hours}</div>
          <div className="text-xs opacity-60">Std</div>
        </div>
        <div className="opacity-60">:</div>
        <div className="text-center">
          <div className="font-bold text-lg">{timeLeft.minutes}</div>
          <div className="text-xs opacity-60">Min</div>
        </div>
      </div>
    </div>
  );
};

export default UrgencyTimer;