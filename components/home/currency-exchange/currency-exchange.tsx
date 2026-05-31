import { ArrowRightIcon } from "lucide-react";
import { SectionHead } from "../../common/section-head";
import Link from "next/link";

export function CurrencyExchange() {
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
      <div className="mx-auto max-w-7xl">
        <SectionHead
          title="Currency exchange"
          body="With decades of experience in foreign exchange, our expert team deliver some of the best personal service on the market, supporting you every step of the way."
        />
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {cards.map((c) => (
            <div key={c.title} className="rounded-2xl bg-white p-6 shadow-sm">
              <div className="overflow-hidden rounded-2xl">
                <img
                  src={c.image}
                  alt={c.title}
                  className="h-70 w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="px-2 pt-6 pb-2">
                <h3 className="text-[24px] font-bold text-navy">{c.title}</h3>
                <p className="mt-3 text-[15px] leading-relaxed text-muted-foreground">
                  {c.body}
                </p>
                <Link
                  href="#"
                  className="mt-6 inline-flex items-center gap-2 text-[14px] md:text-lg font-semibold text-[#0473da] hover:text-[#000032]"
                >
                  {c.cta} <ArrowRightIcon className="h-4 w-4" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
