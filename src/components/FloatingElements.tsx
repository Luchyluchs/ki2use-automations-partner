import React from 'react';

interface FloatingBlobProps {
  className?: string;
  delay?: number;
  duration?: number;
}

const FloatingBlob: React.FC<FloatingBlobProps> = ({ 
  className = "", 
  delay = 0, 
  duration = 20 
}) => {
  return (
    <div 
      className={`absolute rounded-full blur-3xl opacity-20 animate-float ${className}`}
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`
      }}
    />
  );
};

const CSSParticles: React.FC = () => {
  const particles = [
    { top: '15%', left: '20%', size: 3, delay: 0, duration: 18 },
    { top: '45%', left: '70%', size: 2, delay: 3, duration: 22 },
    { top: '70%', left: '35%', size: 2.5, delay: 6, duration: 20 },
    { top: '25%', left: '85%', size: 1.5, delay: 9, duration: 25 },
    { top: '80%', left: '60%', size: 2, delay: 2, duration: 19 },
    { top: '55%', left: '10%', size: 3, delay: 7, duration: 23 },
  ];

  return (
    <>
      {particles.map((p, i) => (
        <div
          key={i}
          className="absolute rounded-full animate-float"
          style={{
            top: p.top,
            left: p.left,
            width: `${p.size}px`,
            height: `${p.size}px`,
            backgroundColor: 'hsla(215, 60%, 25%, 0.3)',
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </>
  );
};

export const FloatingBackground: React.FC = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Animated gradient blobs */}
      <FloatingBlob 
        className="w-96 h-96 bg-gradient-to-br from-primary/30 to-accent/20 -top-20 -left-20"
        delay={0}
        duration={25}
      />
      <FloatingBlob 
        className="w-80 h-80 bg-gradient-to-br from-accent/30 to-secondary/20 top-1/3 -right-20"
        delay={5}
        duration={30}
      />
      <FloatingBlob 
        className="w-64 h-64 bg-gradient-to-br from-secondary/20 to-primary/30 bottom-20 left-1/4"
        delay={10}
        duration={35}
      />
      
      {/* CSS particles (replaces Canvas for performance) */}
      <CSSParticles />
      
      {/* Animated gradient mesh */}
      <div className="absolute inset-0 opacity-30">
        <div 
          className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
          style={{
            backgroundSize: '400% 400%',
            animation: 'gradient-shift 15s ease-in-out infinite'
          }}
        />
      </div>
    </div>
  );
};

export default FloatingBackground;