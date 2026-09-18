import React, { useEffect } from 'react';
import { LandingHero } from '../components/landing/LandingHero';
import { LandingServices, LandingServiceCard } from '../components/landing/LandingServices';
import { LandingHowItWorks, HowItWorksStep } from '../components/landing/LandingHowItWorks';
import { LandingLawyer } from '../components/landing/LandingLawyer';
import { LandingContactCTA } from '../components/landing/LandingContactCTA';
import { WHATSAPP_BASE_URL } from '../data/content';
import {
  CalendarCheck,
  Compass,
  FileText,
  HeartPulse,
  Users,
  FileCheck2,
} from 'lucide-react';

const PREV_CARDS: LandingServiceCard[] = [
  {
    id: 'aposentadoria',
    title: 'Aposentadoria',
    description: 'Análise de requisitos, tempo de contribuição e regras aplicáveis ao caso.',
    icon: CalendarCheck,
  },
  {
    id: 'planejamento',
    title: 'Planejamento Previdenciário',
    description: 'Estudo do histórico contributivo e planejamento das possibilidades futuras de aposentadoria.',
    icon: Compass,
  },
  {
    id: 'beneficios-inss',
    title: 'Benefícios do INSS',
    description: 'Orientação jurídica relacionada a benefícios previdenciários e requerimentos administrativos.',
    icon: FileText,
  },
  {
    id: 'incapacidade',
    title: 'Benefício por Incapacidade',
    description: 'Análise de situações relacionadas à incapacidade temporária ou permanente para o trabalho.',
    icon: HeartPulse,
  },
  {
    id: 'pensao-morte',
    title: 'Pensão por Morte',
    description: 'Orientação sobre requisitos, dependentes e documentação necessária para análise do benefício.',
    icon: Users,
  },
  {
    id: 'revisoes',
    title: 'Revisões Previdenciárias',
    description: 'Análise jurídica de benefícios concedidos para verificar situações que possam exigir revisão.',
    icon: FileCheck2,
  },
];

const PREV_STEPS: [HowItWorksStep, HowItWorksStep, HowItWorksStep] = [
  {
    step: '01',
    title: 'Conte sua situação',
    description: 'Envie as principais informações e documentos relacionados ao seu caso.',
  },
  {
    step: '02',
    title: 'Análise jurídica',
    description: 'O escritório analisa as particularidades da situação e as normas aplicáveis.',
  },
  {
    step: '03',
    title: 'Orientação',
    description: 'Você recebe uma orientação clara sobre os caminhos juridicamente possíveis.',
  },
];

export const PrevidenciarioLandingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Direito Previdenciário | FGA Advocacia';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Atuação em Direito Previdenciário, aposentadorias, benefícios do INSS, revisões e planejamento previdenciário. Atendimento individualizado pela FGA Advocacia.'
      );
    }
  }, []);

  const whatsappHeroUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    'Olá, gostaria de informações sobre atendimento em Direito Previdenciário.'
  )}`;

  return (
    <div className="space-y-0">
      {/* SEÇÃO 01 — HERO */}
      <LandingHero
        badge="FGA ADVOCACIA • DIREITO PREVIDENCIÁRIO"
        titlePrefix="Seus"
        titleHighlight="direitos previdenciários"
        titleSuffix="merecem uma análise cuidadosa."
        description="Atuação jurídica em questões relacionadas ao INSS, aposentadorias, benefícios e planejamento previdenciário, com análise individualizada de cada situação."
        primaryCtaText="Falar com um advogado"
        primaryCtaLink={whatsappHeroUrl}
        secondaryCtaText="Entenda nossa atuação"
        secondaryCtaTarget="#como-podemos-auxiliar"
        differentials={[
          'Atendimento individualizado',
          'Análise documental',
          'Orientação clara',
        ]}
      />

      {/* SEÇÃO 02 — COMO PODEMOS AUXILIAR (Fundo Off-white) */}
      <LandingServices
        id="como-podemos-auxiliar"
        badge="ATUAÇÃO PREVIDENCIÁRIA"
        title="Análise jurídica para diferentes momentos da sua vida previdenciária."
        description="Cada situação previdenciária possui regras e particularidades próprias. A análise adequada dos documentos e do histórico contributivo é fundamental para identificar os caminhos juridicamente possíveis."
        cards={PREV_CARDS}
        areaCategoryName="Direito Previdenciário"
      />

      {/* SEÇÃO 03 — COMO FUNCIONA (Fundo Azul-marinho) */}
      <LandingHowItWorks
        id="como-funciona"
        badge="ATENDIMENTO"
        title="Cada caso começa por uma análise individual."
        steps={PREV_STEPS}
      />

      {/* SEÇÃO 04 — PROFISSIONAL */}
      <LandingLawyer
        id="profissional"
        badge="ATENDIMENTO PROFISSIONAL"
        narrative={
          <>
            <p>
              Dr. Frederico Gomes Assunção atua na advocacia com foco em{' '}
              <strong className="text-[#F5F3EF] font-medium">Direito Previdenciário</strong> e{' '}
              <strong className="text-[#F5F3EF] font-medium">questões jurídicas relacionadas a servidores públicos</strong>.
              O atendimento é pautado pela análise individualizada de cada situação, comunicação clara e
              busca pela solução jurídica adequada para cada demanda.
            </p>
            <p>
              Na FGA Advocacia, a análise de tempo de contribuição, aposentadorias e requerimentos de
              benefícios é conduzida com rigor técnico e respeito à trajetória de cada segurado.
            </p>
          </>
        }
        differentials={[
          'Análise criteriosa da documentação',
          'Atendimento direto e individualizado',
          'Transparência durante todas as etapas',
          'Conformidade técnica e ética',
        ]}
      />

      {/* SEÇÃO 05 — FORMULÁRIO RÁPIDO & CTA FINAL */}
      <LandingContactCTA
        id="contato"
        defaultAssunto="Direito Previdenciário"
        ctaBadge="FALE COM A FGA ADVOCACIA"
        ctaTitle="Precisa de orientação sobre uma questão previdenciária?"
        ctaDescription="Envie uma mensagem e apresente brevemente sua situação para que o escritório possa realizar o primeiro atendimento."
        directWhatsappMessage="Olá, gostaria de informações sobre atendimento em Direito Previdenciário."
      />
    </div>
  );
};
