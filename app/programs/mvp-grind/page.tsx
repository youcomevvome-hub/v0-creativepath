'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Rocket, Target, Trophy } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MVPGrindPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-40">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="MVP Grind Program"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#F59E0B]/85" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              MVP Grind
            </h1>
            <p className="mb-8 text-lg text-white/80">
              Intensive support program for high-achievers who are serious about securing scholarships and admissions to top universities worldwide.
            </p>
            <Button size="lg" className="rounded-full bg-[#1E3A5F] text-white hover:bg-[#152C4A] px-8 h-12" asChild>
              <Link href="/contact">
                Apply for MVP Grind →
              </Link>
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: Target, title: "Personalized Strategy", description: "Customized roadmaps for each student's unique profile and university goals." },
                { icon: Rocket, title: "Intensive Prep", description: "Accelerated programs for test prep, essays, and application optimization." },
                { icon: Trophy, title: "Top Results", description: "Access to resources and mentors who have secured admission to elite universities." },
              ].map((feature) => (
                <div key={feature.title} className="rounded-2xl bg-white dark:bg-[#0C1220] border border-gray-200 dark:border-white/10 p-8">
                  <feature.icon className="h-10 w-10 text-[#1E3A5F] mb-4" />
                  <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white">{feature.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-28 bg-white dark:bg-[#0C1220]">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <h2 className="mb-12 text-3xl font-bold text-gray-900 dark:text-white text-center">What's Included</h2>
            <div className="grid gap-6 md:grid-cols-2">
              {[
                '1-on-1 Mentorship Sessions (bi-weekly)',
                'Application Strategy Consultation',
                'Essay Review & Coaching',
                'Interview Preparation',
                'Financial Aid Planning',
                'Deadline Management Support',
                'Access to Scholarship Database',
                'Priority Support from Our Team',
              ].map((benefit) => (
                <div key={benefit} className="flex items-start gap-4 p-4 rounded-xl border border-gray-200 dark:border-white/10">
                  <div className="flex-shrink-0 mt-1">
                    <div className="flex items-center justify-center h-5 w-5 rounded-full bg-[#1E3A5F] text-white text-sm">✓</div>
                  </div>
                  <span className="text-gray-900 dark:text-white font-medium">{benefit}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Ready to Grind and Achieve?
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Limited spots available for our MVP Grind program. Apply today to secure your place.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full bg-[#1E3A5F] text-white hover:bg-[#152C4A] px-8 h-12" asChild>
                <Link href="/contact">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 h-12" asChild>
                <Link href="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
