
"use client";

import { cn } from "@/lib/utils";
import React, { createContext, useState, useContext, useRef, useEffect } from "react";

const MouseEnterContext = createContext<
  [boolean, React.Dispatch<React.SetStateAction<boolean>>] | undefined
>(undefined);

export const Cover = ({
  children,
  className,
  containerClassName,
  childClassName,
  skew = 0,
  speed = 2500,
}: {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  childClassName?: string;
  skew?: number;
  speed?: number;
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMouseEntered, setIsMouseEntered] = useState(false);

  return (
    <MouseEnterContext.Provider value={[isMouseEntered, setIsMouseEntered]}>
      <div
        ref={containerRef}
        onMouseEnter={() => {
          setIsMouseEntered(true);
        }}
        onMouseLeave={() => {
          setIsMouseEntered(false);
        }}
        className={cn(
          "relative overflow-hidden dark:bg-black bg-white flex justify-center items-center",
          containerClassName
        )}
      >
        <div
          className={cn(
            "relative z-10 dark:text-white text-black flex space-y-8",
            childClassName
          )}
        >
          {children}
        </div>

        <div
          style={{
            transformStyle: "preserve-3d",
            transform: `perspective(800px) rotate${skew}(${isMouseEntered ? 40 : 0}deg)`,
            transition: `transform ${isMouseEntered ? speed : speed / 2}ms ${
              isMouseEntered ? "ease-in" : "ease-out"
            }`,
          }}
          className={cn(
            "absolute left-0 top-0 bg-transparent w-full h-full overflow-hidden select-none",
            className
          )}
        >
          <div
            style={{
              backgroundPosition: `0px calc(50% + ${
                isMouseEntered ? "5%" : "0%"
              })`,
              backgroundSize: "100% 150%",
              transition: `all ${speed}ms ${
                isMouseEntered ? "ease-in" : "ease-out"
              }`,
            }}
            className="relative h-full w-full"
          >
            <div
              className={cn(
                "h-[400%] w-[220%] -ml-[60%] -mt-[100%]",
                "light:to-slate-950/0 dark:to-black/0",
                "bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))]",
                "from-custom-orange/25 via-custom-orange/5 to-custom-orange/0"
              )}
            ></div>
          </div>
        </div>
        <Beam />
      </div>
    </MouseEnterContext.Provider>
  );
};

export const Beam = () => {
  const context = useContext(MouseEnterContext);

  const [isMouseEntered, setIsMouseEntered] = context ?? [false, () => {}];

  return (
    <>
      <span
        className={cn(
          "absolute h-[40px] w-[100px] bg-gradient-to-r from-transparent via-custom-orange/25 to-transparent animate-beam blur-[5px] opacity-0 transition-opacity duration-1000 left-[50%] -translate-x-1/2",
          isMouseEntered && "opacity-100"
        )}
        style={{
          top: `calc(50% - 20px)`,
        }}
      />
    </>
  );
};
