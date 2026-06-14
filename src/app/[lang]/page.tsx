import { Locale, translations } from "@/data/translations";
import SectionDivider from "@/components/ui/SectionDivider";

export default function TempPage({ params }: { params: { lang: Locale } }) {
  const lang = params.lang || "ar";
  const t = translations[lang];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 flex flex-col items-center justify-center min-h-[60vh] text-center">
      <h1 className="text-h1 text-burgundy font-cairo font-black mb-6">
        {t.home.heroTitle}
      </h1>
      <p className="text-h3 text-charcoal font-cairo font-semibold max-w-2xl leading-relaxed mb-8">
        {t.home.heroSubtitle}
      </p>
      <SectionDivider />
      <div className="w-full max-w-sm mt-8 border border-burgundy/20 bg-white p-6 rounded shadow-sm">
        <h3 className="font-cairo font-bold text-burgundy text-lg mb-3">
          {lang === "ar" ? "جاهزية المرحلة الأولى" : "Phase 1 Complete"}
        </h3>
        <p className="font-cairo text-sm text-charcoal/70">
          {lang === "ar"
            ? "تم إعداد البنية التحتية، لوحة الألوان، الخطوط، النافيجيشن التفاعلي، الفوتر، الزر العائم والـ Cursor."
            : "Scaffolding, color palette, typography, interactive navigation, footer, floating elements and cursor are configured."}
        </p>
      </div>
    </div>
  );
}
