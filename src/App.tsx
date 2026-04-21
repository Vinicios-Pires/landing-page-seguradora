import Navbar from './components/Navbar'
import Hero from './components/Hero'
import StatsBar from './components/StatsBar'
import Services from './components/Services'
import WhyUs from './components/WhyUs'
import HowItWorks from './components/HowItWorks'
import Testimonials from './components/Testimonials'
import FAQ from './components/FAQ'
import CTABanner from './components/CTABanner'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Services />
        <WhyUs />
        <HowItWorks />
        <Testimonials />
        <FAQ />
        <CTABanner />
      </main>
      <Footer />
    </>
  )
}
