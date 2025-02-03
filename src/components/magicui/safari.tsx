import * as React from "react";
import { cn } from "@/lib/utils";

interface SafariProps extends React.HTMLAttributes<HTMLDivElement> {
  url?: string;
}

const Safari = ({ url = "magicui.design", className, ...props }: SafariProps) => {
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
      <div className="bg-black p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <span className="text-4xl font-bold text-custom-orange">250+</span>
            <p className="text-white mt-2">Projects Completed</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-custom-orange">180+</span>
            <p className="text-white mt-2">Happy Clients</p>
          </div>
          <div className="text-center">
            <span className="text-4xl font-bold text-custom-orange">98%</span>
            <p className="text-white mt-2">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Safari;