"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface HeroProps {
  onOpenTalk: () => void;
}

export default function Hero({ onOpenTalk }: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-[#F2F7FA] pt-6 pb-16 lg:py-16 border-b border-[#D8E4EC]/60">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-8 z-10">
            {/* Category / Eyebrow */}
            <div className="flex items-center gap-2.5 mb-8">
              <span className="w-6 h-[1.5px] bg-[#546b7f]/70 inline-block"></span>
              <span className="text-[11.5px] sm:text-xs font-sans uppercase font-medium tracking-[0.25em] text-[#546b7f]">
                Personal Image Consulting
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.4rem] font-light leading-[1.03] text-[#122130] tracking-tight mb-8">
              <span className="block">Your style.</span>
              <span className="block">Your story.</span>
              <span className="block text-[#5d8197] font-normal">
                Your moment.
              </span>
            </h1>

            {/* Subtext Description */}
            <p className="text-[#415566] text-base sm:text-lg lg:text-[1.125rem] font-normal leading-relaxed max-w-lg mb-10">
              Getting dressed should make you feel more like yourself, not less.
              Discover an approach to your image that begins with getting to know you.
            </p>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenTalk}
                className="inline-flex items-center gap-2 bg-[#122130] text-white px-7 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-[#20364b] transition-all duration-200 shadow-sm group cursor-pointer"
              >
                <span>Book a Consultation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#approach"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[#122130] hover:text-[#5d8197] transition-colors relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-[#122130] hover:after:bg-[#5d8197]"
              >
                <span>Read my philosophy</span>
              </a>
            </div>
          </div>

          {/* Right Column: Editorial Hero Photograph */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[459/525] overflow-hidden shadow-2xl rounded-sm">
              <Image
                src="/images/hero-model.png"
                alt="Aura Image Studio - Personal Image Consulting"
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
