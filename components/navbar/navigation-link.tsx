import Link from "next/link";

export type NavigationLinkProps = {
  label: string;
  href: string;
};

export const NavigationLink = ({ label, href }: NavigationLinkProps) => {
  return (
    <li>
      <Link
        href={href}
        className="flex items-center px-3 py-2 text-[15px] md:text-base font-medium text-black hover:text-blue-700 transition-colors whitespace-nowrap rounded-full hover:bg-gray-50"
      >
        {label}
      </Link>
    </li>
  );
};
