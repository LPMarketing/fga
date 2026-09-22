import React from 'react';
import { lawyerPortrait } from '../../assets';
import { OAB_PLACEHOLDER } from '../../data/content';
import { MessageSquare, ArrowRight, ShieldCheck, Scale, CheckCircle2, FileText } from 'lucide-react';

export interface LandingHeroProps {
  badge: string;
  titlePrefix?: string;
  titleHighlight: string;
  titleSuffix?: string;
  description: string;
  primaryCtaText?: string;
  primaryCtaLink: string;
  secondaryCtaText?: string;
  secondaryCtaTarget?: string;
  formCtaText?: string;
  formCtaTarget?: string;
  differentials: [string, string, string];
  // Mobile specific overrides for high-conversion focus:
  mobileBadge?: string;
  mobileHeadline?: string;
  mobileHighlight?: string;
  mobileSubtext?: string;
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
  formCtaText = 'Preencher Formulário',
  formCtaTarget = '#contato',
  differentials,
  mobileBadge,
  mobileHeadline,
  mobileHighlight,
  mobileSubtext,
}) => {
  const handleScrollToForm = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const el = document.querySelector(formCtaTarget);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToSection = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    if (secondaryCtaTarget) {
      const el = document.querySelector(secondaryCtaTarget);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <section className="relative min-h-[75svh] md:min-h-[80svh] lg:min-h-[85svh] xl:min-h-[88svh] pt-16 pb-8 sm:pt-20 sm:pb-12 lg:pt-28 lg:pb-16 xl:pt-32 xl:pb-20 flex items-end lg:items-center bg-[#061321] overflow-hidden">
      {/* ========================================================
          MOBILE HERO BACKGROUND PHOTO & SOPHISTICATED OVERLAY
          Exclusively active on screens below lg (<1024px)
          Desktop continues using original side-by-side composition
         ======================================================== */}
      <div className="lg:hidden absolute inset-0 z-0">
        <img
          src="/assets/hero_mobile_home.png"
          alt="Dr. Frederico Gomes Assunção — FGA Advocacia"
          className="w-full h-full object-cover object-[center_20%] sm:object-[center_15%]"
          loading="eager"
          referrerPolicy="no-referrer"
        />
        {/* Editorial Multi-Stop Vignette & Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#061321] via-[#061321]/90 via-55% via-[#081828]/50 to-[#040d16]/75" />
        <div className="absolute inset-0 bg-[#061321]/30 backdrop-brightness-[0.88]" />
      </div>

      {/* Ambient background lighting & grid for desktop */}
      <div className="hidden lg:block absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
      <div className="hidden lg:block absolute top-1/4 left-0 w-96 h-96 bg-[#183759]/20 rounded-full blur-3xl pointer-events-none" />
      <div className="hidden lg:block absolute bottom-10 right-1/4 w-[500px] h-[500px] bg-[#C79A52]/8 rounded-full blur-[100px] pointer-events-none" />

      {/* Decorative architectural borders (Desktop only) */}
      <div className="hidden xl:block absolute left-8 top-36 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-[#C79A52]/25 to-transparent" />
      <div className="hidden xl:block absolute right-8 top-36 bottom-24 w-[1px] bg-gradient-to-b from-transparent via-[#C79A52]/25 to-transparent" />

      {/* ========================================================
          MOBILE HERO CONTENT CONTAINER (<lg)
          Clean 3-second comprehension:
          FOTO -> ASSUNTO -> H1 -> COMPLEMENTO -> CTA ÚNICO
         ======================================================== */}
      <div className="lg:hidden relative z-10 w-full px-5 sm:px-6 pt-16 pb-4">
        <div className="max-w-xl mx-auto flex flex-col justify-end text-left space-y-3.5 sm:space-y-4">
          {/* 1. Identificador pequeno */}
          <div className="inline-flex items-center gap-2.5">
            <span className="h-[1px] w-6 bg-[#C79A52]" />
            <span className="font-cinzel text-[11px] sm:text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
              {mobileBadge || badge}
            </span>
          </div>

          {/* 2. H1 Principal e Dominante */}
          <h1
            id="landing-hero-headline-mobile"
            className="font-serif text-[30px] min-[390px]:text-[36px] sm:text-[42px] text-[#F5F3EF] leading-[1.10] font-normal tracking-tight"
          >
            {mobileHeadline ? (
              mobileHighlight ? (
                <>
                  {mobileHeadline.split(mobileHighlight)[0]}
                  <span className="italic font-medium text-[#D1A75B]">{mobileHighlight}</span>
                  {mobileHeadline.split(mobileHighlight)[1]}
                </>
              ) : (
                mobileHeadline
              )
            ) : (
              <>
                {titlePrefix && `${titlePrefix} `}
                <span className="text-[#D1A75B] italic font-medium">{titleHighlight}</span>
                {titleSuffix && ` ${titleSuffix}`}
              </>
            )}
          </h1>

          {/* 3. Complemento Curto */}
          <p className="text-sm sm:text-base text-[#BAC7D5] font-light leading-snug max-w-md pt-0.5">
            {mobileSubtext || description}
          </p>

          {/* 4. Ações Principais (WhatsApp + Preencher Formulário) */}
          <div className="pt-2 w-full space-y-2.5">
            <a
              id="landing-hero-mobile-cta"
              href={primaryCtaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full h-[50px] sm:h-[54px] inline-flex items-center justify-center gap-2.5 px-6 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-xs sm:text-sm uppercase tracking-[0.16em] font-bold shadow-xl shadow-black/40 transition-all active:scale-[0.99]"
            >
              <MessageSquare className="w-4 h-4 text-[#061321] shrink-0" />
              <span>FALAR COM UM ADVOGADO</span>
            </a>

            <a
              id="landing-hero-mobile-form-cta"
              href={formCtaTarget}
              onClick={handleScrollToForm}
              className="w-full h-[46px] sm:h-[50px] inline-flex items-center justify-center gap-2 px-5 rounded-sm border border-[#C79A52]/50 text-[#F5F3EF] text-xs uppercase tracking-[0.14em] font-medium bg-[#0B1D30]/80 backdrop-blur-sm transition-all active:scale-[0.99]"
            >
              <FileText className="w-3.5 h-3.5 text-[#C79A52] shrink-0" />
              <span>PREENCHER FORMULÁRIO DO CASO</span>
            </a>
          </div>
        </div>
      </div>

      {/* ========================================================
          DESKTOP HERO COMPOSITION (>=lg)
          100% Intact with two columns, badges, buttons & details
         ======================================================== */}
      <div className="hidden lg:block max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Column: Core Message & CTAs */}
          <div className="lg:col-span-7 flex flex-col justify-center text-left space-y-5 lg:space-y-6">
            {/* Top Badge Identifier */}
            <div className="inline-flex items-center gap-2.5">
              <span className="h-[1px] w-7 bg-[#C79A52]" />
              <span className="font-cinzel text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
                {badge}
              </span>
            </div>

            {/* Main Headline (Single H1) */}
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl leading-[1.16] text-[#F5F3EF] font-normal tracking-tight">
              {titlePrefix && `${titlePrefix} `}
              <span className="text-[#C79A52] italic font-medium">{titleHighlight}</span>
              {titleSuffix && ` ${titleSuffix}`}
            </h1>

            {/* Subtle Divider */}
            <div className="w-16 h-[2px] bg-gradient-to-r from-[#C79A52] to-transparent" />

            {/* Expository Text */}
            <p className="text-base text-[#BAC7D5] font-light max-w-2xl leading-relaxed">
              {description}
            </p>

            {/* CTAs Group */}
            <div className="pt-1 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              <a
                href={primaryCtaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2.5 px-6 sm:px-7 py-3.5 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-xs uppercase tracking-[0.14em] font-bold shadow-lg shadow-[#C79A52]/20 transition-all duration-300 hover:brightness-110 active:scale-[0.98]"
              >
                <MessageSquare className="w-4 h-4 text-[#061321]" />
                <span>{primaryCtaText}</span>
              </a>

              <a
                href={formCtaTarget}
                onClick={handleScrollToForm}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-sm border border-[#C79A52]/60 bg-[#0B1D30]/60 hover:bg-[#102842] text-[#F5F3EF] text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 hover:border-[#C79A52] hover:text-[#D1A75B]"
              >
                <FileText className="w-3.5 h-3.5 text-[#C79A52]" />
                <span>{formCtaText}</span>
              </a>

              {secondaryCtaText && secondaryCtaTarget && (
                <a
                  href={secondaryCtaTarget}
                  onClick={handleScrollToSection}
                  className="inline-flex items-center justify-center gap-2 px-5 py-4 rounded-sm border border-white/10 bg-transparent hover:bg-[#0B1D30]/50 text-[#BAC7D5] text-xs uppercase tracking-[0.14em] font-medium transition-all duration-300 hover:text-[#F5F3EF]"
                >
                  <span>{secondaryCtaText}</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C79A52]" />
                </a>
              )}
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
                  className="w-full h-auto object-cover object-top max-h-[440px] lg:max-h-[480px] xl:max-h-[520px] transition-transform duration-700 group-hover:scale-[1.02]"
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
