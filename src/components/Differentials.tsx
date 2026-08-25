import React from 'react';
import { DIFFERENTIALS } from '../data/content';
import { UserCheck, MessageSquareText, Shield, Activity } from 'lucide-react';

export const Differentials: React.FC = () => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'user-check':
        return <UserCheck className="w-6 h-6 text-[#C79A52]" />;
      case 'message-square':
        return <MessageSquareText className="w-6 h-6 text-[#C79A52]" />;
      case 'shield':
        return <Shield className="w-6 h-6 text-[#C79A52]" />;
      case 'activity':
        return <Activity className="w-6 h-6 text-[#C79A52]" />;
      default:
        return <Shield className="w-6 h-6 text-[#C79A52]" />;
    }
  };

  return (
    <section className="py-24 lg:py-32 bg-[#061321] text-[#F5F3EF] relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16 sm:mb-20">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#C79A52]" />
            <span className="font-cinzel text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
              COMPROMISSO
            </span>
            <span className="h-[1px] w-6 bg-[#C79A52]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EF] font-normal tracking-tight">
            Uma advocacia construída sobre princípios essenciais.
          </h2>

          <div className="w-16 h-[2px] bg-[#C79A52] mx-auto" />
        </div>

        {/* 4 Differentials Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {DIFFERENTIALS.map((item) => (
            <div
              key={item.title}
              className="p-7 sm:p-8 rounded-sm bg-[#081828] border border-[#102842] hover:border-[#C79A52]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg shadow-black/40 hover:-translate-y-1"
            >
              <div>
                <div className="w-14 h-14 rounded-sm bg-[#061321] border border-[#183759] flex items-center justify-center mb-6 group-hover:border-[#C79A52]/60 group-hover:bg-[#0B1D30] transition-colors shadow-inner">
                  {getIcon(item.iconName)}
                </div>

                <h3 className="font-serif text-xl font-medium text-[#F5F3EF] group-hover:text-[#D1A75B] transition-colors mb-3">
                  {item.title}
                </h3>

                <p className="text-sm text-[#BAC7D5] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-[#102842] flex items-center justify-between">
                <span className="text-[10px] font-mono text-[#8E9CAE] uppercase tracking-widest">
                  FGA Advocacia
                </span>
                <span className="w-2 h-2 rounded-full bg-[#C79A52]/40 group-hover:bg-[#C79A52] transition-colors" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
