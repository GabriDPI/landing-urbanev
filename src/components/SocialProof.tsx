import React from 'react';
import { Star, Quote, CheckCircle2 } from 'lucide-react';
import femaleAvatar from '../assets/images/avatar_testimonial_female_1792420761753.jpg';
import maleAvatar from '../assets/images/avatar_testimonial_male_1792420760863.jpg';

export const SocialProof: React.FC = () => {
  const testimonials = [
    {
      name: 'Elena Romero',
      role: 'Emprendedora & Diseñadora de Espacios, Madrid',
      avatar: femaleAvatar,
      quote:
        'Llevo 8 meses utilizándolo a diario y mejora todo. Se aparca en 20 segundos sin dar vueltas ni estresarse, y al final no es solo lo que te ahorra en tiempo y atascos, sino la auténtica calidad de vida y paz mental que ganas cada día.',
      rating: 5,
      verified: 'Compradora verificada - 8 meses de uso diario',
      highlight: 'Calidad de vida y aparcamiento en 20 segundos'
    },
    {
      name: 'Carlos Mendoza',
      role: 'Consultor de Operaciones & Tech Lead, Barcelona',
      avatar: maleAvatar,
      quote:
        'La facilidad de carga en el enchufe normal de 220V como si fuera un móvil fue lo que me convenció por completo. Es comodísimo, silencioso y en trayectos urbanos es incluso más rápido que mi antiguo coche porque te mueves con una soltura increíble. Una de las mejores compras que he hecho en años.',
      rating: 5,
      verified: 'Comprador verificado - Lote Anticipado',
      highlight: 'Recarga completa por menos de 1 euro'
    }
  ];

  return (
    <section id="testimonios" className="py-20 lg:py-28 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabecera */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-[#34A853] bg-emerald-50 mb-3">
            Experiencias reales
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight font-display" style={{ textWrap: 'balance' }}>
            Quienes ya lo conducen no vuelven al coche tradicional
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-600">
            Opiniones de los primeros conductores que ya disfrutan de la libertad de moverse en este carrito eléctrico por nuestras ciudades.
          </p>
        </div>

        {/* Dos Testimonios con Foto Circular, Nombre y Opinión */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {testimonials.map((item, idx) => (
            <div
              key={idx}
              className="relative flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300"
            >
              {/* Quote mark decoration */}
              <Quote className="absolute top-6 right-6 w-10 h-10 text-slate-200 pointer-events-none stroke-1" />

              <div>
                {/* Estrellas */}
                <div className="flex items-center gap-1 mb-6">
                  {Array.from({ length: item.rating }).map((_, sIdx) => (
                    <Star
                      key={sIdx}
                      className="w-5 h-5 text-[#FBBC05] fill-[#FBBC05]"
                    />
                  ))}
                  <span className="ml-2 text-xs font-bold text-slate-500">
                    5.0 / 5.0
                  </span>
                </div>

                {/* Opinión del cliente */}
                <p className="text-base sm:text-lg text-slate-700 font-normal leading-relaxed italic mb-8 relative z-10">
                  «{item.quote}»
                </p>
              </div>

              {/* Identidad del cliente con Foto Circular */}
              <div className="flex items-center gap-4 pt-6 border-t border-slate-100">
                <img
                  src={item.avatar}
                  alt={item.name}
                  referrerPolicy="no-referrer"
                  className="w-16 h-16 rounded-full object-cover border-2 border-white shadow-md ring-2 ring-slate-100 shrink-0"
                />
                <div>
                  <h4 className="text-base sm:text-lg font-bold text-slate-900">
                    {item.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-slate-500">
                    {item.role}
                  </p>
                  <div className="flex items-center gap-1 mt-1 text-xs font-semibold text-[#34A853]">
                    <CheckCircle2 className="w-3.5 h-3.5" />
                    <span>{item.verified}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Resumen de puntuación */}
        <div className="mt-12 text-center text-xs text-slate-500">
          ⭐ Valoración media de 4.9/5 basada en 420+ cuestionarios de satisfacción de usuarios.
        </div>

      </div>
    </section>
  );
};
