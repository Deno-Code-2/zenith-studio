import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface TextRotateProps {
  texts: string[];
  interval?: number;
}

const TextRotate = ({ texts, interval = 2000 }: TextRotateProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, interval);

    return () => clearInterval(timer);
  }, [texts, interval]);

  return (
    <motion.div
      key={currentIndex}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -20, opacity: 0 }}
      transition={{ duration: 0.5 }}
      className="text-custom-orange font-syne"
    >
      {texts[currentIndex]}
    </motion.div>
  );
};

export default TextRotate;