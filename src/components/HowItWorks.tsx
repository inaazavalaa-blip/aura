"use client";

import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

interface HowItWorksProps {
  onOpenTalk: () => void;
}

export default function HowItWorks({ onOpenTalk }: HowItWorksProps) {
  const steps = [
    {
      number: "Step 01",
      title: "Complimentary Discovery Call",
      description:
        "A 20-minute private video session to discuss your lifestyle, challenges, and determine which service best fits your goals.",
    },
    {
      number: "Step 02",
      title: "Interactive Studio or Home Session",
      description:
        "We delve into hands-on drapery, closet editing, or curated shopping with focused attention and zero judgment.",
    },
    {
      number: "Step 03",
      title: "Your Digital Lookbook & Guidance",
      description:
        "Access your custom outfits, styling combinations, and curated shopping links anytime from your mobile device.",
    },
  ];

  return (
    <section id="how-it-works" className="bg-[#F2F7FA] py-20 lg:py-28 border-b border-[#D8E4EC]/60">
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
              The Experience
            </span>
          </div>

          <div className="text-xs sm:text-sm font-sans font-medium tracking-widest text-[#546b7f]">
            04 / 04
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pt-12 lg:pt-16 items-center">
          {/* Left Column: The 3 Practical Steps */}
          <div className="lg:col-span-6 space-y-10">
            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-[1.12] text-[#122130] mb-4">
                Effortless elegance, step by step.
              </h2>
              <p className="text-[#415566] text-base leading-relaxed">
                A seamless, stress-free path designed to respect your schedule and provide lifelong clarity.
              </p>
            </div>

            <div className="space-y-8">
              {steps.map((st) => (
                <div key={st.number} className="relative pl-8 border-l border-[#cfdde6]">
                  <span className="absolute -left-[5px] top-1 w-2.5 h-2.5 rounded-full bg-[#5d8197]" />
                  <span className="text-xs font-mono uppercase tracking-wider text-[#5d8197] font-semibold">
                    {st.number}
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-[#122130] mt-1 mb-2">
                    {st.title}
                  </h3>
                  <p className="text-[#415566] text-sm sm:text-base leading-relaxed">
                    {st.description}
                  </p>
                </div>
              ))}
            </div>

            <div className="pt-2">
              <button
                onClick={onOpenTalk}
                className="inline-flex items-center gap-2 bg-[#122130] text-white px-7 py-3 rounded-full text-sm font-medium tracking-wide hover:bg-[#20364b] transition-all duration-200 group"
              >
                <span>Schedule a conversation</span>
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </div>
          </div>

          {/* Right Column: Editorial Visual & Testimonial */}
          <div className="lg:col-span-6 flex flex-col gap-8">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden shadow-xl">
              <Image
                src="/images/wardrobe.jpg"
                alt="Curated minimalist luxury wardrobe"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover object-center"
              />
            </div>

            {/* Testimonial Quote */}
            <div className="bg-white p-8 rounded-sm border border-[#D8E4EC] shadow-sm">
              <p className="font-serif italic text-lg sm:text-xl text-[#122130] leading-relaxed mb-4">
                &ldquo;Working with Aura shifted how I experience my mornings.
                I no longer stare at my closet feeling overwhelmed. I finally look in the
                mirror and see someone who feels genuinely like me.&rdquo;
              </p>
              <div className="flex items-center justify-between text-xs text-[#546b7f]">
                <span className="font-semibold uppercase tracking-wider text-[#122130]">
                  Valeria C.
                </span>
                <span>Founder & Creative Strategist</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
