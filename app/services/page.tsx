'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const services = [
  {
    id: 'wes-support',
    title: 'WES Credential Evaluation',
    description: 'Complete support for WES evaluation fees and application processing for international credentials.',
    details: 'Get your credentials evaluated and recognized globally with full financial support.',
  },
  {
    id: 'gre-preparation',
    title: 'GRE Exam Support',
    description: 'Full sponsorship of GRE exam fees and access to premium preparation resources.',
    details: 'Score high on the GRE with expert guidance and financial coverage.',
  },
  {
    id: 'application-coaching',
    title: 'Application Coaching',
    description: 'Personal mentorship from experts who have successfully navigated university admissions.',
    details: 'Craft compelling applications with personalized guidance from admission experts.',
  },
  {
    id: 'visa-support',
    title: 'Visa & Immigration',
    description: 'Complete support for visa application fees, SEVIS fees, and immigration documents.',
    details: 'Navigate the visa process confidently with full financial and advisory support.',
  },
  {
    id: 'essay-editing',
    title: 'Essay & Statement Review',
    description: 'Professional editing and feedback on personal statements and application essays.',
    details: 'Polish your narrative with expert writing guidance.',
  },
  {
    id: 'interview-prep',
    title: 'Interview Preparation',
    description: 'Mock interviews and coaching for university admission and scholarship interviews.',
    details: 'Master the interview with practice and personalized feedback.',
  },
  {
    id: 'scholarship-search',
    title: 'Scholarship Search',
    description: 'Research and identification of funding opportunities matching your profile.',
    details: 'Discover scholarships tailored to your background and goals.',
  },
  {
    id: 'financial-planning',
    title: 'Financial Planning',
    description: 'Comprehensive guidance on education financing and budgeting for studies abroad.',
    details: 'Plan your finances strategically with expert support.',
  },
  {
    id: 'language-support',
    title: 'Language Test Prep',
    description: 'TOEFL, IELTS, and other language proficiency exam preparation and fee support.',
    details: 'Excel in English proficiency tests with comprehensive preparation.',
  },
  {
    id: 'career-coaching',
    title: 'Career Planning',
    description: 'Post-graduation career planning and job search support in your destination country.',
    details: 'Build your career path from day one.',
  },
  {
    id: 'networking-events',
    title: 'Community & Networking',
    description: 'Access to alumni networks, webinars, and community events.',
    details: 'Build connections with fellow scholars and mentors.',
  },
  {
    id: 'ongoing-mentorship',
    title: 'Ongoing Mentorship',
    description: 'Continuous support from admission to graduation and beyond.',
    details: 'Long-term guidance throughout your academic journey.',
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Navbar />

      {/* Hero */}
      <section className="relative overflow-hidden py-20 lg:py-32">
        <div
          className="absolute inset-0 opacity-30 dark:opacity-20 blur-sm"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 backdrop-blur-sm" />

        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <div className="text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 animate-in fade-in slide-in-from-top-4 duration-500">
              Our Services
            </p>
            <h1 className="mb-6 text-5xl font-bold tracking-tight text-black dark:text-white lg:text-6xl text-balance animate-in fade-in slide-in-from-top-4 duration-500 delay-100">
              Complete Support for Your Journey
            </h1>
            <p className="mx-auto max-w-2xl text-xl text-gray-600 dark:text-gray-400 animate-in fade-in slide-in-from-top-4 duration-500 delay-200">
              From application to graduation, we're here with comprehensive support tailored to your needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, idx) => (
              <Link
                key={service.id}
                href={`/apply/${service.id}`}
                className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              >
                {/* Background accent */}
                <div className="absolute top-0 right-0 h-20 w-20 translate-x-8 -translate-y-8 rounded-full bg-black dark:bg-white/10 opacity-5 group-hover:opacity-10 transition-opacity" />

                <div className="relative">
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-black dark:bg-white">
                      <span className="text-xl font-bold text-white dark:text-black">{idx + 1}</span>
                    </div>
                  </div>

                  <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                    {service.title}
                  </h3>
                  <p className="mb-4 text-gray-600 dark:text-gray-400">
                    {service.description}
                  </p>

                  <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-gray-200 dark:border-gray-800 py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
        <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl">
            Ready to Begin Your Journey?
          </h2>
          <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
            Choose a service above to get started, or contact our team for a personalized consultation.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" className="rounded-full bg-black dark:bg-white px-8 text-white dark:text-black hover:opacity-90" asChild>
              <Link href="/apply/wes-support">Apply Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 hover:bg-gray-100 dark:hover:bg-gray-800" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
