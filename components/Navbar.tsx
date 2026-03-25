"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { useTheme } from "next-themes"
import { Menu, X, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
]

// Animated orbiting balls around logo
function AnimatedBalls() {
  return (
    <div className="absolute inset-0 pointer-events-none">
      {/* Ball 1 - orbiting */}
      <div 
        className="absolute w-2 h-2 rounded-full bg-[#1E3A5F]"
        style={{
          animation: 'orbit1 3s linear infinite',
          top: '50%',
          left: '50%',
        }}
      />
      {/* Ball 2 - orbiting opposite */}
      <div 
        className="absolute w-1.5 h-1.5 rounded-full bg-[#F59E0B]"
        style={{
          animation: 'orbit2 4s linear infinite',
          top: '50%',
          left: '50%',
        }}
      />
      {/* Ball 3 - orbiting */}
      <div 
        className="absolute w-1 h-1 rounded-full bg-gray-400"
        style={{
          animation: 'orbit3 2.5s linear infinite',
          top: '50%',
          left: '50%',
        }}
      />
      <style>{`
        @keyframes orbit1 {
          0% { transform: translate(-50%, -50%) rotate(0deg) translateX(30px) rotate(0deg); }
          100% { transform: translate(-50%, -50%) rotate(360deg) translateX(30px) rotate(-360deg); }
        }
        @keyframes orbit2 {
          0% { transform: translate(-50%, -50%) rotate(180deg) translateX(35px) rotate(-180deg); }
          100% { transform: translate(-50%, -50%) rotate(540deg) translateX(35px) rotate(-540deg); }
        }
        @keyframes orbit3 {
          0% { transform: translate(-50%, -50%) rotate(90deg) translateX(25px) rotate(-90deg); }
          100% { transform: translate(-50%, -50%) rotate(450deg) translateX(25px) rotate(-450deg); }
        }
      `}</style>
    </div>
  )
}

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname()
  const { theme, setTheme } = useTheme()

  useEffect(() => {
    setMounted(true)
  }, [])

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-gray-800 bg-white/95 dark:bg-[#0C1220]/95 backdrop-blur-md transition-colors">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">

        {/* Logo with orbiting animation */}
        <Link href="/" className="flex items-center gap-2 shrink-0 group">
          <div className="relative h-12 w-48 rounded-lg bg-white dark:bg-white p-1 group-hover:shadow-lg transition-all duration-300 group-hover:scale-105 overflow-visible">
            <Image
              src="/images/logo.png"
              alt="Creative Path Inspired"
              fill
              className="object-contain"
              priority
            />
            <AnimatedBalls />
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 rounded-full bg-gray-100 dark:bg-gray-800 px-2 py-1 md:flex">
          {navLinks.map((link) => {
            const isActive = link.href === "/" ? pathname === "/" : pathname.startsWith(link.href.replace("/#", "/"))
            return (
              <Link
                key={link.label}
                href={link.href}
                className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? "bg-white dark:bg-gray-700 text-gray-900 dark:text-white shadow-sm"
                    : "text-gray-600 dark:text-gray-400 hover:bg-white/50 dark:hover:bg-gray-700/50 hover:text-gray-900 dark:hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            )
          })}
        </div>

        {/* Desktop CTA */}
        <div className="hidden items-center gap-3 md:flex">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 transition-all duration-200 hover:bg-gray-100 dark:hover:bg-gray-700"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )
            ) : (
              <div className="h-5 w-5" />
            )}
          </button>

          <a
            href="https://whatsapp.com/channel/0029Vb7zSwH6LwHqQBzAxM0A"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp channel"
            className="flex h-10 w-10 items-center justify-center rounded-full border border-[#25D366] text-[#25D366] hover:bg-[#25D366] hover:text-white transition-all duration-200"
          >
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
          <Button
            variant="outline"
            className="rounded-full border-[#1E3A5F] text-[#1E3A5F] hover:bg-[#1E3A5F] hover:text-white transition-all duration-200"
            asChild
          >
            <Link href="/contact">
              Contact Us &rsaquo;
            </Link>
          </Button>
          <Button
            className="rounded-full bg-[#1E3A5F] text-white hover:bg-[#152C4A] transition-all duration-200"
            asChild
          >
            <Link href="/apply/wes-support">Apply Now</Link>
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <div className="flex items-center gap-2 md:hidden">
          <button
            onClick={toggleTheme}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300"
            aria-label="Toggle theme"
          >
            {mounted ? (
              theme === "dark" ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )
            ) : (
              <div className="h-5 w-5" />
            )}
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="animate-in slide-in-from-top-2 duration-200 border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-[#0C1220] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-2">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="rounded-xl px-4 py-3 text-sm font-medium text-gray-900 dark:text-white transition-colors hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-4 flex flex-col gap-2">
              <Button variant="outline" className="w-full rounded-full border-[#1E3A5F] text-[#1E3A5F]" asChild>
                <Link href="/contact">Contact Us</Link>
              </Button>
              <Button className="w-full rounded-full bg-[#1E3A5F] text-white" asChild>
                <Link href="/apply/wes-support">Apply Now</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
