
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
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
    <div className="relative w-full overflow-hidden bg-white py-20 md:py-24">
      {/* Grid Background */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
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
        <motion.div
          initial={{ x: '-100%', opacity: 0 }}
          animate={{ x: '100%', opacity: [0, 0.6, 0] }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatDelay: 2,
            ease: "linear"
          }}
          className="absolute top-1/2 h-[1px] w-full bg-gradient-to-r from-transparent via-custom-green/90 to-transparent"
          style={{
            boxShadow: '0 0 10px 2px rgba(255, 107, 53, 0.5)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mt-10">
          {/* Announcement Banner */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-green-50 text-custom-green px-4 py-1.5 rounded-full text-sm font-medium mb-4 border border-green-200 inline-flex items-center"
          >
            <span className="bg-custom-green text-white rounded-full w-5 h-5 flex items-center justify-center mr-2 text-xs">
              🔥
            </span>
            New! We've launched our AI-powered development services
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-4xl space-y-3 md:space-y-4"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black font-syne"
            >
              Fueling Startup Dreams with Purpose, 
            </motion.h1>

            <motion.h2
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black font-syne"
            >
              <Cover className="text-custom-green">Precision, Unlimited Speed.</Cover>
            </motion.h2>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 font-jakarta pt-1"
            >
              A cutting-edge startup studio leveraging AI to help visionary founders build MVPs and accelerate growth — all in under 5 weeks.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 justify-center pt-5"
            >
              <Button
                asChild
                variant="default"
                className="w-full sm:w-auto hover:scale-105 transition-transform text-lg"
                size="lg"
              >
                <motion.a
                  href="https://cal.com/zenithstudio/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a Call <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </Button>

              <Button
                variant="link"
                onClick={() => navigate('/projects')}
                className="w-full sm:w-auto text-custom-green hover:scale-105 transition-transform text-lg"
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
