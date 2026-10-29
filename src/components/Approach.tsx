"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { SiteContent } from "@/types/content";

interface ApproachProps {
  data: SiteContent;
  onOpenTalk: () => void;
}

export default function Approach({ data, onOpenTalk }: ApproachProps) {
  return (
    <section
      id="methodology"
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
              {data.approach.category}
            </span>
          </div>

          <div
            style={{ color: "var(--text-dim)" }}
            className="text-xs sm:text-sm font-sans font-medium tracking-widest transition-colors duration-500"
          >
            {data.approach.index}
          </div>
        </div>

        {/* Section Title & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-12 lg:pt-16 pb-12">
          <div className="lg:col-span-8">
            <h2
              style={{ color: "var(--text-main)" }}
              className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] transition-colors duration-500"
            >
              {data.approach.title}
              <span
                style={{ color: "var(--color-accent)" }}
                className="font-normal transition-colors duration-500"
              >
                {data.approach.highlight}
              </span>
              {data.approach.titleEnd}
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p
              style={{ color: "var(--text-muted)" }}
              className="text-base leading-relaxed transition-colors duration-500"
            >
              {data.approach.intro}
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Image & Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Visual */}
          <div className="lg:col-span-5">
            <div
              style={{ borderColor: "var(--border-light)" }}
              className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl border transition-colors duration-500"
            >
              <Image
                key={data.approach.imageSrc}
                src={data.approach.imageSrc}
                alt={data.approach.imageAlt}
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-7 space-y-7">
            {data.approach.steps.map((step) => (
              <div
                key={step.num}
                style={{ borderColor: "var(--border-separator)" }}
                className="group border-b pb-5 transition-colors hover:border-current"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span
                    style={{ color: "var(--color-accent)" }}
                    className="text-xs font-mono tracking-widest font-semibold transition-colors duration-500"
                  >
                    {step.num}
                  </span>
                  <h3
                    style={{ color: "var(--text-main)" }}
                    className="text-xl sm:text-2xl font-serif flex-1 ml-6 group-hover:opacity-80 transition-opacity"
                  >
                    {step.title}
                  </h3>
                </div>
                <p
                  style={{ color: "var(--text-muted)" }}
                  className="text-sm sm:text-base leading-relaxed pl-10 sm:pl-12 max-w-xl transition-colors duration-500"
                >
                  {step.desc}
                </p>
              </div>
            ))}

            <div className="pt-4 pl-10 sm:pl-12">
              <button
                onClick={onOpenTalk}
                style={{ color: "var(--text-main)" }}
                className="inline-flex items-center gap-2 text-sm font-medium hover:opacity-80 transition-opacity group cursor-pointer"
              >
                <span>{data.approach.cta}</span>
                <ArrowUpRight
                  style={{ color: "var(--color-accent)" }}
                  className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
