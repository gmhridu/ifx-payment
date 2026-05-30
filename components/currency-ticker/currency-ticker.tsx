"use client";

import React from "react";
import Image from "next/image";
import { LinkButton } from "../common/link-button";
import { currencies } from "@/lib/utils";

export interface CurrencyItem {
  code: string;
  name: string;
  flagUrl: string;
}

export const CurrencyTicker = () => {
  return (
    <section className="relative box-border">
      <div className="bg-slate-100">
        <div className="bg-no-repeat py-12">
          <div className="w-full mx-auto px-3.75 md:max-w-360">
            <div
              className="relative overflow-hidden p-8 rounded-3xl md:px-10.5 md:py-20"
              style={{
                background:
                  "linear-gradient(107.3deg, rgb(0, 6, 22) 13.28%, rgb(5, 66, 160) 103.49%)",
              }}
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  backgroundImage: 'url("/images/hero-image.png")',
                  backgroundPosition: "right bottom",
                  backgroundRepeat: "no-repeat",
                  backgroundSize: "auto 100%",
                  zIndex: 0,
                }}
              />

              <div className="relative z-10">
                <div className="flex flex-wrap -mx-3.75">
                  <div className="basis-full shrink-0 max-w-full relative w-full px-3.75">
                    <h2 className="text-white text-[32px] font-bold tracking-[-0.96px] leading-[38.4px] mt-0 mb-4 md:text-4xl md:tracking-[-1.08px] md:leading-[43.2px] md:mt-25">
                      Global currency coverage
                    </h2>
                  </div>
                </div>

                <div className="flex flex-wrap -mx-3.75">
                  <div className="basis-full shrink-0 max-w-full relative w-full px-3.75 md:basis-6/12 md:max-w-[50%]">
                    <p className="text-white leading-6 md:leading-6.5">
                      Our platform provides access to a wide range of
                      currencies. Access the full list with additional
                      information below.
                    </p>
                  </div>
                </div>

                <div className="mt-4">
                  <LinkButton
                    href="/payment-networks-covarage"
                    buttonText="View supported currencies"
                  />
                </div>
                <div className="mt-12 max-w-140">
                  <div className="grid grid-cols-6 gap-x-8 gap-y-6">
                    {currencies.slice(0, 18).map((currency) => (
                      <div
                        key={currency.code}
                        className="relative aspect-square w-full overflow-hidden rounded-full bg-white/10"
                      >
                        <Image
                          src={currency.flagUrl}
                          alt={currency.code}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100px, 120px"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
