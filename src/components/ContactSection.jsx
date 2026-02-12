import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

export default function ContactSection({ onRegister }) {
    const [ref, isInView] = useInView()
    const { t } = useLanguage()

    return (
        <section id="contact" className="relative py-24 md:py-32">
            {/* Top separator */}
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
                    {/* Header */}
                    <div className="text-center mb-16">
                        <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                            {t('contact.title')}
                        </h2>
                        <p className="text-white/50 max-w-xl mx-auto text-lg">
                            {t('contact.subtitle')}
                        </p>
                    </div>

                    {/* Contact Grid */}
                    <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto items-start">
                        {/* QR Code Block */}
                        <div className="flex justify-center">
                            <div className="qr-block">
                                {/* QR Code placeholder */}
                                <div className="w-48 h-48 bg-[#0500FF] rounded-lg flex items-center justify-center">
                                    <div className="grid grid-cols-7 gap-1 w-36 h-36">
                                        {Array.from({ length: 49 }).map((_, i) => (
                                            <div
                                                key={i}
                                                className="rounded-sm"
                                                style={{
                                                    backgroundColor: [0, 1, 2, 5, 6, 7, 8, 13, 14, 35, 36, 41, 42, 43, 44, 47, 48].includes(i)
                                                        ? '#0500FF'
                                                        : (i % 3 === 0 ? '#0500FF' : 'white')
                                                }}
                                            />
                                        ))}
                                    </div>
                                </div>
                                <p className="text-[#0500FF] font-bold text-sm uppercase tracking-wider">
                                    {t('contact.scanQr')}
                                </p>
                            </div>
                        </div>

                        {/* Contact Info */}
                        <div className="space-y-6">
                            {/* Phone */}
                            <a href="tel:+77477770641" className="info-plate block group hover:scale-[1.02] transition-transform">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0500FF]/50 mb-2">
                                    {t('contact.phoneLabel')}
                                </p>
                                <p className="text-2xl md:text-3xl font-black">
                                    +7 747 777 0641
                                </p>
                            </a>

                            {/* Instagram */}
                            <a href="https://instagram.com/astanainnovationforum" target="_blank" rel="noopener noreferrer" className="info-plate block group hover:scale-[1.02] transition-transform">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0500FF]/50 mb-2">
                                    INSTAGRAM
                                </p>
                                <p className="text-xl md:text-2xl font-black">
                                    @astanainnovationforum
                                </p>
                            </a>

                            {/* Location */}
                            <div className="info-plate">
                                <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#0500FF]/50 mb-2">
                                    {t('contact.locationLabel')}
                                </p>
                                <p className="text-xl md:text-2xl font-black">
                                    {t('contact.location')}
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* CTA */}
                    <div className="text-center mt-16">
                        <button
                            onClick={onRegister}
                            className="flat-btn text-lg"
                        >
                            {t('contact.ctaBtn')}
                        </button>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <footer className="mt-24 border-t border-white/10">
                <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
                    <div className="flex items-center gap-3">
                        <span className="text-2xl font-black text-white">
                            aif<span>.</span>
                        </span>
                        <span className="text-white/30 text-sm">© 2025 Astana Innovation Forum</span>
                    </div>
                    <div className="flex items-center gap-6">
                        <a href="#about" className="text-sm text-white/30 hover:text-white transition-colors font-bold uppercase tracking-wider">{t('contact.footerAbout')}</a>
                        <a href="#events" className="text-sm text-white/30 hover:text-white transition-colors font-bold uppercase tracking-wider">{t('contact.footerEvents')}</a>
                        <a href="#speakers" className="text-sm text-white/30 hover:text-white transition-colors font-bold uppercase tracking-wider">{t('contact.footerSpeakers')}</a>
                        <a href="#partners" className="text-sm text-white/30 hover:text-white transition-colors font-bold uppercase tracking-wider">{t('contact.footerPartners')}</a>
                        <a href="#contact" className="text-sm text-white/30 hover:text-white transition-colors font-bold uppercase tracking-wider">{t('contact.footerContact')}</a>
                    </div>
                </div>
            </footer>
        </section>
    )
}
