import { ServiceCard } from "./ServiceCard"

const services = [
  {
    title: "WES Evaluation Support",
    description: "We pay between 100% to 25% of WES evaluation fees for your credential assessment.",
    iconName: "FileCheck" as const,
    slug: "wes-support",
    color: "highlight" as const,
  },
  {
    title: "GRE / ETS Fee Support",
    description: "We cover full or partial GRE testing fees to help you prepare for graduate school.",
    iconName: "GraduationCap" as const,
    slug: "gre-support",
    color: "scholarship" as const,
  },
  {
    title: "Application Fee Support",
    description: "Financial help for university application fees across multiple institutions.",
    iconName: "BookOpen" as const,
    slug: "application-fee-support",
    color: "default" as const,
  },
  {
    title: "Initial Deposit Support",
    description: "We support your first enrollment deposit to secure your admission offer.",
    iconName: "CreditCard" as const,
    slug: "initial-deposit-support",
    color: "success" as const,
  },
  {
    title: "English Test Fee Support",
    description: "Support for IELTS, TOEFL, and Duolingo English test fees.",
    iconName: "Languages" as const,
    slug: "english-test-support",
    color: "default" as const,
  },
  {
    title: "SEVIS Fee Support",
    description: "Help with U.S. SEVIS immigration fee required for your student visa.",
    iconName: "Stamp" as const,
    slug: "sevis-fee-support",
    color: "highlight" as const,
  },
  {
    title: "Visa Application Fee Support",
    description: "Support for visa application costs to study in your destination country.",
    iconName: "Plane" as const,
    slug: "visa-fee-support",
    color: "scholarship" as const,
  },
  {
    title: "Tuition Fee Support",
    description: "Partial scholarship assistance to help cover your tuition costs.",
    iconName: "DollarSign" as const,
    slug: "tuition-fee-support",
    color: "default" as const,
  },
  {
    title: "Transcript Evaluation Support",
    description: "Support for transcript verification and evaluation services.",
    iconName: "FileText" as const,
    slug: "transcript-support",
    color: "success" as const,
  },
  {
    title: "College Board Fee Support",
    description: "Support for SAT and related College Board services.",
    iconName: "School" as const,
    slug: "college-board-support",
    color: "default" as const,
  },
  {
    title: "Mentorship Program",
    description: "Personalized academic guidance from experienced scholars and mentors.",
    iconName: "Users" as const,
    slug: "mentorship-program",
    color: "highlight" as const,
  },
  {
    title: "Enrollment Deposit Support",
    description: "Financial help for confirming your admission and securing your spot.",
    iconName: "Building" as const,
    slug: "enrollment-deposit-support",
    color: "scholarship" as const,
  },
]

export function ServiceGrid() {
  return (
    <section id="services" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 max-w-2xl">
          <span className="mb-4 inline-block rounded-full bg-highlight/20 px-4 py-2 text-sm font-medium text-primary">
            OUR SERVICES
          </span>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
            Comprehensive Support for Your Academic Journey
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Choose from our range of financial support services designed to help you achieve 
            your dream of studying abroad.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {services.map((service) => (
            <ServiceCard key={service.slug} {...service} />
          ))}
        </div>
      </div>
    </section>
  )
}
