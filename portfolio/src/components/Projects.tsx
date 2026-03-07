import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa'

const content = {
  pt: {
    title: 'Projetos',
    subtitle: 'O que eu construí',
    projects: [
      {
        title: 'Pet Colúmbia — Agendamento',
        description: 'Sistema web full-stack de agendamento para pet shop com Clean Architecture. Backend Java 21 + Spring Boot, autenticação JWT, cache Redis e infraestrutura AWS provisionada via Terraform.',
        tags: ['Java 21', 'Spring Boot', 'React 19', 'AWS', 'Docker', 'Redis'],
        github: 'https://github.com/TaysonMartinss',
        live: '#',
      },
      {
        title: 'Plataforma Accelerate — Agentes IA',
        description: 'Desenvolvimento de microsserviços e agentes de Inteligência Artificial para a plataforma interna Accelerate, otimizando suporte técnico e automatizando rotinas operacionais.',
        tags: ['Python', 'LangGraph', 'FastAPI', 'Docker'],
        github: '#',
        live: '#',
      },
      {
        title: 'V8 Code Assistant',
        description: 'Contribuí no desenvolvimento de features, criação de testes unitários e documentação técnica do assistente de código com IA da V8.tech, integrado a modelos de linguagem para suporte ao desenvolvimento.',
        tags: ['Python', 'LangChain', 'FastAPI', 'LLM'],
        github: '#',
        live: '#',
      },
      {
        title: 'Modernização PUC-Minas',
        description: 'Modernização da plataforma de ex-alunos da PUC-Minas, migrando sistemas legados para arquitetura escalável de microsserviços com .NET, React, Docker e Nginx.',
        tags: ['.NET', 'React', 'Docker', 'Nginx'],
        github: '#',
        live: '#',
      },
      {
        title: 'POCs — Gol & Serasa',
        description: 'Engenharia e entrega de Provas de Conceito estratégicas para Gol e Serasa, demonstrando viabilidade técnica de soluções de IA e automação em produção.',
        tags: ['Python', 'LangChain', 'FastAPI', 'AWS'],
        github: '#',
        live: '#',
      },
      {
        title: 'Portfólio 3D Interativo',
        description: 'Este portfólio! Desenvolvido com React, Three.js e Tailwind CSS, com modelo 3D interativo, suporte PT/EN/ES e design responsivo.',
        tags: ['React', 'Three.js', 'TypeScript', 'Tailwind'],
        github: 'https://github.com/TaysonMartinss',
        live: '#',
      },
    ],
  },
  en: {
    title: 'Projects',
    subtitle: 'What I have built',
    projects: [
      {
        title: 'Pet Colúmbia — Scheduling',
        description: 'Full-stack scheduling web application for a pet shop with Clean Architecture. Java 21 + Spring Boot backend, JWT auth, Redis caching and AWS infrastructure provisioned via Terraform.',
        tags: ['Java 21', 'Spring Boot', 'React 19', 'AWS', 'Docker', 'Redis'],
        github: 'https://github.com/TaysonMartinss',
        live: '#',
      },
      {
        title: 'Accelerate Platform — AI Agents',
        description: 'Development of microservices and AI agents for the internal Accelerate platform, optimizing technical support and automating operational routines.',
        tags: ['Python', 'LangGraph', 'FastAPI', 'Docker'],
        github: '#',
        live: '#',
      },
      {
        title: 'V8 Code Assistant',
        description: 'Contributed to feature development, unit testing and technical documentation of V8.tech\'s AI-powered code assistant, integrated with language models to support the development workflow.',
        tags: ['Python', 'LangChain', 'FastAPI', 'LLM'],
        github: '#',
        live: '#',
      },
      {
        title: 'PUC-Minas Modernization',
        description: 'Modernization of the PUC-Minas alumni platform, migrating legacy systems to a scalable microservices architecture using .NET, React, Docker and Nginx.',
        tags: ['.NET', 'React', 'Docker', 'Nginx'],
        github: '#',
        live: '#',
      },
      {
        title: 'POCs — Gol & Serasa',
        description: 'Engineering and delivery of strategic Proofs of Concept for Gol and Serasa, demonstrating technical feasibility of AI and automation solutions.',
        tags: ['Python', 'LangChain', 'FastAPI', 'AWS'],
        github: '#',
        live: '#',
      },
      {
        title: '3D Interactive Portfolio',
        description: 'This portfolio! Built with React, Three.js and Tailwind CSS, featuring an interactive 3D model, PT/EN/ES support and responsive design.',
        tags: ['React', 'Three.js', 'TypeScript', 'Tailwind'],
        github: 'https://github.com/TaysonMartinss',
        live: '#',
      },
    ],
  },
  es: {
    title: 'Proyectos',
    subtitle: 'Lo que he construido',
    projects: [
      {
        title: 'Pet Colúmbia — Agendamiento',
        description: 'Aplicación web full-stack de agendamiento para pet shop con Clean Architecture. Backend Java 21 + Spring Boot, autenticación JWT, cache Redis e infraestructura AWS vía Terraform.',
        tags: ['Java 21', 'Spring Boot', 'React 19', 'AWS', 'Docker', 'Redis'],
        github: 'https://github.com/TaysonMartinss',
        live: '#',
      },
      {
        title: 'Plataforma Accelerate — Agentes IA',
        description: 'Desarrollo de microservicios y agentes de IA para la plataforma interna Accelerate, optimizando soporte técnico y automatizando rutinas operativas.',
        tags: ['Python', 'LangGraph', 'FastAPI', 'Docker'],
        github: '#',
        live: '#',
      },
      {
        title: 'V8 Code Assistant',
        description: 'Contribuí en el desarrollo de features, creación de pruebas unitarias y documentación técnica del asistente de código con IA de V8.tech, integrado con modelos de lenguaje para soporte al desarrollo.',
        tags: ['Python', 'LangChain', 'FastAPI', 'LLM'],
        github: '#',
        live: '#',
      },
      {
        title: 'Modernización PUC-Minas',
        description: 'Modernización de la plataforma de ex alumnos de la PUC-Minas, migrando sistemas legados a arquitectura escalable de microservicios con .NET, React, Docker y Nginx.',
        tags: ['.NET', 'React', 'Docker', 'Nginx'],
        github: '#',
        live: '#',
      },
      {
        title: 'POCs — Gol & Serasa',
        description: 'Ingeniería y entrega de Pruebas de Concepto estratégicas para Gol y Serasa, demostrando la viabilidad técnica de soluciones de IA y automatización.',
        tags: ['Python', 'LangChain', 'FastAPI', 'AWS'],
        github: '#',
        live: '#',
      },
      {
        title: 'Portafolio 3D Interactivo',
        description: '¡Este portafolio! Construido con React, Three.js y Tailwind CSS, con modelo 3D interactivo, soporte PT/EN/ES y diseño responsivo.',
        tags: ['React', 'Three.js', 'TypeScript', 'Tailwind'],
        github: 'https://github.com/TaysonMartinss',
        live: '#',
      },
    ],
  },
}

