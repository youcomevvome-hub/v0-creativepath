'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Award, Sparkles } from 'lucide-react'
import { Button } from '@/components/ui/button'

const achievers = [
  {
    name: 'Amara Okonkwo',
    country: 'Nigeria',
    achievement: 'Admitted to Stanford University - Full Scholarship',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'With support from our mentorship program, I was able to craft compelling essays and secure a full ride to my dream school.',
  },
  {
    name: 'Kofi Mensah',
    country: 'Ghana',
    achievement: 'Accepted to MIT - Engineering Program',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'The MVP Grind intensive prep helped me ace my GRE and navigate the complex application process.',
  },
  {
    name: 'Zainab Mohamed',
    country: 'Kenya',
    achievement: 'Oxford University - Rhodes Scholar',
    image: 'https://images.pexels.com/photos/3807517/pexels-photo-3807517.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'Being part of Scholar Squad connected me with mentors who believed in my potential and guided me every step.',
  },
  {
    name: 'Emeka Ikechukwu',
    country: 'Nigeria',
    achievement: 'Harvard Business School - Diversity Fellowship',
    image: 'https://images.pexels.com/photos/3945683/pexels-photo-3945683.jpeg?auto=compress&cs=tinysrgb&w=400',
    story: 'The fee support and mentorship made my MBA dreams a reality without financial burden.',
  },
]

export default function AchieversPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-40">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184405/pexels-photo-3184405.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Achievers"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1E3A5F]/85" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Our Achievers
            </h1>
            <p className="mb-8 text-lg text-white/80">
              Meet inspiring scholars who have realized their dreams with our support. From full scholarships to top-tier universities, these stories prove that opportunity meets ambition with the right guidance.
            </p>
          </div>
        </section>

        {/* Achievers Grid */}
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-2">
              {achievers.map((achiever, index) => (
                <div key={index} className="group rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-white/5 bg-white dark:bg-[#0C1220]">
                  <div className="relative h-64">
                    <Image
                      src={achiever.image}
                      alt={achiever.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-[#F59E0B] text-white px-3 py-1.5 rounded-full text-sm font-semibold">
                      <Star className="h-4 w-4" />
                      Achiever
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-1">{achiever.name}</h3>
                    <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">{achiever.country}</p>
                    <div className="flex items-start gap-2 mb-4">
                      <Award className="h-5 w-5 text-[#1E3A5F] mt-0.5 flex-shrink-0" />
                      <p className="font-semibold text-gray-900 dark:text-white">{achiever.achievement}</p>
                    </div>
                    <p className="text-sm text-gray-600 dark:text-gray-400 italic">"{achiever.story}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 lg:py-28 bg-white dark:bg-[#0C1220]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: Sparkles, stat: '500+', label: 'Students Supported' },
                { icon: Award, stat: '25+', label: 'Countries' },
                { icon: Star, stat: '95%', label: 'Success Rate' },
              ].map((item) => (
                <div key={item.label} className="rounded-2xl bg-gray-50 dark:bg-[#1D1D1F] border border-gray-200 dark:border-white/10 p-8 text-center">
                  <item.icon className="h-12 w-12 text-[#1E3A5F] mx-auto mb-4" />
                  <p className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{item.stat}</p>
                  <p className="text-gray-600 dark:text-gray-400">{item.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-[#1E3A5F] to-[#2D5A8C]">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="mb-6 text-3xl font-bold text-white">
              Be Our Next Achiever
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Your success story starts here. Join Creative Path Inspired and achieve your academic dreams.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full bg-white text-[#1E3A5F] hover:bg-gray-100 px-8 h-12" asChild>
                <Link href="/services">
                  Get Started <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" className="rounded-full bg-[#F59E0B] text-white hover:bg-[#E8930A] px-8 h-12" asChild>
                <a href="https://whatsapp.com/channel/0029Vb7zSwH6LwHqQBzAxM0A" target="_blank" rel="noopener noreferrer">
                  Join Scholar Squad
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
