import React from 'react';

export default function Skills() {
  // Desglosamos tus herramientas técnicas en píldoras individuales
  const technicalSkills = [
    "React", 
    "JavaScript (ES6)", 
    "Tailwind CSS", 
    "Node.js", 
    "Express", 
    "SQL & Databases", 
    "Git & GitHub", 
    "Lógica & Algoritmia"
  ];

  // Desglosamos tus capacidades de gestión y docencia
  const leadershipSkills = [
    "Gestión de Proyectos", 
    "Scrum", 
    "Jira & Kanban", 
    "Liderazgo de Equipos", 
    "Roadmaps Estratégicos", 
    "Mentoring", 
    "Docencia IT", 
    "Transferencia Tecnológica"
  ];

  return (
    <div className="py-12 w-full max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 border-t border-zinc-900/60 mt-16 animate-fade-in text-left">
      
      {/* Columna Técnica */}
      <div className="space-y-6">
        <h3 className="text-xl font-black text-white tracking-tight underline decoration-cyan-500 underline-offset-8 decoration-2">
          Technical Stack
        </h3>
        <div className="flex flex-wrap gap-2.5 pt-2">
          {technicalSkills.map((skill, index) => (
            <span 
              key={index} 
              className="px-4 py-2 rounded-xl bg-zinc-950/40 border border-zinc-900 text-sm text-zinc-400 font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-zinc-900/20 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      {/* Columna Gestión */}
      <div className="space-y-6">
        <h3 className="text-xl font-black text-white tracking-tight underline decoration-cyan-500 underline-offset-8 decoration-2">
          Leadership & Strategy
        </h3>
        <div className="flex flex-wrap gap-2.5 pt-2">
          {leadershipSkills.map((skill, index) => (
            <span 
              key={index} 
              className="px-4 py-2 rounded-xl bg-zinc-950/40 border border-zinc-900 text-sm text-zinc-400 font-medium hover:border-cyan-500/30 hover:text-cyan-400 hover:bg-zinc-900/20 transition-all duration-300 cursor-default"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

    </div>
  );
}