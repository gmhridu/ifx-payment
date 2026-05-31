import { cn } from "@/lib/utils";
import Link from "next/link";

interface LinkButtonProps {
  href?: string;
  buttonText: string;
  type?: "button" | "submit" | "reset";
  className?: string;
}

export function LinkButton({
  href,
  buttonText,
  type = "button",
  className,
}: LinkButtonProps) {
  const classes = cn(
    "inline-flex px-10 py-2 text-base bg-transparent border-2 font-semibold border-[#36e7d5] rounded-full cursor-pointer hover:bg-linear-to-r hover:from-[#37ead4] hover:to-[#1097f3] hover:text-[#000032]",
    className,
  );

  return href ? (
    <Link href={href} className={classes}>
      {buttonText}
    </Link>
  ) : (
    <button type={type} className={classes}>
      {buttonText}
    </button>
  );
}
