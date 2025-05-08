
import { motion } from "framer-motion";
import ClientStats from "@/components/ClientStats";

const AboutHero = () => {
  return (
    <>
      <ClientStats />
      <section className="relative py-20 md:py-32 bg-white overflow-hidden">
        <div className="container mx-auto px-6 relative z-10">
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
              className="inline-block text-green-500 font-medium mb-4 font-jakarta"
            >
              About Us
            </motion.span>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 font-syne">
              About <span className="text-green-500">Zenith Studio</span>
            </h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-xl text-gray-700 max-w-2xl mx-auto font-jakarta"
            >
              We transform digital visions into exceptional online experiences through innovative design, 
              seamless development, and strategic digital solutions.
            </motion.p>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="mt-8 flex justify-center"
            >
              <div className="h-1 w-20 bg-green-500 rounded-full"></div>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Abstract background pattern */}
        <div className="absolute inset-0 -z-10 opacity-5">
          <div className="absolute inset-0 grid grid-cols-6 gap-4">
            {Array.from({ length: 12 }).map((_, i) => (
              <div key={i} className="h-full w-full">
                <div className="h-full w-full rounded-full bg-green-500/80 filter blur-3xl"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutHero;
