import ActionButton from "./ActionButton";
import { PhoneCall } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-between px-8 lg:px-16 py-32">
      {/* Left Content */}
      <div className="max-w-2xl text-left space-y-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-6xl lg:text-7xl font-bold leading-tight text-white font-syne">
          Crafting Digital Excellence with Innovation
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed font-jakarta">
          We transform your digital presence through innovative design, strategic development, 
          and cutting-edge solutions that elevate your brand to new heights.
        </p>
        <div className="flex items-center gap-6 mt-12">
          <ActionButton 
            href="#start-project" 
            className="text-lg px-8 py-4 rounded-full hover:translate-y-[-2px] transition-all duration-200 bg-custom-orange text-black font-jakarta font-medium shadow-lg hover:shadow-xl"
          >
            Let's connect
          </ActionButton>
          
          {/* Avatar Circles */}
          <div className="flex -space-x-4">
            {[1, 2, 3, 4].map((index) => (
              <div
                key={index}
                className="w-12 h-12 rounded-full border-2 border-black bg-gray-300 flex items-center justify-center overflow-hidden"
              >
                <img
                  src={`/lovable-uploads/c668a09e-b5f1-4512-9a80-1abc366f4aba.png`}
                  alt={`Team member ${index}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Right Image */}
      <div className="hidden lg:block w-1/2 h-[600px] relative">
        <img
          src="/lovable-uploads/c668a09e-b5f1-4512-9a80-1abc366f4aba.png"
          alt="Hero"
          className="w-full h-full object-cover rounded-2xl"
        />
      </div>
    </div>
  );
};

export default Hero;