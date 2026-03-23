"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-white dark:bg-black min-h-screen flex flex-col items-center justify-center transition-colors">
      {/* Blurred patterned background */}
      <div className="absolute inset-0 opacity-50 dark:opacity-30">
        <div
          className="absolute inset-0 blur-3xl"
          style={{
            backgroundImage: "radial-gradient(circle, #e0e0e0 0.5px, transparent 0.5px), radial-gradient(circle, #d0d0d0 0.5px, transparent 0.5px)",
            backgroundSize: "50px 50px, 80px 80px",
            backgroundPosition: "0 0, 25px 25px",
          }}
        />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 py-12 lg:px-8 flex-1 flex items-center">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16 w-full">
          
          {/* Left column - Image */}
          <div className="relative flex justify-center order-2 lg:order-1">
            <div className="relative w-full max-w-[480px] animate-in fade-in slide-in-from-left-8 duration-700">
              <div className="relative w-full aspect-[6/7]">
                <Image
                  src="/images/hero-student.png"
                  alt="Student ready to study abroad"
                  fill
                  className="object-contain drop-shadow-2xl"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 480px"
                />
              </div>

              {/* Interactive floating tile - top left */}
              <div className="absolute -left-4 top-4 z-20 w-[160px] rounded-3xl bg-black dark:bg-white p-5 shadow-2xl animate-in fade-in slide-in-from-left-4 duration-500 delay-200 hover:shadow-xl hover:scale-105 transition-all cursor-pointer group">
                <div className="absolute inset-0 rounded-3xl bg-black dark:bg-white opacity-0 group-hover:opacity-5 transition-all" />
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white dark:text-black/70">
                  Financial Aid
                </p>
                <p className="text-base font-bold leading-tight text-white dark:text-black">
                  WES & GRE<br />Fee Support
                </p>
              </div>

              {/* Interactive floating tile - top right */}
              <div className="absolute -right-4 top-8 z-20 w-[140px] rounded-3xl bg-gray-800 dark:bg-gray-200 p-5 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500 delay-300 hover:shadow-xl hover:scale-105 transition-all cursor-pointer group">
                <div className="absolute inset-0 rounded-3xl bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-all" />
                <p className="mb-1 text-[10px] font-semibold uppercase tracking-widest text-white dark:text-gray-800">
                  Mentorship
                </p>
                <p className="text-base font-bold leading-tight text-white dark:text-gray-800">
                  Expert<br />Guidance
                </p>
              </div>

              {/* Interactive floating tile - right middle */}
              <div className="absolute -right-8 top-[45%] z-20 w-[130px] rounded-3xl bg-gray-600 dark:bg-gray-300 p-4 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500 delay-400 hover:shadow-xl hover:scale-105 transition-all cursor-pointer group">
                <div className="absolute inset-0 rounded-3xl bg-white dark:bg-black opacity-0 group-hover:opacity-10 transition-all" />
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-white dark:text-gray-700">
                  Registration
                </p>
                <p className="text-sm font-bold leading-tight text-white dark:text-gray-700">
                  Applications<br />Still Open
                </p>
              </div>

              {/* Interactive floating tile - bottom left */}
              <div className="absolute -left-2 bottom-24 z-20 w-[150px] rounded-3xl bg-white dark:bg-black border border-black dark:border-white p-4 shadow-2xl animate-in fade-in slide-in-from-left-4 duration-500 delay-500 hover:shadow-xl hover:scale-105 transition-all cursor-pointer group">
                <div className="absolute inset-0 rounded-3xl bg-black dark:bg-white opacity-0 group-hover:opacity-5 transition-all" />
                <p className="mb-1 text-[9px] font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-400">
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
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 animate-in fade-in slide-in-from-right-4 duration-500">
              Creative Path Inspired &nbsp;|&nbsp; Study Abroad Support
            </p>

            <h1 className="mb-6 font-sans text-[2.8rem] font-bold leading-[1.05] tracking-tight text-black dark:text-white sm:text-[3.5rem] lg:text-[4rem] text-balance animate-in fade-in slide-in-from-right-4 duration-500 delay-100">
              Time To<br />
              <span className="text-gray-500 dark:text-gray-300">Take Off</span><br />
              To Your Dream<br />
              <span className="relative inline-block">
                University
                <span className="absolute -bottom-1 left-0 h-2 w-full bg-black dark:bg-white -z-10 rounded-sm" />
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
                className="rounded-full bg-black dark:bg-white px-8 text-white dark:text-black shadow-lg hover:opacity-90 transition-all h-12"
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
                  <p className="text-3xl font-bold text-black dark:text-white">{stat.value}</p>
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
