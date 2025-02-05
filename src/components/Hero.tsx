
import { useEffect, useRef } from "react";
import { Rocket } from "lucide-react";
import ActionButton from "./ActionButton";
import gsap from "gsap";

const Hero = () => {
  const heroRef = useRef(null);
  const textRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline();
    
    tl.from(textRef.current, {
      y: 100,
      opacity: 0,
      duration: 1,
      ease: "power4.out"
    })
    .from(buttonRef.current, {
      scale: 0,
      opacity: 0,
      duration: 0.5,
      ease: "back.out(1.7)"
    }, "-=0.5")
    .from(".team-avatar", {
      x: 50,
      opacity: 0,
      stagger: 0.1,
      duration: 0.4,
      ease: "power2.out"
    }, "-=0.3");
  }, []);

  return (
    <div className="min-h-[90vh] flex items-center justify-between px-8 lg:px-16 py-20" ref={heroRef}>
      <div className="max-w-2xl text-left space-y-8" ref={textRef}>
        <h2 className="text-6xl lg:text-7xl font-bold leading-tight text-white font-syne">
          Crafting <span className="text-custom-orange">Digital Excellence</span> with Innovation
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed font-jakarta">
          We <span className="text-custom-orange">transform</span> your digital presence through 
          <span className="text-custom-orange"> innovative design</span>, strategic development, 
          and <span className="text-custom-orange">cutting-edge solutions</span> that elevate your brand to new heights.
        </p>
        <div className="flex items-center gap-6 mt-12" ref={buttonRef}>
          <ActionButton 
            href="https://calendly.com/demo/30min" 
            className="text-lg px-8 py-4 rounded-full hover:translate-y-[-2px] transition-all duration-200 bg-custom-orange text-black font-jakarta font-medium shadow-lg hover:shadow-xl"
            icon={<Rocket className="w-5 h-5" />}
          >
            Ignite Growth
          </ActionButton>
          
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="team-avatar w-12 h-12 rounded-full border-2 border-black bg-gray-300 flex items-center justify-center overflow-hidden transition-transform hover:scale-110"
              >
                <img
                  src={`/lovable-uploads/My-Logo.png`}
                  alt={`Team member ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 h-[600px] items-center justify-center relative">
        {/* Replace with your preferred 3D graphic or animation */}
        <div className="w-full h-full relative overflow-hidden rounded-2xl bg-gradient-to-br from-custom-orange/20 via-black to-custom-orange/10 border border-custom-orange/20">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-3/4 h-3/4 relative animate-float">
              {/* You can embed a Spline scene here or use other 3D graphics */}
              <img
                src="/lovable-uploads/My-Logo.png"
                alt="Hero"
                className="w-full h-full object-contain rounded-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
