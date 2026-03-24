'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Award, Trophy, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const achievers = [
  {
    name: 'Amara Okafor',
    university: 'Stanford University',
    program: 'Computer Science',
    country: 'Nigeria',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievement: 'Full Scholarship Recipient',
  },
  {
    name: 'Kwame Mensah',
    university: 'Oxford University',
    program: 'Medicine',
    country: 'Ghana',
    image: 'https://images.pexels.com/photos/3784633/pexels-photo-3784633.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievement: 'Rhodes Scholar',
  },
  {
    name: 'Zainab Ahmed',
    university: 'Harvard University',
    program: 'Business Administration',
    country: 'Kenya',
    image: 'https://images.pexels.com/photos/3769714/pexels-photo-3769714.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievement: 'MBA Graduate',
  },
  {
    name: 'Chidi Nwankwo',
    university: 'MIT',
    program: 'Engineering',
    country: 'Nigeria',
    image: 'https://images.pexels.com/photos/3777931/pexels-photo-3777931.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievement: 'PhD Candidate',
  },
  {
    name: 'Fatima Hassan',
    university: 'Cambridge University',
    program: 'Law',
    country: 'Sudan',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievement: 'International Law Expert',
  },
  {
    name: 'Kofi Adekunle',
    university: 'Yale University',
    program: 'Public Health',
    country: 'Ghana',
    image: 'https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=400',
    achievement: 'Healthcare Leader',
  },
]

export default function AchieversPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Achievement celebration"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#1E3A5F]/85" />
          </div>
          <div className="relative py-24 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#F59E0B] animate-in fade-in slide-in-from-left-4 duration-500">
                Success Stories
              </p>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl text-balance animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
                Meet Our<br />
                <span className="text-[#F59E0B]">Achievers</span>
              </h1>
              <p className="max-w-2xl text-lg text-white/80 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                These exceptional students have transformed their dreams into reality with our support. 
                They represent the best of what's possible when talent meets opportunity.
              </p>
            </div>
          </div>
        </section>

        {/* Achievers Grid */}
        <section className="py-20 lg:py-28 bg-white dark:bg-[#0C1220]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-16 text-center">
              <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
                Scholars Making a Difference
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                From Nigeria to Kenya, Sudan to Ghana - our scholars are changing the world, 
                one achievement at a time.
              </p>
            </div>

            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {achievers.map((achiever, index) => (
                <div
                  key={index}
                  className="group relative overflow-hidden rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1D1D1F] transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-white/10"
                >
                  {/* Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={achiever.image}
                      alt={achiever.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                    
                    {/* Achievement Badge */}
                    <div className="absolute top-4 right-4 flex items-center gap-2 rounded-full bg-[#F59E0B] px-3 py-1.5 text-xs font-semibold text-white">
                      <Trophy className="h-3.5 w-3.5" />
                      {achiever.achievement}
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="mb-1 text-xl font-bold text-gray-900 dark:text-white">
                      {achiever.name}
                    </h3>
                    <p className="mb-4 text-sm text-gray-600 dark:text-gray-400">
                      {achiever.country}
                    </p>

                    <div className="space-y-2 border-t border-gray-200 dark:border-white/10 pt-4">
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">University</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {achiever.university}
                        </p>
                      </div>
                      <div>
                        <p className="text-xs text-gray-500 dark:text-gray-400">Program</p>
                        <p className="font-semibold text-gray-900 dark:text-white">
                          {achiever.program}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-16 lg:py-24 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl bg-white dark:bg-[#0C1220] border border-gray-200 dark:border-white/10 p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#1E3A5F]">
                    <Award className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-4xl font-bold text-[#1E3A5F] dark:text-white mb-2">500+</p>
                <p className="text-gray-600 dark:text-gray-400">Successful Placements</p>
              </div>

              <div className="rounded-2xl bg-white dark:bg-[#0C1220] border border-gray-200 dark:border-white/10 p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#F59E0B]">
                    <Star className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-4xl font-bold text-[#1E3A5F] dark:text-white mb-2">98%</p>
                <p className="text-gray-600 dark:text-gray-400">Success Rate</p>
              </div>

              <div className="rounded-2xl bg-white dark:bg-[#0C1220] border border-gray-200 dark:border-white/10 p-8 text-center">
                <div className="mb-4 flex justify-center">
                  <div className="flex h-16 w-16 items-center justify-center rounded-xl bg-[#374151]">
                    <Trophy className="h-8 w-8 text-white" />
                  </div>
                </div>
                <p className="text-4xl font-bold text-[#1E3A5F] dark:text-white mb-2">25+</p>
                <p className="text-gray-600 dark:text-gray-400">Countries Represented</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="relative py-16 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184407/pexels-photo-3184407.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Join us"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1E3A5F]/90" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Be the Next Success Story
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Join our community of achievers and transform your study abroad dreams into reality.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full bg-white text-[#1E3A5F] hover:bg-gray-100 px-8 h-12" asChild>
                <Link href="/services">
                  Explore Services <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 px-8 h-12" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
