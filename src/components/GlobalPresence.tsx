
import { motion } from "framer-motion";
import Container from "@/components/ui/container";

import { useState, useEffect, useRef } from "react";
import { useTheme } from "next-themes";

interface MapProps {
  dots?: Array<{
    start: { lat: number; lng: number; label?: string };
    end: { lat: number; lng: number; label?: string };
  }>;
  lineColor?: string;
}

// Simplified WorldMap component adapted for React + Vite environment
export function WorldMap({ dots = [], lineColor = "#2D6A4F" }: MapProps) {
  const svgRef = useRef<SVGSVGElement>(null);
  const { theme } = useTheme();
  const [mapSvg, setMapSvg] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
    import('dotted-map').then(({ default: DottedMap }) => {
      try {
        const map = new DottedMap({ height: 100, grid: 'diagonal' });
        
        const svgMap = map.getSVG({
          radius: 0.22,
          color: theme === "dark" ? "#FFFFFF40" : "#00000040",
          shape: "circle",
          backgroundColor: "transparent",
        });
        
        setMapSvg(svgMap);
      } catch (error) {
        console.error("Error generating map:", error);
      }
    }).catch(err => {
      console.error("Failed to load dotted-map:", err);
    });
  }, [theme]);

  const projectPoint = (lat: number, lng: number) => {
    const x = (lng + 180) * (800 / 360);
    const y = (90 - lat) * (400 / 180);
    return { x, y };
  };

  const createCurvedPath = (
    start: { x: number; y: number },
    end: { x: number; y: number }
  ) => {
    const midX = (start.x + end.x) / 2;
    const midY = Math.min(start.y, end.y) - 50;
    return `M ${start.x} ${start.y} Q ${midX} ${midY} ${end.x} ${end.y}`;
  };

  if (!isClient || !mapSvg) {
    return <div className="w-full aspect-[2/1] bg-white flex items-center justify-center">
      <div className="w-8 h-8 border-4 border-green-500/20 border-t-green-500 rounded-full animate-spin"></div>
    </div>;
  }

  return (
    <div className="w-full aspect-[2/1] bg-white relative font-sans overflow-hidden">
      <div
        className="h-full w-full pointer-events-none select-none"
        dangerouslySetInnerHTML={{
          __html: mapSvg
        }}
      />
      
      <svg
        ref={svgRef}
        viewBox="0 0 800 400"
        className="w-full h-full absolute inset-0 pointer-events-none select-none"
      >
        {dots.map((dot, i) => {
          const startPoint = projectPoint(dot.start.lat, dot.start.lng);
          const endPoint = projectPoint(dot.end.lat, dot.end.lng);
          return (
            <g key={`path-group-${i}`}>
              <motion.path
                d={createCurvedPath(startPoint, endPoint)}
                fill="none"
                stroke="url(#path-gradient)"
                strokeWidth="1"
                initial={{
                  pathLength: 0,
                }}
                animate={{
                  pathLength: 1,
                }}
                transition={{
                  duration: 1,
                  delay: 0.5 * i,
                  ease: "easeOut",
                }}
                key={`start-upper-${i}`}
              />
            </g>
          );
        })}

        <defs>
          <linearGradient id="path-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="white" stopOpacity="0" />
            <stop offset="5%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="95%" stopColor={lineColor} stopOpacity="1" />
            <stop offset="100%" stopColor="white" stopOpacity="0" />
          </linearGradient>
        </defs>

        {dots.map((dot, i) => (
          <g key={`points-group-${i}`}>
            <g key={`start-${i}`}>
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.start.lat, dot.start.lng).x}
                cy={projectPoint(dot.start.lat, dot.start.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
            <g key={`end-${i}`}>
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
              />
              <circle
                cx={projectPoint(dot.end.lat, dot.end.lng).x}
                cy={projectPoint(dot.end.lat, dot.end.lng).y}
                r="2"
                fill={lineColor}
                opacity="0.5"
              >
                <animate
                  attributeName="r"
                  from="2"
                  to="8"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="opacity"
                  from="0.5"
                  to="0"
                  dur="1.5s"
                  begin="0s"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </g>
        ))}
      </svg>
    </div>
  );
}

export default function GlobalPresence() {
  return (
    <section className="py-16 dark:bg-black bg-white w-full">
      <Container>
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="font-bold text-3xl md:text-5xl mb-4 font-syne">
            Our Global <span className="text-green-500">Presence</span>
          </h2>
          <p className="text-sm md:text-lg text-muted-foreground max-w-2xl mx-auto pb-8">
            Working across borders and time zones to deliver exceptional digital solutions to our clients worldwide.
          </p>
        </div>
        
        <WorldMap
          lineColor="#2D6A4F"
          dots={[
            // USA to Dubai
            {
              start: {
                lat: 37.7749,
                lng: -122.4194
              }, // San Francisco
              end: {
                lat: 25.2048, 
                lng: 55.2708
              }, // Dubai
            },
            // Dubai to India
            {
              start: {
                lat: 25.2048,
                lng: 55.2708
              }, // Dubai
              end: {
                lat: 20.5937,
                lng: 78.9629
              }, // India
            },
            // India to USA
            {
              start: {
                lat: 20.5937,
                lng: 78.9629
              }, // India
              end: {
                lat: 37.7749,
                lng: -122.4194
              }, // San Francisco
            },
          ]}
        />
      </Container>
    </section>
  );
}
