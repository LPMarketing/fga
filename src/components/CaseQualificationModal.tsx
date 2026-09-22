import React, { useEffect, useRef } from 'react';
import { X, FileText, ArrowRight, ShieldCheck } from 'lucide-react';

export interface CaseQualificationModalProps {
  isOpen: boolean;
  type: 'timed_qualification' | 'exit_intent';
  onClose: () => void;
  onExplainCase: () => void;
}

export const CaseQualificationModal: React.FC<CaseQualificationModalProps> = ({
  isOpen,
  type,
  onClose,
  onExplainCase,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const previouslyFocusedElementRef = useRef<HTMLElement | null>(null);

  // Focus trap & Accessibility
  useEffect(() => {
    if (isOpen) {
      previouslyFocusedElementRef.current = document.activeElement as HTMLElement;

      // Prevent background scrolling while modal is open
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';

      // Move focus into the modal
      const timer = setTimeout(() => {
        const primaryButton = modalRef.current?.querySelector<HTMLButtonElement>('#modal-primary-cta');
        primaryButton?.focus();
      }, 50);

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === 'Escape') {
          e.preventDefault();
          onClose();
          return;
        }

        // Focus trap
        if (e.key === 'Tab' && modalRef.current) {
          const focusableElements = modalRef.current.querySelectorAll<HTMLElement>(
            'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
          );
          if (focusableElements.length === 0) return;

          const firstElement = focusableElements[0];
          const lastElement = focusableElements[focusableElements.length - 1];

          if (e.shiftKey) {
            if (document.activeElement === firstElement) {
              e.preventDefault();
              lastElement.focus();
            }
          } else {
            if (document.activeElement === lastElement) {
              e.preventDefault();
              firstElement.focus();
            }
          }
        }
      };

      window.addEventListener('keydown', handleKeyDown);

      return () => {
        document.body.style.overflow = originalOverflow;
        window.removeEventListener('keydown', handleKeyDown);
        clearTimeout(timer);
        previouslyFocusedElementRef.current?.focus();
      };
    }
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const isExitIntent = type === 'exit_intent';

  const title = isExitIntent ? 'Antes de sair…' : 'Conte um pouco sobre o seu caso';
  const text = isExitIntent
    ? 'Se preferir, conte brevemente o que está acontecendo. Assim, sua situação já chega ao advogado com mais contexto.'
    : 'Algumas informações iniciais ajudam o advogado a compreender melhor a sua situação antes do atendimento.';
  const secondaryText = isExitIntent ? 'Continuar sem preencher' : 'Continuar navegando';

  return (
    <div
      id="case-qualification-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#040D16]/80 backdrop-blur-sm animate-fade-in"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-headline"
      aria-describedby="modal-description"
      onClick={(e) => {
        if (e.target === e.currentTarget) {
          onClose();
        }
      }}
    >
      <div
        ref={modalRef}
        id="case-qualification-card"
        className="relative w-full max-w-[490px] rounded-sm bg-[#08192B] border border-[#C79A52]/40 p-6 sm:p-8 shadow-2xl shadow-black/80 text-[#F5F3EF] space-y-6 transition-transform duration-300 animate-scale-up"
      >
        {/* Subtle decorative gold line at top */}
        <div className="absolute top-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-[#C79A52]/80 to-transparent" />

        {/* Close Button (X) */}
        <button
          id="modal-close-button"
          type="button"
          onClick={onClose}
          aria-label="Fechar janela"
          className="absolute top-4 right-4 p-2 rounded-sm text-[#BAC7D5] hover:text-[#C79A52] hover:bg-[#102842] transition-colors focus:outline-none focus:ring-1 focus:ring-[#C79A52]"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header with emblem badge */}
        <div className="space-y-3 pr-6">
          <div className="inline-flex items-center gap-2">
            <span className="h-[1px] w-4 bg-[#C79A52]" />
            <span className="font-cinzel text-[10px] tracking-[0.22em] text-[#C79A52] font-semibold uppercase">
              FGA ADVOCACIA • ATENDIMENTO QUALIFICADO
            </span>
          </div>

          <h3
            id="modal-headline"
            className="font-serif text-2xl sm:text-[26px] font-normal tracking-tight text-[#F5F3EF] leading-snug"
          >
            {title}
          </h3>

          <div className="w-12 h-[1.5px] bg-[#C79A52]/60" />
        </div>

        {/* Body Description */}
        <p
          id="modal-description"
          className="text-sm sm:text-[15px] text-[#BAC7D5] font-light leading-relaxed"
        >
          {text}
        </p>

        {/* Micro-benefit box */}
        <div className="p-3.5 rounded-sm bg-[#05111E] border border-[#183759]/70 flex items-start gap-3 text-xs text-[#9AAABF]">
          <FileText className="w-4 h-4 text-[#C79A52] flex-shrink-0 mt-0.5" />
          <span>
            Ao descrever seu caso no formulário, nosso advogado já analisa a legislação cabível e os documentos necessários antes do primeiro contato.
          </span>
        </div>

        {/* Actions Area */}
        <div className="space-y-3 pt-2">
          <button
            id="modal-primary-cta"
            type="button"
            onClick={onExplainCase}
            className="w-full inline-flex items-center justify-center gap-3 px-6 py-4 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-xs uppercase tracking-[0.18em] font-bold shadow-lg shadow-[#C79A52]/20 hover:brightness-110 active:scale-[0.99] transition-all cursor-pointer focus:outline-none focus:ring-2 focus:ring-[#C79A52] focus:ring-offset-2 focus:ring-offset-[#08192B]"
          >
            <span>EXPLICAR MEU CASO</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          <button
            id="modal-secondary-action"
            type="button"
            onClick={onClose}
            className="w-full py-2.5 text-center text-xs uppercase tracking-[0.14em] text-[#8E9CAE] hover:text-[#F5F3EF] transition-colors cursor-pointer focus:outline-none"
          >
            {secondaryText}
          </button>
        </div>

        {/* Privacy reassurance footnote */}
        <div className="flex items-center justify-center gap-2 pt-1 border-t border-[#102842] text-[11px] text-[#6A7B90]">
          <ShieldCheck className="w-3.5 h-3.5 text-[#C79A52]/80" />
          <span>Atendimento sigiloso sob as normas éticas da OAB</span>
        </div>
      </div>
    </div>
  );
};
