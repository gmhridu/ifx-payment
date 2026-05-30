"use client";

import { HeroSection } from "@/components/hero-section/hero-section";
import { Navbar } from "@/components/navbar";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, type ReactNode, type CSSProperties } from "react";


const currencies: { code: string; flag: string }[] = [
  { code: "GBP", flag: "🇬🇧" },
  { code: "AUD", flag: "🇦🇺" },
  { code: "JPY", flag: "🇯🇵" },
  { code: "HKD", flag: "🇭🇰" },
  { code: "NOK", flag: "🇳🇴" },
  { code: "AED", flag: "🇦🇪" },
  { code: "EUR", flag: "🇪🇺" },
  { code: "USD", flag: "🇺🇸" },
  { code: "DKK", flag: "🇩🇰" },
  { code: "CAD", flag: "🇨🇦" },
  { code: "ISK", flag: "🇮🇸" },
  { code: "SEK", flag: "🇸🇪" },
];

const currencyNames: Record<string, string> = {
  GBP: "British Pound Sterling",
  AUD: "Australian Dollar",
  JPY: "Japanese Yen",
  HKD: "Hong Kong Dollar",
  NOK: "Norwegian Krone",
  AED: "UAE Dirham",
  EUR: "Euro",
  USD: "United States Dollar",
  DKK: "Danish Krone",
  CAD: "Canadian Dollar",
  ISK: "Icelandic Króna",
  SEK: "Swedish Krona",
};

const testimonials = [
  {
    quote:
      "IFX has been a great move for us. Not only does IFX provide a tailored FX solution, they offer a unique service where suppliers can be paid in multiple currencies through a mass payments solution, and all supported through one IBAN.",
    author: "Finance Director",
    company: "UK-based shipping company",
  },
  {
    quote:
      "The ibanq platform is user-friendly and provides very competitive FX rates as well as the most up-to-date security protocols with a sleek design. It's difficult to say where they could improve.",
    author: "Director",
    company: "Pharmaceutical company",
  },
  {
    quote:
      "Having to navigate the complex industry that is professional football, our partners at IFX Payments have taken the care and time to learn about our specific business needs and provided effective solutions to help manage our currency exposure.",
    author: "Brentford FC",
    company: "",
  },
  {
    quote:
      "We have been hugely impressed with the professionalism, knowledge and assistance the IFX team have brought to our foreign currency transactions. I would not hesitate to recommend them to anyone who needs a fast and efficient FX service.",
    author: "David Holiday, Finance Director",
    company: "AFC Bournemouth",
  },
  {
    quote:
      "We love working with the IFX Payments team, who are dedicated to building strong, long-lasting relationships with both us and our clients. Their collaborative approach and commitment to partnership continually impress us.",
    author: "Adam Sharp, Marketing and Development Manager",
    company: "Keys Finance",
  },
  {
    quote:
      "Britannia are in their 8th year with IFX — we've found the partnership collaborative since day one and continue to develop new initiatives together to improve our customers' journey.",
    author: "Gavin McCarthy, Sales Director",
    company: "Britannia Movers International",
  },
];

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

const articles = [
  {
    date: "18 May 2026",
    title: "Sterling sinks as markets price in a new political reality for UK",
    excerpt:
      "Sterling suffered its worst weekly drop since November 2024 last week as UK leadership challenges sent the pound and Gilts sharply lower. Hotter-than-expected US inflation data and a stronger dollar added to the pressure.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "15 May 2026",
    title: "Best B2B payment solutions for cross-border payments",
    excerpt:
      "Different B2B payment solutions vary in cost, speed, currency coverage, and levels of support. To help you make an informed decision, this article covers everything you need to consider if switching away from your bank.",
    image:
      "https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=1200&q=80",
  },
  {
    date: "11 May 2026",
    title: "Starmer speech fails to dent markets – for now",
    excerpt:
      "Last week's local election results have plunged Starmer's leadership into question, but continuing impact on currency markets remains to be seen. Sterling is supported by a broader risk-on sentiment.",
    image:
      "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80",
  },
];


function Header() {
  return <Navbar />;
}

