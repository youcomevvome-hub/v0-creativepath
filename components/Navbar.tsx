"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/",            label: "Home" },
  { href: "/#services",  label: "Services" },
  { href: "/about",      label: "About Us" },
  { href: "/contact",    label: "Contact" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-white/90 backdrop-blur-md">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 lg:px-8">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <div className="relative h-14 w-52">
            <Image
              src="/images/logo.png"
              alt="Creative Path Inspired"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full bg-[#F3F4F6] px-2 py-1 md:flex">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.replace("/#", "/"))
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-colors ${
                  isActive
                    ? "bg-white text-[#1F2937] shadow-sm"
                    : "text-[#6B7280] hover:bg-white hover:text-[#1F2937]"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          <Button
            variant="outline"
            className="rounded-full border-[#1F2937] text-[#1F2937] hover:bg-[#1F2937] hover:text-white"
            asChild
          >
            <Link href="/contact">
              Contact Us &rsaquo;
            </Link>
          </Button>
          <Button
            className="rounded-full bg-[#1F2937] text-white hover:bg-[#1F2937]/90"
            asChild
          >
            <Link href="/apply/wes-support">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full p-2 transition-colors hover:bg-[#F3F4F6] md:hidden"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="border-t border-border bg-white px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-[#1F2937] transition-colors hover:bg-[#F3F4F6]"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full rounded-full" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button className="w-full rounded-full bg-[#1F2937] text-white" asChild>
                <Link href="/apply/wes-support">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
