// app/components/LatestNewsInsights.tsx
"use client";

import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import React from "react";

interface BlogPost {
  id: number;
  title: string;
  date: string;
  description: string;
  link: string;
  imageUrlDesktop: string;
  imageUrlMobile: string;
  imageAlt: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Sterling sinks as markets price in a new political reality for UK",
    date: "18 May 2026",
    description:
      "Sterling suffered its worst weekly drop since November 2024 last week as UK leadership challenges sent the pound and Gilts sharply lower. Hotter-than-expected US inflation data and a stronger dollar, added to the pressure.",
    link: "https://www.ifxpayments.com/resources/sterling-sinks-as-markets-price-in-a-new-political-reality-for-uk/",
    imageUrlDesktop:
      "https://c.animaapp.com/mprd6fg1FhFzqr/assets/Weekly-market-update-18-May-768x433.webp",
    imageUrlMobile:
      "https://c.animaapp.com/mprd6fg1FhFzqr/assets/Weekly-market-update-18-May-768x433.webp",
    imageAlt: "Weekly market update",
  },
  {
    id: 2,
    title: "Best B2B payment solutions for cross-border payments",
    date: "15 May 2026",
    description:
      "Different B2B payment solutions vary in cost, speed, currency coverage, and levels of support. To help you make an informed decision, this article covers everything you need to consider if switching away from your bank to a dedicated B2B payment solution.",
    link: "https://www.ifxpayments.com/resources/best-b2b-payment-solutions-for-cross-border-payments/",
    imageUrlDesktop:
      "https://c.animaapp.com/mprd6fg1FhFzqr/assets/B2B-Payment-Solutions-banner-image-768x432.webp",
    imageUrlMobile:
      "https://c.animaapp.com/mprd6fg1FhFzqr/assets/B2B-Payment-Solutions-banner-image-768x432.webp",
    imageAlt: "B2B payment solutions",
  },
  {
    id: 3,
    title: "Starmer speech fails to dent markets – for now",
    date: "11 May 2026",
    description:
      "Last week's local election results have plunged Starmer's leadership into question, but continuing impact on currency markets remains to be seen. Sterling is supported by a broader risk-on sentiment, while the euro is held in check by growth concerns despite a 'live' ECB June meeting.",
    link: "https://www.ifxpayments.com/resources/starmer-speech-fails-to-dent-markets-for-now/",
    imageUrlDesktop:
      "https://c.animaapp.com/mprd6fg1FhFzqr/assets/Weekly-market-update-11-May-1-768x433.jpg",
    imageUrlMobile:
      "https://c.animaapp.com/mprd6fg1FhFzqr/assets/Weekly-market-update-11-May-1-768x433.jpg",
    imageAlt: "Starmer speech analysis",
  },
];

