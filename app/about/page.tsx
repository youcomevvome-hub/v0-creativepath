"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Heart, Users, ChevronDown } from "lucide-react"
import { Button } from "@/components/ui/button"



const programs = [
  {
    title: "Getting Started",
    description: "New to studying abroad? Start here with foundational support.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
    link: "/services",
  },
  // Removed WhatsApp channel program link
  {
    title: "MVP Grind",
    description: "Intensive support for high-achievers.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/programs/mvp-grind",
  },
]

const initiatives = [
  {
    id: "wes",
    number: "01",
    title: "WES Fee Support",
    description: "Full credential evaluation coverage for academic transcripts. We cover 100% of WES evaluation fees for eligible students.",
    image: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/services/wes-evaluation",
  },
  {
    id: "gre",
    number: "02",
    title: "GRE/TOEFL Support",
    description: "Testing fee assistance for standardized exams required by universities worldwide. Get your exam fees covered.",
    image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/services/gre-gmat",
  },
  {
    id: "visa",
    number: "03",
    title: "Visa Support",
    description: "SEVIS and visa application fee assistance to help you secure your student visa without financial burden.",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/services/visa-sevis",
  },
  {
    id: "mentorship",
    number: "04",
    title: "Mentorship Program",
    description: "One-on-one guidance from experienced scholars who have successfully navigated the study abroad journey.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "/services/mentorship",
  },
]

const stats = [
  { value: "500+", label: "Students Supported" },
  { value: "25+", label: "Countries Reached" },
  { value: "$2M+", label: "Fees Covered" },
  { value: "98%", label: "Success Rate" },
]

