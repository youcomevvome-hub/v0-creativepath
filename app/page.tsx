import { Navbar } from "@/components/Navbar"
import { Hero } from "@/components/Hero"
import { ServiceGrid } from "@/components/ServiceGrid"
import { HowItWorks } from "@/components/HowItWorks"
import { Testimonials } from "@/components/Testimonials"
import { Footer } from "@/components/Footer"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors relative">
      {/* Subtle background pattern */}
      <div
        className="fixed inset-0 pointer-events-none opacity-5 dark:opacity-10"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #1E3A5F 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <ServiceGrid />
        <HowItWorks />
        <Testimonials />
      </main>
      <Footer />
    </div>
  )
}
