
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

export function LinkPreview({
  children,
  url,
  imageUrl,
  title,
  description,
  previewClassName,
  wrapperClassName
}: {
  children: React.ReactNode;
  url: string;
  imageUrl: string;
  title: string;
  description: string;
  previewClassName?: string;
  wrapperClassName?: string;
}) {
  const [isMouseOver, setIsMouseOver] = useState(false);

  return (
    <div
      className={cn("relative group cursor-pointer", wrapperClassName)}
      onMouseOver={() => setIsMouseOver(true)}
      onMouseLeave={() => setIsMouseOver(false)}
    >
      <a href={url} target="_blank" rel="noopener noreferrer">
        {children}
      </a>
      <AnimatePresence>
        {isMouseOver && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.9 }}
            className={cn(
              "absolute top-full left-1/2 transform -translate-x-1/2 z-50 w-64 md:w-72 lg:w-80 bg-white dark:bg-gray-950 shadow-md border border-border rounded-lg overflow-hidden",
              previewClassName
            )}
          >
            <div className="w-full h-32 relative overflow-hidden">
              <img 
                src={imageUrl} 
                alt={title} 
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-3">
              <h3 className="font-medium text-sm text-gray-900 dark:text-gray-100 mb-1 line-clamp-1">
                {title}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 line-clamp-2">
                {description}
              </p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
