import React from 'react';
import { ArrowRight, ShieldCheck, Clock, Flame, Sparkles } from 'lucide-react';

interface LastCallProps {
  ctaUrl: string;
}

export const LastCall: React.FC<LastCallProps> = ({ ctaUrl }) => {
  return (
    <section id="oferta" className="py-20 lg:py-28 bg-slate-950 text-white relative overflow-hidden">
      {/* Decorative gradients in corners */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        {/* Urgency Pill / Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs sm:text-sm font-bold uppercase tracking-wider text-[#EA4335] bg-red-950/70 border border-red-800/60 mb-8">
          <Flame className="w-4 h-4 text-[#EA4335] fill-[#EA4335] animate-pulse" />
          <span>Atención: Asignación por orden estricto de solicitud</span>
        </div>

        {/* Título que Refuerce la Oferta */}
        <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-tight mb-6 font-display text-white" style={{ textWrap: 'balance' }}>
          No te quedes sin el carrito eléctrico que está revolucionando la ciudad
        </h2>

        {/* Subtítulo reforzando la propuesta */}
        <p className="text-lg sm:text-xl text-slate-300 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          El primer embarque homologado está prácticamente reservado. Agenda tu cita oficial ahora para congelar tu precio preferencial de lanzamiento con cargador doméstico rápido incluido sin coste extra.
        </p>

        {/* Stock / Urgency Box */}
        <div className="max-w-md mx-auto p-4 mb-10 rounded-2xl bg-slate-900/90 border border-slate-800 backdrop-blur-md">
          <div className="flex items-center justify-between text-xs sm:text-sm font-semibold mb-2">
            <span className="text-slate-400">Estado de disponibilidad del lote:</span>
            <span className="text-[#EA4335] font-bold flex items-center gap-1">
              <Clock className="w-3.5 h-3.5" /> Quedan solo 14 plazas
            </span>
          </div>
          {/* Progress Bar */}
          <div className="w-full bg-slate-800 h-3 rounded-full overflow-hidden">
            <div
              className="bg-gradient-to-r from-[#FBBC05] via-[#EA4335] to-[#4285F4] h-full rounded-full transition-all duration-1000"
              style={{ width: '72%' }}
            />
          </div>
          <div className="text-[11px] text-slate-500 mt-2 text-right">
            36 de 50 unidades ya adjudicadas
          </div>
        </div>

        {/* Botón CTA Final */}
        <div className="flex flex-col items-center justify-center gap-4">
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-10 py-5 text-lg sm:text-xl font-black text-white bg-[#EA4335] hover:bg-[#d93025] rounded-2xl shadow-2xl hover:shadow-red-600/40 transition-all duration-200 hover:-translate-y-1 active:translate-y-0 cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#FBBC05]" />
            <span>Últimas 50 unidades</span>
            <ArrowRight className="w-6 h-6 group-hover:translate-x-1.5 transition-transform" />
          </a>

          <p className="text-xs sm:text-sm text-slate-400 max-w-lg mt-2">
            Reserva directa en Google Calendar. No compromete la compra definitiva: elige fecha y hora para coordinar color, entrega y opciones de financiación personalizada.
          </p>
        </div>

        {/* Garantías al pie de sección */}
        <div className="mt-14 pt-8 border-t border-slate-800/80 flex flex-wrap justify-center items-center gap-6 sm:gap-10 text-xs text-slate-400">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#34A853]" />
            <span>Reserva 100% segura</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#4285F4]" />
            <span>Garantía de devolución 15 días</span>
          </div>
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-[#FBBC05]" />
            <span>Soporte técnico y recambios en España</span>
          </div>
        </div>

      </div>
    </section>
  );
};
