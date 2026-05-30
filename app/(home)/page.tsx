import { Awards } from "@/components/awards/awards";
import { Contact } from "@/components/contact/contact";
import { CurrencyExchange } from "@/components/currency-exchange/currency-exchange";
import { CurrencyTicker } from "@/components/currency-ticker/currency-ticker";
import { HeroSection } from "@/components/hero-section/hero-section";
import LatestNewsInsights from "@/components/latest-news-insights/latest-news-insights";
import { PartnerCTA } from "@/components/partner-cta/partner-cta";
import { PartnerLogos } from "@/components/partner-logos/partner-logos";
import { PaymentSolutions } from "@/components/problem-solutions/problem-solutions";
import { Testimonials } from "@/components/testimonials/testimonials";

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
