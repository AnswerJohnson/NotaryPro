import { motion } from 'framer-motion'
import { scroller } from 'react-scroll'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export function Hero() {
  const { t } = useLanguage()
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-indigo-900 scroll-mt-16">
      <div className="container-responsive py-24 sm:py-28 md:py-32 grid md:grid-cols-2 gap-10 items-center relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white leading-tight">
            {t('hero.title')}
          </h1>
          <p className="mt-4 text-slate-200 max-w-prose">
            {t('hero.subtitle')}
          </p>
          <div className="mt-6 flex gap-3">
            <button
              type="button"
              onClick={() => scroller.scrollTo('contact', { smooth: true, offset: -64, duration: 500 })}
              className="inline-flex items-center rounded-lg bg-indigo-600 px-5 py-3 text-white shadow-soft hover:bg-indigo-500 cursor-pointer"
            >
              {t('hero.contactNow')}
            </button>
            <button
              type="button"
              onClick={() => scroller.scrollTo('services', { smooth: true, offset: -64, duration: 500 })}
              className="inline-flex items-center rounded-lg bg-white/10 px-5 py-3 text-white ring-1 ring-white/20 hover:bg-white/20 cursor-pointer"
            >
              {t('hero.viewServices')}
            </button>
          </div>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }}>
          <div className="aspect-video md:aspect-square rounded-2xl bg-white/5 ring-1 ring-white/10 shadow-soft"></div>
        </motion.div>
      </div>
      <svg className="pointer-events-none absolute -bottom-10 left-0 -z-10 opacity-30" width="400" height="400" viewBox="0 0 400 400" fill="none" aria-hidden>
        <circle cx="200" cy="200" r="200" fill="url(#g)" />
        <defs>
          <radialGradient id="g" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(200 200) rotate(90) scale(200)">
            <stop stopColor="#818cf8" />
            <stop offset="1" stopColor="#0ea5e9" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </section>
  )
}


