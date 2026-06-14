"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function LoadingScreen() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Disable body scroll during loading screen
    document.body.style.overflow = "hidden";

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = "";
    }, 2500);

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            y: "-100%",
            transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1] },
          }}
          className="fixed inset-0 bg-cream z-[99999] flex flex-col items-center justify-center"
        >
          <div className="flex flex-col items-center relative">
            <motion.span
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{
                scale: [0.7, 1, 1.05, 30],
                opacity: [0, 1, 1, 0],
              }}
              transition={{
                duration: 2.2,
                times: [0, 0.3, 0.75, 1],
                ease: [0.25, 1, 0.5, 1],
              }}
              className="text-[140px] md:text-[220px] font-cairo font-black text-burgundy select-none leading-none select-none pointer-events-none"
            >
              م
            </motion.span>
            <motion.div
              initial={{ width: 0, opacity: 0.2 }}
              animate={{ width: 140, opacity: [0.2, 1, 0] }}
              transition={{
                duration: 1.8,
                times: [0, 0.8, 1],
                ease: "easeInOut",
              }}
              className="h-[2px] bg-burgundy mt-2"
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
