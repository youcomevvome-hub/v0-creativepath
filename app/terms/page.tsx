import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  const sections = [
    {
      id: 1,
      title: "Acceptance of Terms",
      description: "By accessing and using Creative Path Inspired's website and services, you agree to be bound by these Terms of Service.",
      image: "https://images.pexels.com/photos/3184335/pexels-photo-3184335.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 2,
      title: "Description of Services",
      description: "We provide comprehensive educational support including financial aid, mentorship, application guidance, and fee sponsorships for international students.",
      image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 3,
      title: "User Responsibilities",
      description: "Users must provide accurate information, use funds for intended purposes, and respect the confidentiality of all guidance and mentorship relationships.",
      image: "https://images.pexels.com/photos/3184398/pexels-photo-3184398.jpeg?auto=compress&cs=tinysrgb&w=600",
    },
    {
      id: 4,
      title: "Intellectual Property Rights",
      description: "All content on our website is protected by intellectual property laws. Unauthorized reproduction or distribution is prohibited.",
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
                Terms of Service
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-gray-600 dark:text-gray-400">
                Please review our terms carefully. By using our services, you agree to these terms and conditions.
              </p>
            </div>
          </div>
        </section>

        {/* Sections with Images */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-20 lg:space-y-32">
            {sections.map((section, idx) => (
              <div key={section.id} className={`grid gap-12 items-center lg:grid-cols-2 ${idx % 2 === 1 ? '' : ''}`}>
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
                  <div className="inline-flex items-center gap-3 mb-6">
                    <div className="h-10 w-10 rounded-lg bg-black dark:bg-white flex items-center justify-center font-bold text-white dark:text-black">
                      {section.id}
                    </div>
                  </div>
                  <h2 className="mb-4 text-3xl font-bold text-black dark:text-white">
                    {section.title}
                  </h2>
                  <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    {section.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Full Terms */}
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-gray-900/50">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="prose prose-gray dark:prose-invert max-w-none">
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
              Last updated: March 2026
            </p>

            <div className="space-y-8 text-gray-700 dark:text-gray-300">
              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">1. Acceptance of Terms</h2>
                <p className="leading-relaxed">
                  By accessing and using Creative Path Inspired&apos;s website and services, you agree to be bound by 
                  these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">2. Description of Services</h2>
                <p className="leading-relaxed">
                  Creative Path Inspired provides educational support services including but not limited to:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Financial support for WES credential evaluations</li>
                  <li>GRE and standardized test fee assistance</li>
                  <li>Visa and SEVIS fee support</li>
                  <li>Application fee coverage</li>
                  <li>Mentorship programs</li>
                  <li>Guidance and advisory services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">3. Eligibility</h2>
                <p className="leading-relaxed">
                  To be eligible for our services, applicants must:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>Be a prospective or current student seeking higher education opportunities</li>
                  <li>Demonstrate financial need</li>
                  <li>Provide accurate and truthful information in applications</li>
                  <li>Meet specific program requirements as outlined in individual service descriptions</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">4. Application Process</h2>
                <p className="leading-relaxed">
                  All applications are subject to review and approval. Submission of an application does not 
                  guarantee receipt of support. We reserve the right to request additional documentation and 
                  to deny applications at our discretion.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">5. User Responsibilities</h2>
                <p className="mb-4 leading-relaxed">As a user of our services, you agree to:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Provide accurate and complete information</li>
                  <li>Use funds received only for their intended educational purposes</li>
                  <li>Notify us of any changes to your application status</li>
                  <li>Respect the confidentiality of mentorship relationships</li>
                  <li>Not misrepresent your eligibility or circumstances</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">6. Intellectual Property</h2>
                <p className="leading-relaxed">
                  All content on this website, including text, graphics, logos, and images, is the property of 
                  Creative Path Inspired and is protected by intellectual property laws. You may not reproduce, 
                  distribute, or create derivative works without our express written permission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">7. Limitation of Liability</h2>
                <p className="leading-relaxed">
                  Creative Path Inspired is not responsible for:
                </p>
                <ul className="list-disc pl-6 space-y-2 mt-4">
                  <li>University admission decisions</li>
                  <li>Visa approval or denial</li>
                  <li>Test scores or performance</li>
                  <li>Third-party service providers&apos; actions</li>
                  <li>Any indirect or consequential damages arising from use of our services</li>
                </ul>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">8. Termination</h2>
                <p className="leading-relaxed">
                  We reserve the right to suspend or terminate access to our services for users who violate 
                  these terms, provide false information, or engage in conduct detrimental to our mission.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">9. Changes to Terms</h2>
                <p className="leading-relaxed">
                  We may update these Terms of Service from time to time. We will notify users of significant 
                  changes through our website or email. Continued use of our services after changes constitutes 
                  acceptance of the new terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">10. Contact</h2>
                <p className="leading-relaxed">
                  For questions about these Terms of Service, please contact us at:
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
