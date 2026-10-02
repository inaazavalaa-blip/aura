"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import BeyondClothing from "@/components/BeyondClothing";
import Approach from "@/components/Approach";
import Services from "@/components/Services";
import HowItWorks from "@/components/HowItWorks";
import Footer from "@/components/Footer";
import ContactModal from "@/components/ContactModal";

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("The Signature Transformation");

  const handleOpenTalk = () => {
    setSelectedService("The Signature Transformation");
    setModalOpen(true);
  };

  const handleSelectService = (serviceName: string) => {
    setSelectedService(serviceName);
    setModalOpen(true);
  };

  return (
    <main className="min-h-screen flex flex-col bg-[#F2F7FA]">
      <Navbar onOpenTalk={handleOpenTalk} />
      <Hero onOpenTalk={handleOpenTalk} />
      <BeyondClothing />
      <Approach onOpenTalk={handleOpenTalk} />
      <Services onSelectService={handleSelectService} />
      <HowItWorks onOpenTalk={handleOpenTalk} />
      <Footer onOpenTalk={handleOpenTalk} />

      <ContactModal
        key={selectedService}
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialService={selectedService}
      />
    </main>
  );
}
