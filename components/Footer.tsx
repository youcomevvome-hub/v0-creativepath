import Link from 'next/link'
import Image from 'next/image'
import { Mail, MapPin, Phone, Instagram, Twitter, Youtube } from 'lucide-react'

const footerLinks = {
  services: [
    { href: '/services', label: 'All Services' },
    { href: '/services', label: 'WES Evaluation' },
    { href: '/services', label: 'GRE Support' },
    { href: '/services', label: 'Visa Support' },
    { href: '/services', label: 'Mentorship' },
  ],
  company: [
    { href: '/', label: 'Home' },
    { href: '/services', label: 'Services' },
    { href: '/about', label: 'About Us' },
    { href: '/contact', label: 'Contact' },
  ],
  legal: [
    { href: '/privacy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#0A0F1A] dark:bg-[#0A0F1A] text-white transition-colors">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-20">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">

          {/* Brand - 2 cols on mobile, 1 on larger */}
          <div className="lg:col-span-2">
            {/* Logo */}
            <Link href="/" className="mb-6 inline-flex items-center">
              <div className="h-12 w-48 relative bg-white rounded-lg p-1">
                <Image
                  src="/images/logo.png"
                  alt="Creative Path Inspired"
                  fill
                  className="object-contain"
                />
              </div>
            </Link>

            <p className="mb-8 text-sm leading-relaxed text-white/70 max-w-md">
              Empowering students from Africa and around the world to achieve their academic dreams through financial support and mentorship.
            </p>

            {/* Contact Info */}
            <div className="mb-8 flex flex-col gap-3 text-sm">
              <a
                href="mailto:vicecreativepath@gmail.com"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Mail className="h-5 w-5 shrink-0" />
                vicecreativepath@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-3 text-white/70 hover:text-white transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0" />
                +1 (234) 567-890
              </a>
              <span className="flex items-center gap-3 text-white/70">
                <MapPin className="h-5 w-5 shrink-0" />
                Global Operations
              </span>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {[
                { icon: Instagram, label: 'Instagram', href: 'https://instagram.com' },
                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com' },
                { icon: Youtube, label: 'YouTube', href: 'https://youtube.com' },
              ].map(({ icon: Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white/70 hover:bg-white hover:text-black transition-all duration-300"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal & CTA */}
          <div>
            <h3 className="mb-6 text-xs font-bold uppercase tracking-widest text-white">Legal</h3>
            <ul className="mb-8 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/services"
              className="inline-flex items-center gap-2 rounded-full bg-[#1E3A5F] text-white px-6 py-3 text-sm font-semibold hover:bg-[#152C4A] transition-all hover:shadow-lg"
            >
              Get Started →
            </Link>
          </div>
        </div>

        {/* Divider */}
        <div className="my-12 h-px bg-white/10" />

        {/* Bottom Bar */}
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-sm text-white/60">
            © {new Date().getFullYear()} Creative Path Inspired. All rights reserved.
          </p>
          <p className="text-sm text-white/60">
            Empowering scholars worldwide
          </p>
        </div>
      </div>
    </footer>
  )
}
