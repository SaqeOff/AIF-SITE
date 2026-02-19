import { useInView } from '../hooks/useInView'
import { useLanguage } from '../i18n/LanguageContext'

const colors = ['#0400D6', '#0300AA', '#0500FF', '#0400D6', '#0300AA', '#0500FF']

export default function GallerySection() {
    const [ref, isInView] = useInView()
    const { t } = useLanguage()

    const galleryTitles = t('gallery.items')

    return (
        <section className="relative py-24 md:py-32">
            <div className="absolute top-0 left-6 right-6 h-px bg-white/10" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div ref={ref} className={`reveal ${isInView ? 'visible' : ''}`}>
                    <h2 className="text-5xl md:text-6xl lg:text-7xl font-black uppercase mb-4">
                        {t('gallery.title')}
                    </h2>
                    <p className="text-white/80 max-w-xl text-lg mb-16">
                        {t('gallery.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 gap-3 md:gap-4">
                    {galleryTitles.map((title, i) => (
                        <GalleryItem key={i} title={title} color={colors[i]} index={i} />
                    ))}
                </div>
            </div>
        </section>
    )
}

function GalleryItem({ title, color, index }) {
    const [ref, isInView] = useInView()
    const heights = ['h-48', 'h-64', 'h-56', 'h-60', 'h-52', 'h-48']

    return (
        <div
            ref={ref}
            className={`reveal ${isInView ? 'visible' : ''} group cursor-pointer`}
            style={{ transitionDelay: `${index * 100}ms` }}
        >
            <div
                className={`relative ${heights[index]} overflow-hidden rounded-sm`}
                style={{ backgroundColor: color }}
            >
                {/* Pattern overlay */}
                <div className="absolute inset-0 opacity-10"
                    style={{
                        backgroundImage: `repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(255,255,255,0.05) 20px, rgba(255,255,255,0.05) 40px)`
                    }}
                />

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 text-white/20 text-2xl">✦</div>
                <div className="absolute bottom-4 left-4 text-white/10 text-6xl font-black">
                    {String(index + 1).padStart(2, '0')}
                </div>

                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-center justify-center">
                    <span className="text-white font-extrabold text-sm md:text-base uppercase tracking-wider opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-center px-4">
                        {title}
                    </span>
                </div>
            </div>
        </div>
    )
}
