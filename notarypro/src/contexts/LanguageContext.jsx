import { createContext, useContext, useState, useEffect } from 'react'

const LanguageContext = createContext()

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('en')
  const [translations, setTranslations] = useState(null)
  const [isLoading, setIsLoading] = useState(true)

  // Load translations based on selected language
  useEffect(() => {
    const loadTranslations = async () => {
      try {
        let translationModule
        switch (language) {
          case 'fr':
            translationModule = await import('../translations/fr.js')
            break
          case 'rw':
            translationModule = await import('../translations/rw.js')
            break
          case 'sw':
            translationModule = await import('../translations/sw.js')
            break
          default:
            translationModule = await import('../translations/en.js')
        }
        setTranslations(translationModule.default)
        setIsLoading(false)
      } catch (error) {
        console.error('Error loading translations:', error)
        // Fallback to English
        const fallback = await import('../translations/en.js')
        setTranslations(fallback.default)
        setIsLoading(false)
      }
    }

    loadTranslations()
  }, [language])

  // Load saved language from localStorage on mount
  useEffect(() => {
    const savedLanguage = localStorage.getItem('notary-language')
    if (savedLanguage && ['en', 'fr', 'rw', 'sw'].includes(savedLanguage)) {
      setLanguage(savedLanguage)
    }
  }, [])

  // Save language to localStorage when it changes
  useEffect(() => {
    localStorage.setItem('notary-language', language)
  }, [language])

  const changeLanguage = (newLanguage) => {
    setLanguage(newLanguage)
  }

  const t = (key) => {
    if (!translations) return key
    
    const keys = key.split('.')
    let value = translations
    
    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k]
      } else {
        console.warn(`Translation key "${key}" not found`)
        return key
      }
    }
    
    return value
  }

  const value = {
    language,
    changeLanguage,
    t,
    translations,
    isLoading
  }

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  )
}
