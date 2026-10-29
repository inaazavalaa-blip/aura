"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { GenderMode, SiteContent } from "@/types/content";

interface NavbarProps {
  mode: GenderMode;
  onToggleMode: (newMode: GenderMode) => void;
  data: SiteContent;
  onOpenTalk: () => void;
}

export default function Navbar({
  mode,
  onToggleMode,
  data,
  onOpenTalk,
}: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      style={{
        backgroundColor: isScrolled ? "var(--nav-backdrop)" : "var(--bg-primary)",
        borderBottomColor: isScrolled ? "var(--border-light)" : "transparent",
      }}
      className={`sticky top-0 z-40 transition-all duration-500 ${
        isScrolled ? "backdrop-blur-md py-3.5 shadow-sm border-b" : "py-5 border-b"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span
            style={{ color: "var(--text-main)" }}
            className="font-serif text-3xl sm:text-[34px] font-normal tracking-tight leading-none transition-colors duration-500"
          >
            {data.brand.name}
          </span>
          <div
            style={{
              borderColor: "var(--border-separator)",
              color: "var(--text-muted)",
            }}
            className="flex flex-col text-[8px] sm:text-[8.5px] font-sans font-semibold tracking-[0.25em] leading-[1.15] border-l pl-2.5 py-0.5 uppercase transition-colors duration-500"
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
        </a>

        {/* Center: Dynamic Mode Switcher (MUJER / HOMBRE) */}
        <div
          style={{
            backgroundColor: "var(--bg-subtle)",
            borderColor: "var(--border-light)",
          }}
          className="flex items-center p-1 rounded-full border transition-all duration-500 shadow-inner"
        >
          <button
            onClick={() => onToggleMode("women")}
            style={{
              backgroundColor:
                mode === "women" ? "var(--btn-bg)" : "transparent",
              color:
                mode === "women" ? "var(--btn-text)" : "var(--text-muted)",
            }}
            className="px-3.5 py-1 text-xs font-sans uppercase tracking-widest font-semibold rounded-full transition-all duration-300 cursor-pointer"
          >
            Mujer
          </button>
          <button
            onClick={() => onToggleMode("men")}
            style={{
              backgroundColor:
                mode === "men" ? "var(--btn-bg)" : "transparent",
              color:
                mode === "men" ? "var(--btn-text)" : "var(--text-muted)",
            }}
            className="px-3.5 py-1 text-xs font-sans uppercase tracking-widest font-semibold rounded-full transition-all duration-300 cursor-pointer"
          >
            Hombre
          </button>
        </div>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-[14px] font-normal tracking-wide">
          <a
            href="#approach"
            style={{ color: "var(--text-muted)" }}
            className="hover:opacity-100 transition-opacity relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all"
          >
            {data.nav.approach}
          </a>
          <a
            href="#services"
            style={{ color: "var(--text-muted)" }}
            className="hover:opacity-100 transition-opacity relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all"
          >
            {data.nav.services}
          </a>
          <a
            href="#how-it-works"
            style={{ color: "var(--text-muted)" }}
            className="hover:opacity-100 transition-opacity relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-current hover:after:w-full after:transition-all"
          >
            {data.nav.howItWorks}
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenTalk}
            style={{ color: "var(--text-main)" }}
            className="inline-flex items-center gap-1.5 text-[14.5px] font-medium transition-colors group cursor-pointer hover:opacity-80"
          >
            <span>{data.nav.cta}</span>
            <ArrowUpRight
              style={{ color: "var(--color-accent)" }}
              className="w-4 h-4 stroke-[2] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          style={{ color: "var(--text-main)" }}
          className="md:hidden p-2 focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div
          style={{
            backgroundColor: "var(--bg-primary)",
            borderColor: "var(--border-light)",
          }}
          className="md:hidden border-b px-6 py-6 space-y-4 animate-mode-switch shadow-xl"
        >
          {/* Mobile gender toggle */}
          <div className="flex items-center justify-between pb-3 border-b border-white/10">
            <span
              style={{ color: "var(--text-muted)" }}
              className="text-xs font-sans uppercase tracking-widest font-medium"
            >
              Colección
            </span>
            <div
              style={{
                backgroundColor: "var(--bg-subtle)",
                borderColor: "var(--border-light)",
              }}
              className="flex items-center p-1 rounded-full border"
            >
              <button
                onClick={() => {
                  onToggleMode("women");
                  setMobileMenuOpen(false);
                }}
                style={{
                  backgroundColor:
                    mode === "women" ? "var(--btn-bg)" : "transparent",
                  color:
                    mode === "women" ? "var(--btn-text)" : "var(--text-muted)",
                }}
                className="px-3 py-1 text-xs uppercase font-medium rounded-full"
              >
                Mujer
              </button>
              <button
                onClick={() => {
                  onToggleMode("men");
                  setMobileMenuOpen(false);
                }}
                style={{
                  backgroundColor:
                    mode === "men" ? "var(--btn-bg)" : "transparent",
                  color:
                    mode === "men" ? "var(--btn-text)" : "var(--text-muted)",
                }}
                className="px-3 py-1 text-xs uppercase font-medium rounded-full"
              >
                Hombre
              </button>
            </div>
          </div>

          <a
            href="#approach"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "var(--text-main)" }}
            className="block text-base font-medium py-1.5"
          >
            {data.nav.approach}
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "var(--text-main)" }}
            className="block text-base font-medium py-1.5"
          >
            {data.nav.services}
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            style={{ color: "var(--text-main)" }}
            className="block text-base font-medium py-1.5"
          >
            {data.nav.howItWorks}
          </a>
          <div
            style={{ borderColor: "var(--border-light)" }}
            className="pt-3 border-t"
          >
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTalk();
              }}
              style={{ color: "var(--color-accent)" }}
              className="inline-flex items-center gap-1.5 text-base font-semibold"
            >
              <span>{data.nav.cta}</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