export default function AboutPage() {
  const [expandedInitiative, setExpandedInitiative] = useState<string | null>("wes")

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />

      <main>
        {/* Hero Banner */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Students collaborating"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-[#0C1220]/80" />
          </div>
          <div className="relative py-28 lg:py-44">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#F59E0B] animate-in fade-in slide-in-from-left-4 duration-500">
                About Us
              </p>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl text-balance animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
                A Global Community<br />
                <span className="text-gray-300">Helping Students</span><br />
                Reach New Heights
              </h1>
              <p className="max-w-2xl text-lg text-white/80 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                We are a network of scholars, professionals, and educators united by one mission: making quality education accessible to talented students from underrepresented regions.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section */}
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex items-center gap-4">
              <span className="inline-block rounded-full border border-gray-300 dark:border-gray-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-400">
                02 &nbsp; Programs
              </span>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              <div>
                <h2 className="text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
                  Programs Designed for<br />All Levels
                </h2>
                <p className="mt-4 text-gray-600 dark:text-gray-400 max-w-lg">
                  Whether you&apos;re just starting your journey or ready for advanced support, we have a program for you.
                </p>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {programs.map((program, index) => {
                  const isExternal = "external" in program && program.external
                  const cardContent = (
                    <div className={`relative ${program.featured ? "h-[300px]" : "h-[200px]"}`}>
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/40 transition-colors" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-1">{program.title}</h3>
                        <p className="text-sm text-white/80">{program.description}</p>
                      </div>
                      <div className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </div>
                    </div>
                  )

                  if (isExternal) {
                    return (
                      <a
                        key={index}
                        href={program.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`group relative overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-white/5 ${
                          program.featured ? "sm:col-span-2" : ""
                        }`}
                      >
                        {cardContent}
                      </a>
                    )
                  }

                  return (
                    <Link
                      key={index}
                      href={program.link}
                      className={`group relative overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-white/5 ${
                        program.featured ? "sm:col-span-2" : ""
                      }`}
                    >
                      {cardContent}
                    </Link>
                  )
                })}
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives Accordion */}
        <section className="py-20 lg:py-28 bg-white dark:bg-[#0C1220]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex items-center gap-4">
              <span className="inline-block rounded-full border border-gray-300 dark:border-gray-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-400">
                03 &nbsp; Initiatives
              </span>
            </div>
            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  Our Key<br />Initiatives &amp;<br />Programs
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  Comprehensive support across every stage of your study abroad journey.
                </p>
                <div className="relative rounded-2xl overflow-hidden h-[200px] mb-6">
                  <Image
                    src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <Button className="rounded-full bg-[#1E3A5F] text-white px-6 hover:bg-[#152C4A]" asChild>
                  <Link href="/services">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
              <div className="space-y-3">
                {initiatives.map((item) => (
                  <div
                    key={item.id}
                    className={`rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden transition-all ${
                      expandedInitiative === item.id ? "bg-gray-50 dark:bg-[#1D1D1F]" : "bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-[#1D1D1F]"
                    }`}
                  >
                    <button
                      onClick={() => setExpandedInitiative(expandedInitiative === item.id ? null : item.id)}
                      className="flex items-center justify-between w-full p-5 text-left"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-400">{item.number}</span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      </div>
                      <ChevronDown className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${expandedInitiative === item.id ? "rotate-180" : ""}`} />
                    </button>
                    {expandedInitiative === item.id && (
                      <div className="px-5 pb-5 animate-in fade-in slide-in-from-top-2 duration-300">
                        <div className="flex gap-4">
                          <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                            <Image src={item.image} alt={item.title} fill className="object-cover" />
                          </div>
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                            <Button variant="outline" className="rounded-full text-sm border-[#1E3A5F] text-[#1E3A5F] dark:border-white dark:text-white" asChild>
                              <Link href={item.link}>View Details</Link>
                            </Button>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20 lg:py-28 bg-gray-100 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">Our Impact in Numbers</h2>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white dark:bg-[#0C1220] border border-gray-200 dark:border-white/10 p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-white/5">
                  <p className="text-4xl font-bold text-[#1E3A5F] dark:text-white">{stat.value}</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Core Values */}
        <section className="py-20 lg:py-28 bg-white dark:bg-[#0C1220]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl mb-4">Our Core Values</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">These principles guide everything we do.</p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                { icon: Globe, title: "Global Reach", description: "Supporting students from over 25 countries across Africa and beyond.", image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { icon: Heart, title: "Dedicated Support", description: "Our volunteers dedicate their time to mentoring and guiding students.", image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { icon: Users, title: "Community Driven", description: "Built by scholars, for scholars. We understand your journey.", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" },
              ].map((value) => (
                <div key={value.title} className="group rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl dark:hover:shadow-white/5">
                  <div className="relative h-48">
                    <Image src={value.image} alt={value.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-black/40" />
                    <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E3A5F]">
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6 bg-white dark:bg-[#1D1D1F]">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Become a Mentor — dark bg so text is always visible */}
        <section id="mentor" className="py-20 lg:py-28 bg-[#1E3A5F] dark:bg-[#0C1220]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative overflow-hidden rounded-2xl h-80">
                <Image
                  src="https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mentors collaborating"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F59E0B]">Join Our Team</p>
                <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Become a Mentor</h2>
                <p className="mb-6 text-lg text-white/80 leading-relaxed">
                  Share your experience and give back to the next generation of scholars. As a Creative Path Inspired mentor, you provide one-on-one guidance, essay reviews, and career advice to students navigating the study abroad journey.
                </p>
                <ul className="mb-8 space-y-3">
                  {["Guide students through applications", "Review personal statements & essays", "Help with interview preparation", "Share your study abroad experience"].map((item) => (
                    <li key={item} className="flex items-center gap-3 text-white/90">
                      <span className="h-2 w-2 rounded-full bg-[#F59E0B] shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="rounded-full bg-white text-[#1E3A5F] hover:bg-gray-100 px-7 font-semibold" asChild>
                  <Link href="/contact#mentor-form">
                    Apply to Mentor <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Ready to Start CTA */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Students celebrating"
              fill
              className="object-cover"
            />
            {/* Solid overlay, no gradient */}
            <div className="absolute inset-0 bg-gray-900/85" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">Ready to Start Your Journey?</h2>
            <p className="mb-8 text-lg text-white/80">
              Join hundreds of scholars who have achieved their dreams with our support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full bg-white text-[#1E3A5F] hover:bg-gray-100 px-8 h-12 font-semibold" asChild>
                <Link href="/apply/wes-support">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/40 text-white hover:bg-white/10 px-8 h-12" asChild>
                <Link href="/contact">Become a Mentor</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
