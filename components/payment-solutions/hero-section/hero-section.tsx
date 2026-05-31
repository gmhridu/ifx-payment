import { LinkButton } from "@/components/common/link-button";

interface HeroSectionProps {
  image?: string;
  imagePadding?: string;
  title?: string;
  description?: string;
}

export const HeroSection = ({
  image,
  imagePadding = "24px 16px",
  title,
  description,
}: HeroSectionProps) => {
  return (
    <section style={{ backgroundColor: "#F5F6F9" }}>
      <div
        className="ifx-row"
        style={{ "--bg-page": "#f5f6f9" } as React.CSSProperties}
      >
        <div
          className="ifx-row-wrapper layout-hero layout-hero-overlay"
          style={{ paddingBottom: 0, paddingTop: 0 }}
        >
          <div className="max-w-360 mx-auto px-4 py-3">
            <div
              className="section-container"
              style={{
                background:
                  "linear-gradient(107.3deg, rgb(0, 6, 22) 13.28%, rgb(5, 66, 160) 103.49%)",
                borderRadius: "20px",
                overflow: "hidden",
                position: "relative",
                padding: `${imagePadding}`,
              }}
            >
              {image && (
                <div
                  className="absolute inset-0 pointer-events-none"
                  style={{
                    backgroundImage: `url(${image})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "auto 120%",
                    zIndex: 0,
                  }}
                />
              )}

              {/* Content - unchanged */}
              <div
                className="row justify-content-md-start"
                style={{ position: "relative", zIndex: 2 }}
              >
                <div className="col-12 col-lg-6">
                  <div
                    className="section-content"
                    style={{
                      padding: "clamp(4rem, 8vw, 7rem) clamp(2rem, 5vw, 4rem)",
                      minHeight: "clamp(420px, 58vh, 560px)",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "center",
                    }}
                  >
                    <div>
                      <span className="items-center bg-[linear-gradient(107.3deg,rgb(0,6,22)_13.28%,rgb(5,66,160)_103.49%)] box-border caret-transparent text-white gap-x-2 inline-flex tracking-[0.2px] leading-[normal] gap-y-2 no-underline text-nowrap mb-8 pl-2 pr-5 py-2 rounded-[50px] border border-[#34A7FF]">
                        <img
                          src="/images/multi-currency.svg"
                          alt="Multi Currency"
                        />
                        Payment solutions for business{" "}
                      </span>
                    </div>
                    <h1
                      className="section-title"
                      style={{
                        color: "#fff",
                        fontSize: "clamp(2.2rem, 4vw, 4rem)",
                        fontWeight: 400,
                        lineHeight: 1.1,
                        letterSpacing: "-0.02em",
                        marginBottom: "1.5rem",
                        maxWidth: "520px",
                      }}
                    >
                      {title}
                    </h1>
                    <p
                      style={{
                        color: "rgba(255,255,255,0.85)",
                        fontSize: "1rem",
                        lineHeight: 1.65,
                        maxWidth: "420px",
                        marginBottom: "2.25rem",
                      }}
                    >
                      {description}
                    </p>
                    <div className="flex gap-4 items-center">
                      <LinkButton
                        href="/contact"
                        buttonText="Speak to our team"
                        className="text-white"
                      />
                      <LinkButton
                        href="/payments-networks-coverage"
                        buttonText="View supported currencies"
                        className="bg-[linear-gradient(107.3deg,rgb(0,6,22)_13.28%,rgb(5,66,160)_103.49%)] border-none text-white"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-6" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
