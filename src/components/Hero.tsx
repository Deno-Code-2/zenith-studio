import ActionButton from "./ActionButton";

const Hero = () => {
  return (
    <div className="min-h-[calc(100vh-120px)] flex items-center px-8">
      <div className="max-w-3xl animate-fadeIn" style={{ animationDelay: "0.2s" }}>
        <h2 className="text-5xl font-bold mb-6 leading-tight">
          I Turn Designs Into Rich Experiences.
        </h2>
        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
          I help you solve your online visibility challenges and generate more sales by designing custom websites, 
          art direction dedicated to your brand and bespoke digital strategies.
        </p>
        <ActionButton href="#start-project" className="text-lg">
          Let's Start A Project
        </ActionButton>
      </div>
    </div>
  );
};

export default Hero;