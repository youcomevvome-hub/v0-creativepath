"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F5F5F7] dark:bg-[#1D1D1F] min-h-[92vh] flex items-center transition-colors">
      {/* Blurred dot grid background */}
      <div
        className="absolute inset-0 opacity-40 dark:opacity-20 blur-[1px]"
        style={{
          backgroundImage: "radial-gradient(circle, #1D4ED8 1.5px, transparent 1.5px)",
          backgroundSize: "32px 32px",
        }}
      />
      
      {/* Additional blur overlay */}
      <div className="absolute inset-0 backdrop-blur-[0.5px]" />

      <div className="relative mx-auto w-full max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12">
          
          {/* Left column - Image */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] animate-in fade-in slide-in-from-left-8 duration-700">
              {/* Student photo */}
              <Image
                src="/images/hero-student.png"
                alt="Student ready to study abroad"
                width={480}
                height={580}
                className="relative z-10 w-full object-contain drop-shadow-2xl"
                priority
              />

              {/* Floating tile - top left (blue) */}
              <div className="absolute -left-4 top-4 z-20 w-[160px] rounded-3xl bg-[#2563EB] p-5 shadow-2xl animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/70">
                  Financial Aid
                </p>
                <p className="text-base font-bold leading-tight text-white">
                  WES & GRE<br />Fee Support
                </p>
                <ul className="mt-3 space-y-1">
                  {["100% fee waiver", "50% partial waiver", "Application fees"].map((item) => (
                    <li key={item} className="flex items-center gap-1.5 text-[9px] text-white/80">
                      <span className="h-1 w-1 rounded-full bg-[#B7F34B]" /> {item}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Floating tile - top right (magenta) */}
              <div className="absolute -right-4 top-8 z-20 w-[140px] rounded-3xl bg-[#DB2777] p-5 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500 delay-300">
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white/70">
                  Mentorship
                </p>
                <p className="text-base font-bold leading-tight text-white">
                  Expert<br />Guidance
                </p>
              </div>

              {/* Floating tile - right middle (yellow) */}
              <div className="absolute -right-8 top-[45%] z-20 w-[130px] rounded-3xl bg-[#FACC15] p-4 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500 delay-400">
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-black/60">
                  Registration
                </p>
                <p className="text-sm font-bold leading-tight text-black">
                  Applications<br />Still Open
                </p>
              </div>

              {/* Floating tile - bottom left (white) */}
              <div className="absolute -left-2 bottom-24 z-20 w-[150px] rounded-3xl bg-white dark:bg-[#2D2D2F] p-4 shadow-2xl animate-in fade-in slide-in-from-left-4 duration-500 delay-500">
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-gray-500">
                  Visa Support
                </p>
                <p className="text-sm font-bold leading-tight text-gray-900 dark:text-white">
                  SEVIS &<br />Visa Fees
                </p>
              </div>
            </div>
          </div>

          {/* Right column - Text */}
          <div className="relative z-10 order-1 lg:order-2">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-[#2563EB] animate-in fade-in slide-in-from-right-4 duration-500">
              Creative Path Inspired &nbsp;|&nbsp; Study Abroad Support
            </p>

            <h1 className="mb-6 font-sans text-[2.8rem] font-bold leading-[1.05] tracking-tight text-gray-900 dark:text-white sm:text-[3.5rem] lg:text-[4rem] text-balance animate-in fade-in slide-in-from-right-4 duration-500 delay-100">
              Time To<br />
              <span className="text-[#2563EB]">Take Off</span><br />
              To Your Dream<br />
              <span className="relative inline-block">
                University
                <span className="absolute -bottom-1 left-0 h-2 w-full bg-[#B7F34B] -z-10 rounded-sm" />
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
                className="rounded-full bg-[#1D1D1F] dark:bg-white px-8 text-white dark:text-[#1D1D1F] shadow-lg hover:opacity-90 transition-all h-12"
                asChild
              >
                <Link href="#services">
                  Apply for Support
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-gray-300 dark:border-gray-600 px-8 text-gray-900 dark:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all h-12"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
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
                  <p className="text-sm text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom ticker */}
        <div className="absolute bottom-8 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#2563EB] px-6 py-3 shadow-xl animate-in fade-in zoom-in duration-500 delay-600">
          <p className="whitespace-nowrap text-sm font-medium text-white">
            Start Before Doubt Returns &nbsp;·&nbsp;
            <span className="text-[#B7F34B] font-semibold">Apply Today</span>
          </p>
        </div>
      </div>
    </section>
  )
}
