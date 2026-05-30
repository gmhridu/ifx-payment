import { Navbar } from "@/components/navbar";
import "./globals.css";
import type { ReactNode } from "react";
import { Footer } from "@/components/footer/footer";

export const metadata = {
  title: "IFX Payments — Move money with confidence",
  description:
    "One place for seamless cross-border payments and FX, helping you reach new markets and grow globally.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div
          className="accent-auto bg-[#F4F5F9] box-border caret-transparent text-slate-950 block text-base not-italic normal-nums h-full tracking-normal leading-7 list-outside list-disc outline-[3px] overflow-x-hidden overflow-y-auto pointer-events-auto text-left no-underline indent-0 normal-case visible border-separate font-brownpro
        "
        >
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
