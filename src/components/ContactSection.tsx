import React, { useState, useEffect } from 'react';
import { WHATSAPP_BASE_URL } from '../data/content';
import { Send, ShieldCheck, Lock } from 'lucide-react';
import { consumePendingLeadOrigin, markAsConverted } from '../utils/qualificationStorage';

interface FormData {
  nome: string;
  telefone: string;
  email: string;
  assunto: string;
  mensagem: string;
}

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    nome: '',
    telefone: '',
    email: '',
    assunto: 'Direito Previdenciário — Aposentadoria',
    mensagem: '',
  });

  useEffect(() => {
    // Check if user came from qualification popup or specific lead origin
    const pendingOrigin = consumePendingLeadOrigin();
    if (pendingOrigin === 'previdenciario') {
      setFormData((prev) => ({
        ...prev,
        assunto: 'Direito Previdenciário — Aposentadoria',
      }));
    } else if (pendingOrigin === 'servidor') {
      setFormData((prev) => ({
        ...prev,
        assunto: 'Servidor Público — Direitos Funcionais / PAD',
      }));
    }
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Mark user as converted in localStorage to prevent future popups
    markAsConverted();

    const formattedMessage = `*Apresentação de Caso — FGA Advocacia*
- Nome: ${formData.nome}
- Telefone/WhatsApp: ${formData.telefone}
- E-mail: ${formData.email}
- Área de Interesse: ${formData.assunto}
- Detalhes do Caso: ${formData.mensagem || 'Gostaria de agendar uma consulta para avaliação do meu caso.'}`;

    const encoded = encodeURIComponent(formattedMessage);
    window.open(`${WHATSAPP_BASE_URL}?text=${encoded}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="contato" data-section="apresente-seu-caso" className="py-10 sm:py-14 lg:py-18 bg-[#061321] text-[#F5F3EF] relative overflow-hidden">
      <div id="apresente-seu-caso" className="sr-only" aria-hidden="true" />
      {/* Subtle ambient lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-[#102842]/25 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3 mb-8 sm:mb-12">
          <div className="inline-flex items-center gap-3">
            <span className="h-[1px] w-6 bg-[#C79A52]" />
            <span className="font-cinzel text-xs tracking-[0.24em] text-[#C79A52] font-semibold uppercase">
              APRESENTE SEU CASO
            </span>
            <span className="h-[1px] w-6 bg-[#C79A52]" />
          </div>

          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F3EF] font-normal tracking-tight">
            Envie as informações do seu caso
          </h2>

          <div className="w-16 h-[2px] bg-[#C79A52] mx-auto" />

          <p className="text-base sm:text-lg text-[#BAC7D5] font-light">
            Preencha o formulário para uma avaliação detalhada e receba o retorno diretamente de nossa equipe jurídica.
          </p>
        </div>

        {/* Contact Message Preparer Form */}
        <div className="p-8 sm:p-12 rounded-sm bg-[#081828] border border-[#183759] shadow-2xl relative">
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 pb-6 border-b border-[#102842]">
            <div>
              <h3 className="font-serif text-2xl font-medium text-[#F5F3EF]">
                Formulário de Atendimento
              </h3>
              <p className="text-xs sm:text-sm text-[#8E9CAE] mt-1 font-light">
                Campos marcados com (*) são de preenchimento obrigatório.
              </p>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded bg-[#061321] border border-[#102842] text-xs text-[#BAC7D5]">
              <Lock className="w-3.5 h-3.5 text-[#C79A52]" />
              <span>Ambiente Seguro & Sigiloso</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="form-nome"
                  className="block text-xs uppercase tracking-wider text-[#BAC7D5] font-medium mb-2"
                >
                  Nome Completo *
                </label>
                <input
                  id="form-nome"
                  type="text"
                  name="nome"
                  required
                  value={formData.nome}
                  onChange={handleChange}
                  placeholder="Seu nome completo"
                  className="w-full px-4 py-3.5 rounded-sm bg-[#061321] border border-[#183759] text-[#F5F3EF] placeholder-[#5E6E82] text-sm focus:outline-none focus:border-[#C79A52] focus:ring-1 focus:ring-[#C79A52] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="form-telefone"
                  className="block text-xs uppercase tracking-wider text-[#BAC7D5] font-medium mb-2"
                >
                  Telefone / WhatsApp *
                </label>
                <input
                  id="form-telefone"
                  type="tel"
                  name="telefone"
                  required
                  value={formData.telefone}
                  onChange={handleChange}
                  placeholder="(XX) XXXXX-XXXX"
                  className="w-full px-4 py-3.5 rounded-sm bg-[#061321] border border-[#183759] text-[#F5F3EF] placeholder-[#5E6E82] text-sm focus:outline-none focus:border-[#C79A52] focus:ring-1 focus:ring-[#C79A52] transition-colors"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="form-email"
                  className="block text-xs uppercase tracking-wider text-[#BAC7D5] font-medium mb-2"
                >
                  E-mail *
                </label>
                <input
                  id="form-email"
                  type="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="seuemail@exemplo.com"
                  className="w-full px-4 py-3.5 rounded-sm bg-[#061321] border border-[#183759] text-[#F5F3EF] placeholder-[#5E6E82] text-sm focus:outline-none focus:border-[#C79A52] focus:ring-1 focus:ring-[#C79A52] transition-colors"
                />
              </div>

              <div>
                <label
                  htmlFor="form-assunto"
                  className="block text-xs uppercase tracking-wider text-[#BAC7D5] font-medium mb-2"
                >
                  Assunto Principal *
                </label>
                <select
                  id="form-assunto"
                  name="assunto"
                  value={formData.assunto}
                  onChange={handleChange}
                  className="w-full px-4 py-3.5 rounded-sm bg-[#061321] border border-[#183759] text-[#F5F3EF] text-sm focus:outline-none focus:border-[#C79A52] focus:ring-1 focus:ring-[#C79A52] transition-colors"
                >
                  <option value="Direito Previdenciário — Aposentadoria">
                    Direito Previdenciário — Aposentadoria
                  </option>
                  <option value="Direito Previdenciário — Benefício por Incapacidade / Auxílio">
                    Direito Previdenciário — Benefício por Incapacidade
                  </option>
                  <option value="Direito Previdenciário — Pensão por Morte / BPC LOAS">
                    Direito Previdenciário — Pensão por Morte / BPC LOAS
                  </option>
                  <option value="Direito Previdenciário — Planejamento / Revisão">
                    Direito Previdenciário — Planejamento / Revisão
                  </option>
                  <option value="Servidor Público — Aposentadoria / RPPS">
                    Servidor Público — Aposentadoria / RPPS
                  </option>
                  <option value="Servidor Público — Direitos Funcionais / PAD">
                    Servidor Público — Direitos Funcionais / PAD
                  </option>
                  <option value="Servidor Público — Questões Remuneratórias / Vantagens">
                    Servidor Público — Questões Remuneratórias
                  </option>
                  <option value="Outro Assunto Jurídico">Outro Assunto Jurídico</option>
                </select>
              </div>
            </div>

            <div>
              <label
                htmlFor="form-mensagem"
                className="block text-xs uppercase tracking-wider text-[#BAC7D5] font-medium mb-2"
              >
                Mensagem / Breve relato da situação *
              </label>
              <textarea
                id="form-mensagem"
                name="mensagem"
                rows={5}
                required
                value={formData.mensagem}
                onChange={handleChange}
                placeholder="Descreva resumidamente os fatos ou sua dúvida principal..."
                className="w-full px-4 py-3.5 rounded-sm bg-[#061321] border border-[#183759] text-[#F5F3EF] placeholder-[#5E6E82] text-sm focus:outline-none focus:border-[#C79A52] focus:ring-1 focus:ring-[#C79A52] transition-colors resize-none"
              />
            </div>

            <div className="pt-2">
              <button
                id="form-submit-btn"
                type="submit"
                className="w-full inline-flex items-center justify-center gap-3 px-8 py-4.5 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-xs uppercase tracking-[0.18em] font-bold shadow-lg shadow-[#C79A52]/15 transition-all duration-300 hover:brightness-110 active:scale-[0.99] cursor-pointer"
              >
                <Send className="w-4 h-4" />
                <span>Enviar solicitação via WhatsApp</span>
              </button>
            </div>

            <div className="flex items-center justify-center gap-2 pt-2 text-xs text-[#8E9CAE]">
              <ShieldCheck className="w-4 h-4 text-[#C79A52]" />
              <span>As informações enviadas são protegidas por sigilo profissional (LGPD).</span>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};
