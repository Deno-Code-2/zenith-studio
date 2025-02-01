"use client";

import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

export const FlickeringGrid = ({
  className,
  squareSize = 4,
  gridGap = 6,
  color = "#6B7280",
  maxOpacity = 0.5,
  flickerChance = 0.1,
  height = 800,
  width = 800,
}: {
  className?: string;
  squareSize?: number;
  gridGap?: number;
  color?: string;
  maxOpacity?: number;
  flickerChance?: number;
  height?: number;
  width?: number;
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const squaresX = Math.floor(width / (squareSize + gridGap));
    const squaresY = Math.floor(height / (squareSize + gridGap));

    const squares = Array.from({ length: squaresX * squaresY }, () => ({
      opacity: Math.random() * maxOpacity,
      increasing: Math.random() >= 0.5,
    }));

    let animationFrameId: number;

    const draw = () => {
      ctx.clearRect(0, 0, width, height);

      squares.forEach((square, i) => {
        const x = (i % squaresX) * (squareSize + gridGap);
        const y = Math.floor(i / squaresX) * (squareSize + gridGap);

        if (Math.random() < flickerChance) {
          square.increasing = !square.increasing;
        }

        square.opacity += square.increasing ? 0.05 : -0.05;
        square.opacity = Math.min(Math.max(square.opacity, 0), maxOpacity);

        ctx.fillStyle = `${color}${Math.round(
          (square.opacity / maxOpacity) * 255
        ).toString(16).padStart(2, "0")}`;
        ctx.fillRect(x, y, squareSize, squareSize);
      });

      animationFrameId = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [color, flickerChance, gridGap, height, maxOpacity, squareSize, width]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={cn("", className)}
    />
  );
};