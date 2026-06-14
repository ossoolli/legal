"use client";

import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface ServiceCardProps {
  title: string;
  desc: string;
  href: string;
  items?: string[];
  ctaLabel?: string;
}

export default function ServiceCard({
  title,
  desc,
  href,
  items = [],
  ctaLabel = "التفاصيل",
}: ServiceCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isTouch, setIsTouch] = useState(false);

  useEffect(() => {
    setIsTouch(window.matchMedia("(pointer: coarse)").matches);
  }, []);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (isTouch || !cardRef.current) return;
    const { left, top, width, height } = cardRef.current.getBoundingClientRect();
    const x = e.clientX - (left + width / 2);
    const y = e.clientY - (top + height / 2);
    
    // Magnetic pull effect limit to ~12px max drift
    setPosition({ x: x * 0.06, y: y * 0.06 });
  };

  const handleMouseLeave = () => {
    setPosition({ x: 0, y: 0 });
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      animate={{ x: position.x, y: position.y }}
      transition={{ type: "spring", stiffness: 220, damping: 22, mass: 0.5 }}
      className="bg-white border-t-[3px] border-burgundy rounded p-6 shadow-sm hover:shadow-lg transition-shadow flex flex-col justify-between h-full group"
    >
      <div>
        <h3 className="font-cairo font-bold text-xl text-burgundy mb-3 transition-colors group-hover:text-burgundy-hover">
          {title}
        </h3>
        <p className="font-cairo text-sm text-charcoal/80 leading-relaxed mb-6">
          {desc}
        </p>

        {items.length > 0 && (
          <ul className="flex flex-col gap-2 mb-8">
            {items.slice(0, 3).map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-2.5 text-xs font-cairo text-charcoal/70"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-burgundy/30 mt-2 shrink-0" />
                <span className="line-clamp-2">{item}</span>
              </li>
            ))}
          </ul>
        )}
      </div>

      <Link
        href={href}
        className="inline-flex items-center gap-2 font-cairo font-bold text-sm text-burgundy hover:text-burgundy-hover transition-colors group-hover:translate-x-1 duration-300 rtl:group-hover:-translate-x-1"
      >
        <span>{ctaLabel}</span>
        <svg
          className="w-4 h-4 rtl:rotate-180 transition-transform duration-300"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2.5"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </Link>
    </motion.div>
  );
}
