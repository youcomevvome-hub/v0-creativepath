"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#EDF0F7] min-h-[88vh] flex items-center">
      {/* Subtle dot grid background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{
          backgroundImage: "radial-gradient(circle, #1F2937 1px, transparent 1px)",
          backgroundSize: "28px 28px",
        }}
      />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 lg:px-8">
        <div className="grid items-end gap-0 lg:grid-cols-2">

          {/* ── Left column ──────────────────────────────── */}
          <div className="relative z-10 pb-8 lg:pb-16">

            {/* Overline */}
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.25em] text-[#2563EB]">
              Creative Path Inspired &nbsp;|&nbsp; Study Abroad Support
            </p>

            {/* Main headline — bold editorial like Essence Academy flyer */}
            <h1 className="mb-6 font-sans text-[3.2rem] font-black uppercase leading-[0.95] tracking-tight text-[#1F2937] md:text-[4.5rem] lg:text-[5.2rem] text-balance">
              Time To<br />
              <span className="text-[#2563EB]">Take Off</span><br />
              To Your<br />
              Dream<br />
              <span className="relative inline-block">
                University
                {/* Yellow underline accent */}
                <span className="absolute -bottom-2 left-0 h-3 w-full bg-[#B7F34B] -z-10" />
              </span>
            </h1>

            <p className="mb-8 max-w-md text-base leading-relaxed text-gray-600">
              Financial support, mentorship, and application guidance for scholars
              from Africa and around the world — covering 100% to 25% of your
              academic and immigration-related fees.
            </p>

            {/* CTA row */}
            <div className="flex flex-wrap gap-3">
              <Button
                size="lg"
                className="rounded-full bg-[#1F2937] px-8 text-white shadow-lg hover:bg-[#1F2937]/90 hover:shadow-xl transition-all"
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
                className="rounded-full border-2 border-[#1F2937] px-8 text-[#1F2937] hover:bg-[#1F2937] hover:text-white transition-all"
                asChild
              >
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>

            {/* Stats bar */}
            <div className="mt-10 flex gap-8">
              {[
                { value: "500+", label: "Students Helped" },
                { value: "25+",  label: "Countries" },
                { value: "100%", label: "Dedication" },
              ].map((stat) => (
                <div key={stat.label}>
                  <p className="text-2xl font-black text-[#1F2937]">{stat.value}</p>
                  <p className="text-xs text-gray-500">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right column — photo + floating tiles ──── */}
          <div className="relative flex justify-center lg:justify-end">

            {/* Student photo — no background, full cutout */}
            <div className="relative z-10 w-[340px] md:w-[420px] lg:w-[500px]">
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
            <div className="absolute left-2 top-8 z-20 w-[170px] rounded-2xl bg-[#2563EB] p-4 shadow-2xl">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
                Financial Aid
              </p>
              <p className="text-lg font-black uppercase leading-tight text-white">
                WES &amp; GRE<br />Fee Support
              </p>
              <ul className="mt-2 space-y-1">
                {["100% fee waiver", "50% partial waiver", "GRE / ETS fees", "Application fees"].map((item) => (
                  <li key={item} className="flex items-start gap-1 text-[10px] text-white/80">
                    <span className="mt-0.5 text-[#B7F34B]">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Floating tile — top right (magenta/pink) */}
            <div className="absolute right-0 top-6 z-20 w-[150px] rounded-2xl bg-[#E8185C] p-4 shadow-2xl">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-white/70">
                Mentorship
              </p>
              <p className="text-lg font-black uppercase leading-tight text-white">
                Expert<br />Guidance
              </p>
            </div>

            {/* Floating tile — right middle (yellow) */}
            <div className="absolute right-0 top-[200px] z-20 w-[150px] rounded-2xl bg-[#B7F34B] p-4 shadow-2xl">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-[#1F2937]/60">
                Registration
              </p>
              <p className="text-base font-black uppercase leading-tight text-[#1F2937]">
                Applications
              </p>
              <p className="mt-1 text-[10px] font-semibold text-[#1F2937]">Still Open</p>
            </div>

            {/* Floating tile — bottom left (white) */}
            <div className="absolute bottom-20 left-0 z-20 w-[160px] rounded-2xl bg-white p-4 shadow-2xl">
              <p className="mb-1 text-[10px] font-bold uppercase tracking-widest text-gray-400">
                Visa Support
              </p>
              <p className="text-base font-black uppercase leading-tight text-[#1F2937]">
                SEVIS &amp;<br />Visa Fees
              </p>
              <ul className="mt-2 space-y-1">
                {["SEVIS fee coverage", "Visa application aid"].map((item) => (
                  <li key={item} className="flex items-start gap-1 text-[10px] text-gray-500">
                    <span className="text-[#2563EB]">•</span> {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Bottom ticker badge */}
            <div className="absolute -bottom-4 left-1/2 z-20 -translate-x-1/2 rounded-full bg-[#1F2937] px-6 py-3 shadow-xl">
              <p className="whitespace-nowrap text-sm font-semibold text-white">
                Start Before Doubt Returns &nbsp;·&nbsp;
                <span className="text-[#B7F34B]">Apply Today</span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
