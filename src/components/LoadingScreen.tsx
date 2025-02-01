import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = "Zenith Studio";
    if (textRef.current && progressRef.current) {
      textRef.current.innerHTML = '';
      
      // Create spans for each letter
      const letters = text.split('').map(letter => {
        const span = document.createElement('span');
        span.textContent = letter === ' ' ? '\u00A0' : letter;
        span.style.opacity = '0';
        span.style.display = 'inline-block';
        return span;
      });
      
      letters.forEach(span => textRef.current?.appendChild(span));

      // Animate each letter and progress bar
      const tl = gsap.timeline({
        onComplete: () => {
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.5,
            onComplete
          });
        }
      });

      // Animate letters
      letters.forEach((letter, i) => {
        tl.to(letter, {
          opacity: 1,
          y: 0,
          duration: 0.1,
          delay: i * 0.1,
          ease: "power2.out"
        });
      });

      // Animate progress bar
      tl.to(progressRef.current, {
        width: "100%",
        duration: 1,
        ease: "power2.inOut"
      }, "-=0.5");
    }
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black flex flex-col items-center justify-center z-50"
    >
      <div 
        ref={textRef}
        className="text-4xl md:text-6xl font-bold text-custom-orange font-syne mb-8"
      />
      <div className="w-64 h-1 bg-custom-orange/20 rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full w-0 bg-custom-orange rounded-full"
        />
      </div>
    </div>
  );
};

export default LoadingScreen;