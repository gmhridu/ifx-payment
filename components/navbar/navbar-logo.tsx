// components/navbar/navbar-logo.tsx
import Link from "next/link";
import { Logo } from "./svg-component"; // adjust path as needed

export const NavbarLogo = () => {
  return (
    <Link href="/" className="shrink-0 flex items-center pt-0">
      <Logo className="h-16 w-auto text-black" />
    </Link>
  );
};
