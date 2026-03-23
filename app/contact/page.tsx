"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, MessageSquare } from "lucide-react"

const contactInfo = [
  {
    icon: Mail,
    label: "Email Us",
    value: "vicecreativepath@gmail.com",
    href: "mailto:vicecreativepath@gmail.com",
    color: "#2563EB",
    bg: "#DBEAFE",
  },
  {
    icon: Phone,
    label: "Call Us",
    value: "+1 (234) 567-890",
    href: "tel:+1234567890",
    color: "#0D9488",
    bg: "#CCFBF1",
  },
  {
    icon: Clock,
    label: "Response Time",
    value: "Within 24–48 hours",
    href: null,
    color: "#65A30D",
    bg: "#ECFCCB",
  },
  {
    icon: MapPin,
    label: "Operations",
    value: "Global — serving students worldwide",
    href: null,
    color: "#9333EA",
    bg: "#F3E8FF",
  },
]

export default function ContactPage() {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      })

      if (res.ok) {
        setSuccess(true)
        setForm({ name: "", email: "", phone: "", subject: "", message: "" })
      } else {
        throw new Error("Failed to send message")
      }
    } catch {
      setError("Something went wrong. Please try again or email us directly.")
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-[#F7F8FA]">
      <Navbar />
      <main>

        {/* ── Page Hero ─────────────────────────────── */}
        <section className="relative overflow-hidden bg-[#1F2937] py-20 lg:py-28">
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: "radial-gradient(circle, #B7F34B 1px, transparent 1px)",
              backgroundSize: "28px 28px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-4 lg:px-8">
            <p className="mb-3 text-xs font-bold uppercase tracking-widest text-[#B7F34B]">
              Get in Touch
            </p>
            <h1 className="mb-4 text-4xl font-black uppercase leading-tight text-white md:text-6xl text-balance">
              We Would Love<br />
              <span className="text-[#B7F34B]">to Hear From You</span>
            </h1>
            <p className="max-w-xl text-lg text-white/70">
              Have questions about our support services? Ready to apply?
              Reach out and our team will get back to you within 24–48 hours.
            </p>
          </div>
        </section>

        {/* ── Contact Info Cards ────────────────────── */}
        <section className="py-12">
          <div className="mx-auto max-w-7xl px-4 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item) => (
                <div
                  key={item.label}
                  className="rounded-3xl p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-xl"
                  style={{ backgroundColor: item.bg }}
                >
                  <div
                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: item.color }}
                  >
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                  <p className="mb-1 text-xs font-bold uppercase tracking-widest text-[#6B7280]">{item.label}</p>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="text-sm font-semibold text-[#1F2937] underline-offset-2 hover:underline"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-semibold text-[#1F2937]">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Contact Form ──────────────────────────── */}
        <section className="pb-20 pt-4">
          <div className="mx-auto max-w-3xl px-4 lg:px-8">

            {success ? (
              <div className="rounded-3xl bg-white p-12 text-center shadow-xl">
                <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#DCFCE7]">
                  <CheckCircle className="h-10 w-10 text-[#16A34A]" />
                </div>
                <h2 className="mb-3 text-2xl font-bold text-[#1F2937]">Message Sent!</h2>
                <p className="mb-6 text-[#6B7280]">
                  Thank you for reaching out. We will reply to{" "}
                  <span className="font-semibold text-[#2563EB]">{form.email || "your email"}</span>{" "}
                  within 24–48 hours.
                </p>
                <button
                  onClick={() => setSuccess(false)}
                  className="rounded-full bg-[#1F2937] px-8 py-3 text-sm font-semibold text-white transition-all hover:bg-[#374151]"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <div className="rounded-3xl bg-white p-8 shadow-xl md:p-12">
                {/* Form header */}
                <div className="mb-8 flex items-center gap-4 border-b border-[#E5E7EB] pb-6">
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#1F2937]">
                    <MessageSquare className="h-6 w-6 text-[#B7F34B]" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-[#1F2937]">Send Us a Message</h2>
                    <p className="text-sm text-[#6B7280]">All fields marked * are required</p>
                  </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name + Email */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-sm font-semibold text-[#374151]">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="name"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        placeholder="Your full name"
                        className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none ring-0 transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-sm font-semibold text-[#374151]">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        id="email"
                        name="email"
                        type="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        placeholder="you@example.com"
                        className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none ring-0 transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20"
                      />
                    </div>
                  </div>

                  {/* Phone + Subject */}
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-sm font-semibold text-[#374151]">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="+1 (234) 567-890"
                        className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none ring-0 transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20"
                      />
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="subject" className="text-sm font-semibold text-[#374151]">
                        Subject <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        value={form.subject}
                        onChange={handleChange}
                        required
                        className="rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] outline-none ring-0 transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20"
                      >
                        <option value="">Select a subject</option>
                        <option value="wes">WES Evaluation Support</option>
                        <option value="gre">GRE / ETS Fee Support</option>
                        <option value="visa">Visa / SEVIS Fee Support</option>
                        <option value="mentorship">Mentorship Program</option>
                        <option value="tuition">Tuition Fee Support</option>
                        <option value="general">General Inquiry</option>
                        <option value="other">Other</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-sm font-semibold text-[#374151]">
                      Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you..."
                      className="resize-none rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none ring-0 transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20"
                    />
                  </div>

                  {error && (
                    <p className="rounded-xl bg-red-50 px-4 py-3 text-sm text-red-600">{error}</p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#1F2937] py-4 text-base font-bold text-white shadow-lg transition-all hover:bg-[#374151] hover:shadow-xl disabled:opacity-60"
                  >
                    {loading ? (
                      <>
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-center text-xs text-[#9CA3AF]">
                    Or email us directly at{" "}
                    <a href="mailto:vicecreativepath@gmail.com" className="font-semibold text-[#2563EB] hover:underline">
                      vicecreativepath@gmail.com
                    </a>
                  </p>
                </form>
              </div>
            )}
          </div>
        </section>

      </main>
      <Footer />
    </div>
  )
}
