import { useInView } from '../hooks/useInView'
import { useCountUp } from '../hooks/useCountUp'
import { useLanguage } from '../i18n/LanguageContext'

const statValues = [3000000, 1000, 7, 15]

function StatItem({ value, statTranslation, isInView }) {
    const count = useCountUp(value, 1500, 0, isInView)

    const formatNumber = (num) => {
        return num.toLocaleString('ru-RU')
    }

    return (
        <div className="flex flex-col items-center justify-center py-10 px-6">
            <div
                className="font-black leading-none mb-4 whitespace-nowrap"
                style={{ fontSize: 'clamp(1.75rem, 4vw, 3.5rem)' }}
            >
                {formatNumber(count)}{statTranslation.suffix}
            </div>
            <div className="text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] text-white/80 text-center">
                {statTranslation.label}
            </div>
        </div>
    )
}

export default function StatsSection() {
    const [ref, isInView] = useInView()
    const { t } = useLanguage()

    const statsTranslations = t('stats.items')

    return (
        <section id="stats" className="relative py-24 md:py-32">
            {/* Top separator */}
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-6xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div className={`text-center mb-16 reveal ${isInView ? 'visible' : ''}`}>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-black uppercase">
                        {t('stats.title')}
                    </h2>
                </div>

                {/* Stats Grid */}
                <div
                    ref={ref}
                    className="grid grid-cols-2 lg:grid-cols-[2.2fr_1.6fr_1fr_1fr] justify-center"
                >
                    {statValues.map((value, i) => (
                        <div
                            key={i}
                            className="relative"
                        >
                            {/* Vertical divider (desktop) */}
                            {i > 0 && (
                                <div className="hidden lg:block absolute left-0 top-6 bottom-6 w-px bg-white/15" />
                            )}
                            {/* Horizontal divider (mobile, row 2) */}
                            {i >= 2 && (
                                <div className="lg:hidden absolute top-0 left-8 right-8 h-px bg-white/15" />
                            )}
                            {/* Vertical divider (mobile, odd items) */}
                            {i % 2 === 1 && (
                                <div className="lg:hidden absolute left-0 top-6 bottom-6 w-px bg-white/15" />
                            )}
                            <StatItem value={value} statTranslation={statsTranslations[i]} isInView={isInView} />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
