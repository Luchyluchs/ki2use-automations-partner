import React, { useEffect, useRef } from 'react';

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

const FloatingParticles: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const particles: Array<{
      x: number;
      y: number;
      size: number;
      speedX: number;
      speedY: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        size: Math.random() * 2 + 1,
        speedX: (Math.random() - 0.5) * 0.5,
        speedY: (Math.random() - 0.5) * 0.5,
        opacity: Math.random() * 0.5 + 0.1
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Update position
        particle.x += particle.speedX;
        particle.y += particle.speedY;

        // Wrap around edges
        if (particle.x < 0) particle.x = canvas.width;
        if (particle.x > canvas.width) particle.x = 0;
        if (particle.y < 0) particle.y = canvas.height;
        if (particle.y > canvas.height) particle.y = 0;

        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(215, 60%, 25%, ${particle.opacity})`;
        ctx.fill();
      });

      requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 pointer-events-none z-0"
      style={{ background: 'transparent' }}
    />
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
      
      {/* Floating particles */}
      <FloatingParticles />
      
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