import React, { useState } from 'react';
import { WHATSAPP_BASE_URL, WHATSAPP_DISPLAY } from '../../data/content';
import { Send, MessageSquare, ShieldCheck, Lock, CheckCircle2 } from 'lucide-react';

export interface LandingContactCTAProps {
  id?: string;
  defaultAssunto: 'Direito Previdenciário' | 'Direito Público / Servidor Público';
  ctaBadge: string;
  ctaTitle: string;
  ctaDescription: string;
  directWhatsappMessage: string;
}

export const LandingContactCTA: React.FC<LandingContactCTAProps> = ({
  id = 'contato',
  defaultAssunto,
  ctaBadge,
  ctaTitle,
  ctaDescription,
  directWhatsappMessage,
}) => {
  const [nome, setNome] = useState('');
  const [telefone, setTelefone] = useState('');
  const [assunto, setAssunto] = useState(defaultAssunto);
  const [mensagem, setMensagem] = useState('');

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!nome.trim() || !telefone.trim() || !mensagem.trim()) {
      return;
    }

    const formattedMessage = `Olá, meu nome é ${nome.trim()}.

Gostaria de atendimento sobre: ${assunto}.

Minha situação:
${mensagem.trim()}

Telefone:
${telefone.trim()}`;

    const encoded = encodeURIComponent(formattedMessage);
    window.open(`${WHATSAPP_BASE_URL}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  const directWhatsappUrl = `${WHATSAPP_BASE_URL}?text=${encodeURIComponent(directWhatsappMessage)}`;

  return (
    <section id={id} className="py-24 lg:py-32 bg-[#061321] text-[#F5F3EF] relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#102842]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-start">
          {/* Left Column: Direct CTA Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-3">
              <span className="h-[1px] w-6 bg-[#C79A52]" />
              <span className="font-cinzel text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
                {ctaBadge}
              </span>
            </div>

            <h2 className="font-serif text-3xl sm:text-4xl lg:text-[2.6rem] leading-[1.2] text-[#F5F3EF] font-normal tracking-tight">
              {ctaTitle}
            </h2>

            <div className="w-16 h-[2px] bg-[#C79A52]" />

            <p className="text-base text-[#BAC7D5] font-light leading-relaxed">
              {ctaDescription}
            </p>

            {/* Direct WhatsApp Action Box */}
            <div className="p-6 sm:p-7 rounded-sm bg-[#081828] border border-[#183759] shadow-xl space-y-5">
              <div className="flex items-center gap-3 pb-4 border-b border-[#102842]">
                <div className="w-10 h-10 rounded-sm bg-[#061321] border border-[#C79A52]/40 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-[#C79A52]" />
                </div>
                <div>
                  <h3 className="font-serif text-lg font-medium text-[#F5F3EF]">
                    Atendimento Imediato
                  </h3>
                  <p className="text-xs text-[#8E9CAE] font-mono">{WHATSAPP_DISPLAY}</p>
                </div>
              </div>

              <p className="text-xs text-[#BAC7D5] font-light leading-relaxed">
                Prefere conversar diretamente com nossa equipe agora mesmo? Toque no botão abaixo:
              </p>

              <a
                href={directWhatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-xs uppercase tracking-[0.16em] font-bold shadow-lg shadow-[#C79A52]/20 transition-all duration-300 hover:brightness-110 active:scale-[0.99]"
              >
                <MessageSquare className="w-4 h-4 text-[#061321]" />
                <span>Falar pelo WhatsApp</span>
              </a>

              <div className="flex items-center justify-center gap-2 pt-1 text-xs text-[#8E9CAE]">
                <Lock className="w-3.5 h-3.5 text-[#C79A52]" />
                <span>Atendimento confidencial e individualizado.</span>
              </div>
            </div>

            {/* Trust Anchors */}
            <div className="space-y-2.5 pt-2">
              <div className="flex items-center gap-2.5 text-xs text-[#BAC7D5]">
                <CheckCircle2 className="w-4 h-4 text-[#C79A52] shrink-0" />
                <span>Retorno direto pelo WhatsApp</span>
              </div>
              <div className="flex items-center gap-2.5 text-xs text-[#BAC7D5]">
                <CheckCircle2 className="w-4 h-4 text-[#C79A52] shrink-0" />
                <span>Sem promessas irreais — orientação pautada na lei</span>
              </div>
            </div>
          </div>

          {/* Right Column: Quick Structured Form */}
          <div className="lg:col-span-7">
            <div className="p-8 sm:p-10 rounded-sm bg-[#081828] border border-[#183759] shadow-2xl relative">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-6 pb-5 border-b border-[#102842]">
                <div>
                  <h3 className="font-serif text-2xl font-medium text-[#F5F3EF]">
                    Envie seu caso para análise
                  </h3>
                  <p className="text-xs text-[#8E9CAE] mt-1 font-light">
                    Preencha o formulário rápido para prepararmos seu atendimento.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded bg-[#061321] border border-[#102842] text-[11px] text-[#BAC7D5]">
                  <Lock className="w-3 h-3 text-[#C79A52]" />
                  <span>Sigilo LGPD</span>
                </div>
              </div>

              <form onSubmit={handleFormSubmit} className="space-y-5">
                <div>
                  <label
                    htmlFor={`nome-${id}`}
                    className="block text-xs uppercase tracking-wider text-[#BAC7D5] font-medium mb-1.5"
                  >
                    Nome Completo *
                  </label>
                  <input
                    id={`nome-${id}`}
                    type="text"
                    required
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                    placeholder="Seu nome completo"
                    className="w-full px-4 py-3 rounded-sm bg-[#061321] border border-[#183759] text-[#F5F3EF] placeholder-[#5E6E82] text-sm focus:outline-none focus:border-[#C79A52] focus:ring-1 focus:ring-[#C79A52] transition-colors"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div>
                    <label
                      htmlFor={`telefone-${id}`}
                      className="block text-xs uppercase tracking-wider text-[#BAC7D5] font-medium mb-1.5"
                    >
                      Telefone / WhatsApp *
                    </label>
                    <input
                      id={`telefone-${id}`}
                      type="tel"
                      required
                      value={telefone}
                      onChange={(e) => setTelefone(e.target.value)}
                      placeholder="(XX) XXXXX-XXXX"
                      className="w-full px-4 py-3 rounded-sm bg-[#061321] border border-[#183759] text-[#F5F3EF] placeholder-[#5E6E82] text-sm focus:outline-none focus:border-[#C79A52] focus:ring-1 focus:ring-[#C79A52] transition-colors"
                    />
                  </div>

                  <div>
                    <label
                      htmlFor={`assunto-${id}`}
                      className="block text-xs uppercase tracking-wider text-[#BAC7D5] font-medium mb-1.5"
                    >
                      Assunto *
                    </label>
                    <input
                      id={`assunto-${id}`}
                      type="text"
                      readOnly
                      value={assunto}
                      className="w-full px-4 py-3 rounded-sm bg-[#040d16] border border-[#183759] text-[#C79A52] text-sm cursor-default font-medium focus:outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor={`mensagem-${id}`}
                    className="block text-xs uppercase tracking-wider text-[#BAC7D5] font-medium mb-1.5"
                  >
                    Breve descrição da situação *
                  </label>
                  <textarea
                    id={`mensagem-${id}`}
                    rows={4}
                    required
                    value={mensagem}
                    onChange={(e) => setMensagem(e.target.value)}
                    placeholder="Descreva resumidamente os fatos ou sua dúvida principal..."
                    className="w-full px-4 py-3 rounded-sm bg-[#061321] border border-[#183759] text-[#F5F3EF] placeholder-[#5E6E82] text-sm focus:outline-none focus:border-[#C79A52] focus:ring-1 focus:ring-[#C79A52] transition-colors resize-none"
                  />
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-3 px-8 py-4 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-xs uppercase tracking-[0.16em] font-bold shadow-lg shadow-[#C79A52]/15 transition-all duration-300 hover:brightness-110 active:scale-[0.99] cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-[#061321]" />
                    <span>Enviar solicitação via WhatsApp</span>
                  </button>
                </div>

                <div className="flex items-center justify-center gap-2 pt-1 text-xs text-[#8E9CAE]">
                  <ShieldCheck className="w-4 h-4 text-[#C79A52]" />
                  <span>As informações enviadas são protegidas por sigilo profissional.</span>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
