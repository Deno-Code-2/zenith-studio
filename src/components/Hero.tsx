import { Rocket } from "lucide-react";
import ActionButton from "./ActionButton";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-between px-8 lg:px-16 py-20">
      <div className="max-w-2xl text-left space-y-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-6xl lg:text-7xl font-bold leading-tight text-white font-syne">
          Crafting <span className="text-custom-orange">Digital Excellence</span> with Innovation
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed font-jakarta">
          We <span className="text-custom-orange">transform</span> your digital presence through 
          <span className="text-custom-orange"> innovative design</span>, strategic development, 
          and <span className="text-custom-orange">cutting-edge solutions</span> that elevate your brand to new heights.
        </p>
        <div className="flex items-center gap-6 mt-12">
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
                className="w-12 h-12 rounded-full border-2 border-black bg-gray-300 flex items-center justify-center overflow-hidden"
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

      <div className="hidden lg:block w-1/2 h-[500px] relative">
        <img
          src="/lovable-uploads/My-Logo.png"
          alt="Hero"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;
