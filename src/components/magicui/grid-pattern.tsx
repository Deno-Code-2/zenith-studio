import { useEffect, useRef } from "react";

export const GridPattern = ({
  width = 100,
  height = 100,
  x = 0,
  y = 0,
  className = "",
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.strokeStyle = "#E5E7EB";
    ctx.lineWidth = 0.5;

    // Draw vertical lines
    for (let i = x; i < width; i += 10) {
      ctx.beginPath();
      ctx.moveTo(i, 0);
      ctx.lineTo(i, height);
      ctx.stroke();
    }

    // Draw horizontal lines
    for (let i = y; i < height; i += 10) {
      ctx.beginPath();
      ctx.moveTo(0, i);
      ctx.lineTo(width, i);
      ctx.stroke();
    }
  }, [width, height, x, y]);

  return (
    <canvas
      ref={canvasRef}
      width={width}
      height={height}
      className={className}
      style={{ opacity: 0.1 }}
    />
  );
};