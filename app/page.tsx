import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ServiceGrid } from "@/components/ServiceGrid"
import { HowItWorks } from "@/components/HowItWorks"
import { Testimonials } from "@/components/Testimonials"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="relative min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      {/* Subtle background pattern */}
      <div className="fixed inset-0 bg-pattern-dots opacity-[0.03] dark:opacity-[0.02] pointer-events-none" />
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
