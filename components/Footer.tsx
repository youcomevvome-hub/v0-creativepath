import Link from "next/link"
import Image from "next/image"
import { Mail, MapPin, Phone, Instagram, Twitter, Youtube } from "lucide-react"

const footerLinks = {
  services: [
    { href: "/apply/wes-support",           label: "WES Evaluation" },
    { href: "/apply/gre-support",           label: "GRE / ETS Fees" },
    { href: "/apply/visa-fee-support",      label: "Visa Fee Support" },
    { href: "/apply/sevis-fee-support",     label: "SEVIS Fees" },
    { href: "/apply/mentorship-program",    label: "Mentorship Program" },
    { href: "/apply/tuition-fee-support",   label: "Tuition Support" },
  ],
  company: [
    { href: "/about",       label: "About Us" },
    { href: "/#how-it-works", label: "How It Works" },
    { href: "/#testimonials", label: "Success Stories" },
    { href: "/contact",     label: "Contact Us" },
  ],
  legal: [
    { href: "#", label: "Privacy Policy" },
    { href: "#", label: "Terms of Service" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="mx-auto max-w-7xl px-4 py-12 lg:px-8 lg:py-16">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">

          {/* Brand */}
          <div className="lg:col-span-1">
            {/* Logo on white pill so colors show clearly */}
            <Link href="/" className="mb-5 inline-flex items-center rounded-2xl bg-white px-4 py-2">
              <Image
                src="/images/logo.png"
                alt="Creative Path Inspired"
                width={180}
                height={56}
                className="h-12 w-auto object-contain"
              />
            </Link>

            <p className="mb-6 text-sm leading-relaxed text-white/70">
              Empowering students from Africa and around the world to achieve their
              academic dreams through financial support and mentorship.
            </p>

            <div className="flex flex-col gap-3 text-sm">
              <a
                href="mailto:vicecreativepath@gmail.com"
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                <Mail className="h-4 w-4 shrink-0 text-[#B7F34B]" />
                vicecreativepath@gmail.com
              </a>
              <a
                href="tel:+1234567890"
                className="flex items-center gap-2 text-white/70 transition-colors hover:text-white"
              >
                <Phone className="h-4 w-4 shrink-0 text-[#B7F34B]" />
                +1 (234) 567-890
              </a>
              <span className="flex items-center gap-2 text-white/70">
                <MapPin className="h-4 w-4 shrink-0 text-[#B7F34B]" />
                Global Operations
              </span>
            </div>

            {/* Socials */}
            <div className="mt-6 flex gap-3">
              {[
                { icon: Instagram, label: "Instagram" },
                { icon: Twitter,   label: "Twitter" },
                { icon: Youtube,   label: "YouTube" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 text-white/70 transition-colors hover:bg-[#B7F34B] hover:text-[#1F2937]"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#B7F34B]">Services</h3>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#B7F34B]">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal + CTA */}
          <div>
            <h3 className="mb-4 text-xs font-bold uppercase tracking-widest text-[#B7F34B]">Legal</h3>
            <ul className="mb-8 space-y-3">
              {footerLinks.legal.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <Link
              href="/apply/wes-support"
              className="inline-flex items-center gap-2 rounded-full bg-[#B7F34B] px-5 py-2.5 text-sm font-bold text-[#1F2937] transition-all hover:bg-[#c9f96a] hover:shadow-lg"
            >
              Apply Now &rarr;
            </Link>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-white/10 pt-8 md:flex-row">
          <p className="text-sm text-white/40">
            &copy; {new Date().getFullYear()} Creative Path Inspired. All rights reserved.
          </p>
          <p className="text-sm text-white/40">Empowering scholars worldwide</p>
        </div>
      </div>
    </footer>
  )
}
