import { Metadata } from "next";
import { Locale, translations } from "@/data/translations";
import ContactClient from "./ContactClient";

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
    title: lang === "ar" ? "تواصل معنا - استشارات قانونية فورية" : "Contact Us - Arab Legal Center",
    description: t.contact.subtitle,
    alternates: {
      canonical: `/${lang}/contact/`,
    },
  };
}

export default function ContactPage({ params }: PageProps) {
  return <ContactClient params={params} />;
}
