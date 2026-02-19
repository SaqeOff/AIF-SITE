import { useLanguage } from '../i18n/LanguageContext'

export default function MarqueeTicker() {
    const { t } = useLanguage()
    const items = t('marquee.items')
    const doubled = [...items, ...items, ...items]

    return (
        <div className="relative py-6 overflow-hidden border-y border-white/10">
            <div className="marquee-track flex whitespace-nowrap">
                {doubled.map((item, i) => (
                    <span
                        key={i}
                        className={`mx-4 text-sm md:text-base font-extrabold tracking-[0.2em] ${item === '✦' ? 'text-white/60 text-xs' : 'text-white/80'
                            }`}
                    >
                        {item}
                    </span>
                ))}
            </div>
        </div>
    )
}
