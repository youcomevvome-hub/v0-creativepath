import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone } from "lucide-react"

const footerLinks = {
  services: [
    { href: "/apply/wes-support", label: "WES Evaluation" },
    { href: "/apply/gre-support", label: "GRE/ETS Fees" },
    { href: "/apply/visa-fee-support", label: "Visa Support" },
    { href: "/apply/mentorship-program", label: "Mentorship" },
  ],
  company: [
    { href: "#", label: "About Us" },
    { href: "#how-it-works", label: "How It Works" },
    { href: "#testimonials", label: "Success Stories" },
    { href: "#", label: "Contact" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
    { href: "#", label: "Cookie Policy" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Image
                src="/images/logo.png"
                alt="Creative Path Inspired"
                width={150}
                height={50}
                className="h-10 w-auto brightness-0 invert"
              />
            </Link>
            <p className="mb-6 text-sm leading-relaxed text-primary-foreground/80">
              Empowering students from Africa and around the world to achieve their 
              academic dreams through financial support and mentorship.
            </p>
            <div className="flex flex-col gap-3 text-sm">
              <a href="mailto:support@creativepath.org" className="flex items-center gap-2 text-primary-foreground/80 hover:text-primary-foreground">
                <Mail className="h-4 w-4" />
                support@creativepath.org
              </a>
              <span className="flex items-center gap-2 text-primary-foreground/80">
                <MapPin className="h-4 w-4" />
                Global Operations
              </span>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-primary-foreground/80 transition-colors hover:text-primary-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-primary-foreground/10 pt-8 md:flex-row">
          <p className="text-sm text-primary-foreground/60">
            &copy; {new Date().getFullYear()} Creative Path Inspired. All rights reserved.
          </p>
          <p className="text-sm text-primary-foreground/60">
            Empowering scholars worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
