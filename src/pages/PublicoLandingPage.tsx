import React, { useEffect } from 'react';
import { LandingHero } from '../components/landing/LandingHero';
import { LandingServices, LandingServiceCard } from '../components/landing/LandingServices';
import { LandingHowItWorks, HowItWorksStep } from '../components/landing/LandingHowItWorks';
import { LandingLawyer } from '../components/landing/LandingLawyer';
import { LandingContactCTA } from '../components/landing/LandingContactCTA';
import { WHATSAPP_BASE_URL } from '../data/content';
import {
  Building2,
  FileText,
  Scale,
  TrendingUp,
  Landmark,
  UserCheck,
} from 'lucide-react';

const SERVIDOR_CARDS: LandingServiceCard[] = [
  {
    id: 'direitos-funcionais',
    title: 'Direitos Funcionais',
    description: 'Análise de questões relacionadas aos direitos decorrentes do vínculo com a Administração Pública.',
    icon: Building2,
  },
  {
    id: 'processos-adm',
    title: 'Processos Administrativos',
    description: 'Orientação e acompanhamento jurídico em procedimentos e processos administrativos.',
    icon: FileText,
  },
  {
    id: 'pad',
    title: 'Processo Administrativo Disciplinar',
    description: 'Análise jurídica e acompanhamento de situações relacionadas a procedimentos disciplinares.',
    icon: Scale,
  },
  {
    id: 'progressoes-vantagens',
    title: 'Progressões e Vantagens',
    description: 'Análise de direitos relacionados à carreira, progressões, adicionais e vantagens funcionais.',
    icon: TrendingUp,
  },
  {
    id: 'aposentadoria-servidor',
    title: 'Aposentadoria do Servidor',
    description: 'Orientação sobre regras previdenciárias aplicáveis aos servidores públicos.',
    icon: Landmark,
  },
  {
    id: 'concursos-ingresso',
    title: 'Concursos e Ingresso no Serviço Público',
    description: 'Análise de questões jurídicas relacionadas a concursos, nomeação e ingresso no serviço público.',
    icon: UserCheck,
  },
];

const SERVIDOR_STEPS: [HowItWorksStep, HowItWorksStep, HowItWorksStep] = [
  {
    step: '01',
    title: 'Apresente sua situação',
    description: 'Conte o que aconteceu e informe o órgão ou vínculo relacionado ao caso.',
  },
  {
    step: '02',
    title: 'Análise do caso',
    description: 'São avaliados documentos, histórico funcional e normas aplicáveis à situação.',
  },
  {
    step: '03',
    title: 'Orientação jurídica',
    description: 'Após a análise, são apresentados os caminhos juridicamente possíveis para o caso.',
  },
];

export const PublicoLandingPage: React.FC = () => {
  useEffect(() => {
    document.title = 'Direito Público e Servidor Público | FGA Advocacia';
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute(
        'content',
        'Atuação jurídica voltada a servidores públicos em questões funcionais, administrativas e previdenciárias. Atendimento pela FGA Advocacia.'
      );
    }
  }, []);

  const whatsappHeroUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
    'Olá, gostaria de informações sobre atendimento jurídico relacionado a Direito Público / Servidor Público.'
  )}`;

  return (
    <div className="space-y-0">
      {/* SEÇÃO 01 — HERO */}
      <LandingHero
        badge="FGA ADVOCACIA • SERVIDOR PÚBLICO"
        titlePrefix="Sofreu desconto indevido, PAD ou prejuízo na sua"
        titleHighlight="carreira pública?"
        titleSuffix=""
        description="Defesa jurídica especializada em processos disciplinares, progressões funcionais, licenças e direitos remuneratórios e previdenciários de servidores municipais, estaduais e federais."
        primaryCtaText="Falar com um advogado"
        primaryCtaLink={whatsappHeroUrl}
        formCtaText="Preencher Formulário"
        formCtaTarget="#contato-servidor"
        secondaryCtaText="Conheça nossa atuação"
        secondaryCtaTarget="#areas-de-atuacao"
        differentials={[
          'Defesa em PAD e sindicâncias',
          'Direitos remuneratórios e funcionais',
          'Orientação técnica individualizada',
        ]}
        mobileBadge="DIREITO DO SERVIDOR PÚBLICO"
        mobileHeadline="Servidor público: sofreu prejuízo na carreira ou processo funcional?"
        mobileHighlight="prejuízo na carreira"
        mobileSubtext="Defesa estratégica em processos disciplinares, remunerações e direitos funcionais."
      />

      {/* SEÇÃO 02 — ÁREAS DE ATUAÇÃO (Fundo Off-white) */}
      <LandingServices
        id="areas-de-atuacao"
        badge="DIREITO DO SERVIDOR"
        title="Atuação jurídica em diferentes questões da vida funcional."
        description="Questões relacionadas ao serviço público exigem atenção às normas específicas de cada cargo, órgão e regime jurídico. Cada situação deve ser analisada individualmente."
        cards={SERVIDOR_CARDS}
        areaCategoryName="Direito Público / Servidor Público"
      />

      {/* SEÇÃO 03 — COMO FUNCIONA (Fundo Azul-marinho) */}
      <LandingHowItWorks
        id="como-funciona"
        badge="COMO FUNCIONA"
        title="Uma análise jurídica adequada começa pelos detalhes."
        steps={SERVIDOR_STEPS}
      />

      {/* SEÇÃO 04 — PROFISSIONAL */}
      <LandingLawyer
        id="profissional"
        badge="ATENDIMENTO PROFISSIONAL"
        narrative={
          <>
            <p>
              Na FGA Advocacia, cada situação envolvendo servidores públicos é analisada
              considerando o histórico funcional, os documentos apresentados e as normas aplicáveis ao
              caso, buscando oferecer orientação jurídica clara e responsável.
            </p>
            <p>
              O escritório compreende a importância da segurança jurídica e da estabilidade no
              exercício das funções públicas, dedicando atenção minuciosa ao estatuto, regime próprio
              e peculiaridades de cada categoria funcional.
            </p>
          </>
        }
        differentials={[
          'Análise documental criteriosa',
          'Atendimento direto',
          'Comunicação clara',
          'Sigilo profissional',
        ]}
      />

      {/* SEÇÃO 05 — FORMULÁRIO RÁPIDO & CTA FINAL */}
      <LandingContactCTA
        id="contato-servidor"
        defaultAssunto="Direito Público / Servidor Público"
        ctaBadge="FGA ADVOCACIA"
        ctaTitle="Tem uma questão relacionada ao serviço público?"
        ctaDescription="Apresente brevemente sua situação e entre em contato para receber as orientações iniciais sobre o atendimento."
        directWhatsappMessage="Olá, gostaria de informações sobre atendimento jurídico relacionado a Direito Público / Servidor Público."
      />
    </div>
  );
};
