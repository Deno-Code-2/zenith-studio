
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// This component enables smooth scrolling across the site
const SmoothScroll = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Scroll to top when path changes
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
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
          });
        }
      }
    };

    document.addEventListener('click', smoothScrollToAnchor);
    
    // Enable smooth behavior for all scroll events
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.removeEventListener('click', smoothScrollToAnchor);
      document.documentElement.style.scrollBehavior = '';
    };
  }, [pathname]);

  return null;
};

export default SmoothScroll;
