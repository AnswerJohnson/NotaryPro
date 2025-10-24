import { motion } from 'framer-motion'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export function Testimonials() {
  const { t } = useLanguage()
  const testimonials = t('testimonials.items')
  return (
    <section className="py-20 bg-white">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold text-slate-900">{t('testimonials.title')}</h2>
        <div className="mt-10 grid md:grid-cols-3 gap-6">
          {testimonials.map((t, i) => (
            <motion.blockquote
              key={t.name}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-slate-50 p-6 shadow-soft ring-1 ring-slate-200"
            >
              <p className="text-slate-700">“{t.quote}”</p>
              <footer className="mt-4 text-sm font-medium text-slate-900">— {t.name}</footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}


