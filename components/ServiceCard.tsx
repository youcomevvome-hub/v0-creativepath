"use client"

import Link from "next/link"
import { ArrowRight, LucideIcon } from "lucide-react"

interface ServiceCardProps {
  title: string
  description: string
  icon: LucideIcon
  slug: string
  color?: "default" | "highlight" | "scholarship" | "success"
}

const colorClasses = {
  default: "bg-card hover:shadow-xl",
  highlight: "bg-highlight/10 hover:bg-highlight/20",
  scholarship: "bg-scholarship/10 hover:bg-scholarship/20",
  success: "bg-success/10 hover:bg-success/20",
}

export function ServiceCard({ title, description, icon: Icon, slug, color = "default" }: ServiceCardProps) {
  return (
    <Link href={`/apply/${slug}`} className="group block">
      <article
        className={`relative h-full overflow-hidden rounded-3xl p-6 shadow-md transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl ${colorClasses[color]}`}
      >
        {/* Icon Badge */}
        <div className="mb-4 flex items-center justify-between">
          <span className="inline-flex items-center rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Support
          </span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/5">
            <Icon className="h-5 w-5 text-primary" />
          </div>
        </div>

        {/* Content */}
        <h3 className="mb-2 text-xl font-semibold text-foreground">{title}</h3>
        <p className="mb-6 text-sm leading-relaxed text-muted-foreground">{description}</p>

        {/* CTA */}
        <div className="flex items-center justify-between">
          <span className="text-sm font-medium text-primary">Apply Now</span>
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform group-hover:translate-x-1">
            <ArrowRight className="h-5 w-5" />
          </div>
        </div>
      </article>
    </Link>
  )
}
