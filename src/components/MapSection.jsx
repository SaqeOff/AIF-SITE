import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

export default function MapSection() {
    const [ref, isInView] = useInView()
    const { t } = useLanguage()

    return (
        <section className="relative py-24 md:py-32">
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
                    <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left: Text */}
                        <div>
                            <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                                {t('map.title1')}<br />{t('map.title2')}<br />{t('map.title3')}
                            </h2>
                            <p className="text-white/80 text-lg mb-6">
                                {t('map.subtitle')}
                            </p>
                            <div className="info-plate inline-block">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0500FF]/50 mb-1">
                                    {t('map.addressLabel')}
                                </p>
                                <p className="text-lg font-black text-[#0500FF]">
                                    {t('map.address')}
                                </p>
                            </div>
                        </div>

                        {/* Right: Map */}
                        <div className="rounded-sm overflow-hidden h-80 md:h-96">
                            <iframe
                                title="AIF Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d325618.68783158695!2d71.20504795!3d51.1282205!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x424580c47db54609%3A0x97f0148fe8710b13!2z0JDRgdGC0LDQvdCw!5e0!3m2!1sru!2skz!4v1700000000000!5m2!1sru!2skz"
                                width="100%"
                                height="100%"
                                style={{ border: 0, filter: 'saturate(0) contrast(1.2) brightness(0.8)' }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
