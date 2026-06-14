"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Locale, translations } from "@/data/translations";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default function CasesClient({ params }: PageProps) {
  const lang = params.lang || "ar";
  const t = translations[lang];

  const [activeFilter, setActiveFilter] = useState<
    "all" | "sharia" | "civil" | "commercial" | "labor"
  >("all");

  const filterTabs = [
    { id: "all" as const, name: t.cases.filterAll },
    { id: "sharia" as const, name: t.cases.filterSharia },
    { id: "civil" as const, name: t.cases.filterCivil },
    { id: "commercial" as const, name: t.cases.filterCommercial },
    { id: "labor" as const, name: t.cases.filterLabor },
  ];

  // Filter cases data
  const filteredCases = t.cases.list.filter((c) => {
    if (activeFilter === "all") return true;
    return c.category === activeFilter;
  });

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-burgundy text-cream py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-cairo font-black text-white mb-4">
            {t.cases.title}
          </h1>
          <p className="text-base md:text-lg font-cairo font-light text-roseGray max-w-xl mx-auto leading-relaxed">
            {t.cases.subtitle}
          </p>
        </div>
      </section>

      {/* Filter Tabs & List */}
      <section className="py-20 flex-1">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          {/* Tabs Row */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            {filterTabs.map((tab) => {
              const isActive = activeFilter === tab.id;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveFilter(tab.id)}
                  className={`px-5 py-2.5 rounded font-cairo font-semibold text-sm transition-all duration-300 relative focus:outline-none ${
                    isActive ? "text-cream bg-burgundy" : "text-burgundy bg-white border border-divider hover:bg-divider/30"
                  }`}
                >
                  <span className="relative z-10">{tab.name}</span>
                  {isActive && (
                    <motion.div
                      layoutId="activeFilterBg"
                      className="absolute inset-0 bg-burgundy rounded"
                      transition={{ type: "spring", stiffness: 350, damping: 28 }}
                    />
                  )}
                </button>
              );
            })}
          </div>

          {/* Cases Cards Grid */}
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <AnimatePresence mode="popLayout">
              {filteredCases.map((c) => (
                <motion.div
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.3 }}
                  key={c.id}
                  className="bg-charcoal text-cream rounded p-8 flex flex-col gap-6 shadow-md hover:shadow-xl border border-white/5 group justify-between"
                >
                  <div className="flex flex-col gap-5">
                    {/* Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <span className="text-xs font-cairo font-bold text-roseGray bg-white/5 px-2.5 py-1 rounded">
                        {c.category === "sharia"
                          ? t.cases.filterSharia
                          : c.category === "civil"
                          ? t.cases.filterCivil
                          : c.category === "commercial"
                          ? t.cases.filterCommercial
                          : t.cases.filterLabor}
                      </span>
                    </div>

                    {/* Case Type */}
                    <div className="text-start">
                      <span className="text-[10px] font-cairo uppercase tracking-wider text-roseGray/60 block mb-1">
                        {t.cases.caseType}
                      </span>
                      <h3 className="font-cairo font-bold text-lg text-white group-hover:text-roseGray transition-colors">
                        {c.type}
                      </h3>
                    </div>

                    {/* Challenge */}
                    <div className="text-start">
                      <span className="text-[10px] font-cairo uppercase tracking-wider text-roseGray/60 block mb-1.5">
                        {t.cases.challenge}
                      </span>
                      <p className="font-cairo text-sm text-cream/70 leading-relaxed">
                        {c.challenge}
                      </p>
                    </div>
                  </div>

                  {/* Result */}
                  <div className="text-start border-t border-white/10 pt-5 mt-4">
                    <span className="text-[10px] font-cairo uppercase tracking-wider text-roseGray/60 block mb-1.5">
                      {t.cases.result}
                    </span>
                    <p className="font-cairo text-sm font-semibold text-white leading-relaxed">
                      {c.result}
                    </p>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
