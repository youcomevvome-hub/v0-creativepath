"use client"

import Link from "next/link"
import { ArrowRight } from "lucide-react"

// Chromatic color wheel - solid colors, no gradients
const colorWheel = [
  { bg: "bg-[#EEF2FF]", text: "text-[#4338CA]", icon: "bg-[#4338CA]", border: "border-[#C7D2FE]" },
  { bg: "bg-[#FDF4FF]", text: "text-[#A21CAF]", icon: "bg-[#A21CAF]", border: "border-[#F5D0FE]" },
  { bg: "bg-[#FFF7ED]", text: "text-[#C2410C]", icon: "bg-[#C2410C]", border: "border-[#FED7AA]" },
  { bg: "bg-[#FEFCE8]", text: "text-[#A16207]", icon: "bg-[#A16207]", border: "border-[#FEF08A]" },
  { bg: "bg-[#F0FDF4]", text: "text-[#15803D]", icon: "bg-[#15803D]", border: "border-[#BBF7D0]" },
  { bg: "bg-[#ECFEFF]", text: "text-[#0E7490]", icon: "bg-[#0E7490]", border: "border-[#A5F3FC]" },
  { bg: "bg-[#EFF6FF]", text: "text-[#1D4ED8]", icon: "bg-[#1D4ED8]", border: "border-[#BFDBFE]" },
  { bg: "bg-[#FAF5FF]", text: "text-[#7C3AED]", icon: "bg-[#7C3AED]", border: "border-[#DDD6FE]" },
  { bg: "bg-[#FFF1F2]", text: "text-[#BE123C]", icon: "bg-[#BE123C]", border: "border-[#FECDD3]" },
  { bg: "bg-[#F0FDFA]", text: "text-[#0F766E]", icon: "bg-[#0F766E]", border: "border-[#99F6E4]" },
  { bg: "bg-[#F8FAFC]", text: "text-[#334155]", icon: "bg-[#334155]", border: "border-[#CBD5E1]" },
  { bg: "bg-[#FFFBEB]", text: "text-[#B45309]", icon: "bg-[#B45309]", border: "border-[#FDE68A]" },
]

const services = [
  { title: "WES Evaluation Support", description: "100% to 25% of WES evaluation fees for credential assessment", emoji: "📄", slug: "wes-support", featured: true },
  { title: "GRE / ETS Fee Support", description: "Full or partial GRE testing fees for graduate school prep", emoji: "🎓", slug: "gre-support" },
  { title: "Application Fee Support", description: "University application fees across multiple institutions", emoji: "📚", slug: "application-fee-support" },
  { title: "Initial Deposit Support", description: "First enrollment deposit to secure your admission offer", emoji: "💳", slug: "initial-deposit-support" },
  { title: "English Test Fee Support", description: "IELTS, TOEFL, and Duolingo English test fees", emoji: "🗣️", slug: "english-test-support" },
  { title: "SEVIS Fee Support", description: "U.S. SEVIS immigration fee for your student visa", emoji: "🛂", slug: "sevis-fee-support", featured: true },
  { title: "Visa Application Fee Support", description: "Visa application costs to study in your destination", emoji: "✈️", slug: "visa-fee-support" },
  { title: "Tuition Fee Support", description: "Partial scholarship assistance to cover tuition costs", emoji: "💰", slug: "tuition-fee-support" },
  { title: "Transcript Evaluation Support", description: "Transcript verification and evaluation services", emoji: "📋", slug: "transcript-support" },
  { title: "College Board Fee Support", description: "SAT and related College Board services", emoji: "🏫", slug: "college-board-support" },
  { title: "Mentorship Program", description: "Personalized guidance from experienced scholars", emoji: "👥", slug: "mentorship-program", featured: true },
  { title: "Enrollment Deposit Support", description: "Confirming your admission and securing your spot", emoji: "🏛️", slug: "enrollment-deposit-support" },
]

export function ServiceGrid() {
  return (
    <section id="services" className="bg-[#FFFEF5] dark:bg-[#1D1D1F] py-20 lg:py-28 transition-colors">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="mb-4 inline-block rounded-full bg-[#1D4ED8]/10 px-5 py-2 text-sm font-semibold text-[#1D4ED8] dark:bg-[#1D4ED8]/20 dark:text-[#60A5FA]">
            OUR SERVICES
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl lg:text-5xl text-balance">
            Comprehensive Support for Your Journey
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
            Choose from our range of financial support services designed to help you achieve your dream of studying abroad.
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid auto-rows-[180px] gap-4 md:grid-cols-3 lg:grid-cols-4">
          {services.map((service, index) => {
            const color = colorWheel[index % colorWheel.length]
            const isFeatured = service.featured
            
            return (
              <Link
                key={service.slug}
                href={`/apply/${service.slug}`}
                className={`group relative flex flex-col justify-between overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${color.bg} ${color.border} dark:bg-opacity-20 dark:border-opacity-30 ${
                  isFeatured ? "md:col-span-2 md:row-span-2" : ""
                }`}
              >
                {/* Category Badge */}
                <div className="flex items-center justify-between">
                  <span className={`inline-flex items-center rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider ${color.bg} ${color.text} border ${color.border}`}>
                    {isFeatured ? "Featured" : "Service"}
                  </span>
                  <div className={`flex h-10 w-10 items-center justify-center rounded-2xl ${color.icon}`}>
                    <span className="text-lg">{service.emoji}</span>
                  </div>
                </div>

                {/* Content */}
                <div className="mt-auto">
                  <h3 className={`mb-2 font-bold leading-tight ${color.text} ${isFeatured ? "text-2xl" : "text-lg"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed text-gray-600 dark:text-gray-400 ${isFeatured ? "" : "line-clamp-2"}`}>
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <div className="absolute bottom-5 right-5 flex h-10 w-10 items-center justify-center rounded-full bg-white dark:bg-[#2D2D2F] shadow-md opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <ArrowRight className={`h-4 w-4 ${color.text}`} />
                </div>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
