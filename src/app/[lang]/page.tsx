import { Locale, translations } from "@/data/translations";
import Button from "@/components/ui/Button";
import Counter from "@/components/ui/Counter";
import ServiceCard from "@/components/ui/ServiceCard";
import ArticleCard from "@/components/ui/ArticleCard";
import SectionDivider from "@/components/ui/SectionDivider";
import FadeInUp from "@/components/animations/FadeInUp";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default function HomePage({ params }: PageProps) {
  const lang = params.lang || "ar";
  const t = translations[lang];

  // Resolve localized links helper
  const getLocalizedPath = (path: string) => {
    return `/${lang}${path === "/" ? "" : path}`;
  };

  // 4 services to preview on Home
  const homeServices = t.services.list.slice(0, 4);

  // 3 latest articles to preview
  const latestArticles = t.legalHub.articles.slice(0, 3);

  const isRtl = lang === "ar";

  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero Section */}
      <section className="bg-burgundy text-cream pt-12 pb-24 md:py-32 relative overflow-hidden">
        {/* Abstract pattern lines in the background */}
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 rounded-full border-[10px] border-cream" />
          <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full border-[10px] border-cream" />
        </div>

        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
          {/* Hero text content */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            <FadeInUp delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-cairo font-black text-white leading-tight mb-4 tracking-tight">
                {t.home.heroTitle}
              </h1>
            </FadeInUp>
            <FadeInUp delay={0.25}>
              <p className="text-lg md:text-xl font-cairo font-light text-roseGray mb-8 leading-relaxed max-w-2xl">
                {t.home.heroSubtitle}
              </p>
            </FadeInUp>
            <FadeInUp delay={0.4}>
              <Button
                href={getLocalizedPath("/contact")}
                variant="white-outline"
                className="px-8 py-3.5"
              >
                {t.home.heroCta}
              </Button>
            </FadeInUp>
          </div>

          {/* Hero Portrait Placeholder (Duotone styled container) */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end">
            <FadeInUp delay={0.3} y={50}>
              <div className="relative w-full max-w-[380px] aspect-[4/5] rounded border border-roseGray/20 bg-burgundy-hover/50 p-4 shadow-2xl flex flex-col justify-between items-center text-center overflow-hidden group">
                {/* Duotone styling mock overlays */}
                <div className="absolute inset-0 bg-gradient-to-t from-burgundy via-transparent to-transparent opacity-80 z-10" />

                <div className="w-full h-full border border-roseGray/10 rounded flex flex-col items-center justify-center p-6 relative z-20">
                  {/* Visual placeholder box */}
                  <div className="w-16 h-16 rounded-full border border-roseGray/20 flex items-center justify-center mb-4 text-roseGray">
                    <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  </div>
                  <h3 className="font-cairo font-bold text-base text-white mb-2">
                    [صورة المحامية ميسر المومني — Portrait احترافي]
                  </h3>
                  <p className="font-cairo text-xs text-roseGray">
                    الأبعاد الموصى بها: 480px × 600px
                  </p>
                </div>

                {/* Tag overlay */}
                <div className="absolute bottom-6 left-6 right-6 z-20 bg-charcoal/40 backdrop-blur-md py-2 px-3 rounded border border-white/10 flex items-center justify-center">
                  <span className="font-cairo text-xs font-bold text-cream tracking-wide">
                    {t.ladyOfLaw.subtitle}
                  </span>
                </div>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 2. Numbers & Trust Section */}
      <section className="bg-cream py-16 border-y border-divider">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <FadeInUp delay={0.1}>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-cairo font-black text-burgundy mb-2">
                <Counter target={15} suffix="+" />
              </span>
              <span className="font-cairo text-sm text-charcoal/80 font-semibold uppercase tracking-wider">
                {isRtl ? "سنة خبرة" : "Years Experience"}
              </span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.2}>
            <div className="flex flex-col items-center border-y md:border-y-0 md:border-x border-divider py-6 md:py-0">
              <span className="text-4xl md:text-5xl font-cairo font-black text-burgundy mb-2">
                <Counter target={500} suffix="+" />
              </span>
              <span className="font-cairo text-sm text-charcoal/80 font-semibold uppercase tracking-wider">
                {isRtl ? "قضية ناجحة" : "Successful Cases"}
              </span>
            </div>
          </FadeInUp>

          <FadeInUp delay={0.3}>
            <div className="flex flex-col items-center">
              <span className="text-4xl md:text-5xl font-cairo font-black text-burgundy mb-2">
                <Counter target={100} suffix="%" />
              </span>
              <span className="font-cairo text-sm text-charcoal/80 font-semibold uppercase tracking-wider">
                {isRtl ? "التزام بالحق" : "Commitment to Truth"}
              </span>
            </div>
          </FadeInUp>
        </div>
      </section>

      {/* 3. About Preview Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Description content */}
          <div className="lg:col-span-7 flex flex-col items-start text-start">
            <FadeInUp>
              <span className="text-xs font-cairo font-bold text-burgundy tracking-widest uppercase mb-3 bg-burgundy/5 px-3 py-1 rounded">
                {lang === "ar" ? "تعريف بالمركز" : "ABOUT THE CENTER"}
              </span>
              <h2 className="text-3xl md:text-4xl font-cairo font-black text-burgundy mb-6 leading-tight">
                {t.home.aboutPreview.title}
              </h2>
              <p className="font-cairo text-base text-charcoal/80 leading-relaxed mb-8">
                {t.home.aboutPreview.description}
              </p>
              <Button href={getLocalizedPath("/center")} variant="outline">
                {t.home.aboutPreview.cta}
              </Button>
            </FadeInUp>
          </div>

          {/* Office Image Placeholder */}
          <div className="lg:col-span-5">
            <FadeInUp delay={0.2}>
              <div className="relative w-full aspect-[4/3] rounded border border-divider bg-white p-4 shadow-md flex flex-col items-center justify-center text-center group">
                <div className="w-14 h-14 rounded-full border border-divider flex items-center justify-center mb-4 text-charcoal/30">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <h3 className="font-cairo font-bold text-sm text-charcoal mb-2">
                  [صورة المكتب — Interior Photo]
                </h3>
                <p className="font-cairo text-xs text-charcoal/50">
                  الأبعاد الموصى بها: 700px × 500px
                </p>
              </div>
            </FadeInUp>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* 4. Services Preview Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-start mb-16 text-start">
            <FadeInUp>
              <span className="text-xs font-cairo font-bold text-burgundy tracking-widest uppercase mb-3 bg-burgundy/5 px-3 py-1 rounded">
                {lang === "ar" ? "تخصصاتنا" : "OUR PRACTICE AREAS"}
              </span>
              <h2 className="text-3xl md:text-4xl font-cairo font-black text-burgundy">
                {t.home.servicesPreview.title}
              </h2>
            </FadeInUp>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {homeServices.map((service, idx) => (
              <FadeInUp key={service.id} delay={idx * 0.1}>
                <ServiceCard
                  title={service.title}
                  desc={service.desc}
                  href={getLocalizedPath(`/services#${service.id}`)}
                  items={service.items}
                  ctaLabel={isRtl ? "احجز استشارة" : "Book Consultation"}
                />
              </FadeInUp>
            ))}
          </div>

          {/* View All CTA */}
          <div className="flex justify-center mt-12">
            <FadeInUp>
              <Button href={getLocalizedPath("/services")} variant="outline">
                {t.home.servicesPreview.cta}
              </Button>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 5. Lady of Law Teaser Section */}
      <section className="bg-burgundy text-cream py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none">
          <div className="absolute top-1/2 left-10 w-72 h-72 rounded-full border-[6px] border-cream" />
        </div>

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
          <FadeInUp>
            <span className="text-xs font-cairo font-bold text-roseGray tracking-widest uppercase mb-4">
              {t.home.ladyOfLawTeaser.title}
            </span>
            <h2 className="text-3xl md:text-4xl font-cairo font-black text-white mb-2">
              {t.home.ladyOfLawTeaser.subtitle}
            </h2>
            <span className="w-12 h-[1px] bg-roseGray/30 my-6 inline-block" />

            {/* Slogan Quote */}
            <blockquote className="text-2xl md:text-3xl font-cairo font-semibold text-cream leading-relaxed italic mb-8 max-w-2xl">
              " {t.home.ladyOfLawTeaser.quote} "
            </blockquote>

            <p className="font-cairo text-sm text-roseGray leading-relaxed max-w-xl mb-10 mx-auto">
              {t.home.ladyOfLawTeaser.description}
            </p>

            <Button
              href={getLocalizedPath("/lady-of-law")}
              variant="white-outline"
            >
              {t.home.ladyOfLawTeaser.cta}
            </Button>
          </FadeInUp>
        </div>
      </section>

      {/* 6. Latest Articles Section */}
      <section className="py-24 bg-cream">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col items-start mb-16 text-start">
            <FadeInUp>
              <span className="text-xs font-cairo font-bold text-burgundy tracking-widest uppercase mb-3 bg-burgundy/5 px-3 py-1 rounded">
                {lang === "ar" ? "المجلة القانونية" : "LEGAL ARTICLES"}
              </span>
              <h2 className="text-3xl md:text-4xl font-cairo font-black text-burgundy">
                {t.home.articlesPreview.title}
              </h2>
            </FadeInUp>
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {latestArticles.map((article, idx) => (
              <FadeInUp key={article.id} delay={idx * 0.1}>
                <ArticleCard
                  id={article.id}
                  category={article.category}
                  title={article.title}
                  readTime={article.readTime}
                  date={article.date}
                  excerpt={article.excerpt}
                  href={getLocalizedPath("/legal-hub")}
                  lang={lang}
                />
              </FadeInUp>
            ))}
          </div>

          {/* Legal Hub Link CTA */}
          <div className="flex justify-center mt-12">
            <FadeInUp>
              <Button href={getLocalizedPath("/legal-hub")} variant="outline">
                {t.home.articlesPreview.cta}
              </Button>
            </FadeInUp>
          </div>
        </div>
      </section>

      {/* 7. Quick Contact Section */}
      <section className="bg-charcoal text-cream py-20 border-t border-burgundy/20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeInUp>
            <h2 className="text-3xl md:text-4xl font-cairo font-black text-white mb-3">
              {t.home.quickContact.title}
            </h2>
            <p className="font-cairo text-sm text-cream/60 leading-relaxed mb-10 max-w-md mx-auto">
              {t.home.quickContact.subtitle}
            </p>
          </FadeInUp>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
            {/* Phone option */}
            <FadeInUp delay={0.1} className="w-full">
              <a
                href={`tel:${t.footer.phone.replace(/\s+/g, "")}`}
                className="p-6 rounded border border-cream/10 hover:border-burgundy bg-charcoal hover:bg-burgundy/5 transition-all flex flex-col items-center gap-3 cursor-pointer group w-full"
              >
                <div className="w-11 h-11 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <span className="font-cairo text-xs text-cream/50">
                  {t.home.quickContact.phoneLabel}
                </span>
                <span className="font-cairo font-bold text-sm text-white">
                  {t.footer.phone}
                </span>
              </a>
            </FadeInUp>

            {/* WhatsApp option */}
            <FadeInUp delay={0.2} className="w-full">
              <a
                href={`https://wa.me/962772443804?text=${encodeURIComponent(t.common.whatsappMsg)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-6 rounded border border-cream/10 hover:border-burgundy bg-charcoal hover:bg-burgundy/5 transition-all flex flex-col items-center gap-3 cursor-pointer group w-full"
              >
                <div className="w-11 h-11 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-colors">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 5.361 1.504 5.433 0 9.85-4.407 9.853-9.83.002-2.628-1.017-5.097-2.872-6.953C17.078 2.02 14.62 1 12.002 1 6.569 1 2.151 5.409 2.148 10.83c-.001 2.187.569 3.847 1.639 5.534l-.993 3.628 3.863-.998z" />
                  </svg>
                </div>
                <span className="font-cairo text-xs text-cream/50">
                  {t.home.quickContact.whatsappLabel}
                </span>
                <span className="font-cairo font-bold text-sm text-white">
                  +962 7 7244 3804
                </span>
              </a>
            </FadeInUp>

            {/* Email option */}
            <FadeInUp delay={0.3} className="w-full">
              <a
                href={`mailto:${t.footer.email}`}
                className="p-6 rounded border border-cream/10 hover:border-burgundy bg-charcoal hover:bg-burgundy/5 transition-all flex flex-col items-center gap-3 cursor-pointer group w-full"
              >
                <div className="w-11 h-11 rounded-full bg-burgundy/10 text-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <span className="font-cairo text-xs text-cream/50">
                  {t.home.quickContact.emailLabel}
                </span>
                <span className="font-cairo font-bold text-sm text-white truncate max-w-full">
                  {t.footer.email}
                </span>
              </a>
            </FadeInUp>
          </div>
        </div>
      </section>
    </div>
  );
}
