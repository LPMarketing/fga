import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { Introduction } from './components/Introduction';
import { AboutLawyer } from './components/AboutLawyer';
import { PracticeAreas } from './components/PracticeAreas';
import { Differentials } from './components/Differentials';
import { InstitutionalCTA } from './components/InstitutionalCTA';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingWhatsApp } from './components/FloatingWhatsApp';
import { PrivacyModal } from './components/PrivacyModal';

export default function App() {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#061321] text-[#F5F3EF] flex flex-col selection:bg-[#C79A52]/30 selection:text-[#FFFFFF] overflow-x-hidden font-sans">
      {/* Semantic Header */}
      <Header />

      {/* Main Content Sections */}
      <main id="conteudo-principal" className="flex-grow">
        {/* Section 1: Hero */}
        <Hero />

        {/* Section 2: Institucional / Editorial Introduction */}
        <Introduction />

        {/* Section 3: Sobre o Advogado */}
        <AboutLawyer />

        {/* Section 4: Contato & Envio Estruturado (Apresente seu caso) */}
        <ContactSection />

        {/* Section 5: Áreas de Atuação / Especialidades */}
        <PracticeAreas />

        {/* Section 6: Diferenciais & Princípios */}
        <Differentials />

        {/* Section 7: Chamada Institucional de Ação */}
        <InstitutionalCTA />

        {/* Section 8: Dúvidas Frequentes */}
        <FAQSection />
      </main>

      {/* Semantic Footer */}
      <Footer onOpenPrivacy={() => setPrivacyModalOpen(true)} />

      {/* Floating WhatsApp Widget */}
      <FloatingWhatsApp />

      {/* LGPD Privacy Policy Modal */}
      <PrivacyModal
        isOpen={privacyModalOpen}
        onClose={() => setPrivacyModalOpen(false)}
      />
    </div>
  );
}
