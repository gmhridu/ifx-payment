export function Awards() {
  return (
    <section className="py-24 px-6 bg-secondary/40">
      <div className="mx-auto grid max-w-360 items-center gap-14 lg:grid-cols-2">
        <div>
          <img
            src="https://www.ifxpayments.com/wp-content/uploads/2026/03/Awards-graphic-1-1.png"
            alt="Collection of industry award badges for IFX Payments from 2024 and 2025"
            className="w-full h-auto"
            loading="lazy"
          />
        </div>
        <div>
          <h2 className="text-[36px] sm:text-[48px] font-extrabold leading-[1.05] text-navy">
            Industry recognition
          </h2>
          <p className="mt-5 text-[17px] leading-relaxed text-muted-foreground">
            Recognised by respected industry bodies, our service-led approach
            and forward-thinking solutions are helping businesses thrive in
            global markets.
          </p>
        </div>
      </div>
    </section>
  );
}
