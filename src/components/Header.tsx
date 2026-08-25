import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NAV_LINKS, WHATSAPP_DEFAULT_LINK } from '../data/content';
import { Menu, X, MessageSquare, ChevronRight } from 'lucide-react';

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#061321]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#C79A52]/20 py-3.5'
          : 'bg-gradient-to-b from-[#040d16]/90 via-[#061321]/60 to-transparent py-5 sm:py-6'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Area */}
          <a
            href="#inicio"
            id="header-logo-link"
            className="flex items-center group transition-transform duration-200 hover:opacity-95"
            aria-label="FGA Advocacia - Início"
          >
            <Logo size={isScrolled ? 'sm' : 'md'} showSubtitle={!isScrolled} />
          </a>

          {/* Desktop Navigation */}
          <nav
            id="desktop-nav"
            className="hidden lg:flex items-center space-x-7 xl:space-x-8"
            aria-label="Navegação Principal"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-xs uppercase tracking-[0.18em] font-medium text-[#F5F3EF]/80 hover:text-[#C79A52] transition-colors duration-200 relative py-1 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#C79A52] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Header Action Button */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              id="header-cta-button"
              href={WHATSAPP_DEFAULT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-xs uppercase tracking-[0.14em] font-semibold transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-[#C79A52]/20 active:scale-[0.98]"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Falar com um advogado</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle"
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded text-[#C79A52] hover:bg-[#0B1D30] focus:outline-none focus:ring-1 focus:ring-[#C79A52]"
              aria-expanded={mobileMenuOpen}
              aria-label={mobileMenuOpen ? 'Fechar menu' : 'Abrir menu de navegação'}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden fixed inset-x-0 top-full bg-[#061321]/98 backdrop-blur-xl border-b border-[#C79A52]/30 shadow-2xl transition-all duration-300 max-h-[85vh] overflow-y-auto"
        >
          <div className="px-6 py-6 space-y-4">
            <div className="space-y-1 divide-y divide-[#102842]/60">
              {NAV_LINKS.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className="flex items-center justify-between py-3.5 text-sm uppercase tracking-[0.15em] font-medium text-[#F5F3EF] hover:text-[#C79A52] transition-colors"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#C79A52]/60" />
                </a>
              ))}
            </div>

            <div className="pt-4 border-t border-[#102842]">
              <a
                id="mobile-drawer-cta"
                href={WHATSAPP_DEFAULT_LINK}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 py-3.5 rounded bg-[#C79A52] text-[#061321] text-xs uppercase tracking-[0.16em] font-bold shadow-md hover:bg-[#D1A75B] transition-all"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Falar com um advogado</span>
              </a>
              <p className="text-center text-[11px] text-[#8E9CAE] mt-3">
                Atendimento direto via WhatsApp • (62) 99258-5232
              </p>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
