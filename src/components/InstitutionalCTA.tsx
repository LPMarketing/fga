import React from 'react';
import { WHATSAPP_DEFAULT_LINK, WHATSAPP_DISPLAY } from '../data/content';
import { MessageSquare, ShieldCheck, Scale, PhoneCall } from 'lucide-react';

export const InstitutionalCTA: React.FC = () => {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-gradient-to-b from-[#081828] via-[#0B1D30] to-[#061321] text-[#F5F3EF] relative overflow-hidden">
      {/* Subtle luxury borders */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="relative p-6 sm:p-10 lg:p-12 rounded-sm bg-gradient-to-r from-[#061321] via-[#0B1D30] to-[#081828] border border-[#C79A52]/40 shadow-2xl shadow-black/80">
          {/* Architectural corner details */}
          <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-[#C79A52]" />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-[#C79A52]" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
            {/* Left side text */}
            <div className="lg:col-span-8 space-y-4 text-left">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-[#102842] border border-[#C79A52]/30 text-xs font-cinzel text-[#C79A52] uppercase tracking-widest font-semibold">
                <Scale className="w-3.5 h-3.5 text-[#C79A52]" />
                <span>Atendimento Jurídico Direto</span>
              </div>

              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-normal text-[#F5F3EF] leading-tight">
                Precisa entender melhor os seus direitos?
              </h2>

              <p className="text-sm sm:text-base text-[#BAC7D5] font-light leading-relaxed max-w-2xl">
                Entre em contato com a FGA Advocacia e apresente sua situação para uma avaliação inicial.
              </p>

              <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-xs text-[#8E9CAE] pt-1">
                <div className="flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-[#C79A52]" />
                  <span>Sigilo profissional</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <PhoneCall className="w-4 h-4 text-[#C79A52]" />
                  <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
                </div>
              </div>
            </div>

            {/* Right side CTA Button */}
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center">
              <a
                id="cta-institutional-btn"
                href={WHATSAPP_DEFAULT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 sm:py-4 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-xs uppercase tracking-[0.14em] font-bold shadow-xl shadow-[#C79A52]/20 transition-all duration-300 hover:brightness-110 active:scale-[0.98] group"
              >
                <MessageSquare className="w-4 h-4 text-[#061321]" />
                <span>Conversar pelo WhatsApp</span>
              </a>
              <span className="text-[11px] text-[#8E9CAE] mt-2.5 text-center lg:text-right w-full">
                Resposta rápida e atendimento humanizado
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
