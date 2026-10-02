"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, ArrowRight } from "lucide-react";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialService?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  initialService = "The Signature Transformation",
}: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(initialService);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  // Handle escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleReset = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setMessage("");
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
      {/* Dark overlay backdrop */}
      <div
        className="fixed inset-0 bg-[#122130]/60 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-xl bg-[#F2F7FA] border border-[#CCDCE6] shadow-2xl rounded-sm p-6 sm:p-10 z-10 overflow-y-auto max-h-[90vh]">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 text-[#546b7f] hover:text-[#122130] transition-colors"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div className="w-14 h-14 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl text-[#122130]">
              Inquiry Sent with Grace
            </h3>
            <p className="text-[#415566] text-base max-w-md mx-auto leading-relaxed">
              Thank you, <span className="font-medium text-[#122130]">{name || "darling"}</span>. We have received your inquiry for{" "}
              <span className="font-medium text-[#122130]">{service}</span>. Our studio will reach out to you within 24 hours to coordinate your private session.
            </p>
            <div className="pt-6">
              <button
                onClick={handleReset}
                className="bg-[#122130] text-white px-8 py-3 rounded-full text-sm font-medium hover:bg-[#20364b] transition-colors"
              >
                Back to Studio
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-4 h-[1.5px] bg-[#5d8197] inline-block"></span>
                <span className="text-[11px] font-sans uppercase tracking-[0.2em] font-medium text-[#5d8197]">
                  Let&apos;s Connect
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl text-[#122130] font-light">
                Begin Your Image Journey
              </h2>
              <p className="text-[#415566] text-sm mt-1.5 leading-relaxed">
                Leave your details below and tell us a bit about your style aspirations.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#34485a] font-medium mb-1.5">
                  Your Full Name
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Paulina García"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full bg-white border border-[#CCDCE6] rounded-sm px-4 py-2.5 text-sm text-[#122130] placeholder-[#8ca2b3] focus:outline-none focus:border-[#5d8197] focus:ring-1 focus:ring-[#5d8197] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#34485a] font-medium mb-1.5">
                  Email Address
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-white border border-[#CCDCE6] rounded-sm px-4 py-2.5 text-sm text-[#122130] placeholder-[#8ca2b3] focus:outline-none focus:border-[#5d8197] focus:ring-1 focus:ring-[#5d8197] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#34485a] font-medium mb-1.5">
                  Service of Interest
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  className="w-full bg-white border border-[#CCDCE6] rounded-sm px-4 py-2.5 text-sm text-[#122130] focus:outline-none focus:border-[#5d8197] focus:ring-1 focus:ring-[#5d8197] transition-colors"
                >
                  <option value="The Signature Transformation">
                    The Signature Transformation (4 Weeks)
                  </option>
                  <option value="Wardrobe Detox & Capsule Edit">
                    Wardrobe Detox & Capsule Edit (1 Day)
                  </option>
                  <option value="Colorimetry & Body Architecture">
                    Colorimetry & Body Architecture (Studio)
                  </option>
                  <option value="General Styling Consultation">
                    General Styling Consultation
                  </option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-sans uppercase tracking-wider text-[#34485a] font-medium mb-1.5">
                  Tell us about your style goals
                </label>
                <textarea
                  rows={3}
                  placeholder="What would you like to achieve? (e.g. career shift, closet renewal, finding my personal colors...)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full bg-white border border-[#CCDCE6] rounded-sm px-4 py-2.5 text-sm text-[#122130] placeholder-[#8ca2b3] focus:outline-none focus:border-[#5d8197] focus:ring-1 focus:ring-[#5d8197] transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#122130] text-white py-3.5 px-6 rounded-full text-sm font-medium tracking-wide hover:bg-[#20364b] transition-all duration-200 group cursor-pointer"
                >
                  <span>Send Consultation Request</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
