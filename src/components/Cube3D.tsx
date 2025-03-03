
import { lazy, Suspense, useEffect, useState } from "react";
import { motion } from "framer-motion";

const LazySpline = lazy(() => import("@splinetool/react-spline"));

export function Cube3D() {
  const [showSpline, setShowSpline] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSpline(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative w-full h-[400px] md:h-[500px] lg:h-[600px] flex items-center justify-center overflow-visible">
      <Suspense fallback={<div className="text-white font-jakarta">Loading 3D model...</div>}>
        {showSpline && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="w-full h-full scale-90 md:scale-110 lg:scale-125" // Changed scale-100 to scale-90 for better mobile display
          >
            <LazySpline scene="https://prod.spline.design/mZBrYNcnoESGlTUG/scene.splinecode" />
            <style>
              {`.spline-watermark { display: none !important; opacity: 0 !important; visibility: hidden !important; }`}
            </style>
          </motion.div>
        )}
      </Suspense>
    </div>
  );
}
