
"use client";

import type { TargetAndTransition } from "motion/react";
import { motion } from "motion/react";

import { cn } from "@/lib/utils";

const initialProps: TargetAndTransition = {
  pathLength: 0,
  opacity: 0,
};

const animateProps: TargetAndTransition = {
  pathLength: 1,
  opacity: 1,
};

type Props = React.ComponentProps<typeof motion.svg> & {
  speed?: number;
  onAnimationComplete?: () => void;
};

function ZenithStudioEffect({
  className,
  speed = 1,
  onAnimationComplete,
  ...props
}: Props) {
  const calc = (x: number) => x * speed;

  return (
    <motion.svg
      className={cn("h-20", className)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1200 200"
      fill="none"
      stroke="currentColor"
      strokeWidth="12"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      {...props}
    >
      <title>Zenith Studio</title>

      {/* Z */}
      <motion.path
        d="M20 50 L80 50 L20 150 L80 150"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeInOut",
          opacity: { duration: 0.2 },
        }}
      />

      {/* e */}
      <motion.path
        d="M120 100 A 20 20 0 1 1 120 120 L140 110"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeOut",
          delay: calc(0.4),
          opacity: { duration: 0.15, delay: calc(0.4) },
        }}
      />

      {/* n */}
      <motion.path
        d="M160 150 L160 100 Q160 80 180 80 Q200 80 200 100 L200 150"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeOut",
          delay: calc(0.7),
          opacity: { duration: 0.25, delay: calc(0.7) },
        }}
      />

      {/* i */}
      <motion.path
        d="M220 100 L220 150 M220 75 L220 85"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeOut",
          delay: calc(1.2),
          opacity: { duration: 0.15, delay: calc(1.2) },
        }}
      />

      {/* t */}
      <motion.path
        d="M240 75 L240 150 M220 95 L260 95"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeOut",
          delay: calc(1.5),
          opacity: { duration: 0.2, delay: calc(1.5) },
        }}
      />

      {/* h */}
      <motion.path
        d="M280 75 L280 150 L280 110 Q280 100 300 100 Q320 100 320 110 L320 150"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeOut",
          delay: calc(1.9),
          opacity: { duration: 0.3, delay: calc(1.9) },
        }}
      />

      {/* Space */}

      {/* S */}
      <motion.path
        d="M380 130 Q360 150 360 130 Q360 110 380 110 Q400 110 400 130 Q400 150 380 150"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.7),
          ease: "easeOut",
          delay: calc(2.5),
          opacity: { duration: 0.35, delay: calc(2.5) },
        }}
      />

      {/* t */}
      <motion.path
        d="M420 75 L420 150 M400 95 L440 95"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.4),
          ease: "easeOut",
          delay: calc(3.2),
          opacity: { duration: 0.2, delay: calc(3.2) },
        }}
      />

      {/* u */}
      <motion.path
        d="M460 100 L460 130 Q460 150 480 150 Q500 150 500 130 L500 100"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeOut",
          delay: calc(3.6),
          opacity: { duration: 0.25, delay: calc(3.6) },
        }}
      />

      {/* d */}
      <motion.path
        d="M520 75 L520 150 Q520 100 540 100 Q560 100 560 125 Q560 150 540 150 Q520 150 520 125"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.6),
          ease: "easeOut",
          delay: calc(4.1),
          opacity: { duration: 0.3, delay: calc(4.1) },
        }}
      />

      {/* i */}
      <motion.path
        d="M580 100 L580 150 M580 75 L580 85"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.3),
          ease: "easeOut",
          delay: calc(4.7),
          opacity: { duration: 0.15, delay: calc(4.7) },
        }}
      />

      {/* o */}
      <motion.path
        d="M600 125 A 25 25 0 1 1 600 124"
        style={{ strokeLinecap: "round" }}
        initial={initialProps}
        animate={animateProps}
        transition={{
          duration: calc(0.5),
          ease: "easeOut",
          delay: calc(5.0),
          opacity: { duration: 0.25, delay: calc(5.0) },
        }}
        onAnimationComplete={onAnimationComplete}
      />
    </motion.svg>
  );
}

export { ZenithStudioEffect };
