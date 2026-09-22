import React, { useState, useEffect } from 'react';
import { ChevronUp } from 'lucide-react';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show button after scrolling approximately 600px
      if (window.scrollY > 600) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Check initial position
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <button
      id="scroll-to-top-btn"
      type="button"
      onClick={scrollToTop}
      aria-label="Voltar ao topo da página"
      className={`fixed right-4 sm:right-6 bottom-20 sm:bottom-24 z-40 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#08192B] border border-[#C79A52]/70 text-[#C79A52] hover:text-[#F5F3EF] hover:border-[#D1A75B] hover:bg-[#0E2844] flex items-center justify-center shadow-lg shadow-black/40 transition-all duration-300 ease-out active:scale-95 cursor-pointer ${
        isVisible
          ? 'opacity-100 translate-y-0 pointer-events-auto'
          : 'opacity-0 translate-y-3 pointer-events-none'
      }`}
    >
      <ChevronUp className="w-5 h-5 stroke-[2.2]" />
    </button>
  );
};
