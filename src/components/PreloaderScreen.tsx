
import { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

interface PreloaderScreenProps {
  onComplete: () => void;
}

const PreloaderScreen = ({ onComplete }: PreloaderScreenProps) => {
  const [currentText, setCurrentText] = useState<number>(0);
  const texts = ["We are", "Zenith", "Studio"];
  
  useEffect(() => {
    const timer = setTimeout(() => {
      if (currentText < texts.length - 1) {
        setCurrentText(currentText + 1);
      } else {
        // Wait for the animation to complete before calling onComplete
        setTimeout(() => {
          onComplete();
        }, 1000);
      }
    }, 1500);
    
    return () => clearTimeout(timer);
  }, [currentText, onComplete, texts.length]);

  return (
    <motion.div 
      className="fixed inset-0 bg-white z-50 flex items-center justify-center overflow-hidden"
      initial={{ opacity: 1 }}
      exit={{ 
        opacity: 0,
        transition: { duration: 0.8, ease: [0.22, 1, 0.36, 1] }
      }}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={currentText}
          className="text-5xl md:text-7xl lg:text-8xl font-bold font-syne text-black overflow-hidden"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ 
            y: { type: "spring", stiffness: 100, damping: 15 },
            opacity: { duration: 0.5 },
            ease: [0.22, 1, 0.36, 1],
            duration: 0.8
          }}
        >
          {texts[currentText]}
          {currentText === 2 && <span className="text-custom-orange">.</span>}
        </motion.div>
      </AnimatePresence>
    </motion.div>
  );
};

export default PreloaderScreen;
