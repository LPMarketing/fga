import React from 'react';

export interface HowItWorksStep {
  step: string;
  title: string;
  description: string;
}

export interface LandingHowItWorksProps {
  id?: string;
  badge: string;
  title: string;
  steps: [HowItWorksStep, HowItWorksStep, HowItWorksStep];
}

export const LandingHowItWorks: React.FC<LandingHowItWorksProps> = ({
  id = 'como-funciona',
  badge,
  title,
  steps,
}) => {
  return (
    <section id={id} className="py-10 sm:py-14 lg:py-18 bg-[#061321] text-[#F5F3EF] relative overflow-hidden">
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#102842]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#C79A52]" />
            <span className="font-cinzel text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
              {badge}
            </span>
            <span className="h-[1px] w-6 bg-[#C79A52]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EF] font-normal tracking-tight">
            {title}
          </h2>

          <div className="w-16 h-[2px] bg-[#C79A52] mx-auto" />
        </div>

        {/* 3 Step Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
          {steps.map((item, idx) => (
            <div
              key={item.step}
              className="relative p-8 rounded-sm bg-[#081828] border border-[#102842] hover:border-[#C79A52]/50 transition-all duration-300 flex flex-col justify-between shadow-lg"
            >
              {/* Step indicator */}
              <div className="flex items-center justify-between pb-6 mb-6 border-b border-[#102842]">
                <span className="font-mono text-2xl font-bold text-[#C79A52] tracking-wider">
                  {item.step}
                </span>
                <span className="text-[11px] font-mono tracking-widest text-[#8E9CAE] uppercase">
                  Etapa 0{idx + 1}
                </span>
              </div>

              <div className="space-y-3 flex-grow">
                <h3 className="font-serif text-xl sm:text-2xl font-medium text-[#F5F3EF]">
                  {item.title}
                </h3>
                <p className="text-sm sm:text-base text-[#BAC7D5] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Bottom decorative bar */}
              <div className="pt-6 mt-6 border-t border-[#102842]/60 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-[#C79A52]" />
                <span className="text-xs text-[#8E9CAE] uppercase tracking-wider">
                  Atendimento individual
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
