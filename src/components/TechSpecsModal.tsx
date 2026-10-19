import React from 'react';
import { X, Check, BatteryCharging, Gauge, Shield, Car, ArrowRight } from 'lucide-react';

interface TechSpecsModalProps {
  isOpen: boolean;
  onClose: () => void;
  ctaUrl: string;
}

export const TechSpecsModal: React.FC<TechSpecsModalProps> = ({ isOpen, onClose, ctaUrl }) => {
  if (!isOpen) return null;

  const specs = [
    { label: 'Autonomía máxima', value: 'Hasta 180 km por carga (ciclo urbano)', icon: BatteryCharging },
    { label: 'Velocidad máxima', value: '65 km/h (electrónicamente limitada para ciudad)', icon: Gauge },
    { label: 'Tiempo de recarga', value: '4 a 6 horas en cualquier enchufe convencional 220V', icon: BatteryCharging },
    { label: 'Capacidad de pasajeros', value: '2 adultos + maletero trasero ampliable', icon: Car },
    { label: 'Dimensiones', value: '2.50 m largo × 1.25 m ancho × 1.55 m alto', icon: Car },
    { label: 'Tipo de batería', value: 'Litio Ferrofosfato (LFP) de alta seguridad sin degradación rápida', icon: Shield },
    { label: 'Equipamiento interior', value: 'Aire acondicionado, calefacción, cámara trasera y pantalla táctil', icon: Check },
    { label: 'Permiso de conducción', value: 'Homologación cuadriciclo ligero (conducción desde los 15 años)', icon: Shield }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/70 backdrop-blur-sm animate-fade-in">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden max-h-[90vh] flex flex-col">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-slate-100 bg-slate-50">
          <div>
            <h3 className="text-xl font-bold text-slate-900 font-display">
              Ficha Técnica del Carrito Eléctrico Urbano
            </h3>
            <p className="text-xs text-slate-500 mt-0.5">
              Especificaciones oficiales del modelo en homologación europea
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-2 text-slate-400 hover:text-slate-700 hover:bg-slate-200/50 rounded-full transition-colors cursor-pointer"
            aria-label="Cerrar ventana"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 overflow-y-auto space-y-3">
          {specs.map((s, idx) => {
            const Icon = s.icon;
            return (
              <div
                key={idx}
                className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-50 border border-slate-200/70 text-sm"
              >
                <div className="w-8 h-8 rounded-lg bg-blue-100/60 flex items-center justify-center shrink-0 mt-0.5">
                  <Icon className="w-4 h-4 text-[#4285F4]" />
                </div>
                <div className="flex-1">
                  <div className="text-xs font-bold text-slate-500 uppercase tracking-wide">
                    {s.label}
                  </div>
                  <div className="text-sm font-semibold text-slate-900 mt-0.5">
                    {s.value}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 bg-slate-50 border-t border-slate-100 flex items-center justify-between gap-4">
          <button
            onClick={onClose}
            className="px-4 py-2 text-sm font-semibold text-slate-600 hover:text-slate-900 cursor-pointer"
          >
            Cerrar
          </button>
          <a
            href={ctaUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 text-sm font-bold text-white bg-[#EA4335] hover:bg-[#d93025] rounded-xl shadow-md transition-colors cursor-pointer"
          >
            <span>Últimas 50 unidades</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </div>
  );
};
