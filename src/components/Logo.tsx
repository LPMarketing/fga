import React from 'react';
import { fgaLogo } from '../assets';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showSubtitle?: boolean;
  monogramOnly?: boolean;
  compactDesktop?: boolean;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  showSubtitle = true,
  monogramOnly = false,
  compactDesktop = false,
}) => {
  const monogramSizes = {
    sm: 'w-7 h-7 sm:w-8 sm:h-8',
    md: compactDesktop
      ? 'w-7 h-7 2xl:w-8 2xl:h-8'
      : 'w-9 h-9 sm:w-11 sm:h-11',
    lg: 'w-14 h-14 sm:w-16 sm:h-16',
  };

  const titleSizes = {
    sm: 'text-xs sm:text-sm tracking-[0.16em] sm:tracking-[0.2em]',
    md: compactDesktop
      ? 'text-[12px] 2xl:text-[13px] tracking-[0.14em] 2xl:tracking-[0.18em]'
      : 'text-base sm:text-lg tracking-[0.24em]',
    lg: 'text-2xl sm:text-3xl tracking-[0.26em]',
  };

  const subSizes = {
    sm: 'text-[8.5px] sm:text-[9px] tracking-[0.18em]',
    md: compactDesktop
      ? 'text-[8px] 2xl:text-[9px] tracking-[0.12em] 2xl:tracking-[0.16em]'
      : 'text-[10px] sm:text-[11px] tracking-[0.26em]',
    lg: 'text-xs sm:text-sm tracking-[0.3em]',
  };

  return (
    <div
      className={`inline-flex items-center select-none ${
        compactDesktop ? 'gap-2 2xl:gap-2.5' : 'gap-3 sm:gap-3.5'
      } ${className}`}
    >
      {/* Official FGA Logo Emblem */}
      <div
        className={`relative flex items-center justify-center rounded-sm overflow-hidden border border-[#C79A52]/70 bg-[#061321] transition-all duration-300 shadow-md flex-shrink-0 ${monogramSizes[size]}`}
      >
        <img
          src={fgaLogo}
          alt="FGA Advocacia"
          className="w-full h-full object-contain p-0.5"
          referrerPolicy="no-referrer"
        />
      </div>

      {!monogramOnly && (
        <div className="flex flex-col min-w-0">
          <div className="flex items-center gap-1.5 sm:gap-2">
            <span
              className={`font-serif font-semibold text-[#F5F3EF] uppercase whitespace-nowrap leading-none ${titleSizes[size]}`}
            >
              FGA <span className="text-[#C79A52] font-normal">Advocacia</span>
            </span>
          </div>

          {showSubtitle && (
            <div
              className={`items-center gap-1 sm:gap-1.5 mt-0.5 2xl:mt-1 opacity-90 ${
                compactDesktop ? 'hidden 2xl:flex' : 'flex'
              }`}
            >
              <div className="h-[1px] w-2 2xl:w-2.5 bg-[#C79A52]/50 flex-shrink-0" />
              <div className="flex items-center gap-1 text-[#C79A52]">
                <svg
                  className="w-2 h-2 2xl:w-2.5 2xl:h-2.5 inline-block opacity-80 flex-shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m16 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="m2 16 3-8 3 8c-.87.65-1.92 1-3 1s-2.13-.35-3-1Z" />
                  <path d="M7 21h10" />
                  <path d="M12 3v18" />
                  <path d="M3 7h2c2 0 5-1 7-2 2 1 5 2 7 2h2" />
                </svg>
                <span
                  className={`font-sans uppercase text-[#C79A52] font-medium whitespace-nowrap leading-none ${subSizes[size]}`}
                >
                  Previdenciário <span className="text-[#F5F3EF]/40 font-light mx-0.5">|</span> Servidor Público
                </span>
              </div>
              <div className="h-[1px] w-2 2xl:w-2.5 bg-[#C79A52]/50 flex-shrink-0" />
            </div>
          )}
        </div>
      )}
    </div>
  );
};
