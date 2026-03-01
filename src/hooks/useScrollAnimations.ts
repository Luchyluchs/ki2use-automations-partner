import { useEffect, useRef } from 'react';

export const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
            const children = entry.target.querySelectorAll('.stagger-child');
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('revealed');
              }, index * 100);
            });
          } else {
            entry.target.classList.remove('revealed');
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

    // Observe current elements and watch for new ones via MutationObserver
    const SELECTORS = '.scroll-reveal, .scroll-scale, .fade-in-element, .scale-in-element, .enhanced-reveal';
    
    const observeAll = () => {
      document.querySelectorAll(SELECTORS).forEach((el) => observer.observe(el));
    };

    observeAll();

    // Watch for lazy-loaded content
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, []);
};

// Enhanced parallax with GPU acceleration
export const useEnhancedParallax = () => {
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          const scrollY = window.pageYOffset;
          const parallaxElements = document.querySelectorAll('.parallax-slow, .parallax-medium, .parallax-fast');
          
          parallaxElements.forEach((element) => {
            const rect = element.getBoundingClientRect();
            const speed = element.classList.contains('parallax-fast') ? -0.8 :
                         element.classList.contains('parallax-medium') ? -0.5 : -0.3;
            
            if (rect.bottom >= 0 && rect.top <= window.innerHeight) {
              const yPos = scrollY * speed;
              (element as HTMLElement).style.transform = `translate3d(0, ${yPos}px, 0)`;
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

// Magnetic cursor effect with proper cleanup
export const useMagneticCursor = () => {
  useEffect(() => {
    const magneticElements = document.querySelectorAll('.magnetic');
    const handlers = new Map<Element, { move: EventListener; leave: EventListener }>();
    
    magneticElements.forEach((element) => {
      const handleMouseMove = (e: Event) => {
        const mouseEvent = e as MouseEvent;
        const rect = element.getBoundingClientRect();
        const x = mouseEvent.clientX - rect.left - rect.width / 2;
        const y = mouseEvent.clientY - rect.top - rect.height / 2;
        
        const distance = Math.sqrt(x * x + y * y);
        const maxDistance = 100;
        
        if (distance < maxDistance) {
          const strength = (maxDistance - distance) / maxDistance;
          const moveX = (x / distance) * strength * 10;
          const moveY = (y / distance) * strength * 10;
          (element as HTMLElement).style.transform = `translate3d(${moveX}px, ${moveY}px, 0)`;
        }
      };
      
      const handleMouseLeave = () => {
        (element as HTMLElement).style.transform = 'translate3d(0, 0, 0)';
      };
      
      handlers.set(element, { move: handleMouseMove, leave: handleMouseLeave });
      element.addEventListener('mousemove', handleMouseMove);
      element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    return () => {
      handlers.forEach((h, el) => {
        el.removeEventListener('mousemove', h.move);
        el.removeEventListener('mouseleave', h.leave);
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
            (element as HTMLElement).style.transform = `translate3d(0, ${rate}px, 0)`;
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
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
};
