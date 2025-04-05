
import { motion } from "framer-motion";

const AboutHero = () => {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
        alt="Zenith Studio office" 
        className="w-full h-full object-cover"
      />
      
      {/* Hero content */}
      <div className="container mx-auto px-6 relative z-20 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 font-syne">
            About <span className="text-custom-orange">Zenith Studio</span>
          </h1>
          <p className="text-xl text-white/90 max-w-2xl font-jakarta">
            We transform digital visions into exceptional online experiences through innovative design, 
            seamless development, and strategic digital solutions.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutHero;
