import { useState } from 'react'
import emailjs from '@emailjs/browser'
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa'

const content = {
  pt: {
    title: 'Contato',
    subtitle: 'Vamos trabalhar juntos',
    namePlaceholder: 'Seu nome',
    emailPlaceholder: 'Seu e-mail',
    subjectPlaceholder: 'Assunto',
    messagePlaceholder: 'Sua mensagem...',
    sendBtn: 'Enviar Mensagem',
    sending: 'Enviando...',
    successMsg: 'Mensagem enviada com sucesso! Entrarei em contato em breve.',
    errorMsg: 'Ocorreu um erro ao enviar. Tente novamente.',
    location: 'São Paulo, SP – Brasil',
    email: 'taysonmartins25@gmail.com',
    phone: '(11) 95726-0213',
    infoLabels: ['Localização', 'E-mail', 'Telefone'],
  },
  en: {
    title: 'Contact',
    subtitle: "Let's work together",
    namePlaceholder: 'Your name',
    emailPlaceholder: 'Your email',
    subjectPlaceholder: 'Subject',
    messagePlaceholder: 'Your message...',
    sendBtn: 'Send Message',
    sending: 'Sending...',
    successMsg: 'Message sent successfully! I will get back to you soon.',
    errorMsg: 'Something went wrong. Please try again.',
    location: 'São Paulo, SP – Brazil',
    email: 'taysonmartins25@gmail.com',
    phone: '(11) 95726-0213',
    infoLabels: ['Location', 'Email', 'Phone'],
  },
  es: {
    title: 'Contacto',
    subtitle: 'Trabajemos juntos',
    namePlaceholder: 'Tu nombre',
    emailPlaceholder: 'Tu correo',
    subjectPlaceholder: 'Asunto',
    messagePlaceholder: 'Tu mensaje...',
    sendBtn: 'Enviar Mensaje',
    sending: 'Enviando...',
    successMsg: '¡Mensaje enviado con éxito! Me pondré en contacto pronto.',
    errorMsg: 'Algo salió mal. Por favor intenta de nuevo.',
    location: 'São Paulo, SP – Brasil',
    email: 'taysonmartins25@gmail.com',
    phone: '(11) 95726-0213',
    infoLabels: ['Ubicación', 'Correo', 'Teléfono'],
  },
}

type Lang = 'pt' | 'en' | 'es'

const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID  as string
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID as string
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY  as string

export default function Contact({ lang }: { lang: Lang }) {
  const t = content[lang]
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle')

  const inputClass = 'w-full bg-white/5 border border-cyan-400/20 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-400 transition-colors'

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    setStatus('sending')
    try {
      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          name: form.name,
          from_name: form.name,
          email: form.email,
          from_email: form.email,
          subject: form.subject,
          message: form.message,
        },
        PUBLIC_KEY,
      )
      setStatus('success')
      setForm({ name: '', email: '', subject: '', message: '' })
    } catch {
      setStatus('error')
    }
  }

  return (
    <section className='px-6 md:px-20 py-10 md:py-16 min-h-[calc(100vh-4rem)] md:min-h-[calc(100vh-5rem)] flex items-center relative z-50'>
      <div className='w-full flex flex-col lg:flex-row gap-10 lg:gap-16 items-start'>

        {/* Left — form */}
        <div className='flex-1 flex flex-col gap-5 md:gap-6 w-full'>
          <div>
            <span className='text-cyan-400 font-semibold text-sm uppercase tracking-widest'>{t.subtitle}</span>
            <h2 className='text-3xl md:text-5xl font-bold text-white mt-2'>{t.title}</h2>
            <div className='w-16 h-1 bg-cyan-400 mt-4 rounded' />
          </div>

          <form className='flex flex-col gap-4' onSubmit={handleSubmit}>
            <div className='flex flex-col sm:flex-row gap-4'>
              <input
                required
                className={inputClass}
                placeholder={t.namePlaceholder}
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                required
                className={inputClass}
                placeholder={t.emailPlaceholder}
                type='email'
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
            </div>
            <input
              required
              className={inputClass}
              placeholder={t.subjectPlaceholder}
              value={form.subject}
              onChange={(e) => setForm({ ...form, subject: e.target.value })}
            />
            <textarea
              required
              className={`${inputClass} resize-none h-36`}
              placeholder={t.messagePlaceholder}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
            />
            {status === 'success' && (
              <p className='text-cyan-400 text-sm font-semibold'>{t.successMsg}</p>
            )}
            {status === 'error' && (
              <p className='text-red-400 text-sm font-semibold'>{t.errorMsg}</p>
            )}
            <button
              type='submit'
              disabled={status === 'sending'}
              className='px-8 py-3 bg-cyan-400 text-black font-bold rounded-lg hover:bg-cyan-300 transition-colors cursor-pointer w-fit disabled:opacity-60 disabled:cursor-not-allowed'
            >
              {status === 'sending' ? t.sending : t.sendBtn}
            </button>
          </form>
        </div>

        {/* Right — info */}
        <div className='w-full lg:w-80 flex flex-col gap-4 md:gap-6 lg:mt-28'>
          {[
            { icon: <FaMapMarkerAlt size={20} />, label: t.infoLabels[0], value: t.location },
            { icon: <FaEnvelope size={20} />, label: t.infoLabels[1], value: t.email },
            { icon: <FaPhone size={20} />, label: t.infoLabels[2], value: t.phone },
          ].map((item, i) => (
            <div key={i} className='flex items-start gap-4 border border-cyan-400/20 rounded-xl p-5 bg-white/5 hover:border-cyan-400/60 hover:bg-cyan-400/5 transition-all group'>
              <div className='w-12 h-12 rounded-lg bg-cyan-400/10 flex items-center justify-center text-cyan-400 group-hover:bg-cyan-400/20 transition-colors shrink-0'>
                {item.icon}
              </div>
              <div>
                <p className='text-gray-400 text-xs uppercase tracking-widest mb-1'>{item.label}</p>
                <p className='text-white font-semibold'>{item.value}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
