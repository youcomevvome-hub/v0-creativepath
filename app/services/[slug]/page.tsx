import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, ArrowRight, Check, FileCheck, GraduationCap, Plane, DollarSign, Users, BookOpen, type LucideIcon } from "lucide-react"

interface ServiceData {
  icon: LucideIcon
  title: string
  subtitle: string
  description: string
  heroImage: string
  benefits: string[]
  eligibility: string[]
  process: { step: number; title: string; description: string }[]
  faq: { question: string; answer: string }[]
}

const servicesData: Record<string, ServiceData> = {
  "wes-support": {
    icon: FileCheck,
    title: "WES Evaluation Support",
    subtitle: "Get Your Credentials Recognized",
    description: "World Education Services (WES) credential evaluation is essential for international students applying to US universities. We cover the full cost of your WES evaluation, removing this financial barrier from your path to education.",
    heroImage: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1600",
    benefits: [
      "Full WES evaluation fee coverage",
      "Guidance on required documents",
      "Support with transcript requests",
      "Course-by-course evaluation included",
      "Priority processing assistance",
    ],
    eligibility: [
      "Students from underrepresented regions",
      "Demonstrated financial need",
      "Strong academic record",
      "Commitment to pursuing higher education abroad",
    ],
    process: [
      { step: 1, title: "Apply Online", description: "Submit your application through our portal with required documents." },
      { step: 2, title: "Review Process", description: "Our team reviews your eligibility and academic background." },
      { step: 3, title: "Approval", description: "Once approved, we initiate the WES evaluation process on your behalf." },
      { step: 4, title: "Completion", description: "Receive your evaluated credentials ready for university applications." },
    ],
    faq: [
      { question: "How long does WES evaluation take?", answer: "Standard processing takes 7-10 business days after WES receives all documents." },
      { question: "What documents do I need?", answer: "You'll need official transcripts, degree certificates, and their translations if not in English." },
    ],
  },
  "gre-support": {
    icon: GraduationCap,
    title: "GRE/GMAT Fee Support",
    subtitle: "Ace Your Standardized Tests",
    description: "Standardized tests like the GRE and GMAT are crucial for graduate school admissions. We provide financial support to cover test registration fees, ensuring cost doesn't prevent you from pursuing your academic goals.",
    heroImage: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1600",
    benefits: [
      "Full test registration fee coverage",
      "Score sending to universities included",
      "Access to study resources",
      "Test prep guidance",
      "Retake support if needed",
    ],
    eligibility: [
      "Planning to apply for graduate programs",
      "Financial need demonstrated",
      "Commitment to test preparation",
      "First-time or retake applicants",
    ],
    process: [
      { step: 1, title: "Submit Application", description: "Apply with your planned test date and target programs." },
      { step: 2, title: "Eligibility Review", description: "We assess your application and financial need." },
      { step: 3, title: "Fee Coverage", description: "Upon approval, we provide a voucher or direct payment for your test." },
      { step: 4, title: "Test & Report", description: "Take your test and send scores to your target schools." },
    ],
    faq: [
      { question: "Which tests are covered?", answer: "We cover GRE General, GRE Subject Tests, GMAT, and TOEFL/IELTS fees." },
      { question: "Can I get support for retakes?", answer: "Yes, we consider retake support on a case-by-case basis." },
    ],
  },
  "visa-fee-support": {
    icon: Plane,
    title: "Visa & SEVIS Support",
    subtitle: "Navigate Immigration Successfully",
    description: "The visa process can be daunting and expensive. We help cover SEVIS fees and provide comprehensive guidance through the F-1 student visa application process, ensuring you're prepared for every step.",
    heroImage: "https://images.pexels.com/photos/3769138/pexels-photo-3769138.jpeg?auto=compress&cs=tinysrgb&w=1600",
    benefits: [
      "SEVIS I-901 fee coverage",
      "DS-160 form assistance",
      "Visa interview preparation",
      "Document checklist and review",
      "Embassy appointment guidance",
    ],
    eligibility: [
      "Accepted to a US institution",
      "I-20 form received",
      "Financial need demonstrated",
      "First-time F-1 visa applicants",
    ],
    process: [
      { step: 1, title: "I-20 Received", description: "After university acceptance, receive your I-20 form." },
      { step: 2, title: "Apply for Support", description: "Submit your visa support application to us." },
      { step: 3, title: "SEVIS Payment", description: "We cover your SEVIS fee and provide interview prep." },
      { step: 4, title: "Visa Interview", description: "Attend your interview confident and prepared." },
    ],
    faq: [
      { question: "What is the SEVIS fee?", answer: "The SEVIS I-901 fee is $350 for F-1 students, which we fully cover." },
      { question: "Do you help with the visa interview?", answer: "Yes, we provide mock interviews and common question preparation." },
    ],
  },
  "application-fee-support": {
    icon: DollarSign,
    title: "Application Fee Coverage",
    subtitle: "Apply Without Limits",
    description: "University application fees add up quickly. We cover application fees at multiple institutions, allowing you to apply broadly and increase your chances of admission to your dream schools.",
    heroImage: "https://images.pexels.com/photos/4778611/pexels-photo-4778611.jpeg?auto=compress&cs=tinysrgb&w=1600",
    benefits: [
      "Coverage for multiple applications",
      "Partner university fee waivers",
      "Strategic school list guidance",
      "Application tracking support",
      "Deadline management help",
    ],
    eligibility: [
      "Strong academic background",
      "Clear program interests",
      "Demonstrated financial need",
      "Realistic school list prepared",
    ],
    process: [
      { step: 1, title: "School Selection", description: "Work with us to finalize your target schools." },
      { step: 2, title: "Application Review", description: "We review your applications for quality." },
      { step: 3, title: "Fee Coverage", description: "We cover application fees or secure waivers." },
      { step: 4, title: "Submit & Track", description: "Submit applications and track their status." },
    ],
    faq: [
      { question: "How many applications can be covered?", answer: "We typically cover 5-10 applications based on your profile and needs." },
      { question: "Which universities are partners?", answer: "We have partnerships with 50+ universities offering fee waivers to our students." },
    ],
  },
  "mentorship-program": {
    icon: Users,
    title: "Mentorship Program",
    subtitle: "Learn from Those Who've Succeeded",
    description: "Connect with experienced scholars and professionals who understand your journey. Our mentors provide personalized guidance, share their experiences, and help you navigate the complexities of studying abroad.",
    heroImage: "https://images.pexels.com/photos/3184328/pexels-photo-3184328.jpeg?auto=compress&cs=tinysrgb&w=1600",
    benefits: [
      "1-on-1 mentor matching",
      "Regular check-in sessions",
      "Essay review and feedback",
      "Career path guidance",
      "Networking opportunities",
    ],
    eligibility: [
      "Active applicant to our programs",
      "Clear educational goals",
      "Commitment to regular meetings",
      "Open to feedback and guidance",
    ],
    process: [
      { step: 1, title: "Profile Creation", description: "Tell us about your background and goals." },
      { step: 2, title: "Mentor Matching", description: "We pair you with a mentor in your field." },
      { step: 3, title: "Kickoff Session", description: "Meet your mentor and set goals together." },
      { step: 4, title: "Ongoing Support", description: "Regular sessions throughout your journey." },
    ],
    faq: [
      { question: "How are mentors selected?", answer: "Mentors are successful scholars from similar backgrounds who've navigated the same path." },
      { question: "How often do we meet?", answer: "Typically bi-weekly, with additional support during critical periods." },
    ],
  },
  "transcript-support": {
    icon: BookOpen,
    title: "Application Guidance",
    subtitle: "Perfect Your Applications",
    description: "From crafting compelling personal statements to preparing for interviews, we provide comprehensive guidance to help you put your best foot forward in every application.",
    heroImage: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1600",
    benefits: [
      "Personal statement coaching",
      "Resume and CV building",
      "Interview preparation",
      "Recommendation letter guidance",
      "Application strategy sessions",
    ],
    eligibility: [
      "Planning to apply for programs",
      "Committed to the process",
      "Open to iterative feedback",
      "Meeting application deadlines",
    ],
    process: [
      { step: 1, title: "Initial Assessment", description: "We review your profile and application goals." },
      { step: 2, title: "Strategy Development", description: "Create a personalized application strategy." },
      { step: 3, title: "Document Preparation", description: "Work on essays, resumes, and supporting docs." },
      { step: 4, title: "Final Review", description: "Polish everything before submission." },
    ],
    faq: [
      { question: "How many essay drafts can I submit?", answer: "We typically do 3-4 rounds of review per essay." },
      { question: "Do you help with all program types?", answer: "Yes, we support applications for Masters, PhD, MBA, and undergraduate programs." },
    ],
  },
}

