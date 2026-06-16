import React from 'react';
import { Link } from 'react-router-dom';

export default function Projects() {
  return (
    <div className="min-h-screen bg-black text-zinc-300 p-8 md:p-16 font-sans relative overflow-hidden">
      {/* Fondo decorativo */}
      <div className="absolute top-0 right-0 w-[30vw] h-[30vw] bg-zinc-900/40 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Botón de retorno */}
        <Link to="/" className="text-xs text-zinc-500 hover:text-white transition-colors duration-300 font-mono inline-flex items-center gap-1 mb-12 group">
          <span className="group-hover:-translate-x-1 transition-transform">&larr;</span> back_to_home
        </Link>

        <header className="mb-16 border-b border-zinc-800 pb-8">
          <h2 className="text-4xl font-extrabold tracking-tight text-white mb-2">Projects</h2>
          <p className="text-sm text-zinc-500 font-mono">Algunos de mis trabajos técnicos y proyectos en desarrollo (WIP).</p>
        </header>
        
        {/* Malla de tarjetas interactivas */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="group relative bg-zinc-950/40 border border-zinc-900 rounded-xl p-6 hover:border-zinc-700 transition-all duration-500 hover:shadow-[0_0_30px_rgba(255,255,255,0.02)]">
            <div className="flex justify-between items-start mb-4">
              <h3 className="text-lg font-bold text-zinc-100 group-hover:text-white transition-colors">Plataforma de Gestión Escolar</h3>
              <span className="text-[10px] bg-zinc-800 text-zinc-400 font-mono px-2 py-0.5 rounded uppercase tracking-wider">In Progress</span>
            </div>
            <p className="text-xs text-zinc-400 mb-8 leading-relaxed">
              Aplicación diseñada para automatizar reportes y asistencia en talleres educativos de carácter social.
            </p>
            <div className="flex justify-between items-center pt-4 border-t border-zinc-900 text-[11px] font-mono text-zinc-600 group-hover:text-zinc-500 transition-colors">
              <span>React • Node.js</span>
              <a href="#" className="text-zinc-400 hover:text-white font-bold">view_code &rarr;</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}