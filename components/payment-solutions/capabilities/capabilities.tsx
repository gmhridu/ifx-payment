import { SectionCard } from "@/components/common/section-card"
import { SectionHead } from "@/components/common/section-head"

export const Capabilities = () => {
  return (
    <section className="py-24 px-6">
      <div className="mx-auto max-w-7xl">
        <SectionHead
          title="ibanq capabilities"
          body="ibanq offers two distinct payment solutions for growing companies: Multi-Currency Accounts and Mass Payments. Whether you seek versatility or efficiency, these tools work seamlessly together or individually to meet the needs of your business."
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
            body="Avoid the hassle and expense of maintaining multiple overseas accounts. Our multi-currency solution lets you hold, send and receive funds in 40+ currencies - through a single account."
            cta="Simplify currency management"
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
            body="Simplify high-volume payouts to global suppliers, employees, or partners. Our mass payments feature enables fast, accurate transfers in 60+ currencies."
            cta="Streamline batch payments"
          />
        </div>
      </div>
    </section>
  )
}
