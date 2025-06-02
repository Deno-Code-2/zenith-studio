
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { AnimatedTooltip } from "@/components/ui/animated-tooltip";

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

  const people = [
    {
      id: 1,
      name: "John Doe",
      designation: "Software Engineer",
      image:
        "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3387&q=80",
    },
    {
      id: 2,
      name: "Robert Johnson",
      designation: "Product Manager",
      image:
        "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 3,
      name: "Jane Smith",
      designation: "Data Scientist",
      image:
        "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YXZhdGFyfGVufDB8fDB8fHww&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 4,
      name: "Emily Davis",
      designation: "UX Designer",
      image:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGF2YXRhcnxlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=800&q=60",
    },
    {
      id: 5,
      name: "Tyler Durden",
      designation: "Soap Developer",
      image:
        "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3540&q=80",
    },
    {
      id: 6,
      name: "Dora",
      designation: "The Explorer",
      image:
        "https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=3534&q=80",
    },
  ];

  return (
    <div className="relative w-full overflow-hidden py-20 md:py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center text-center mt-10">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="w-full max-w-5xl space-y-3 md:space-y-4"
          >
            <motion.h1
              variants={itemVariants}
              className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-black font-cal"
            >
              <span className="whitespace-nowrap">Expert Website Design & Development</span>
              <br />
              for High-Performance, modern
              <br />
              and minimalistic websites
              <spam><svg xmlns="http://www.w3.org/2000/svg" class="inline-block md:h-14 md:w-14 h-8 w-8 stroke-yellow-500 stroke-[1px]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" fill="rgba(254, 239, 172, 1)" opacity="0.4959999999991851" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0.49533333333480795px 1px"></path></svg><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" fill="rgba(253, 233, 143, 1)" opacity="0.6833333333343035" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0.6839999999986807px 1px"></path><svg xmlns="http://www.w3.org/2000/svg" class="inline-block md:h-14 md:w-14 h-8 w-8 stroke-yellow-500 stroke-[1px]" width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"></path><path d="M13 3l0 7l6 0l-8 11l0 -7l-6 0l8 -11" fill="rgba(253, 237, 163, 1)" opacity="0.5606666666668995" pathLength="1" stroke-dashoffset="0px" stroke-dasharray="0.5599999999976717px 1px"></path></svg></spam>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="text-lg sm:text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto font-inter pt-1"
            >
              We design and build websites that drive results and help your business grow. No Calls. No BS. Just Results.
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="flex flex-col items-center gap-5 justify-center pt-5"
            >
              <Button
                asChild
                variant="default"
                className="w-full sm:w-auto hover:scale-105 transition-transform text-lg bg-black text-white hover:bg-gray-800 font-inter"
                size="lg"
              >
                <motion.a
                  href="https://cal.com/zenithstudio/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </motion.a>
              </Button>
              
              <div className="flex items-center justify-center">
                <AnimatedTooltip items={people} />
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
