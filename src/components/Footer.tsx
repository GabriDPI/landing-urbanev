import React from 'react';
import logoImg from '../assets/logo.png';

interface FooterProps {
  ctaUrl: string;
}

export const Footer: React.FC<FooterProps> = ({ ctaUrl }) => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-slate-800">
          
          {/* Brand Logo */}
          <div className="flex items-center gap-3">
            <div className="bg-white px-3 py-1 rounded-lg flex items-center">
              <img
                src={logoImg}
                alt="Logo"
                className="h-6 w-auto object-contain"
              />
            </div>
            <span className="text-xs text-slate-400">
              · Micromovilidad Eléctrica Urbana
            </span>
          </div>

          {/* Nav links mirror */}
          <div className="flex flex-wrap items-center justify-center gap-6 text-xs text-slate-400">
            <a href="#hero" className="hover:text-white transition-colors">Inicio</a>
            <a href="#beneficios" className="hover:text-white transition-colors">Beneficios</a>
            <a href="#autoridad" className="hover:text-white transition-colors">Autoridad</a>
            <a href="#testimonios" className="hover:text-white transition-colors">Testimonios</a>
            <a href="#oferta" className="hover:text-white transition-colors">Últimas Unidades</a>
            <a
              href={ctaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#4285F4] hover:underline font-semibold"
            >
              Agenda tu Reserva Oficial
            </a>
          </div>

        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Movilidad Eléctrica Urbana. Todos los derechos reservados.</p>
          <p className="text-center sm:text-right">
            Configurado para despliegue estático directo en GitHub Pages y Cloudflare Workers & Pages.
          </p>
        </div>
      </div>
    </footer>
  );
};
