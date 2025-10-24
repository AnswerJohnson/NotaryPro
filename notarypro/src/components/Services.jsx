import { motion } from 'framer-motion'
import { FiFileText, FiHome, FiEdit3, FiCheckCircle, FiShield } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export function Services() {
  const { t } = useLanguage()
  
  const services = t('services.items').map((item, index) => {
    const icons = [FiCheckCircle, FiEdit3, FiHome, FiFileText, FiShield]
    return { icon: icons[index], title: item.title, desc: item.description }
  })
  return (
    <section id="services" className="py-20 bg-slate-50 scroll-mt-16">
      <div className="container-responsive">
        <h2 className="text-3xl font-bold text-slate-900">{t('services.title')}</h2>
        <p className="mt-2 text-slate-600 max-w-prose">{t('services.subtitle')}</p>
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="rounded-2xl bg-white p-6 shadow-soft ring-1 ring-slate-200"
            >
              <s.icon className="text-indigo-600" size={28} />
              <h3 className="mt-4 text-xl font-semibold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}


