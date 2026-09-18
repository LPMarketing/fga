import React from 'react';
import { lawyerPortrait } from '../../assets';
import { OAB_PLACEHOLDER } from '../../data/content';
import { MessageSquare, ArrowRight, ShieldCheck, Scale, CheckCircle2 } from 'lucide-react';

export interface LandingHeroProps {
  badge: string;
  titlePrefix?: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaLink: string;
  secondaryCtaText: string;
  secondaryCtaTarget: string;
  differentials: [string, string, string];
}

export const LandingHero: React.FC<LandingHeroProps> = ({
  badge,
  titlePrefix,
  titleHighlight,
  titleSuffix,
  description,
  primaryCtaText = 'Falar com um advogado',
  primaryCtaLink,
  secondaryCtaText,
  secondaryCtaTarget,
  differentials,
}) => {
  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector(secondaryCtaTarget);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="relative min-h-[90vh] lg:min-h-screen pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-[#061321] overflow-hidden">
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
            {/* Top Badge Identifier */}
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-8 bg-[#C79A52]" />
              <span className="font-cinzel text-xs sm:text-[13px] tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
                {badge}
              </span>
            </div>

            {/* Main Headline (Single H1) */}
            <h1 className="font-serif text-3xl sm:text-5xl lg:text-[3.5rem] leading-[1.18] text-[#F5F3EF] font-normal tracking-tight">
              {titlePrefix && `${titlePrefix} `}
              <span className="text-[#C79A52] italic font-medium">{titleHighlight}</span>
              {titleSuffix && ` ${titleSuffix}`}
            </h1>

            {/* Subtle Divider */}
            <div className="w-20 h-[2px] bg-gradient-to-r from-[#C79A52] to-transparent" />

            {/* Expository Text */}
            <p className="text-base sm:text-lg lg:text-xl text-[#BAC7D5] font-light max-w-2xl leading-relaxed">
              {description}
            </p>

            {/* CTAs Group */}
            <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <a
                href={primaryCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-xs uppercase tracking-[0.16em] font-bold shadow-lg shadow-[#C79A52]/20 transition-all duration-300 hover:brightness-110 hover:shadow-xl hover:shadow-[#C79A52]/30 active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-[#061321]" />
                <span>{primaryCtaText}</span>
              </a>

              <a
                href={secondaryCtaTarget}
                onClick={handleScrollToSection}
                className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-sm border border-[#C79A52]/40 bg-[#0B1D30]/60 hover:bg-[#102842] text-[#F5F3EF] text-xs uppercase tracking-[0.16em] font-medium transition-all duration-300 hover:border-[#C79A52]"
              >
                <span>{secondaryCtaText}</span>
                <ArrowRight className="w-4 h-4 text-[#C79A52]" />
              </a>
            </div>

            {/* Trust Anchor Differentials below buttons */}
            <div className="pt-4 border-t border-[#102842]/80 flex flex-wrap items-center gap-y-2.5 gap-x-4 text-xs sm:text-sm text-[#8E9CAE]">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-[#C79A52] shrink-0" />
                <span>{differentials[0]}</span>
              </div>
              <span className="text-[#C79A52]/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <ShieldCheck className="w-4 h-4 text-[#C79A52] shrink-0" />
                <span>{differentials[1]}</span>
              </div>
              <span className="text-[#C79A52]/40 hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <Scale className="w-4 h-4 text-[#C79A52] shrink-0" />
                <span>{differentials[2]}</span>
              </div>
            </div>
          </div>

          {/* Right Column: Lawyer Portrait Visual Frame */}
          <div className="lg:col-span-5 relative flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md lg:max-w-none">
              {/* Outer Golden Corner Frame Accents */}
              <div className="absolute -top-3 -left-3 w-12 h-12 border-t-2 border-l-2 border-[#C79A52]/70 z-20 pointer-events-none" />
              <div className="absolute -bottom-3 -right-3 w-12 h-12 border-b-2 border-r-2 border-[#C79A52]/70 z-20 pointer-events-none" />

              {/* Main Image Container */}
              <div className="relative overflow-hidden rounded-sm border border-[#C79A52]/30 bg-gradient-to-b from-[#0B1D30] to-[#040d16] shadow-2xl shadow-black/80 group">
                <img
                  src={lawyerPortrait}
                  alt="Dr. Frederico Gomes Assunção — FGA Advocacia"
                  className="w-full h-auto object-cover object-top max-h-[540px] lg:max-h-[600px] transition-transform duration-700 group-hover:scale-[1.02]"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />

                {/* Subtle dark gradient overlay at bottom for seamless blending */}
                <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#061321] via-[#061321]/60 to-transparent pointer-events-none" />

                {/* Floating Law Badge on bottom of portrait */}
                <div className="absolute bottom-4 left-4 right-4 p-3.5 sm:p-4 rounded-sm bg-[#061321]/90 backdrop-blur-md border border-[#C79A52]/40 shadow-xl z-20">
                  <div className="flex items-center justify-between gap-3">
                    <div>
                      <h2 className="font-serif text-sm sm:text-base font-medium text-[#F5F3EF]">
                        Dr. Frederico Gomes Assunção
                      </h2>
                      <p className="text-[11px] sm:text-xs text-[#C79A52] tracking-wider uppercase font-medium">
                        Advogado • FGA Advocacia
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
