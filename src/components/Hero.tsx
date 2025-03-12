import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Cube3D } from "./Cube3D";
import { Cover } from "@/components/ui/cover";
import { useNavigate, Link } from "react-router-dom";
import { Safari } from "./magicui/safari";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 gap-12 relative overflow-hidden bg-white">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-left space-y-6 z-10 pl-0 lg:pl-8"
      >
        <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-black font-syne">
          Transform Your Digital Vision Into <Cover className="text-custom-orange">Reality</Cover>
        </h2>
        <p className="text-xl text-gray-700 leading-relaxed font-jakarta">
          We're not just building websites – we're crafting digital experiences that drive growth and elevate your brand.
        </p>
        <div className="flex gap-4">
          <Button
            asChild
            variant="default"
          >
            <a href="https://ui.aceternity.com/components" target="_blank" rel="noopener noreferrer">
              Get Started <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
          <Button 
            variant="default" 
            onClick={() => navigate('/projects')}
          >
            View Our Work
          </Button>
        </div>
      </motion.div>

      <div className="relative">
      <Safari
        url="zenithstudio.com"
        className="size-full"
        imageSrc="/images/My-Logo.png"
      />
    </div>
    </div>
  );
};

export default Hero;
