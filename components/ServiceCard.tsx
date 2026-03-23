"use client"

import Link from "next/link"
import { ArrowRight,
FileCheck, GraduationCap, BookOpen, CreditCard,
Languages, Stamp, Plane, DollarSign, FileText,
School, Users, Building,
type LucideIcon
} from "lucide-react"

const iconMap: Record<string, LucideIcon> = {
  FileCheck,
  GraduationCap,
  BookOpen,
  CreditCard,
  Languages,
  Stamp,
  Plane,
  DollarSign,
  FileText,
  School,
  Users,
  Building,
}

type IconName = 
  | "FileCheck"
  | "GraduationCap"
  | "BookOpen"
  | "CreditCard"
  | "Languages"
  | "Stamp"
  | "Plane"
  | "DollarSign"
  | "FileText"
  | "School"
  | "Users"
  | "Building"

type CardColor =
  | "blue"
  | "navy"
  | "teal"
  | "green"
  | "lime"
  | "amber"
  | "orange"
  | "rose"
  | "purple"
  | "indigo"
  | "sky"
  | "slate"

interface ServiceCardProps {
  title: string
  description: string
  iconName: IconName
  slug: string
  cardColor: CardColor
}

// Every color pair: [bg, icon-bg, icon-color, title-color, text-color, arrow-bg, arrow-icon]
const palette: Record<CardColor, {
  bg: string
  iconBg: string
  iconColor: string
  title: string
  desc: string
  badge: string
  badgeText: string
  arrowBg: string
  arrowIcon: string
}> = {
  blue:   { bg: "#DBEAFE", iconBg: "#2563EB", iconColor: "#FFFFFF", title: "#1e3a5f", desc: "#3b5998", badge: "#BFDBFE", badgeText: "#1D4ED8", arrowBg: "#2563EB", arrowIcon: "#FFFFFF" },
  navy:   { bg: "#E0E7FF", iconBg: "#3730A3", iconColor: "#FFFFFF", title: "#1e2a5e", desc: "#4338CA", badge: "#C7D2FE", badgeText: "#3730A3", arrowBg: "#3730A3", arrowIcon: "#FFFFFF" },
  teal:   { bg: "#CCFBF1", iconBg: "#0D9488", iconColor: "#FFFFFF", title: "#0f4c42", desc: "#0F766E", badge: "#99F6E4", badgeText: "#0D9488", arrowBg: "#0D9488", arrowIcon: "#FFFFFF" },
  green:  { bg: "#DCFCE7", iconBg: "#16A34A", iconColor: "#FFFFFF", title: "#14532d", desc: "#166534", badge: "#BBF7D0", badgeText: "#16A34A", arrowBg: "#16A34A", arrowIcon: "#FFFFFF" },
  lime:   { bg: "#ECFCCB", iconBg: "#65A30D", iconColor: "#FFFFFF", title: "#3a5c00", desc: "#4D7C0F", badge: "#D9F99D", badgeText: "#65A30D", arrowBg: "#65A30D", arrowIcon: "#FFFFFF" },
  amber:  { bg: "#FEF3C7", iconBg: "#D97706", iconColor: "#FFFFFF", title: "#5c3d00", desc: "#92400E", badge: "#FDE68A", badgeText: "#D97706", arrowBg: "#D97706", arrowIcon: "#FFFFFF" },
  orange: { bg: "#FFEDD5", iconBg: "#EA580C", iconColor: "#FFFFFF", title: "#5c1e00", desc: "#C2410C", badge: "#FED7AA", badgeText: "#EA580C", arrowBg: "#EA580C", arrowIcon: "#FFFFFF" },
  rose:   { bg: "#FFE4E6", iconBg: "#E11D48", iconColor: "#FFFFFF", title: "#5c0a1a", desc: "#BE123C", badge: "#FECDD3", badgeText: "#E11D48", arrowBg: "#E11D48", arrowIcon: "#FFFFFF" },
  purple: { bg: "#F3E8FF", iconBg: "#9333EA", iconColor: "#FFFFFF", title: "#3b0764", desc: "#7E22CE", badge: "#E9D5FF", badgeText: "#9333EA", arrowBg: "#9333EA", arrowIcon: "#FFFFFF" },
  indigo: { bg: "#EEF2FF", iconBg: "#4F46E5", iconColor: "#FFFFFF", title: "#1e1b4b", desc: "#4338CA", badge: "#E0E7FF", badgeText: "#4F46E5", arrowBg: "#4F46E5", arrowIcon: "#FFFFFF" },
  sky:    { bg: "#E0F2FE", iconBg: "#0284C7", iconColor: "#FFFFFF", title: "#0c2d4b", desc: "#0369A1", badge: "#BAE6FD", badgeText: "#0284C7", arrowBg: "#0284C7", arrowIcon: "#FFFFFF" },
  slate:  { bg: "#F1F5F9", iconBg: "#475569", iconColor: "#FFFFFF", title: "#1e293b", desc: "#334155", badge: "#E2E8F0", badgeText: "#475569", arrowBg: "#475569", arrowIcon: "#FFFFFF" },
}

export function ServiceCard({ title, description, iconName, slug, cardColor }: ServiceCardProps) {
  const Icon = iconMap[iconName] || FileCheck
  const p = palette[cardColor] || palette.blue

  return (
    <Link href={`/apply/${slug}`} className="group block h-full">
      <article
        className="relative flex h-full flex-col overflow-hidden rounded-3xl p-6 shadow-md transition-all duration-300 group-hover:shadow-xl group-hover:-translate-y-1"
        style={{ backgroundColor: p.bg }}
      >
        {/* Top row — badge + icon */}
        <div className="mb-4 flex items-center justify-between">
          <span
            className="rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide"
            style={{ backgroundColor: p.badge, color: p.badgeText }}
          >
            Support
          </span>
          <span
            className="flex h-11 w-11 items-center justify-center rounded-full transition-transform duration-300 group-hover:scale-110"
            style={{ backgroundColor: p.iconBg }}
          >
            <Icon className="h-5 w-5" style={{ color: p.iconColor }} />
          </span>
        </div>

        {/* Title */}
        <h3
          className="mb-2 text-lg font-bold leading-tight"
          style={{ color: p.title }}
        >
          {title}
        </h3>

        {/* Description */}
        <p
          className="mb-6 flex-grow text-sm leading-relaxed"
          style={{ color: p.desc }}
        >
          {description}
        </p>

        {/* Arrow CTA */}
        <div className="flex items-center justify-end">
          <span
            className="flex h-9 w-9 items-center justify-center rounded-full transition-transform duration-300 group-hover:translate-x-1"
            style={{ backgroundColor: p.arrowBg }}
          >
            <ArrowRight className="h-4 w-4" style={{ color: p.arrowIcon }} />
          </span>
        </div>
      </article>
    </Link>
  )
}
