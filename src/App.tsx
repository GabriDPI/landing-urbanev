import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Benefits } from './components/Benefits';
import { Authority } from './components/Authority';
import { SocialProof } from './components/SocialProof';
import { LastCall } from './components/LastCall';
import { Footer } from './components/Footer';
import { TechSpecsModal } from './components/TechSpecsModal';
import { Sparkles, ArrowRight } from 'lucide-react';

const CTA_DESTINATION_URL =
  'https://calendar.app.google/eUNe5gDmQoYs85qu8';

export default function App() {
  const [isSpecsOpen, setIsSpecsOpen] = useState(false);

  return (
    <div className="min-h-screen flex flex-col bg-white text-slate-900 selection:bg-blue-100 selection:text-blue-900">
      {/* Top Banner sutil de disponibilidad */}
      <div className="bg-[#4285F4] text-white text-xs font-semibold py-2 px-4 text-center tracking-wide flex items-center justify-center gap-2">
        <span className="w-2 h-2 rounded-full bg-[#FBBC05] animate-ping" />
        <span>¡Lanzamiento exclusivo! Solo restan 50 unidades asignables del primer lote europeo.</span>
      </div>

      {/* Top Bar Navigation */}
      <Navbar ctaUrl={CTA_DESTINATION_URL} />

      {/* Main Content Sections strictly adhering to user's specification */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          ctaUrl={CTA_DESTINATION_URL}
          onOpenSpecs={() => setIsSpecsOpen(true)}
        />

        {/* 2. Sección de Beneficios (Grid 3 columnas + CTA centrado) */}
        <Benefits ctaUrl={CTA_DESTINATION_URL} />

        {/* 3. Sección de Autoridad (Bloque horizontal con fondo sólido) */}
        <Authority />

        {/* 4. Sección de Prueba Social (Dos testimonios con foto circular) */}
        <SocialProof />

        {/* 5. Sección Final (Last Call con fondo oscuro y CTA) */}
        <LastCall ctaUrl={CTA_DESTINATION_URL} />
      </main>

      {/* Footer */}
      <Footer ctaUrl={CTA_DESTINATION_URL} />

      {/* Modal interactivo de Ficha Técnica */}
      <TechSpecsModal
        isOpen={isSpecsOpen}
        onClose={() => setIsSpecsOpen(false)}
        ctaUrl={CTA_DESTINATION_URL}
      />

      {/* Floating Sticky Mobile CTA (<15% viewport height cap compliant) */}
      <div className="md:hidden fixed bottom-3 left-3 right-3 z-40 bg-white/95 backdrop-blur-md p-2.5 rounded-2xl border border-slate-300 shadow-2xl flex items-center justify-between gap-3">
        <div className="flex flex-col pl-1">
          <span className="text-[11px] font-bold text-[#EA4335] leading-tight">
            Últimas 50 unidades
          </span>
          <span className="text-[10px] text-slate-500">
            Reserva sin compromiso
          </span>
        </div>
        <a
          href={CTA_DESTINATION_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 px-4 py-2 bg-[#EA4335] hover:bg-[#d93025] text-white text-xs font-bold rounded-xl shadow-md cursor-pointer shrink-0"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#FBBC05]" />
          <span>Reservar</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </a>
      </div>
    </div>
  );
}
