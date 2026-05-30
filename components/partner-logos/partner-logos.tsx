import { SectionHead } from "../common/section-head";

const partners = [
  {
    name: "AFC Bournemouth",
    logo: "https://www.ifxpayments.com/wp-content/uploads/2024/06/AFC-Bournemouth-logo-graphic.svg",
  },
  {
    name: "BOXXER",
    logo: "https://www.ifxpayments.com/wp-content/uploads/2024/06/Boxxer-logo-graphic.svg",
  },
  {
    name: "Keys Finance",
    logo: "https://www.ifxpayments.com/wp-content/uploads/2024/06/Keys-Finance.svg",
  },
  {
    name: "Oxford United",
    logo: "https://www.ifxpayments.com/wp-content/uploads/2024/06/Oxford-United-logo-graphic.svg",
  },
  {
    name: "Britannia Movers",
    logo: "https://www.ifxpayments.com/wp-content/uploads/2024/06/Britannia-Movers-logo.svg",
  },
  {
    name: "Hibernian FC",
    logo: "https://www.ifxpayments.com/wp-content/uploads/2024/06/Hibernian-FC-logo-graphic.svg",
  },
  {
    name: "HBBA",
    logo: "https://www.ifxpayments.com/wp-content/uploads/2024/06/HBBA-logo.svg",
  },
];

export function PartnerLogos() {
  const row = [...partners, ...partners];

  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-360">
        <SectionHead
          title="Our partners"
          body="We're proud to work with these great organisations."
        />

        <div className="relative mt-14 overflow-hidden">
          {/* Left fade mask – matches white background */}
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-linear-to-r from-white/0 to-transparent" />

          {/* Right fade mask */}
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-linear-to-l from-white/0 to-transparent" />

          {/* Marquee track */}
          <div className="flex w-max items-center gap-14 animate-marquee">
            {row.map((p, i) => (
              <div
                key={i}
                className="flex h-25 w-50 items-center justify-center px-4"
              >
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="max-h-40 max-w-full object-contain"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
