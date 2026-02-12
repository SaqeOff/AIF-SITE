import Countdown from './Countdown'
import { useLanguage } from '../i18n/LanguageContext'

export default function Hero({ onRegister }) {
    const { t } = useLanguage()

    return (
        <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
            <div className="relative z-10 w-full max-w-7xl mx-auto px-6 py-32">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    {/* Left: Description */}
                    <div className="lg:w-1/2 text-left">
                        <p className="text-sm font-bold tracking-[0.3em] text-white/60 uppercase mb-4">
                            {t('hero.subtitle')}
                        </p>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-black uppercase leading-tight mb-6">
                            {t('hero.title')}
                        </h2>
                        <p className="text-lg text-white/70 mb-8 max-w-lg leading-relaxed">
                            {t('hero.description')}
                        </p>

                        {/* Countdown */}
                        <div className="mb-10">
                            <p className="text-xs font-bold tracking-[0.3em] text-white/40 uppercase mb-4">
                                {t('hero.countdownLabel')}
                            </p>
                            <Countdown />
                        </div>

                        <div className="flex flex-wrap gap-4">
                            <button onClick={onRegister} className="flat-btn text-lg">
                                {t('hero.registerBtn')}
                            </button>
                            <a href="#about" className="flat-btn-outline text-lg">
                                {t('hero.learnMore')}
                            </a>
                        </div>
                    </div>

                    {/* Right: Massive "aif." logo */}
                    <div className="lg:w-1/2 flex justify-center lg:justify-end">
                        <h1 className="text-[8rem] md:text-[12rem] lg:text-[16rem] xl:text-[20rem] font-black leading-none text-white select-none">
                            aif<span className="text-white">.</span>
                        </h1>
                    </div>
                </div>
            </div>
        </section>
    )
}
