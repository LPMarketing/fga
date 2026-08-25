import React from 'react';
import { X, Shield, Lock, FileText } from 'lucide-react';
import { OAB_PLACEHOLDER } from '../data/content';

interface PrivacyModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const PrivacyModal: React.FC<PrivacyModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto bg-black/80 backdrop-blur-sm animate-fadeIn">
      <div
        className="relative w-full max-w-2xl rounded-sm bg-[#081828] border border-[#C79A52]/40 text-[#F5F3EF] shadow-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="privacy-modal-title"
      >
        {/* Close Button */}
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 p-2 text-[#8E9CAE] hover:text-[#C79A52] hover:bg-[#102842] rounded transition-colors"
          aria-label="Fechar modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Modal Header */}
        <div className="flex items-center gap-3 pb-4 border-b border-[#183759]">
          <div className="p-2 rounded bg-[#102842] border border-[#C79A52]/30 text-[#C79A52]">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <h3 id="privacy-modal-title" className="font-serif text-xl sm:text-2xl font-semibold text-[#F5F3EF]">
              Política de Privacidade & LGPD
            </h3>
            <p className="text-xs text-[#C79A52] font-mono uppercase tracking-wider">
              FGA Advocacia • Dr. Frederico Gomes Assunção ({OAB_PLACEHOLDER})
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="py-6 space-y-5 text-xs sm:text-sm text-[#BAC7D5] font-light leading-relaxed">
          <section className="space-y-2">
            <h4 className="font-serif text-base font-semibold text-[#F5F3EF] flex items-center gap-2">
              <Lock className="w-4 h-4 text-[#C79A52]" />
              1. Finalidade e Tratamento de Dados
            </h4>
            <p>
              A FGA Advocacia valoriza a privacidade e o sigilo de todas as informações compartilhadas.
              Os dados eventualmente fornecidos pelos usuários (como nome, telefone/WhatsApp, e-mail e
              relato resumido de dúvidas) destinam-se exclusivamente ao primeiro atendimento,
              identificação da demanda jurídica e retorno do contato solicitado.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif text-base font-semibold text-[#F5F3EF] flex items-center gap-2">
              <FileText className="w-4 h-4 text-[#C79A52]" />
              2. Sigilo Profissional e Segurança
            </h4>
            <p>
              O escritório observa estritamente o dever de sigilo profissional previsto no Estatuto da
              Advocacia e a Ordem dos Advogados do Brasil (Lei nº 8.906/1994) e no Código de Ética e
              Disciplina da OAB, bem como as diretrizes da Lei Geral de Proteção de Dados (Lei nº 13.709/2018 - LGPD).
            </p>
            <p>
              Nenhum dado é comercializado, compartilhado com terceiros para fins publicitários ou
              utilizado para finalidades estranhas à prestação de serviços e consultoria jurídica.
            </p>
          </section>

          <section className="space-y-2">
            <h4 className="font-serif text-base font-semibold text-[#F5F3EF] flex items-center gap-2">
              <Shield className="w-4 h-4 text-[#C79A52]" />
              3. Direitos do Titular
            </h4>
            <p>
              O titular dos dados pode solicitar, a qualquer momento, esclarecimentos sobre as
              informações armazenadas, bem como a retificação ou exclusão de dados de contato mediante
              mensagem direcionada aos canais oficiais de comunicação da FGA Advocacia.
            </p>
          </section>
        </div>

        {/* Modal Footer */}
        <div className="pt-4 border-t border-[#183759] flex justify-end">
          <button
            type="button"
            onClick={onClose}
            className="px-6 py-2.5 rounded-sm bg-[#C79A52] text-[#061321] text-xs uppercase tracking-wider font-bold hover:bg-[#D1A75B] transition-colors"
          >
            Entendido e Concordo
          </button>
        </div>
      </div>
    </div>
  );
};
