
import React, { useState } from "react";
import { motion } from "framer-motion";

export const AnimatedTooltip = ({
  items,
}: {
  items: {
    id: number;
    name: string;
    designation: string;
    image: string;
  }[];
}) => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-row items-center justify-center py-8">
      {items.map((item, idx) => (
        <div
          key={item.id}
          className="relative group"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <div
            className={`h-14 w-14 sm:h-16 sm:w-16 md:h-20 md:w-20 rounded-full flex items-center justify-center cursor-pointer grayscale hover:grayscale-0 ${
              hoveredIndex === idx && "grayscale-0"
            }`}
          >
            <img
              src={item.image}
              alt={item.name}
              className="object-cover rounded-full h-full w-full"
              onMouseMove={(e: React.MouseEvent<HTMLImageElement>) => {
                if (hoveredIndex === idx) {
                  const rect = e.currentTarget.getBoundingClientRect();
                  const x = e.clientX - rect.left - rect.width / 2;
                  const y = e.clientY - rect.top - rect.height / 2;
                  const tooltip = document.getElementById(`tooltip-${idx}`);
                  if (tooltip) {
                    tooltip.style.transform = `translate(${x * 0.1}px, ${
                      y * 0.1
                    }px)`;
                  }
                }
              }}
            />
          </div>
          {hoveredIndex === idx && (
            <motion.div
              id={`tooltip-${idx}`}
              initial={{ opacity: 0, y: 20, scale: 0.6 }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
                transition: {
                  type: "spring",
                  stiffness: 260,
                  damping: 10,
                },
              }}
              exit={{ opacity: 0, y: 20, scale: 0.6 }}
              className="absolute -top-16 left-0 right-0 z-50 flex items-center justify-center"
            >
              <div className="bg-black text-white rounded-md px-4 py-2 text-center">
                <div className="font-bold text-sm">{item.name}</div>
                <div className="text-xs">{item.designation}</div>
              </div>
            </motion.div>
          )}
        </div>
      ))}
    </div>
  );
};
