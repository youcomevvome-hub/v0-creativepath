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
    <div className="min-h-screen bg-[#F7F8FA]">
      <Navbar />
      {/* Page Hero */}
      <div className="relative overflow-hidden bg-[#1F2937] py-12">
        <div
          className="absolute inset-0 opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #B7F34B 1px, transparent 1px)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
          <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#B7F34B]">Apply Now</p>
          <h1 className="text-3xl font-black uppercase text-white md:text-4xl text-balance">
            {service.title}
          </h1>
          <p className="mt-2 text-white/60">{service.description}</p>
        </div>
      </div>
      <main className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <EligibilityForm serviceSlug={serviceSlug} serviceTitle={service.title} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
