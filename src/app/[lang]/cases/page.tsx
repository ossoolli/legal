import { Metadata } from "next";
import { Locale, translations } from "@/data/translations";
import CasesClient from "./CasesClient";

interface PageProps {
  params: {
    lang: Locale;
  };
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const lang = params.lang || "ar";
  const t = translations[lang] || translations.ar;

  return {
    title: lang === "ar" ? "سجل نجاحاتنا - سابقة قضائية وقضايا ريادية" : "Our Case Portfolio - Arab Legal Center",
    description: t.cases.subtitle || t.contact.subtitle,
    alternates: {
      canonical: `/${lang}/cases/`,
    },
  };
}

export default function CasesPage({ params }: PageProps) {
  return <CasesClient params={params} />;
}
