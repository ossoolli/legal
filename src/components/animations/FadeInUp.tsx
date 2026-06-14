"use client";

import { ReactNode } from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

interface FadeInUpProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  className?: string;
  y?: number;
}

export default function FadeInUp({
  children,
  delay = 0,
  duration = 0.8,
  className = "",
  y = 30,
}: FadeInUpProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.05,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y }}
      transition={{
        duration,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
