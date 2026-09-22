import React from 'react';
import { lawyerPortrait, officeInterior } from '../../assets';
import { OAB_PLACEHOLDER } from '../../data/content';
import { Scale, CheckCircle2, Award, ShieldCheck } from 'lucide-react';

export interface LandingLawyerProps {
  id?: string;
  badge?: string;
  narrative: React.ReactNode;
  differentials: string[];
}

export const LandingLawyer: React.FC<LandingLawyerProps> = ({
  id = 'profissional',
  badge = 'ATENDIMENTO PROFISSIONAL',
  narrative,
  differentials,
}) => {
  return (
    <section id={id} className="py-10 sm:py-14 lg:py-18 bg-[#081828] text-[#F5F3EF] relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#102842]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C79A52]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Lawyer & Office Showcase Frame */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Outer Golden Accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#C79A52]/70 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#C79A52]/70 z-20 pointer-events-none" />

              <div className="relative rounded-sm overflow-hidden border border-[#C79A52]/40 bg-[#061321] shadow-2xl p-6 sm:p-7 space-y-5">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-4 border-b border-[#183759]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-[#102842] border border-[#C79A52]/40 flex items-center justify-center text-[#C79A52]">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-cinzel text-[11px] tracking-[0.2em] text-[#C79A52] uppercase font-semibold">
                        FGA Advocacia
                      </span>
                      <p className="font-serif text-base font-semibold text-[#F5F3EF]">
                        Atuação Especializada
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-[#102842] border border-[#C79A52]/50 text-xs font-mono text-[#C79A52] rounded">
                    {OAB_PLACEHOLDER}
                  </span>
                </div>

                {/* Professional Photo Container */}
                <div className="relative rounded-sm overflow-hidden border border-[#183759] group">
                  <img
                    src={lawyerPortrait}
                    alt="Dr. Frederico Gomes Assunção"
                    className="w-full h-72 sm:h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-[#061321]/30 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-[#F5F3EF]">
                    <p className="font-serif font-semibold text-sm">Dr. Frederico Gomes Assunção</p>
                    <p className="text-[11px] text-[#C79A52]">Advogado Responsável</p>
                  </div>
                </div>

                {/* Secondary Institutional Seal */}
                <div className="pt-1 flex items-center justify-between text-xs text-[#BAC7D5] border-t border-[#102842]">
                  <span className="inline-flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[#C79A52]" />
                    <span>Atendimento Presencial & Digital</span>
                  </span>
                  <span className="font-mono text-[#8E9CAE]">Goiânia / GO</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Qualifications */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#C79A52]" />
              <span className="font-cinzel text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
                {badge}
              </span>
            </div>

            <div>
              <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EF] font-normal leading-tight">
                Dr. Frederico Gomes Assunção
              </h2>
              <div className="flex flex-wrap items-center gap-3 mt-2">
                <p className="text-sm uppercase tracking-[0.18em] text-[#C79A52] font-medium">
                  Advogado | FGA Advocacia
                </p>
                <span className="text-[#8E9CAE]/40">•</span>
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded bg-[#102842] border border-[#C79A52]/30 text-xs font-mono text-[#BAC7D5]">
                  <Award className="w-3 h-3 text-[#C79A52]" />
                  {OAB_PLACEHOLDER}
                </span>
              </div>
            </div>

            <div className="w-20 h-[1.5px] bg-[#C79A52]/60" />

            {/* Narrative text block */}
            <div className="space-y-4 text-base sm:text-lg text-[#BAC7D5] font-light leading-relaxed">
              {narrative}
            </div>

            {/* Differentials Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {differentials.map((diff) => (
                <div
                  key={diff}
                  className="flex items-start gap-2.5 p-3.5 rounded-sm bg-[#061321]/70 border border-[#102842]"
                >
                  <CheckCircle2 className="w-4 h-4 text-[#C79A52] shrink-0 mt-0.5" />
                  <span className="text-xs sm:text-sm text-[#F5F3EF] font-normal">{diff}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
