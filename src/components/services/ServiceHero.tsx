
import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section className="relative h-[60vh] overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/20 z-10"></div>
      <img 
        src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" 
        alt="Zenith Studio services" 
        className="w-full h-full object-cover" 
      />
      
      <div className="container mx-auto px-4 relative z-20 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
          >
            Our Services
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-syne">
            Crafting <span className="text-custom-orange">Digital Excellence</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-white/90 text-lg md:text-xl font-jakarta"
          >
            From concept to deployment, we design and develop digital experiences that elevate your brand, engage your audience, and drive business growth.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceHero;
