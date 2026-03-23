import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Shield, Database, Eye, Lock, Share2, Trash2, Mail } from "lucide-react"

const sections = [
  {
    icon: Database,
    title: "Information We Collect",
    content: [
      "Personal identification information (name, email address, phone number, mailing address).",
      "Educational background including academic transcripts, test scores, and credentials.",
      "Financial information to assess eligibility for fee support programs.",
      "Application documents including essays, recommendations, and resumes.",
      "Communication records from emails, forms, and consultations.",
    ],
  },
  {
    icon: Eye,
    title: "How We Use Your Information",
    content: [
      "Process and evaluate applications for scholarships and fee support.",
      "Match students with appropriate mentors based on field and region.",
      "Communicate about application status, deadlines, and opportunities.",
      "Improve our services and develop new programs.",
      "Comply with legal obligations and protect against fraud.",
    ],
  },
  {
    icon: Lock,
    title: "Information Security",
    content: [
      "We implement industry-standard encryption for data transmission and storage.",
      "Access to personal information is restricted to authorized staff only.",
      "Regular security audits ensure the integrity of our systems.",
      "We do not store sensitive payment information on our servers.",
    ],
  },
  {
    icon: Share2,
    title: "Information Sharing",
    content: [
      "We never sell personal information to third parties.",
      "Information may be shared with partner universities with your explicit consent.",
      "Mentors receive only necessary information to provide guidance.",
      "We may share data with credential evaluation services as part of your application.",
      "Legal requirements may necessitate disclosure to government authorities.",
    ],
  },
  {
    icon: Shield,
    title: "Your Rights",
    content: [
      "Access and review personal information we hold about you.",
      "Request corrections to inaccurate information.",
      "Request deletion of your data (subject to legal retention requirements).",
      "Opt out of non-essential communications at any time.",
      "Withdraw consent for data processing where applicable.",
    ],
  },
  {
    icon: Trash2,
    title: "Data Retention",
    content: [
      "Active applicant data is retained throughout the application process.",
      "Successful applicant records are retained for program monitoring and alumni services.",
      "Inactive accounts are purged after 24 months of no activity.",
      "Some records may be retained longer for legal compliance purposes.",
    ],
  },
]

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Digital security"
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
              Privacy Policy
            </h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Your privacy is important to us. This policy outlines how we collect, use, and protect your personal information.
            </p>
            <p className="mt-6 text-sm text-white/60">
              Last updated: March 2026
            </p>
          </div>
        </section>

        {/* Privacy Content */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {/* Introduction */}
            <div className="mb-12 p-8 rounded-2xl bg-gradient-to-r from-[#1E3A5F]/10 to-[#F59E0B]/10 dark:from-[#1E3A5F]/20 dark:to-[#F59E0B]/20 border border-[#1E3A5F]/20 dark:border-white/10">
              <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
                Creative Path Inspired is committed to protecting the privacy of students, mentors, and all users of our services. 
                We understand the sensitivity of educational and financial information, and we take our responsibility to safeguard 
                this data seriously. This Privacy Policy explains our practices regarding the collection, use, and disclosure of information.
              </p>
            </div>

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

            {/* Cookie Notice */}
            <div className="mt-12 rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1D1D1F] p-8">
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">Cookies & Tracking</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                We use cookies and similar tracking technologies to improve your browsing experience and analyze site traffic. 
                These include:
              </p>
              <ul className="space-y-2 text-gray-600 dark:text-gray-400">
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A5F] dark:bg-white" />
                  Essential cookies required for site functionality
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A5F] dark:bg-white" />
                  Analytics cookies to understand how visitors interact with our site
                </li>
                <li className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#1E3A5F] dark:bg-white" />
                  Preference cookies to remember your settings
                </li>
              </ul>
            </div>

            {/* Contact for Questions */}
            <div className="mt-12 relative overflow-hidden rounded-2xl">
              <div className="absolute inset-0">
                <Image
                  src="https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Contact support"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#1E3A5F]/90" />
              </div>
              <div className="relative p-8 text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-white/10 mb-4">
                  <Mail className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">Questions About Your Privacy?</h3>
                <p className="text-white/80 mb-6">
                  If you have questions or concerns about your privacy or this policy, please contact us at{" "}
                  <a href="mailto:vicecreativepath@gmail.com" className="underline">vicecreativepath@gmail.com</a>
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#1E3A5F] px-6 py-3 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Our Team
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
