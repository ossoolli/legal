import Link from "next/link";
import { Locale, translations } from "@/data/translations";

interface FooterProps {
  lang: Locale;
}

export default function Footer({ lang }: FooterProps) {
  const t = translations[lang];

  const getLocalizedPath = (path: string) => {
    if (lang === "ar") return path;
    return `/en${path === "/" ? "" : path}`;
  };

  return (
    <footer className="bg-charcoal text-cream pt-16 pb-8 border-t border-burgundy/20">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Slogan & Socials */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded bg-burgundy flex items-center justify-center text-cream font-cairo font-black text-xl">
              م
            </div>
            <div className="flex flex-col">
              <span className="font-cairo font-bold text-sm leading-tight text-white">
                المركز القانوني العربي
              </span>
              <span className="font-playfair text-[9px] tracking-wider text-cream/50 uppercase">
                Arab Legal Center
              </span>
            </div>
          </div>
          <p className="font-cairo text-sm text-cream/70 leading-relaxed max-w-[280px]">
            {t.footer.tagline}
          </p>

          {/* Social Links Placeholder */}
          <div className="flex items-center gap-4 mt-2">
            {/* FB */}
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-burgundy hover:bg-burgundy-hover flex items-center justify-center text-white transition-colors"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M9 8H7v3h2v9h3v-9h3l.5-3H12V6c0-.88.39-1 1-1h2V2h-3c-2.9 0-5 1.55-5 4.5V8z" />
              </svg>
            </a>
            {/* LinkedIn */}
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-burgundy hover:bg-burgundy-hover flex items-center justify-center text-white transition-colors"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.779-1.75-1.75s.784-1.75 1.75-1.75 1.75.779 1.75 1.75-.784 1.75-1.75 1.75zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
              </svg>
            </a>
            {/* TikTok */}
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded bg-burgundy hover:bg-burgundy-hover flex items-center justify-center text-white transition-colors"
              aria-label="TikTok"
            >
              <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.17-2.86-.74-3.94-1.74-.22-.2-.42-.43-.61-.67-.02 3.19-.01 6.38-.02 9.57-.02 1.84-.54 3.7-1.72 5.09-1.25 1.49-3.2 2.34-5.16 2.38-2.12.06-4.29-.76-5.69-2.35-1.47-1.63-2.03-4.01-1.42-6.13.51-1.89 1.93-3.49 3.79-4.17.02.13.04.25.05.38.33.85.93 1.58 1.67 2.11-.7.42-1.22 1.1-1.43 1.88-.35 1.15-.09 2.47.66 3.42.75.98 1.98 1.5 3.2 1.42 1.16-.06 2.27-.67 2.87-1.66.52-.85.66-1.89.65-2.87-.02-4.9-.01-9.79-.02-14.69z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Column 2: Quick Links */}
        <div className="flex flex-col gap-4">
          <h3 className="font-cairo font-bold text-base text-white tracking-wide">
            {t.footer.quickLinks}
          </h3>
          <div className="flex flex-col gap-2.5">
            <Link
              href={getLocalizedPath("/")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.nav.home}
            </Link>
            <Link
              href={getLocalizedPath("/center")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.nav.center}
            </Link>
            <Link
              href={getLocalizedPath("/lady-of-law")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.nav.ladyOfLaw}
            </Link>
            <Link
              href={getLocalizedPath("/services")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.nav.services}
            </Link>
            <Link
              href={getLocalizedPath("/cases")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.nav.cases}
            </Link>
            <Link
              href={getLocalizedPath("/legal-hub")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.nav.legalHub}
            </Link>
            <Link
              href={getLocalizedPath("/contact")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.nav.contact}
            </Link>
          </div>
        </div>

        {/* Column 3: Services */}
        <div className="flex flex-col gap-4">
          <h3 className="font-cairo font-bold text-base text-white tracking-wide">
            {t.footer.ourServices}
          </h3>
          <div className="flex flex-col gap-2.5">
            <Link
              href={getLocalizedPath("/services#sharia")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.services.list[0].title}
            </Link>
            <Link
              href={getLocalizedPath("/services#civil")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.services.list[1].title}
            </Link>
            <Link
              href={getLocalizedPath("/services#labor")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.services.list[2].title}
            </Link>
            <Link
              href={getLocalizedPath("/services#consulting")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.services.list[3].title}
            </Link>
            <Link
              href={getLocalizedPath("/services#drafting")}
              className="font-cairo text-sm text-cream/70 hover:text-white transition-colors focus:outline-none"
            >
              {t.services.list[4].title}
            </Link>
          </div>
        </div>

        {/* Column 4: Contact Info */}
        <div className="flex flex-col gap-4">
          <h3 className="font-cairo font-bold text-base text-white tracking-wide">
            {t.footer.contactInfo}
          </h3>
          <div className="flex flex-col gap-3 font-cairo text-sm text-cream/70">
            <div className="flex items-start gap-2.5">
              <svg className="w-4 h-4 text-burgundy mt-1 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>{t.footer.address}</span>
            </div>
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-burgundy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <a href={`tel:${t.footer.phone.replace(/\s+/g, "")}`} className="hover:text-white transition-colors">
                {t.footer.phone}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <svg className="w-4 h-4 text-burgundy shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <a href={`mailto:${t.footer.email}`} className="hover:text-white transition-colors">
                {t.footer.email}
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Signature Bottom Line */}
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-cream/10 text-center">
        <p className="font-cairo text-xs text-cream/45">{t.common.copyright}</p>
      </div>
    </footer>
  );
}
