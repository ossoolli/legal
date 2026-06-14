import { Locale, translations } from "@/data/translations";
import Button from "@/components/ui/Button";
import SectionDivider from "@/components/ui/SectionDivider";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default function ServicesPage({ params }: PageProps) {
  const lang = params.lang || "ar";
  const t = translations[lang];

  const getLocalizedPath = (path: string) => {
    return `/${lang}${path === "/" ? "" : path}`;
  };

  return (
    <div className="flex flex-col w-full">
      {/* Page Header */}
      <section className="bg-burgundy text-cream py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-cairo font-black text-white mb-4">
            {t.services.title}
          </h1>
          <p className="text-lg font-cairo font-light text-roseGray max-w-xl mx-auto">
            {t.services.subtitle}
          </p>
        </div>
      </section>

      {/* Services List Alternating Sections */}
      <div className="flex flex-col w-full bg-cream">
        {t.services.list.map((service, index) => {
          const isEven = index % 2 === 0;
          return (
            <div key={service.id}>
              <section
                id={service.id}
                className={`py-24 ${
                  isEven ? "bg-cream" : "bg-white/40"
                } scroll-mt-20`}
              >
                <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
                  {/* Visual placeholder box */}
                  <div
                    className={`lg:col-span-5 ${
                      isEven ? "order-2 lg:order-1" : "order-2 lg:order-2"
                    }`}
                  >
                    <div className="w-full aspect-[4/3] rounded border border-divider bg-white p-6 shadow-sm flex flex-col items-center justify-center text-center">
                      <div className="w-16 h-16 rounded-full bg-burgundy/5 text-burgundy flex items-center justify-center mb-4">
                        {service.id === "sharia" ? (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                          </svg>
                        ) : service.id === "civil" ? (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                          </svg>
                        ) : service.id === "labor" ? (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                          </svg>
                        ) : service.id === "consulting" ? (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                          </svg>
                        ) : (
                          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                          </svg>
                        )}
                      </div>
                      <h3 className="font-cairo font-bold text-sm text-charcoal mb-2">
                        [رمز تصويري هندسي لتخصص: {service.title}]
                      </h3>
                      <p className="font-cairo text-xs text-charcoal/50">
                        {lang === "ar" ? "أيقونة تجريدية فاخرة" : "Premium abstract icon representation"}
                      </p>
                    </div>
                  </div>

                  {/* Content details */}
                  <div
                    className={`lg:col-span-7 flex flex-col items-start text-start ${
                      isEven ? "order-1 lg:order-2" : "order-1 lg:order-1"
                    }`}
                  >
                    <span className="text-xs font-cairo font-bold text-burgundy tracking-widest uppercase mb-3 bg-burgundy/5 px-3 py-1 rounded">
                      {service.title}
                    </span>
                    <h2 className="text-3xl font-cairo font-black text-burgundy mb-4">
                      {service.title}
                    </h2>
                    <p className="font-cairo text-base text-charcoal/80 leading-relaxed mb-6">
                      {service.desc}
                    </p>

                    {/* Detailed sub-list */}
                    <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                      {service.items.map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-start gap-3 p-3.5 bg-white/60 border border-divider rounded"
                        >
                          <span className="w-2 h-2 rounded-full bg-burgundy mt-2 shrink-0" />
                          <span className="font-cairo text-sm text-charcoal/90">
                            {item}
                          </span>
                        </div>
                      ))}
                    </div>

                    <Button href={getLocalizedPath("/contact")}>
                      {t.services.cta}
                    </Button>
                  </div>
                </div>
              </section>
              {index < t.services.list.length - 1 && <SectionDivider />}
            </div>
          );
        })}
      </div>
    </div>
  );
}
