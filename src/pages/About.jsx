import React from 'react';
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div className="min-h-screen bg-[#0b0f19] text-slate-100 p-8 font-mono relative">
      <div className="max-w-3xl mx-auto">
        <Link to="/" className="text-xs text-purple-400 hover:underline mb-12 inline-block">&larr; return_home</Link>
        <h2 className="text-3xl font-bold mb-8 text-white">// background_and_history</h2>
        
        <div className="space-y-8 text-sm text-slate-400 leading-relaxed">
          <p>
            Mi trayectoria une dos mundos: la rigurosidad lógica de la <span className="text-white font-semibold">programación computacional</span> y la gestión humana de la <span className="text-white font-semibold">docencia social</span>.
          </p>
          <div className="border-l-2 border-purple-500/30 pl-4 space-y-4">
            <div>
              <h4 className="text-white font-bold text-base">Docente y Gestor Tecnológico</h4>
              <span className="text-xs text-purple-400">2021 - Presente</span>
              <p className="text-xs mt-1">Liderazgo de talleres técnicos orientados al desarrollo de habilidades digitales en comunidades vulnerables.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}