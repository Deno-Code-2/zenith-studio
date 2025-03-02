
import React from 'react';
import { cn } from "@/lib/utils";

interface LinkPreviewProps {
  title: string;
  description: string;
  image?: string;
  link: string;
  className?: string;
}

const LinkPreview = ({
  title,
  description,
  image,
  link,
  className
}: LinkPreviewProps) => {
  return (
    <a 
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "block group relative overflow-hidden rounded-xl border border-custom-orange/20 bg-black p-6 hover:border-custom-orange/40 transition-all duration-300",
        className
      )}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          {image && (
            <div className="relative w-full h-40 mb-4 overflow-hidden rounded-lg">
              <img
                src={image}
                alt={title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          )}
          <h3 className="text-xl font-bold text-white group-hover:text-custom-orange transition-colors duration-300">
            {title}
          </h3>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="mt-auto flex items-center text-sm text-custom-orange">
          <span>Read more</span>
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            width="16" 
            height="16" 
            viewBox="0 0 24 24" 
            fill="none" 
            stroke="currentColor" 
            strokeWidth="2" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            className="ml-1 transition-transform duration-300 group-hover:translate-x-1"
          >
            <path d="M5 12h14"></path>
            <path d="m12 5 7 7-7 7"></path>
          </svg>
        </div>
      </div>
    </a>
  );
};

export default LinkPreview;
