"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Locale, translations } from "@/data/translations";

interface NavigationProps {
  lang: Locale;
}

export default function Navigation({ lang }: NavigationProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const pathname = usePathname();
  const router = useRouter();
  const t = translations[lang];

  // Map route names to paths
  const navLinks = [
    { name: t.nav.home, path: "/" },
    { name: t.nav.center, path: "/center" },
    { name: t.nav.ladyOfLaw, path: "/lady-of-law" },
    { name: t.nav.services, path: "/services" },
    { name: t.nav.cases, path: "/cases" },
    { name: t.nav.legalHub, path: "/legal-hub" },
    { name: t.nav.contact, path: "/contact" },
  ];

  // Helper to resolve localized paths
  const getLocalizedPath = (path: string) => {
    return `/${lang}${path === "/" ? "" : path}`;
  };

  const handleLanguageSwitch = () => {
    const targetLocale = lang === "ar" ? "en" : "ar";
    // Strip current locale prefix and rebuild
    let baseRoute = pathname;
    if (pathname.startsWith("/en")) {
      baseRoute = pathname.slice(3) || "/";
    } else if (pathname.startsWith("/ar")) {
      baseRoute = pathname.slice(3) || "/";
    }

    const newPath = `/${targetLocale}${baseRoute === "/" ? "" : baseRoute}`;
    router.push(newPath);
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Sticky background transition
      if (currentScrollY > 80) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Hide/Show on scroll logic
      if (currentScrollY > lastScrollY && currentScrollY > 150) {
        // Scrolling down -> hide nav
        setIsVisible(false);
      } else {
        // Scrolling up -> show nav
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  // Is a link active?
  const isActive = (path: string) => {
    const normalizedPath = getLocalizedPath(path);
    if (path === "/") {
      return pathname === "/en" || pathname === "/ar" || pathname === "/";
    }
    return pathname === normalizedPath || pathname.endsWith(path);
  };

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
          isScrolled
            ? "bg-cream/95 backdrop-blur-md shadow-md py-4 border-b border-divider"
            : "bg-transparent py-6"
        } ${isVisible ? "translate-y-0" : "-translate-y-full"}`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo "م" on the right for Arabic (RTL), left for English (LTR) */}
          <Link
            href={getLocalizedPath("/")}
            className="flex items-center gap-3 group focus:outline-none"
          >
            <div className="w-10 h-10 rounded bg-burgundy flex items-center justify-center text-cream font-cairo font-black text-xl transition-transform group-hover:scale-105">
              م
            </div>
            <div className="hidden md:flex flex-col">
              <span className="font-cairo font-bold text-sm leading-tight text-burgundy">
                المركز القانوني العربي
              </span>
              <span className="font-playfair text-[9px] tracking-wider text-charcoal/60 uppercase">
                Arab Legal Center
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={getLocalizedPath(link.path)}
                className={`font-cairo font-semibold text-sm transition-colors relative pb-1 focus:outline-none ${
                  isActive(link.path)
                    ? "text-burgundy"
                    : "text-charcoal/80 hover:text-burgundy"
                }`}
              >
                {link.name}
                {isActive(link.path) && (
                  <motion.div
                    layoutId="activeIndicator"
                    className="absolute bottom-0 left-0 right-0 h-[1.5px] bg-burgundy"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            ))}
          </div>

          {/* Action Items: Lang Switcher & Consultation Modal Trigger */}
          <div className="hidden lg:flex items-center gap-6">
            <button
              onClick={handleLanguageSwitch}
              className="font-cairo font-bold text-xs uppercase text-charcoal/70 hover:text-burgundy tracking-widest transition-colors py-1 focus:outline-none"
            >
              {lang === "ar" ? "English" : "العربية"}
            </button>

            {/* Persistent CTA Trigger */}
            <Link
              href={getLocalizedPath("/contact")}
              className="px-5 py-2.5 bg-burgundy text-cream font-cairo font-semibold text-sm rounded shadow-sm hover:bg-burgundy-hover transition-colors focus:outline-none"
            >
              {t.nav.cta}
            </Link>
          </div>

          {/* Mobile Navigation controls */}
          <div className="flex lg:hidden items-center gap-4">
            <button
              onClick={handleLanguageSwitch}
              className="font-cairo font-bold text-xs uppercase text-charcoal/70 hover:text-burgundy transition-colors py-1 px-2 focus:outline-none"
            >
              {lang === "ar" ? "EN" : "عربي"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(true)}
              className="w-10 h-10 flex flex-col justify-center items-center gap-1.5 focus:outline-none"
              aria-label={t.nav.menuOpen}
            >
              <span className="w-6 h-0.5 bg-burgundy rounded transition-transform" />
              <span className="w-6 h-0.5 bg-burgundy rounded transition-transform" />
              <span className="w-6 h-0.5 bg-burgundy rounded transition-transform" />
            </button>
          </div>
        </div>
      </nav>

      {/* Fullscreen Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: "-100%" }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: "-100%" }}
            transition={{ duration: 0.5, ease: [0.76, 0, 0.24, 1] }}
            className="fixed inset-0 bg-burgundy z-50 flex flex-col p-6 text-cream"
          >
            {/* Header in mobile menu */}
            <div className="flex items-center justify-between pb-8 border-b border-cream/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded bg-cream flex items-center justify-center text-burgundy font-cairo font-black text-xl">
                  م
                </div>
                <div className="flex flex-col">
                  <span className="font-cairo font-bold text-sm leading-tight text-cream">
                    المركز القانوني العربي
                  </span>
                  <span className="font-playfair text-[9px] tracking-wider text-cream/70 uppercase">
                    Arab Legal Center
                  </span>
                </div>
              </div>

              <button
                onClick={() => setMobileMenuOpen(false)}
                className="w-10 h-10 flex items-center justify-center font-cairo font-semibold text-sm text-cream hover:text-roseGray transition-colors focus:outline-none"
              >
                {t.nav.menuClose}
              </button>
            </div>

            {/* Menu Links */}
            <div className="flex-1 flex flex-col justify-center items-center gap-6 my-12">
              {navLinks.map((link, idx) => (
                <motion.div
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.1 + idx * 0.05 }}
                  key={link.path}
                >
                  <Link
                    href={getLocalizedPath(link.path)}
                    onClick={() => setMobileMenuOpen(false)}
                    className="font-cairo font-bold text-2xl hover:text-roseGray transition-colors"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* CTA in mobile menu */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="pb-8 flex flex-col gap-4 items-center"
            >
              <Link
                href={getLocalizedPath("/contact")}
                onClick={() => setMobileMenuOpen(false)}
                className="w-full max-w-sm py-4 bg-cream text-burgundy text-center font-cairo font-bold text-base rounded shadow hover:bg-roseGray transition-colors focus:outline-none"
              >
                {t.nav.cta}
              </Link>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
