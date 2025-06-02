
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

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
        {/* Custom Zenith Studio Text Animation */}
        <motion.div
          className="h-16 md:h-20 lg:h-24 text-black text-4xl md:text-5xl lg:text-6xl font-bold font-cal"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            onAnimationComplete={handleAnimationComplete}
          >
            Zenith Studio
          </motion.span>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default PreloaderScreen;
