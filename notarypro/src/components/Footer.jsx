import { FiFacebook, FiInstagram, FiLinkedin } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext.jsx'

export function Footer() {
  const { t } = useLanguage()
  return (
    <footer className="bg-white border-t border-slate-200">
      <div className="container-responsive py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600">© {new Date().getFullYear()} {t('footer.copyright')}</p>
        <div className="flex items-center gap-4 text-slate-600">
          <a href="#" aria-label="Facebook" className="hover:text-slate-900"><FiFacebook size={20} /></a>
          <a href="#" aria-label="Instagram" className="hover:text-slate-900"><FiInstagram size={20} /></a>
          <a href="#" aria-label="LinkedIn" className="hover:text-slate-900"><FiLinkedin size={20} /></a>
        </div>
      </div>
    </footer>
  )
}


