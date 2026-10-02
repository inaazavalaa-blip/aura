"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface ApproachProps {
  onOpenTalk: () => void;
}

export default function Approach({ onOpenTalk }: ApproachProps) {
  const steps = [
    {
      num: "01",
      title: "Essence & Discovery",
      desc: "An intimate consultation exploring your routine, personal tastes, aspirations, and how you genuinely want to feel when showing up in the world.",
    },
    {
      num: "02",
      title: "Colorimetry & Harmony",
      desc: "A bespoke seasonal color study that unveils which palettes enhance your complexion, eyes, and hair with natural radiance.",
    },
    {
      num: "03",
      title: "Wardrobe Architecture",
      desc: "A mindful closet edit to eliminate decision fatigue, repurpose cherished pieces, and create versatile outfit formulas for every day.",
    },
    {
      num: "04",
      title: "The Lookbook Blueprint",
      desc: "Your customized digital dossier containing styled looks, curated shopping guidance, and lifetime styling principles.",
    },
  ];

  return (
    <section id="methodology" className="bg-[#F2F7FA] py-20 lg:py-28 border-b border-[#D8E4EC]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Section Header */}
        <div className="pb-4 border-b border-[#CCDCE6] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <svg
              className="w-3.5 h-3.5 text-[#546b7f]"
              viewBox="0 0 24 24"
              fill="currentColor"
            >
              <path d="M11 2h2v6.5l4.6-4.6 1.4 1.4L14.4 10H21v2h-6.6l4.6 4.6-1.4 1.4L13 13.4V20h-2v-6.6l-4.6 4.6-1.4-1.4L9.6 12H3v-2h6.6L5 5.4l1.4-1.4L11 8.6V2z" />
            </svg>
            <span className="text-[11.5px] sm:text-xs font-sans uppercase font-semibold tracking-[0.25em] text-[#122130]">
              The Methodology
            </span>
          </div>

          <div className="text-xs sm:text-sm font-sans font-medium tracking-widest text-[#546b7f]">
            02 / 04
          </div>
        </div>

        {/* Section Title & Intro */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 pt-12 lg:pt-16 pb-12">
          <div className="lg:col-span-8">
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] text-[#122130]">
              An intentional process crafted around{" "}
              <span className="text-[#5d8197]">who you are</span>, not ephemeral trends.
            </h2>
          </div>
          <div className="lg:col-span-4 flex items-end">
            <p className="text-[#415566] text-base leading-relaxed">
              We replace guesswork and closet overwhelm with clarity, cohesion,
              and timeless self-assurance.
            </p>
          </div>
        </div>

        {/* 2-Column Grid: Image & Steps */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Editorial Visual */}
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/5] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/color-consultation.jpg"
                alt="Personal color analysis and fabric curation"
                fill
                sizes="(max-width: 1024px) 100vw, 40vw"
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 via-transparent to-transparent" />
            </div>
          </div>

          {/* Pillars List */}
          <div className="lg:col-span-7 space-y-8">
            {steps.map((step) => (
              <div
                key={step.num}
                className="group border-b border-[#CCDCE6]/80 pb-6 transition-colors hover:border-[#122130]"
              >
                <div className="flex items-baseline justify-between mb-2">
                  <span className="text-xs font-mono tracking-widest text-[#5d8197] font-medium">
                    {step.num}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-serif text-[#122130] flex-1 ml-6 group-hover:text-[#5d8197] transition-colors">
                    {step.title}
                  </h3>
                </div>
                <p className="text-[#415566] text-sm sm:text-base leading-relaxed pl-10 sm:pl-12 max-w-xl">
                  {step.desc}
                </p>
              </div>
            ))}

            <div className="pt-4 pl-10 sm:pl-12">
              <button
                onClick={onOpenTalk}
                className="inline-flex items-center gap-2 text-sm font-medium text-[#122130] hover:text-[#5d8197] transition-colors group"
              >
                <span>Learn which step to begin with</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
