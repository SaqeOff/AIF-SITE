import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

export default function EventsSection() {
    const [headerRef, headerInView] = useInView()
    const { t } = useLanguage()

    const events = t('events.list')

    return (
        <section id="events" className="relative py-24 md:py-32 overflow-hidden">
            {/* Top separator */}
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div ref={headerRef} className={`mb-16 reveal ${headerInView ? 'visible' : ''}`}>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                        {t('events.title')}
                    </h2>
                    <p className="text-white/80 max-w-xl text-lg">
                        {t('events.subtitle')}
                    </p>
                </div>

                {/* Event Cards */}
                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {events.map((event, i) => (
                        <EventCard key={i} event={event} index={i} moreLabel={t('events.more')} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function EventCard({ event, index, moreLabel }) {
    const [ref, isInView] = useInView()

    return (
        <div
            ref={ref}
            className={`reveal ${isInView ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="flat-card overflow-hidden h-full flex flex-col">
                {/* Tag header bar */}
                <div className="bg-[#0500FF] px-6 py-3 flex items-center justify-between">
                    <span className="text-xs font-bold tracking-[0.2em] text-white">
                        {event.tag}
                    </span>
                    <span className="text-xs font-mono text-white/60">
                        {event.date}
                    </span>
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                    <h3 className="text-2xl font-black uppercase mb-3 text-[#0500FF]">
                        {event.title}
                    </h3>
                    <p className="text-[#0500FF]/60 leading-relaxed flex-1 text-sm">
                        {event.description}
                    </p>
                    <div className="mt-5 flex items-center gap-2 text-[#0500FF] text-sm font-bold uppercase tracking-wider">
                        <span>{moreLabel}</span>
                        <span>→</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
