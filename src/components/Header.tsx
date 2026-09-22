import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { NAV_LINKS, WHATSAPP_DEFAULT_LINK } from '../data/content';
import { Menu, X, MessageSquare, ChevronRight } from 'lucide-react';
import { useRouter } from '../utils/router';

interface HeaderProps {
  onOpenContact?: () => void;
}

export const Header: React.FC<HeaderProps> = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { currentPath, navigate } = useRouter();

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
    navigate(href);
  };

  const handleLogoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    navigate('/');
  };

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#061321]/95 backdrop-blur-md shadow-lg shadow-black/30 border-b border-[#C79A52]/20 py-2'
          : 'bg-gradient-to-b from-[#040d16]/95 via-[#061321]/80 to-transparent py-2.5 sm:py-3.5 lg:py-3.5'
      }`}
    >
      <div className="w-full max-w-[1600px] mx-auto px-4 sm:px-6 xl:px-8 box-border">
        {/* Desktop Header Layout: 3 Independent Columns [BRAND] [NAV] [CTA] via CSS Grid */}
        <div className="hidden lg:grid grid-cols-[minmax(180px,260px)_minmax(0,1fr)_auto] items-center gap-3 xl:gap-5 2xl:gap-7 w-full">
          {/* Column 1: Brand / Logo Area */}
          <div className="min-w-0 max-w-[260px] flex items-center">
            <a
              href="/"
              onClick={handleLogoClick}
              id="header-logo-link"
              className="flex items-center group transition-transform duration-200 hover:opacity-95"
              aria-label="FGA Advocacia - Início"
            >
              <Logo
                size="md"
                compactDesktop={true}
                showSubtitle={!isScrolled}
              />
            </a>
          </div>

          {/* Column 2: Flexible Center/Right Navigation (Min-width 0, never overlaps with CTA column) */}
          <nav
            id="desktop-nav"
            className="flex items-center justify-end gap-2.5 lg:gap-3 xl:gap-4 2xl:gap-6 min-w-0 px-2 overflow-visible"
            aria-label="Navegação Principal"
          >
            {NAV_LINKS.map((link) => {
              const isActive =
                (link.href === '/' && currentPath === '/') ||
                (link.href !== '/' && !link.href.startsWith('#') && currentPath === link.href);

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }}
                  className={`text-[10px] xl:text-[11px] 2xl:text-xs uppercase tracking-[0.08em] xl:tracking-[0.1em] 2xl:tracking-[0.14em] font-medium transition-colors duration-200 relative py-1 whitespace-nowrap group ${
                    isActive
                      ? 'text-[#C79A52] font-semibold'
                      : 'text-[#F5F3EF]/85 hover:text-[#C79A52]'
                  }`}
                >
                  {/* Adaptive label: show short label on 1024px-1279px, full label on >=1280px */}
                  {link.shortLabel && link.shortLabel !== link.label ? (
                    <>
                      <span className="xl:hidden">{link.shortLabel}</span>
                      <span className="hidden xl:inline">{link.label}</span>
                    </>
                  ) : (
                    <span>{link.label}</span>
                  )}
                  <span
                    className={`absolute bottom-0 left-0 h-[1.5px] bg-[#C79A52] transition-all duration-300 ${
                      isActive ? 'w-full' : 'w-0 group-hover:w-full'
                    }`}
                  />
                </a>
              );
            })}
          </nav>

          {/* Column 3: Dedicated Action CTA Button in its Own Independent Column */}
          <div className="flex items-center justify-end flex-shrink-0 min-w-[170px] xl:min-w-[190px] 2xl:min-w-[215px]">
            <a
              id="header-cta-button"
              href={WHATSAPP_DEFAULT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-1.5 xl:gap-2 px-3 xl:px-4 py-2 rounded-sm bg-gradient-to-r from-[#C79A52] via-[#D1A75B] to-[#B98A43] text-[#061321] text-[10px] xl:text-[11px] 2xl:text-xs uppercase tracking-[0.1em] font-bold shadow-md shadow-[#C79A52]/15 transition-all duration-300 hover:brightness-110 hover:shadow-lg hover:shadow-[#C79A52]/25 active:scale-[0.98] whitespace-nowrap flex-shrink-0"
            >
              <MessageSquare className="w-3 h-3 xl:w-3.5 xl:h-3.5 flex-shrink-0" />
              <span>Falar com um advogado</span>
            </a>
          </div>
        </div>

        {/* Mobile & Tablet Header Layout (< 1024px) */}
        <div className="flex lg:hidden items-center justify-between">
          {/* Mobile Logo */}
          <a
            href="/"
            onClick={handleLogoClick}
            id="header-logo-link-mobile"
            className="flex items-center flex-shrink-0 group transition-transform duration-200 hover:opacity-95"
            aria-label="FGA Advocacia - Início"
          >
            <Logo size="sm" showSubtitle={!isScrolled} />
          </a>

          {/* Mobile Menu & Quick CTA */}
          <div className="flex items-center gap-2">
            <a
              id="mobile-quick-cta"
              href={WHATSAPP_DEFAULT_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-sm bg-[#C79A52] text-[#061321] text-[10.5px] uppercase tracking-wider font-bold shadow-sm"
            >
              <MessageSquare className="w-3.5 h-3.5" />
              <span>Advogado</span>
            </a>

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
              {NAV_LINKS.map((link) => {
                const isMobileActive =
                  (link.href === '/' && currentPath === '/') ||
                  (link.href !== '/' && !link.href.startsWith('#') && currentPath === link.href);

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.href);
                    }}
                    className={`flex items-center justify-between py-3.5 text-sm uppercase tracking-[0.15em] font-medium transition-colors ${
                      isMobileActive
                        ? 'text-[#C79A52] font-semibold'
                        : 'text-[#F5F3EF] hover:text-[#C79A52]'
                    }`}
                  >
                    <span>{link.label}</span>
                    <ChevronRight
                      className={`w-4 h-4 ${
                        isMobileActive ? 'text-[#C79A52]' : 'text-[#C79A52]/60'
                      }`}
                    />
                  </a>
                );
              })}
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
