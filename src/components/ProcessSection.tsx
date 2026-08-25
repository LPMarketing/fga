import React from 'react';
import { PROCESS_STEPS, WHATSAPP_DEFAULT_LINK } from '../data/content';
import { MessageSquare, ArrowRight } from 'lucide-react';

export const ProcessSection: React.FC = () => {
  return (
    <section
      id="como-funciona"
      className="py-24 lg:py-32 bg-[#081828] text-[#F5F3EF] relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#C79A52]" />
            <span className="font-cinzel text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
              METODOLOGIA
            </span>
            <span className="h-[1px] w-6 bg-[#C79A52]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EF] font-normal tracking-tight">
            Como funciona o atendimento
          </h2>

          <div className="w-16 h-[2px] bg-[#C79A52] mx-auto" />

          <p className="text-base sm:text-lg text-[#BAC7D5] font-light">
            Um fluxo transparente e organizado desde o primeiro contato até a definição das medidas cabíveis.
          </p>
        </div>

        {/* 4 Steps Timeline Grid */}
        <div className="relative">
          {/* Horizontal connector line on large screens */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-[1px] bg-gradient-to-r from-transparent via-[#C79A52]/40 to-transparent -translate-y-12 z-0" />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className="relative p-6 sm:p-7 rounded-sm bg-[#0B1D30]/90 border border-[#183759] hover:border-[#C79A52]/60 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/30 hover:-translate-y-1"
              >
                <div>
                  {/* Step Number Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-sm bg-[#061321] border border-[#C79A52]/40 flex items-center justify-center text-base font-mono font-bold text-[#C79A52] group-hover:border-[#C79A52] group-hover:bg-[#102842] transition-colors">
                      {step.step}
                    </div>
                    <span className="text-[11px] font-mono text-[#8E9CAE] uppercase tracking-wider">
                      Etapa {idx + 1}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="font-serif text-xl font-medium text-[#F5F3EF] group-hover:text-[#D1A75B] transition-colors mb-3">
                    {step.title}
                  </h3>

                  {/* Description */}
                  <p className="text-sm text-[#BAC7D5] font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#183759]/60 flex items-center text-xs text-[#C79A52] opacity-80 group-hover:opacity-100 transition-opacity">
                  <span className="font-medium">Atendimento humanizado</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Direct Process Trigger */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center justify-center gap-4 p-4 sm:p-6 rounded-sm bg-[#061321]/80 border border-[#183759] max-w-2xl mx-auto">
            <p className="text-sm text-[#BAC7D5] font-light">
              Deseja dar o primeiro passo e apresentar sua demanda?
            </p>
            <a
              href={WHATSAPP_DEFAULT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-sm bg-[#C79A52] text-[#061321] text-xs uppercase tracking-wider font-bold shadow-md hover:bg-[#D1A75B] transition-all whitespace-nowrap"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Iniciar Primeiro Contato</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};
