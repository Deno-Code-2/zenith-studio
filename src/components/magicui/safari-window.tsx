import * as React from "react";
import { cn } from "@/lib/utils";

interface SafariWindowProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string;
  children: React.ReactNode;
}

export function SafariWindow({
  url = "https://zenithstudio.com",
  children,
  className,
  ...props
}: SafariWindowProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-xl border border-custom-orange/20 bg-black shadow-xl",
        className
      )}
      {...props}
    >
      <div className="flex items-center gap-2 border-b border-custom-orange/20 bg-black p-2">
        <div className="flex gap-1.5">
          <div className="h-3 w-3 rounded-full bg-custom-orange" />
          <div className="h-3 w-3 rounded-full bg-custom-orange/60" />
          <div className="h-3 w-3 rounded-full bg-custom-orange/30" />
        </div>
        <div className="flex h-7 w-full items-center gap-2 rounded-lg bg-black/20 px-3">
          <div className="h-3 w-3 rounded-full bg-custom-orange/30" />
          <div className="text-xs text-white/50">{url}</div>
        </div>
      </div>
      <div className="bg-black">{children}</div>
    </div>
  );
}