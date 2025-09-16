import React, { useEffect, useRef, useState } from 'react';
import { cn } from '@/lib/utils';

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  staggerDelay?: number;
  children?: React.ReactNode;
}

const TextReveal: React.FC<TextRevealProps> = ({ 
  text, 
  className = "", 
  delay = 0,
  staggerDelay = 100,
  children 
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  const words = text.split(' ');

  return (
    <div ref={elementRef} className={cn("overflow-hidden", className)}>
      {children || (
        <div className="flex flex-wrap">
          {words.map((word, index) => (
            <span
              key={index}
              className={cn(
                "inline-block opacity-0 transform translate-y-8",
                isVisible && "opacity-100 translate-y-0"
              )}
              style={{
                transition: `all 0.6s cubic-bezier(0.16, 1, 0.3, 1)`,
                transitionDelay: `${index * staggerDelay}ms`
              }}
            >
              {word}&nbsp;
            </span>
          ))}
        </div>
      )}
    </div>
  );
};

interface TypingAnimationProps {
  text: string;
  className?: string;
  speed?: number;
  delay?: number;
}

export const TypingAnimation: React.FC<TypingAnimationProps> = ({
  text,
  className = "",
  speed = 50,
  delay = 0
}) => {
  const [displayText, setDisplayText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => setIsVisible(true), delay);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, [delay]);

  useEffect(() => {
    if (!isVisible) return;

    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, speed);

    return () => clearInterval(interval);
  }, [isVisible, text, speed]);

  return (
    <div ref={elementRef} className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </div>
  );
};

interface GradientTextProps {
  children: React.ReactNode;
  className?: string;
  animated?: boolean;
}

export const GradientText: React.FC<GradientTextProps> = ({ 
  children, 
  className = "",
  animated = false 
}) => {
  return (
    <span 
      className={cn(
        "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent",
        animated && "animate-gradient-shift bg-[length:200%_auto]",
        className
      )}
    >
      {children}
    </span>
  );
};

export default TextReveal;