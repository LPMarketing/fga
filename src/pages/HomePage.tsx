import React, { useEffect } from 'react';
import { Hero } from '../components/Hero';
import { Introduction } from '../components/Introduction';
import { AboutLawyer } from '../components/AboutLawyer';
import { ContactSection } from '../components/ContactSection';
import { PracticeAreas } from '../components/PracticeAreas';
import { Differentials } from '../components/Differentials';
import { InstitutionalCTA } from '../components/InstitutionalCTA';
import { FAQSection } from '../components/FAQSection';

export const HomePage: React.FC = () => {
  useEffect(() => {
    document.title = 'FGA Advocacia | Dr. Frederico Gomes Assunção';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'FGA Advocacia — atuação jurídica do Dr. Frederico Gomes Assunção em Direito Previdenciário e questões relacionadas a servidores públicos. Entre em contato para informações sobre atendimento.'
      );
    }
  }, []);

  return (
    <>
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
    </>
  );
};
