import { ArrowRightIcon } from "lucide-react";
import { ReactNode } from "react";

export function SectionCard({
  bg,
  title,
  body,
  cta,
  icon,
}: {
  bg: string;
  title: string;
  body: string;
  cta: string;
  icon: ReactNode;
}) {
  return (
    <div className="group relative overflow-hidden rounded-[28px] bg-white shadow p-10">
      <div className="absolute inset-0 opacity-90" style={{ background: bg }} />
      <div className="relative flex h-full min-h-110 flex-col">
        <div className="mb-auto">{icon}</div>
        <div>
          <h3 className="text-[28px] font-bold text-[#000032]">{title}</h3>
          <p className="mt-3 text-[15px] leading-relaxed text-[#000032]">
            {body}
          </p>
          <a
            href="#"
            className="mt-6 inline-flex items-center gap-2 text-[14px] md:text-lg font-semibold text-[#0473da] hover:text-[#000032]"
          >
            {cta} <ArrowRightIcon className="h-4 w-4" />
          </a>
        </div>
      </div>
    </div>
  );
}
