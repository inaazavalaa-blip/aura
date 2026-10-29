"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GenderMode, SiteContent } from "@/types/content";

interface HeroProps {
  mode: GenderMode;
  onToggleMode: (newMode: GenderMode) => void;
  data: SiteContent;
  onOpenTalk: () => void;
}

export default function Hero({
  mode,
  onToggleMode,
  data,
  onOpenTalk,
}: HeroProps) {
  return (
    <section
      style={{
        backgroundColor: "var(--bg-primary)",
        borderBottomColor: "var(--border-light)",
      }}
      className="relative overflow-hidden pt-6 pb-16 lg:py-16 border-b transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center min-h-[580px]">
          {/* Left Column: Editorial Headline & Copy */}
          <div className="lg:col-span-7 flex flex-col justify-center pr-0 lg:pr-8 z-10 animate-mode-switch">
            {/* Category / Eyebrow */}
            <div className="flex items-center gap-2.5 mb-6 sm:mb-8">
              <span
                style={{ backgroundColor: "var(--color-accent)" }}
                className="w-6 h-[1.5px] inline-block transition-colors duration-500"
              />
              <span
                style={{ color: "var(--text-dim)" }}
                className="text-[11px] sm:text-xs font-sans uppercase font-medium tracking-[0.25em] transition-colors duration-500"
              >
                {data.hero.kicker}
              </span>
            </div>

            {/* Main Editorial Headline */}
            <h1
              style={{ color: "var(--text-main)" }}
              className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-[5.3rem] font-light leading-[1.03] tracking-tight mb-8 transition-colors duration-500"
            >
              <span className="block">{data.hero.titleLine1}</span>
              <span className="block">{data.hero.titleLine2}</span>
              <span
                style={{ color: "var(--color-accent)" }}
                className="block font-normal transition-colors duration-500"
              >
                {data.hero.titleHighlight}
              </span>
            </h1>

            {/* Subtext Description */}
            <p
              style={{ color: "var(--text-muted)" }}
              className="text-base sm:text-lg lg:text-[1.125rem] font-normal leading-relaxed max-w-lg mb-8 transition-colors duration-500"
            >
              {data.hero.description}
            </p>

            {/* Quick Mode Explorer Tag */}
            <div className="mb-10 flex items-center gap-3">
              <span
                style={{ color: "var(--text-dim)" }}
                className="text-xs uppercase tracking-wider font-medium"
              >
                Ver propuesta:
              </span>
              <button
                onClick={() => onToggleMode(mode === "women" ? "men" : "women")}
                style={{
                  backgroundColor: "var(--tag-bg)",
                  color: "var(--tag-text)",
                  borderColor: "var(--border-light)",
                }}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium border hover:opacity-80 transition-all cursor-pointer"
              >
                <Sparkles className="w-3 h-3" />
                <span>
                  {mode === "women"
                    ? "Cambiar a Colección Hombres (Aura Homme) ↗"
                    : "Cambiar a Colección Mujeres (Atelier Mujer) ↗"}
                </span>
              </button>
            </div>

            {/* CTA Actions */}
            <div className="flex flex-wrap items-center gap-6">
              <button
                onClick={onOpenTalk}
                style={{
                  backgroundColor: "var(--btn-bg)",
                  color: "var(--btn-text)",
                }}
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-sm font-medium tracking-wide transition-all duration-300 shadow-md group cursor-pointer hover:opacity-90"
              >
                <span>{data.hero.primaryCta}</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>

              <a
                href="#approach"
                style={{ color: "var(--text-main)" }}
                className="inline-flex items-center gap-1.5 text-sm font-medium relative after:content-[''] after:absolute after:bottom-[-2px] after:left-0 after:w-full after:h-[1px] after:bg-current transition-colors"
              >
                <span>{data.hero.secondaryCta}</span>
              </a>
            </div>

            {/* Counter footnote */}
            <div className="pt-10">
              <span
                style={{ color: "var(--text-dim)" }}
                className="text-xs font-mono tracking-widest uppercase"
              >
                {data.hero.counterText}
              </span>
            </div>
          </div>

          {/* Right Column: Editorial Hero Photograph */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end animate-mode-switch">
            <div
              style={{ borderColor: "var(--border-light)" }}
              className="relative w-full max-w-[480px] aspect-[4/5] overflow-hidden shadow-2xl rounded-sm border transition-all duration-500"
            >
              <Image
                key={data.hero.imageSrc}
                src={data.hero.imageSrc}
                alt={data.hero.imageAlt}
                fill
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 480px"
                className="object-cover object-center transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 ring-1 ring-black/5 pointer-events-none" />

              {/* Floating Architectural Badge (from Figma mockup) */}
              <div
                style={{
                  backgroundColor: "var(--badge-bg)",
                  color: "var(--badge-text)",
                  borderColor: "var(--badge-border)",
                }}
                className="absolute bottom-5 left-5 right-5 sm:right-auto px-4 py-2.5 rounded-sm border shadow-lg backdrop-blur-md text-[10px] sm:text-[11px] font-sans font-semibold tracking-[0.2em] uppercase transition-colors duration-500"
              >
                {data.hero.badgeText}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
