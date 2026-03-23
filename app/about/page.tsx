import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Target, Heart, Globe, Lightbulb } from "lucide-react"

const values = [
  {
    icon: Target,
    title: "Mission-Driven",
    description: "Every service we offer is designed with one goal: removing financial barriers from your path to a world-class education.",
    color: "#DBEAFE",
    iconColor: "#2563EB",
  },
  {
    icon: Heart,
    title: "Community First",
    description: "We believe in the transformative power of community. Our scholars lift each other through mentorship, networking, and shared wisdom.",
    color: "#FFE4E6",
    iconColor: "#E11D48",
  },
  {
    icon: Globe,
    title: "Globally Connected",
    description: "From Nigeria to Kenya, Ghana to Cameroon — we support students across Africa and beyond in reaching universities worldwide.",
    color: "#CCFBF1",
    iconColor: "#0D9488",
  },
  {
    icon: Lightbulb,
    title: "Results-Oriented",
    description: "We track outcomes. Over 500 students have accessed universities in the US, UK, Canada, and Europe through our support.",
    color: "#ECFCCB",
    iconColor: "#65A30D",
  },
]

const team = [
  { name: "Dr. Victoria Emmanuel", role: "Founder & Executive Director", initial: "VE", color: "#2563EB" },
  { name: "Kweku Asante",          role: "Head of Mentorship",          initial: "KA", color: "#0D9488" },
  { name: "Amina Bello",           role: "Financial Aid Coordinator",   initial: "AB", color: "#9333EA" },
  { name: "Chidi Okafor",          role: "Student Liaison Officer",     initial: "CO", color: "#E11D48" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Navbar />
      <main>

        {/* ── Hero ───────────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#1F2937] py-20 lg:py-28">
          {/* dot grid */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #B7F34B 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#B7F34B]">
              About Us
            </p>
            <h1 className="mb-6 text-4xl font-black uppercase leading-tight text-white md:text-6xl text-balance">
              We Open Doors<br />
              <span className="text-[#B7F34B]">Others Keep Closed</span>
            </h1>
            <p className="max-w-2xl text-lg leading-relaxed text-white/70">
              Creative Path Inspired was founded by scholars who lived the struggle of financing
              international education. We exist to ensure no student loses their opportunity
              because of a credential evaluation fee, a visa cost, or a SEVIS charge.
            </p>
          </div>
        </section>

        {/* ── Story ─────────────────────────────────── */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid items-center gap-12 lg:grid-cols-2">
              <div>
                <span className="mb-4 inline-block rounded-full bg-[#DBEAFE] px-4 py-2 text-sm font-semibold text-[#1D4ED8]">
                  OUR STORY
                </span>
                <h2 className="mb-6 text-3xl font-bold text-[#1F2937] md:text-4xl text-balance">
                  Born from Personal Experience
                </h2>
                <div className="space-y-4 text-[#4B5563] leading-relaxed">
                  <p>
                    Creative Path Inspired was founded after our founder, a first-generation
                    university graduate from West Africa, almost lost her opportunity to attend
                    a top U.S. graduate program because of a $250 WES credential evaluation fee.
                  </p>
                  <p>
                    That experience became the foundation of everything we do today. We gathered
                    a team of mentors, scholarship recipients, and finance professionals who
                    believe in paying it forward.
                  </p>
                  <p>
                    Today, we support students across Africa and the developing world with
                    financial waivers, mentorship, and guided application support — so they
                    can focus on what matters: getting accepted.
                  </p>
                </div>
              </div>

              {/* Stat tiles */}
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: "500+", label: "Students Supported", bg: "#DBEAFE", color: "#2563EB" },
                  { value: "25+",  label: "Countries Reached",  bg: "#CCFBF1", color: "#0D9488" },
                  { value: "12",   label: "Support Services",   bg: "#ECFCCB", color: "#65A30D" },
                  { value: "$0",   label: "Cost to Apply",      bg: "#FFE4E6", color: "#E11D48" },
                ].map((stat) => (
                  <div
                    key={stat.label}
                    className="flex flex-col items-center justify-center rounded-3xl p-8 text-center shadow-md"
                    style={{ backgroundColor: stat.bg }}
                  >
                    <p className="text-4xl font-black" style={{ color: stat.color }}>{stat.value}</p>
                    <p className="mt-2 text-sm font-medium text-[#374151]">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ── Values ────────────────────────────────── */}
        <section className="bg-white py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-[#ECFCCB] px-4 py-2 text-sm font-semibold text-[#65A30D]">
                OUR VALUES
              </span>
              <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl text-balance">
                What We Stand For
              </h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-3xl p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: v.color }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: v.iconColor }}
                  >
                    <v.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-[#1F2937]">{v.title}</h3>
                  <p className="text-sm leading-relaxed text-[#4B5563]">{v.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Team ──────────────────────────────────── */}
        <section className="py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="mb-12 text-center">
              <span className="mb-4 inline-block rounded-full bg-[#F3E8FF] px-4 py-2 text-sm font-semibold text-[#9333EA]">
                THE TEAM
              </span>
              <h2 className="text-3xl font-bold text-[#1F2937] md:text-4xl">Meet the People Behind the Mission</h2>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
              {team.map((member) => (
                <div key={member.name} className="rounded-3xl bg-white p-6 text-center shadow-md hover:shadow-xl transition-all hover:-translate-y-1">
                  <div
                    className="mx-auto mb-4 flex h-20 w-20 items-center justify-center rounded-full text-2xl font-black text-white"
                    style={{ backgroundColor: member.color }}
                  >
                    {member.initial}
                  </div>
                  <p className="font-bold text-[#1F2937]">{member.name}</p>
                  <p className="mt-1 text-sm text-[#6B7280]">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── CTA ───────────────────────────────────── */}
        <section className="bg-[#1F2937] py-16">
          <div className="mx-auto max-w-3xl px-4 text-center lg:px-8">
            <h2 className="mb-4 text-3xl font-black uppercase text-white md:text-4xl text-balance">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-white/70">
              Browse our services and apply for the support that matches your needs today.
            </p>
            <Link
              href="/#services"
              className="inline-flex items-center gap-2 rounded-full bg-[#B7F34B] px-8 py-3 font-bold text-[#1F2937] transition-all hover:bg-[#c9f96a] hover:shadow-lg"
            >
              Explore Services <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
