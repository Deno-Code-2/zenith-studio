import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const LoadingScreen = ({ onComplete }: { onComplete: () => void }) => {
  const textRef = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const text = "Zenith Studio";
    if (textRef.current) {
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

      // Animate each letter
      const tl = gsap.timeline({
        onComplete: () => {
          // Fade out the entire loading screen
          gsap.to(containerRef.current, {
            opacity: 0,
            duration: 0.5,
            delay: 0.5,
            onComplete: () => {
              onComplete();
            }
          });
        }
      });

      letters.forEach((letter, i) => {
        tl.to(letter, {
          opacity: 1,
          duration: 0.1,
          delay: i * 0.1
        });
      });
    }
  }, [onComplete]);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
    >
      <div 
        ref={textRef}
        className="text-4xl md:text-6xl font-bold text-custom-orange font-syne"
      />
    </div>
  );
};

export default LoadingScreen;