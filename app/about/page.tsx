import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Globe, Heart, Users, ChevronRight, CheckCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const programs = [
  {
    title: "Getting Started",
    description: "New to studying abroad? Start here with foundational support.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    featured: true,
  },
  {
    title: "Scholar Squad",
    description: "Join ambitious students pursuing dreams.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    title: "MVP Grind",
    description: "Intensive support for high-achievers.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
]

const initiatives = [
  { number: "01", title: "WES Fee Support", description: "Full credential evaluation coverage for academic transcripts", expanded: false },
  { number: "02", title: "GRE/TOEFL Support", description: "Testing fee assistance for standardized exams required by universities worldwide.", expanded: true, image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=400" },
  { number: "03", title: "Visa Support", description: "SEVIS and visa application fee assistance", expanded: false },
  { number: "04", title: "Mentorship Program", description: "One-on-one guidance from experienced scholars", expanded: false },
]

const stats = [
  { value: "500+", label: "Students Supported" },
  { value: "25+", label: "Countries Reached" },
  { value: "$2M+", label: "Fees Covered" },
  { value: "98%", label: "Success Rate" },
]

const team = [
  { name: "Dr. Sarah Johnson", role: "Founder & Director", image: "https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { name: "Michael Chen", role: "Head of Operations", image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300" },
  { name: "Amara Obi", role: "Student Success Lead", image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=300" },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />

      <main>
        {/* Hero Section with Image */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Students collaborating"
              fill
              className="object-cover"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0C1220]/95 to-[#0C1220]/70" />
          </div>
          <div className="relative py-24 lg:py-40">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#F59E0B] animate-in fade-in slide-in-from-left-4 duration-500">
                About Us
              </p>
              <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl text-balance animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
                A Global Community<br />
                <span className="text-[#2563EB]">Helping Students</span><br />
                Reach New Heights
              </h1>
              <p className="max-w-2xl text-lg text-white/80 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
                We are a network of scholars, professionals, and educators from around the world 
                united by a single mission: making quality education accessible to talented students 
                from underrepresented regions.
              </p>
            </div>
          </div>
        </section>

        {/* Programs Section with Images */}
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
                  Whether you&apos;re just starting your journey or ready for advanced support, 
                  we have programs tailored to your needs.
                </p>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                {programs.map((program, index) => (
                  <div
                    key={index}
                    className={`group relative overflow-hidden rounded-3xl transition-all hover:-translate-y-1 hover:shadow-xl ${
                      program.featured ? "sm:col-span-2" : ""
                    }`}
                  >
                    <div className={`relative ${program.featured ? "h-[300px]" : "h-[200px]"}`}>
                      <Image
                        src={program.image}
                        alt={program.title}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="text-xl font-bold text-white mb-1">{program.title}</h3>
                        <p className="text-sm text-white/80">{program.description}</p>
                      </div>
                      <button className="absolute top-4 right-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm transition-transform hover:scale-110">
                        <ArrowRight className="h-4 w-4 text-white" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Initiatives Section with Image */}
        <section className="py-20 lg:py-28">
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
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  We provide comprehensive support across every stage of your study abroad journey.
                </p>
                <div className="relative rounded-2xl overflow-hidden h-[200px] mb-6">
                  <Image
                    src="https://images.pexels.com/photos/3184632/pexels-photo-3184632.jpeg?auto=compress&cs=tinysrgb&w=600"
                    alt="Team collaboration"
                    fill
                    className="object-cover"
                  />
                </div>
                <Button className="rounded-full bg-[#2563EB] text-white px-6 hover:bg-[#1D4ED8]" asChild>
                  <Link href="/services">
                    View All Services <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>

              <div className="space-y-4">
                {initiatives.map((item) => (
                  <div
                    key={item.number}
                    className={`rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden transition-all ${
                      item.expanded ? "bg-gray-50 dark:bg-[#1D1D1F]" : "bg-white dark:bg-transparent hover:bg-gray-50 dark:hover:bg-[#1D1D1F]"
                    }`}
                  >
                    <div className="flex items-center justify-between p-5 cursor-pointer">
                      <div className="flex items-center gap-4">
                        <span className="text-sm font-medium text-gray-400">{item.number}</span>
                        <h3 className="text-lg font-semibold text-gray-900 dark:text-white">{item.title}</h3>
                      </div>
                      <ChevronRight className={`h-5 w-5 text-gray-400 transition-transform ${item.expanded ? "rotate-90" : ""}`} />
                    </div>
                    {item.expanded && (
                      <div className="px-5 pb-5">
                        <div className="flex gap-4">
                          {item.image && (
                            <div className="relative w-24 h-24 rounded-xl overflow-hidden shrink-0">
                              <Image src={item.image} alt={item.title} fill className="object-cover" />
                            </div>
                          )}
                          <div>
                            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">{item.description}</p>
                            <Button variant="outline" className="rounded-full text-sm" asChild>
                              <Link href="/services">View Details</Link>
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

        {/* Stats Section - Calmerry style */}
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

        {/* Mission Section with Images */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl mb-4">
                Our Core Values
              </h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                These principles guide everything we do as we support students on their journey.
              </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3">
              {[
                { icon: Globe, title: "Global Reach", description: "Supporting students from over 25 countries across Africa and beyond.", color: "bg-[#2563EB]", image: "https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { icon: Heart, title: "Dedicated Support", description: "Our volunteers dedicate their time to mentoring and guiding students.", color: "bg-[#0891B2]", image: "https://images.pexels.com/photos/3184296/pexels-photo-3184296.jpeg?auto=compress&cs=tinysrgb&w=400" },
                { icon: Users, title: "Community Driven", description: "Built by scholars, for scholars. We understand your journey.", color: "bg-[#059669]", image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400" },
              ].map((value) => (
                <div key={value.title} className="group rounded-2xl border border-gray-200 dark:border-white/10 overflow-hidden transition-all hover:-translate-y-1 hover:shadow-xl">
                  <div className="relative h-48">
                    <Image src={value.image} alt={value.title} fill className="object-cover transition-transform duration-500 group-hover:scale-110" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-xl ${value.color}`}>
                      <value.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{value.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="bg-[#2563EB] py-16">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-white/80">
              Join hundreds of scholars who have achieved their dreams with our support.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full bg-white text-[#2563EB] hover:bg-gray-100 px-8 h-12" asChild>
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
