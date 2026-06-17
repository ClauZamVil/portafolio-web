export const portfolioData = {
  profile: {
    username: "clauzamvil",
    name: "Claudia",
    // ... mantén tus datos aquí
  },
  socials: {
    // ... mantén tus datos aquí
  },
  
  projects: [
    {
      id: 1,
      title: "Plataforma de Gestión Escolar",
      status: "WIP",
      description: "Sistema integral para la automatización de asistencia.",
      technologies: ["React", "PostgreSQL", "Node.js"],
      codeUrl: "https://github.com/Clauzamvil"
    },
    {
      id: 2,
      title: "E-Commerce Local",
      status: "Completed",
      description: "Pasarela de pagos y administración de stock.",
      technologies: ["JavaScript", "Tailwind CSS"],
      codeUrl: "https://github.com/Clauzamvil"
    },
    {
      id: 3,
      title: "Dashboard de Analítica",
      status: "Optimized",
      description: "Visualización de datos en tiempo real.",
      technologies: ["React", "Chart.js"],
      codeUrl: "https://github.com/Clauzamvil"
    },
    {
      id: 4,
      title: "App de Seguimiento Académico",
      status: "Completed",
      description: "Monitoreo de progreso estudiantil.",
      technologies: ["React", "Node.js"],
      codeUrl: "https://github.com/Clauzamvil"
    },
    {
      id: 5,
      title: "Biblioteca Digital",
      status: "WIP",
      description: "Gestión de recursos pedagógicos.",
      technologies: ["Next.js", "MongoDB"],
      codeUrl: "https://github.com/Clauzamvil"
    },
    {
      id: 6,
      title: "Portal de Mentorías",
      status: "Completed",
      description: "Conexión entre mentores y estudiantes.",
      technologies: ["React", "Supabase"],
      codeUrl: "https://github.com/Clauzamvil"
    },
    {
      id: 7,
      title: "Landing Page Informativa",
      status: "Completed",
      description: "Página institucional dinámica.",
      technologies: ["HTML", "Tailwind"],
      codeUrl: "https://github.com/Clauzamvil"
    }
  ], 
  educationLeadership: [
    {
      id: 1,
      role: "Product Owner Educativo & Docente",
      institution: "Centro de Formación Técnica",
      logoUrl: "https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?q=80&w=100&h=100&fit=crop", 
      period: "2024 - Presente",
      description: "Dirección estratégica y diseño del Roadmap para programas de transferencia tecnológica.",
      impact: "Modelamiento de lógica estructurada en más de 50 usuarios técnicos."
    },
    {
      id: 2,
      role: "Consultor de Currículum Tecnológico",
      institution: "Fundación de Desarrollo Social",
      logoUrl: "https://images.unsplash.com/photo-1592512211372-040b4410a08e?q=80&w=100&h=100&fit=crop",
      period: "2023 - 2024",
      description: "Análisis y refinamiento técnico del backlog de contenidos de programación.",
      impact: "Reducción del 25% en la tasa de deserción inicial."
    },
    {
      id: 3,
      role: "Instructor de Lógica & Algoritmia",
      institution: "Academia de Programación Comunitaria",
      logoUrl: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=100&h=100&fit=crop",
      period: "2022 - 2023",
      description: "Liderazgo de talleres avanzados sobre control de versiones y arquitectura cliente-servidor.",
      impact: "Inserción exitosa de 15 estudiantes en sus primeras pasantías de testing QA."
    }
  ] // <-- Aquí no va punto y coma, es el fin de la propiedad del objeto
}; // <-- Esta llave cierra el objeto 'portfolioData'