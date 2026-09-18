import React from 'react';
import { LucideIcon, ArrowUpRight } from 'lucide-react';
import { WHATSAPP_BASE_URL } from '../../data/content';

export interface LandingServiceCard {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
}

export interface LandingServicesProps {
  id?: string;
  badge: string;
  title: string;
  description: string;
  cards: LandingServiceCard[];
  areaCategoryName: string;
}

export const LandingServices: React.FC<LandingServicesProps> = ({
  id = 'atuacao',
  badge,
  title,
  description,
  cards,
  areaCategoryName,
}) => {
  const handleCardClick = (cardTitle: string) => {
    const text = encodeURIComponent(
      `Olá, Dr. Frederico. Gostaria de informações sobre atendimento em ${areaCategoryName} — ${cardTitle}.`
    );
    window.open(`${WHATSAPP_BASE_URL}?text=${text}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id={id} className="py-20 lg:py-28 bg-[#F5F3EF] text-[#061321] relative overflow-hidden">
      {/* Subtle top separator */}
      <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-transparent via-[#C79A52] to-transparent" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#C79A52]" />
            <span className="font-cinzel text-xs tracking-[0.24em] text-[#966F33] font-bold uppercase">
              {badge}
            </span>
            <span className="h-[1px] w-6 bg-[#C79A52]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#061321] font-normal leading-[1.2] tracking-tight">
            {title}
          </h2>

          <div className="w-16 h-[2px] bg-[#C79A52] mx-auto" />

          <p className="text-base sm:text-lg text-[#334155] font-light leading-relaxed">
            {description}
          </p>
        </div>

        {/* 6 Elegant Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {cards.map((card) => {
            const Icon = card.icon;
            return (
              <div
                key={card.id}
                onClick={() => handleCardClick(card.title)}
                className="group relative p-7 sm:p-8 rounded-sm bg-white border border-[#061321]/10 hover:border-[#C79A52] shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
              >
                {/* Top right subtle action cue */}
                <div className="absolute top-5 right-5 text-[#94a3b8] group-hover:text-[#966F33] transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>

                <div>
                  <div className="w-12 h-12 rounded-sm bg-[#061321] flex items-center justify-center mb-5 border border-[#C79A52]/30 group-hover:border-[#C79A52] transition-colors shadow-sm">
                    <Icon className="w-6 h-6 text-[#D1A75B]" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-semibold text-[#061321] group-hover:text-[#966F33] transition-colors mb-3">
                    {card.title}
                  </h3>

                  <p className="text-sm text-[#475569] font-light leading-relaxed">
                    {card.description}
                  </p>
                </div>

                <div className="pt-5 mt-6 border-t border-[#061321]/8 flex items-center justify-between text-xs font-semibold text-[#966F33] uppercase tracking-wider group-hover:text-[#061321] transition-colors">
                  <span>Consultar orientação</span>
                  <span className="font-mono text-sm">&rarr;</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