type Lang = 'pt' | 'en' | 'es'

export default function Projects({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <section className='px-20 py-16 min-h-[calc(100vh-5rem)] flex items-center relative z-50'>
      <div className='w-full flex flex-col gap-12'>

        <div className='text-center'>
          <span className='text-cyan-400 font-semibold text-sm uppercase tracking-widest'>{t.subtitle}</span>
          <h2 className='text-5xl font-bold text-white mt-2'>{t.title}</h2>
          <div className='w-16 h-1 bg-cyan-400 mt-4 rounded mx-auto' />
        </div>

        <div className='grid grid-cols-3 gap-6'>
          {t.projects.map((project, i) => (
            <div
              key={i}
              className='flex flex-col gap-4 border border-cyan-400/20 rounded-xl p-6 bg-white/5 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all duration-300 group'
            >
              <div className='flex items-start justify-between'>
                <h3 className='text-white font-bold text-lg group-hover:text-cyan-400 transition-colors'>{project.title}</h3>
                <div className='flex gap-3'>
                  <a href={project.github} className='text-gray-400 hover:text-cyan-400 transition-colors'>
                    <FaGithub size={18} />
                  </a>
                  <a href={project.live} className='text-gray-400 hover:text-cyan-400 transition-colors'>
                    <FaExternalLinkAlt size={16} />
                  </a>
                </div>
              </div>
              <p className='text-gray-400 text-sm leading-relaxed flex-1'>{project.description}</p>
              <div className='flex flex-wrap gap-2 mt-auto'>
                {project.tags.map((tag) => (
                  <span key={tag} className='px-3 py-1 text-xs font-semibold text-cyan-400 border border-cyan-400/30 rounded-full bg-cyan-400/5'>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
