"use client";

import { ArrowUpRight } from "lucide-react";
import { GenderMode, SiteContent } from "@/types/content";

interface FooterProps {
  mode: GenderMode;
  data: SiteContent;
  onOpenTalk: () => void;
}

export default function Footer({ mode, data, onOpenTalk }: FooterProps) {
  return (
    <footer
      style={{
        backgroundColor: "var(--footer-bg)",
        color: "var(--footer-text)",
      }}
      className="pt-20 pb-12 transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Call to Action Banner */}
        <div
          style={{ borderColor: "var(--footer-border)" }}
          className="pb-16 border-b flex flex-col md:flex-row md:items-end justify-between gap-8"
        >
          <div>
            <span
              style={{ color: "var(--footer-muted)" }}
              className="text-xs uppercase font-sans tracking-[0.25em] block mb-3 font-medium"
            >
              {data.footer.ctaKicker}
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light text-white leading-tight">
              {data.footer.ctaHeadline}
              <span
                style={{ color: "var(--color-accent)" }}
                className="italic"
              >
                {data.footer.ctaHighlight}
              </span>
              ?
            </h2>
          </div>
          <button
            onClick={onOpenTalk}
            style={{
              backgroundColor: "var(--btn-bg)",
              color: "var(--btn-text)",
            }}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-medium tracking-wide shadow-md group shrink-0 cursor-pointer hover:opacity-90 transition-opacity"
          >
            <span>{data.footer.ctaButton}</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

        {/* Links & Studio Info */}
        <div
          style={{ borderColor: "var(--footer-border)" }}
          className="grid grid-cols-1 md:grid-cols-12 gap-12 py-16 border-b"
        >
          {/* Logo & Philosophy */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <span className="font-serif text-3xl sm:text-4xl font-normal tracking-tight text-white leading-none">
                {data.brand.name}
              </span>
              <div
                style={{ borderColor: "var(--footer-border)" }}
                className="flex flex-col text-[8.5px] font-sans font-semibold tracking-[0.25em] text-white/70 leading-[1.1] border-l pl-2.5 py-0.5 uppercase"
              >
                {mode === "women" ? (
                  <>
                    <span>ATELIER</span>
                    <span>DE IMAGEN</span>
                  </>
                ) : (
                  <>
                    <span>HOMME</span>
                    <span>SASTRERÍA</span>
                  </>
                )}
              </div>
            </div>
            <p
              style={{ color: "var(--footer-muted)" }}
              className="text-sm leading-relaxed max-w-sm pt-2"
            >
              {data.footer.description}
            </p>
          </div>

          {/* Quick Navigation */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-widest text-white font-semibold mb-4">
              Navegación
            </h4>
            <ul
              style={{ color: "var(--footer-muted)" }}
              className="space-y-2.5 text-sm"
            >
              <li>
                <a href="#approach" className="hover:text-white transition-colors">
                  {data.nav.approach}
                </a>
              </li>
              <li>
                <a href="#methodology" className="hover:text-white transition-colors">
                  La Metodología
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">
                  {data.nav.services}
                </a>
              </li>
              <li>
                <a href="#how-it-works" className="hover:text-white transition-colors">
                  {data.nav.howItWorks}
                </a>
              </li>
            </ul>
          </div>

          {/* Studio Presence */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-sans uppercase tracking-widest text-white font-semibold mb-4">
              Atelier & Contacto
            </h4>
            <p
              style={{ color: "var(--footer-muted)" }}
              className="text-sm leading-relaxed"
            >
              Sesiones Privadas en Estudio & Asesoría Virtual Internacional
            </p>
            <p
              style={{ color: "var(--color-accent)" }}
              className="text-sm font-medium"
            >
              hello@auraimagestudio.com
            </p>
            <div
              style={{ color: "var(--footer-muted)" }}
              className="flex items-center gap-5 pt-3 text-xs tracking-wider uppercase"
            >
              <a href="#" className="hover:text-white transition-colors">Instagram</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">Pinterest</a>
              <span>·</span>
              <a href="#" className="hover:text-white transition-colors">LinkedIn</a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div
          style={{ color: "var(--footer-muted)" }}
          className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs gap-4"
        >
          <p>© {new Date().getFullYear()} aura IMAGE STUDIO. Todos los derechos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white transition-colors">Privacidad</a>
            <a href="#" className="hover:text-white transition-colors">Términos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
