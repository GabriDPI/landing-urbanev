import React from 'react';
import { Zap, Armchair, PlugZap, ArrowRight, Check } from 'lucide-react';

interface BenefitsProps {
  ctaUrl: string;
}

export const Benefits: React.FC<BenefitsProps> = ({ ctaUrl }) => {
  const benefitsList = [
    {
      icon: Zap,
      iconColor: 'text-[#4285F4]',
      bgColor: 'bg-blue-50',
      borderColor: 'hover:border-[#4285F4]',
      badgeColor: 'bg-blue-100 text-[#4285F4]',
      title: 'Velocidad & Agilidad Urbana',
      tagline: 'Llega primero y sin atascos',
      description:
        'Aceleración eléctrica inmediata y radio de giro ultra reducido. Te permite fluir ágilmente entre el tráfico denso de las horas punta y llegar a tu destino ahorrando hasta 35 minutos cada día.',
      highlights: [
        'Aceleración 0-50 km/h en segundos',
        'Radio de giro de solo 3.8 metros',
        'Velocidad crucero urbana optimizada'
      ]
    },
    {
      icon: Armchair,
      iconColor: 'text-[#34A853]',
      bgColor: 'bg-emerald-50',
      borderColor: 'hover:border-[#34A853]',
      badgeColor: 'bg-emerald-100 text-[#34A853]',
      title: 'Comodidad Superior',
      tagline: 'Tu cápsula de tranquilidad',
      description:
        'Cabina completamente cerrada, insonorizada y climatizada con aire acondicionado y calefacción. Disfruta de un habitáculo silencioso, asientos ergonómicos envolventes y pantalla táctil con conectividad Bluetooth.',
      highlights: [
        'Climatización inteligente frío/calor',
        'Aislamiento acústico de vibraciones',
        'Pantalla multimedia táctil HD'
      ]
    },
    {
      icon: PlugZap,
      iconColor: 'text-[#FBBC05]',
      bgColor: 'bg-amber-50',
      borderColor: 'hover:border-[#FBBC05]',
      badgeColor: 'bg-amber-100 text-amber-800',
      title: 'Facilidad de Carga & Parking',
      tagline: 'Cero complicaciones cotidianas',
      description:
        'No necesitas costosos puntos de recarga especiales: se enchufa en cualquier toma doméstica de 220V como tu teléfono. Aparca en cualquier hueco diminuto donde ningún coche convencional cabe jamás.',
      highlights: [
        'Enchufe convencional doméstico 220V',
        'Aparcamiento en 1/3 de espacio habitual',
        'Coste de solo 0.50€ cada 100 kilómetros'
      ]
    }
  ];

  return (
    <section id="beneficios" className="py-20 lg:py-28 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#4285F4] bg-blue-50 mb-3">
            Ventajas competitivas
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display" style={{ textWrap: 'balance' }}>
            Tres razones definitivas para dar el salto a la movilidad del futuro
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600 leading-relaxed">
            Diseñado en base a los millones de usuarios que ya han transformado sus ciudades en Asia. Eficiencia máxima sin renunciar a nada.
          </p>
        </div>

        {/* Grid de 3 columnas */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {benefitsList.map((item, index) => {
            const Icon = item.icon;
            return (
              <div
                key={index}
                className={`relative flex flex-col justify-between p-8 rounded-2xl bg-slate-50/70 border border-slate-200 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 ${item.borderColor}`}
              >
                <div>
                  {/* Icono con fondo tonal */}
                  <div className={`w-14 h-14 rounded-2xl ${item.bgColor} flex items-center justify-center mb-6`}>
                    <Icon className={`w-7 h-7 ${item.iconColor}`} />
                  </div>

                  {/* Tagline sutil */}
                  <div className="text-xs font-bold text-slate-400 uppercase tracking-wider mb-2">
                    {item.tagline}
                  </div>

                  {/* Título */}
                  <h3 className="text-xl sm:text-2xl font-bold text-slate-900 mb-4 font-display">
                    {item.title}
                  </h3>

                  {/* Breve descripción */}
                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed mb-6">
                    {item.description}
                  </p>
                </div>

                {/* Lista de viñetas de soporte */}
                <div className="pt-4 border-t border-slate-200/80 space-y-2.5">
                  {item.highlights.map((highlight, hIdx) => (
                    <div key={hIdx} className="flex items-center gap-2 text-xs sm:text-sm font-medium text-slate-700">
                      <div className="w-4 h-4 rounded-full bg-slate-200 flex items-center justify-center shrink-0">
                        <Check className="w-2.5 h-2.5 text-slate-800 stroke-[3]" />
                      </div>
                      <span>{highlight}</span>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Debajo: Botón CTA Centrado */}
        <div className="flex flex-col items-center justify-center text-center">
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center justify-center gap-3 px-8 py-4 text-base sm:text-lg font-bold text-white bg-[#4285F4] hover:bg-[#3367D6] rounded-xl shadow-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-200 hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Últimas 50 unidades</span>
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </a>
          <p className="mt-3 text-xs sm:text-sm text-slate-500">
            Reserva inmediata sin compromiso de compra • Asignación por orden de agenda
          </p>
        </div>

      </div>
    </section>
  );
};
