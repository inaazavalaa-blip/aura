"use client";

import { ArrowUpRight } from "lucide-react";
import { SiteContent } from "@/types/content";

interface BeyondClothingProps {
  data: SiteContent;
}

export default function BeyondClothing({ data }: BeyondClothingProps) {
  return (
    <section
      id="approach"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottomColor: "var(--border-light)",
      }}
      className="py-20 lg:py-28 border-b transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 animate-mode-switch">
        {/* Section Header with Indicator & Divider */}
        <div
          style={{ borderColor: "var(--border-separator)" }}
          className="pb-4 border-b flex items-center justify-between transition-colors duration-500"
        >
          <div className="flex items-center gap-2.5">
            {/* Eight-pointed asterisk icon */}
            <svg
              style={{ color: "var(--color-accent)" }}
              className="w-3.5 h-3.5 transition-colors duration-500"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 2h2v6.5l4.6-4.6 1.4 1.4L14.4 10H21v2h-6.6l4.6 4.6-1.4 1.4L13 13.4V20h-2v-6.6l-4.6 4.6-1.4-1.4L9.6 12H3v-2h6.6L5 5.4l1.4-1.4L11 8.6V2z" />
            </svg>
            <span
              style={{ color: "var(--text-main)" }}
              className="text-[11.5px] sm:text-xs font-sans uppercase font-semibold tracking-[0.25em] transition-colors duration-500"
            >
              {data.beyond.category}
            </span>
          </div>

          <div
            style={{ color: "var(--text-dim)" }}
            className="text-xs sm:text-sm font-sans font-medium tracking-widest transition-colors duration-500"
          >
            {data.beyond.index}
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 lg:pt-16 items-start">
          {/* Left Column: Big Editorial Statement */}
          <div className="lg:col-span-7">
            <h2
              style={{ color: "var(--text-main)" }}
              className="font-serif text-4xl sm:text-5xl lg:text-[4.25rem] font-light leading-[1.08] tracking-tight transition-colors duration-500"
            >
              {data.beyond.headlineStart}
              <span
                style={{ color: "var(--color-accent)" }}
                className="font-normal transition-colors duration-500"
              >
                {data.beyond.headlineHighlight}
              </span>
            </h2>
          </div>

          {/* Right Column: Narrative Copy & Link */}
          <div className="lg:col-span-5 flex flex-col justify-between pt-2 lg:pt-4">
            <p
              style={{ color: "var(--text-muted)" }}
              className="text-base sm:text-lg leading-relaxed font-normal mb-10 lg:mb-12 transition-colors duration-500"
            >
              {data.beyond.body}
            </p>

            <div>
              <a
                href="#methodology"
                style={{
                  borderColor: "var(--text-main)",
                  color: "var(--text-main)",
                }}
                className="group inline-flex items-center gap-2 pb-1.5 border-b hover:opacity-80 transition-all"
              >
                <span className="text-[15px] font-medium">
                  {data.beyond.linkText}
                </span>
                <ArrowUpRight
                  style={{ color: "var(--color-accent)" }}
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
