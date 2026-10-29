"use client";

import { ArrowUpRight, Check } from "lucide-react";
import { SiteContent } from "@/types/content";

interface ServicesProps {
  data: SiteContent;
  onSelectService: (serviceName: string) => void;
}

export default function Services({ data, onSelectService }: ServicesProps) {
  return (
    <section
      id="services"
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
              {data.services.category}
            </span>
          </div>

          <div
            style={{ color: "var(--text-dim)" }}
            className="text-xs sm:text-sm font-sans font-medium tracking-widest transition-colors duration-500"
          >
            {data.services.index}
          </div>
        </div>

        {/* Section Intro */}
        <div className="pt-12 lg:pt-16 pb-14 max-w-3xl">
          <h2
            style={{ color: "var(--text-main)" }}
            className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] mb-4 transition-colors duration-500"
          >
            {data.services.title}
          </h2>
          <p
            style={{ color: "var(--text-muted)" }}
            className="text-base sm:text-lg leading-relaxed font-normal transition-colors duration-500"
          >
            {data.services.intro}
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.services.items.map((service, idx) => (
            <div
              key={service.id}
              style={{
                backgroundColor: "var(--bg-card)",
                borderColor:
                  idx === 0 ? "var(--color-accent)" : "var(--border-light)",
              }}
              className="rounded-md p-8 sm:p-10 flex flex-col justify-between border transition-all duration-300 hover:shadow-2xl group"
            >
              <div>
                {/* Badge Tag & Duration */}
                <div className="flex items-center justify-between mb-6">
                  <span
                    style={{
                      backgroundColor: "var(--tag-bg)",
                      color: "var(--tag-text)",
                    }}
                    className="text-[11px] font-sans font-semibold uppercase tracking-wider px-3 py-1 rounded-full transition-colors duration-500"
                  >
                    {service.tag}
                  </span>
                  <span
                    style={{ color: "var(--text-dim)" }}
                    className="text-xs font-mono transition-colors duration-500"
                  >
                    {service.duration}
                  </span>
                </div>

                {/* Service Title */}
                <h3
                  style={{ color: "var(--text-main)" }}
                  className="font-serif text-2xl sm:text-3xl font-light leading-snug mb-4 transition-colors duration-500"
                >
                  {service.title}
                </h3>

                <p
                  style={{ color: "var(--text-muted)" }}
                  className="text-sm leading-relaxed mb-8 transition-colors duration-500"
                >
                  {service.desc}
                </p>

                {/* Features List */}
                <ul
                  style={{ borderColor: "var(--border-separator)" }}
                  className="space-y-3 pt-4 border-t mb-8 transition-colors duration-500"
                >
                  {service.features.map((feature, i) => (
                    <li
                      key={i}
                      style={{ color: "var(--text-main)" }}
                      className="flex items-start gap-2.5 text-xs sm:text-sm"
                    >
                      <Check
                        style={{ color: "var(--color-accent)" }}
                        className="w-4 h-4 shrink-0 mt-0.5 transition-colors duration-500"
                      />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div
                style={{ borderColor: "var(--border-separator)" }}
                className="pt-4 border-t transition-colors duration-500"
              >
                <button
                  onClick={() => onSelectService(service.title)}
                  style={{
                    borderColor: "var(--border-light)",
                    color: "var(--text-main)",
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-medium transition-all duration-200 border hover:opacity-80 group cursor-pointer"
                >
                  <span>Consultar por este servicio</span>
                  <ArrowUpRight
                    style={{ color: "var(--color-accent)" }}
                    className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
