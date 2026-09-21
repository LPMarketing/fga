import React from 'react';
import { WHATSAPP_DEFAULT_LINK, OAB_PLACEHOLDER } from '../data/content';
import { lawyerPortrait } from '../assets';
import { MessageSquare, ArrowRight, ShieldCheck, Scale } from 'lucide-react';
import { useRouter } from '../utils/router';

export const Hero: React.FC = () => {
  const { navigate } = useRouter();

  return (
    <section
      id="inicio"
      className="relative min-h-[92vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#061321] overflow-hidden"
    >
      {/* Ambient background lighting & grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-[#183759]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#C79A52]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative architectural borders */}
      <div className="hidden xl:block absolute left-8 top-36 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-[#C79A52]/25 to-transparent" />
      <div className="hidden xl:block absolute right-8 top-36 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-[#C79A52]/25 to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Message & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-6 lg:space-y-8">
            {/* Top Label */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C79A52]" />
              <span className="font-cinzel text-xs sm:text-sm tracking-[0.28em] text-[#C79A52] font-semibold uppercase">
                FGA ADVOCACIA
              </span>
              <span className="hidden sm:inline-block text-[#8E9CAE]/60 text-xs">•</span>
              <span className="hidden sm:inline-block font-sans text-xs tracking-wider text-[#8E9CAE] uppercase">
                Assessoria & Consultoria Jurídica
              </span>
            </div>

            {/* Main Headline */}
            <h1
              id="hero-headline"
              className="font-serif text-3xl sm:text-5xl lg:text-6xl text-[#F5F3EF] leading-[1.14] font-normal tracking-tight"
            >
              Segurança jurídica para proteger seus{' '}
              <span className="italic font-medium text-[#D1A75B]">direitos</span> e seu{' '}
              <span className="italic font-medium text-[#D1A75B]">futuro</span>.
            </h1>

            {/* Complementary Text */}
            <p className="text-base sm:text-lg text-[#BAC7D5] font-light leading-relaxed max-w-2xl">
              Atuação em Direito Previdenciário e demandas relacionadas a servidores públicos, com
              atendimento individualizado, responsabilidade e compromisso em cada caso.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-2">
              <a
                id="hero-whatsapp-cta"
                href={WHATSAPP_DEFAULT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-sm uppercase tracking-[0.15em] font-bold shadow-xl shadow-[#C79A52]/15 transition-all duration-300 hover:brightness-110 hover:scale-[1.01] active:scale-[0.99] group"
              >
                <MessageSquare className="w-4 h-4 text-[#061321]" />
                <span>Falar pelo WhatsApp</span>
              </a>

              <a
                id="hero-explore-areas-btn"
                href="#areas"
                onClick={(e) => {
                  e.preventDefault();
                  navigate('#areas');
                }}
                className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-sm border border-[#C79A52]/50 text-[#F5F3EF] text-sm uppercase tracking-[0.15em] font-medium bg-[#0B1D30]/40 backdrop-blur-sm transition-all duration-300 hover:border-[#C79A52] hover:bg-[#0B1D30] hover:text-[#D1A75B]"
              >
                <span>Conheça nossa atuação</span>
                <ArrowRight className="w-4 h-4 text-[#C79A52]" />
              </a>
            </div>

            {/* Trust Anchor Details */}
            <div className="pt-4 border-t border-[#102842]/80 flex flex-wrap items-center gap-y-2 gap-x-4 text-xs sm:text-sm text-[#8E9CAE]">
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C79A52]" />
                <span>Atendimento profissional</span>
              </div>
              <span className="text-[#C79A52]/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#C79A52]" />
                <span>Análise individualizada</span>
              </div>
              <span className="text-[#C79A52]/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C79A52]" />
                <span>Transparência</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lawyer Portrait Visual Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer Golden Corner Frame Accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#C79A52]/70 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#C79A52]/70 z-20 pointer-events-none" />

              {/* Main Image Container with Vignette Gradient Integration */}
              <div className="relative overflow-hidden rounded-sm border border-[#C79A52]/30 bg-gradient-to-b from-[#0B1D30] to-[#040d16] shadow-2xl shadow-black/80 group">
                <img
                  src={lawyerPortrait}
                  alt="Dr. Frederico Gomes Assunção — FGA Advocacia"
                  className="w-full h-auto object-cover object-top max-h-[580px] lg:max-h-[640px] transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay at bottom for seamless blending */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061321] via-[#061321]/60 to-transparent pointer-events-none" />

                {/* Floating Law Badge on bottom right of portrait */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#061321]/90 backdrop-blur-md border border-[#C79A52]/40 p-3 sm:p-4 rounded-sm shadow-xl">
                  <div className="flex items-center justify-between">
                    <div>
                      <h4 className="font-serif text-[#F5F3EF] text-base sm:text-lg font-semibold tracking-wide">
                        Dr. Frederico Gomes Assunção
                      </h4>
                      <p className="text-xs text-[#C79A52] tracking-wider uppercase font-medium">
                        Direito Previdenciário • Servidor Público
                      </p>
                    </div>
                    <div className="px-2.5 py-1 rounded bg-[#0B1D30] border border-[#C79A52]/30 text-[10px] sm:text-xs font-mono text-[#BAC7D5] whitespace-nowrap">
                      {OAB_PLACEHOLDER}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
