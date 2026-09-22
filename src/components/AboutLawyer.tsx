import React from 'react';
import { OAB_PLACEHOLDER, WHATSAPP_DEFAULT_LINK } from '../data/content';
import { officeInterior } from '../assets';
import { MessageSquare, ShieldCheck, CheckCircle2, Award, Scale, BookOpen, UserCheck } from 'lucide-react';

export const AboutLawyer: React.FC = () => {
  return (
    <section
      id="sobre"
      className="py-10 sm:py-14 lg:py-18 bg-[#081828] text-[#F5F3EF] relative overflow-hidden"
    >
      {/* Background ambient accents */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#102842]/30 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#C79A52]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Column: Institutional Credentials & Office Card */}
          <div className="lg:col-span-5 order-2 lg:order-1">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              {/* Decorative background border */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-[#C79A52]/20 via-[#102842]/40 to-transparent rounded-sm transform -rotate-1" />

              <div className="relative rounded-sm overflow-hidden border border-[#C79A52]/40 bg-[#061321] shadow-2xl p-6 sm:p-8 space-y-6">
                {/* Header Badge */}
                <div className="flex items-center justify-between pb-5 border-b border-[#183759]">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-sm bg-[#102842] border border-[#C79A52]/40 flex items-center justify-center text-[#C79A52]">
                      <Scale className="w-5 h-5" />
                    </div>
                    <div>
                      <span className="font-cinzel text-[11px] tracking-[0.2em] text-[#C79A52] uppercase font-semibold">
                        FGA Advocacia
                      </span>
                      <p className="font-serif text-base font-semibold text-[#F5F3EF]">
                        Prática Jurídica
                      </p>
                    </div>
                  </div>
                  <span className="px-2.5 py-1 bg-[#102842] border border-[#C79A52]/50 text-xs font-mono text-[#C79A52] rounded">
                    {OAB_PLACEHOLDER}
                  </span>
                </div>

                {/* Office Image Showcase */}
                <div className="relative rounded-sm overflow-hidden border border-[#183759] group">
                  <img
                    src={officeInterior}
                    alt="Estrutura FGA Advocacia"
                    className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-[#061321]/40 to-transparent" />
                  <div className="absolute bottom-3 left-3 right-3 text-xs text-[#F5F3EF]">
                    <p className="font-serif font-semibold text-sm">Estrutura & Atendimento</p>
                    <p className="text-[11px] text-[#8E9CAE]">Atendimento presencial e digital seguro</p>
                  </div>
                </div>

                {/* Key Pillars */}
                <div className="space-y-3 pt-2">
                  <div className="flex items-center gap-3 text-xs text-[#BAC7D5]">
                    <UserCheck className="w-4 h-4 text-[#C79A52] shrink-0" />
                    <span>Condução personalizada em todas as etapas</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#BAC7D5]">
                    <BookOpen className="w-4 h-4 text-[#C79A52] shrink-0" />
                    <span>Atualização contínua na jurisprudência previdenciária</span>
                  </div>
                  <div className="flex items-center gap-3 text-xs text-[#BAC7D5]">
                    <ShieldCheck className="w-4 h-4 text-[#C79A52] shrink-0" />
                    <span>Sigilo profissional e conformidade integral à LGPD</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative and Credentials */}
          <div className="lg:col-span-7 order-1 lg:order-2 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#C79A52]" />
              <span className="font-cinzel text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
                PERFIL PROFISSIONAL
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

            <div className="space-y-4 text-base sm:text-lg text-[#BAC7D5] font-light leading-relaxed">
              <p>
                O <strong className="text-[#F5F3EF] font-semibold">Dr. Frederico Gomes Assunção</strong>, graduado em Direito pela <strong className="text-[#F5F3EF] font-medium">Universidade Federal de Goiás (UFG)</strong> e inscrito nos quadros da Ordem sob o <strong className="text-[#C79A52] font-mono font-medium">nº 78.318</strong>, atua na advocacia com foco em <strong className="text-[#F5F3EF] font-semibold">Direito Previdenciário</strong> e <strong className="text-[#F5F3EF] font-semibold">questões jurídicas relacionadas a servidores públicos</strong>. Seu atendimento é pautado pela análise individualizada de cada situação, comunicação clara e busca pela solução jurídica adequada para cada demanda.
              </p>
              <p>
                Na FGA Advocacia, cada caso é tratado de maneira particular, considerando documentos, histórico funcional e circunstâncias específicas antes da definição da estratégia jurídica cabível.
              </p>
            </div>

            {/* Core Commitments Checklist */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              <div className="flex items-start gap-2.5 p-3 rounded bg-[#061321]/60 border border-[#102842]">
                <CheckCircle2 className="w-4 h-4 text-[#C79A52] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F5F3EF]">
                  Análise probatória e documental criteriosa
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded bg-[#061321]/60 border border-[#102842]">
                <CheckCircle2 className="w-4 h-4 text-[#C79A52] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F5F3EF]">
                  Orientação transparente em todas as fases
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded bg-[#061321]/60 border border-[#102842]">
                <CheckCircle2 className="w-4 h-4 text-[#C79A52] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F5F3EF]">
                  Atendimento direto e sem intermediários
                </span>
              </div>
              <div className="flex items-start gap-2.5 p-3 rounded bg-[#061321]/60 border border-[#102842]">
                <CheckCircle2 className="w-4 h-4 text-[#C79A52] shrink-0 mt-0.5" />
                <span className="text-xs sm:text-sm text-[#F5F3EF]">
                  Compromisso rigoroso com a ética da advocacia
                </span>
              </div>
            </div>

            {/* CTA action */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={WHATSAPP_DEFAULT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-7 py-3.5 rounded-sm bg-[#C79A52] text-[#061321] text-xs uppercase tracking-[0.16em] font-bold shadow-md hover:bg-[#D1A75B] transition-all duration-300"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Solicitar atendimento com Dr. Frederico</span>
              </a>
              <div className="flex items-center gap-2 text-xs text-[#8E9CAE]">
                <ShieldCheck className="w-4 h-4 text-[#C79A52]" />
                <span>Atendimento confidencial e seguro</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
