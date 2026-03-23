import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ServiceGrid } from "@/components/ServiceGrid"
import { HowItWorks } from "@/components/HowItWorks"
import { Testimonials } from "@/components/Testimonials"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background transition-colors">
      <Navbar />
      <main>
        <Hero />
        <ServiceGrid />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
