
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1]
      }
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-white">
      {/* Grid Background with Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Black grid pattern */}
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.1) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
        
        {/* Animated orange beam */}
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '100%', opacity: [0, 0.6, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear"
          }}
          className="absolute top-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-custom-orange/90 to-transparent"
          style={{
            boxShadow: '0 0 10px 2px rgba(255, 107, 53, 0.5)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 lg:py-40"> 
        <div className="flex flex-col items-center justify-center text-center">
          {/* Text Content - Centered */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl space-y-6 md:space-y-8" 
          >
            <motion.h1 
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-black font-syne" 
            >
              We are Zenith Studio,
            </motion.h1>
            
            <motion.h2 
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl font-bold leading-tight text-black font-syne"
            >
              Where <Cover className="text-custom-orange">Ideas</Cover> Go Live.
            </motion.h2>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-jakarta"
            >
              We design, build, and refine websites with precision—seamlessly blending aesthetics with functionality.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 justify-center pt-4" 
            >
              <Button 
                asChild 
                variant="default"
                className="w-full sm:w-auto hover:scale-105 transition-transform text-lg bg-custom-orange hover:bg-custom-orange/90"
                size="lg"
              >
                <motion.a 
                  href="https://cal.com/zenith-studio/30min" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </Button>
              <Button 
                variant="link" 
                onClick={() => navigate('/projects')} 
                className="w-full sm:w-auto text-custom-orange hover:scale-105 transition-transform text-lg"
                size="lg"
              >
                View Our Work
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