const LatestNewsInsights: React.FC = () => {
  return (
    <section className="box-border caret-transparent relative no-underline">
      <div className="box-border caret-transparent relative no-underline">
        <div className="bg-no-repeat box-border caret-transparent no-underline pb-12 md:pb-30">
          <div className="box-border caret-transparent max-w-none no-underline w-full mx-auto px-3.75 md:max-w-360">
            {/* Header */}
            <div className="box-border caret-transparent flex flex-wrap -ml-3.75 -mr-3.75 no-underline mb-12 justify-center text-center">
              <div className="box-border caret-transparent basis-auto shrink max-w-none min-h-auto min-w-auto relative no-underline w-full px-3.75 md:basis-6/12 md:shrink-0 md:max-w-[50%]">
                <h2 className="box-border caret-transparent text-[32px] font-bold tracking-[-0.96px] leading-[38.4px] no-underline mb-5 md:text-4xl md:tracking-[-1.08px] md:leading-[43.2px]">
                  Latest news &amp; insights
                </h2>
                <p className="box-border caret-transparent leading-6 no-underline md:leading-6.5">
                  From latest news and developments about our growing company to
                  expert led articles and updates that you can trust. Subscribe
                  to our weekly market updates.
                </p>
              </div>
            </div>

            {/* Desktop Grid */}
            <div className="box-border caret-transparent hidden flex-wrap -ml-3.75 -mr-3.75 no-underline md:flex">
              {blogPosts.map((post) => (
                <div
                  key={post.id}
                  className="box-border caret-transparent basis-full shrink-0 max-w-full min-h-0 min-w-0 relative no-underline w-full px-3.75 md:basis-[33.3333%] md:max-w-[33.3333%] md:min-h-auto md:min-w-auto"
                >
                  <div className="box-border caret-transparent flex flex-col h-full wrap-break-word relative no-underline overflow-hidden mb-7.5 py-px">
                    <div className="box-border caret-transparent shrink-0 min-h-px min-w-0 wrap-break-word no-underline md:min-w-auto">
                      <a
                        href={post.link}
                        className="bg-center bg-no-repeat bg-cover box-border caret-transparent text-sky-600 block shrink-0 h-42.5 wrap-break-word underline w-full mb-6 rounded-2xl md:h-60.75"
                        style={{
                          backgroundImage: `url('${post.imageUrlDesktop}')`,
                        }}
                      />
                      <small className="box-border caret-transparent text-slate-400 block text-sm wrap-break-word no-underline uppercase mb-2 md:mb-4">
                        {post.date}
                      </small>
                      <h4 className="box-border caret-transparent text-[22px] font-bold tracking-[-1.375px] leading-[28.6px] wrap-break-word no-underline mb-3 md:text-[24.8px] md:tracking-[-1.55px] md:leading-[32.24px] md:mb-4">
                        <a
                          href={post.link}
                          className="box-border caret-transparent text-[22px] tracking-[-1.375px] leading-[28.6px] wrap-break-word no-underline md:text-[24.8px] md:tracking-[-1.55px] md:leading-[32.24px]"
                        >
                          {post.title}
                        </a>
                      </h4>
                      <p className="box-border caret-transparent leading-6 wrap-break-word no-underline mb-4 md:leading-6.5">
                        {post.description}
                      </p>
                    </div>
                    <div className="box-border caret-transparent min-h-0 min-w-0 wrap-break-word no-underline mt-auto rounded-b-[3px] md:min-h-auto md:min-w-auto">
                      <Link
                        href={post.link}
                        className="box-border caret-transparent text-sky-600 inline-block text-[16.8px] font-bold leading-[23.1px] wrap-break-word relative no-underline z-0 rounded-[30px] md:text-xl md:leading-[27.5px] after:accent-auto after:box-border after:caret-transparent after:text-sky-600 after:inline-block after:text-[16.8px] after:not-italic after:normal-nums after:font-black after:tracking-[normal] after:leading-[23.1px] after:list-outside after:list-disc after:wrap-break-word after:pointer-events-auto after:relative after:text-left after:no-underline after:indent-0 after:normal-case after:align-bottom after:visible after:ml-2.5 after:border-separate after:font-font_awesome_5_free after:md:text-xl after:md:leading-[27.5px]"
                      >
                        <span className="flex gap-4">
                          Explore <ArrowRightIcon/>
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Mobile Carousel */}
            <div className="box-border caret-transparent block no-underline md:hidden">
              <div className="box-border caret-transparent relative no-underline w-full">
                <div className="box-border caret-transparent no-underline overflow-hidden">
                  <ul
                    className="box-border caret-transparent flex list-none relative no-underline text-nowrap -translate-x-361 w-812.25 overflow-hidden pl-0 md:transform-none md:w-11.25"
                    style={{
                      transform: "translateX(-1444px)",
                      width: "3249px",
                    }}
                  >
                    {[...blogPosts, ...blogPosts, ...blogPosts].map(
                      (post, idx) => (
                        <li
                          key={idx}
                          className="box-border caret-transparent shrink-0 h-full min-h-auto min-w-auto no-underline w-86.25 md:min-h-0 md:min-w-0 md:w-82.5 mr-2 md:mr-3.75"
                        >
                          <div className="box-border caret-transparent flex flex-col h-full wrap-break-word relative no-underline overflow-hidden mb-7.5 py-px">
                            <div className="box-border caret-transparent shrink-0 min-h-px min-w-auto wrap-break-word no-underline md:min-w-0">
                              <Link
                                href={post.link}
                                className="bg-center bg-no-repeat bg-cover box-border caret-transparent text-sky-600 block shrink-0 h-42.5 wrap-break-word underline w-full mb-6 rounded-2xl md:h-60.75"
                                style={{
                                  backgroundImage: `url('${post.imageUrlMobile}')`,
                                }}
                              />
                              <small className="box-border caret-transparent text-slate-400 block text-sm wrap-break-word no-underline uppercase mb-2 md:mb-4">
                                {post.date}
                              </small>
                              <h4 className="box-border caret-transparent text-[22px] font-bold tracking-[-1.375px] leading-[28.6px] wrap-break-word no-underline mb-3 md:text-[24.8px] md:tracking-[-1.55px] md:leading-[32.24px] md:mb-4">
                                <a
                                  href={post.link}
                                  className="box-border caret-transparent text-[22px] tracking-[-1.375px] leading-[28.6px] wrap-break-word no-underline md:text-[24.8px] md:tracking-[-1.55px] md:leading-[32.24px]"
                                >
                                  {post.title}
                                </a>
                              </h4>
                              <p className="box-border caret-transparent leading-6 wrap-break-word no-underline mb-4 md:leading-6.5">
                                {post.description}
                              </p>
                            </div>
                            <div className="box-border caret-transparent min-h-auto min-w-auto wrap-break-word no-underline mt-auto rounded-b-[3px] md:min-h-0 md:min-w-0">
                              <Link
                                href={post.link}
                                className="box-border caret-transparent text-sky-600 inline-block text-[16.8px] font-bold leading-[23.1px] wrap-break-word relative no-underline z-0 rounded-[30px] md:text-xl md:leading-[27.5px] after:accent-auto after:box-border after:caret-transparent after:text-sky-600 after:inline-block after:text-[16.8px] after:not-italic after:normal-nums after:font-black after:tracking-[normal] after:leading-[23.1px] after:list-outside after:list-none after:wrap-break-word after:pointer-events-auto after:relative after:text-left after:no-underline after:indent-0 after:normal-case after:align-bottom after:visible after:ml-2.5 after:border-separate after:font-font_awesome_5_free after:md:text-xl after:md:leading-[27.5px]"
                              >
                                Explore
                              </Link>
                            </div>
                          </div>
                        </li>
                      ),
                    )}
                  </ul>
                </div>

                {/* Dot indicators without borders/outlines */}
                <div className="bg-slate-100 box-border caret-transparent inline-flex list-none relative no-underline translate-x-[-50.0%] z-2 rounded-[18px] left-2/4 md:transform-none">
                  <button className="bg-neutral-300 caret-transparent text-black block h-1 leading-0 min-h-auto min-w-auto text-center no-underline w-8 mx-1.5 p-0 rounded-[40px] md:min-h-0 md:min-w-0"></button>
                  <button className="bg-blue-950 caret-transparent text-black block h-1 leading-0 min-h-auto min-w-auto text-center no-underline w-8 mx-1.5 p-0 rounded-[40px] md:min-h-0 md:min-w-0"></button>
                  <button className="bg-neutral-300 caret-transparent text-black block h-1 leading-0 min-h-auto min-w-auto text-center no-underline w-8 mx-1.5 p-0 rounded-[40px] md:min-h-0 md:min-w-0"></button>
                </div>
              </div>
            </div>

            {/* Read more button */}
            <div className="box-border caret-transparent flex flex-wrap justify-center -ml-3.75 -mr-3.75 text-center no-underline mt-6">
              <a
                href="/resources"
                className="bg-[linear-gradient(108.35deg,rgb(0,6,22)_-131.5%,rgb(5,66,160)_162.36%)] box-border caret-transparent text-white block font-bold leading-[22.4px] min-h-auto min-w-39.5 relative no-underline z-0 px-7 py-2.5 rounded-[30px]"
              >
                Read more
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestNewsInsights;
