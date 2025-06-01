
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { AnimatedGroup } from "@/components/ui/animated-group";

const Hero = () => {
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
    <div className="relative w-full overflow-hidden py-20 md:py-32 bg-background">
      {/* Background patterns - subtle grid */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(0, 0, 0, 0.03) 1px, transparent 1px),
              linear-gradient(to bottom, rgba(0, 0, 0, 0.03) 1px, transparent 1px)
            `,
            backgroundSize: '40px 40px'
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mt-20">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-5xl space-y-6 md:space-y-8"
          >
            <motion.h1
              variants={itemVariants}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-tight text-foreground font-cal"
            >
              Expert Website Design & Development
              <br />
              for High-Performance, modern
              <br />
              and minimalistic websites
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-muted-foreground font-inter pt-4 max-w-3xl mx-auto"
            >
              We craft and develop websites that deliver exceptional results and accelerate your business growth. No lengthy calls. No unnecessary complications. Just outstanding outcomes.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-5 justify-center pt-8"
            >
              <Button
                asChild
                variant="default"
                className="w-full sm:w-auto hover:scale-105 transition-transform text-lg bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-4 rounded-full"
                size="lg"
              >
                <motion.a
                  href="https://cal.com/zenithstudio/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Book a call
                </motion.a>
              </Button>
            </motion.div>

            {/* Trusted by section */}
            <motion.div
              variants={itemVariants}
              className="pt-12"
            >
              <p className="text-muted-foreground text-lg mb-8">
                Trusted by Founders and Entrepreneurs from all over the world
              </p>
              <div className="flex flex-wrap justify-center items-center gap-4 opacity-60">
                {/* Avatar circle placeholders representing clients */}
                <div className="flex -space-x-2">
                  <div className="w-12 h-12 rounded-full bg-gray-300 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-400 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-500 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-600 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-700 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-800 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-gray-900 border-2 border-white"></div>
                  <div className="w-12 h-12 rounded-full bg-black border-2 border-white"></div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
