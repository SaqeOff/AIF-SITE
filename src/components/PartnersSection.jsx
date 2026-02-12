import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

const partners = [
    { name: 'IT Park', initials: 'IT' },
    { name: 'Silkroad Innovation Hub', initials: 'SI' },
    { name: 'Yandex', initials: 'Ya' },
    { name: 'High Technology Park', initials: 'HT' },
    { name: 'Astana Hub', initials: 'AH' },
    { name: 'STEM Foundation', initials: 'ST' },
]

export default function PartnersSection() {
    const [ref, isInView] = useInView()
    const { t } = useLanguage()

    return (
        <section id="partners" className="relative py-24 md:py-32 overflow-hidden">
            {/* Top separator */}
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                {/* Header */}
                <div ref={ref} className={`text-center mb-16 reveal ${isInView ? 'visible' : ''}`}>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                        {t('partners.title')}
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto text-lg">
                        {t('partners.subtitle')}
                    </p>
                </div>

                {/* Partner Circles Grid */}
                <div className="flex flex-wrap justify-center gap-8 md:gap-12">
                    {partners.map((partner, i) => (
                        <div key={i} className="flex flex-col items-center gap-3 group">
                            <div className="partner-circle">
                                <span className="text-[#0500FF] font-black text-2xl md:text-3xl tracking-tight">
                                    {partner.initials}
                                </span>
                            </div>
                            <span className="text-xs font-bold uppercase tracking-widest text-white/50 group-hover:text-white transition-colors text-center max-w-[120px]">
                                {partner.name}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
