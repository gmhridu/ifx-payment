import { Awards } from "@/components/home/awards/awards";
import { Contact } from "@/components/home/contact/contact";
import { CurrencyExchange } from "@/components/home/currency-exchange/currency-exchange";
import { CurrencyTicker } from "@/components/home/currency-ticker/currency-ticker";
import { HeroSection } from "@/components/home/hero-section/hero-section";
import LatestNewsInsights from "@/components/home/latest-news-insights/latest-news-insights";
import { PartnerCTA } from "@/components/home/partner-cta/partner-cta";
import { PartnerLogos } from "@/components/home/partner-logos/partner-logos";
import { PaymentSolutions } from "@/components/home/problem-solutions/problem-solutions";
import { Testimonials } from "@/components/home/testimonials/testimonials";

export default function HomePage() {
  return (
    <main className="min-h-screen">
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
  );
}
