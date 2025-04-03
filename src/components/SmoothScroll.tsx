
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component enables smooth scrolling across the site
const SmoothScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when path changes with smooth animation
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });

    // Enable smooth scrolling for all anchor links
    const smoothScrollToAnchor = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const anchor = target.closest('a');
      
      if (
        anchor && 
        anchor.getAttribute('href')?.startsWith('#') && 
        anchor.getAttribute('href')?.length > 1
      ) {
        e.preventDefault();
        const targetId = anchor.getAttribute('href')?.substring(1);
        const targetElement = document.getElementById(targetId || '');
        
        if (targetElement) {
          // Enhanced smooth scrolling with offset for header
          const headerOffset = 100;
          const elementPosition = targetElement.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
          
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }
    };

    document.addEventListener('click', smoothScrollToAnchor);
    
    // Apply smooth behavior globally
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Add intersection observer for fade-in animations on scroll
    const animateOnScroll = () => {
      const elements = document.querySelectorAll('.animate-on-scroll');
      
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
            observer.unobserve(entry.target);
          }
        });
      }, {
        threshold: 0.1,
        rootMargin: '0px 0px -100px 0px'
      });
      
      elements.forEach(element => {
        observer.observe(element);
      });
    };
    
    // Initialize scroll animations after page load
    setTimeout(animateOnScroll, 100);

    return () => {
      document.removeEventListener('click', smoothScrollToAnchor);
      document.documentElement.style.scrollBehavior = '';
    };
  }, [pathname]);

  return null;
};

export default SmoothScroll;
