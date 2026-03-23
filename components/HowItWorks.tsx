'use client'

import { FileText, CheckCircle, Key, CreditCard } from 'lucide-react'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

const steps = [
  {
    number: '01',
    icon: FileText,
    title: 'Apply',
    description: 'Submit your information and choose your desired support service. Our team reviews your profile within 24-48 hours.',
  },
  {
    number: '02',
    icon: CheckCircle,
    title: 'Get Approved',
    description: 'Receive your approval letter and eligibility code. We provide transparent communication every step of the way.',
  },
  {
    number: '03',
    icon: Key,
    title: 'Access Resources',
    description: 'Unlock exclusive mentorship, application coaching, and premium resources tailored to your journey.',
  },
  {
    number: '04',
    icon: CreditCard,
    title: 'Get Funded',
    description: 'Receive direct financial support or fee waivers for eligible services. Track your benefits in real-time.',
  },
]

export function HowItWorks() {
  return (
    <section className="bg-white dark:bg-black py-20 lg:py-28 border-t border-gray-200 dark:border-gray-800 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            How It Works
          </p>
          <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl text-balance">
            Your Path to Success in 4 Steps
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            A streamlined process designed to get you the support you need, fast and efficiently.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4 mb-16">
          {steps.map((step, idx) => {
            const Icon = step.icon
            return (
              <div
                key={step.number}
                className="group relative animate-in fade-in slide-in-from-bottom-4 duration-700"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                {/* Card */}
                <div className="h-full rounded-2xl border border-gray-200 dark:border-gray-800 bg-gray-50 dark:bg-gray-900/50 p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-gray-300 dark:hover:border-gray-700">
                  {/* Step Number Circle */}
                  <div className="mb-6 inline-flex h-14 w-14 items-center justify-center rounded-full bg-black dark:bg-white text-2xl font-bold text-white dark:text-black shadow-lg group-hover:scale-110 transition-transform">
                    {step.number}
                  </div>

                  {/* Icon */}
                  <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-black/5 dark:bg-white/10 group-hover:bg-black dark:group-hover:bg-white transition-colors duration-300">
                    <Icon className="h-6 w-6 text-gray-700 dark:text-gray-300 group-hover:text-white dark:group-hover:text-black transition-colors" />
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold text-black dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>

                {/* Connector Line (hidden on last item) */}
                {idx < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/3 -right-8 w-8 h-0.5 bg-gray-200 dark:bg-gray-800" />
                )}
              </div>
            )
          })}
        </div>

        {/* CTA Section */}
        <div className="rounded-2xl border border-gray-200 dark:border-gray-800 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-black p-12 text-center shadow-lg">
          <h3 className="mb-4 text-2xl font-bold text-black dark:text-white lg:text-3xl">
            Ready to Start Your Journey?
          </h3>
          <p className="mb-8 text-base text-gray-600 dark:text-gray-400 lg:text-lg">
            Join thousands of students who have received support through Creative Path Inspired. Apply today and take the first step toward your dream university.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button
              size="lg"
              className="rounded-full bg-black dark:bg-white px-8 text-white dark:text-black hover:opacity-90 transition-opacity"
              asChild
            >
              <Link href="/services">
                Explore Services
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              asChild
            >
              <Link href="/contact">
                Learn More
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
