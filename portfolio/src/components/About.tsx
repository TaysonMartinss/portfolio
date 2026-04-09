import { FaCode, FaServer, FaMobileAlt, FaDatabase } from 'react-icons/fa'

const content = {
  pt: {
    title: 'Sobre Mim',
    subtitle: 'Conheça minha história',
    bio1: 'Desenvolvedor Full Stack com 4 anos de experiência em tecnologia, combinando vivência em infraestrutura de TI com desenvolvimento de software e Inteligência Artificial. Especialista em arquiteturas assíncronas, microsserviços e modernização de sistemas legados.',
    bio2: 'Transito com facilidade entre diferentes ecossistemas — Python, Java, TypeScript, Go — com foco em soluções escaláveis, automação e desenvolvimento de agentes de IA com LangChain e LangGraph. Atualmente na V8.tech, atuando em projetos para grandes clientes do mercado e participando de iniciativas internas do setor de inovação.',
    skillsTitle: 'Minhas Habilidades',
    skills: ['React | React Native', 'TypeScript | JavaScript', 'Python | FastAPI', 'Java | Spring Boot', 'Go | Gin | Echo', '.NET | C#', 'LangChain | LangGraph', 'AWS | Docker'],
    statsLabel: ['Projetos', 'Clientes', 'Anos de Exp.', 'Tecnologias'],
  },
  en: {
    title: 'About Me',
    subtitle: 'Get to know my story',
    bio1: 'Full Stack Developer with 4 years of experience in technology, combining IT infrastructure expertise with software development and Artificial Intelligence. Specialist in asynchronous architectures, microservices and legacy system modernization.',
    bio2: 'I navigate easily across different ecosystems — Python, Java, TypeScript, Go — with a strong focus on scalable solutions, automation and AI agent development using LangChain and LangGraph. Currently at V8.tech, working on projects for major market clients and contributing to internal initiatives in the innovation department.',
    skillsTitle: 'My Skills',
    skills: ['React | React Native', 'TypeScript | JavaScript', 'Python | FastAPI', 'Java | Spring Boot', 'Go | Gin | Echo', '.NET | C#', 'LangChain | LangGraph', 'AWS | Docker'],
    statsLabel: ['Projects', 'Clients', 'Years Exp.', 'Technologies'],
  },
  es: {
    title: 'Sobre Mí',
    subtitle: 'Conoce mi historia',
    bio1: 'Desarrollador Full Stack con 4 años de experiencia en tecnología, combinando experiencia en infraestructura de TI con desarrollo de software e Inteligencia Artificial. Especialista en arquitecturas asíncronas, microservicios y modernización de sistemas legados.',
    bio2: 'Me muevo con facilidad entre diferentes ecosistemas — Python, Java, TypeScript, Go — con foco en soluciones escalables, automatización y desarrollo de agentes de IA con LangChain y LangGraph. Actualmente en V8.tech, trabajando en proyectos para grandes clientes del mercado y participando en iniciativas internas del área de innovación.',
    skillsTitle: 'Mis Habilidades',
    skills: ['React | React Native', 'TypeScript | JavaScript', 'Python | FastAPI', 'Java | Spring Boot', 'Go | Gin | Echo', '.NET | C#', 'LangChain | LangGraph', 'AWS | Docker'],
    statsLabel: ['Proyectos', 'Clientes', 'Años Exp.', 'Tecnologías'],
  },
}

const stats = [
  { value: '5+', icon: <FaCode size={20} /> },
  { value: '5+', icon: <FaServer size={20} /> },
  { value: '4+', icon: <FaMobileAlt size={20} /> },
  { value: '20+', icon: <FaDatabase size={20} /> },
]

type Lang = 'pt' | 'en' | 'es'

export default function About({ lang }: { lang: Lang }) {
  const t = content[lang]

  return (
    <section className='px-6 md:px-20 py-10 md:py-16 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center relative z-50'>
      <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-20 items-start lg:items-center'>

        {/* Left — bio */}
        <div className='flex-1 flex flex-col gap-5 md:gap-6'>
          <div>
            <span className='text-cyan-400 font-semibold text-sm uppercase tracking-widest'>{t.subtitle}</span>
            <h2 className='text-3xl md:text-5xl font-bold text-white mt-2'>{t.title}</h2>
            <div className='w-16 h-1 bg-cyan-400 mt-4 rounded' />
          </div>
          <p className='text-gray-300 text-sm md:text-base leading-relaxed'>{t.bio1}</p>
          <p className='text-gray-300 text-sm md:text-base leading-relaxed'>{t.bio2}</p>

          {/* Stats */}
          <div className='grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 mt-4'>
            {stats.map((s, i) => (
              <div key={i} className='flex flex-col items-center gap-2 border border-cyan-400/20 rounded-lg p-3 md:p-4 bg-white/5 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all'>
                <span className='text-cyan-400'>{s.icon}</span>
                <span className='text-xl md:text-2xl font-bold text-white'>{s.value}</span>
                <span className='text-gray-400 text-xs text-center'>{t.statsLabel[i]}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — skills */}
        <div className='flex-1 flex flex-col gap-5 md:gap-6 w-full'>
          <h3 className='text-xl md:text-2xl font-bold text-white'>{t.skillsTitle}</h3>
          <div className='grid grid-cols-1 sm:grid-cols-2 gap-3'>
            {t.skills.map((skill) => (
              <div key={skill} className='flex items-center gap-3 border border-cyan-400/20 rounded-lg px-4 py-3 bg-white/5 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all group'>
                <span className='w-2 h-2 rounded-full bg-cyan-400 group-hover:scale-125 transition-transform' />
                <span className='text-gray-200 font-semibold text-sm md:text-base'>{skill}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
