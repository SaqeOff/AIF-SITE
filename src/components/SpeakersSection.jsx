import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

export default function SpeakersSection() {
    const [ref, isInView] = useInView()
    const { t } = useLanguage()

    const speakers = t('speakers.list')

    return (
        <section id="speakers" className="relative py-24 md:py-32">
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                        {t('speakers.title')}
                    </h2>
                    <p className="text-white/80 max-w-xl text-lg mb-16">
                        {t('speakers.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
                    {speakers.map((speaker, i) => (
                        <SpeakerCard key={i} speaker={speaker} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function SpeakerCard({ speaker, index }) {
    const [ref, isInView] = useInView()

    return (
        <div
            ref={ref}
            className={`reveal ${isInView ? 'visible' : ''} group`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div className="flat-card p-6 md:p-8 text-center h-full">
                {/* Avatar */}
                <div className="w-20 h-20 md:w-24 md:h-24 mx-auto mb-5 rounded-full bg-[#0500FF] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white text-2xl md:text-3xl font-black">
                        {speaker.initials}
                    </span>
                </div>

                <h4 className="text-lg md:text-xl font-black text-[#0500FF] uppercase mb-1">
                    {speaker.name}
                </h4>
                <p className="text-sm font-bold text-[#0500FF]/60 uppercase tracking-wider">
                    {speaker.role}
                </p>
                <p className="text-xs font-semibold text-[#0500FF]/40 uppercase tracking-widest mt-1">
                    {speaker.company}
                </p>
            </div>
        </div>
    )
}
