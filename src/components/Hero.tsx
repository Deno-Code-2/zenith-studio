import ActionButton from "./ActionButton";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center px-8 lg:px-16">
      <div className="max-w-3xl space-y-8 animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-5xl lg:text-6xl font-bold mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600">
          I Turn Designs Into Rich Experiences.
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl">
          I help you solve your online visibility challenges and generate more sales by designing custom websites, 
          art direction dedicated to your brand and bespoke digital strategies.
        </p>
        <ActionButton 
          href="#start-project" 
          className="text-lg px-8 py-4 rounded-full hover:translate-y-[-2px] transition-all duration-200"
        >
          Let's Start A Project
        </ActionButton>
      </div>
    </div>
  );
};

export default Hero;