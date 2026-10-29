"use client";

import { useState, useEffect } from "react";
import { X, CheckCircle, ArrowRight } from "lucide-react";
import { SiteContent } from "@/types/content";

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  data: SiteContent;
  initialService?: string;
}

export default function ContactModal({
  isOpen,
  onClose,
  data,
  initialService,
}: ContactModalProps) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [service, setService] = useState(
    initialService || data.modal.services[0] || ""
  );
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
        className="fixed inset-0 bg-black/70 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        style={{
          backgroundColor: "var(--bg-primary)",
          borderColor: "var(--border-light)",
          color: "var(--text-main)",
        }}
        className="relative w-full max-w-xl border shadow-2xl rounded-sm p-6 sm:p-10 z-10 overflow-y-auto max-h-[90vh] transition-colors duration-500"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{ color: "var(--text-muted)" }}
          className="absolute top-6 right-6 p-2 hover:opacity-100 transition-opacity"
          aria-label="Cerrar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10 space-y-4">
            <div
              style={{
                backgroundColor: "var(--tag-bg)",
                color: "var(--color-accent)",
              }}
              className="w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4"
            >
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-serif text-3xl">
              Solicitud Recibida con Éxito
            </h3>
            <p
              style={{ color: "var(--text-muted)" }}
              className="text-base max-w-md mx-auto leading-relaxed"
            >
              Gracias, <span className="font-medium text-current">{name || "estimado/a"}</span>. Hemos registrado tu interés en{" "}
              <span className="font-medium text-current">{service}</span>. Nuestro atelier te contactará en menos de 24 horas para coordinar tu cita privada.
            </p>
            <div className="pt-6">
              <button
                onClick={handleReset}
                style={{
                  backgroundColor: "var(--btn-bg)",
                  color: "var(--btn-text)",
                }}
                className="px-8 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Volver al Sitio
              </button>
            </div>
          </div>
        ) : (
          <div>
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2">
                <span
                  style={{ backgroundColor: "var(--color-accent)" }}
                  className="w-4 h-[1.5px] inline-block"
                />
                <span
                  style={{ color: "var(--color-accent)" }}
                  className="text-[11px] font-sans uppercase tracking-[0.2em] font-medium"
                >
                  {data.modal.eyebrow}
                </span>
              </div>
              <h2 className="font-serif text-3xl sm:text-4xl font-light">
                {data.modal.title}
              </h2>
              <p
                style={{ color: "var(--text-muted)" }}
                className="text-sm mt-1.5 leading-relaxed"
              >
                {data.modal.subtitle}
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  style={{ color: "var(--text-dim)" }}
                  className="block text-xs font-sans uppercase tracking-wider font-medium mb-1.5"
                >
                  Nombre Completo
                </label>
                <input
                  type="text"
                  required
                  placeholder="Ej. Paulina García / Carlos Mendoza"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-main)",
                  }}
                  className="w-full rounded-sm px-4 py-2.5 text-sm border focus:outline-none focus:ring-1 transition-colors"
                />
              </div>

              <div>
                <label
                  style={{ color: "var(--text-dim)" }}
                  className="block text-xs font-sans uppercase tracking-wider font-medium mb-1.5"
                >
                  Correo Electrónico
                </label>
                <input
                  type="email"
                  required
                  placeholder="contacto@ejemplo.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-main)",
                  }}
                  className="w-full rounded-sm px-4 py-2.5 text-sm border focus:outline-none focus:ring-1 transition-colors"
                />
              </div>

              <div>
                <label
                  style={{ color: "var(--text-dim)" }}
                  className="block text-xs font-sans uppercase tracking-wider font-medium mb-1.5"
                >
                  Servicio de Interés
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-main)",
                  }}
                  className="w-full rounded-sm px-4 py-2.5 text-sm border focus:outline-none focus:ring-1 transition-colors"
                >
                  {data.modal.services.map((s) => (
                    <option key={s} value={s}>
                      {s}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label
                  style={{ color: "var(--text-dim)" }}
                  className="block text-xs font-sans uppercase tracking-wider font-medium mb-1.5"
                >
                  Tus objetivos de imagen
                </label>
                <textarea
                  rows={3}
                  placeholder="¿Qué te gustaría transformar? (ej. renovación de armario, cambio de rol ejecutivo, encontrar mis colores ideales...)"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    backgroundColor: "var(--bg-surface)",
                    borderColor: "var(--border-light)",
                    color: "var(--text-main)",
                  }}
                  className="w-full rounded-sm px-4 py-2.5 text-sm border focus:outline-none focus:ring-1 transition-colors"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  style={{
                    backgroundColor: "var(--btn-bg)",
                    color: "var(--btn-text)",
                  }}
                  className="w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-full text-sm font-medium tracking-wide shadow-md hover:opacity-90 transition-opacity cursor-pointer"
                >
                  <span>Enviar Solicitud de Consulta</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </form>
          </div>
        )}
      </div>
    </div>
  );
}
