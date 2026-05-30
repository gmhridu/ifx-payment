"use client";

import { Awards } from "@/components/awards/awards";
import { SectionCard } from "@/components/common/section-card";
import { SectionHead } from "@/components/common/section-head";
import { Contact } from "@/components/contact/contact";
import { CurrencyExchange } from "@/components/currency-exchange/currency-exchange";
import { CurrencyTicker } from "@/components/currency-ticker/currency-ticker";
import { Footer } from "@/components/footer/footer";
import { HeroSection } from "@/components/hero-section/hero-section";
import LatestNewsInsights from "@/components/latest-news-insights/latest-news-insights";
import { Navbar } from "@/components/navbar";
import { PartnerCTA } from "@/components/partner-cta/partner-cta";
import { PartnerLogos } from "@/components/partner-logos/partner-logos";
import { PaymentSolutions } from "@/components/problem-solutions/problem-solutions";
import { Testimonials } from "@/components/testimonials/testimonials";
import { ArrowRight } from "lucide-react";
import { useEffect, useState, type ReactNode, type CSSProperties } from "react";


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

function Header() {
  return <Navbar />;
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
        <LatestNewsInsights />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
