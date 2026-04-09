
import { useState } from 'react'
import { BR, US, ES } from 'country-flag-icons/react/3x2'
import bgVideo from './assets/4779866-hd_1920_1080_30fps.mp4'
import Scene3D from './components/Scene3D'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { FaInstagram, FaLinkedinIn, FaBars, FaTimes } from 'react-icons/fa'

type Lang = 'pt' | 'en' | 'es'
type Page = 0 | 1 | 2 | 3 | 4

const translations = {
  pt: {
    nav: ['Início', 'Sobre', 'Serviços', 'Projetos', 'Contato'],
    greeting: 'Olá, eu sou',
    role: 'Desenvolvedor Full Stack',
    description:
      'Desenvolvedor Full Stack com 4 anos de experiência em tecnologia, especialista em microsserviços, IA com LangChain/LangGraph e infraestrutura AWS. Atualmente na V8.tech.',
    hire: 'Vamos Conversar',
    talk: 'Ver Projetos',
  },
  en: {
    nav: ['Home', 'About', 'Services', 'Projects', 'Contact'],
    greeting: "Hi, I'm",
    role: 'Full Stack Developer',
    description:
      'Full Stack Developer with 4 years of experience, specializing in microservices, AI with LangChain/LangGraph and AWS infrastructure. Currently at V8.tech.',
    hire: "Let's Talk",
    talk: 'See Projects',
  },
  es: {
    nav: ['Inicio', 'Sobre mí', 'Servicios', 'Proyectos', 'Contacto'],
    greeting: 'Hola, soy',
    role: 'Desarrollador Full Stack',
    description:
      'Desarrollador Full Stack con 4 años de experiencia, especializado en microservicios, IA con LangChain/LangGraph e infraestructura AWS. Actualmente en V8.tech.',
    hire: 'Hablemos',
    talk: 'Ver Proyectos',
  },
}

