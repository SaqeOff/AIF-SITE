import { useState } from 'react'
import { LanguageProvider } from './i18n/LanguageContext'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import MarqueeTicker from './components/MarqueeTicker'
import AboutSection from './components/AboutSection'
import EventsSection from './components/EventsSection'
import SpeakersSection from './components/SpeakersSection'
import StatsSection from './components/StatsSection'
import GallerySection from './components/GallerySection'
import TestimonialsSection from './components/TestimonialsSection'
import PartnersSection from './components/PartnersSection'
import FAQSection from './components/FAQSection'
import MapSection from './components/MapSection'
import ContactSection from './components/ContactSection'
import RegistrationModal from './components/RegistrationModal'

const asterisks = [
    { top: '2%', left: '8%', size: 'asterisk-lg', delay: '0s' },
    { top: '5%', right: '15%', size: 'asterisk-md', delay: '1s' },
    { top: '10%', left: '3%', size: 'asterisk-sm', delay: '0.5s' },
    { top: '14%', right: '5%', size: 'asterisk-xl', delay: '1.5s' },
    { top: '18%', left: '92%', size: 'asterisk-md', delay: '2s' },
    { top: '22%', left: '6%', size: 'asterisk-lg', delay: '0.3s' },
    { top: '27%', right: '10%', size: 'asterisk-sm', delay: '1.8s' },
    { top: '32%', left: '12%', size: 'asterisk-md', delay: '0.7s' },
    { top: '37%', right: '3%', size: 'asterisk-lg', delay: '1.2s' },
    { top: '42%', left: '5%', size: 'asterisk-sm', delay: '2.2s' },
    { top: '47%', right: '8%', size: 'asterisk-xl', delay: '0.9s' },
    { top: '52%', left: '15%', size: 'asterisk-md', delay: '1.6s' },
    { top: '57%', left: '50%', size: 'asterisk-sm', delay: '2.5s' },
    { top: '62%', left: '45%', size: 'asterisk-sm', delay: '0.4s' },
    { top: '67%', right: '55%', size: 'asterisk-sm', delay: '1.1s' },
    { top: '72%', right: '20%', size: 'asterisk-md', delay: '1.4s' },
    { top: '77%', left: '8%', size: 'asterisk-lg', delay: '0.6s' },
    { top: '82%', right: '12%', size: 'asterisk-sm', delay: '1.9s' },
    { top: '87%', left: '25%', size: 'asterisk-md', delay: '0.2s' },
    { top: '92%', right: '30%', size: 'asterisk-lg', delay: '1.7s' },
    { top: '96%', left: '40%', size: 'asterisk-sm', delay: '2.3s' },
]

function App() {
    const [showRegistration, setShowRegistration] = useState(false)

    return (
        <LanguageProvider>
            <div className="relative min-h-screen bg-[#0500FF] text-white overflow-hidden aif-pattern">
                {/* Scattered asterisk decorations */}
                {asterisks.map((a, i) => (
                    <div
                        key={i}
                        className={`asterisk ${a.size} animate-twinkle`}
                        style={{
                            top: a.top,
                            left: a.left,
                            right: a.right,
                            animationDelay: a.delay,
                        }}
                    />
                ))}

                <Navbar onRegister={() => setShowRegistration(true)} />

                <main className="relative z-10">
                    <Hero onRegister={() => setShowRegistration(true)} />
                    <MarqueeTicker />
                    <AboutSection />
                    <EventsSection />
                    <SpeakersSection />
                    <MarqueeTicker />
                    <StatsSection />
                    <GallerySection />
                    <TestimonialsSection />
                    <PartnersSection />
                    <FAQSection />
                    <MapSection />
                    <ContactSection onRegister={() => setShowRegistration(true)} />
                </main>

                <RegistrationModal
                    isOpen={showRegistration}
                    onClose={() => setShowRegistration(false)}
                />
            </div>
        </LanguageProvider>
    )
}

export default App
