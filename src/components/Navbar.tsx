import React from 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

import logoImg from '../assets/logo.png';

interface NavbarProps {
  ctaUrl: string;
}

export const Navbar: React.FC<NavbarProps> = ({ ctaUrl }) => {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 sm:h-24 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Logo */}
        <a href="#hero" className="flex items-center group whitespace-nowrap shrink-0">
          <img
            src={logoImg}
            alt="Logo"
            className="h-11 sm:h-13 md:h-14 w-auto object-contain hover:opacity-90 transition-opacity"
          />
        </a>

        {/* Zone 2: Navigation Links */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <a href="#beneficios" className="hover:text-[#4285F4] transition-colors whitespace-nowrap shrink-0">
            Beneficios
          </a>
          <a href="#autoridad" className="hover:text-[#4285F4] transition-colors whitespace-nowrap shrink-0">
            Autoridad & Datos
          </a>
          <a href="#testimonios" className="hover:text-[#4285F4] transition-colors whitespace-nowrap shrink-0">
            Testimonios
          </a>
          <a href="#oferta" className="hover:text-[#4285F4] transition-colors whitespace-nowrap shrink-0">
            Oferta Especial
          </a>
        </nav>

        {/* Zone 3: Primary CTA */}
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-xs sm:text-sm font-bold text-white bg-[#4285F4] hover:bg-[#3367D6] rounded-xl shadow-md hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5 whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Sparkles className="w-4 h-4 text-[#FBBC05]" />
            <span>Últimas 50 unidades</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </header>
  );
};
