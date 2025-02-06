import { useEffect, useRef } from "react";
import { Rocket } from "lucide-react";
import ActionButton from "./ActionButton";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);
  const imageRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(imageRef.current, {
      x: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    }, "-=0.5")
    .from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.5");
  }, []);

  return (
    <div className="min-h-[90vh] flex items-center justify-between px-8 lg:px-16 py-12" ref={heroRef}>
      <div className="max-w-2xl text-left space-y-6" ref={textRef}>
        <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white font-syne">
          Transforming Ideas into <span className="text-custom-orange">Digital Reality</span>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed font-jakarta">
          We create innovative digital solutions that empower businesses to thrive in the modern world. Our expertise in design and development helps you stay ahead of the competition.
        </p>
        <div className="flex items-center gap-6 mt-8" ref={buttonRef}>
          <ActionButton 
            href="https://calendly.com/demo/30min" 
            className="text-lg px-8 py-4 rounded-full hover:translate-y-[-2px] transition-all duration-200 bg-custom-orange text-black font-jakarta font-medium shadow-lg hover:shadow-xl"
            icon={<Rocket className="w-5 h-5" />}
          >
            Start Your Journey
          </ActionButton>
        </div>
      </div>

      <div className="hidden lg:block w-1/2" ref={imageRef}>
        <img
          src="/lovable-uploads/c56e51e7-ddcf-4b55-8a37-33329ec603c7.png"
          alt="Digital Innovation"
          className="w-full h-auto rounded-lg shadow-2xl animate-float"
        />
      </div>
    </div>
  );
};

export default Hero;