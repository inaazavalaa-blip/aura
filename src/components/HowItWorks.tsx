"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteContent } from "@/types/content";

interface HowItWorksProps {
  data: SiteContent;
  onOpenTalk: () => void;
}

export default function HowItWorks({ data, onOpenTalk }: HowItWorksProps) {
  return (
    <section
      id="how-it-works"
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottomColor: "var(--border-light)",
      }}
      className="py-20 lg:py-28 border-b transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 animate-mode-switch">
        {/* Section Header */}
        <div
          style={{ borderColor: "var(--border-separator)" }}
          className="pb-4 border-b flex items-center justify-between transition-colors duration-500"
        >
          <div className="flex items-center gap-2.5">
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
              {data.experience.category}
            </span>
          </div>

          <div
            style={{ color: "var(--text-dim)" }}
            className="text-xs sm:text-sm font-sans font-medium tracking-widest transition-colors duration-500"
          >
            {data.experience.index}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 lg:pt-16 items-center">
          {/* Left Column: The 3 Practical Steps */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <h2
                style={{ color: "var(--text-main)" }}
                className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] mb-4 transition-colors duration-500"
              >
                {data.experience.title}
              </h2>
              <p
                style={{ color: "var(--text-muted)" }}
                className="text-base leading-relaxed transition-colors duration-500"
              >
                {data.experience.intro}
              </p>
            </div>

            <div className="space-y-8">
              {data.experience.steps.map((st) => (
                <div
                  key={st.number}
                  style={{ borderColor: "var(--border-separator)" }}
                  className="relative pl-8 border-l transition-colors duration-500"
                >
                  <span
                    style={{ backgroundColor: "var(--color-accent)" }}
                    className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full transition-colors duration-500"
                  />
                  <span
                    style={{ color: "var(--color-accent)" }}
                    className="text-xs font-mono uppercase tracking-wider font-semibold transition-colors duration-500"
                  >
                    {st.number}
                  </span>
                  <h3
                    style={{ color: "var(--text-main)" }}
                    className="font-serif text-xl sm:text-2xl mt-1 mb-2 transition-colors duration-500"
                  >
                    {st.title}
                  </h3>
                  <p
                    style={{ color: "var(--text-muted)" }}
                    className="text-sm sm:text-base leading-relaxed transition-colors duration-500"
                  >
                    {st.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTalk}
                style={{
                  backgroundColor: "var(--btn-bg)",
                  color: "var(--btn-text)",
                }}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-full text-sm font-medium tracking-wide transition-all duration-300 shadow-md group cursor-pointer hover:opacity-90"
              >
                <span>{data.experience.cta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual & Testimonial */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div
              style={{ borderColor: "var(--border-light)" }}
              className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl border transition-colors duration-500"
            >
              <Image
                key={data.experience.imageSrc}
                src={data.experience.imageSrc}
                alt={data.experience.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
            </div>

            {/* Testimonial Quote */}
            <div
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor: "var(--border-light)",
              }}
              className="p-8 rounded-sm border shadow-sm transition-colors duration-500"
            >
              <p
                style={{ color: "var(--text-main)" }}
                className="font-serif italic text-lg sm:text-xl leading-relaxed mb-4 transition-colors duration-500"
              >
                &ldquo;{data.experience.quote}&rdquo;
              </p>
              <div
                style={{ color: "var(--text-dim)" }}
                className="flex items-center justify-between text-xs transition-colors duration-500"
              >
                <span
                  style={{ color: "var(--color-accent)" }}
                  className="font-semibold uppercase tracking-wider transition-colors duration-500"
                >
                  {data.experience.authorName}
                </span>
                <span>{data.experience.authorRole}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
