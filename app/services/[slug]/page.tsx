import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight, CheckCircle, Clock, Users, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const serviceDetails: Record<string, {
  title: string
  tagline: string
  description: string
  heroImage: string
  features: string[]
  process: { step: string; title: string; description: string }[]
  benefits: { icon: string; title: string; description: string }[]
  applySlug: string
}> = {
  "wes-support": {
    title: "WES Credential Evaluation",
    tagline: "Get your credentials recognized globally",
    description: "We provide complete financial support for World Education Services (WES) credential evaluation, helping international students get their academic qualifications recognized by universities and employers worldwide.",
    heroImage: "https://images.pexels.com/photos/4050315/pexels-photo-4050315.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Full coverage of WES evaluation fees",
      "Document preparation assistance",
      "Step-by-step guidance through the process",
      "Priority processing support",
      "Expert review of your credentials",
    ],
    process: [
      { step: "01", title: "Apply Online", description: "Submit your application through our portal with required documents." },
      { step: "02", title: "Document Review", description: "Our team reviews your academic documents and eligibility." },
      { step: "03", title: "WES Submission", description: "We process your WES application with fee coverage." },
      { step: "04", title: "Get Results", description: "Receive your evaluated credentials for university applications." },
    ],
    benefits: [
      { icon: "dollar", title: "100% Fee Coverage", description: "Complete financial support for evaluation fees." },
      { icon: "clock", title: "Fast Processing", description: "Priority handling of your application." },
      { icon: "users", title: "Expert Guidance", description: "Dedicated support throughout the process." },
    ],
    applySlug: "wes-support",
  },
  "gre-support": {
    title: "GRE Exam Support",
    tagline: "Ace your GRE with confidence",
    description: "Comprehensive support for GRE examination including fee waivers, preparation resources, and expert guidance to help you achieve your target score.",
    heroImage: "https://images.pexels.com/photos/4145153/pexels-photo-4145153.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "GRE exam fee sponsorship",
      "Access to premium prep materials",
      "Practice test resources",
      "Study group connections",
      "Score improvement strategies",
    ],
    process: [
      { step: "01", title: "Register Interest", description: "Apply for GRE support through our platform." },
      { step: "02", title: "Eligibility Check", description: "We assess your profile and academic goals." },
      { step: "03", title: "Preparation Phase", description: "Access prep resources and start studying." },
      { step: "04", title: "Take the Exam", description: "Sit for your GRE with fee coverage." },
    ],
    benefits: [
      { icon: "dollar", title: "Fee Waiver", description: "Up to 100% coverage of exam fees." },
      { icon: "award", title: "Prep Resources", description: "Premium study materials included." },
      { icon: "users", title: "Mentorship", description: "Guidance from high scorers." },
    ],
    applySlug: "gre-support",
  },
  "visa-fee-support": {
    title: "Visa & Immigration Support",
    tagline: "Navigate your visa journey smoothly",
    description: "Complete visa and immigration support including SEVIS fee coverage, visa application assistance, and interview preparation.",
    heroImage: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "SEVIS fee coverage",
      "Visa application fee support",
      "Document preparation help",
      "Interview coaching",
      "Embassy appointment guidance",
    ],
    process: [
      { step: "01", title: "Apply for Support", description: "Submit your visa support application." },
      { step: "02", title: "Document Prep", description: "Get help preparing all required documents." },
      { step: "03", title: "Fee Coverage", description: "Receive SEVIS and visa fee support." },
      { step: "04", title: "Interview Prep", description: "Practice with mock visa interviews." },
    ],
    benefits: [
      { icon: "dollar", title: "Fee Support", description: "Coverage for SEVIS and visa fees." },
      { icon: "users", title: "Expert Guidance", description: "Immigration advisors at your service." },
      { icon: "award", title: "Success Rate", description: "High approval rate with our prep." },
    ],
    applySlug: "visa-fee-support",
  },
  "application-fee-support": {
    title: "Application Fee Support",
    tagline: "Apply to more universities",
    description: "Financial support for university application fees so you can apply to multiple programs without financial barriers.",
    heroImage: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Application fee coverage",
      "Multi-university support",
      "Application strategy guidance",
      "Deadline management",
      "School selection advice",
    ],
    process: [
      { step: "01", title: "List Schools", description: "Identify your target universities." },
      { step: "02", title: "Apply for Support", description: "Submit your fee support request." },
      { step: "03", title: "Get Coverage", description: "Receive application fee assistance." },
      { step: "04", title: "Submit Apps", description: "Apply to your dream schools." },
    ],
    benefits: [
      { icon: "dollar", title: "Fee Coverage", description: "Support for multiple applications." },
      { icon: "users", title: "Strategy Help", description: "School selection guidance." },
      { icon: "clock", title: "Timely Support", description: "Meet all your deadlines." },
    ],
    applySlug: "application-fee-support",
  },
  "transcript-support": {
    title: "Transcript & Essay Support",
    tagline: "Perfect your application documents",
    description: "Professional support for transcript evaluation and essay writing to make your application stand out.",
    heroImage: "https://images.pexels.com/photos/4144923/pexels-photo-4144923.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "Transcript evaluation support",
      "Essay editing and review",
      "Personal statement guidance",
      "Document formatting",
      "Quality assurance checks",
    ],
    process: [
      { step: "01", title: "Submit Documents", description: "Share your transcripts and drafts." },
      { step: "02", title: "Expert Review", description: "Our team reviews your materials." },
      { step: "03", title: "Revisions", description: "Receive feedback and make edits." },
      { step: "04", title: "Final Polish", description: "Get application-ready documents." },
    ],
    benefits: [
      { icon: "award", title: "Expert Review", description: "Professional editors and advisors." },
      { icon: "users", title: "Personalized", description: "Tailored feedback for you." },
      { icon: "clock", title: "Quick Turn", description: "Fast turnaround times." },
    ],
    applySlug: "transcript-support",
  },
  "mentorship-program": {
    title: "Mentorship Program",
    tagline: "Learn from those who've been there",
    description: "Connect with experienced mentors who have successfully navigated the study abroad journey and can guide you every step of the way.",
    heroImage: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=1200",
    features: [
      "1-on-1 mentorship sessions",
      "Career guidance",
      "Application strategy",
      "Network building",
      "Ongoing support",
    ],
    process: [
      { step: "01", title: "Apply", description: "Join our mentorship program." },
      { step: "02", title: "Match", description: "Get paired with the right mentor." },
      { step: "03", title: "Connect", description: "Start regular mentorship sessions." },
      { step: "04", title: "Grow", description: "Achieve your academic goals." },
    ],
    benefits: [
      { icon: "users", title: "Expert Mentors", description: "Learn from successful scholars." },
      { icon: "award", title: "Personalized", description: "Tailored guidance for you." },
      { icon: "clock", title: "Flexible", description: "Sessions on your schedule." },
    ],
    applySlug: "mentorship-program",
  },
}

