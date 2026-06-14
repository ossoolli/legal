import { Locale, translations } from "@/data/translations";
import SectionDivider from "@/components/ui/SectionDivider";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default function CenterPage({ params }: PageProps) {
  const lang = params.lang || "ar";
  const t = translations[lang];

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream">
      {/* 1. Page Header / Founding Intro */}
      <section className="bg-burgundy text-cream py-24 relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10 text-center flex flex-col items-center">
          <span className="text-xs font-cairo font-bold text-roseGray tracking-widest uppercase mb-4 bg-white/10 px-3 py-1 rounded">
            {t.center.title}
          </span>
          <h1 className="text-4xl md:text-5xl font-cairo font-black text-white mb-6">
            {t.center.subtitle}
          </h1>
          <p className="text-base md:text-lg font-cairo font-light text-roseGray/90 leading-relaxed max-w-2xl">
            {t.center.intro}
          </p>
        </div>
      </section>

      {/* 2. Values Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
            <span className="text-xs font-cairo font-bold text-burgundy tracking-widest uppercase mb-3 block">
              {lang === "ar" ? "دستور عملنا" : "OUR PRINCIPLES"}
            </span>
            <h2 className="text-3xl md:text-4xl font-cairo font-black text-burgundy">
              {t.center.valuesTitle}
            </h2>
          </div>

          {/* Vertical Numbered Values */}
          <div className="flex flex-col gap-6">
            {t.center.values.map((val, idx) => (
              <div
                key={idx}
                className="bg-white border border-divider hover:border-burgundy/30 p-6 rounded shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between text-start gap-6 group transition-all duration-300"
              >
                <div className="flex items-center gap-6">
                  {/* Large Burgundy Number */}
                  <span className="font-cairo font-black text-3xl md:text-4xl text-burgundy/25 group-hover:text-burgundy transition-colors shrink-0">
                    {val.num}
                  </span>
                  <div className="flex flex-col">
                    <h3 className="font-cairo font-bold text-lg text-burgundy mb-1">
                      {val.title}
                    </h3>
                    <p className="font-cairo text-sm text-charcoal/70 leading-relaxed">
                      {val.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. Vision & Mission Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 text-start">
          {/* Mission Column */}
          <div className="bg-white border-t-[3px] border-burgundy p-8 rounded shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded bg-burgundy/5 text-burgundy flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h3 className="font-cairo font-bold text-2xl text-burgundy mb-4">
              {t.center.missionTitle}
            </h3>
            <p className="font-cairo text-base text-charcoal/80 leading-relaxed">
              {t.center.missionText}
            </p>
          </div>

          {/* Vision Column */}
          <div className="bg-white border-t-[3px] border-burgundy p-8 rounded shadow-sm hover:shadow-md transition-shadow">
            <div className="w-12 h-12 rounded bg-burgundy/5 text-burgundy flex items-center justify-center mb-6">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
              </svg>
            </div>
            <h3 className="font-cairo font-bold text-2xl text-burgundy mb-4">
              {t.center.visionTitle}
            </h3>
            <p className="font-cairo text-base text-charcoal/80 leading-relaxed">
              {t.center.visionText}
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. Timeline Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-4xl mx-auto px-6 text-start">
          <div className="text-center mb-16">
            <span className="text-xs font-cairo font-bold text-burgundy tracking-widest uppercase mb-3 block">
              {lang === "ar" ? "مسيرة التأسيس" : "OUR JOURNEY"}
            </span>
            <h2 className="text-3xl md:text-4xl font-cairo font-black text-burgundy">
              {t.center.timelineTitle}
            </h2>
          </div>

          {/* Timeline Nodes */}
          <div className="relative border-l-2 border-divider ml-4 rtl:mr-4 rtl:ml-0 rtl:border-r-2 rtl:border-l-0 pl-8 rtl:pr-8 rtl:pl-0 flex flex-col gap-12">
            {t.center.timeline.map((item, idx) => (
              <div key={idx} className="relative group">
                {/* Timeline Dot Indicator */}
                <div className="absolute top-1.5 -left-[39px] rtl:-right-[39px] w-4 h-4 rounded-full border-2 border-burgundy bg-cream group-hover:bg-burgundy transition-colors duration-300" />

                <span className="font-cairo font-black text-xl text-burgundy mb-1 block">
                  {item.year}
                </span>
                <h3 className="font-cairo font-bold text-lg text-charcoal mb-2">
                  {item.title}
                </h3>
                <p className="font-cairo text-sm text-charcoal/70 leading-relaxed">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
