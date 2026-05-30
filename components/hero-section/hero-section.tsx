import { LinkButton } from "../common/link-button";

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
                    backgroundPosition: "right bottom",
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "auto 115%",
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
                    <div>
                      <LinkButton href="/contact" buttonText="Speak to our team" />
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