function App() {
  const [lang, setLang] = useState<Lang>('en')
  const [activePage, setActivePage] = useState<Page>(0)
  const [menuOpen, setMenuOpen] = useState(false)
  const t = translations[lang]

  function navigateTo(page: Page) {
    setActivePage(page)
    setMenuOpen(false)
  }

  return (
    <div className='relative w-full min-h-screen overflow-hidden font-[Cabin,sans-serif]'>
      {/* Background video (always visible) */}
      <video
        className='absolute inset-0 w-full h-full object-cover -z-10'
        src={bgVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Dark overlay */}
      <div className='absolute inset-0 bg-black/60 -z-10' />

      {/* Navbar */}
      <header className='px-6 md:px-20 w-full h-16 md:h-20 flex items-center justify-between relative z-50'>
        <h1
          className='text-2xl font-bold text-white cursor-pointer'
          onClick={() => navigateTo(0)}
        >
          Tayson<span className='text-cyan-400'>.</span>
        </h1>

        {/* Desktop nav */}
        <nav className='hidden md:flex w-auto h-full text-white items-center justify-center'>
          <ul className='flex gap-10 text-base font-semibold'>
            {t.nav.map((item, i) => (
              <li
                key={i}
                onClick={() => navigateTo(i as Page)}
                className={`cursor-pointer relative pb-0.5 transition-all duration-300 ease-in-out hover:-translate-y-1 group ${
                  activePage === i ? 'text-cyan-400' : 'hover:text-cyan-400'
                }`}
              >
                {item}
                <span
                  className={`absolute bottom-0 left-0 h-0.5 bg-cyan-400 transition-all duration-300 ease-in-out ${
                    activePage === i ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}
                />
              </li>
            ))}
          </ul>
        </nav>

        <div className='flex gap-3 items-center'>
          <div className='hidden sm:flex gap-3 items-center'>
            <button
              title='Português'
              onClick={() => setLang('pt')}
              className={`cursor-pointer hover:scale-110 transition-transform rounded-sm overflow-hidden outline-2 outline-offset-1 ${lang === 'pt' ? 'outline-cyan-400' : 'outline-transparent'}`}
            >
              <BR className='w-8 h-auto' />
            </button>
            <button
              title='English'
              onClick={() => setLang('en')}
              className={`cursor-pointer hover:scale-110 transition-transform rounded-sm overflow-hidden outline-2 outline-offset-1 ${lang === 'en' ? 'outline-cyan-400' : 'outline-transparent'}`}
            >
              <US className='w-8 h-auto' />
            </button>
            <button
              title='Español'
              onClick={() => setLang('es')}
              className={`cursor-pointer hover:scale-110 transition-transform rounded-sm overflow-hidden outline-2 outline-offset-1 ${lang === 'es' ? 'outline-cyan-400' : 'outline-transparent'}`}
            >
              <ES className='w-8 h-auto' />
            </button>
          </div>

          {/* Mobile hamburger */}
          <button
            className='md:hidden text-white text-2xl cursor-pointer ml-2'
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </header>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className='fixed inset-0 bg-black/95 z-40 flex flex-col items-center justify-center gap-8 md:hidden'>
          <ul className='flex flex-col gap-6 text-xl font-semibold text-center'>
            {t.nav.map((item, i) => (
              <li
                key={i}
                onClick={() => navigateTo(i as Page)}
                className={`cursor-pointer transition-colors ${
                  activePage === i ? 'text-cyan-400' : 'text-white hover:text-cyan-400'
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          {/* Language switcher in mobile menu */}
          <div className='flex gap-4 sm:hidden'>
            <button onClick={() => setLang('pt')} className={`rounded-sm overflow-hidden outline-2 outline-offset-1 ${lang === 'pt' ? 'outline-cyan-400' : 'outline-transparent'}`}>
              <BR className='w-10 h-auto' />
            </button>
            <button onClick={() => setLang('en')} className={`rounded-sm overflow-hidden outline-2 outline-offset-1 ${lang === 'en' ? 'outline-cyan-400' : 'outline-transparent'}`}>
              <US className='w-10 h-auto' />
            </button>
            <button onClick={() => setLang('es')} className={`rounded-sm overflow-hidden outline-2 outline-offset-1 ${lang === 'es' ? 'outline-cyan-400' : 'outline-transparent'}`}>
              <ES className='w-10 h-auto' />
            </button>
          </div>
        </div>
      )}

      {/* Home page */}
      {activePage === 0 && (
        <>
          <main className='px-6 md:px-20 flex items-center min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)]'>
            <div className='flex flex-col gap-4 md:gap-5 max-w-lg relative z-50 pointer-events-auto'>
              <h2 className='text-3xl md:text-5xl font-bold text-white leading-tight'>
                {t.greeting} <span className='text-white'>Tayson Martins</span>
              </h2>
              <h3 className='text-xl md:text-2xl font-bold text-cyan-400'>{t.role}</h3>
              <p className='text-gray-300 text-sm md:text-base leading-relaxed'>{t.description}</p>
              <div className='flex gap-3 md:gap-4 mt-2'>
                <button
                  onClick={() => navigateTo(4)}
                  className='px-5 md:px-7 py-2.5 md:py-3 bg-cyan-400 text-black font-bold rounded hover:bg-cyan-300 transition-colors cursor-pointer text-sm md:text-base'
                >
                  {t.hire}
                </button>
                <button
                  onClick={() => navigateTo(3)}
                  className='px-5 md:px-7 py-2.5 md:py-3 border-2 border-white text-white font-bold rounded hover:border-cyan-400 hover:text-cyan-400 transition-colors cursor-pointer text-sm md:text-base'
                >
                  {t.talk}
                </button>
              </div>

              {/* Social icons */}
              <div className='flex gap-4 mt-4 md:mt-6'>
                <a href='https://instagram.com/martxxns' target='_blank' rel='noopener noreferrer' className='w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors'>
                  <FaInstagram size={16} />
                </a>
                <a href='https://www.linkedin.com/in/taysonandrademartins/' target='_blank' rel='noopener noreferrer' className='w-10 h-10 rounded-full border border-white/40 flex items-center justify-center text-white hover:border-cyan-400 hover:text-cyan-400 transition-colors'>
                  <FaLinkedinIn size={16} />
                </a>
              </div>
            </div>
          </main>
          {/* Hide 3D scene on mobile for performance */}
          <div className='hidden md:block'>
            <Scene3D />
          </div>
        </>
      )}

      {activePage === 1 && <About lang={lang} />}
      {activePage === 2 && <Services lang={lang} />}
      {activePage === 3 && <Projects lang={lang} />}
      {activePage === 4 && <Contact lang={lang} />}
    </div>
  )
}

export default App
