import { useLanguage } from '../i18n/LanguageContext'

const languages = [
    { code: 'ru', label: 'RU' },
    { code: 'kz', label: 'KZ' },
    { code: 'en', label: 'EN' },
]

export default function LanguageSwitcher() {
    const { lang, setLang } = useLanguage()

    return (
        <div className="flex items-center gap-1 bg-white/10 rounded-sm p-0.5">
            {languages.map((l) => (
                <button
                    key={l.code}
                    onClick={() => setLang(l.code)}
                    className={`px-2.5 py-1 text-[10px] font-extrabold tracking-widest transition-all duration-200 rounded-sm ${lang === l.code
                        ? 'bg-white text-[#0500FF]'
                        : 'text-white/50 hover:text-white'
                        }`}
                >
                    {l.label}
                </button>
            ))}
        </div>
    )
}
