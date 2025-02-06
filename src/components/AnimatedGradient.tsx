import React, { useEffect, useRef } from "react";
import { motion } from "framer-motion";

interface AnimatedGradientProps {
  colors: string[];
  speed?: number;
  blur?: "none" | "small" | "medium" | "large";
}

const blurMap = {
  none: "blur-none",
  small: "blur-sm",
  medium: "blur-md",
  large: "blur-lg",
};

export const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 0.01,
  blur = "none",
}) => {
  const gradientRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let frame: number;
    let rotation = 0;

    const animate = () => {
      if (gradientRef.current) {
        rotation = (rotation + speed) % 360;
        gradientRef.current.style.transform = `rotate(${rotation}deg)`;
      }
      frame = requestAnimationFrame(animate);
    };

    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [speed]);

  return (
    <motion.div
      className="absolute inset-0 opacity-30"
      initial={{ opacity: 0 }}
      animate={{ opacity: 0.3 }}
      transition={{ duration: 1 }}
    >
      <div
        ref={gradientRef}
        className={`absolute inset-0 ${blurMap[blur]}`}
        style={{
          background: `conic-gradient(from 0deg at 50% 50%, ${colors.join(
            ", "
          )})`,
          transformOrigin: "center center",
        }}
      />
    </motion.div>
  );
};