'use client'

import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Users, Zap, Award } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function ScholarSquadPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220]">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-40">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Scholar Squad Community"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#1E3A5F]/85" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Scholar Squad
            </h1>
            <p className="mb-8 text-lg text-white/80">
              Join our vibrant community of ambitious scholars pursuing their dreams together. Share experiences, find mentors, and celebrate milestones with peers who understand your journey.
            </p>
            <Button size="lg" className="rounded-full bg-[#F59E0B] text-white hover:bg-[#E8930A] px-8 h-12" asChild>
              <a href="https://whatsapp.com/channel/0029Vb7zSwH6LwHqQBzAxM0A" target="_blank" rel="noopener noreferrer">
                Join Our WhatsApp Channel →
              </a>
            </Button>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-3">
              {[
                { icon: Users, title: "Community Support", description: "Connect with 500+ students from 25+ countries sharing similar goals." },
                { icon: Zap, title: "Real-Time Insights", description: "Get instant answers, updates on application cycles, and shared experiences." },
                { icon: Award, title: "Success Stories", description: "Learn from peers who have successfully navigated their study abroad journey." },
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

        {/* CTA */}
        <section className="py-16 bg-white dark:bg-[#0C1220]">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
              Ready to Connect?
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Don't navigate this journey alone. Join Scholar Squad today and access our supportive community.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" className="rounded-full bg-[#1E3A5F] text-white hover:bg-[#152C4A] px-8 h-12" asChild>
                <a href="https://whatsapp.com/channel/0029Vb7zSwH6LwHqQBzAxM0A" target="_blank" rel="noopener noreferrer">
                  Join Now <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 h-12" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
