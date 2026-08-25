import React from 'react';
import { Scale, BookOpen, Compass } from 'lucide-react';

export const Introduction: React.FC = () => {
  return (
    <section
      id="institucional"
      className="py-20 lg:py-28 bg-[#F5F3EF] text-[#061321] relative overflow-hidden"
    >
      {/* Subtle top subtle separator */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C79A52] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Heading and Context */}
          <div className="lg:col-span-6 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#C79A52]" />
              <span className="font-cinzel text-xs tracking-[0.24em] text-[#966F33] font-bold uppercase">
                FGA ADVOCACIA
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#061321] font-normal leading-[1.2]">
              Advocacia pautada em{' '}
              <span className="italic text-[#966F33] font-medium">responsabilidade</span>, estratégia
              e proximidade.
            </h2>

            <div className="w-16 h-[2px] bg-[#C79A52]" />

            <p className="text-base sm:text-lg text-[#334155] leading-relaxed font-light">
              Cada situação jurídica possui particularidades que precisam ser analisadas com atenção.
              A FGA Advocacia busca oferecer um atendimento próximo, claro e responsável, auxiliando cada
              cliente na compreensão de seus direitos e das alternativas jurídicas disponíveis para seu caso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4">
              <div className="p-4 rounded-sm border border-[#061321]/10 bg-white shadow-sm">
                <Scale className="w-5 h-5 text-[#966F33] mb-2" />
                <h4 className="font-serif text-sm font-semibold text-[#061321]">Rigor Técnico</h4>
                <p className="text-xs text-[#526071] mt-1">Análise minuciosa de leis e regulamentos vigentes.</p>
              </div>
              <div className="p-4 rounded-sm border border-[#061321]/10 bg-white shadow-sm">
                <Compass className="w-5 h-5 text-[#966F33] mb-2" />
                <h4 className="font-serif text-sm font-semibold text-[#061321]">Estratégia Clara</h4>
                <p className="text-xs text-[#526071] mt-1">Caminhos jurídicos definidos com previsibilidade e método.</p>
              </div>
              <div className="p-4 rounded-sm border border-[#061321]/10 bg-white shadow-sm">
                <BookOpen className="w-5 h-5 text-[#966F33] mb-2" />
                <h4 className="font-serif text-sm font-semibold text-[#061321]">Humanização</h4>
                <p className="text-xs text-[#526071] mt-1">Escuta atenta e dedicação transparente ao seu caso.</p>
              </div>
            </div>
          </div>

          {/* Right Column: Editorial Highlight Quote Card */}
          <div className="lg:col-span-6">
            <div className="relative p-8 sm:p-12 rounded-sm bg-gradient-to-br from-[#0B1D30] to-[#061321] text-[#F5F3EF] shadow-2xl border border-[#C79A52]/40">
              {/* Corner accents */}
              <div className="absolute top-0 right-0 w-8 h-8 border-t-2 border-r-2 border-[#C79A52]" />
              <div className="absolute bottom-0 left-0 w-8 h-8 border-b-2 border-l-2 border-[#C79A52]" />

              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2 rounded bg-[#102842] border border-[#C79A52]/30">
                    <Scale className="w-5 h-5 text-[#C79A52]" />
                  </div>
                  <span className="text-xs uppercase tracking-[0.2em] text-[#C79A52] font-semibold">
                    Princípio Institucional
                  </span>
                </div>

                <blockquote className="font-serif text-xl sm:text-2xl text-[#F5F3EF] leading-relaxed italic font-normal">
                  “O conhecimento jurídico deve estar acompanhado de clareza, responsabilidade e
                  compromisso com cada pessoa atendida.”
                </blockquote>

                <div className="pt-4 border-t border-[#183759]/80 flex items-center justify-between">
                  <div>
                    <span className="font-serif text-base text-[#D1A75B] font-medium block">
                      FGA Advocacia
                    </span>
                    <span className="text-xs text-[#8E9CAE]">
                      Dr. Frederico Gomes Assunção
                    </span>
                  </div>
                  <div className="text-[11px] font-mono text-[#C79A52]/80 uppercase px-2 py-1 bg-[#102842] rounded">
                    Ética & Técnica
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
