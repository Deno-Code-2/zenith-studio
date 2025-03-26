import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Cover } from "@/components/ui/cover";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-8 py-12 gap-8 relative overflow-hidden bg-white text-center">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-3xl space-y-6 z-10 mt-[-20vh]"
      >
        <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-black font-syne">
          We are Zenith Studio-
        </h2>
        <h2 className="text-4xl lg:text-6xl font-bold leading-tight text-black font-syne">
        Where <Cover className="text-custom-orange">Ideas</Cover>Go Live.
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed font-jakarta">
          We design, build, and refine websites with precision—seamlessly blending aesthetics with functionality. No fluff, no hassle—just results. Sit back while we bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button asChild variant="default">
            <a href="https://ui.aceternity.com/components" target="_blank" rel="noopener noreferrer">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button variant="link" onClick={() => navigate('/projects')} className="text-custom-orange">
            View Our Work
          </Button>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
