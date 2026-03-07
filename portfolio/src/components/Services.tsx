import { FaCode, FaMobileAlt, FaServer, FaRobot, FaCloud, FaExchangeAlt } from 'react-icons/fa'

const content = {
  pt: {
    title: 'Serviços',
    subtitle: 'O que eu ofereço',
    services: [
      {
        icon: <FaCode size={28} />,
        title: 'Desenvolvimento Web & Mobile',
        description: 'Criação de aplicações web e mobile modernas com React e React Native, focadas em performance, responsividade e ótima experiência do usuário.',
      },
      {
        icon: <FaServer size={28} />,
        title: 'Back-end & APIs',
        description: 'Desenvolvimento de APIs RESTful robustas e escaláveis com FastAPI, Spring Boot e arquitetura limpa de microsserviços.',
      },
      {
        icon: <FaRobot size={28} />,
        title: 'Agentes de IA & Automação',
        description: 'Criação de agentes inteligentes e fluxos automatizados com LangChain, LangGraph e Agno para potencializar processos e suporte técnico.',
      },
      {
        icon: <FaCloud size={28} />,
        title: 'Cloud & DevOps',
        description: 'Infraestrutura e deploy na AWS com Docker, Nginx, CI/CD e IaC via Terraform para entregas confiáveis e escaláveis.',
      },
      {
        icon: <FaExchangeAlt size={28} />,
        title: 'Modernização de Sistemas',
        description: 'Migração e modernização de sistemas legados para arquiteturas modernas de microsserviços com foco em manutenibilidade e escalabilidade.',
      },
      {
        icon: <FaMobileAlt size={28} />,
        title: 'Observabilidade & Monitoramento',
        description: 'Implementação de dashboards e monitoramento com Langfuse para garantir confiabilidade, rastrear gargalos e elevar a qualidade do sistema.',
      },
    ],
  },
  en: {
    title: 'Services',
    subtitle: 'What I offer',
    services: [
      {
        icon: <FaCode size={28} />,
        title: 'Web & Mobile Development',
        description: 'Building modern web and mobile applications with React and React Native, focused on performance, responsiveness and great user experience.',
      },
      {
        icon: <FaServer size={28} />,
        title: 'Back-end & APIs',
        description: 'Developing robust and scalable RESTful APIs with FastAPI, Spring Boot and clean microservices architecture.',
      },
      {
        icon: <FaRobot size={28} />,
        title: 'AI Agents & Automation',
        description: 'Building intelligent agents and automated workflows with LangChain, LangGraph and Agno to enhance processes and technical support.',
      },
      {
        icon: <FaCloud size={28} />,
        title: 'Cloud & DevOps',
        description: 'Infrastructure and deployment on AWS with Docker, Nginx, CI/CD and IaC via Terraform for reliable and scalable deliveries.',
      },
      {
        icon: <FaExchangeAlt size={28} />,
        title: 'System Modernization',
        description: 'Migration and modernization of legacy systems to modern microservices architectures focused on maintainability and scalability.',
      },
      {
        icon: <FaMobileAlt size={28} />,
        title: 'Observability & Monitoring',
        description: 'Implementation of dashboards and monitoring with Langfuse to ensure reliability, track bottlenecks and elevate system quality.',
      },
    ],
  },
  es: {
    title: 'Servicios',
    subtitle: 'Lo que ofrezco',
    services: [
      {
        icon: <FaCode size={28} />,
        title: 'Desarrollo Web y Móvil',
        description: 'Creación de aplicaciones web y móviles modernas con React y React Native, centradas en rendimiento, responsividad y gran experiencia de usuario.',
      },
      {
        icon: <FaServer size={28} />,
        title: 'Back-end y APIs',
        description: 'Desarrollo de APIs RESTful robustas y escalables con FastAPI, Spring Boot y arquitectura limpia de microservicios.',
      },
      {
        icon: <FaRobot size={28} />,
        title: 'Agentes de IA y Automatización',
        description: 'Creación de agentes inteligentes y flujos automatizados con LangChain, LangGraph y Agno para potenciar procesos y soporte técnico.',
      },
      {
        icon: <FaCloud size={28} />,
        title: 'Cloud y DevOps',
        description: 'Infraestructura y despliegue en AWS con Docker, Nginx, CI/CD e IaC vía Terraform para entregas confiables y escalables.',
      },
      {
        icon: <FaExchangeAlt size={28} />,
        title: 'Modernización de Sistemas',
        description: 'Migración y modernización de sistemas legados a arquitecturas modernas de microservicios con foco en mantenibilidad y escalabilidad.',
      },
      {
        icon: <FaMobileAlt size={28} />,
        title: 'Observabilidad y Monitoreo',
        description: 'Implementación de dashboards y monitoreo con Langfuse para garantizar confiabilidad, identificar cuellos de botella y elevar la calidad del sistema.',
      },
    ],
  },
}

type Lang = 'pt' | 'en' | 'es'

export default function Services({ lang }: { lang: Lang }) {
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
          {t.services.map((service, i) => (
            <div
              key={i}
              className='flex flex-col gap-4 border border-cyan-400/20 rounded-xl p-6 bg-white/5 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all duration-300 group cursor-default'
            >
              <div className='w-14 h-14 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-colors'>
                {service.icon}
              </div>
              <h3 className='text-white font-bold text-lg'>{service.title}</h3>
              <p className='text-gray-400 text-sm leading-relaxed'>{service.description}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
