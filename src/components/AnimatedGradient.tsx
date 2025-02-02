"use client"

import React from "react"
import { motion } from "framer-motion"

interface AnimatedGradientProps {
  colors: string[]
  speed?: number
  blur?: "none" | "small" | "medium" | "large"
}

const AnimatedGradient: React.FC<AnimatedGradientProps> = ({
  colors,
  speed = 0.05,
  blur = "none",
}) => {
  const blurMap = {
    none: "blur-none",
    small: "blur-sm",
    medium: "blur-md",
    large: "blur-lg",
  }

  return (
    <motion.div
      className={`absolute inset-0 ${blurMap[blur]}`}
      style={{
        background: `linear-gradient(45deg, ${colors.join(", ")})`,
        backgroundSize: "400% 400%",
      }}
      animate={{
        backgroundPosition: ["0% 0%", "100% 100%"],
      }}
      transition={{
        duration: 1 / speed,
        repeat: Infinity,
        repeatType: "reverse",
        ease: "linear",
      }}
    />
  )
}

export default AnimatedGradient