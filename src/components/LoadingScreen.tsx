import { useEffect, useRef } from "react";
import gsap from "gsap";

interface LoadingScreenProps {
  onComplete: () => void;
}

const LoadingScreen = ({ onComplete }: LoadingScreenProps) => {
  const counterRef = useRef<HTMLDivElement>(null);
  const loaderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const counter = counterRef.current;
    const loader = loaderRef.current;

    if (!counter || !loader) return;

    gsap.to(counter, {
      innerHTML: "100%",
      duration: 2,
      snap: { innerHTML: 1 },
      ease: "power1.inOut",
    });

    const tl = gsap.timeline({
      onComplete: () => {
        onComplete();
      },
    });

    tl.to(loader, {
      scaleY: 0,
      duration: 1.5,
      ease: "power4.inOut",
      transformOrigin: "top",
      delay: 2,
    });

  }, [onComplete]);

  return (
    <div
      ref={loaderRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black"
    >
      <div className="text-center">
        <h2 className="text-4xl font-bold text-white mb-4 font-syne">
          Zenith Studio
        </h2>
        <div
          ref={counterRef}
          className="text-2xl text-custom-orange font-jakarta"
        >
          0%
        </div>
      </div>
    </div>
  );
};

export default LoadingScreen;