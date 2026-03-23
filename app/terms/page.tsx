import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Shield, FileText, Users, Scale, AlertCircle, Handshake } from "lucide-react"

const sections = [
  {
    icon: FileText,
    title: "Acceptance of Terms",
    content: [
      "By accessing and using Creative Path Inspired's website and services, you agree to be bound by these Terms of Service.",
      "If you do not agree to these terms, please do not use our services.",
      "We reserve the right to modify these terms at any time. Continued use constitutes acceptance of modified terms.",
    ],
  },
  {
    icon: Users,
    title: "Eligibility Requirements",
    content: [
      "Our services are available to students from underrepresented regions seeking to study abroad.",
      "Applicants must provide accurate and truthful information in all applications.",
      "We reserve the right to verify all information provided and deny services if information is found to be false.",
      "Priority is given to students demonstrating financial need and academic merit.",
    ],
  },
  {
    icon: Handshake,
    title: "Description of Services",
    content: [
      "Financial support for WES credential evaluations and standardized test fees.",
      "Visa and SEVIS fee support for approved applicants.",
      "Application fee coverage for university applications.",
      "Mentorship programs connecting students with experienced scholars.",
      "Guidance and advisory services throughout the application process.",
    ],
  },
  {
    icon: Shield,
    title: "User Responsibilities",
    content: [
      "Users must maintain the confidentiality of their account information.",
      "Users agree to use our services only for lawful educational purposes.",
      "Any misuse of funds or resources provided will result in immediate termination of support.",
      "Users must complete all required documentation in a timely manner.",
      "Notify us of any changes to your application status promptly.",
    ],
  },
  {
    icon: Scale,
    title: "Limitation of Liability",
    content: [
      "Creative Path Inspired provides support services but does not guarantee admission to any university.",
      "We are not responsible for decisions made by universities, embassies, or other third parties.",
      "Our fee coverage is subject to availability of funds and eligibility criteria.",
      "We are not liable for test scores, visa decisions, or admission outcomes.",
    ],
  },
  {
    icon: AlertCircle,
    title: "Termination",
    content: [
      "We reserve the right to suspend or terminate access for users who violate these terms.",
      "Providing false information may result in immediate termination and potential legal action.",
      "Users may terminate their relationship with us at any time by written notice.",
    ],
  },
]

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/5668858/pexels-photo-5668858.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Legal documents"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0C1220]/85" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <Link 
              href="/" 
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Home
            </Link>
            <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-[#F59E0B]">
              Legal
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl">
              Terms of Service
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Please read these terms carefully before using our services. Your access to and use of our services is conditioned on your acceptance of these terms.
            </p>
            <p className="mt-6 text-sm text-white/60">
              Last updated: March 2026
            </p>
          </div>
        </section>

        {/* Terms Content */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            <div className="space-y-8">
              {sections.map((section, idx) => (
                <div 
                  key={section.title} 
                  className="rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1D1D1F] p-8 transition-all hover:shadow-lg dark:hover:shadow-white/5"
                >
                  <div className="flex items-start gap-4 mb-6">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-[#1E3A5F] shrink-0">
                      <section.icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <span className="text-sm text-gray-500 dark:text-gray-400">Section {idx + 1}</span>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{section.title}</h2>
                    </div>
                  </div>
                  <ul className="space-y-4 ml-16">
                    {section.content.map((item, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#1E3A5F] dark:bg-white shrink-0" />
                        <p className="text-gray-600 dark:text-gray-400">{item}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            {/* Contact for Questions */}
            <div className="mt-16 relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Contact us"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1E3A5F]/90" />
              </div>
              <div className="relative p-8 text-center">
                <h3 className="text-xl font-bold text-white mb-4">Have Questions About Our Terms?</h3>
                <p className="text-white/80 mb-6">
                  If you have any questions about these Terms of Service, please contact us at{" "}
                  <a href="mailto:vicecreativepath@gmail.com" className="underline">vicecreativepath@gmail.com</a>
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#1E3A5F] px-6 py-3 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
