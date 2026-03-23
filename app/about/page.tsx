import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Heart, Users, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    tags: ["Beginner", "Basics"],
    title: "Getting\nStarted",
    description: "New to studying abroad? Start here with foundational support.",
    color: "bg-[#2563EB]",
    textLight: true,
    featured: true,
  },
  {
    title: "Scholar\nSquad",
    description: "Join ambitious students pursuing dreams.",
    color: "bg-[#F5F5F7] dark:bg-[#2D2D2F]",
  },
  {
    title: "MVP\nGrind",
    description: "Intensive support for high-achievers.",
    color: "bg-[#FACC15]",
  },
]

const initiatives = [
  { number: "01", title: "WES Fee Support", description: "Full credential evaluation coverage for academic transcripts", expanded: false },
  { number: "02", title: "GRE/TOEFL Support", description: "Testing fee assistance for standardized exams required by universities worldwide.", expanded: true },
  { number: "03", title: "Visa Support", description: "SEVIS and visa application fee assistance", expanded: false },
  { number: "04", title: "Mentorship Program", description: "One-on-one guidance from experienced scholars", expanded: false },
]

const stats = [
  { value: "500+", label: "Students Supported" },
  { value: "25+", label: "Countries Reached" },
  { value: "$2M+", label: "Fees Covered" },
  { value: "98%", label: "Success Rate" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] transition-colors">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-[#1D1D1F] py-24 lg:py-32">
          <div
            className="absolute inset-0 opacity-20 blur-[1px]"
            style={{
              backgroundImage: "radial-gradient(circle, #B7F34B 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#B7F34B] animate-in fade-in slide-in-from-left-4 duration-500">
              About Us
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl text-balance animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
              A Global Community<br />
              <span className="text-[#B7F34B]">Helping Students</span><br />
              Reach New Heights
            </h1>
            <p className="max-w-2xl text-lg text-white/70 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
              We are a network of scholars, professionals, and educators from around the world 
              united by a single mission: making quality education accessible to talented students 
              from underrepresented regions.
            </p>
          </div>
        </section>

        {/* Programs Section - IMG_1338 style */}
        <section className="py-20 lg:py-28">
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
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className={`relative overflow-hidden rounded-3xl ${program.color} p-6 transition-all hover:-translate-y-1 hover:shadow-xl ${
                      program.featured ? "sm:col-span-2 sm:row-span-2" : ""
                    }`}
                  >
                    {program.tags && (
                      <div className="mb-4 flex gap-2">
                        {program.tags.map((tag) => (
                          <span key={tag} className="rounded-full bg-white/20 px-3 py-1 text-[10px] font-semibold text-white">
                            {tag}
                          </span>
                        ))}
                      </div>
                    )}
                    <h3 className={`whitespace-pre-line font-bold leading-tight ${
                      program.textLight ? "text-white" : "text-gray-900 dark:text-white"
                    } ${program.featured ? "text-3xl" : "text-xl"}`}>
                      {program.title}
                    </h3>
                    <p className={`mt-2 text-sm ${program.textLight ? "text-white/80" : "text-gray-600 dark:text-gray-400"}`}>
                      {program.description}
                    </p>
                    <button className={`absolute bottom-4 right-4 flex h-10 w-10 items-center justify-center rounded-full ${
                      program.textLight ? "bg-white/20" : "bg-black/10 dark:bg-white/20"
                    } backdrop-blur-sm transition-transform hover:scale-110`}>
                      <ArrowRight className={`h-4 w-4 ${program.textLight ? "text-white" : "text-gray-900 dark:text-white"}`} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives Section - IMG_1338 accordion style */}
        <section className="py-20 lg:py-28 bg-white dark:bg-[#1D1D1F] transition-colors">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 flex items-center gap-4">
              <span className="inline-block rounded-full border border-gray-300 dark:border-gray-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-400">
                03 &nbsp; Initiatives
              </span>
            </div>

            <div className="grid gap-12 lg:grid-cols-2">
              <div>
                <h2 className="mb-4 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
                  Our Key<br />Initiatives &<br />Programs
                </h2>
                <p className="text-gray-600 dark:text-gray-400">
                  We provide comprehensive support across every stage of your study abroad journey.
                </p>
                <Button className="mt-6 rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] px-6 hover:opacity-90" asChild>
                  <Link href="/#services">
                    Join us <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {initiatives.map((item) => (
                  <div
                    key={item.number}
                    className={`rounded-2xl border border-gray-200 dark:border-gray-800 p-5 transition-all ${
                      item.expanded ? "bg-gray-50 dark:bg-[#2D2D2F]" : "bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-[#2D2D2F]"
                    }`}
                  >
                    <div className="flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-400">{item.number}</span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${item.expanded ? "rotate-90" : ""}`} />
                    </div>
                    {item.expanded && (
                      <div className="mt-4">
                        <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                        <Button variant="outline" className="rounded-full text-sm">
                          View Details
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section - Calmerry/Apple style */}
        <section className="py-20 lg:py-28 bg-[#E0F2FE] dark:bg-[#0C4A6E] transition-colors">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mb-12 text-center">
              <h2 className="text-3xl font-bold text-[#0C4A6E] dark:text-white md:text-4xl">
                Fueling academic growth<br />through collective support
              </h2>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat) => (
                <div key={stat.label} className="rounded-3xl bg-white/80 dark:bg-white/10 backdrop-blur-sm p-8 text-center transition-all hover:-translate-y-1 hover:shadow-xl">
                  <p className="text-4xl font-bold text-[#0369A1] dark:text-[#7DD3FC]">{stat.value}</p>
                  <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-20 lg:py-28 bg-white dark:bg-[#1D1D1F] transition-colors">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-3">
              {[
                { icon: Globe, title: "Global Reach", description: "Supporting students from over 25 countries across Africa and beyond.", color: "bg-[#2563EB]" },
                { icon: Heart, title: "Dedicated Support", description: "Our volunteers dedicate their time to mentoring and guiding students.", color: "bg-[#DB2777]" },
                { icon: Users, title: "Community Driven", description: "Built by scholars, for scholars. We understand your journey.", color: "bg-[#059669]" },
              ].map((value) => (
                <div key={value.title} className="text-center group">
                  <div className={`mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-2xl ${value.color} transition-transform group-hover:scale-110`}>
                    <value.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{value.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#1D1D1F] py-16">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Join hundreds of scholars who have achieved their dreams with our support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full bg-white text-[#1D1D1F] hover:bg-gray-100 px-8 h-12" asChild>
                <Link href="/apply/wes-support">
                  Apply Now <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 px-8 h-12" asChild>
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
