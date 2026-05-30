import Link from "next/link";

interface LinkButtonProps {
  href: string;
  buttonText: string;
}

export function LinkButton({ href, buttonText }: LinkButtonProps) {
  return (
    <Link href={href} className="gradient-button">
      <span>{buttonText}</span>
    </Link>
  );
}
