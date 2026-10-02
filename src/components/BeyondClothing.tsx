"use client";

import { ArrowUpRight } from "lucide-react";

export default function BeyondClothing() {
  return (
    <section id="approach" className="bg-[#F2F7FA] py-20 lg:py-28 border-b border-[#D8E4EC]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header with Indicator & Divider */}
        <div className="pb-4 border-b border-[#CCDCE6] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            {/* Eight-pointed asterisk icon */}
            <svg
              className="w-3.5 h-3.5 text-[#546b7f]"
              viewBox="0 0 24 24"
              fill="currentColor"
              stroke="none"
            >
              <path d="M11 2h2v6.5l4.6-4.6 1.4 1.4L14.4 10H21v2h-6.6l4.6 4.6-1.4 1.4L13 13.4V20h-2v-6.6l-4.6 4.6-1.4-1.4L9.6 12H3v-2h6.6L5 5.4l1.4-1.4L11 8.6V2z" />
            </svg>
            <span className="text-[11.5px] sm:text-xs font-sans uppercase font-semibold tracking-[0.25em] text-[#122130]">
              Beyond Clothing
            </span>
          </div>

          <div className="text-xs sm:text-sm font-sans font-medium tracking-widest text-[#546b7f]">
            01 / 04
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 lg:pt-16 items-start">
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-7">
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-[4.25rem] font-light leading-[1.08] text-[#122130] tracking-tight">
              The best version of you is the one that{" "}
              <span className="text-[#5d8197] font-normal">
                feels like you.
              </span>
            </h2>
          </div>

          {/* Right Column: Narrative Copy & Link */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-4">
            <p className="text-[#415566] text-base sm:text-lg leading-relaxed font-normal mb-10 lg:mb-12">
              Personal image is not about following rules or becoming someone else.
              It is about finding the point where what you see in the mirror
              reflects how you feel inside.
            </p>

            <div>
              <a
                href="#methodology"
                className="group inline-flex items-center gap-2 pb-1.5 border-b border-[#122130] hover:border-[#5d8197] transition-colors"
              >
                <span className="text-[15px] font-medium text-[#122130] group-hover:text-[#5d8197] transition-colors">
                  Discover my approach
                </span>
                <ArrowUpRight className="w-4 h-4 text-[#122130] group-hover:text-[#5d8197] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
