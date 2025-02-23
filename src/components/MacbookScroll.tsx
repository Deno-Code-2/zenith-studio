
import React from "react";
import { motion } from "framer-motion";
import { Button } from "./ui/button";

const MacbookScroll = () => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-black">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* First Macbook */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1 }}
            className="w-full"
          >
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
              <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                <img
                  src="/lovable-uploads/86b95d70-fc21-4992-a2b3-f3a5c0f8bf4c.png"
                  className="dark:hidden w-full h-full object-cover"
                  alt="Company Website"
                />
                <img
                  src="/lovable-uploads/86b95d70-fc21-4992-a2b3-f3a5c0f8bf4c.png"
                  className="hidden dark:block w-full h-full object-cover"
                  alt="Company Website Dark"
                />
              </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
          </motion.div>

          {/* Second Macbook */}
          <motion.div
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="w-full"
          >
            <div className="relative mx-auto border-gray-800 dark:border-gray-800 bg-gray-800 border-[8px] rounded-t-xl h-[172px] max-w-[301px] md:h-[294px] md:max-w-[512px]">
              <div className="rounded-lg overflow-hidden h-[156px] md:h-[278px] bg-white dark:bg-gray-800">
                <video
                  className="w-full h-full object-cover"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source
                    src="https://assets.aceternity.com/demos/cursor.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>
            <div className="relative mx-auto bg-gray-900 dark:bg-gray-700 rounded-b-xl rounded-t-sm h-[17px] max-w-[351px] md:h-[21px] md:max-w-[597px]">
              <div className="absolute left-1/2 top-0 -translate-x-1/2 rounded-b-xl w-[56px] h-[5px] md:w-[96px] md:h-[8px] bg-gray-800"></div>
            </div>
          </motion.div>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-custom-orange hover:bg-custom-orange/90">
            Get Started
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MacbookScroll;
