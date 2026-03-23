"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary dark:bg-background min-h-[88vh] flex items-center transition-colors">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-30 dark:opacity-20"
        style={{
          backgroundImage: "radial-gradient(circle, currentColor 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid items-end gap-0 lg:grid-cols-2">

          {/* Left column */}
          <div className="relative z-10 pb-8 lg:pb-16">

            {/* Overline */}
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-scholarship animate-in fade-in slide-in-from-left-4 duration-500">
              Creative Path Inspired &nbsp;|&nbsp; Study Abroad Support
            </p>

            {/* Main headline */}
            <h1 className="mb-6 font-sans text-[3.2rem] font-black uppercase leading-[0.95] tracking-tight text-foreground md:text-[4.5rem] lg:text-[5.2rem] text-balance animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
              Time To<br />
              <span className="text-scholarship">Take Off</span><br />
              To Your<br />
              Dream<br />
              <span className="relative inline-block">
                University
                <span className="absolute -bottom-2 left-0 h-3 w-full bg-highlight -z-10" />
              </span>
            </h1>

            <p className="mb-8 max-w-md text-base leading-relaxed text-muted-foreground animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
              Financial support, mentorship, and application guidance for scholars
              from Africa and around the world — covering 100% to 25% of your
              academic and immigration-related fees.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3 animate-in fade-in slide-in-from-left-4 duration-500 delay-300">
              <Button
                size="lg"
                className="rounded-full bg-primary px-8 text-primary-foreground shadow-lg hover:opacity-90 hover:shadow-xl transition-all"
                asChild
              >
                <Link href="#services">
                  Apply for Support
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="rounded-full border-2 border-primary px-8 text-primary hover:bg-primary hover:text-primary-foreground transition-all"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Stats bar */}
            <div className="mt-10 flex gap-8 animate-in fade-in slide-in-from-left-4 duration-500 delay-400">
              {[
                { value: "500+", label: "Students Helped" },
                { value: "25+", label: "Countries" },
                { value: "100%", label: "Dedication" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — photo + floating tiles */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Student photo */}
            <div className="relative z-10 w-[340px] md:w-[420px] lg:w-[500px] animate-in fade-in slide-in-from-right-8 duration-700">
              <Image
                src="/images/hero-student.png"
                alt="Student ready to study abroad"
                width={500}
                height={600}
                className="w-full object-contain drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating tile — top left (blue) */}
            <div className="absolute left-2 top-8 z-20 w-[170px] rounded-2xl bg-scholarship p-4 shadow-2xl animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
                Financial Aid
              </p>
              <p className="text-lg font-black uppercase leading-tight text-white">
                WES &amp; GRE<br />Fee Support
              </p>
              <ul className="mt-2 space-y-1">
                {["100% fee waiver", "50% partial waiver", "GRE / ETS fees", "Application fees"].map((item) => (
                  <li key={item} className="flex items-start gap-1 text-[10px] text-white/80">
                    <span className="mt-0.5 text-highlight">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating tile — top right (magenta/pink) */}
            <div className="absolute right-0 top-6 z-20 w-[150px] rounded-2xl bg-[#E8185C] p-4 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500 delay-300">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
                Mentorship
              </p>
              <p className="text-lg font-black uppercase leading-tight text-white">
                Expert<br />Guidance
              </p>
            </div>

            {/* Floating tile — right middle (yellow) */}
            <div className="absolute right-0 top-[200px] z-20 w-[150px] rounded-2xl bg-highlight p-4 shadow-2xl animate-in fade-in slide-in-from-right-4 duration-500 delay-400">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-accent-foreground/60">
                Registration
              </p>
              <p className="text-base font-black uppercase leading-tight text-accent-foreground">
                Applications
              </p>
              <p className="mt-1 text-[10px] font-semibold text-accent-foreground">Still Open</p>
            </div>

            {/* Floating tile — bottom left (white/card) */}
            <div className="absolute bottom-20 left-0 z-20 w-[160px] rounded-2xl bg-card p-4 shadow-2xl animate-in fade-in slide-in-from-left-4 duration-500 delay-500">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-muted-foreground">
                Visa Support
              </p>
              <p className="text-base font-black uppercase leading-tight text-foreground">
                SEVIS &amp;<br />Visa Fees
              </p>
              <ul className="mt-2 space-y-1">
                {["SEVIS fee coverage", "Visa application aid"].map((item) => (
                  <li key={item} className="flex items-start gap-1 text-[10px] text-muted-foreground">
                    <span className="text-scholarship">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom ticker badge */}
            <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-primary px-6 py-3 shadow-xl animate-in fade-in zoom-in duration-500 delay-600">
              <p className="whitespace-nowrap text-sm font-semibold text-primary-foreground">
                Start Before Doubt Returns &nbsp;·&nbsp;
                <span className="text-highlight">Apply Today</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
