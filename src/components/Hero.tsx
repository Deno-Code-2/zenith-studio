import ActionButton from "./ActionButton";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-80px)] flex items-center justify-center px-8 lg:px-16 pt-20">
      <div className="max-w-4xl text-center space-y-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-5xl lg:text-7xl font-bold mb-6 leading-tight text-white font-syne">
          Crafting Digital Excellence with Innovation and Style
        </h2>
        <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl mx-auto font-jakarta">
          We transform your digital presence through innovative design, strategic development, 
          and cutting-edge solutions that elevate your brand to new heights.
        </p>
        <div className="flex justify-center mt-12">
          <ActionButton 
            href="#start-project" 
            className="text-lg px-8 py-4 rounded-full hover:translate-y-[-2px] transition-all duration-200 bg-custom-orange text-black font-jakarta font-medium shadow-lg hover:shadow-xl"
          >
            Let's connect
          </ActionButton>
        </div>

        <div className="mt-20">
          <h3 className="text-3xl font-bold text-white mb-10 font-syne">Our Achievements</h3>
          <div className="flex flex-nowrap justify-between items-center gap-4 text-center max-w-7xl mx-auto px-4 overflow-x-auto">
            <div className="achievement-item flex-1 min-w-[150px]">
              <span className="block text-4xl font-bold text-custom-orange font-syne">260</span>
              <span className="text-gray-300 font-jakarta">Happy Clients</span>
            </div>
            <div className="achievement-item flex-1 min-w-[150px]">
              <span className="block text-4xl font-bold text-custom-orange font-syne">4</span>
              <span className="text-gray-300 font-jakarta">Years Experience</span>
            </div>
            <div className="achievement-item flex-1 min-w-[150px]">
              <span className="block text-4xl font-bold text-custom-orange font-syne">79</span>
              <span className="text-gray-300 font-jakarta">E-Commerce Sites</span>
            </div>
            <div className="achievement-item flex-1 min-w-[150px]">
              <span className="block text-4xl font-bold text-custom-orange font-syne">14</span>
              <span className="text-gray-300 font-jakarta">Team Members</span>
            </div>
            <div className="achievement-item flex-1 min-w-[150px]">
              <span className="block text-4xl font-bold text-custom-orange font-syne">120+</span>
              <span className="text-gray-300 font-jakarta">Projects Completed</span>
            </div>
            <div className="achievement-item flex-1 min-w-[150px]">
              <span className="block text-4xl font-bold text-custom-orange font-syne">98%</span>
              <span className="text-gray-300 font-jakarta">Client Satisfaction</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;