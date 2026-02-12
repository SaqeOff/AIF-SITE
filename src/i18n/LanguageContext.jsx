import { createContext, useContext, useState, useCallback } from 'react'
import ru from './ru'
import en from './en'
import kz from './kz'

const translations = { ru, en, kz }

const LanguageContext = createContext()

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState('ru')

    const t = useCallback((key) => {
        const keys = key.split('.')
        let result = translations[lang]
        for (const k of keys) {
            result = result?.[k]
        }
        return result ?? key
    }, [lang])

    return (
        <LanguageContext.Provider value={{ lang, setLang, t }}>
            {children}
        </LanguageContext.Provider>
    )
}

export function useLanguage() {
    const context = useContext(LanguageContext)
    if (!context) throw new Error('useLanguage must be used within LanguageProvider')
    return context
}
