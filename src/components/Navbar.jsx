import { useState, useEffect } from 'react'
import LanguageSwitcher from './LanguageSwitcher'
import ThemeToggle from './ThemeToggle'
import { useLanguage } from '../i18n/LanguageContext'

export default function Navbar({ onRegister }) {
    const [scrolled, setScrolled] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const { t } = useLanguage()

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 50)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const links = [
        { href: '#about', label: t('nav.about') },
        { href: '#events', label: t('nav.events') },
        { href: '#speakers', label: t('nav.speakers') },
        { href: '#partners', label: t('nav.partners') },
        { href: '#faq', label: t('nav.faq') },
        { href: '#contact', label: t('nav.contact') },
    ]

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-[#0500FF] py-3' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                {/* Logo */}
                <a href="#" className="text-3xl font-black tracking-tight text-white">
                    aif<span className="text-white">.</span>
                </a>

                {/* Desktop Links */}
                <div className="hidden xl:flex items-center gap-5">
                    {links.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-[10px] font-bold text-white/70 hover:text-white transition-colors duration-300 tracking-widest"
                        >
                            {link.label}
                        </a>
                    ))}
                </div>

                {/* Right controls */}
                <div className="hidden xl:flex items-center gap-3">
                    <LanguageSwitcher />
                    <ThemeToggle />
                    <button onClick={onRegister} className="flat-btn text-xs !py-2.5 !px-5">
                        {t('nav.register')}
                    </button>
                </div>

                {/* Mobile Hamburger */}
                <button
                    className="xl:hidden flex flex-col gap-1.5 p-2"
                    onClick={() => setMenuOpen(!menuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
                    <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`xl:hidden transition-all duration-500 overflow-hidden ${menuOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="px-6 py-4 bg-[#0400D6] flex flex-col gap-4">
                    {links.map(link => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-white/80 hover:text-white transition-colors py-2 text-sm font-bold tracking-widest"
                            onClick={() => setMenuOpen(false)}
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="flex items-center gap-3 py-2">
                        <LanguageSwitcher />
                        <ThemeToggle />
                    </div>
                    <button
                        onClick={() => { setMenuOpen(false); onRegister() }}
                        className="flat-btn text-sm !py-3 w-full justify-center mt-2"
                    >
                        {t('nav.register')}
                    </button>
                </div>
            </div>
        </nav>
    )
}
