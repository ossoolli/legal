import { Locale, translations } from "@/data/translations";
import Button from "@/components/ui/Button";
import SectionDivider from "@/components/ui/SectionDivider";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default function LadyOfLawPage({ params }: PageProps) {
  const lang = params.lang || "ar";
  const t = translations[lang];

  const getLocalizedPath = (path: string) => {
    if (lang === "ar") return path;
    return `/en${path === "/" ? "" : path}`;
  };

  const isRtl = lang === "ar";

  return (
    <div className="flex flex-col w-full">
      {/* 1. Personal Hero Section */}
      <section className="relative h-[80vh] min-h-[500px] flex items-center justify-center bg-charcoal text-cream overflow-hidden">
        {/* Placeholder background image with 60% overlay */}
        <div className="absolute inset-0 bg-burgundy-hover/30 z-0" />
        <div className="absolute inset-0 bg-burgundy/60 mix-blend-multiply z-10" />

        {/* Outer frame of placeholder description */}
        <div className="absolute inset-0 flex items-center justify-center z-0 opacity-10">
          <span className="font-cairo text-2xl md:text-4xl text-cream font-bold">
            [صورة المحامية بالحجم الكامل — Landscape Portrait / Background]
          </span>
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-20 flex flex-col items-center">
          <span className="text-xs font-cairo font-bold text-roseGray tracking-widest uppercase mb-4 bg-white/10 px-3 py-1 rounded">
            {t.ladyOfLaw.bioHero}
          </span>
          <h1 className="text-4xl md:text-6xl font-cairo font-black text-white mb-3 tracking-tight">
            {t.ladyOfLaw.subtitle}
          </h1>
          <p className="text-xl md:text-2xl font-cairo font-semibold text-roseGray/90 tracking-wide mt-2">
            {t.ladyOfLaw.title}
          </p>
        </div>
      </section>

      {/* 2. Personal Story Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Portrait image placeholder */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative w-full aspect-square rounded border border-divider bg-white p-4 shadow-md flex flex-col items-center justify-center text-center">
              <div className="w-14 h-14 rounded-full border border-divider flex items-center justify-center mb-4 text-charcoal/30">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                </svg>
              </div>
              <h3 className="font-cairo font-bold text-sm text-charcoal mb-2">
                [صورة رسمية للمكتب واللقاءات الشخصية]
              </h3>
              <p className="font-cairo text-xs text-charcoal/50">
                الأبعاد الموصى بها: 600px × 600px
              </p>
            </div>
          </div>

          {/* First person story content */}
          <div className="lg:col-span-7 flex flex-col items-start text-start order-1 lg:order-2">
            <span className="text-xs font-cairo font-bold text-burgundy tracking-widest uppercase mb-3 bg-burgundy/5 px-3 py-1 rounded">
              {t.ladyOfLaw.storyTitle}
            </span>
            <h2 className="text-3xl md:text-4xl font-cairo font-black text-burgundy mb-8">
              {t.ladyOfLaw.storyTitle}
            </h2>
            <div className="flex flex-col gap-6 text-charcoal/80">
              {t.ladyOfLaw.story.map((paragraph, idx) => (
                <p key={idx} className="font-cairo text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 3. Specializations Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-start mb-16 text-start">
            <span className="text-xs font-cairo font-bold text-burgundy tracking-widest uppercase mb-3 bg-burgundy/5 px-3 py-1 rounded">
              {lang === "ar" ? "الخبرات القضائية" : "AREAS OF PRACTICE"}
            </span>
            <h2 className="text-3xl md:text-4xl font-cairo font-black text-burgundy">
              {t.ladyOfLaw.specializationTitle}
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {t.ladyOfLaw.specs.map((spec, idx) => (
              <div
                key={idx}
                className="bg-white border-t-[3px] border-burgundy p-8 rounded shadow-sm hover:shadow-md transition-shadow flex flex-col items-start text-start"
              >
                <div className="w-12 h-12 rounded bg-burgundy/5 text-burgundy flex items-center justify-center mb-6">
                  {idx === 0 ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  ) : idx === 1 ? (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  ) : (
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  )}
                </div>
                <h3 className="font-cairo font-bold text-xl text-burgundy mb-3">
                  {spec.title}
                </h3>
                <p className="font-cairo text-sm text-charcoal/80 leading-relaxed">
                  {spec.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Philosophy Quote Section */}
      <section className="bg-cream py-20 border-y border-divider">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <span className="text-xs font-cairo font-bold text-burgundy tracking-widest uppercase mb-4 block">
            {t.ladyOfLaw.philosophyTitle}
          </span>
          <blockquote className="text-3xl md:text-4xl font-cairo font-black text-burgundy leading-relaxed italic">
            " {t.ladyOfLaw.philosophyQuote} "
          </blockquote>
        </div>
      </section>

      {/* 5. Media Appearances Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-start mb-16 text-start">
            <span className="text-xs font-cairo font-bold text-burgundy tracking-widest uppercase mb-3 bg-burgundy/5 px-3 py-1 rounded">
              {lang === "ar" ? "مشاركات قانونية" : "MEDIA & CONTRIBUTIONS"}
            </span>
            <h2 className="text-3xl md:text-4xl font-cairo font-black text-burgundy mb-4">
              {t.ladyOfLaw.mediaTitle}
            </h2>
            <p className="font-cairo text-sm text-charcoal/70 max-w-xl">
              {t.ladyOfLaw.mediaText}
            </p>
          </div>

          {/* Media grid (Placeholders) */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((num) => (
              <div
                key={num}
                className="bg-white border border-divider rounded overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col"
              >
                {/* Media Image Thumbnail placeholder */}
                <div className="w-full aspect-video bg-burgundy/10 flex flex-col items-center justify-center text-center p-4 border-b border-divider">
                  <div className="w-10 h-10 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center mb-2">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <span className="font-cairo text-xs text-charcoal/60">
                    [صورة مصغرة للفيديو / التغطية {num}]
                  </span>
                </div>
                <div className="p-5 flex-1 flex flex-col justify-between items-start text-start">
                  <h3 className="font-cairo font-bold text-base text-charcoal mb-2 line-clamp-2">
                    {isRtl
                      ? `ندوة التوعية بالقضايا الشرعية وقانون الأحوال الشخصية - الجزء ${num}`
                      : `Awareness Seminar on Personal Status and Family Law - Part ${num}`}
                  </h3>
                  <span className="text-xs font-cairo text-charcoal/40 mt-4">
                    {isRtl ? "مؤسسة التدريب القانوني" : "Legal Training Foundation"}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Call to Action (CTA) Section */}
      <section className="bg-burgundy text-cream py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full border-[10px] border-cream" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <h2 className="text-3xl md:text-4xl font-cairo font-black text-white mb-6">
            {t.ladyOfLaw.cta}
          </h2>
          <span className="w-12 h-[1px] bg-roseGray/30 mb-8" />
          <Button
            href={getLocalizedPath("/contact")}
            variant="white-outline"
            className="px-8 py-3.5"
          >
            {t.nav.cta}
          </Button>
        </div>
      </section>
    </div>
  );
}
