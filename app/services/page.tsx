import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, FileCheck, GraduationCap, Plane, DollarSign, Users, BookOpen } from "lucide-react"

const services = [
  {
    slug: "wes-evaluation",
    icon: FileCheck,
    title: "WES Evaluation Support",
    description: "We cover the cost of credential evaluation through World Education Services, helping you get your international credentials recognized.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["Full fee coverage", "Application guidance", "Document review"],
    color: "bg-[#1E3A5F]",
  },
  {
    slug: "gre-gmat",
    icon: GraduationCap,
    title: "GRE/GMAT Fee Support",
    description: "Standardized test fees shouldn't be a barrier. We provide financial support for GRE and GMAT registration costs.",
    image: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["Test fee coverage", "Study resources", "Score sending support"],
    color: "bg-[#F59E0B]",
  },
  {
    slug: "visa-sevis",
    icon: Plane,
    title: "Visa & SEVIS Support",
    description: "Navigate the visa process with confidence. We help cover SEVIS fees and provide guidance through the visa application.",
    image: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["SEVIS fee coverage", "Documentation help", "Interview prep"],
    color: "bg-[#1E3A5F]",
  },
  {
    slug: "application-fees",
    icon: DollarSign,
    title: "Application Fee Coverage",
    description: "Apply to more schools without financial worry. We cover application fees for qualified students at partner universities.",
    image: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["Multiple applications", "Partner universities", "Fee waivers"],
    color: "bg-[#F59E0B]",
  },
  {
    slug: "mentorship",
    icon: Users,
    title: "Mentorship Program",
    description: "Connect with experienced scholars who've walked your path. Get personalized guidance throughout your journey.",
    image: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["1-on-1 mentoring", "Essay reviews", "Career guidance"],
    color: "bg-[#1E3A5F]",
  },
  {
    slug: "application-guidance",
    icon: BookOpen,
    title: "Application Guidance",
    description: "From personal statements to interview prep, we provide comprehensive support to strengthen your applications.",
    image: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800",
    benefits: ["Essay coaching", "Resume building", "Interview practice"],
    color: "bg-[#F59E0B]",
  },
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Students collaborating"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0C1220]/80" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
              What We Offer
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl text-balance">
              Our Services
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto text-pretty">
              Comprehensive support designed to remove financial barriers and help you achieve your study abroad dreams.
            </p>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {services.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group relative overflow-hidden rounded-2xl bg-gray-50 dark:bg-[#1D1D1F] border border-gray-200 dark:border-white/10 transition-all hover:shadow-xl dark:hover:shadow-white/5 hover:-translate-y-1"
                >
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className={`absolute top-4 left-4 ${service.color} rounded-xl p-3`}>
                      <service.icon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="mb-3 text-xl font-bold text-gray-900 dark:text-white group-hover:text-[#1E3A5F] dark:group-hover:text-[#F59E0B] transition-colors">
                      {service.title}
                    </h3>
                    <p className="mb-4 text-gray-600 dark:text-gray-400 text-sm line-clamp-2">
                      {service.description}
                    </p>
                    <ul className="mb-4 flex flex-wrap gap-2">
                      {service.benefits.map((benefit) => (
                        <li
                          key={benefit}
                          className="rounded-full bg-[#1E3A5F]/10 dark:bg-white/10 px-3 py-1 text-xs font-medium text-[#1E3A5F] dark:text-white"
                        >
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <div className="flex items-center text-[#1E3A5F] dark:text-[#F59E0B] font-semibold text-sm">
                      Learn more
                      <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white md:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-gray-600 dark:text-gray-400">
              Apply today and let us help remove the financial barriers standing between you and your dreams.
            </p>
            <Link
              href="/apply/general"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E3A5F] px-8 py-4 text-base font-semibold text-white hover:bg-[#2D4A6F] transition-colors"
            >
              Apply Now
              <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
