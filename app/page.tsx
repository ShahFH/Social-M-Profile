import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Features from './components/Features'
import Showcase from './components/Showcase'
import Pricing from './components/Pricing'
import CTA from './components/CTA'
import Footer from './components/Footer'
import Background from './components/Background'

export default function Home() {
  return (
    <div className="min-h-screen bg-[#010314] text-white relative overflow-hidden">
      <Background />
      <div className="relative z-10">
        <Navbar />
        <Hero />
        <Features />
        <Showcase />
        <Pricing />
        <CTA />
        <Footer />
      </div>
    </div>
  )
}

