"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const floatingCards = [
  {
    id: 1,
    title: "Financial Aid",
    subtitle: "WES & GRE Fee Support",
    position: "top-left",
    color: "bg-[#1E3A5F]",
    textColor: "text-white",
  },
  {
    id: 2,
    title: "Mentorship",
    subtitle: "Expert Guidance",
    position: "top-right",
    color: "bg-[#374151]",
    textColor: "text-white",
  },
  {
    id: 3,
    title: "Registration",
    subtitle: "Applications Open",
    position: "middle-right",
    color: "bg-[#F59E0B]",
    textColor: "text-white",
  },
  {
    id: 4,
    title: "Visa Support",
    subtitle: "SEVIS & Visa Fees",
    position: "bottom-left",
    color: "bg-white dark:bg-[#1D1D1F]",
    textColor: "text-gray-900 dark:text-white",
    border: true,
  },
]

export function Hero() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0C1220] min-h-screen flex flex-col items-center justify-center transition-colors">
      {/* Soft dot grid background */}
      <div
        className="absolute inset-0 opacity-20 dark:opacity-10"
        style={{
          backgroundImage: "radial-gradient(circle, #94A3B8 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Soft blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[1px]" />

      {/* Decorative soft circles */}
      <div className="absolute top-20 left-10 w-96 h-96 rounded-full bg-gray-200/50 dark:bg-gray-800/30 blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 rounded-full bg-gray-300/40 dark:bg-gray-700/20 blur-3xl" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 flex-1 flex items-center">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 w-full">
          
          {/* Left column - Image with Interactive Cards */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] animate-in fade-in slide-in-from-left-8 duration-700">
              {/* Main Hero Image - Student Photo */}
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/herosCPI-YUyb2u3mu01qcmSX0I59C0dmt5zXOr.png"
                  alt="Student ready to study abroad"
                  width={480}
                  height={580}
                  className="w-full h-auto object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Interactive Floating Cards */}
              {floatingCards.map((card, index) => {
                const positionClasses = {
                  "top-left": "-left-4 top-8 lg:-left-8",
                  "top-right": "-right-4 top-16 lg:-right-8",
                  "middle-right": "-right-6 top-[50%] lg:-right-12",
                  "bottom-left": "-left-2 bottom-24 lg:-left-6",
                }[card.position]

                return (
                  <div
                    key={card.id}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={`absolute z-20 ${positionClasses} w-[140px] lg:w-[160px] rounded-2xl ${card.color} p-4 shadow-xl cursor-pointer transition-all duration-300 animate-in fade-in duration-500 ${
                      card.border ? "border-2 border-gray-200 dark:border-white" : ""
                    } ${hoveredCard === card.id ? "scale-110 shadow-2xl -translate-y-1" : "hover:scale-105"} dark:hover:shadow-white/10`}
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <p className={`mb-1 text-[10px] font-semibold uppercase tracking-widest ${card.textColor} opacity-70`}>
                      {card.title}
                    </p>
                    <p className={`text-sm font-bold leading-tight ${card.textColor}`}>
                      {card.subtitle}
                    </p>
                    {hoveredCard === card.id && (
                      <div className="mt-2 flex items-center gap-1 text-[10px] font-medium opacity-80">
                        <span className={card.textColor}>Learn more</span>
                        <ArrowRight className={`h-3 w-3 ${card.textColor}`} />
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>

          {/* Right column - Text */}
          <div className="relative z-10 order-1 lg:order-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A5F] dark:text-gray-400 animate-in fade-in slide-in-from-right-4 duration-500">
              Creative Path Inspired &nbsp;|&nbsp; Study Abroad Support
            </p>

            <h1 className="mb-6 font-sans text-[2.8rem] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white sm:text-[3.5rem] lg:text-[4rem] text-balance animate-in fade-in slide-in-from-right-4 duration-500 delay-100">
              Time To<br />
              <span className="text-[#1E3A5F] dark:text-gray-300">Take Off</span><br />
              To Your Dream<br />
              <span className="relative inline-block">
                University
                <span className="absolute -bottom-1 left-0 h-2 w-full bg-[#F59E0B] -z-10 rounded-sm" />
              </span>
            </h1>

            <p className="mb-8 max-w-md text-base leading-relaxed text-gray-600 dark:text-gray-400 animate-in fade-in slide-in-from-right-4 duration-500 delay-200">
              Financial support, mentorship, and application guidance for scholars
              from Africa and around the world — covering 100% to 25% of your
              academic and immigration-related fees.
            </p>

            <div className="flex flex-wrap gap-4 animate-in fade-in slide-in-from-right-4 duration-500 delay-300">
              <Button
                size="lg"
                className="rounded-full bg-[#1E3A5F] px-8 text-white shadow-lg hover:bg-[#152C4A] transition-all h-12"
                asChild
              >
                <Link href="/services">
                  Explore Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all h-12"
                asChild
              >
                <Link href="/contact">Learn More</Link>
              </Button>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-10 animate-in fade-in slide-in-from-right-4 duration-500 delay-400">
              {[
                { value: "500+", label: "Students Helped" },
                { value: "25+", label: "Countries" },
                { value: "100%", label: "Dedication" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-3xl font-bold text-gray-900 dark:text-white">{stat.value}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
