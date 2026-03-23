import { notFound } from "next/navigation"
import { Metadata } from "next"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { EligibilityForm } from "@/components/EligibilityForm"
import { getServiceBySlug, getAllServiceSlugs } from "@/lib/services"

interface ApplyPageProps {
  params: Promise<{ service: string }>
}

export async function generateStaticParams() {
  const slugs = getAllServiceSlugs()
  return slugs.map((service) => ({ service }))
}

export async function generateMetadata({ params }: ApplyPageProps): Promise<Metadata> {
  const { service: serviceSlug } = await params
  const service = getServiceBySlug(serviceSlug)

  if (!service) {
    return {
      title: "Service Not Found | Creative Path Inspired",
    }
  }

  return {
    title: `Apply for ${service.title} | Creative Path Inspired`,
    description: service.description,
  }
}

export default async function ApplyPage({ params }: ApplyPageProps) {
  const { service: serviceSlug } = await params
  const service = getServiceBySlug(serviceSlug)

  if (!service) {
    notFound()
  }

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />
      {/* Page Hero */}
      <div className="relative overflow-hidden bg-[#1E3A5F] py-16">
        <div
          className="absolute inset-0 opacity-20 blur-[1px]"
          style={{
            backgroundImage: "radial-gradient(circle, #F59E0B 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-3 text-xs font-semibold uppercase tracking-widest text-[#F59E0B] animate-in fade-in slide-in-from-left-4 duration-500">Apply Now</p>
          <h1 className="text-3xl font-bold text-white md:text-4xl lg:text-5xl text-balance animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
            {service.title}
          </h1>
          <p className="mt-3 max-w-2xl text-lg text-white/70 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">{service.description}</p>
        </div>
      </div>
      <main className="py-12 lg:py-16">
        <div className="px-6 lg:px-8">
          <EligibilityForm serviceSlug={serviceSlug} serviceTitle={service.title} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
