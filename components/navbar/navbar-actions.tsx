import Link from "next/link";

interface NavbarActionsProps {
  onMenuToggle: () => void;
  mobileOpen: boolean;
}

export const GetStartedButton = () => {
  return (
    <Link href="/get-started">
      <button className="relative inline-block px-8 py-2.5 text-white font-bold rounded-full bg-linear-to-r from-[#000032] to-[#0542a0] hover:opacity-90 transition-opacity whitespace-nowrap overflow-hidden group hover:bg-linear-to-r hover:from-[#39EFD2] hover:to-[#0A8AF7] hover:transition-colors duration-300  group cursor-pointer">
        {/* Pseudo-element for the glowing border (::before) */}
        <span className="absolute -inset-0.5 rounded-full bg-linear-to-r from-[#39EFD2] to-[#0A8AF7] opacity-100 group-hover:opacity-100 -z-10 transition-opacity duration-300" />

        {/* Pseudo-element for the dark overlay that becomes blurred on hover (::after) */}
        <span className="absolute inset-0 rounded-full bg-[#0a0f2c] -z-10 transition-all duration-300 group-hover:bg-linear-to-r group-hover:from-[#39EFD2] group-hover:to-[#0A8AF7] group-hover:blur-md" />

        {/* Button text - changes color on hover */}
        <span className="relative z-10 transition-colors duration-300 group-hover:text-[#0a0f2c]">
          Get started
        </span>
      </button>
    </Link>
  );
};

export const NavbarActions = ({
  onMenuToggle,
  mobileOpen,
}: NavbarActionsProps) => {
  return (
    <div className="flex items-center gap-2">
      {/* Desktop CTAs */}
      <div className="hidden md:flex items-center gap-2">
        <Link href={"/auth/login"}>
          <button className="px-5 py-2 text-[15px] md:text-base font-medium text-black hover:text-blue-700 rounded-full transition-colors whitespace-nowrap cursor-pointer">
            Sign in
          </button>
        </Link>
        <GetStartedButton/>
      </div>

      {/* Mobile Hamburger */}
      <button
        type="button"
        aria-label={mobileOpen ? "Close menu" : "Open menu"}
        onClick={onMenuToggle}
        className="md:hidden flex items-center justify-center w-10 h-10 rounded-lg text-gray-800 hover:bg-gray-100 transition-colors"
      >
        {mobileOpen ? (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l6 6"
            />
          </svg>
        ) : (
          <svg
            className="w-6 h-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        )}
      </button>
    </div>
  );
};
