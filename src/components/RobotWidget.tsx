import React, { useState, useEffect, useRef } from 'react';
import './robot.css';

interface RobotWidgetProps {
  targetSelector?: string;
  onRobotClick?: () => void;
}

const RobotWidget: React.FC<RobotWidgetProps> = ({ 
  targetSelector = '#chatbot-toggle',
  onRobotClick 
}) => {
  const [animationState, setAnimationState] = useState<'idle' | 'attention' | 'cta'>('idle');
  const [isHovered, setIsHovered] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);
  const robotRef = useRef<HTMLButtonElement>(null);
  const animationTimeoutRef = useRef<NodeJS.Timeout>();

  // Check for reduced motion preference
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Animation cycle management
  useEffect(() => {
    if (prefersReducedMotion) return;

    const runAnimationCycle = () => {
      // Random intervals for natural behavior
      const nextAction = Math.random();
      
      if (nextAction < 0.4) {
        // 40% chance for attention animation
        setAnimationState('attention');
        setTimeout(() => setAnimationState('idle'), 1200);
      } else if (nextAction < 0.6) {
        // 20% chance for call-to-action
        setAnimationState('cta');
        setTimeout(() => setAnimationState('idle'), 2000);
        
        // Nudge the target button
        const targetButton = document.querySelector('.fixed.bottom-6.right-6 button');
        if (targetButton) {
          targetButton.classList.add('robot-nudge');
          setTimeout(() => {
            targetButton.classList.remove('robot-nudge');
          }, 300);
        }
      }
      
      // Schedule next cycle (6-10 seconds)
      animationTimeoutRef.current = setTimeout(runAnimationCycle, 6000 + Math.random() * 4000);
    };

    // Initial delay before first animation
    animationTimeoutRef.current = setTimeout(runAnimationCycle, 2000);

    return () => {
      if (animationTimeoutRef.current) {
        clearTimeout(animationTimeoutRef.current);
      }
    };
  }, [targetSelector, prefersReducedMotion]);

  // Handle hover interactions
  const handleMouseEnter = () => {
    setIsHovered(true);
    if (!prefersReducedMotion) {
      setAnimationState('attention');
    }
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (!prefersReducedMotion) {
      setTimeout(() => {
        if (!isHovered) setAnimationState('idle');
      }, 500);
    }
    setShowTooltip(false);
  };

  // Handle chatbot button hover
  useEffect(() => {
    const targetButton = document.querySelector('.fixed.bottom-6.right-6 button');
    if (!targetButton) return;

    const handleTargetHover = () => {
      if (!prefersReducedMotion) {
        setAnimationState('cta');
      }
    };

    const handleTargetLeave = () => {
      if (!prefersReducedMotion) {
        setTimeout(() => setAnimationState('idle'), 1000);
      }
    };

    targetButton.addEventListener('mouseenter', handleTargetHover);
    targetButton.addEventListener('mouseleave', handleTargetLeave);

    return () => {
      targetButton.removeEventListener('mouseenter', handleTargetHover);
      targetButton.removeEventListener('mouseleave', handleTargetLeave);
    };
  }, [targetSelector, prefersReducedMotion]);

  const handleRobotClick = () => {
    // Trigger chatbot opening
    const targetButton = document.querySelector('.fixed.bottom-6.right-6 button') as HTMLElement;
    if (targetButton) {
      targetButton.click();
    }
    onRobotClick?.();
  };

  return (
    <div className="robot-widget-container">
      {/* Tooltip */}
      {showTooltip && (
        <div className="robot-tooltip" role="tooltip">
          Probier den Chat!
        </div>
      )}

      {/* Robot */}
      <button
        ref={robotRef}
        className={`robot-mascot ${animationState} ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        onClick={handleRobotClick}
        aria-label="Chat öffnen"
        aria-describedby="robot-tooltip"
      >
        {/* Robot Body */}
        <div className="robot-body">
          {/* Head */}
          <div className="robot-head">
            <div className="robot-face">
              <div className="robot-eye left"></div>
              <div className="robot-eye right"></div>
              <div className="robot-led-indicator"></div>
            </div>
          </div>

          {/* Torso */}
          <div className="robot-torso">
            <div className="robot-chest-panel">
              <div className="robot-status-light"></div>
            </div>
          </div>

          {/* Arms */}
          <div className="robot-arm left">
            <div className="robot-upper-arm"></div>
            <div className="robot-lower-arm"></div>
            <div className="robot-hand"></div>
          </div>
          <div className="robot-arm right">
            <div className="robot-upper-arm"></div>
            <div className="robot-lower-arm"></div>
            <div className="robot-hand"></div>
          </div>

          {/* Base/Legs */}
          <div className="robot-base">
            <div className="robot-base-ring"></div>
          </div>
        </div>

        {/* Holographic Pointer (for CTA state) */}
        <div className="robot-pointer">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
            <path 
              d="M7 17l9.2-9.2M17 17V7H7" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round"
            />
          </svg>
        </div>

        {/* Glow Effect */}
        <div className="robot-glow"></div>
      </button>

      {/* Floating Elements */}
      <div className="robot-floating-elements">
        <div className="robot-particle"></div>
        <div className="robot-particle"></div>
        <div className="robot-particle"></div>
      </div>
    </div>
  );
};

export default RobotWidget;