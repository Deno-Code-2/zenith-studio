
import { motion } from "framer-motion";
import { SafariWindow } from "@/components/magicui/safari-window";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { GridPattern } from "@/components/magicui/grid-pattern";

const Hero = () => {
  return (
    <div className="min-h-[90vh] flex flex-col lg:flex-row items-center justify-between px-8 lg:px-16 py-12 gap-12 relative overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <GridPattern
          width={100}
          height={100}
          x={0}
          y={0}
          className="absolute inset-0 h-full w-full opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/50 to-black"/>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl text-left space-y-6 z-10"
      >
        <h2 className="text-5xl lg:text-7xl font-bold leading-tight text-white font-syne">
          When You Need the <span className="text-custom-orange">Best</span>, You Come to Us
        </h2>
        <p className="text-xl text-gray-300 leading-relaxed font-jakarta">
          Like Harvey Specter says, "I don't take chances, I don't hope for the best, I make the best happen." That's exactly what we do for your digital presence. We're not just another agency – we're the closer you need for your digital success.
        </p>
        <div className="flex gap-4">
          <Button className="bg-custom-orange hover:bg-custom-orange/90">
            Get Started <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button variant="outline" className="border-custom-orange/20 text-white hover:bg-custom-orange/10">
            Learn More
          </Button>
        </div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="w-full lg:w-1/2 relative z-10"
      >
        <div className="relative">
          <SafariWindow
            url="zenithstudio.design"
            className="size-full"
          >
            <img 
              src="/lovable-uploads/original-0c3f408a1819dae82163cf37ea4e4782.png"
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
