import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

export default function AboutSection() {
    const [ref, isInView] = useInView()
    const [ref2, isInView2] = useInView()
    const { t } = useLanguage()

    const activities = t('about.activities')

    return (
        <section id="about" className="relative py-24 md:py-32">
            {/* Thin white separator */}
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6">
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    {/* Left: Giant КТО МЫ? */}
                    <div ref={ref} className={`reveal-left ${isInView ? 'visible' : ''}`}>
                        <h2 className="text-6xl md:text-7xl lg:text-8xl xl:text-9xl font-black uppercase leading-none mb-8">
                            {t('about.title1')}<br />{t('about.title2')}
                        </h2>

                        <p className="text-lg text-white/80 leading-relaxed mb-4">
                            <strong className="text-white font-extrabold">{t('about.text1_bold')}</strong>{t('about.text1')}
                        </p>

                        <p className="text-white/60 leading-relaxed">
                            {t('about.text2')}
                        </p>
                    </div>

                    {/* Right: Activities list */}
                    <div ref={ref2} className={`reveal-right ${isInView2 ? 'visible' : ''}`}>
                        <h3 className="text-2xl font-extrabold uppercase tracking-wider mb-8 text-white/60">
                            {t('about.whatWeDo')}
                        </h3>

                        <div className="space-y-0">
                            {activities.map((item, i) => (
                                <div
                                    key={i}
                                    className="py-6 border-t border-white/10 last:border-b"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="text-white text-2xl mt-0.5">✦</span>
                                        <div>
                                            <h4 className="text-xl font-extrabold uppercase tracking-wide mb-1">
                                                {item.label}
                                            </h4>
                                            <p className="text-white/80 text-sm">
                                                {item.desc}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
