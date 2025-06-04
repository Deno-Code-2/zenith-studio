
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import { AppleHelloEnglishEffect } from '@/components/ui/apple-hello-effect';

interface PreloaderScreenProps {
  onComplete: () => void;
}

const PreloaderScreen = ({ onComplete }: PreloaderScreenProps) => {
  const [animationComplete, setAnimationComplete] = useState(false);
  
  const handleAnimationComplete = () => {
    setAnimationComplete(true);
    // Wait a bit after animation completes before calling onComplete
    setTimeout(() => {
      onComplete();
    }, 1000);
  };

  return (
    <motion.div 
      className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }}
    > 
      <div className="flex flex-col items-center justify-center">
        {/* Hello Animation */}
        <div className="h-24 md:h-28 lg:h-32 flex items-center justify-center">
          <AppleHelloEnglishEffect
            speed={1.1}
            onAnimationComplete={handleAnimationComplete}
            className="text-black h-full w-auto"
          />
        </div>
      </div>
    </motion.div>
  );
};

export default PreloaderScreen;
