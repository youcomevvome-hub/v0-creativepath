'use client'

import Link from 'next/link'
import Image from 'next/image'
import { ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

const featuredServices = [
  { 
    title: 'WES Evaluation', 
    desc: 'Credential recognition',
    slug: 'wes-support',
    image: 'https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  { 
    title: 'GRE Exam Support', 
    desc: 'Test preparation',
    slug: 'gre-support',
    image: 'https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  { 
    title: 'Application Coaching', 
    desc: 'Personalized guidance',
    slug: 'application-fee-support',
    image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  { 
    title: 'Visa Support', 
    desc: 'Immigration assistance',
    slug: 'visa-fee-support',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  { 
    title: 'Essay Review', 
    desc: 'Writing excellence',
    slug: 'transcript-support',
    image: 'https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
  { 
    title: 'Mentorship', 
    desc: 'Expert guidance',
    slug: 'mentorship-program',
    image: 'https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400',
  },
]

export function ServiceGrid() {
  return (
    <section className="py-20 lg:py-28 bg-white dark:bg-[#0C1220] border-t border-gray-200 dark:border-gray-800">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
            Featured Services
          </p>
          <h2 className="mb-6 text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl text-balance">
            Everything You Need to Succeed
          </h2>
          <p className="max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Comprehensive support covering every step of your study abroad journey.
          </p>
        </div>

        {/* Card Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {featuredServices.map((service, idx) => (
            <Link
              key={service.title}
              href={`/services/${service.slug}`}
              className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/20 bg-white dark:bg-[#1D1D1F] shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
              style={{ animationDelay: `${idx * 100}ms` }}
            >
              {/* Card Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-black/80 backdrop-blur-sm mb-2">
                    <span className="text-sm font-bold text-white">{String(idx + 1).padStart(2, '0')}</span>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="p-6">
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                  {service.title}
                </h3>
                <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                  {service.desc}
                </p>

                <div className="flex items-center gap-2 text-sm font-semibold text-[#2563EB] group-hover:gap-3 transition-all">
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
            className="rounded-full bg-[#2563EB] px-8 text-white hover:bg-[#1D4ED8] transition-opacity" 
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
