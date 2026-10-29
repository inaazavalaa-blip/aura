"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeyondClothing from "@/components/BeyondClothing";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import SpotlightSection from "@/components/SpotlightSection";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";
import { GenderMode } from "@/types/content";
import { siteData } from "@/data/content";

export default function Home() {
  const [mode, setMode] = useState<GenderMode>("women");
  const [modalOpen, setModalOpen] = useState(false);

  const content = siteData[mode];
  const [selectedService, setSelectedService] = useState(
    content.modal.services[0]
  );

  const handleOpenTalk = () => {
    setSelectedService(content.modal.services[0]);
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  const handleToggleMode = (newMode: GenderMode) => {
    setMode(newMode);
    setSelectedService(siteData[newMode].modal.services[0]);
  };

  return (
    <div data-mode={mode} className="min-h-screen flex flex-col theme-container">
      <Navbar
        mode={mode}
        onToggleMode={handleToggleMode}
        data={content}
        onOpenTalk={handleOpenTalk}
      />

      <Hero
        mode={mode}
        onToggleMode={handleToggleMode}
        data={content}
        onOpenTalk={handleOpenTalk}
      />

      <BeyondClothing data={content} />

      <Approach data={content} onOpenTalk={handleOpenTalk} />

      <Services data={content} onSelectService={handleSelectService} />

      <SpotlightSection mode={mode} onToggleMode={handleToggleMode} />

      <HowItWorks data={content} onOpenTalk={handleOpenTalk} />

      <Footer mode={mode} data={content} onOpenTalk={handleOpenTalk} />

      <ContactModal
        key={selectedService + mode}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        data={content}
        initialService={selectedService}
      />
    </div>
  );
}
