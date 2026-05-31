import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";

export function PartnerCTA() {
  return (
    <section className="px-3 sm:px-6 py-12">
      <div className="mx-auto grid max-w-355 overflow-hidden rounded-[28px] bg-navy-deep lg:grid-cols-2">
        <div className="relative aspect-4/3">
          <img
            src="/images/Partner-with-us-feature.png"
            alt="Two colleagues collaborating"
            className="absolute inset-0 h-full w-full rounded-2xl"
            loading="lazy"
          />
        </div>
        <div className="flex flex-col justify-center p-10 sm:p-16 text-white">
          <h2 className="text-[36px] sm:text-[44px] font-extrabold leading-[1.05] text-[#000032]">
            Become an IFX partner
          </h2>
          <p className="mt-5 max-w-md text-[16px] leading-relaxed text-[#000032]">
            We believe what we do is worth shouting about and have an offer for
            anyone who wants to join the club. Become an IFX partner today to
            open new revenue streams and bolster your value proposition.
          </p>
          <div className="mt-8">
            <Link
              href="#"
              className="mt-6 inline-flex items-center gap-2 text-[14px] md:text-lg font-semibold text-[#0473da] hover:text-[#000032]"
            >
              Partner with us today <ArrowRightIcon className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
