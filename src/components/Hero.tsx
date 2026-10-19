import React from 'react';
import { ArrowRight, Zap, Armchair, CheckCircle2, ShieldCheck, Flame } from 'lucide-react';
import heroImage from '../assets/images/hero_electric_city_car_1792420761512.jpg';

interface HeroProps {
  ctaUrl: string;
  onOpenSpecs?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ ctaUrl, onOpenSpecs }) => {
  return (
    <section id="hero" className="relative overflow-hidden pt-12 pb-20 lg:pt-20 lg:pb-28 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 border-b border-slate-200">
      {/* Decorative subtle ambient glows inspired by Google colors */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-blue-100/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 right-10 w-80 h-80 bg-amber-100/30 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* Lado Izquierdo: Copywriting, CTA y Lista de 3 Beneficios Rápidos */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            {/* Urgency Badge */}
            <div className="inline-flex items-center gap-2 mb-6 text-xs sm:text-sm font-bold text-[#EA4335] bg-red-50 border border-red-200 px-3.5 py-1.5 rounded-full w-fit">
              <Flame className="w-4 h-4 text-[#EA4335] fill-[#EA4335]" />
              <span>Primer lote de importación oficial con stock limitado</span>
            </div>

            {/* Título Principal Grande */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-950 tracking-tight leading-[1.12] mb-6 font-display" style={{ textWrap: 'balance' }}>
              La revolución en el viaje por ciudad: <br className="hidden sm:inline" />
              <span className="text-[#4285F4]">cómodo</span> y <span className="text-[#34A853]">rápido</span>.
            </h1>

            {/* Subtítulo Claro */}
            <p className="text-lg sm:text-xl text-slate-600 font-medium mb-8 leading-relaxed max-w-2xl">
              Descubre el carrito eléctrico que está de moda en China. Diseñado específicamente para dominar las calles urbanas sin estrés, sin ruidos y sin gastar en gasolina.
            </p>

            {/* Botón CTA Llamativo */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-10">
              <a
                href={ctaUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#EA4335] hover:bg-[#d93025] rounded-xl shadow-lg hover:shadow-xl hover:shadow-red-500/25 transition-all duration-200 hover:-translate-y-0.5 active:translate-y-0 text-center cursor-pointer"
              >
                <span>Últimas 50 unidades</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>

              {onOpenSpecs && (
                <button
                  type="button"
                  onClick={onOpenSpecs}
                  className="inline-flex items-center justify-center gap-2 px-6 py-4 text-sm font-semibold text-slate-700 bg-white hover:bg-slate-50 border border-slate-300 rounded-xl transition-colors cursor-pointer"
                >
                  <ShieldCheck className="w-4 h-4 text-[#4285F4]" />
                  Ver Ficha Técnica
                </button>
              )}
            </div>

            {/* Micro-garantía */}
            <div className="flex items-center gap-6 text-xs text-slate-500 mb-8 pb-8 border-b border-slate-200">
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#34A853]" /> Homologado en Europa
              </span>
              <span className="flex items-center gap-1.5 font-medium">
                <CheckCircle2 className="w-4 h-4 text-[#34A853]" /> Garantía Oficial 3 Años
              </span>
              <span className="flex items-center gap-1.5 font-medium hidden sm:flex">
                <CheckCircle2 className="w-4 h-4 text-[#34A853]" /> Envío a Domicilio
              </span>
            </div>

            {/* Debajo: Lista de 3 Puntos Destacados (Beneficios Rápidos) */}
            <div className="space-y-4 pt-1">
              <div className="text-xs uppercase font-extrabold tracking-wider text-slate-400">
                Beneficios rápidos clave
              </div>
              
              <ul className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {/* 1. Velocidad */}
                <li className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Zap className="w-4 h-4 text-[#4285F4]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Velocidad</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Agilidad urbana total sin atascos ni demoras.
                    </p>
                  </div>
                </li>

                {/* 2. Comodidad */}
                <li className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 flex items-center justify-center shrink-0 mt-0.5">
                    <Armchair className="w-4 h-4 text-[#34A853]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Comodidad</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Cabina climatizada, silenciosa y ergonómica.
                    </p>
                  </div>
                </li>

                {/* 3. Facilidad */}
                <li className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-xs">
                  <div className="w-8 h-8 rounded-lg bg-amber-50 flex items-center justify-center shrink-0 mt-0.5">
                    <CheckCircle2 className="w-4 h-4 text-[#FBBC05]" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-slate-900">Facilidad</h4>
                    <p className="text-xs text-slate-600 mt-0.5">
                      Aparca en cualquier rincón y enchufa a 220V.
                    </p>
                  </div>
                </li>
              </ul>
            </div>

          </div>

          {/* Lado Derecho: Espacio para Imagen / Ilustración Relevante */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Contenedor de Imagen de Alta Fidelidad */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-slate-900">
                <img
                  src={heroImage}
                  alt="Carrito eléctrico urbano moderno y compacto de moda en China"
                  referrerPolicy="no-referrer"
                  className="w-full h-[360px] sm:h-[440px] lg:h-[490px] object-cover object-center transform hover:scale-105 transition-transform duration-700"
                />

                {/* Floating Specs Card */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md p-4 rounded-2xl border border-slate-100 shadow-lg">
                  <div className="grid grid-cols-3 gap-2 text-center divide-x divide-slate-100">
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Autonomía</div>
                      <div className="text-base sm:text-lg font-black text-slate-900 tabular-nums">180 km</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Recarga</div>
                      <div className="text-base sm:text-lg font-black text-[#34A853] tabular-nums">Enchufe 220V</div>
                    </div>
                    <div>
                      <div className="text-xs text-slate-500 font-medium">Velocidad</div>
                      <div className="text-base sm:text-lg font-black text-[#4285F4] tabular-nums">65 km/h</div>
                    </div>
                  </div>
                </div>

                {/* Badge Superior */}
                <div className="absolute top-4 left-4 bg-slate-950/80 backdrop-blur-md text-white text-xs font-semibold px-3 py-1.5 rounded-lg flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-[#34A853]"></span>
                  100% Eléctrico Urbano
                </div>
              </div>

              {/* Decorative Card Accent */}
              <div className="absolute -bottom-6 -right-6 hidden sm:flex items-center gap-3 bg-white p-4 rounded-2xl border border-slate-200 shadow-xl max-w-xs z-10">
                <div className="w-10 h-10 rounded-xl bg-red-50 flex items-center justify-center shrink-0">
                  <Flame className="w-5 h-5 text-[#EA4335]" />
                </div>
                <div>
                  <div className="text-xs font-bold text-slate-900">Alta Demanda</div>
                  <div className="text-[11px] text-slate-500">Más de 230 solicitudes esta semana</div>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
