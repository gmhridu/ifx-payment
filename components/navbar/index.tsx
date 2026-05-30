import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { NavbarLogo } from "@/components/navbar/navbar-logo";
import { NavigationMenu } from "@/components/navbar/navigation-menu";
import { NavbarActions } from "./navbar-actions";

export const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);

    window.addEventListener("scroll", onScroll, { passive: true });

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 z-1030 bg-transparent transition-shadow duration-300",
          scrolled ? "shadow-md bg-[#F4F5F9]" : "",
        )}
      >
        <div className="max-w-360 mx-auto px-4 py-6 flex items-center justify-between h-24">
          <NavbarLogo />
          <NavigationMenu
            mobileOpen={mobileOpen}
            onClose={() => setMobileOpen(false)}
          />
          <NavbarActions
            onMenuToggle={() => setMobileOpen((v) => !v)}
            mobileOpen={mobileOpen}
          />
        </div>
      </nav>

      {/* spacer */}
      <div className="h-24" />
    </>
  );
};
