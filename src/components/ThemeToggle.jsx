import { useState, useEffect } from 'react'

export default function ThemeToggle() {
    const [isDark, setIsDark] = useState(true)

    useEffect(() => {
        const root = document.documentElement
        if (isDark) {
            root.style.setProperty('--bg-color', '#0500FF')
            root.style.setProperty('--text-color', '#ffffff')
            document.body.style.backgroundColor = '#0500FF'
            document.body.style.color = '#ffffff'
        } else {
            root.style.setProperty('--bg-color', '#ffffff')
            root.style.setProperty('--text-color', '#0500FF')
            document.body.style.backgroundColor = '#ffffff'
            document.body.style.color = '#0500FF'
        }
    }, [isDark])

    return (
        <button
            onClick={() => setIsDark(!isDark)}
            className={`w-8 h-8 flex items-center justify-center rounded-sm text-sm font-bold transition-all duration-300 ${isDark
                    ? 'bg-white/10 text-white hover:bg-white/20'
                    : 'bg-[#0500FF]/10 text-[#0500FF] hover:bg-[#0500FF]/20'
                }`}
            aria-label="Toggle theme"
            title={isDark ? 'Светлая тема' : 'Тёмная тема'}
        >
            {isDark ? '☀' : '☾'}
        </button>
    )
}
