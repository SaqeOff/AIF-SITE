import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

export default function ScheduleSection() {
    const [ref, isInView] = useInView()
    const { t } = useLanguage()

    const schedule = t('schedule.list')
    const typeLabels = t('schedule.typeLabels')

    return (
        <section id="schedule" className="relative py-24 md:py-32">
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-5xl mx-auto px-6 relative z-10">
                <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                        {t('schedule.title')}
                    </h2>
                    <p className="text-white/50 max-w-xl text-lg mb-16">
                        {t('schedule.subtitle')}
                    </p>
                </div>

                <div className="space-y-0">
                    {schedule.map((item, i) => (
                        <ScheduleItem key={i} item={item} index={i} typeLabels={typeLabels} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function ScheduleItem({ item, index, typeLabels }) {
    const [ref, isInView] = useInView()
    const isBreak = item.type === 'break'

    return (
        <div
            ref={ref}
            className={`reveal ${isInView ? 'visible' : ''} border-t border-white/10 last:border-b`}
            style={{ transitionDelay: `${index * 60}ms` }}
        >
            <div className={`flex items-start gap-4 md:gap-8 py-5 md:py-6 group ${isBreak ? 'opacity-50' : ''
                }`}>
                {/* Time */}
                <div className="w-16 md:w-20 flex-shrink-0">
                    <span className="text-lg md:text-2xl font-black tabular-nums">
                        {item.time}
                    </span>
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0">
                    <div className="flex items-start gap-3 flex-wrap">
                        <h4 className={`text-base md:text-lg font-extrabold uppercase tracking-wide ${isBreak ? 'text-white/40' : 'text-white group-hover:text-white/90'
                            }`}>
                            {item.title}
                        </h4>
                        <span className={`text-[10px] font-bold tracking-[0.2em] px-2 py-0.5 rounded-sm flex-shrink-0 ${isBreak
                            ? 'bg-white/5 text-white/30'
                            : 'bg-white/10 text-white/60'
                            }`}>
                            {typeLabels[item.type]}
                        </span>
                    </div>
                    {item.speaker && (
                        <p className="text-sm text-white/40 mt-1 font-medium">
                            {item.speaker}
                        </p>
                    )}
                </div>
            </div>
        </div>
    )
}
