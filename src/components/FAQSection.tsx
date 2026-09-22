import React, { useState } from 'react';
import { FAQ_ITEMS, WHATSAPP_DEFAULT_LINK } from '../data/content';
import { Plus, Minus, MessageSquare, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openId, setOpenId] = useState<string | null>('faq-1');

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="duvidas" data-section="duvidas-frequentes" className="py-10 sm:py-14 lg:py-18 bg-[#081828] text-[#F5F3EF] relative">
      <div id="duvidas-frequentes" className="sr-only" aria-hidden="true" />
      <div id="faq" className="sr-only" aria-hidden="true" />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#C79A52]" />
            <span className="font-cinzel text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
              TRANSPARÊNCIA
            </span>
            <span className="h-[1px] w-6 bg-[#C79A52]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EF] font-normal tracking-tight">
            Dúvidas Frequentes
          </h2>

          <div className="w-16 h-[2px] bg-[#C79A52] mx-auto" />

          <p className="text-base sm:text-lg text-[#BAC7D5] font-light">
            Respostas claras sobre o funcionamento do atendimento jurídico e diretrizes do escritório.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className={`rounded-sm transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#0B1D30] border-[#C79A52]/50 shadow-lg'
                    : 'bg-[#061321] border-[#102842] hover:border-[#183759]'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none"
                >
                  <span
                    className={`font-serif text-lg sm:text-xl font-medium transition-colors ${
                      isOpen ? 'text-[#D1A75B]' : 'text-[#F5F3EF]'
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`w-7 h-7 rounded-sm flex items-center justify-center shrink-0 border transition-all ${
                      isOpen
                        ? 'border-[#C79A52] bg-[#C79A52] text-[#061321]'
                        : 'border-[#183759] text-[#C79A52] bg-[#0B1D30]'
                    }`}
                  >
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </div>
                </button>

                {isOpen && (
                  <div className="px-6 pb-6 pt-1 border-t border-[#183759]/60 text-sm sm:text-base text-[#BAC7D5] font-light leading-relaxed">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Extra question prompt */}
        <div className="mt-12 text-center p-6 rounded-sm bg-[#061321] border border-[#102842] flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3 text-left">
            <HelpCircle className="w-6 h-6 text-[#C79A52] shrink-0" />
            <div>
              <p className="font-serif text-base text-[#F5F3EF] font-medium">Tem outra dúvida específica?</p>
              <p className="text-xs text-[#8E9CAE]">Fale diretamente com nossa equipe jurídica.</p>
            </div>
          </div>
          <a
            href={WHATSAPP_DEFAULT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-[#102842] hover:bg-[#183759] border border-[#C79A52]/40 text-[#D1A75B] text-xs uppercase tracking-wider font-semibold transition-all shrink-0"
          >
            <MessageSquare className="w-3.5 h-3.5" />
            <span>Tirar dúvidas no WhatsApp</span>
          </a>
        </div>
      </div>
    </section>
  );
};
