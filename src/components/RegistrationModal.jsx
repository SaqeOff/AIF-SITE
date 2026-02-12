import { useState } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function RegistrationModal({ isOpen, onClose }) {
    const [formData, setFormData] = useState({ name: '', email: '', phone: '' })
    const [submitted, setSubmitted] = useState(false)
    const { t } = useLanguage()

    if (!isOpen) return null

    const handleSubmit = (e) => {
        e.preventDefault()
        setSubmitted(true)
        setTimeout(() => {
            setSubmitted(false)
            setFormData({ name: '', email: '', phone: '' })
            onClose()
        }, 2000)
    }

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
            {/* Backdrop */}
            <div
                className="absolute inset-0 bg-black/60"
                onClick={onClose}
            />

            {/* Modal */}
            <div className="relative bg-white w-full max-w-md p-8 md:p-10 rounded-sm">
                {/* Close button */}
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-[#0500FF]/40 hover:text-[#0500FF] text-2xl font-bold transition-colors"
                >
                    ✕
                </button>

                {submitted ? (
                    <div className="text-center py-8">
                        <div className="text-5xl mb-4">✦</div>
                        <h3 className="text-2xl font-black text-[#0500FF] uppercase mb-2">
                            {t('registration.thankYou')}
                        </h3>
                        <p className="text-[#0500FF]/60">
                            {t('registration.thankYouText')}
                        </p>
                    </div>
                ) : (
                    <>
                        <h3 className="text-2xl md:text-3xl font-black text-[#0500FF] uppercase mb-2">
                            {t('registration.title')}
                        </h3>
                        <p className="text-[#0500FF]/50 text-sm mb-8">
                            {t('registration.subtitle')}
                        </p>

                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-xs font-bold text-[#0500FF]/50 uppercase tracking-[0.2em] mb-2">
                                    {t('registration.nameLabel')}
                                </label>
                                <input
                                    type="text"
                                    required
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-[#0500FF]/10 focus:border-[#0500FF] outline-none text-[#0500FF] font-semibold rounded-sm transition-colors"
                                    placeholder={t('registration.namePlaceholder')}
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-[#0500FF]/50 uppercase tracking-[0.2em] mb-2">
                                    EMAIL
                                </label>
                                <input
                                    type="email"
                                    required
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-[#0500FF]/10 focus:border-[#0500FF] outline-none text-[#0500FF] font-semibold rounded-sm transition-colors"
                                    placeholder="your@email.com"
                                />
                            </div>
                            <div>
                                <label className="block text-xs font-bold text-[#0500FF]/50 uppercase tracking-[0.2em] mb-2">
                                    {t('registration.phoneLabel')}
                                </label>
                                <input
                                    type="tel"
                                    required
                                    value={formData.phone}
                                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                    className="w-full px-4 py-3 border-2 border-[#0500FF]/10 focus:border-[#0500FF] outline-none text-[#0500FF] font-semibold rounded-sm transition-colors"
                                    placeholder="+7 (___) ___ __ __"
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-4 bg-[#0500FF] text-white font-black uppercase tracking-wider text-sm hover:bg-[#0400D6] transition-colors rounded-sm mt-4"
                            >
                                {t('registration.submitBtn')}
                            </button>
                        </form>
                    </>
                )}
            </div>
        </div>
    )
}
