import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StartHere from '@/components/StartHere'
import About from '@/components/About'
import Coaches from '@/components/Coaches'
import Schedule from '@/components/Schedule'
import Pricing from '@/components/Pricing'
import DailyWorkouts from '@/components/DailyWorkouts'
import Testimonials from '@/components/Testimonials'
import FreeWeekCTA from '@/components/FreeWeekCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StartHere />
      <About />
      <Coaches />
      <Schedule />
      <Pricing />
      <DailyWorkouts />
      <Testimonials />
      <FreeWeekCTA />
      <Contact />
      <Footer />
    </main>
  )
}
