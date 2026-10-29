"use client";

import Image from "next/image";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { GenderMode } from "@/types/content";

interface SpotlightSectionProps {
  mode: GenderMode;
  onToggleMode: (newMode: GenderMode) => void;
}

export default function SpotlightSection({
  mode,
  onToggleMode,
}: SpotlightSectionProps) {
  const isWomen = mode === "women";

  return (
    <section
      style={{
        backgroundColor: "var(--bg-subtle)",
        borderBottomColor: "var(--border-light)",
      }}
      className="py-16 sm:py-20 border-b transition-colors duration-500"
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div
          style={{
            backgroundColor: isWomen ? "#14171A" : "#FFFFFF",
            color: isWomen ? "#F4EFE6" : "#122130",
            borderColor: isWomen ? "#2A333C" : "#D8E4EC",
          }}
          className="rounded-2xl p-8 sm:p-12 lg:p-16 border shadow-2xl relative overflow-hidden transition-all duration-700"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono uppercase tracking-widest font-semibold bg-white/10 text-[#C69C6D]">
                <Sparkles className="w-3.5 h-3.5" />
                <span>
                  {isWomen
                    ? "Nueva Sección: Aura Homme"
                    : "Atelier de Imagen Femenina"}
                </span>
              </div>

              <h3 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-light leading-tight">
                {isWomen ? (
                  <>
                    Presencia, calce sastre y{" "}
                    <span className="text-[#C69C6D] italic">
                      autoridad visual
                    </span>{" "}
                    para hombres.
                  </>
                ) : (
                  <>
                    Autenticidad, colorimetría y{" "}
                    <span className="text-[#5D8197] italic">
                      armonía sutil
                    </span>{" "}
                    para mujeres.
                  </>
                )}
              </h3>

              <p
                style={{
                  color: isWomen ? "#A1ACB6" : "#4A6174",
                }}
                className="text-base sm:text-lg leading-relaxed max-w-xl"
              >
                {isWomen
                  ? "Diseñado para líderes, directores y profesionales que buscan simplificar su guardarropa con el estándar de la sastrería a medida y el lujo silencioso."
                  : "Diseñado para mujeres que buscan conectar su guardarropa con su esencia interior, descubriendo los colores y siluetas que potencian su resplandor natural."}
              </p>

              <div className="pt-2">
                <button
                  onClick={() => onToggleMode(isWomen ? "men" : "women")}
                  style={{
                    backgroundColor: isWomen ? "#C69C6D" : "#122130",
                    color: isWomen ? "#121518" : "#FFFFFF",
                  }}
                  className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-sm font-semibold tracking-wide shadow-lg hover:opacity-90 transition-all duration-300 group cursor-pointer"
                >
                  <span>
                    {isWomen
                      ? "Ver Colección Masculina (Cambiar a Tema Hombre)"
                      : "Ver Colección Femenina (Cambiar a Tema Mujer)"}
                  </span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </button>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="relative w-full max-w-[340px] aspect-[4/5] rounded-xl overflow-hidden shadow-2xl border border-white/10">
                <Image
                  src={isWomen ? "/images/men-hero.jpg" : "/images/hero-model.png"}
                  alt={isWomen ? "Aura Homme preview" : "Aura Atelier preview"}
                  fill
                  sizes="(max-width: 768px) 100vw, 340px"
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                />
              </div>
            </div>
          </div>

          {/* Decorative ambient background blur */}
          <div
            style={{
              backgroundColor: isWomen
                ? "rgba(198, 156, 109, 0.08)"
                : "rgba(93, 129, 151, 0.08)",
            }}
            className="absolute -right-24 -bottom-24 w-96 h-96 rounded-full blur-3xl pointer-events-none"
          />
        </div>
      </div>
    </section>
  );
}
