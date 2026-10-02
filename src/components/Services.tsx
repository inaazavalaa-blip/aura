"use client";

import { ArrowUpRight, Check } from "lucide-react";

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export default function Services({ onSelectService }: ServicesProps) {
  const services = [
    {
      id: "signature",
      title: "The Signature Transformation",
      tag: "Most Comprehensive",
      desc: "An all-inclusive styling mentorship that completely elevates your personal brand and brings clarity to your daily wardrobe.",
      duration: "4 Weeks Experience",
      format: "In-Person or Hybrid",
      features: [
        "In-depth Style Identity & Lifestyle Audit",
        "Full Seasonal Color Palette & Fabric Guide",
        "Complete Closet Detox & Organization",
        "Private Guided Personal Shopping Curation",
        "40+ Customized Outfits Digital Lookbook",
        "30 Days of On-Demand WhatsApp Styling Support",
      ],
    },
    {
      id: "wardrobe",
      title: "Wardrobe Detox & Capsule Edit",
      tag: "High Impact",
      desc: "Turn your overflowing closet into an inspiring sanctuary with curated outfits using what you already love and wear.",
      duration: "Full Day Intensive",
      format: "In-Home Studio",
      features: [
        "Closet assessment & mindful decluttering",
        "Fit, tailoring, and silhouette evaluation",
        "20+ effortless ready-to-wear outfit formulas",
        "Targeted shopping wishlist for missing key pieces",
        "Digitized outfit album on your phone",
      ],
    },
    {
      id: "color",
      title: "Colorimetry & Body Architecture",
      tag: "Studio Signature",
      desc: "Master your palette. Understand the shades, contrast levels, and garment proportions that illuminate your natural glow.",
      duration: "3-Hour Session",
      format: "Private Studio",
      features: [
        "Seasonal fabric drapery test",
        "Skin undertone, eye, and hair harmonization",
        "Custom pocket color swatch fan to keep",
        "Jewelry metal tones & makeup shade advice",
        "Silhouette & neckline architecture guide",
      ],
    },
  ];

  return (
    <section id="services" className="bg-[#F2F7FA] py-20 lg:py-28 border-b border-[#D8E4EC]/60">
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
              Curated Services
            </span>
          </div>

          <div className="text-xs sm:text-sm font-sans font-medium tracking-widest text-[#546b7f]">
            03 / 04
          </div>
        </div>

        {/* Section Intro */}
        <div className="pt-12 lg:pt-16 pb-14 max-w-3xl">
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] text-[#122130] mb-4">
            Consulting experiences crafted to elevate your daily confidence.
          </h2>
          <p className="text-[#415566] text-base sm:text-lg leading-relaxed font-normal">
            Whether you need a complete style revitalization or a tailored color consultation,
            every service is conducted with care, warmth, and discretion.
          </p>
        </div>

        {/* 3 Services Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => (
            <div
              key={service.id}
              className={`bg-white rounded-md p-8 sm:p-10 flex flex-col justify-between border transition-all duration-300 hover:shadow-xl ${
                idx === 0
                  ? "border-[#5d8197]/40 ring-1 ring-[#5d8197]/20 relative"
                  : "border-[#D8E4EC]/80 hover:border-[#5d8197]/40"
              }`}
            >
              <div>
                {/* Badge Tag */}
                <div className="flex items-center justify-between mb-6">
                  <span className="text-[11px] font-sans font-semibold uppercase tracking-wider text-[#5d8197] bg-[#F2F7FA] px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                  <span className="text-xs font-mono text-[#647b8f]">
                    {service.duration}
                  </span>
                </div>

                {/* Service Title */}
                <h3 className="font-serif text-2xl sm:text-3xl text-[#122130] font-light leading-snug mb-4">
                  {service.title}
                </h3>

                <p className="text-[#415566] text-sm leading-relaxed mb-8">
                  {service.desc}
                </p>

                {/* Features List */}
                <ul className="space-y-3 pt-4 border-t border-[#F2F7FA] mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#2c3e50]">
                      <Check className="w-4 h-4 text-[#5d8197] shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-[#F2F7FA]">
                <button
                  onClick={() => onSelectService(service.title)}
                  className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full text-sm font-medium transition-all duration-200 border border-[#122130] text-[#122130] hover:bg-[#122130] hover:text-white group cursor-pointer"
                >
                  <span>Inquire for this service</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
