"use client";

import { useEffect, useState } from "react";
import { SectionHead } from "@/components/common/section-head";

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

export function Testimonials() {
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
      <div className="mx-auto max-w-7xl">
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
              className="rounded bg-white p-10 sm:p-12 shadow-sm min-h-110 flex flex-col"
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
