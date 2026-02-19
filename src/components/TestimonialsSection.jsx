import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

export default function TestimonialsSection() {
    const [ref, isInView] = useInView()
    const { t } = useLanguage()

    const testimonials = t('testimonials.list')

    return (
        <section className="relative py-24 md:py-32">
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                        {t('testimonials.title')}
                    </h2>
                    <p className="text-white/80 max-w-xl text-lg mb-16">
                        {t('testimonials.subtitle')}
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, i) => (
                        <TestimonialCard key={i} testimonial={testimonial} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function TestimonialCard({ testimonial, index }) {
    const [ref, isInView] = useInView()

    return (
        <div
            ref={ref}
            className={`reveal ${isInView ? 'visible' : ''}`}
            style={{ transitionDelay: `${index * 150}ms` }}
        >
            <div className="flat-card p-6 md:p-8 h-full flex flex-col">
                {/* Quote mark */}
                <span className="text-4xl text-[#0500FF]/20 font-black leading-none mb-4">
                    "
                </span>

                <p className="text-[#0500FF]/70 leading-relaxed flex-1 text-sm md:text-base">
                    {testimonial.text}
                </p>

                <div className="mt-6 pt-4 border-t border-[#0500FF]/10">
                    <h4 className="text-sm font-extrabold text-[#0500FF] uppercase">
                        {testimonial.name}
                    </h4>
                    <p className="text-xs text-[#0500FF]/40 font-semibold uppercase tracking-wider mt-0.5">
                        {testimonial.role}
                    </p>
                </div>
            </div>
        </div>
    )
}
