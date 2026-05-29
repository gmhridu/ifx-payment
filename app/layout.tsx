import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "IFX Payments — Move money with confidence",
  description: "One place for seamless cross-border payments and FX, helping you reach new markets and grow globally.",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
