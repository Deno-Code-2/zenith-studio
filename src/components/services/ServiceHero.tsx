
import { motion } from "framer-motion";

const ServiceHero = () => {
  return (
    <section className="relative py-20 md:py-32 bg-white overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-4xl mx-auto text-center"
        >
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="inline-block text-custom-orange font-medium mb-4 font-jakarta"
          >
            Our Services
          </motion.span>
          <h1 className="text-5xl md:text-6xl font-bold text-black mb-6 font-syne">
            Crafting <span className="text-custom-orange">Digital Excellence</span>
          </h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-gray-700 text-lg md:text-xl font-jakarta"
          >
            From concept to deployment, we design and develop digital experiences that elevate your brand, engage your audience, and drive business growth.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-8 flex justify-center"
          >
            <div className="h-1 w-20 bg-custom-orange rounded-full"></div>
          </motion.div>
        </motion.div>
      </div>
      
      {/* Abstract background pattern */}
      <div className="absolute -bottom-16 left-0 right-0 h-32 bg-gradient-to-b from-transparent to-gray-50/30 z-10"></div>
      <div className="absolute inset-0 -z-10 opacity-5">
        <div className="absolute inset-0 grid grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <div key={i} className="h-full w-full">
              <div className="h-full w-full rounded-full bg-custom-orange/80 filter blur-3xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
