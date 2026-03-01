import { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  opacity: number;
  size: number;
}

const FuturisticBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();
  const particlesRef = useRef<Particle[]>([]);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const smoothMouseRef = useRef({ x: -1000, y: -1000 });
  const isDesktopRef = useRef(true);

  const cachedColorsRef = useRef({ primaryHsl: '', accentHsl: '' });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    isDesktopRef.current = !('ontouchstart' in window);

    const cacheColors = () => {
      const style = getComputedStyle(document.documentElement);
      cachedColorsRef.current.primaryHsl = style.getPropertyValue('--primary').trim().replace(/\s+/g, ', ');
      cachedColorsRef.current.accentHsl = style.getPropertyValue('--accent').trim().replace(/\s+/g, ', ');
    };

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      cacheColors();
    };
    const createParticles = (): Particle[] => {
      const particles: Particle[] = [];
      const count = Math.min(50, Math.floor((canvas.width * canvas.height) / 15000));
      for (let i = 0; i < count; i++) {
        particles.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          vx: (Math.random() - 0.5) * 0.3,
          vy: (Math.random() - 0.5) * 0.3,
          opacity: Math.random() * 0.4 + 0.15,
          size: Math.random() * 1.5 + 0.5
        });
      }
      return particles;
    };

    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Smooth mouse interpolation
      smoothMouseRef.current.x = lerp(smoothMouseRef.current.x, mouseRef.current.x, 0.08);
      smoothMouseRef.current.y = lerp(smoothMouseRef.current.y, mouseRef.current.y, 0.08);
      const sm = smoothMouseRef.current;

      const { primaryHsl, accentHsl } = cachedColorsRef.current;

      const particles = particlesRef.current;

      // Update particles
      particles.forEach(p => {
        p.x += p.vx;
        p.y += p.vy;
        if (p.x < 0) p.x = canvas.width;
        if (p.x > canvas.width) p.x = 0;
        if (p.y < 0) p.y = canvas.height;
        if (p.y > canvas.height) p.y = 0;

        // Magnetic attraction toward cursor
        if (isDesktopRef.current) {
          const dx = sm.x - p.x;
          const dy = sm.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200 && dist > 5) {
            const force = (200 - dist) / 200 * 0.003;
            p.vx += dx * force;
            p.vy += dy * force;
          }
        }

        // Damping
        p.vx *= 0.98;
        p.vy *= 0.98;
      });

      // Draw mouse glow
      if (isDesktopRef.current && sm.x > -500) {
        const glowGradient = ctx.createRadialGradient(sm.x, sm.y, 0, sm.x, sm.y, 250);
        glowGradient.addColorStop(0, `hsla(${primaryHsl}, 0.18)`);
        glowGradient.addColorStop(0.4, `hsla(${accentHsl}, 0.08)`);
        glowGradient.addColorStop(1, `hsla(${primaryHsl}, 0)`);
        ctx.fillStyle = glowGradient;
        ctx.fillRect(sm.x - 250, sm.y - 250, 500, 500);
      }

      // Draw particle connections
      const maxDist = 120;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < maxDist) {
            const opacity = (maxDist - dist) / maxDist * 0.15;
            ctx.beginPath();
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.strokeStyle = `hsla(${primaryHsl}, ${opacity})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        }
      }

      // Draw cursor-to-particle connections
      if (isDesktopRef.current && sm.x > -500) {
        particles.forEach(p => {
          const dx = sm.x - p.x;
          const dy = sm.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 180) {
            const opacity = (180 - dist) / 180 * 0.25;
            ctx.beginPath();
            ctx.moveTo(sm.x, sm.y);
            ctx.lineTo(p.x, p.y);
            ctx.strokeStyle = `hsla(${primaryHsl}, ${opacity})`;
            ctx.lineWidth = 0.4;
            ctx.stroke();
          }
        });
      }

      // Draw particles
      particles.forEach(p => {
        // Brightness boost near cursor
        let boostOpacity = p.opacity;
        if (isDesktopRef.current && sm.x > -500) {
          const dx = sm.x - p.x;
          const dy = sm.y - p.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < 200) {
            boostOpacity = p.opacity + (200 - dist) / 200 * 0.4;
          }
        }

        // Glow
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size * 3);
        gradient.addColorStop(0, `hsla(${accentHsl}, ${boostOpacity})`);
        gradient.addColorStop(1, `hsla(${accentHsl}, 0)`);
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 3, 0, Math.PI * 2);
        ctx.fillStyle = gradient;
        ctx.fill();

        // Center dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size * 0.3, 0, Math.PI * 2);
        ctx.fillStyle = `hsla(${primaryHsl}, ${Math.min(boostOpacity * 2, 0.8)})`;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;
    };

    const handleResize = () => {
      resizeCanvas();
      particlesRef.current = createParticles();
    };

    resizeCanvas();
    particlesRef.current = createParticles();
    animate();

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('resize', handleResize);

    return () => {
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 w-full h-full pointer-events-none z-10"
      style={{ opacity: 0.6 }}
    />
  );
};

export default FuturisticBackground;
