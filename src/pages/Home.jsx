import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 flex flex-col justify-between p-8 relative overflow-hidden font-mono selection:bg-cyan-500/30">
      {/* Efecto de luz neón de fondo */}
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] rounded-full bg-indigo-500/10 blur-[140px] pointer-events-none"></div>

      {/* MENÚ SUPERIOR (Navegación idéntica a tu referencia) */}
      <nav className="flex justify-center gap-8 text-sm text-slate-400 py-4 relative z-10">
        <Link to="/projects" className="hover:text-cyan-400 transition-colors duration-300">Projects</Link>
        <Link to="/about" className="hover:text-purple-400 transition-colors duration-300">About</Link>
        <Link to="/contact" className="hover:text-emerald-400 transition-colors duration-300">Contact</Link>
      </nav>

      {/* CONTENIDO CENTRAL CON TRANSICIÓN SUAVE */}
      <div className="max-w-4xl mx-auto text-center my-auto relative z-10 px-4 space-y-8">
        <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-white select-none bg-clip-text text-transparent bg-gradient-to-b from-white via-white to-slate-500/50 drop-shadow-[0_0_35px_rgba(255,255,255,0.1)] transition-transform duration-700 hover:scale-[1.02]">
          tu_nombre
        </h1>
        
        <div className="space-y-4 max-w-xl mx-auto">
          <p className="text-sm md:text-base text-cyan-400 font-medium tracking-wide">
            Hi, my name is Tu Nombre. 💻 | 👨‍🏫 | 📈
          </p>
          <p className="text-xs md:text-sm text-slate-400 leading-relaxed">
            Analista en Programación Computacional especializado en la Gestión de Proyectos de impacto socioeducativo.
          </p>
        </div>
      </div>

      {/* PIE DE PÁGINA SIMPLE */}
      <footer className="text-center text-[10px] text-slate-600 tracking-widest uppercase">
        © 2026 // built with react & tailwind
      </footer>
    </div>
  );
}