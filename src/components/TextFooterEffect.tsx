
import { useRef } from "react";
import { TextHoverEffect } from "@/components/ui/text-hover-effect";

export default function TextFooterEffect() {
  return (
    <div className="flex flex-col items-center justify-center w-full py-16 text-center">
      <TextHoverEffect
        text={
          <h2 className="text-6xl md:text-8xl font-bold font-syne tracking-tight max-w-4xl">
            Digital Solutions For Modern Businesses
          </h2>
        }
        className="text-white"
      />
    </div>
  );
}
