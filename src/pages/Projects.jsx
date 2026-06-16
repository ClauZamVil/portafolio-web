import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 p-8 font-mono relative">
      <div className="max-w-4xl mx-auto">
        <Link to="/" className="text-xs text-cyan-400 hover:underline mb-12 inline-block">&larr; return_home</Link>
        <h2 className="text-3xl font-bold mb-8 text-white">// projects</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white/[0.02] border border-white/5 p-6 rounded-xl hover:border-cyan-500/30 hover:-translate-y-1 transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-white">Gestión Escolar</h3>
              <span className="text-[10px] bg-amber-500/10 text-amber-400 px-2 py-0.5 rounded border border-amber-500/20">WIP</span>
            </div>
            <p className="text-xs text-slate-400 mb-6 leading-relaxed">
              Plataforma para el control de asistencia y métricas en talleres comunitarios.
            </p>
            <div className="text-[10px] text-slate-500">React • Node.js • SQL</div>
          </div>
        </div>
      </div>
    </div>
  );
}