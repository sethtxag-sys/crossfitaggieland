import Navigation from '@/components/Navigation'
import Hero from '@/components/Hero'
import StartHere from '@/components/StartHere'
import Stakes from '@/components/Stakes'
import About from '@/components/About'
import Coaches from '@/components/Coaches'
import Schedule from '@/components/Schedule'
import DailyWorkouts from '@/components/DailyWorkouts'
import Testimonials from '@/components/Testimonials'
import InstagramGrid from '@/components/InstagramGrid'
import Transformation from '@/components/Transformation'
import Pricing from '@/components/Pricing'
import FAQ from '@/components/FAQ'
import FirstDay from '@/components/FirstDay'
import FreeWeekCTA from '@/components/FreeWeekCTA'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'

/**
 * StoryBrand page flow:
 *
 * 1. Hero — Customer desire + direct CTA + Google review badge
 * 2. StartHere — Name the problem (external + internal)
 * 3. Stakes — What you lose by doing nothing (failure)
 * 4. About — The guide (empathy + authority)
 * 5. Coaches — Guide credentials
 * 6. DailyWorkouts — What you will do (programming + scaling)
 * 7. Schedule — When you can do it (clickable time slots)
 * 8. Testimonials — Social proof
 * 9. Transformation — Success (the "after" picture)
 * 10. Pricing — Investment (with price anchoring)
 * 11. FAQ — Handle objections before they leave
 * 12. FirstDay — Remove fear of the unknown
 * 13. FreeWeekCTA — Direct CTA (plan + call to action)
 * 14. Contact — Contact form (email protected)
 * 15. Footer — Quick links, social, member login
 */
export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <StartHere />
      <Stakes />
      <About />
      <Coaches />
      <DailyWorkouts />
      <Schedule />
      <Testimonials />
      <InstagramGrid />
      <Transformation />
      <Pricing />
      <FAQ />
      <FirstDay />
      <FreeWeekCTA />
      <Contact />
      <Footer />
    </main>
  )
}
