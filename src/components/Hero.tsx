
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex items-center justify-between px-8 lg:px-16 py-12">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-left space-y-6"
      >
        <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white font-syne">
          Transforming Ideas into <span className="text-custom-orange">Digital Reality</span>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed font-jakarta">
          We create innovative digital solutions that empower businesses to thrive in the modern world. Our expertise in design and development helps you stay ahead of the competition.
        </p>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="hidden lg:block w-1/2"
      >
        <img
          src="/lovable-uploads/c56e51e7-ddcf-4b55-8a37-33329ec603c7.png"
          alt="Digital Innovation"
          className="w-full h-auto rounded-lg shadow-2xl animate-float"
        />
      </motion.div>
    </div>
  );
};

export default Hero;
