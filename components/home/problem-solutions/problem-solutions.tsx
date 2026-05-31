import { SectionHead } from "@/components/common/section-head";
import { SectionCard } from "@/components/common/section-card";

export function PaymentSolutions() {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          title="Payment solutions"
          body="Send and receive funds in foreign currencies using ibanq, our accessible and intuitive platform designed for businesses growing internationally."
        />
        <div className="mt-16 grid gap-6 md:grid-cols-2">
          <SectionCard
            bg=""
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
          <SectionCard
            bg=""
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
