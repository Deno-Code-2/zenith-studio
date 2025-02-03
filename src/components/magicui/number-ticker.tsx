import * as React from "react";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";
import gsap from "gsap";

interface NumberTickerProps extends React.HTMLAttributes<HTMLSpanElement> {
  value: number;
  duration?: number;
}

export function NumberTicker({
  value,
  duration = 1,
  className,
  ...props
}: NumberTickerProps) {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const oldValueRef = useRef<number>(0);

  useEffect(() => {
    const node = nodeRef.current;
    if (!node) return;

    const oldValue = oldValueRef.current;
    oldValueRef.current = value;

    gsap.fromTo(
      node,
      { innerText: oldValue },
      {
        innerText: value,
        duration: duration,
        snap: { innerText: 1 },
        ease: "power1.inOut",
      }
    );
  }, [value, duration]);

  return (
    <span ref={nodeRef} className={cn("tabular-nums", className)} {...props}>
      0
    </span>
  );
}