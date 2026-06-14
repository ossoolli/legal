"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Locale, translations } from "@/data/translations";

interface WhatsAppButtonProps {
  lang: Locale;
}

export default function WhatsAppButton({ lang }: WhatsAppButtonProps) {
  const [isVisible, setIsVisible] = useState(false);
  const t = translations[lang];

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  const handleWhatsAppClick = () => {
    const phone = "962772443804";
    const text = encodeURIComponent(t.common.whatsappMsg);
    window.open(`https://wa.me/${phone}?text=${text}`, "_blank");
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          exit={{ scale: 0, opacity: 0 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={handleWhatsAppClick}
          className="fixed bottom-6 left-6 z-50 w-14 h-14 bg-burgundy rounded-full flex items-center justify-center text-white shadow-xl hover:bg-burgundy-hover transition-colors focus:outline-none"
          title={t.home.quickContact.whatsappLabel}
        >
          {/* Subtle pulse ring */}
          <span className="absolute inset-0 rounded-full bg-burgundy animate-ping opacity-25" />

          {/* SVG WhatsApp Icon styled with site aesthetics */}
          <svg
            className="w-7 h-7 fill-current"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 5.361 1.504 5.433 0 9.85-4.407 9.853-9.83.002-2.628-1.017-5.097-2.872-6.953C17.078 2.02 14.62 1 12.002 1 6.569 1 2.151 5.409 2.148 10.83c-.001 2.187.569 3.847 1.639 5.534l-.993 3.628 3.863-.998zM16.82 14.15c-.264-.132-1.564-.77-1.805-.859-.242-.088-.419-.132-.596.132-.176.265-.683.859-.838 1.035-.154.176-.308.198-.573.066-.264-.132-1.117-.412-2.13-1.313-.787-.702-1.32-1.569-1.474-1.833-.155-.264-.017-.407.116-.539.12-.119.264-.309.397-.463.132-.154.176-.264.264-.44.088-.177.044-.331-.022-.463-.066-.132-.596-1.436-.816-1.965-.215-.517-.43-.446-.596-.446-.154 0-.33 0-.506.011-.177.011-.463.077-.705.342-.243.264-.926.903-.926 2.201s.947 2.553 1.08 2.729c.132.176 1.862 2.843 4.512 3.987.63.272 1.123.435 1.507.557.633.201 1.21.173 1.666.1.507-.081 1.564-.639 1.784-1.256.22-.617.22-1.146.154-1.256-.066-.109-.242-.176-.506-.308z" />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
