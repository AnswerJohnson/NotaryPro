import { useState } from 'react'
import { Link } from 'react-scroll'
import { FiMenu, FiX } from 'react-icons/fi'
import { useLanguage } from '../contexts/LanguageContext.jsx'
import { LanguageSelector } from './LanguageSelector.jsx'

export function Navbar() {
  const [open, setOpen] = useState(false)
  const { t } = useLanguage()

  const navItems = [
    { to: 'home', label: t('nav.home') },
    { to: 'about', label: t('nav.about') },
    { to: 'services', label: t('nav.services') },
    { to: 'contact', label: t('nav.contact') },
  ]

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur border-b border-slate-200">
      <div className="container-responsive flex items-center justify-between h-16">
        <div className="font-semibold text-slate-900">
          John Doe Notary Public
        </div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              smooth
              offset={-64}
              duration={500}
              className="text-slate-600 hover:text-slate-900 cursor-pointer"
            >
              {item.label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <LanguageSelector />
        </div>
        <button
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded-md hover:bg-slate-100"
          onClick={() => setOpen((v) => !v)}
        >
          {open ? <FiX size={22} /> : <FiMenu size={22} />}
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t border-slate-200 bg-white">
          <div className="container-responsive py-2 flex flex-col">
            {navItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                smooth
                offset={-64}
                duration={500}
                className="py-2 text-slate-700"
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </header>
  )
}


