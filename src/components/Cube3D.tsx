
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

const LazySpline = lazy(() => import("@splinetool/react-spline"));

export function Cube3D() {
  const [showSpline, setShowSpline] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024); // Adjust breakpoint as needed
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    // Always show Spline component regardless of device
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, [isMobile]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      <Suspense fallback={<div className="text-white font-jakarta">Loading 3D model...</div>}>
        {showSpline && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-full h-full"
          >
            <LazySpline scene="https://prod.spline.design/mZBrYNcnoESGlTUG/scene.splinecode" />
            {/* Hide the "Made with Spline" text with CSS */}
            <style jsx global>{`
              .spline-watermark {
                display: none !important;
                opacity: 0 !important;
                visibility: hidden !important;
              }
            `}</style>
          </motion.div>
        )}
      </Suspense>
    </div>
  );
}
