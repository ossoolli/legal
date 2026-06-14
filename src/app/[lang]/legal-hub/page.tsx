"use client";

import { useState } from "react";
import { Locale, translations } from "@/data/translations";

interface PageProps {
  params: {
    lang: Locale;
  };
}

type TabType = "articles" | "videos" | "faq" | "calculator";

export default function LegalHubPage({ params }: PageProps) {
  const lang = params.lang || "ar";
  const t = translations[lang];

  const [activeTab, setActiveTab] = useState<TabType>("articles");

  // Accordion FAQ states
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  // Read article details modal / expand states
  const [selectedArticle, setSelectedArticle] = useState<string | null>(null);

  // Calculator states
  const [calcType, setCalcType] = useState<"sharia" | "labor">("sharia");
  const [childCount, setChildCount] = useState<number>(1);
  const [fatherIncome, setFatherIncome] = useState<number>(400);
  const [basicSalary, setBasicSalary] = useState<number>(350);
  const [serviceYears, setServiceYears] = useState<number>(3);
  const [calcResult, setCalcResult] = useState<number | null>(null);

  // Calculate functions
  const handleCalculate = () => {
    if (calcType === "sharia") {
      // Child alimony estimated formula
      // Approx 10-15% of father's income per child, capped or logically weighted
      const supportPerChild = fatherIncome * 0.12;
      const totalSupport = childCount * supportPerChild;
      setCalcResult(Math.round(totalSupport));
    } else {
      // End of service indemnity estimated formula
      // Half month for each year for first 5 years, one full month for each year after
      let result = 0;
      if (serviceYears <= 5) {
        result = serviceYears * (basicSalary * 0.5);
      } else {
        result = 5 * (basicSalary * 0.5) + (serviceYears - 5) * basicSalary;
      }
      setCalcResult(Math.round(result));
    }
  };

  const isRtl = lang === "ar";

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-burgundy text-cream py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-cairo font-black text-white mb-4">
            {t.legalHub.title}
          </h1>
          <p className="text-base md:text-lg font-cairo font-light text-roseGray max-w-xl mx-auto">
            {t.legalHub.subtitle}
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <section className="py-20 flex-1">
        <div className="max-w-7xl mx-auto px-6 flex flex-col gap-12">
          {/* Main category tabs */}
          <div className="flex flex-wrap items-center justify-center gap-3 border-b border-divider pb-6">
            {(["articles", "videos", "faq", "calculator"] as TabType[]).map((tab) => {
              const isActive = activeTab === tab;
              return (
                <button
                  key={tab}
                  onClick={() => {
                    setActiveTab(tab);
                    setCalcResult(null);
                  }}
                  className={`px-5 py-3 border-b-2 font-cairo font-semibold text-sm transition-all duration-300 focus:outline-none ${
                    isActive
                      ? "border-burgundy text-burgundy"
                      : "border-transparent text-charcoal/60 hover:text-burgundy"
                  }`}
                >
                  {tab === "articles"
                    ? t.legalHub.tabs.articles
                    : tab === "videos"
                    ? t.legalHub.tabs.videos
                    : tab === "faq"
                    ? t.legalHub.tabs.faq
                    : t.legalHub.tabs.calculator}
                </button>
              );
            })}
          </div>

          {/* Tab Content Rendering */}
          <div className="w-full">
            {/* A. Articles Tab */}
            {activeTab === "articles" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.legalHub.articles.map((art) => {
                  const isExpanded = selectedArticle === art.id;
                  return (
                    <div
                      key={art.id}
                      className="bg-white border border-divider p-6 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col justify-between text-start"
                    >
                      <div>
                        <div className="flex items-center justify-between mb-4">
                          <span className="text-xs font-cairo font-bold text-burgundy bg-burgundy/5 px-2.5 py-1 rounded">
                            {art.category}
                          </span>
                          <span className="text-[11px] font-cairo text-charcoal/50">
                            {art.date}
                          </span>
                        </div>
                        <h3 className="font-cairo font-bold text-lg text-charcoal mb-3 line-clamp-2">
                          {art.title}
                        </h3>
                        <p className="font-cairo text-sm text-charcoal/70 leading-relaxed mb-6 line-clamp-4">
                          {isExpanded ? art.content : art.excerpt}
                        </p>
                      </div>
                      <div className="border-t border-divider pt-4 flex items-center justify-between mt-auto">
                        <span className="text-xs font-cairo text-charcoal/40">
                          {art.readTime}
                        </span>
                        <button
                          onClick={() =>
                            setSelectedArticle(isExpanded ? null : art.id)
                          }
                          className="font-cairo font-bold text-xs text-burgundy hover:text-burgundy-hover flex items-center gap-1 focus:outline-none"
                        >
                          <span>
                            {isExpanded
                              ? isRtl
                                ? "إغلاق التفاصيل"
                                : "Collapse"
                              : isRtl
                              ? "اقرأ المقال بالكامل"
                              : "Read Full Article"}
                          </span>
                          <svg
                            className={`w-3.5 h-3.5 transition-transform duration-300 ${
                              isExpanded ? "rotate-90" : "rtl:rotate-180"
                            }`}
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
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* B. Videos Tab */}
            {activeTab === "videos" && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {t.legalHub.videos.map((vid) => (
                  <div
                    key={vid.id}
                    className="bg-white border border-divider rounded overflow-hidden shadow-sm flex flex-col text-start"
                  >
                    <div className="w-full aspect-video bg-charcoal relative">
                      <iframe
                        className="w-full h-full"
                        src={vid.url}
                        title={vid.title}
                        allowFullScreen
                      />
                    </div>
                    <div className="p-5">
                      <h3 className="font-cairo font-bold text-base text-charcoal leading-snug">
                        {vid.title}
                      </h3>
                      <span className="text-[11px] font-cairo text-charcoal/40 mt-3 block">
                        {isRtl ? "مدة الشرح: " : "Duration: "} {vid.duration}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* C. FAQs Tab */}
            {activeTab === "faq" && (
              <div className="max-w-3xl mx-auto flex flex-col gap-4 text-start">
                {t.legalHub.faqs.map((faq, index) => {
                  const isOpen = openFaq === index;
                  return (
                    <div
                      key={index}
                      className="bg-white border border-divider rounded shadow-sm overflow-hidden"
                    >
                      <button
                        onClick={() => setOpenFaq(isOpen ? null : index)}
                        className="w-full px-6 py-5 flex items-center justify-between text-start font-cairo font-bold text-base text-burgundy hover:text-burgundy-hover focus:outline-none"
                      >
                        <span>{faq.q}</span>
                        <span className="text-xl font-bold shrink-0 ml-4 rtl:mr-4 rtl:ml-0">
                          {isOpen ? "×" : "+"}
                        </span>
                      </button>
                      <div
                        className={`transition-all duration-300 ease-in-out ${
                          isOpen ? "max-h-[300px] border-t border-divider" : "max-h-0"
                        } overflow-hidden`}
                      >
                        <p className="px-6 py-5 font-cairo text-sm text-charcoal/80 leading-relaxed bg-cream/10">
                          {faq.a}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            )}

            {/* D. Calculator Tab */}
            {activeTab === "calculator" && (
              <div className="max-w-2xl mx-auto bg-white border border-divider rounded shadow-md p-8 text-start flex flex-col gap-6">
                <div className="border-b border-divider pb-4">
                  <h3 className="font-cairo font-black text-xl text-burgundy">
                    {t.legalHub.calculatorTitle}
                  </h3>
                  <p className="font-cairo text-xs text-charcoal/50 mt-1">
                    {t.legalHub.calculatorDesc}
                  </p>
                </div>

                {/* Calculator Type Switcher */}
                <div className="flex flex-col gap-2">
                  <label className="font-cairo font-bold text-xs text-charcoal/70">
                    {t.legalHub.calcType}
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <button
                      onClick={() => {
                        setCalcType("sharia");
                        setCalcResult(null);
                      }}
                      className={`p-3.5 rounded border text-center font-cairo font-semibold text-xs transition-colors focus:outline-none ${
                        calcType === "sharia"
                          ? "border-burgundy bg-burgundy/5 text-burgundy"
                          : "border-divider bg-white text-charcoal/70 hover:bg-divider/20"
                      }`}
                    >
                      {t.legalHub.calcSharia}
                    </button>
                    <button
                      onClick={() => {
                        setCalcType("labor");
                        setCalcResult(null);
                      }}
                      className={`p-3.5 rounded border text-center font-cairo font-semibold text-xs transition-colors focus:outline-none ${
                        calcType === "labor"
                          ? "border-burgundy bg-burgundy/5 text-burgundy"
                          : "border-divider bg-white text-charcoal/70 hover:bg-divider/20"
                      }`}
                    >
                      {t.legalHub.calcLabor}
                    </button>
                  </div>
                </div>

                {/* Calculator Inputs */}
                {calcType === "sharia" ? (
                  /* Child Alimony Inputs */
                  <div className="flex flex-col gap-5 py-4 border-t border-divider">
                    <div className="flex flex-col gap-2">
                      <label className="font-cairo font-bold text-xs text-charcoal/70">
                        {t.legalHub.calcChildCount}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="20"
                        value={childCount}
                        onChange={(e) =>
                          setChildCount(Math.max(1, parseInt(e.target.value) || 1))
                        }
                        className="p-3 border border-divider rounded font-cairo text-sm text-charcoal focus:outline-none focus:border-burgundy"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-cairo font-bold text-xs text-charcoal/70">
                        {t.legalHub.calcIncome}
                      </label>
                      <input
                        type="number"
                        min="100"
                        value={fatherIncome}
                        onChange={(e) =>
                          setFatherIncome(
                            Math.max(0, parseInt(e.target.value) || 0)
                          )
                        }
                        className="p-3 border border-divider rounded font-cairo text-sm text-charcoal focus:outline-none focus:border-burgundy"
                      />
                    </div>
                  </div>
                ) : (
                  /* Labor Law Inputs */
                  <div className="flex flex-col gap-5 py-4 border-t border-divider">
                    <div className="flex flex-col gap-2">
                      <label className="font-cairo font-bold text-xs text-charcoal/70">
                        {t.legalHub.calcLaborSalary}
                      </label>
                      <input
                        type="number"
                        min="100"
                        value={basicSalary}
                        onChange={(e) =>
                          setBasicSalary(
                            Math.max(0, parseInt(e.target.value) || 0)
                          )
                        }
                        className="p-3 border border-divider rounded font-cairo text-sm text-charcoal focus:outline-none focus:border-burgundy"
                      />
                    </div>

                    <div className="flex flex-col gap-2">
                      <label className="font-cairo font-bold text-xs text-charcoal/70">
                        {t.legalHub.calcLaborYears}
                      </label>
                      <input
                        type="number"
                        min="1"
                        max="60"
                        step="1"
                        value={serviceYears}
                        onChange={(e) =>
                          setServiceYears(
                            Math.max(0, parseFloat(e.target.value) || 0)
                          )
                        }
                        className="p-3 border border-divider rounded font-cairo text-sm text-charcoal focus:outline-none focus:border-burgundy"
                      />
                    </div>
                  </div>
                )}

                {/* Calculate Trigger button */}
                <button
                  onClick={handleCalculate}
                  className="w-full py-3.5 bg-burgundy hover:bg-burgundy-hover text-cream rounded font-cairo font-bold text-sm transition-colors focus:outline-none shadow"
                >
                  {t.legalHub.calculateBtn}
                </button>

                {/* Result Display */}
                {calcResult !== null && (
                  <div className="p-5 bg-burgundy/5 border border-burgundy/10 rounded flex flex-col gap-1 items-center justify-center text-center">
                    <span className="font-cairo text-xs text-charcoal/50">
                      {t.legalHub.calcResult}
                    </span>
                    <p className="font-cairo text-sm text-charcoal/90 mt-1">
                      {calcType === "sharia"
                        ? t.legalHub.calcChildText
                        : t.legalHub.calcLaborText}
                    </p>
                    <span className="font-cairo font-black text-2xl text-burgundy mt-2">
                      {calcResult} {t.legalHub.jod}
                    </span>
                  </div>
                )}

                {/* Calculator Alert Disclaimer */}
                <div className="p-4 bg-charcoal/5 border-l-4 border-burgundy rounded text-charcoal/80 font-cairo text-xs leading-relaxed mt-4">
                  {t.common.warningCalculator}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
