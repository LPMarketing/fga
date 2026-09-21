import React from 'react';
import { Logo } from './Logo';
import { WHATSAPP_DISPLAY, WHATSAPP_DEFAULT_LINK, OAB_PLACEHOLDER } from '../data/content';
import { MessageSquare, Shield, ArrowUp } from 'lucide-react';
import { RouteLink } from './common/RouteLink';
import { useRouter } from '../utils/router';

interface FooterProps {
  onOpenPrivacy: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenPrivacy }) => {
  const { navigate } = useRouter();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, target: string) => {
    e.preventDefault();
    navigate(target);
  };

  return (
    <footer id="main-footer" className="bg-[#040d16] text-[#F5F3EF] border-t border-[#102842] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-[#102842]">
          {/* Brand Column */}
          <div className="lg:col-span-5 space-y-4">
            <RouteLink to="/" className="inline-block hover:opacity-95 transition-opacity">
              <Logo size="md" showSubtitle={true} />
            </RouteLink>

            <div className="pt-3 space-y-2 text-xs sm:text-sm text-[#8E9CAE] font-light max-w-sm">
              <p>
                <strong className="text-[#F5F3EF] font-medium">Dr. Frederico Gomes Assunção</strong>
              </p>
              <p className="font-mono text-xs text-[#C79A52]">{OAB_PLACEHOLDER}</p>
              <p>
                Atuação jurídica especializada em Direito Previdenciário e demandas relativas a
                servidores públicos.
              </p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="font-cinzel text-xs tracking-[0.2em] text-[#C79A52] uppercase font-semibold">
              Navegação
            </h4>
            <ul className="space-y-2 text-xs uppercase tracking-wider text-[#BAC7D5]">
              <li>
                <a
                  href="#inicio"
                  onClick={(e) => handleNavClick(e, '#inicio')}
                  className="hover:text-[#C79A52] transition-colors"
                >
                  Início
                </a>
              </li>
              <li>
                <a
                  href="#sobre"
                  onClick={(e) => handleNavClick(e, '#sobre')}
                  className="hover:text-[#C79A52] transition-colors"
                >
                  Sobre o Advogado
                </a>
              </li>
              <li>
                <a
                  href="#contato"
                  onClick={(e) => handleNavClick(e, '#contato')}
                  className="hover:text-[#C79A52] transition-colors"
                >
                  Apresente seu Caso
                </a>
              </li>
              <li>
                <a
                  href="#areas"
                  onClick={(e) => handleNavClick(e, '#areas')}
                  className="hover:text-[#C79A52] transition-colors"
                >
                  Especialidades
                </a>
              </li>
              <li>
                <a
                  href="#duvidas"
                  onClick={(e) => handleNavClick(e, '#duvidas')}
                  className="hover:text-[#C79A52] transition-colors"
                >
                  Dúvidas Frequentes
                </a>
              </li>
              <li className="pt-2 border-t border-[#102842]">
                <RouteLink
                  to="/direito-previdenciario"
                  className="text-[#C79A52] hover:text-[#D1A75B] transition-colors"
                >
                  Direito Previdenciário
                </RouteLink>
              </li>
              <li>
                <RouteLink
                  to="/direito-publico"
                  className="text-[#C79A52] hover:text-[#D1A75B] transition-colors"
                >
                  Servidor Público
                </RouteLink>
              </li>
            </ul>
          </div>

          {/* Contact Direct Column */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="font-cinzel text-xs tracking-[0.2em] text-[#C79A52] uppercase font-semibold">
              Atendimento Direto
            </h4>

            <p className="text-xs text-[#8E9CAE]">
              Entre em contato diretamente para consultar viabilidade de atendimento:
            </p>

            <a
              id="footer-whatsapp-btn"
              href={WHATSAPP_DEFAULT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-sm bg-[#0B1D30] hover:bg-[#102842] border border-[#C79A52]/50 text-[#D1A75B] text-xs font-mono font-medium transition-all"
            >
              <MessageSquare className="w-4 h-4 text-[#C79A52]" />
              <span>WhatsApp: {WHATSAPP_DISPLAY}</span>
            </a>

            <div className="pt-2">
              <button
                type="button"
                onClick={onOpenPrivacy}
                className="text-xs text-[#8E9CAE] hover:text-[#C79A52] underline transition-colors"
              >
                Política de Privacidade & Termos (LGPD)
              </button>
            </div>
          </div>
        </div>

        {/* Legal Disclaimer & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#8E9CAE]">
          <div className="space-y-1 text-center md:text-left">
            <p>© {new Date().getFullYear()} FGA Advocacia. Todos os direitos reservados.</p>
            <p className="text-[11px] text-[#5E6E82] max-w-2xl">
              As informações disponibilizadas neste site possuem caráter informativo e não substituem
              uma análise jurídica individualizada.
            </p>
          </div>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded bg-[#061321] border border-[#183759] hover:border-[#C79A52] text-xs text-[#BAC7D5] hover:text-[#C79A52] transition-colors"
            aria-label="Voltar ao topo"
          >
            <span>Voltar ao topo</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#C79A52]" />
          </button>
        </div>
      </div>
    </footer>
  );
};
