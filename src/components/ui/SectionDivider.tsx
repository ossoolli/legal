"use client";

import { useEffect, useRef, useState } from "react";

export default function SectionDivider() {
  const lineRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const currentLine = lineRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (currentLine) {
      observer.observe(currentLine);
    }

    return () => {
      if (currentLine) {
        observer.unobserve(currentLine);
      }
    };
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-6 py-4 overflow-hidden">
      <div
        ref={lineRef}
        className={`h-[1px] bg-burgundy transition-transform duration-1000 ease-out`}
        style={{
          transform: isVisible ? "scaleX(1)" : "scaleX(0)",
          transformOrigin: "center",
        }}
      />
    </div>
  );
}
