import { useLanguage } from '../contexts/LanguageContext'
import { useState } from 'react'
import { FiGlobe, FiChevronDown } from 'react-icons/fi'

export function LanguageSelector() {
  const { language, changeLanguage, t } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    { code: 'en', name: t('language.english'), flag: '🇺🇸' },
    { code: 'fr', name: t('language.french'), flag: '🇫🇷' },
    { code: 'rw', name: t('language.kinyarwanda'), flag: '🇷🇼' },
    { code: 'sw', name: t('language.kiswahili'), flag: '🇹🇿' }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  const handleLanguageChange = (langCode) => {
    changeLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-white text-slate-700 shadow-md hover:bg-slate-50 transition-colors border border-slate-200"
        aria-label={t('language.select')}
      >
        <FiGlobe size={16} />
        <span className="hidden sm:inline">{currentLanguage?.flag}</span>
        <span className="hidden md:inline text-sm">{currentLanguage?.name}</span>
        <FiChevronDown size={14} className={`transition-transform ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border border-slate-200 py-2 z-50">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full flex items-center gap-3 px-4 py-2 text-left hover:bg-slate-50 transition-colors ${
                language === lang.code ? 'bg-slate-100 text-indigo-600' : 'text-slate-700'
              }`}
            >
              <span>{lang.flag}</span>
              <span className="text-sm">{lang.name}</span>
            </button>
          ))}
        </div>
      )}

      {/* Overlay to close dropdown when clicking outside */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  )
}
