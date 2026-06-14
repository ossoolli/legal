import { Metadata } from "next";
import { Locale, translations } from "@/data/translations";
import LegalHubClient from "./LegalHubClient";

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
    title: lang === "ar" ? "المكتبة القانونية والحاسبة التفاعلية" : "Legal Hub & Alimony / Indemnity Calculator",
    description: t.legalHub.subtitle || t.contact.subtitle,
    alternates: {
      canonical: `/${lang}/legal-hub/`,
    },
  };
}

export default function LegalHubPage({ params }: PageProps) {
  return <LegalHubClient params={params} />;
}