interface ServicePageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return Object.keys(serviceDetails).map((slug) => ({ slug }))
}

export async function generateMetadata({ params }: ServicePageProps): Promise<Metadata> {
  const { slug } = await params
  const service = serviceDetails[slug]

  if (!service) {
    return { title: "Service Not Found | Creative Path Inspired" }
  }

  return {
    title: `${service.title} | Creative Path Inspired`,
    description: service.description,
  }
}

export default async function ServiceDetailPage({ params }: ServicePageProps) {
  const { slug } = await params
  const service = serviceDetails[slug]

  if (!service) {
    notFound()
  }

  const iconComponents: Record<string, React.ReactNode> = {
    dollar: <span className="text-2xl font-bold">$</span>,
    clock: <Clock className="h-6 w-6" />,
    users: <Users className="h-6 w-6" />,
    award: <Award className="h-6 w-6" />,
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative h-[60vh] min-h-[400px] overflow-hidden">
        <Image
          src={service.heroImage}
          alt={service.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-8 lg:p-16">
          <div className="mx-auto max-w-7xl">
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#F59E0B] animate-in fade-in slide-in-from-left-4 duration-500">
              Our Services
            </p>
            <h1 className="mb-4 text-4xl font-bold text-white md:text-5xl lg:text-6xl text-balance animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
              {service.title}
            </h1>
            <p className="max-w-2xl text-lg text-white/80 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">
              {service.tagline}
            </p>
          </div>
        </div>
      </section>

      {/* Description */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-2">
            <div>
              <h2 className="mb-6 text-3xl font-bold text-gray-900 dark:text-white">
                About This Service
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                {service.description}
              </p>

              <div className="mt-8">
                <Button size="lg" className="rounded-full bg-[#2563EB] px-8 text-white hover:bg-[#1D4ED8]" asChild>
                  <Link href={`/apply/${service.applySlug}`}>
                    Apply Now
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-200 dark:border-white/20 bg-gray-50 dark:bg-[#1D1D1F] p-8">
              <h3 className="mb-6 text-xl font-bold text-gray-900 dark:text-white">What&apos;s Included</h3>
              <ul className="space-y-4">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-[#22C55E] mt-0.5 shrink-0" />
                    <span className="text-gray-700 dark:text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-16 lg:py-24 bg-gray-50 dark:bg-[#1D1D1F]">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            How It Works
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {service.process.map((item, idx) => (
              <div key={idx} className="relative">
                <div className="rounded-2xl border border-gray-200 dark:border-white/20 bg-white dark:bg-[#0C1220] p-6 h-full">
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-[#2563EB] text-white font-bold">
                    {item.step}
                  </div>
                  <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">{item.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">{item.description}</p>
                </div>
                {idx < service.process.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-0.5 bg-gray-300 dark:bg-gray-700" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="mb-12 text-center text-3xl font-bold text-gray-900 dark:text-white">
            Why Choose Us
          </h2>
          <div className="grid gap-6 md:grid-cols-3">
            {service.benefits.map((benefit, idx) => (
              <div key={idx} className="text-center p-8 rounded-2xl border border-gray-200 dark:border-white/20 bg-white dark:bg-[#1D1D1F]">
                <div className="mb-4 mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-[#2563EB] text-white">
                  {iconComponents[benefit.icon]}
                </div>
                <h3 className="mb-2 text-xl font-bold text-gray-900 dark:text-white">{benefit.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 lg:py-24 bg-[#2563EB]">
        <div className="mx-auto max-w-4xl px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-3xl font-bold text-white md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 text-lg text-white/80">
            Apply now and take the first step toward your dream university.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="rounded-full bg-white text-[#2563EB] hover:bg-gray-100 px-8 h-12" asChild>
              <Link href={`/apply/${service.applySlug}`}>
                Apply Now
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="rounded-full border-white/30 text-white hover:bg-white/10 px-8 h-12" asChild>
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
