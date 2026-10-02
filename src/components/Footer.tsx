"use client";

import { ArrowUpRight } from "lucide-react";

interface FooterProps {
  onOpenTalk: () => void;
}

export default function Footer({ onOpenTalk }: FooterProps) {
  return (
    <footer className="bg-[#122130] text-[#EAF1F5] pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Call to Action Banner */}
        <div className="pb-16 border-b border-[#2A3C4D] flex flex-col md:flex-row md:items-end justify-between gap-8">
          <div>
            <span className="text-xs uppercase font-sans tracking-[0.25em] text-[#8ca2b3] block mb-3 font-medium">
              Start Your Evolution
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              Ready to meet the version of you that{" "}
              <span className="italic text-[#9ec4db]">feels like home</span>?
            </h2>
          </div>
          <button
            onClick={onOpenTalk}
            className="inline-flex items-center gap-2 bg-[#F2F7FA] text-[#122130] px-8 py-3.5 rounded-full text-sm font-medium tracking-wide hover:bg-white transition-all shadow-md group shrink-0 cursor-pointer"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Links & Studio Info */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-b border-[#2A3C4D]">
          {/* Logo & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white leading-none">
                aura
              </span>
              <div className="flex flex-col text-[8.5px] font-sans font-semibold tracking-[0.25em] text-[#8ca2b3] leading-[1.1] border-l border-[#2A3C4D] pl-2.5 py-0.5 uppercase">
                <span>IMAGE</span>
                <span>STUDIO</span>
              </div>
            </div>
            <p className="text-[#8ca2b3] text-sm leading-relaxed max-w-sm pt-2">
              A bespoke personal image consulting practice devoted to helping you step into your style with authenticity, grace, and effortless precision.
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-widest text-white font-semibold mb-4">
              Explore
            </h4>
            <ul className="space-y-2.5 text-sm text-[#8ca2b3]">
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  Beyond Clothing
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">
                  The Methodology
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  Curated Services
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  The Experience
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Presence */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-widest text-white font-semibold mb-4">
              Studio & Inquiries
            </h4>
            <p className="text-sm text-[#8ca2b3] leading-relaxed">
              Private Studio Sessions & Worldwide Virtual Consultations
            </p>
            <p className="text-sm text-[#9ec4db]">
              hello@auraimagestudio.com
            </p>
            <div className="flex items-center gap-5 pt-3 text-xs tracking-wider uppercase text-[#8ca2b3]">
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-[#647b8f] gap-4">
          <p>© {new Date().getFullYear()} aura IMAGE STUDIO. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
