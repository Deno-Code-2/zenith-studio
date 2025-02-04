import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const progressTextRef = useRef<HTMLDivElement>(null);
  const circlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = "Zenith Studio";
    if (textRef.current && progressRef.current && progressTextRef.current && circlesRef.current) {
      textRef.current.innerHTML = '';
      
      // Create spans for each letter with custom animation
      const letters = text.split('').map(letter => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        span.style.transform = 'translateY(20px) rotate(10deg)';
        return span;
      });
      
      letters.forEach(span => textRef.current?.appendChild(span));

      // Create timeline for smooth animations
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.8,
            ease: "power2.inOut",
            onComplete
          });
        }
      });

      // Animate letters with stagger and rotation
      tl.to(letters, {
        opacity: 1,
        y: 0,
        rotation: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)"
      });

      // Create and animate circles
      const circles = Array.from({ length: 3 }).map(() => {
        const circle = document.createElement('div');
        circle.className = 'absolute w-4 h-4 rounded-full bg-custom-orange';
        return circle;
      });

      circles.forEach(circle => circlesRef.current?.appendChild(circle));

      // Animate circles in a sequence
      gsap.to(circles, {
        scale: [0, 1.5, 1],
        opacity: [0, 1, 0],
        duration: 1.2,
        stagger: 0.2,
        ease: "power2.inOut"
      });

      // Animate progress bar with bounce effect
      tl.to(progressRef.current, {
        width: "100%",
        duration: 1.5,
        ease: "elastic.out(1, 0.75)"
      }, "-=1");

      // Animate progress percentage
      gsap.to(progressTextRef.current, {
        innerHTML: "100",
        duration: 1.5,
        snap: "innerHTML",
        ease: "power2.inOut"
      });
    }
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
    >
      <div className="relative">
        <div 
          ref={textRef}
          className="text-5xl md:text-7xl font-bold text-custom-orange font-syne mb-12"
        />
        <div ref={circlesRef} className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
      </div>
      <div className="w-64 h-2 bg-custom-orange/20 rounded-full overflow-hidden relative">
        <div 
          ref={progressRef}
          className="h-full w-0 bg-custom-orange rounded-full"
        />
      </div>
      <div className="mt-4 text-white font-jakarta text-lg">
        Loading... <span ref={progressTextRef}>0</span>%
      </div>
    </div>
  );
};

export default LoadingScreen;