import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

const partners = [
    { name: 'IT Park', logo: '/images/partners/it-park.jpg', fullBleed: true },
    { name: 'Silkroad Innovation Hub', logo: '/images/partners/silkroad-alt.webp', minimalPadding: true },
    { name: 'Yandex', logo: '/images/partners/yandex.webp', fullBleed: true },
    { name: 'High Technology Park', logo: '/images/partners/high-tech-park.webp', fullBleed: true },
    { name: 'Nazarbayev University', logo: '/images/partners/nu.png' },
    { name: 'Alem Tech Fest', logo: '/images/partners/alem-ai.jpg', fullBleed: true },
    { name: 'startup-course.com UNICORN', logo: '/images/partners/unicorn.jpg', scale: true },
    { name: 'ISSAI', logo: '/images/partners/issai-new.png', fullBleed: true, issaiStyle: true },
    { name: 'FABLAB NU', logo: '/images/partners/fablab-nu.png' },
    { name: 'Master Education', logo: '/images/partners/master-education.png' },
]

export default function PartnersSection() {
    const [ref, isInView] = useInView()
    const { t } = useLanguage()

    return (
        <section id="partners" className="relative py-24 md:py-32 overflow-hidden">
            {/* Top separator */}
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10 mb-16">
                {/* Header */}
                <div ref={ref} className={`text-center reveal ${isInView ? 'visible' : ''}`}>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                        {t('partners.title')}
                    </h2>
                    <p className="text-white/80 max-w-xl mx-auto text-lg">
                        {t('partners.subtitle')}
                    </p>
                </div>
            </div>

            {/* Marquee Container - Full Width */}
            <div className="marquee-container relative w-full overflow-hidden">
                <div className="marquee-track flex gap-12 w-max">
                    {/* Render partners 3 times for seamless loop */}
                    {[...partners, ...partners, ...partners].map((partner, i) => (
                        <div key={i} className="flex-shrink-0 group">
                            <div className={`partner-circle ${partner.fullBleed ? 'filled' : ''} ${partner.scale ? 'scale-up' : ''} ${partner.scaleHeavy ? 'scale-heavy' : ''} ${partner.minimalPadding ? 'minimal-padding' : ''} ${partner.issaiStyle ? 'issai-style' : ''}`}>
                                <img src={partner.logo} alt={partner.name} className="partner-img" />
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
