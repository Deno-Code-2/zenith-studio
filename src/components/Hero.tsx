
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Cube3D } from "./Cube3D";
import { Cover } from "@/components/ui/cover";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 gap-12 relative overflow-hidden bg-gradient-to-br from-black via-black/95 to-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-left space-y-6 z-10 pl-0 lg:pl-12"
      >
        <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white font-syne">
          Transform Your Digital Vision Into <Cover className="text-white">Reality</Cover>
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed font-jakarta">
          We're not just building websites – we're crafting digital experiences that drive growth and elevate your brand.
        </p>
        <div className="flex gap-4">
          <Button className="bg-custom-orange hover:bg-custom-orange/90 font-jakarta">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button 
            variant="outline" 
            className="border-custom-orange/20 text-white hover:bg-custom-orange/10 font-jakarta"
            onClick={() => navigate('/projects')}
          >
            View Our Work
          </Button>
        </div>
      </motion.div>
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="flex-1 z-10 w-full sm:max-w-sm md:max-w-md lg:max-w-xl mx-auto lg:mx-0 -ml-8 sm:-ml-0"
      >
        <Cube3D />
      </motion.div>
    </div>
  );
};

export default Hero;
