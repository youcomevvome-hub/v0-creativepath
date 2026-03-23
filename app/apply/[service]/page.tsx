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
    <div className="min-h-screen bg-white dark:bg-black transition-colors">
      <Navbar />
      
      {/* Page Hero */}
      <div className="relative overflow-hidden bg-gradient-to-b from-gray-50 to-white dark:from-gray-900 dark:to-black py-20 lg:py-28">
        <div
          className="absolute inset-0 opacity-20 dark:opacity-10"
          style={{
            backgroundImage: "radial-gradient(circle, #000 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="absolute inset-0 backdrop-blur-sm" />
        
        <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
          <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-gray-600 dark:text-gray-400 animate-in fade-in slide-in-from-left-4 duration-500">Apply for Support</p>
          <h1 className="text-4xl font-bold text-black dark:text-white md:text-5xl lg:text-6xl text-balance animate-in fade-in slide-in-from-left-4 duration-500 delay-100">
            {service.title}
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-gray-600 dark:text-gray-400 animate-in fade-in slide-in-from-left-4 duration-500 delay-200">{service.description}</p>
        </div>
      </div>

      <main className="py-12 lg:py-16">
        <div className="mx-auto max-w-5xl px-6 lg:px-8">
          <EligibilityForm serviceSlug={serviceSlug} serviceTitle={service.title} />
        </div>
      </main>

      {/* Ready to Get Started CTA */}
      <section className="relative overflow-hidden py-20 lg:py-28 border-t border-gray-200 dark:border-gray-800">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: "url('https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=1600')",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <div className="absolute inset-0 bg-black/60 dark:bg-black/70" />
        
        <div className="relative mx-auto max-w-4xl px-6 text-center lg:px-8">
          <h2 className="mb-6 text-4xl font-bold text-white lg:text-5xl">
            Ready to Transform Your Future?
          </h2>
          <p className="mb-8 text-lg text-white/80 max-w-2xl mx-auto">
            Take the first step towards your dream university. Our team is here to support you every step of the way.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="#apply" className="inline-flex items-center gap-2 rounded-full bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-all">
              Continue Application
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </a>
            <a href="/contact" className="inline-flex items-center gap-2 rounded-full border-2 border-white text-white px-8 py-3 font-semibold hover:bg-white hover:text-black transition-all">
              Need Help?
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
