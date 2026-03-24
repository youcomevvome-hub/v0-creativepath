"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029Vb7zSwH6LwHqQBzAxM0A"

const floatingCards = [
  {
    id: 1,
    title: "Financial Aid",
    subtitle: "WES & GRE Fee Support",
    position: "top-left",
    color: "bg-[#1E3A5F]",
    textColor: "text-white",
    href: "/#services",
  },
  {
    id: 2,
    title: "Mentorship",
    subtitle: "Expert Guidance",
    position: "top-right",
    color: "bg-[#374151]",
    textColor: "text-white",
    href: "/contact#mentor",
  },
  {
    id: 3,
    title: "Registration",
    subtitle: "Applications Open",
    position: "middle-right",
    color: "bg-[#F59E0B]",
    textColor: "text-white",
    href: "/services",
  },
  {
    id: 4,
    title: "Visa Support",
    subtitle: "SEVIS & Visa Fees",
    position: "bottom-left",
    color: "bg-white dark:bg-[#1D2A3A]",
    textColor: "text-gray-900 dark:text-white",
    border: true,
    href: "/services/visa-sevis",
  },
]

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
  )
}

export function Hero() {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null)

  return (
    <section className="relative overflow-hidden bg-white dark:bg-[#0C1220] min-h-screen flex flex-col items-center justify-center transition-colors">
      {/* Soft dot grid background */}
      <div
        className="absolute inset-0 opacity-[0.15] dark:opacity-[0.08]"
        style={{
          backgroundImage: "radial-gradient(circle, #94A3B8 1px, transparent 1px)",
          backgroundSize: "36px 36px",
        }}
      />

      {/* Soft blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      {/* Decorative soft shapes */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-gray-100 dark:bg-[#1E3A5F]/10 blur-[80px] opacity-60 dark:opacity-40 pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] rounded-full bg-gray-100 dark:bg-[#1E3A5F]/10 blur-[80px] opacity-60 dark:opacity-40 pointer-events-none" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 flex-1 flex items-center">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 w-full">

          {/* Left column - Image with Interactive Cards */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[460px] animate-in fade-in slide-in-from-left-8 duration-700">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/herosCPI-YUyb2u3mu01qcmSX0I59C0dmt5zXOr.png"
                alt="Student ready to study abroad"
                width={460}
                height={560}
                className="w-full h-auto object-contain"
                priority
              />

              {/* Interactive Floating Cards */}
              {floatingCards.map((card, index) => {
                const positionClasses: Record<string, string> = {
                  "top-left": "-left-6 top-6 lg:-left-10",
                  "top-right": "-right-6 top-14 lg:-right-10",
                  "middle-right": "-right-4 top-[48%] lg:-right-8",
                  "bottom-left": "-left-4 bottom-20 lg:-left-8",
                }

                return (
                  <Link
                    key={card.id}
                    href={card.href}
                    onMouseEnter={() => setHoveredCard(card.id)}
                    onMouseLeave={() => setHoveredCard(null)}
                    className={[
                      "absolute z-20",
                      positionClasses[card.position],
                      "w-[140px] lg:w-[158px] rounded-2xl",
                      card.color,
                      "p-4 shadow-xl cursor-pointer transition-all duration-300 animate-in fade-in duration-500",
                      card.border ? "border-2 border-gray-200 dark:border-white/30" : "",
                      hoveredCard === card.id
                        ? "scale-110 shadow-2xl dark:shadow-white/10 -translate-y-1"
                        : "hover:scale-105",
                    ].join(" ")}
                    style={{ animationDelay: `${(index + 2) * 100}ms` }}
                  >
                    <p className={`mb-1 text-[10px] font-semibold uppercase tracking-widest ${card.textColor} opacity-70`}>
                      {card.title}
                    </p>
                    <p className={`text-sm font-bold leading-tight ${card.textColor}`}>
                      {card.subtitle}
                    </p>
                    {hoveredCard === card.id && (
                      <div className="mt-2 flex items-center gap-1">
                        <span className={`text-[10px] font-medium ${card.textColor} opacity-80`}>Learn more</span>
                        <ArrowRight className={`h-3 w-3 ${card.textColor} opacity-80`} />
                      </div>
                    )}
                  </Link>
                )
              })}
            </div>
          </div>

          {/* Right column - Text */}
          <div className="relative z-10 order-1 lg:order-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#1E3A5F] dark:text-[#F59E0B] animate-in fade-in slide-in-from-right-4 duration-500">
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
              from Africa and around the world covering 100% to 25% of your
              academic and immigration-related fees.
            </p>

            <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-right-4 duration-500 delay-300">
              <Button
                size="lg"
                className="rounded-full bg-[#1E3A5F] px-7 text-white shadow-lg hover:bg-[#152C4A] transition-all h-12"
                asChild
              >
                <Link href="/services">
                  Get Started
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-gray-300 dark:border-gray-600 px-7 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all h-12"
                asChild
              >
                <Link href="/contact">Learn More</Link>
              </Button>
              <a
                href={WHATSAPP_CHANNEL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border-2 border-[#25D366] px-5 h-12 text-sm font-semibold text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200"
                aria-label="Join our WhatsApp channel"
              >
                <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                <span className="hidden sm:inline">Join Channel</span>
              </a>
            </div>

            {/* Stats */}
            <div className="mt-12 flex gap-8 animate-in fade-in slide-in-from-right-4 duration-500 delay-400">
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
