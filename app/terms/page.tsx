import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] transition-colors">
      <Navbar />
      
      <main className="py-16 lg:py-24">
        <div className="mx-auto max-w-3xl px-6 lg:px-8">
          <Link 
            href="/" 
            className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>

          <h1 className="mb-8 text-4xl font-bold text-gray-900 dark:text-white md:text-5xl">
            Terms of Service
          </h1>

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
        </div>
      </main>

      <Footer />
    </div>
  )
}
