import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-screen w-full overflow-hidden bg-white">
      {/* Grid Background with Animation */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Black grid pattern on white background */}
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

      <div className="container mx-auto flex h-screen flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl space-y-4 text-center sm:space-y-6"
        >
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl xl:text-6xl font-syne">
            We are Zenith Studio,
          </h2>
          <h2 className="text-3xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl xl:text-6xl font-syne">
            Where <Cover className="text-custom-orange">Ideas</Cover> Go Live.
          </h2>
          
          <motion.p 
            className="mx-auto text-base text-gray-700 sm:text-lg md:text-xl font-jakarta"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            We design, build, and refine websites with precision—seamlessly blending aesthetics with functionality.
          </motion.p>

          <motion.div 
            className="flex flex-col items-center gap-3 sm:flex-row sm:justify-center sm:gap-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            <Button 
              asChild 
              variant="default"
              className="w-full sm:w-auto"
              size="lg"
            >
              <a href="https://cal.com/zenith-studio/30min" target="_blank" rel="noopener noreferrer">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button 
              variant="link" 
              onClick={() => navigate('/projects')} 
              className="w-full text-custom-orange sm:w-auto"
              size="lg"
            >
              View Our Work
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;