export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({ slug }))
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const service = servicesData[slug]

  if (!service) {
    notFound()
  }

  const Icon = service.icon

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden py-20 lg:py-28">
          <div className="absolute inset-0">
            <Image
              src={service.heroImage}
              alt={service.title}
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#0C1220]/80" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8">
            <Link
              href="/services"
              className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-white/70 hover:text-white transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              All Services
            </Link>
            <div className="flex items-center gap-4 mb-6">
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#F59E0B]">
                <Icon className="h-8 w-8 text-white" />
              </div>
            </div>
            <p className="text-sm font-semibold uppercase tracking-widest text-[#F59E0B] mb-4">
              {service.subtitle}
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-5xl lg:text-6xl text-balance">
              {service.title}
            </h1>
            <p className="text-lg text-white/80 max-w-2xl">
              {service.description}
            </p>
            <div className="mt-8">
              <Link
                href={`/apply/${slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-[#F59E0B] px-8 py-4 text-base font-semibold text-white hover:bg-[#E58E00] transition-colors"
              >
                Apply for This Service
                <ArrowRight className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 md:text-4xl">
                  What You Get
                </h2>
                <ul className="space-y-4">
                  {service.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#1E3A5F]">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-lg text-gray-700 dark:text-gray-300">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative">
                <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                  <Image
                    src={service.heroImage}
                    alt={`${service.title} benefits`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="absolute -bottom-6 -left-6 rounded-2xl bg-[#1E3A5F] p-6 text-white shadow-lg">
                  <p className="text-3xl font-bold">100%</p>
                  <p className="text-sm text-white/80">Fee Coverage</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Process Section */}
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl mb-4">
                How It Works
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Our streamlined process makes it easy to get the support you need.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              {service.process.map((step) => (
                <div key={step.step} className="relative">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#1E3A5F] text-xl font-bold text-white">
                    {step.step}
                  </div>
                  <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {step.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Eligibility Section */}
        <section className="py-20 lg:py-28">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 md:text-4xl">
                  Eligibility Requirements
                </h2>
                <p className="text-lg text-gray-600 dark:text-gray-400 mb-8">
                  We welcome applications from students who meet the following criteria:
                </p>
                <ul className="space-y-4">
                  {service.eligibility.map((item) => (
                    <li key={item} className="flex items-start gap-4">
                      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F59E0B]">
                        <Check className="h-4 w-4 text-white" />
                      </div>
                      <span className="text-gray-700 dark:text-gray-300">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="rounded-2xl bg-[#1E3A5F] p-8 lg:p-12 text-white">
                <h3 className="text-2xl font-bold mb-4">Not Sure If You Qualify?</h3>
                <p className="text-white/80 mb-6">
                  We review every application holistically. If you're passionate about your education and facing financial barriers, we encourage you to apply.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-full bg-white text-[#1E3A5F] px-6 py-3 font-semibold hover:bg-gray-100 transition-colors"
                >
                  Contact Us
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 lg:py-28 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white md:text-4xl mb-4">
                Frequently Asked Questions
              </h2>
            </div>
            <div className="space-y-6">
              {service.faq.map((item) => (
                <div
                  key={item.question}
                  className="rounded-2xl bg-white dark:bg-[#0C1220] border border-gray-200 dark:border-white/10 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                    {item.question}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section with background image */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 overflow-hidden relative">
            <Image
              src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt="Students ready to start"
              fill
              className="object-cover"
            />
            {/* Solid dark navy overlay — no gradient */}
            <div className="absolute inset-0 bg-[#1E3A5F]/92" />
          </div>
          <div className="relative mx-auto max-w-4xl px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white mb-6 md:text-4xl">
              Ready to Apply?
            </h2>
            <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
              Take the first step toward your educational goals. Our team is ready to support you every step of the way.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Link
                href={`/apply/${slug}`}
                className="inline-flex items-center gap-2 rounded-full bg-white text-[#1E3A5F] px-8 py-4 text-base font-semibold hover:bg-gray-100 transition-colors shadow-lg"
              >
                Start Your Application
                <ArrowRight className="h-5 w-5" />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 rounded-full border-2 border-white/40 text-white px-8 py-4 text-base font-semibold hover:bg-white/10 transition-colors"
              >
                Contact Us
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
