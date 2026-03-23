'use client'

import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredServices = [
  { title: 'WES Evaluation', desc: 'Credential recognition' },
  { title: 'GRE Exam Support', desc: 'Test preparation' },
  { title: 'Application Coaching', desc: 'Personalized guidance' },
  { title: 'Visa Support', desc: 'Immigration assistance' },
  { title: 'Essay Review', desc: 'Writing excellence' },
  { title: 'Interview Prep', desc: 'Master your interview' },
]

export function ServiceGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-black border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">
            Featured Services
          </p>
          <h2 className="mb-6 text-4xl font-bold text-black dark:text-white lg:text-5xl text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Comprehensive support covering every step of your study abroad journey.
          </p>
        </div>

        {/* Apple-Style Card Grid */}
        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service) => (
            <Link
              key={service.title}
              href="/services"
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900/50 p-8 transition-all duration-300 hover:shadow-xl hover:border-gray-300 dark:hover:border-gray-700 hover:-translate-y-1"
            >
              {/* Subtle background accent */}
              <div className="absolute top-0 right-0 h-32 w-32 translate-x-16 -translate-y-16 rounded-full bg-black dark:bg-white opacity-[0.02] group-hover:opacity-[0.05] transition-opacity" />

              <div className="relative">
                <h3 className="mb-2 text-xl font-bold text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-gray-900 dark:text-white group-hover:gap-3 transition-all">
                  Learn more
                  <ArrowRight className="h-4 w-4" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* View All Button */}
        <div className="mt-12 flex justify-center">
          <Button 
            size="lg" 
            className="rounded-full bg-black dark:bg-white px-8 text-white dark:text-black hover:opacity-90 transition-opacity" 
            asChild
          >
            <Link href="/services">
              View All Services
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
