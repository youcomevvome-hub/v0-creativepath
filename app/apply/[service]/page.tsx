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
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="py-12 lg:py-16">
        <div className="mx-auto max-w-7xl px-4 lg:px-8">
          <EligibilityForm serviceSlug={serviceSlug} serviceTitle={service.title} />
        </div>
      </main>
      <Footer />
    </div>
  )
}
