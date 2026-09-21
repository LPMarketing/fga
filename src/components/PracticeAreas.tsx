import React, { useState } from 'react';
import { PREVIDENCIARIO_ITEMS, SERVIDOR_ITEMS, WHATSAPP_BASE_URL } from '../data/content';
import {
  FileText,
  HeartPulse,
  Users,
  HandCoins,
  FileCheck2,
  CalendarCheck,
  Building2,
  Scale,
  Briefcase,
  TrendingUp,
  Coins,
  ShieldCheck,
  ArrowUpRight,
  MessageSquare,
  ArrowRight,
} from 'lucide-react';
import { RouteLink } from './common/RouteLink';

export const PracticeAreas: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'previdenciario' | 'servidor'>('all');

  const getPrevidenciarioIcon = (index: number) => {
    switch (index) {
      case 0:
        return <CalendarCheck className="w-5 h-5 text-[#C79A52]" />;
      case 1:
        return <HeartPulse className="w-5 h-5 text-[#C79A52]" />;
      case 2:
        return <Users className="w-5 h-5 text-[#C79A52]" />;
      case 3:
        return <HandCoins className="w-5 h-5 text-[#C79A52]" />;
      case 4:
        return <FileCheck2 className="w-5 h-5 text-[#C79A52]" />;
      case 5:
        return <FileText className="w-5 h-5 text-[#C79A52]" />;
      default:
        return <Scale className="w-5 h-5 text-[#C79A52]" />;
    }
  };

  const getServidorIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Building2 className="w-5 h-5 text-[#C79A52]" />;
      case 1:
        return <Briefcase className="w-5 h-5 text-[#C79A52]" />;
      case 2:
        return <Scale className="w-5 h-5 text-[#C79A52]" />;
      case 3:
        return <FileCheck2 className="w-5 h-5 text-[#C79A52]" />;
      case 4:
        return <TrendingUp className="w-5 h-5 text-[#C79A52]" />;
      case 5:
        return <Coins className="w-5 h-5 text-[#C79A52]" />;
      case 6:
        return <ShieldCheck className="w-5 h-5 text-[#C79A52]" />;
      default:
        return <Scale className="w-5 h-5 text-[#C79A52]" />;
    }
  };

  const handleCardClick = (title: string, areaName: string) => {
    const text = encodeURIComponent(
      `Olá, Dr. Frederico. Gostaria de informações sobre atendimento jurídico na área de ${areaName} — ${title}.`
    );
    window.open(`${WHATSAPP_BASE_URL}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="areas" data-section="especialidades" className="py-24 lg:py-32 bg-[#061321] text-[#F5F3EF] relative">
      <div id="especialidades" className="sr-only" aria-hidden="true" />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#C79A52]" />
            <span className="font-cinzel text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
              ESPECIALIDADES
            </span>
            <span className="h-[1px] w-6 bg-[#C79A52]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EF] font-normal tracking-tight">
            Áreas de Atuação
          </h2>

          <div className="w-16 h-[2px] bg-[#C79A52] mx-auto" />

          <p className="text-base sm:text-lg text-[#BAC7D5] font-light">
            Atuação jurídica direcionada às particularidades de cada caso.
          </p>

          {/* Quick Filter Switcher */}
          <div className="inline-flex items-center p-1 rounded-sm bg-[#0B1D30] border border-[#183759] mt-4">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-semibold transition-all rounded-sm ${
                activeTab === 'all'
                  ? 'bg-[#C79A52] text-[#061321] shadow'
                  : 'text-[#BAC7D5] hover:text-[#F5F3EF]'
              }`}
            >
              Todas as Áreas
            </button>
            <button
              onClick={() => setActiveTab('previdenciario')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-semibold transition-all rounded-sm ${
                activeTab === 'previdenciario'
                  ? 'bg-[#C79A52] text-[#061321] shadow'
                  : 'text-[#BAC7D5] hover:text-[#F5F3EF]'
              }`}
            >
              Direito Previdenciário
            </button>
            <button
              onClick={() => setActiveTab('servidor')}
              className={`px-4 py-2 text-xs uppercase tracking-[0.14em] font-semibold transition-all rounded-sm ${
                activeTab === 'servidor'
                  ? 'bg-[#C79A52] text-[#061321] shadow'
                  : 'text-[#BAC7D5] hover:text-[#F5F3EF]'
              }`}
            >
              Servidor Público
            </button>
          </div>
        </div>

        <div className="space-y-16 lg:space-y-20">
          {/* BLOCO 1: DIREITO PREVIDENCIÁRIO */}
          {(activeTab === 'all' || activeTab === 'previdenciario') && (
            <div className="space-y-8">
              {/* Block Header */}
              <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-r from-[#0B1D30] via-[#0E233A] to-[#061321] border-l-4 border-[#C79A52] border-y border-r border-[#102842] shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono tracking-widest text-[#C79A52] uppercase font-semibold">
                      Bloco 01 • RGPS / INSS
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F3EF] font-medium">
                      Direito Previdenciário
                    </h3>
                    <p className="text-sm sm:text-base text-[#BAC7D5] font-light max-w-3xl leading-relaxed">
                      Atuação em questões relacionadas a benefícios previdenciários e direitos perante o
                      INSS, mediante análise individual das condições e documentos de cada cliente.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                    <RouteLink
                      to="/direito-previdenciario"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-sm bg-[#061321] hover:bg-[#0B1D30] border border-[#C79A52]/40 text-[#C79A52] hover:text-[#D1A75B] text-xs uppercase tracking-wider font-semibold transition-all"
                    >
                      <span>Página Dedicada</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </RouteLink>
                    <a
                      href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
                        'Olá, Dr. Frederico. Gostaria de uma avaliação jurídica sobre Direito Previdenciário.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[#102842] hover:bg-[#183759] border border-[#C79A52]/40 text-[#D1A75B] text-xs uppercase tracking-wider font-semibold transition-all shrink-0 active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Consultar Previdenciário</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PREVIDENCIARIO_ITEMS.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(item.title, 'Direito Previdenciário')}
                    className="group relative p-6 sm:p-7 rounded-sm bg-[#081828] border border-[#102842] hover:border-[#C79A52]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1"
                  >
                    {/* Subtle top right indicator */}
                    <div className="absolute top-4 right-4 text-[#8E9CAE]/40 group-hover:text-[#C79A52] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="w-10 h-10 rounded bg-[#061321] border border-[#183759] flex items-center justify-center mb-4 group-hover:border-[#C79A52]/40 transition-colors">
                        {getPrevidenciarioIcon(idx)}
                      </div>

                      <h4 className="font-serif text-lg sm:text-xl font-medium text-[#F5F3EF] group-hover:text-[#D1A75B] transition-colors mb-2.5">
                        {item.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#BAC7D5] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-5 mt-4 border-t border-[#102842] flex items-center justify-between text-xs text-[#8E9CAE] group-hover:text-[#C79A52] transition-colors font-medium">
                      <span>Apresentar caso ao advogado</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider">WhatsApp &rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* BLOCO 2: SERVIDOR PÚBLICO */}
          {(activeTab === 'all' || activeTab === 'servidor') && (
            <div className="space-y-8">
              {/* Block Header */}
              <div className="p-6 sm:p-8 rounded-sm bg-gradient-to-r from-[#0B1D30] via-[#0E233A] to-[#061321] border-l-4 border-[#C79A52] border-y border-r border-[#102842] shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="space-y-2">
                    <span className="text-[11px] font-mono tracking-widest text-[#C79A52] uppercase font-semibold">
                      Bloco 02 • RPPS & Estatuto
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl text-[#F5F3EF] font-medium">
                      Servidor Público
                    </h3>
                    <p className="text-sm sm:text-base text-[#BAC7D5] font-light max-w-3xl leading-relaxed">
                      Atuação em questões administrativas e judiciais relacionadas aos direitos de servidores
                      públicos, sempre considerando as particularidades do vínculo funcional e da legislação
                      aplicável.
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-start sm:items-center gap-3 shrink-0">
                    <RouteLink
                      to="/direito-publico"
                      className="inline-flex items-center gap-2 px-4 py-3 rounded-sm bg-[#061321] hover:bg-[#0B1D30] border border-[#C79A52]/40 text-[#C79A52] hover:text-[#D1A75B] text-xs uppercase tracking-wider font-semibold transition-all"
                    >
                      <span>Página Dedicada</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </RouteLink>
                    <a
                      href={`${WHATSAPP_BASE_URL}?text=${encodeURIComponent(
                        'Olá, Dr. Frederico. Gostaria de uma avaliação jurídica sobre questões de Servidor Público.'
                      )}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-sm bg-[#102842] hover:bg-[#183759] border border-[#C79A52]/40 text-[#D1A75B] text-xs uppercase tracking-wider font-semibold transition-all shrink-0 active:scale-95"
                    >
                      <MessageSquare className="w-3.5 h-3.5" />
                      <span>Consultar Servidor Público</span>
                    </a>
                  </div>
                </div>
              </div>

              {/* Cards Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {SERVIDOR_ITEMS.map((item, idx) => (
                  <div
                    key={item.id}
                    onClick={() => handleCardClick(item.title, 'Servidor Público')}
                    className="group relative p-6 rounded-sm bg-[#081828] border border-[#102842] hover:border-[#C79A52]/60 transition-all duration-300 flex flex-col justify-between cursor-pointer hover:shadow-xl hover:shadow-black/50 hover:-translate-y-1"
                  >
                    <div className="absolute top-4 right-4 text-[#8E9CAE]/40 group-hover:text-[#C79A52] transition-colors">
                      <ArrowUpRight className="w-4 h-4" />
                    </div>

                    <div>
                      <div className="w-10 h-10 rounded bg-[#061321] border border-[#183759] flex items-center justify-center mb-4 group-hover:border-[#C79A52]/40 transition-colors">
                        {getServidorIcon(idx)}
                      </div>

                      <h4 className="font-serif text-lg font-medium text-[#F5F3EF] group-hover:text-[#D1A75B] transition-colors mb-2">
                        {item.title}
                      </h4>

                      <p className="text-xs sm:text-sm text-[#BAC7D5] font-light leading-relaxed">
                        {item.description}
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-[#102842] flex items-center justify-between text-xs text-[#8E9CAE] group-hover:text-[#C79A52] transition-colors font-medium">
                      <span>Analisar direito</span>
                      <span className="text-[10px] font-mono uppercase tracking-wider">WhatsApp &rarr;</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
