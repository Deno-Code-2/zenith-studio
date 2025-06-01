
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { useEffect, useRef } from "react";

interface AnimatedGridPatternProps {
  className?: string;
  numSquares?: number;
  maxOpacity?: number;
  duration?: number;
  repeatDelay?: number;
}

export function AnimatedGridPattern({
  className,
  numSquares = 30,
  maxOpacity = 0.5,
  duration = 4,
  repeatDelay = 0.5,
}: AnimatedGridPatternProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  return (
    <div
      ref={containerRef}
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="animated-grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="currentColor"
              strokeWidth="1"
              className="text-border opacity-30"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#animated-grid)" />
        {Array.from({ length: numSquares }).map((_, i) => (
          <motion.rect
            key={i}
            x={Math.random() * 100 + "%"}
            y={Math.random() * 100 + "%"}
            width="40"
            height="40"
            fill="currentColor"
            className="text-primary"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, maxOpacity, 0],
            }}
            transition={{
              duration,
              repeatDelay,
              repeat: Infinity,
              delay: Math.random() * duration,
            }}
          />
        ))}
      </svg>
    </div>
  );
}
