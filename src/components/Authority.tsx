import React from 'react';
import { Award, ShieldCheck, BatteryCharging, Wrench, CheckCircle } from 'lucide-react';

export const Authority: React.FC = () => {
  const metrics = [
    {
      value: '+120.000',
      label: 'Unidades vendidas en Asia',
      detail: 'El fenómeno de movilidad urbana más probado del mundo'
    },
    {
      value: '0,45 €',
      label: 'Coste cada 100 km',
      detail: 'Ahorro de más de 1.800€ al año comparado con combustible'
    },
    {
      value: '100%',
      label: 'Eléctrico & Cero Emisiones',
      detail: 'Libre acceso a todas las zonas de bajas emisiones (ZBE)'
    },
    {
      value: '3 Años',
      label: 'Garantía oficial completa',
      detail: 'Cobertura en batería de litio, electrónica y chasis'
    }
  ];

  const trustBadges = [
    { icon: Award, title: 'Homologación CE Oficial', desc: 'Certificado según normativa europea de seguridad vial' },
    { icon: BatteryCharging, title: 'Baterías LFP de Alta Durabilidad', desc: 'Más de 3.000 ciclos de carga garantizados' },
    { icon: ShieldCheck, title: 'Control de Calidad ISO 9001', desc: 'Inspección de 54 puntos previa a la entrega' },
    { icon: Wrench, title: 'Red de Asistencia & Repuestos', desc: 'Disponibilidad de piezas y talleres autorizados' }
  ];

  return (
    <section id="autoridad" className="relative py-20 bg-[#1a73e8] text-white overflow-hidden">
      {/* Decorative background shapes */}
      <div className="absolute inset-0 bg-radial from-white/10 to-transparent pointer-events-none opacity-40" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Frase de Autoridad */}
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-white/15 text-white backdrop-blur-xs mb-4">
            <CheckCircle className="w-3.5 h-3.5 text-[#34A853]" />
            Movilidad líder probada a nivel internacional
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight leading-snug font-display text-white" style={{ textWrap: 'balance' }}>
            «La revolución de los micro-eléctricos que descongestionó las grandes ciudades asiáticas, ahora adaptada y homologada para tu día a día.»
          </h2>
          <p className="mt-4 text-sm sm:text-base text-blue-100 max-w-2xl mx-auto">
            Fabricación de vanguardia con millones de kilómetros acumulados en las condiciones urbanas más exigentes del planeta.
          </p>
        </div>

        {/* Métricas de Autoridad en Bloque Horizontal */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mb-16 pb-16 border-b border-white/20">
          {metrics.map((m, idx) => (
            <div key={idx} className="flex flex-col items-center text-center p-4 rounded-xl bg-white/10 backdrop-blur-xs">
              <span className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight tabular-nums text-white">
                {m.value}
              </span>
              <span className="mt-2 text-sm sm:text-base font-bold text-amber-300">
                {m.label}
              </span>
              <span className="mt-1 text-xs text-blue-100/90 leading-tight">
                {m.detail}
              </span>
            </div>
          ))}
        </div>

        {/* Elementos de Confianza y Sellos de Garantía */}
        <div>
          <div className="text-center text-xs uppercase font-extrabold tracking-widest text-blue-200 mb-8">
            Estándares de seguridad y confianza verificados
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {trustBadges.map((badge, bIdx) => {
              const Icon = badge.icon;
              return (
                <div
                  key={bIdx}
                  className="flex items-start gap-4 p-5 rounded-2xl bg-white/10 border border-white/15 backdrop-blur-xs"
                >
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">
                      {badge.title}
                    </h4>
                    <p className="text-xs text-blue-100 mt-1 leading-relaxed">
                      {badge.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