function SectionHead({
  eyebrow,
  title,
  body,
  cta,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </div>
      )}
      <h2 className="text-[36px] sm:text-[48px] font-extrabold leading-[1.05] text-navy">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
          {body}
        </p>
      )}
      {cta && (
        <a
          href={cta.href}
          className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-accent"
        >
          {cta.label} <ArrowRight className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}

function SolutionCard({
  bg,
  title,
  body,
  cta,
  icon,
}: {
  bg: string;
  title: string;
  body: string;
  cta: string;
  icon: ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-surface p-10 transition-shadow hover:shadow-[0_30px_60px_-30px_rgb(0_0_0/0.15)]">
      <div className="absolute inset-0 opacity-90" style={{ background: bg }} />
      <div className="relative flex h-full min-h-[440px] flex-col">
        <div className="mb-auto">{icon}</div>
        <div>
          <h3 className="text-[28px] font-bold text-navy">{title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-navy/75">
            {body}
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-[14px] font-semibold text-navy hover:text-accent"
          >
            {cta} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}

function PaymentSolutions() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          title="Payment solutions"
          body="Send and receive funds in foreign currencies using ibanq, our accessible and intuitive platform designed for businesses growing internationally."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <SolutionCard
            bg="linear-gradient(135deg, #ffffff 0%, #f5f7fb 100%)"
            icon={
              <div className="flex h-56 w-full items-center justify-center">
                <img
                  src="https://www.ifxpayments.com/wp-content/uploads/2025/05/Multi-Currency-Accounts-Tile-Card.svg"
                  alt="Multi-currency accounts"
                  className="max-h-56 w-auto"
                  loading="lazy"
                />
              </div>
            }
            title="Multi-currency accounts"
            body="Managing multiple overseas bank accounts can be costly and cumbersome. ibanq allows you to send and receive in 40+ currencies from one location."
            cta="Send and receive multi-currency funds"
          />
          <SolutionCard
            bg="linear-gradient(135deg, #ffffff 0%, #f5f7fb 100%)"
            icon={
              <div className="flex h-56 w-full items-center justify-center">
                <img
                  src="https://www.ifxpayments.com/wp-content/uploads/2026/03/Mass_Payments.svg"
                  alt="Mass payments"
                  className="max-h-56 w-auto"
                  loading="lazy"
                />
              </div>
            }
            title="Mass payments"
            body="Streamline large scale payments to suppliers, staff and partners across the globe. Mass Payments supports efficient bulk transfers in 60+ currencies."
            cta="Execute batch payments globally"
          />
        </div>
      </div>
    </section>
  );
}

function CurrencyTicker() {
  const row = [...currencies, ...currencies, ...currencies];
  return (
    <section className="px-3 sm:px-6 py-12">
      <div
        className="relative mx-auto max-w-[1380px] overflow-hidden rounded-[28px] bg-navy-deep px-6 py-20 sm:px-16"
        style={{
          backgroundImage:
            "url('https://www.ifxpayments.com/wp-content/themes/tf-ifx-2021/img/currencies-bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center right",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="relative max-w-xl text-white">
          <h2 className="text-[36px] sm:text-[48px] font-extrabold leading-[1.05] text-white">
            Global currency coverage
          </h2>
          <p className="mt-5 text-[16px] leading-relaxed text-white/80">
            Our platform provides access to a wide range of currencies. Access
            the full list with additional information below.
          </p>
          <a
            href="#"
            className="mt-8 inline-flex items-center rounded-full border-2 border-accent px-7 py-3.5 text-[14px] font-semibold text-white hover:bg-accent hover:text-navy-deep transition-colors"
          >
            View supported currencies
          </a>
        </div>

        <div className="relative mt-14 space-y-5">
          <div className="overflow-hidden">
            <div className="marquee flex w-max gap-3">
              {row.map((c, i) => (
                <div
                  key={`a-${i}`}
                  className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 ring-1 ring-white/15"
                >
                  <span className="text-2xl leading-none">{c.flag}</span>
                  <span className="text-[13px] font-semibold text-white">
                    {c.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="overflow-hidden">
            <div
              className="marquee-slow flex w-max gap-3"
              style={{ animationDirection: "reverse" } as CSSProperties}
            >
              {row.map((c, i) => (
                <div
                  key={`b-${i}`}
                  className="flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-sm px-4 py-2 ring-1 ring-white/15"
                >
                  <span className="text-2xl leading-none">{c.flag}</span>
                  <span className="text-[13px] font-semibold text-white">
                    {c.code}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CurrencyExchange() {
  const cards = [
    {
      title: "Business",
      image:
        "https://www.ifxpayments.com/wp-content/uploads/2025/05/Currency-exchange-for-business-Hero.png",
      body: "A tailored foreign exchange service built for growing businesses. We work alongside you to manage risk, streamline cross-border transactions, and protect your bottom line from market volatility.",
      cta: "Discover business FX",
    },
    {
      title: "Personal",
      image:
        "https://www.ifxpayments.com/wp-content/uploads/2025/05/Personal-currency-exchange-Hero.png",
      body: "Whether you're buying a property abroad or sending money to family overseas, our experts navigate changes in the market and secure competitive exchange rates for your international transfers.",
      cta: "Discover personal FX",
    },
  ];
  return (
    <section className="py-24 px-6 bg-secondary/40">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          title="Currency exchange"
          body="With decades of experience in foreign exchange, our expert team deliver some of the best personal service on the market, supporting you every step of the way."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="rounded bg-white p-6 shadow-sm">
              <div className="overflow-hidden rounded">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-[280px] w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="px-2 pt-6 pb-2">
                <h3 className="text-[24px] font-bold text-navy">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <a
                  href="#"
                  className="mt-5 inline-flex items-center gap-2 text-[15px] font-semibold text-accent hover:opacity-80"
                >
                  {c.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerCTA() {
  return (
    <section className="px-3 sm:px-6 py-12">
      <div className="mx-auto grid max-w-[1380px] overflow-hidden rounded-[28px] bg-navy-deep lg:grid-cols-2">
        <div className="relative min-h-[360px]">
          <img
            src="/partners-meeting.jpg"
            alt="Two colleagues collaborating"
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center p-10 sm:p-16 text-white">
          <h2 className="text-[36px] sm:text-[44px] font-extrabold leading-[1.05] text-white">
            Become an IFX partner
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-white/80">
            We believe what we do is worth shouting about and have an offer for
            anyone who wants to join the club. Become an IFX partner today to
            open new revenue streams and bolster your value proposition.
          </p>
          <div className="mt-8">
            <a
              href="#"
              className="inline-flex items-center rounded-full border-2 border-accent px-7 py-3.5 text-[15px] font-semibold text-white hover:bg-accent hover:text-navy-deep transition-colors"
            >
              Partner with us today
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Testimonials() {
  const perPage = 2;
  const pages = Math.ceil(testimonials.length / perPage);
  const [page, setPage] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setPage((p) => (p + 1) % pages), 5000);
    return () => clearInterval(id);
  }, [pages]);

  const visible = testimonials.slice(page * perPage, page * perPage + perPage);

  return (
    <section className="py-24 px-6 bg-secondary/40">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          title="What our clients say about us"
          body="After 20 years of serving FX Brokerage clients and ibanq users, we've gained a few fans. Find out what they said about our service and products."
        />
        <div
          key={page}
          className="mt-14 grid gap-6 md:grid-cols-2 animate-fade-in"
        >
          {visible.map((t, i) => (
            <figure
              key={`${page}-${i}`}
              className="rounded bg-white p-10 sm:p-12 shadow-sm min-h-[440px] flex flex-col"
            >
              <div
                aria-hidden="true"
                className="text-navy font-serif italic font-bold leading-none text-[64px]"
              >
                &#8220;
              </div>
              <blockquote className="mt-4 text-[19px] leading-[1.55] text-navy">
                {t.quote}
              </blockquote>
              <figcaption className="mt-auto pt-12">
                <div className="text-[14px] font-semibold text-navy">
                  {t.author}
                </div>
                {t.company && (
                  <div className="text-[13px] text-muted-foreground mt-1">
                    {t.company}
                  </div>
                )}
              </figcaption>
            </figure>
          ))}
        </div>
        <div className="mt-10 flex justify-center gap-2">
          {Array.from({ length: pages }).map((_, i) => (
            <button
              key={i}
              onClick={() => setPage(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all ${i === page ? "w-8 bg-navy" : "w-2 bg-navy/25"}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function PartnerLogos() {
  const row = [...partners, ...partners, ...partners];
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1280px]">
        <SectionHead
          title="Our partners"
          body="We're proud to work with these great organisations."
        />
        <div className="relative mt-14 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 w-32 z-10 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-32 z-10 bg-gradient-to-l from-background to-transparent" />
          <div className="marquee flex w-max items-center gap-14">
            {row.map((p, i) => (
              <div
                key={i}
                className="flex h-20 w-44 items-center justify-center px-4"
              >
                <img
                  src={p.logo}
                  alt={`${p.name} logo`}
                  className="max-h-26 max-w-full object-contain"
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

function Awards() {
  return (
    <section className="py-24 px-6 bg-secondary/40">
      <div className="mx-auto grid max-w-[1280px] items-center gap-14 lg:grid-cols-2">
        <div>
          <img
            src="https://www.ifxpayments.com/wp-content/uploads/2026/03/Awards-graphic-1-1.png"
            alt="Collection of industry award badges for IFX Payments from 2024 and 2025"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-[36px] sm:text-[48px] font-extrabold leading-[1.05] text-navy">
            Industry recognition
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            Recognised by respected industry bodies, our service-led approach
            and forward-thinking solutions are helping businesses thrive in
            global markets.
          </p>
        </div>
      </div>
    </section>
  );
}

function News() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-[1280px]">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-xl">
            <h2 className="text-[36px] sm:text-[48px] font-extrabold leading-[1.05] text-navy">
              Latest news & insights
            </h2>
            <p className="mt-4 text-[16px] leading-relaxed text-muted-foreground">
              From latest news and developments about our growing company to
              expert-led articles and updates that you can trust. Subscribe to
              our weekly market updates.
            </p>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-accent"
          >
            Read more <ArrowRight className="h-4 w-4" />
          </a>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {articles.map((a, i) => (
            <article
              key={i}
              className="group overflow-hidden rounded-[28px] border border-border bg-white shadow-[0_20px_60px_-30px_rgba(0,0,0,0.2)] transition-all hover:-translate-y-1 hover:shadow-[0_30px_80px_-35px_rgba(0,0,0,0.25)]"
            >
              <div className="relative h-64 overflow-hidden bg-slate-100">
                <img
                  src={a.image}
                  alt={a.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute left-6 bottom-6 rounded-full bg-white/90 px-4 py-2 text-[12px] font-semibold uppercase tracking-[0.24em] text-navy shadow-sm">
                  {a.date}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-[22px] font-bold leading-tight text-navy transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-5 text-[15px] leading-relaxed text-muted-foreground">
                  {a.excerpt}
                </p>
                <a
                  href="#"
                  className="mt-8 inline-flex items-center gap-2 text-[15px] font-semibold text-accent hover:text-navy"
                >
                  Explore <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="px-3 sm:px-6 py-12">
      <div className="mx-auto max-w-[1380px] overflow-hidden rounded-[28px] bg-gradient-to-br from-[#050818] via-[#0a1535] to-[#103a8a] px-6 py-14 text-white sm:px-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-20">
          <div>
            <span className="inline-flex items-center rounded-full bg-white/10 border border-white/15 px-5 py-2 text-[13px] font-semibold text-white backdrop-blur">
              Contact Us
            </span>
            <h2 className="mt-8 text-[44px] sm:text-[56px] font-extrabold leading-[1] text-white">
              Let's talk
            </h2>
            <p className="mt-5 max-w-md text-[15px] leading-relaxed text-white/75">
              Ready to take the next step or just have a question?
              <br />
              Reach out and we'll connect you with the right person.
            </p>
          </div>

          <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
            <Field label="Subject of enquiry" required>
              <SelectInput defaultValue="">
                <option value="" disabled>
                  Please Select
                </option>
                <option>General enquiry</option>
                <option>Business FX</option>
                <option>Personal FX</option>
                <option>Partnerships</option>
              </SelectInput>
            </Field>

            <Field label="First name" required>
              <TextInput type="text" />
            </Field>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Email" required>
                <TextInput type="email" />
              </Field>
              <Field label="Phone number" required>
                <TextInput type="tel" />
              </Field>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <Field label="Company name">
                <TextInput type="text" />
              </Field>
              <Field label="Country/Region" required>
                <SelectInput defaultValue="">
                  <option value="" disabled>
                    Please Select
                  </option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                  <option>Europe</option>
                  <option>Other</option>
                </SelectInput>
              </Field>
            </div>

            <Field label="Message">
              <textarea
                rows={4}
                className="w-full rounded-md bg-white/5 border border-white/20 px-4 py-3 text-[14px] text-white placeholder-white/40 outline-none focus:border-accent focus:bg-white/10 transition resize-none"
              />
            </Field>

            <Field label="How did you hear about us" required>
              <SelectInput defaultValue="">
                <option value="" disabled>
                  Please Select
                </option>
                <option>Search engine</option>
                <option>Social media</option>
                <option>Referral</option>
                <option>Event</option>
              </SelectInput>
            </Field>

            <label className="flex items-start gap-3 pt-1 cursor-pointer">
              <input
                type="checkbox"
                className="mt-0.5 h-4 w-4 rounded border-white/30 bg-white/5 accent-accent"
              />
              <span className="text-[12.5px] leading-snug text-white/80">
                I would like to receive marketing materials, the latest product
                updates and company news from IFX Payments
              </span>
            </label>

            <p className="text-[12px] leading-relaxed text-white/65">
              By submitting this form, you consent to our collection, use, and
              storage of your personal information in accordance with our
              Privacy Policy. For more details on how we protect your data,
              please review our{" "}
              <a href="#" className="text-accent underline">
                Privacy Policy
              </a>
              .
            </p>

            <div className="flex justify-end pt-2">
              <button
                type="submit"
                className="rounded-full border-2 border-accent px-10 py-3 text-[14px] font-semibold text-white hover:bg-accent hover:text-navy-deep transition-colors"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  required,
  children,
}: {
  label: string;
  required?: boolean;
  children: ReactNode;
}) {
  return (
    <div>
      <label className="block text-[13px] font-medium text-white/90 mb-2">
        {label}
        {required && <span className="text-white">*</span>}
      </label>
      {children}
    </div>
  );
}

function TextInput(props: React.InputHTMLAttributes<HTMLInputElement>) {
  return (
    <input
      {...props}
      className="w-full rounded-md bg-white/5 border border-white/20 px-4 py-2.5 text-[14px] text-white placeholder-white/40 outline-none focus:border-accent focus:bg-white/10 transition"
    />
  );
}

function SelectInput({
  children,
  ...props
}: React.SelectHTMLAttributes<HTMLSelectElement>) {
  return (
    <select
      {...props}
      className="w-full rounded-md bg-white/5 border border-white/20 px-4 py-2.5 text-[14px] font-semibold text-white outline-none focus:border-accent focus:bg-white/10 transition appearance-none bg-[url('data:image/svg+xml;utf8,<svg xmlns=%22http://www.w3.org/2000/svg%22 width=%2212%22 height=%2212%22 viewBox=%220 0 24 24%22 fill=%22none%22 stroke=%22white%22 stroke-width=%222%22><polyline points=%226 9 12 15 18 9%22/></svg>')] bg-no-repeat bg-[right_1rem_center] pr-10"
    >
      {children}
    </select>
  );
}

function Footer() {
  const cols = [
    {
      title: "Solutions",
      links: [
        "Multi-currency accounts",
        "Mass payments",
        "Foreign exchange",
        "API",
      ],
    },
    { title: "Company", links: ["About", "Careers", "Press", "Contact"] },
    {
      title: "Resources",
      links: ["Insights", "Market updates", "Help centre", "Legal"],
    },
  ];
  return (
    <footer className="bg-navy-deep px-6 pt-20 pb-10 text-white">
      <div className="mx-auto max-w-[1280px]">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <div className="flex flex-col items-start leading-none">
              <div className="text-[32px] font-extrabold tracking-tight text-white">
                IFX
              </div>
              <div className="mt-1 text-[10px] font-semibold tracking-[0.28em] text-white">
                PAYMENTS
              </div>
            </div>
            <p className="mt-6 max-w-sm text-[14px] leading-relaxed text-white/70">
              Move money with confidence. One place for seamless cross-border
              payments and FX.
            </p>
          </div>
          {cols.map((c) => (
            <div key={c.title}>
              <div className="text-[13px] font-bold uppercase tracking-wider text-accent">
                {c.title}
              </div>
              <ul className="mt-5 space-y-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-[14px] text-white/80 hover:text-accent transition-colors"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-white/10 pt-8 sm:flex-row sm:items-center">
          <div className="text-[13px] text-white/60">
            © {new Date().getFullYear()} IFX Payments. All rights reserved.
          </div>
          <div className="flex gap-6 text-[13px] text-white/60">
            <a href="#" className="hover:text-accent">
              Privacy
            </a>
            <a href="#" className="hover:text-accent">
              Terms
            </a>
            <a href="#" className="hover:text-accent">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection
          image="/images/hero-image.png"
          title="Move money with confidence"
          description="One place for seamless cross-border payments and FX, helping you reach new markets and grow globally."
        />
        <PaymentSolutions />
        <CurrencyTicker />
        <CurrencyExchange />
        <PartnerCTA />
        <Testimonials />
        <PartnerLogos />
        <Awards />
        <News />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
