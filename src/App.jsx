import React from 'react';
import './index.css';

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans selection:bg-blue-500 selection:text-white">
      {/* 1. HERO SECTION (Encabezado) */}
      <header className="max-w-4xl mx-auto px-6 pt-24 pb-16">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
          Tu Nombre Completo
        </h1>
        <p className="mt-4 text-xl text-blue-600 font-medium">
          Analista en Programación Computacional & Gestor de Proyectos Socioeducativos
        </p>
        <p className="mt-6 text-base text-gray-600 leading-relaxed max-w-2xl">
          Conecto la lógica del desarrollo de software con el impacto social y educativo. 
          Mi experiencia como docente me permite gestionar proyectos con empatía, 
          comunicación asertiva y una visión clara de cómo la tecnología puede transformar entornos.
        </p>
        <div className="mt-8 flex gap-4">
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition">
            ✉️ Contacto
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition">
            💼 LinkedIn
          </a>
          <a href="#" className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition">
            🐱 GitHub
          </a>
        </div>
      </header>

      <main className="max-w-4xl mx-auto px-6 space-y-20 pb-24">
        {/* 2. STACK TECNOLÓGICO Y HABILIDADES */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-6 flex items-center gap-2">
            💻 Stack & Competencias
          </h2>
          <div className="flex flex-wrap gap-2">
            {['React', 'JavaScript', 'Node.js', 'SQL', 'Git & GitHub', 'Gestión de Proyectos', 'Metodologías Ágiles', 'Diseño Instruccional'].map((skill) => (
              <span key={skill} className="bg-white text-gray-700 text-xs px-3 py-1.5 rounded-md border border-gray-200 shadow-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </section>

        {/* 3. EXPERIENCIA DESTACADA (Gestión y Docencia) */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-6 flex items-center gap-2">
            🎓 Trayectoria Socioeducativa y Gestión
          </h2>
          <div className="space-y-8">
            <div className="relative pl-6 border-l-2 border-blue-500">
              <h3 className="font-semibold text-gray-900 text-lg">Docente y Gestor de Proyecto</h3>
              <p className="text-sm text-gray-500 mb-2">Institución o Proyecto Social | Periodo</p>
              <p className="text-gray-600 text-sm leading-relaxed">
                Lideré la planificación e implementación de talleres tecnológicos para comunidades. 
                Coordiné equipos de trabajo, adaptando metodologías complejas a lenguaje cercano y logrando un aumento del X% en la retención de alumnos.
              </p>
            </div>
          </div>
        </section>

        {/* 4. PROYECTOS (Tus Trabajos Técnicos) */}
        <section className="border-t border-gray-200 pt-12">
          <h2 className="text-xs font-semibold tracking-wider text-gray-400 uppercase mb-6 flex items-center gap-2">
            📁 Proyectos de Desarrollo
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col justify-between">
              <div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-semibold text-gray-900">Plataforma de Gestión Escolar (WIP)</h3>
                  <span className="text-[10px] font-bold tracking-wide uppercase bg-amber-50 text-amber-700 border border-amber-200 px-2 py-0.5 rounded">
                    En Progreso
                  </span>
                </div>
                <p className="text-xs text-gray-600 mb-4 leading-relaxed">
                  Aplicación web diseñada para automatizar la asistencia y reportes de notas en talleres sociales. Fase 1 (Base de datos y Login) completada.
                </p>
              </div>
              <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100">
                <span className="text-[11px] text-gray-400 font-mono">React • Node.js • PostgreSQL</span>
                <a href="#" className="text-xs font-medium text-blue-600 hover:underline">Código &rarr;</a>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}