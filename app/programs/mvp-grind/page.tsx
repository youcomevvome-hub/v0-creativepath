import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function MVPGrindPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />
      <main>
        {/* Banner */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="High achievers working"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#0C1220]/80" />
          </div>
          <div className="relative py-28 lg:py-44">
            <div className="mx-auto max-w-4xl px-6 lg:px-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">Program</p>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl text-balance">MVP Grind</h1>
              <p className="text-lg text-white/80 max-w-2xl">
                Intensive mentorship and application support designed for high-achievers ready to push past every obstacle on their way to top universities.
              </p>
            </div>
          </div>
        </section>

        {/* What is MVP Grind */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-16 lg:grid-cols-2 items-center">
              <div>
                <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">For the Driven &amp; Determined</h2>
                <p className="mb-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                  MVP Grind is our flagship intensive program. It pairs you with a dedicated senior mentor, gives you priority access to fee support, and wraps you in a tight-knit cohort of equally ambitious peers.
                </p>
                <ul className="space-y-4 mb-8">
                  {[
                    "Dedicated senior mentor assigned to you",
                    "Priority processing of all fee support applications",
                    "Weekly one-on-one sessions",
                    "Exclusive cohort community",
                    "Essay and SOP deep reviews",
                    "Interview simulation sessions",
                  ].map((item) => (
                    <li key={item} className="flex items-start gap-3">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F]">
                        <Check className="h-3.5 w-3.5 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
                <Button className="rounded-full bg-[#1E3A5F] text-white hover:bg-[#152C4A] px-7" asChild>
                  <Link href="/apply/mvp-grind">
                    Apply to MVP Grind <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="relative rounded-2xl overflow-hidden h-96">
                <Image
                  src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Students in intensive session"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Celebrating scholars"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1E3A5F]/90" />
          </div>
          <div className="relative mx-auto max-w-3xl px-6 text-center">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Grind?</h2>
            <p className="mb-8 text-white/80 text-lg">Applications for the next MVP Grind cohort are open. Limited spots available.</p>
            <Button size="lg" className="rounded-full bg-white text-[#1E3A5F] hover:bg-gray-100 px-8 h-12 font-semibold" asChild>
              <Link href="/apply/mvp-grind">Apply Now <ArrowRight className="ml-2 h-4 w-4" /></Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
