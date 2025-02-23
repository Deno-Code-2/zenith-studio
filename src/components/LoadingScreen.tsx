import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { MotionPathPlugin } from 'gsap/MotionPathPlugin';
import { TextPlugin } from 'gsap/TextPlugin';

gsap.registerPlugin(MotionPathPlugin, TextPlugin);

const Loading = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const logoRef = useRef<SVGSVGElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  
  // Particle animation setup
  const createParticles = () => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext('2d');
    if (!canvas || !ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      [x: string]: any;
      x: number; y: number; 
      size: number; 
      baseX: number;
      baseY: number;
      density: number;
    }> = [];

    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 2 + 1;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 10 + 5;
      }

      draw() {
        ctx.fillStyle = 'rgba(255,255,255,0.8)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        const dx = (this.baseX - this.x) / this.density;
        const dy = (this.baseY - this.y) / this.density;
        this.x += dx;
        this.y += dy;
      }
    }

    // Create particles
    for (let i = 0; i < 100; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(particle => {
        particle.draw();
        particle.update();
      });
      requestAnimationFrame(animate);
    };

    animate();
  };

  useEffect(() => {
    // Initial animations
    const tl = gsap.timeline({ defaults: { ease: 'power4.out' } });

    // Particle canvas setup
    createParticles();

    // Logo animation
    tl.from(logoRef.current, {
      scale: 0,
      rotation: 360,
      duration: 1.5,
      opacity: 0
    })
    .from(logoRef.current?.querySelector('path'), {
      motionPath: {
        path: [{ x: -100, y: 0 }, { x: 0, y: 0 }],
        curviness: 1.5
      },
      duration: 1.2
    }, '-=0.5')
    .to(textRef.current, {
      text: {
        value: "Zenith Studio",
        speed: 0.8
      },
      duration: 1
    })
    .from(progressRef.current, {
      scaleX: 0,
      duration: 2,
      ease: 'power2.inOut'
    })
    .to(textRef.current, {
      text: {
        value: "Initializing Systems...",
        speed: 0.5
      },
      repeat: -1,
      repeatDelay: 1,
      yoyo: true
    }, '-=1');

    // Mouse interaction
    containerRef.current?.addEventListener('mousemove', (e) => {
      gsap.to(logoRef.current, {
        x: (e.clientX - window.innerWidth/2) * 0.1,
        y: (e.clientY - window.innerHeight/2) * 0.1,
        duration: 1
      });
    });

    return () => {
      containerRef.current?.removeEventListener('mousemove', () => {});
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="fixed inset-0 bg-gradient-to-br from-zinc-900 to-blue-900 flex flex-col items-center justify-center space-y-8"
    >
      <canvas 
        ref={canvasRef}
        className="absolute inset-0 w-full h-full pointer-events-none"
      />

      <svg
        ref={logoRef}
        className="w-32 h-32 relative z-10"
        viewBox="0 0 100 100"
      >
        <path
          fill="none"
          stroke="#FF6B35"
          strokeWidth="2"
          d="M50 15 L75 50 L50 85 L25 50 Z"
          className="animate-pulse"
        />
        <circle
          cx="50"
          cy="50"
          r="20"
          fill="#FF6B35"
          stroke="#FFF"
          strokeWidth="2"
        />
      </svg>

      <div 
        ref={textRef}
        className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-amber-500 font-syne"
      ></div>

      <div className="w-64 h-2 bg-gray-800 rounded-full overflow-hidden">
        <div 
          ref={progressRef}
          className="h-full bg-gradient-to-r from-orange-500 to-amber-600 origin-left"
        />
      </div>

      <div className="absolute bottom-8 text-gray-400 text-sm">
        Crafting Digital Excellence
      </div>
    </div>
  );
};

export default Loading;