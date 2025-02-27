
import { cn } from "@/lib/utils";
import React, { ReactNode, useRef } from "react";

interface TextHoverEffectProps {
  text: string | ReactNode;
  className?: string;
}

export const TextHoverEffect = ({ text, className }: TextHoverEffectProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const originalTextRef = useRef<HTMLSpanElement>(null);
  const hoverTextRef = useRef<HTMLSpanElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current || !originalTextRef.current || !hoverTextRef.current) return;

    const rect = containerRef.current.getBoundingClientRect();
    const localX = e.clientX - rect.left;
    const localY = e.clientY - rect.top;

    const center = { x: rect.width / 2, y: rect.height / 2 };
    const distance = Math.sqrt(Math.pow(localX - center.x, 2) + Math.pow(localY - center.y, 2));
    const maxDistance = Math.sqrt(Math.pow(rect.width, 2) + Math.pow(rect.height, 2)) / 2;

    const progress = distance / maxDistance;
    const opacity = Math.max(0, 1 - progress);

    hoverTextRef.current.style.opacity = opacity.toString();
  };

  const handleMouseLeave = () => {
    if (hoverTextRef.current) {
      hoverTextRef.current.style.opacity = "0";
    }
  };

  return (
    <div
      ref={containerRef}
      className={cn("relative overflow-hidden inline-block", className)}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <span ref={originalTextRef} className="relative z-10">
        {text}
      </span>
      <span
        ref={hoverTextRef}
        className="absolute inset-0 z-20 bg-gradient-to-r from-custom-orange via-custom-orange to-custom-orange bg-clip-text text-transparent pointer-events-none opacity-0 transition-opacity duration-150"
        style={{ color: "transparent" }}
      >
        {text}
      </span>
    </div>
  );
};
