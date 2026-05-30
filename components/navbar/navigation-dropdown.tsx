"use client";

import { cn } from "@/lib/utils";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export interface NavItem {
  label: string;
  href?: string;
  iconUrl?: string;
  subItems?: NavItem[];
}

export const NavigationDropdown = ({ item }: { item: NavItem }) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  const hasNestedSubItems = item.subItems?.some(
    (sub) => sub.subItems && sub.subItems.length > 0,
  );

  return (
    <li
      ref={ref}
      className="relative"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <Link
        href={item.href || "#"}
        className="flex items-center gap-1 px-3 py-2 text-[15px] md:text-base font-medium text-black hover:text-blue-700 transition-colors whitespace-nowrap rounded-full hover:bg-gray-50"
      >
        {item.label}
        <svg
          className="w-3.5 h-3.5 mt-0.5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2.5}
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M19 9l-7 7-7-7" />
        </svg>
      </Link>

      {open && item.subItems && (
        // ✅ Invisible bridge fills the gap between trigger and dropdown
        <div className="absolute top-full left-1/2 -translate-x-1/2 z-50 w-full min-w-max">
          {/* Invisible hover bridge — no visual gap, no hover dropout */}
          <div className="h-2 w-full" />

          {/* Arrow flush on top of the panel */}
          <div className="w-0 h-0 border-l-8 border-r-8 border-b-8 border-l-transparent border-r-transparent border-b-[#0a0f2c] mx-auto -mb-px" />

          <div
            className={cn(
              "bg-linear-to-br from-[#0a0f2c] to-[#0a3b9e] rounded-xl shadow-2xl py-4",
              hasNestedSubItems ? "px-2 min-w-120" : "px-2 min-w-70",
            )}
          >
            {hasNestedSubItems ? (
              <div className="grid grid-cols-2 gap-x-4">
                {item.subItems.map((column) => (
                  <div key={column.label}>
                    <h3 className="text-white font-bold text-sm md:text-base uppercase tracking-wide px-4 py-2">
                      {column.label}
                    </h3>
                    <div className="space-y-0.5">
                      {column.subItems?.map((link) => (
                        <Link
                          key={link.href}
                          href={link.href || "#"}
                          className="flex items-center gap-3 px-4 py-2.5 text-sm md:text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-colors"
                        >
                          {link.iconUrl && (
                            <img
                              src={link.iconUrl}
                              alt={link.label}
                              className="size-5 object-contain shrink-0"
                            />
                          )}
                          <span>{link.label}</span>
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="flex items-center">
                {item.subItems.map((sub) => (
                  <Link
                    key={sub.href}
                    href={sub.href || "#"}
                    className="flex items-center gap-3 px-4 py-2.5 text-sm md:text-base font-medium text-gray-200 hover:text-white hover:bg-white/10 rounded-md transition-colors whitespace-nowrap"
                  >
                    {sub.iconUrl && (
                      <img
                        src={sub.iconUrl}
                        alt={sub.label}
                        className="size-5 shrink-0"
                      />
                    )}
                    {sub.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}
    </li>
  );
};
