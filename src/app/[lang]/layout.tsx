import type { Metadata } from "next";
import { Cairo, Playfair_Display, Libre_Baskerville } from "next/font/google";
import "../globals.css";
import { Locale, translations } from "@/data/translations";
import LenisProvider from "@/components/layout/LenisProvider";
import CustomCursor from "@/components/layout/CustomCursor";
import LoadingScreen from "@/components/layout/LoadingScreen";
import Navigation from "@/components/layout/Navigation";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";

// Load Google Fonts
const cairo = Cairo({
  subsets: ["arabic"],
  weight: ["300", "400", "600", "700", "900"],
  variable: "--font-cairo",
  display: "swap",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  weight: ["700"],
  variable: "--font-playfair",
  display: "swap",
});

const libre = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-libre",
  display: "swap",
});

// Dynamic SEO metadata based on language
export async function generateMetadata({
  params,
}: {
  params: { lang: Locale };
}): Promise<Metadata> {
  const lang = params.lang || "ar";
  const t = translations[lang] || translations.ar;

  return {
    title: {
      template: `%s | ${t.home.heroSubtitle}`,
      default: `${t.home.heroSubtitle} | ${t.ladyOfLaw.subtitle}`,
    },
    description: t.contact.subtitle,
    keywords:
      lang === "ar"
        ? [
            "محامية الزرقاء",
            "محامي الأردن",
            "استشارات قانونية",
            "قضايا شرعية",
            "المركز القانوني العربي",
            "ميسر المومني",
            "سيدة القانون",
          ]
        : [
            "Zarqa Lawyer",
            "Jordan Attorney",
            "Legal Advisor Jordan",
            "Sharia Law Jordan",
            "Arab Legal Center",
            "Myassar Al-Momani",
            "Lady of Law",
          ],
    metadataBase: new URL("https://mateenlegal.com"),
    alternates: {
      canonical: "/",
      languages: {
        ar: "/ar",
        en: "/en",
      },
    },
    openGraph: {
      title: `${t.home.heroSubtitle} | ${t.ladyOfLaw.subtitle}`,
      description: t.footer.tagline,
      url: "https://mateenlegal.com",
      siteName: t.home.heroSubtitle,
      locale: lang === "ar" ? "ar_JO" : "en_US",
      type: "website",
    },
  };
}

export default function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { lang: Locale };
}) {
  const lang = params.lang || "ar";
  const t = translations[lang] || translations.ar;

  return (
    <html
      lang={t.langCode}
      dir={t.dir}
      className={`${cairo.variable} ${playfair.variable} ${libre.variable} antialiased`}
    >
      <body className="font-cairo">
        <LoadingScreen />
        <CustomCursor />
        <LenisProvider>
          <Navigation lang={lang} />
          <main className="min-h-screen pt-24 md:pt-28 pb-16">{children}</main>
          <Footer lang={lang} />
          <WhatsAppButton lang={lang} />
        </LenisProvider>
      </body>
    </html>
  );
}
