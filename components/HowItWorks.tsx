'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const steps = [
  {
    number: '01',
    title: 'Choose Your Service',
    description: 'Browse our comprehensive range of support services and select the ones that match your needs.',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '02',
    title: 'Submit Application',
    description: 'Fill out our simple eligibility form with your academic background and goals.',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '03',
    title: 'Get Approved',
    description: 'Our team reviews your application within 48 hours and notifies you of your status.',
    image: 'https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  {
    number: '04',
    title: 'Receive Support',
    description: 'Access your approved financial support and start your journey to your dream university.',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
]

export function HowItWorks() {
  return (
    <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#1D1D1F] transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <div className="mb-16 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#1E3A5F] dark:text-[#F59E0B]">
            How It Works
          </p>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl text-balance">
            Your Path to Success
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Four simple steps to access financial support for your study abroad journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, idx) => (
            <div
              key={step.number}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#0C1220] transition-all duration-300 hover:shadow-xl dark:hover:shadow-white/5 hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Image */}
              <div className="relative h-40 overflow-hidden">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50" />
                {/* Step badge uses logo navy */}
                <div className="absolute bottom-3 left-3 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1E3A5F] text-white font-bold text-sm">
                  {step.number}
                </div>
              </div>

              {/* Content */}
              <div className="p-5">
                <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
                  {step.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connector line (except last) */}
              {idx < steps.length - 1 && (
                <div className="hidden lg:block absolute top-[80px] -right-3 w-6 h-0.5 bg-gray-300 dark:bg-gray-700 z-10" />
              )}
            </div>
          ))}
        </div>

        {/* CTA Section — logo navy background with real photo, NO gradient */}
        <div className="mt-16 relative overflow-hidden rounded-3xl">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1200"
              alt="Students celebrating"
              fill
              className="object-cover"
            />
            {/* Solid dark navy overlay — no gradient */}
            <div className="absolute inset-0 bg-[#1E3A5F]/90" />
          </div>
          <div className="relative p-8 lg:p-12 text-center">
            <h3 className="mb-4 text-2xl lg:text-3xl font-bold text-white">
              Ready to Begin Your Journey?
            </h3>
            <p className="mb-8 text-white/80 max-w-xl mx-auto">
              Join hundreds of students who have successfully navigated their study abroad journey with our support.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                size="lg"
                className="rounded-full bg-white text-[#1E3A5F] hover:bg-gray-100 px-8 h-12 font-semibold"
                asChild
              >
                <Link href="/services">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full border-2 border-white px-8 h-12 text-sm font-semibold text-white hover:bg-white hover:text-[#1E3A5F] transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
