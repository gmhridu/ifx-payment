import {
  NavigationDropdown,
  NavItem,
} from "@/components/navbar/navigation-dropdown";
import { NavigationLink } from "./navigation-link";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

interface NavigationMenuProps {
  mobileOpen: boolean;
  onClose: () => void;
}

const NAV_ITEMS: NavItem[] = [
  {
    label: "Solutions",
    subItems: [
      {
        label: "Payment Solutions",
        subItems: [
          {
            label: "Multi Currency Accounts",
            href: "/multi-currency-accounts",
            iconUrl:
              "https://www.ifxpayments.com/wp-content/uploads/2025/05/icon-multi-currency-accounts.svg",
          },
          {
            label: "Mass Payments",
            href: "/mass-payments",
            iconUrl:
              "https://www.ifxpayments.com/wp-content/uploads/2025/05/icon-mass-payments.svg",
          },
          {
            label: "API",
            href: "/api",
            iconUrl:
              "https://www.ifxpayments.com/wp-content/uploads/2025/05/API.svg",
          },
        ],
      },
      {
        label: "Foreign Exchange",
        subItems: [
          {
            label: "Business",
            href: "/business",
            iconUrl:
              "https://www.ifxpayments.com/wp-content/uploads/2025/05/icon-for-corporates.svg",
          },
          {
            label: "Personal",
            href: "/personal",
            iconUrl:
              "https://www.ifxpayments.com/wp-content/uploads/2025/05/icon-for-individuals.svg",
          },
        ],
      },
    ],
  },
  {
    label: "Who we work with",
    subItems: [
      {
        label: "Fintechs",
        href: "/fintechs",
        iconUrl:
          "https://www.ifxpayments.com/wp-content/uploads/2025/05/FIs.svg",
      },
      {
        label: "Businesses",
        href: "/businesses",
        iconUrl:
          "https://www.ifxpayments.com/wp-content/uploads/2025/05/Businesses.svg",
      },
      {
        label: "Individuals",
        href: "/individuals",
        iconUrl:
          "https://www.ifxpayments.com/wp-content/uploads/2025/05/Individuals.svg",
      },
    ],
  },
  {
    label: "Markets",
    href: "/markets",
  },
  {
    label: "Partners",
    href: "/partners",
  },
  {
    label: "Resources",
    href: "/resources",
  },

  {
    label: "Company",
    subItems: [
      {
        label: "About Us",
        href: "/about-us",
        iconUrl:
          "https://www.ifxpayments.com/wp-content/uploads/2025/05/icon-about-v2.svg",
      },
      {
        label: "Careers",
        href: "/careers",
        iconUrl:
          "https://www.ifxpayments.com/wp-content/uploads/2025/05/icon-work-with-us-v2.svg",
      },
      {
        label: "Contact Us",
        href: "/contact-us",
        iconUrl:
          "https://www.ifxpayments.com/wp-content/uploads/2025/05/icon-contact-v2.svg",
      },
    ],
  },
];

export const NavigationMenu = ({
  mobileOpen,
  onClose,
}: NavigationMenuProps) => {
  return (
    <>
      {/* Desktop Navigation */}
      <ul className="hidden md:flex items-center gap-6 list-none m-0 p-0">
        {NAV_ITEMS.map((item) =>
          item.subItems ? (
            <NavigationDropdown key={item.label} item={item} />
          ) : (
            <NavigationLink
              key={item.label}
              label={item.label}
              href={item.href || "#"}
            />
          ),
        )}
      </ul>

      {/* Mobile Drawer – everything is inside this fixed container */}
      <div
        className={cn(
          "fixed top-0 right-0 h-full w-70 z-1020 bg-linear-to-b from-[#000616] to-[#0542a0] transition-transform duration-300 ease-in-out md:hidden flex flex-col",
          mobileOpen ? "translate-x-0" : "translate-x-full",
        )}
      >
        {/* Close button */}
        <div className="flex justify-end p-4">
          <button
            onClick={onClose}
            className="text-white p-2 hover:bg-white/10 rounded-lg transition-colors"
            aria-label="Close menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M6 18L18 6M6 6l6 6" />
            </svg>
          </button>
        </div>

        {/* Scrollable navigation area */}
        <div className="flex-1 overflow-y-auto px-4">
          {NAV_ITEMS.map((item) => (
            <MobileNavItem key={item.label} item={item} onClose={onClose} />
          ))}
        </div>

        {/* Footer CTAs */}
        <div className="px-6 pb-8 pt-4 border-t border-white/10 flex flex-col gap-3">
          <Link href="/auth/login" onClick={onClose}>
            <button className="w-full text-center py-2.5 px-5 rounded-full border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors">
              Sign in
            </button>
          </Link>
          <Link href="/get-started" onClick={onClose}>
            <button className="w-full text-center py-2.5 px-5 rounded-full bg-linear-to-r from-[#39efd2] to-[#0a8af7] text-white text-sm font-bold hover:opacity-90 transition-opacity">
              Get started
            </button>
          </Link>
        </div>
      </div>

      {/* Backdrop (optional) – closes drawer when clicking outside */}
      {mobileOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-1019 md:hidden"
          onClick={onClose}
        />
      )}
    </>
  );
};

// Recursive mobile accordion item – supports unlimited nesting
const MobileNavItem = ({
  item,
  onClose,
}: {
  item: NavItem;
  onClose: () => void;
}) => {
  const [expanded, setExpanded] = useState(false);

  // Leaf node: just a link
  if (!item.subItems) {
    return (
      <Link
        href={item.href || "#"}
        className="block py-3.5 px-2 text-white font-semibold text-[15px] border-b border-white/10 hover:text-blue-300 transition-colors"
        onClick={onClose}
      >
        {item.label}
      </Link>
    );
  }


  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setExpanded((v) => !v)}
        className="w-full flex items-center justify-between py-3.5 px-2 text-white font-semibold text-[15px] hover:text-blue-300 transition-colors"
      >
        {item.label}
        <svg
          className={`w-4 h-4 transition-transform duration-200 ${expanded ? "rotate-180" : ""}`}
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M19 9l-7 7-7-7"
          />
        </svg>
      </button>
      {expanded && (
        <div className="pl-4 pb-2">
          {item.subItems.map((sub) => (
            <MobileNavItem
              key={sub.href || sub.label}
              item={sub}
              onClose={onClose}
            />
          ))}
        </div>
      )}
    </div>
  );
};
