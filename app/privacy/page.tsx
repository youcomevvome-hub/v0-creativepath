import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, Shield, Lock, Eye, Share2 } from "lucide-react"

export default function PrivacyPage() {
  const sections = [
    {
      id: 1,
      icon: Shield,
      title: "Information We Collect",
      description: "We collect personal information you provide directly, including name, email, educational background, and application materials.",
      image: "https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      icon: Lock,
      title: "How We Protect Your Data",
      description: "We use industry-standard security measures including encryption, secure servers, and access controls to protect your sensitive information.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      icon: Eye,
      title: "Data Usage & Transparency",
      description: "Your information is used solely for providing services, improving our programs, and communicating with you about your application.",
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      icon: Share2,
      title: "Third-Party Sharing",
      description: "We only share your information with universities and service providers necessary for your education journey, never with marketers.",
      image: "https://images.pexels.com/photos/3184654/pexels-photo-3184654.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
  ]

  return (
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Navbar />

      <main>
        {/* Hero */}
        <section className="relative overflow-hidden py-20 lg:py-32 bg-gray-50 dark:bg-gray-900/50">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center">
              <Link 
                href="/" 
                className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors"
              >
                <ArrowLeft className="h-4 w-4" />
                Back to Home
              </Link>
              <h1 className="mb-6 text-5xl font-bold text-black dark:text-white lg:text-6xl">
                Privacy Policy
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                Your privacy and data security are paramount. Learn how we protect and use your information.
              </p>
            </div>
          </div>
        </section>

        {/* Key Sections with Icons and Images */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20 lg:space-y-32">
            {sections.map((section, idx) => {
              const Icon = section.icon
              return (
                <div key={section.id} className="grid gap-12 items-center lg:grid-cols-2">
                  {/* Image */}
                  <div className={`relative w-full h-96 rounded-2xl overflow-hidden shadow-lg ${idx % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <Image
                      src={section.image}
                      alt={section.title}
                      fill
                      className="object-cover w-full h-full"
                    />
                    <div className="absolute inset-0 bg-black/10 dark:bg-black/30" />
                  </div>

                  {/* Content */}
                  <div className={idx % 2 === 1 ? 'lg:order-1' : ''}>
                    <div className="inline-flex items-center justify-center h-14 w-14 rounded-xl bg-black dark:bg-white mb-6">
                      <Icon className="h-6 w-6 text-white dark:text-black" />
                    </div>
                    <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
                      {section.title}
                    </h2>
                    <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                      {section.description}
                    </p>
                  </div>
                </div>
              )
            })}
          </div>
        </section>

        {/* Detailed Policy */}
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <h2 className="mb-8 text-3xl font-bold text-black dark:text-white">
              Complete Privacy Policy
            </h2>

            <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Last updated: March 2026
            </p>

            <div className="space-y-8 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Introduction</h2>
                <p className="leading-relaxed">
                  Creative Path Inspired (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. 
                  This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you 
                  visit our website or use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Information We Collect</h2>
                <p className="mb-4 leading-relaxed">We may collect the following types of information:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li><strong>Personal Information:</strong> Name, email address, phone number, country of residence, educational background</li>
                  <li><strong>Application Data:</strong> Academic transcripts, test scores, financial information for scholarship applications</li>
                  <li><strong>Usage Data:</strong> IP address, browser type, pages visited, time spent on pages</li>
                  <li><strong>Communication Data:</strong> Messages sent through our contact forms</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. How We Use Your Information</h2>
                <p className="mb-4 leading-relaxed">We use the information we collect to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Process scholarship and financial support applications</li>
                  <li>Provide mentorship and guidance services</li>
                  <li>Communicate with you about your application status</li>
                  <li>Improve our website and services</li>
                  <li>Send updates about new programs and opportunities (with your consent)</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Data Security</h2>
                <p className="leading-relaxed">
                  We implement appropriate technical and organizational measures to protect your personal information 
                  against unauthorized access, alteration, disclosure, or destruction. However, no method of 
                  transmission over the Internet is 100% secure.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. Data Sharing</h2>
                <p className="leading-relaxed">
                  We do not sell your personal information. We may share your information with:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Partner universities and scholarship providers (with your consent)</li>
                  <li>Mentors assigned to guide you (with your consent)</li>
                  <li>Service providers who assist in our operations</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Your Rights</h2>
                <p className="mb-4 leading-relaxed">You have the right to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Access the personal information we hold about you</li>
                  <li>Request correction of inaccurate information</li>
                  <li>Request deletion of your information</li>
                  <li>Withdraw consent for data processing</li>
                  <li>Opt-out of marketing communications</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Cookies</h2>
                <p className="leading-relaxed">
                  We use cookies and similar tracking technologies to enhance your experience on our website. 
                  You can control cookie preferences through your browser settings.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Contact Us</h2>
                <p className="leading-relaxed">
                  If you have questions about this Privacy Policy or our data practices, please contact us at:
                </p>
                <p className="mt-4">
                  <strong>Email:</strong>{" "}
                  <a href="mailto:vicecreativepath@gmail.com" className="text-[#2563EB] hover:underline">
                    vicecreativepath@gmail.com
                  </a>
                </p>
              </section>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
