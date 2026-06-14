"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export default function CustomCursor() {
  const [hoverState, setHoverState] = useState<"none" | "hover" | "image">("none");
  const [isVisible, setIsVisible] = useState(false);
  const [labelText, setLabelText] = useState("");

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { stiffness: 450, damping: 30, mass: 0.8 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    // Disable on touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    setIsVisible(true);

    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX);
      cursorY.set(e.clientY);
    };

    window.addEventListener("mousemove", moveCursor);

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target) return;

      const closestLink = target.closest("a, button, [role='button'], input, textarea, select");
      if (closestLink) {
        setHoverState("hover");
        return;
      }

      const closestImg = target.closest("img, [data-cursor='view']");
      if (closestImg) {
        setHoverState("image");
        setLabelText(closestImg.getAttribute("data-cursor-label") || "عرض");
        return;
      }

      setHoverState("none");
    };

    window.addEventListener("mouseover", handleMouseOver);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      window.removeEventListener("mouseover", handleMouseOver);
    };
  }, [cursorX, cursorY]);

  if (!isVisible) return null;

  return (
    <motion.div
      style={{
        x: cursorXSpring,
        y: cursorYSpring,
        position: "fixed",
        left: 0,
        top: 0,
        pointerEvents: "none",
        zIndex: 9999,
        transform: "translate(-50%, -50%)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
      animate={{
        width: hoverState === "none" ? 12 : hoverState === "hover" ? 48 : 64,
        height: hoverState === "none" ? 12 : hoverState === "hover" ? 48 : 64,
        backgroundColor: hoverState === "hover" ? "rgba(74, 21, 40, 0.05)" : "#4A1528",
        border: hoverState === "hover" ? "1.5px solid #4A1528" : "0px solid transparent",
        borderRadius: "50%",
      }}
      transition={{ type: "spring", stiffness: 450, damping: 30 }}
    >
      {hoverState === "image" && (
        <span className="text-[10px] text-cream font-cairo font-bold select-none">
          {labelText}
        </span>
      )}
    </motion.div>
  );
}
