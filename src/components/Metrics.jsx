import React from 'react';

export default function Metrics() {
  const stats = [
    { number: "+150", label: "Usuarios Técnicos", sublabel: "Formados en código" },
    { number: "100%", label: "Proyectos a Término", sublabel: "Entregados con éxito" },
    { number: "-25%", label: "Tasa de Deserción", sublabel: "Reducida en talleres" },
    { number: "+5", label: "Años de Trayectoria", sublabel: "En roles híbridos" }
  ];

  return (
    <div className="w-full max-w-5xl mx-auto py-8 border-t border-b border-zinc-900/60 my-12 animate-fade-in">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
        {stats.map((stat, index) => (
          <div key={index} className="p-4 rounded-2xl bg-zinc-950/20 border border-zinc-900/40 hover:border-zinc-800/60 transition-colors group">
            {/* Número gigante en Cyan con tipografía monoespaciada estilo consola */}
            <div className="text-4xl md:text-5xl font-black text-cyan-400 font-mono tracking-tight group-hover:scale-105 transition-transform duration-300">
              {stat.number}
            </div>
            {/* Título de la métrica */}
            <div className="mt-2 text-xs md:text-sm font-bold text-zinc-300 uppercase tracking-wider">
              {stat.label}
            </div>
            {/* Detalle secundario */}
            <div className="text-[11px] md:text-xs text-zinc-500 mt-1 font-medium font-sans">
              {stat.sublabel}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}