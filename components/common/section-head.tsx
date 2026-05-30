import { ArrowRightIcon } from "lucide-react";

export function SectionHead({
  eyebrow,
  title,
  body,
  cta,
}: {
  eyebrow?: string;
  title: string;
  body?: string;
  cta?: { label: string; href: string };
}) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      {eyebrow && (
        <div className="mb-3 text-sm font-semibold uppercase tracking-[0.18em] text-accent">
          {eyebrow}
        </div>
      )}
      <h2 className="text-[36px] sm:text-[48px] font-extrabold leading-[1.05] text-[#000032]">
        {title}
      </h2>
      {body && (
        <p className="mt-5 text-[17px] leading-relaxed text-[#000032]">
          {body}
        </p>
      )}
      {cta && (
        <a
          href={cta.href}
          className="mt-7 inline-flex items-center gap-2 text-[15px] font-semibold text-navy hover:text-accent"
        >
          {cta.label} <ArrowRightIcon className="h-4 w-4" />
        </a>
      )}
    </div>
  );
}
