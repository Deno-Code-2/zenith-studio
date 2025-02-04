import * as React from "react";
import { cn } from "@/lib/utils";

export interface MarqueeProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  reverse?: boolean;
  fade?: boolean;
  pauseOnHover?: boolean;
  children?: React.ReactNode;
  vertical?: boolean;
  repeat?: number;
  [key: string]: any;
}

export default function Marquee({
  className,
  reverse = false,
  pauseOnHover = false,
  fade = false,
  vertical = false,
  repeat = 4,
  children,
  ...props
}: MarqueeProps) {
  return (
    <div
      {...props}
      className={cn(
        "group flex overflow-hidden p-2 [--duration:40s] [--gap:1rem] [gap:var(--gap)]",
        {
          "flex-row": !vertical,
          "flex-col": vertical,
        },
        className
      )}
    >
      {Array(repeat)
        .fill(0)
        .map((_, i) => (
          <div
            key={i}
            className={cn(
              "flex min-w-full shrink-0 items-center justify-around gap-[--gap] [animation:scroll_var(--duration)_linear_infinite]",
              {
                "animate-marquee flex-row": !vertical,
                "animate-marquee-vertical flex-col": vertical,
                "group-hover:[animation-play-state:paused]": pauseOnHover,
                "[animation-direction:reverse]": reverse,
              }
            )}
          >
            {children}
          </div>
        ))}

      {fade && (
        <>
          <div className="pointer-events-none absolute left-0 top-0 h-full w-1/4 bg-gradient-to-r from-background to-transparent"></div>
          <div className="pointer-events-none absolute right-0 top-0 h-full w-1/4 bg-gradient-to-l from-background to-transparent"></div>
        </>
      )}
    </div>
  );
}
