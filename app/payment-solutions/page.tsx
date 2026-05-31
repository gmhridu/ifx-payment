import { HeroSection } from "@/components/payment-solutions/hero-section/hero-section";
import { Capabilities } from "@/components/payment-solutions/capabilities/capabilities";
import { Contact } from "@/components/payment-solutions/contact/contact";
import { Testimonials } from "@/components/payment-solutions/testimonials/testimonials";

export default function PaymentSolutionsPage() {
  return (
    <div>
      <HeroSection
        title="One Platform for global payments"
        description="Take control of international payments with ibanq - the all-in-one platform built for global businesses. Send, receive, and manage multi-currency funds with ease."
        image="/images/problem-sloutions/hero-image.jpg"
      />
      <Capabilities />
      <Testimonials />
      <Contact />
    </div>
  );
}
