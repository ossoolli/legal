import Link from "next/link";

interface ArticleCardProps {
  id: string;
  category: string;
  title: string;
  readTime: string;
  date: string;
  excerpt: string;
  href: string;
  lang: string;
}

export default function ArticleCard({
  category,
  title,
  readTime,
  date,
  excerpt,
  href,
  lang,
}: ArticleCardProps) {
  return (
    <div className="bg-white border border-divider p-6 rounded flex flex-col justify-between hover:shadow-md transition-shadow group h-full">
      <div>
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-cairo font-bold text-burgundy bg-burgundy/5 px-2.5 py-1 rounded">
            {category}
          </span>
          <span className="text-[11px] font-cairo text-charcoal/50">
            {date}
          </span>
        </div>

        <h3 className="font-cairo font-bold text-lg text-charcoal mb-2 leading-snug group-hover:text-burgundy transition-colors line-clamp-2">
          {title}
        </h3>

        <p className="font-cairo text-sm text-charcoal/70 leading-relaxed mb-6 line-clamp-3">
          {excerpt}
        </p>
      </div>

      <div className="flex items-center justify-between border-t border-divider pt-4 mt-auto">
        <span className="text-xs font-cairo text-charcoal/40">
          {readTime}
        </span>

        <Link
          href={href}
          className="font-cairo font-bold text-xs text-burgundy hover:text-burgundy-hover transition-colors flex items-center gap-1 group-hover:translate-x-0.5 duration-200 rtl:group-hover:-translate-x-0.5"
        >
          <span>{lang === "ar" ? "اقرأ المقال" : "Read Article"}</span>
          <svg
            className="w-3.5 h-3.5 rtl:rotate-180"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2.5"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
