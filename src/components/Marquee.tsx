
import React, { ReactNode, useEffect, useRef } from 'react';

interface MarqueeProps {
  children: ReactNode;
  className?: string;
  pauseOnHover?: boolean;
  direction?: 'left' | 'right';
  speed?: number;
}

const Marquee = ({
  children,
  className = '',
  pauseOnHover = false,
  direction = 'left',
  speed = 40,
}: MarqueeProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!scrollerRef.current || !containerRef.current) return;

    const scrollWidth = scrollerRef.current.scrollWidth;
    const containerWidth = containerRef.current.offsetWidth;
    let animationFrameId: number;
    let isPaused = false;
    let currentScrollPos = 0;

    const scrollAmount = direction === 'left' ? 1 : -1;

    const scroll = () => {
      if (!scrollerRef.current || isPaused) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      currentScrollPos += scrollAmount * (0.5 * (50 / speed));
      
      // Reset when reaching the end
      if (currentScrollPos >= scrollWidth / 2) {
        currentScrollPos = 0;
      } else if (currentScrollPos <= 0 && direction === 'right') {
        currentScrollPos = scrollWidth / 2;
      }
      
      scrollerRef.current.style.transform = `translateX(${direction === 'left' ? -currentScrollPos : currentScrollPos}px)`;
      animationFrameId = requestAnimationFrame(scroll);
    };

    // Start animation
    animationFrameId = requestAnimationFrame(scroll);

    // Pause on hover if enabled
    if (pauseOnHover && containerRef.current) {
      const handleMouseEnter = () => { isPaused = true; };
      const handleMouseLeave = () => { isPaused = false; };
      
      containerRef.current.addEventListener('mouseenter', handleMouseEnter);
      containerRef.current.addEventListener('mouseleave', handleMouseLeave);
      
      return () => {
        cancelAnimationFrame(animationFrameId);
        containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
        containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      };
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [direction, pauseOnHover, speed]);

  return (
    <div
      ref={containerRef}
      className={`overflow-hidden ${className}`}
      aria-hidden="true"
    >
      <div 
        ref={scrollerRef} 
        className="inline-flex min-w-full flex-nowrap"
        style={{ paddingRight: '1rem' }}
      >
        {/* Original children */}
        <div className="flex items-center justify-around gap-4 pr-4">
          {children}
        </div>
        {/* Duplicate for seamless looping */}
        <div className="flex items-center justify-around gap-4 pr-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Marquee;
