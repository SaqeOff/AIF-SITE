import { useState, useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext'

export default function Countdown() {
    const { t } = useLanguage()
    const eventDate = new Date('2026-10-20T10:00:00+06:00')
    const [timeLeft, setTimeLeft] = useState(getTimeLeft())

    function getTimeLeft() {
        const now = new Date()
        const diff = eventDate - now
        if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 }
        return {
            days: Math.floor(diff / (1000 * 60 * 60 * 24)),
            hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
            minutes: Math.floor((diff / (1000 * 60)) % 60),
            seconds: Math.floor((diff / 1000) % 60),
        }
    }

    useEffect(() => {
        const timer = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
        return () => clearInterval(timer)
    }, [])

    const units = [
        { value: timeLeft.days, label: t('countdown.days') },
        { value: timeLeft.hours, label: t('countdown.hours') },
        { value: timeLeft.minutes, label: t('countdown.minutes') },
        { value: timeLeft.seconds, label: t('countdown.seconds') },
    ]

    return (
        <div className="flex items-center gap-3 md:gap-5">
            {units.map((unit, i) => (
                <div key={i} className="flex items-center gap-3 md:gap-5">
                    <div className="text-center">
                        <div className="text-4xl md:text-6xl lg:text-7xl font-black leading-none tabular-nums">
                            {String(unit.value).padStart(2, '0')}
                        </div>
                        <div className="text-[10px] md:text-xs font-bold tracking-[0.3em] text-white/40 mt-2">
                            {unit.label}
                        </div>
                    </div>
                    {i < units.length - 1 && (
                        <span className="text-3xl md:text-5xl font-black text-white/20 -mt-4">:</span>
                    )}
                </div>
            ))}
        </div>
    )
}
