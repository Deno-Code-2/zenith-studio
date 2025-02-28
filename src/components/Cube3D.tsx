
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
    if (!isMobile) {
      const timer = setTimeout(() => {
        setShowSpline(true);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [isMobile]);

  return (
    <div className="relative w-full h-[500px] flex items-center justify-center">
      {!isMobile && (
        <Suspense fallback={<div>Loading...</div>}>
          {showSpline && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 1 }}
            >
              <LazySpline scene="https://prod.spline.design/mZBrYNcnoESGlTUG/scene.splinecode" />
            </motion.div>
          )}
        </Suspense>
      )}
    </div>
  );
}
