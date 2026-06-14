"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import { Locale, translations } from "@/data/translations";

// Dynamically import map component with no SSR to support Leaflet client execution
const Map = dynamic(() => import("@/components/ui/Map"), {
  ssr: false,
  loading: () => (
    <div className="w-full h-[350px] bg-charcoal/5 rounded flex items-center justify-center font-cairo text-sm text-charcoal/50 animate-pulse">
      جاري تحميل الخريطة التفاعلية...
    </div>
  ),
});

interface PageProps {
  params: {
    lang: Locale;
  };
}

export default function ContactClient({ params }: PageProps) {
  const lang = params.lang || "ar";
  const t = translations[lang];

  // Form states
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [caseType, setCaseType] = useState("");
  const [message, setMessage] = useState("");

  // Error/Success status
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [success, setSuccess] = useState(false);

  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};

    // Validate name (min 3 chars)
    if (!name || name.trim().length < 3) {
      tempErrors.name = t.contact.errName;
    }

    // Validate phone (Jordanian format: starting with 07 and having exactly 10 digits)
    const jordanianPhoneRegex = /^07[789]\d{7}$|^07\d{8}$/;
    if (!phone || !jordanianPhoneRegex.test(phone.trim())) {
      tempErrors.phone = t.contact.errPhone;
    }

    // Validate Case Type selection
    if (!caseType) {
      tempErrors.caseType = t.contact.errCaseType;
    }

    // Validate message length (min 10 chars)
    if (!message || message.trim().length < 10) {
      tempErrors.message = t.contact.errMessage;
    }

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      setSuccess(true);
      // Clear inputs
      setName("");
      setPhone("");
      setCaseType("");
      setMessage("");
      setErrors({});
      // Dismiss success msg after 5s
      setTimeout(() => setSuccess(false), 5000);
    }
  };

  const isRtl = lang === "ar";

  return (
    <div className="flex flex-col w-full min-h-screen bg-cream">
      {/* Header */}
      <section className="bg-burgundy text-cream py-20 text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-6 relative z-10">
          <h1 className="text-4xl md:text-5xl font-cairo font-black text-white mb-4">
            {t.contact.title}
          </h1>
          <p className="text-base md:text-lg font-cairo font-light text-roseGray max-w-xl mx-auto leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>
      </section>

      {/* Contact Content Split Section */}
      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          {/* Right Column: Direct Channels & Map */}
          <div className="lg:col-span-6 flex flex-col gap-10 order-2 lg:order-1">
            <div className="text-start">
              <h2 className="text-3xl font-cairo font-black text-burgundy mb-6">
                {t.contact.titleForm}
              </h2>

              <div className="flex flex-col gap-4">
                {/* Phone Link */}
                <a
                  href={`tel:${t.footer.phone.replace(/\s+/g, "")}`}
                  className="flex items-center justify-between p-5 bg-white border border-divider rounded hover:border-burgundy hover:shadow-sm transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-burgundy/5 text-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.94.725l.548 2.2a1 1 0 01-.321.988l-1.305.98a10.582 10.582 0 004.872 4.872l.98-1.305a1 1 0 01.988-.321l2.2.548a1 1 0 01.725.94V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-cairo font-bold text-sm text-charcoal">
                        {t.contact.methods.phone}
                      </span>
                      <span className="font-cairo text-xs text-charcoal/50 mt-0.5">
                        {isRtl ? "مكالمة هاتفية مباشرة" : "Direct phone call"}
                      </span>
                    </div>
                  </div>
                  <span className="font-cairo font-black text-sm text-burgundy">
                    {t.footer.phone}
                  </span>
                </a>

                {/* WhatsApp Link */}
                <a
                  href={`https://wa.me/962772443804?text=${encodeURIComponent(t.common.whatsappMsg)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-5 bg-white border border-divider rounded hover:border-burgundy hover:shadow-sm transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-burgundy/5 text-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-colors">
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.514 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.73-1.455L0 24zm6.59-4.846c1.66.986 3.292 1.503 5.361 1.504 5.433 0 9.85-4.407 9.853-9.83.002-2.628-1.017-5.097-2.872-6.953C17.078 2.02 14.62 1 12.002 1 6.569 1 2.151 5.409 2.148 10.83c-.001 2.187.569 3.847 1.639 5.534l-.993 3.628 3.863-.998z" />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-cairo font-bold text-sm text-charcoal">
                        {t.contact.methods.whatsapp}
                      </span>
                      <span className="font-cairo text-xs text-charcoal/50 mt-0.5">
                        {isRtl ? "محادثة فورية وسريعة" : "Instant chat support"}
                      </span>
                    </div>
                  </div>
                  <span className="font-cairo font-black text-sm text-burgundy">
                    +962 7 7244 3804
                  </span>
                </a>

                {/* Email Link */}
                <a
                  href={`mailto:${t.footer.email}`}
                  className="flex items-center justify-between p-5 bg-white border border-divider rounded hover:border-burgundy hover:shadow-sm transition-all group cursor-pointer"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-burgundy/5 text-burgundy flex items-center justify-center group-hover:bg-burgundy group-hover:text-white transition-colors">
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div className="flex flex-col items-start">
                      <span className="font-cairo font-bold text-sm text-charcoal">
                        {t.contact.methods.email}
                      </span>
                      <span className="font-cairo text-xs text-charcoal/50 mt-0.5">
                        {isRtl ? "مراسلة بريدية رسمية" : "Official email correspondence"}
                      </span>
                    </div>
                  </div>
                  <span className="font-cairo font-black text-sm text-burgundy truncate max-w-[180px] md:max-w-none">
                    {t.footer.email}
                  </span>
                </a>
              </div>
            </div>

            {/* Interactive Leaflet Map container */}
            <div className="flex flex-col gap-4 text-start">
              <span className="font-cairo font-bold text-xs text-charcoal/50">
                📍 {t.contact.methods.office} — {t.footer.address}
              </span>
              <div className="w-full h-[350px] border border-divider rounded overflow-hidden shadow relative z-10">
                <Map />
              </div>
              <div className="flex flex-col md:flex-row justify-between text-xs font-cairo text-charcoal/60 gap-2">
                <span>{t.contact.officeHoursTitle}</span>
                <span>{t.contact.officeHours}</span>
                <span className="font-semibold text-burgundy">
                  {t.contact.officeHoursClosed}
                </span>
              </div>
            </div>
          </div>

          {/* Left Column: Form submissions */}
          <div className="lg:col-span-6 bg-white border border-divider p-8 rounded shadow-md order-1 lg:order-2">
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 text-start">
              {/* Success Notification */}
              {success && (
                <div className="p-4 bg-burgundy/5 border border-burgundy/20 rounded text-burgundy font-cairo font-bold text-sm leading-relaxed mb-4 text-center">
                  {t.contact.successMsg}
                </div>
              )}

              {/* Input Name */}
              <div className="flex flex-col gap-1.5">
                <label className="font-cairo font-bold text-xs text-charcoal/70">
                  {t.contact.formName}
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className={`p-3 border rounded font-cairo text-sm text-charcoal focus:outline-none focus:border-burgundy ${
                    errors.name ? "border-burgundy bg-burgundy/5" : "border-divider bg-cream/10"
                  }`}
                  placeholder={isRtl ? "مثال: ميسر المومني" : "e.g. Myassar Al-Momani"}
                />
                {errors.name && (
                  <span className="text-[11px] font-cairo font-semibold text-burgundy mt-1">
                    {errors.name}
                  </span>
                )}
              </div>

              {/* Input Phone */}
              <div className="flex flex-col gap-1.5">
                <label className="font-cairo font-bold text-xs text-charcoal/70">
                  {t.contact.formPhone}
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className={`p-3 border rounded font-cairo text-sm text-charcoal focus:outline-none focus:border-burgundy ${
                    errors.phone ? "border-burgundy bg-burgundy/5" : "border-divider bg-cream/10"
                  }`}
                  placeholder="07xxxxxxxx"
                />
                {errors.phone && (
                  <span className="text-[11px] font-cairo font-semibold text-burgundy mt-1">
                    {errors.phone}
                  </span>
                )}
              </div>

              {/* Input Case Type Dropdown */}
              <div className="flex flex-col gap-1.5">
                <label className="font-cairo font-bold text-xs text-charcoal/70">
                  {t.contact.formCaseType}
                </label>
                <select
                  value={caseType}
                  onChange={(e) => setCaseType(e.target.value)}
                  className={`p-3 border rounded font-cairo text-sm text-charcoal focus:outline-none focus:border-burgundy ${
                    errors.caseType ? "border-burgundy bg-burgundy/5" : "border-divider bg-cream/10"
                  }`}
                >
                  <option value="">
                    {isRtl ? "-- اختر نوع التخصص --" : "-- Select Speciality --"}
                  </option>
                  {t.services.list.map((srv) => (
                    <option key={srv.id} value={srv.id}>
                      {srv.title}
                    </option>
                  ))}
                </select>
                {errors.caseType && (
                  <span className="text-[11px] font-cairo font-semibold text-burgundy mt-1">
                    {errors.caseType}
                  </span>
                )}
              </div>

              {/* Input Description */}
              <div className="flex flex-col gap-1.5">
                <label className="font-cairo font-bold text-xs text-charcoal/70">
                  {t.contact.formMessage}
                </label>
                <textarea
                  rows={4}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className={`p-3 border rounded font-cairo text-sm text-charcoal focus:outline-none focus:border-burgundy resize-none ${
                    errors.message ? "border-burgundy bg-burgundy/5" : "border-divider bg-cream/10"
                  }`}
                  placeholder={
                    isRtl
                      ? "اكتب تفاصيل قضيتك أو الاستشارة المطلوبة هنا..."
                      : "Write details of your claim or inquiry here..."
                  }
                />
                {errors.message && (
                  <span className="text-[11px] font-cairo font-semibold text-burgundy mt-1">
                    {errors.message}
                  </span>
                )}
              </div>

              {/* Submit Trigger */}
              <button
                type="submit"
                className="w-full py-4 bg-burgundy hover:bg-burgundy-hover text-cream rounded font-cairo font-bold text-sm transition-colors focus:outline-none shadow mt-2"
              >
                {t.contact.formSubmit}
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
