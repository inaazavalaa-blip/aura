"use client";

import { useState, useEffect } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenTalk: () => void;
}

export default function Navbar({ onOpenTalk }: NavbarProps) {
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
      className={`sticky top-0 z-40 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F2F7FA]/90 backdrop-blur-md border-b border-[#D8E4EC] py-3.5 shadow-sm"
          : "bg-[#F2F7FA] py-5 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex items-center justify-between">
        {/* Brand Logo */}
        <a href="#" className="flex items-center gap-2.5 group">
          <span className="font-serif text-3xl sm:text-[34px] font-normal tracking-tight text-[#122130] leading-none">
            aura
          </span>
          <div className="flex flex-col text-[8.5px] font-sans font-semibold tracking-[0.25em] text-[#546b7f] leading-[1.1] border-l border-[#cfdde6] pl-2.5 py-0.5 uppercase">
            <span>IMAGE</span>
            <span>STUDIO</span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex items-center gap-10 text-[14px] font-normal tracking-wide text-[#34485a]">
          <a
            href="#approach"
            className="hover:text-[#122130] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#122130] hover:after:w-full after:transition-all"
          >
            My approach
          </a>
          <a
            href="#services"
            className="hover:text-[#122130] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#122130] hover:after:w-full after:transition-all"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            className="hover:text-[#122130] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[1px] after:bg-[#122130] hover:after:w-full after:transition-all"
          >
            How it works
          </a>
        </nav>

        {/* Right CTA */}
        <div className="hidden md:flex items-center gap-4">
          <button
            onClick={onOpenTalk}
            className="inline-flex items-center gap-1.5 text-[14.5px] font-medium text-[#122130] hover:text-[#5b7f95] transition-colors group cursor-pointer"
          >
            <span>Let&apos;s talk</span>
            <ArrowUpRight className="w-4 h-4 stroke-[1.75] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-[#122130] group-hover:text-[#5b7f95]" />
          </button>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden p-2 text-[#122130] focus:outline-none"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F2F7FA] border-b border-[#D8E4EC] px-6 py-6 space-y-4 animate-fade-in shadow-lg">
          <a
            href="#approach"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-[#122130] font-medium py-1.5"
          >
            My approach
          </a>
          <a
            href="#services"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-[#122130] font-medium py-1.5"
          >
            Services
          </a>
          <a
            href="#how-it-works"
            onClick={() => setMobileMenuOpen(false)}
            className="block text-base text-[#122130] font-medium py-1.5"
          >
            How it works
          </a>
          <div className="pt-3 border-t border-[#D8E4EC]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenTalk();
              }}
              className="inline-flex items-center gap-1.5 text-base font-semibold text-[#122130] hover:text-[#5b7f95]"
            >
              <span>Let&apos;s talk</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
