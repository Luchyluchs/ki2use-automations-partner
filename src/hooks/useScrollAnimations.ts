import { useEffect, useRef, useCallback } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            // Add stagger delay for child elements
            const children = entry.target.querySelectorAll('.stagger-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('revealed');
              }, index * 100);
            });
          } else {
            entry.target.classList.remove('revealed');
            // Remove revealed class from children when scrolling out
            const children = entry.target.querySelectorAll('.stagger-child');
            children.forEach((child) => {
              child.classList.remove('revealed');
            });
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    const elements = document.querySelectorAll('.scroll-reveal, .scroll-scale, .fade-in-element, .scale-in-element, .enhanced-reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);
};

// Enhanced parallax with performance optimizations
export const useEnhancedParallax = () => {
  useEffect(() => {
    let ticking = false;
    let scrollY = 0;

    const handleScroll = () => {
      scrollY = window.pageYOffset;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
          
          parallaxElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const speed = element.classList.contains('parallax-fast') ? -0.8 :
                         element.classList.contains('parallax-medium') ? -0.5 : -0.3;
            
            // Only animate if element is in viewport
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
              const yPos = scrollY * speed;
              (element as HTMLElement).style.setProperty('--scroll-y', `${yPos}px`);
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

// Magnetic cursor effect
export const useMagneticCursor = () => {
  useEffect(() => {
    const magneticElements = document.querySelectorAll('.magnetic');
    
    magneticElements.forEach((element) => {
      const handleMouseMove = (e: MouseEvent) => {
        const rect = element.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 100;
        
        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          const moveX = (x / distance) * strength * 10;
          const moveY = (y / distance) * strength * 10;
          
          (element as HTMLElement).style.transform = `translate(${moveX}px, ${moveY}px)`;
        }
      };
      
      const handleMouseLeave = () => {
        (element as HTMLElement).style.transform = 'translate(0px, 0px)';
      };
      
      element.addEventListener('mousemove', handleMouseMove as EventListener);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      magneticElements.forEach((element) => {
        element.removeEventListener('mousemove', () => {});
        element.removeEventListener('mouseleave', () => {});
      });
    };
  }, []);
};

export const useParallax = () => {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrolled = window.pageYOffset;
          const parallaxElements = document.querySelectorAll('.parallax-slow');
          
          parallaxElements.forEach((element) => {
            const rate = scrolled * -0.5;
            (element as HTMLElement).style.setProperty('--scroll-y', `${rate}px`);
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};

export const useScrollFade = () => {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const elements = document.querySelectorAll('.scroll-fade-in, .fade-in-element, .scale-in-element');
          
          elements.forEach((element) => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
              element.classList.add('visible');
            }
          });
          
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // Check on mount
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};