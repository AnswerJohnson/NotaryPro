import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export function About() {
  const { t } = useLanguage()
  return (
    <section id="about" className="py-20 bg-white scroll-mt-16">
      <div className="container-responsive grid md:grid-cols-2 gap-10 items-center">
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <h2 className="text-3xl font-bold text-slate-900">{t('about.title')}</h2>
          <p className="mt-4 text-slate-600 max-w-prose">
            {t('about.description')}
          </p>
          <ul className="mt-4 space-y-2 text-slate-700">
            {t('about.points').map((point, index) => (
              <li key={index}>{point}</li>
            ))}
          </ul>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="aspect-[4/3] rounded-2xl bg-slate-100 shadow-soft"></div>
        </motion.div>
      </div>
    </section>
  )
}


