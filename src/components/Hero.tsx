
import { motion } from "framer-motion";
import { SafariWindow } from "@/components/magicui/safari-window";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 gap-12 relative overflow-hidden bg-gradient-to-br from-black via-black/95 to-black">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-left space-y-6 z-10"
      >
        <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white font-syne">
          Transform Your Digital <span className="text-custom-orange">Vision</span> Into Reality
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed font-jakarta">
          We're not just building websites – we're crafting digital experiences that drive growth and elevate your brand. Let's create something extraordinary together.
        </p>
        <div className="flex gap-4">
          <Button className="bg-custom-orange hover:bg-custom-orange/90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-custom-orange/20 text-white hover:bg-custom-orange/10">
            View Our Work
          </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 relative z-10 grid grid-cols-2 gap-4"
      >
        <div className="relative -rotate-6 hover:rotate-0 transition-all duration-300">
          <SafariWindow
            url="devstudio.design"
            className="w-full shadow-2xl"
          >
            <img 
              src="/lovable-uploads/My-Logo.png"
              alt="Website Preview"
              className="w-full h-auto"
            />
          </SafariWindow>
        </div>
        <div className="relative rotate-6 hover:rotate-0 transition-all duration-300 mt-12">
          <SafariWindow
            url="devstudio.design/work"
            className="w-full shadow-2xl"
          >
            <img 
              src="/lovable-uploads/My-Logo.png"
              alt="Website Preview"
              className="w-full h-auto"
            />
          </SafariWindow>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
