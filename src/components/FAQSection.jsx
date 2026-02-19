import { useState } from 'react'
import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

export default function FAQSection() {
    const [ref, isInView] = useInView()
    const [openIndex, setOpenIndex] = useState(null)
    const { t } = useLanguage()

    const faqItems = t('faq.items')

    const toggle = (i) => setOpenIndex(openIndex === i ? null : i)

    return (
        <section id="faq" className="relative py-24 md:py-32">
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-4xl mx-auto px-6 relative z-10">
                <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                        {t('faq.title')}
                    </h2>
                    <p className="text-white/80 max-w-xl text-lg mb-16">
                        {t('faq.subtitle')}
                    </p>
                </div>

                <div className="space-y-0">
                    {faqItems.map((item, i) => (
                        <div
                            key={i}
                            className="border-t border-white/10 last:border-b"
                        >
                            <button
                                onClick={() => toggle(i)}
                                className="w-full py-6 flex items-center justify-between gap-4 text-left group"
                            >
                                <h4 className="text-base md:text-lg font-extrabold uppercase tracking-wide group-hover:text-white/90 transition-colors">
                                    {item.q}
                                </h4>
                                <span className={`text-2xl font-bold text-white/30 flex-shrink-0 transition-transform duration-300 ${openIndex === i ? 'rotate-45' : ''
                                    }`}>
                                    +
                                </span>
                            </button>
                            <div className={`overflow-hidden transition-all duration-300 ${openIndex === i ? 'max-h-48 pb-6' : 'max-h-0'
                                }`}>
                                <p className="text-white/50 leading-relaxed text-sm md:text-base pr-12">
                                    {item.a}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
