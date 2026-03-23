"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Image from "next/image"
import Link from "next/link"
import { Mail, Phone, MapPin, CheckCircle, Clock, Heart, Users, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "vicecreativepath@gmail.com", href: "mailto:vicecreativepath@gmail.com" },
  { icon: Phone, label: "Call Us", value: "+447404599897", href: "tel:+447404599897" },
  { icon: Clock, label: "Response Time", value: "Within 24-48 hours", href: null },
  { icon: MapPin, label: "Operations", value: "Global - serving students worldwide", href: null },
]

const stats = [
  { value: "10x", label: "More effective than traditional support" },
  { value: "88%", label: "Success rate for applications" },
  { value: "$614k", label: "Total fees covered" },
  { value: "+600", label: "Students supported globally" },
]

export default function ContactPage() {
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")
  const [activeSection, setActiveSection] = useState<"contact" | "mentor" | "support">("contact")

  // Contact form
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  // Mentor form
  const [mentorForm, setMentorForm] = useState({ name: "", email: "", country: "", expertise: "", linkedin: "", motivation: "" })
  // Support form
  const [supportForm, setSupportForm] = useState({ name: "", email: "", amount: "", frequency: "one-time", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = activeSection === "contact" ? contactForm : activeSection === "mentor" ? mentorForm : supportForm

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: activeSection }),
      })

      if (res.ok) {
        setSuccess(true)
      } else {
        throw new Error("Failed to send")
      }
    } catch {
      setError("Something went wrong. Please try again.")
    } finally {
      setLoading(false)
    }
  }

  const inputClass = "w-full rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1D1D1F] px-4 py-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-colors focus:border-[#1E3A5F] dark:focus:border-white"

  return (
    <div className="min-h-screen bg-white dark:bg-[#0C1220] transition-colors">
      <Navbar />

      <main>
        {/* Hero Banner with Team Image */}
        <section className="relative overflow-hidden bg-gray-100 dark:bg-[#1D1D1F] py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="rounded-3xl overflow-hidden bg-white dark:bg-[#0C1220] shadow-2xl dark:shadow-white/5 border border-gray-200 dark:border-white/10">
              {/* Header */}
              <div className="p-6 flex items-center justify-between border-b border-gray-100 dark:border-gray-800">
                <div className="flex items-center gap-2">
                  <div className="h-8 w-8 rounded-lg bg-[#1E3A5F] flex items-center justify-center">
                    <span className="text-white text-xs font-bold">CP</span>
                  </div>
                  <span className="font-semibold text-gray-900 dark:text-white">Creative Path Inspired</span>
                </div>
                <div className="hidden md:flex gap-6 text-sm">
                  <button onClick={() => { setActiveSection("contact"); setSuccess(false); }} className={activeSection === "contact" ? "text-[#1E3A5F] dark:text-white font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-[#1E3A5F] dark:hover:text-white"}>Contact</button>
                  <button onClick={() => { setActiveSection("mentor"); setSuccess(false); }} className={activeSection === "mentor" ? "text-[#1E3A5F] dark:text-white font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-[#1E3A5F] dark:hover:text-white"}>Become a Mentor</button>
                  <button onClick={() => { setActiveSection("support"); setSuccess(false); }} className={activeSection === "support" ? "text-[#1E3A5F] dark:text-white font-semibold" : "text-gray-600 dark:text-gray-400 hover:text-[#1E3A5F] dark:hover:text-white"}>Support Us</button>
                </div>
              </div>

              {/* Team Image */}
              <div className="relative h-[300px] lg:h-[400px]">
                <Image
                  src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1200"
                  alt="Our Global Team"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-black/30" />
              </div>

              {/* Headline */}
              <div className="p-8 lg:p-12 text-center">
                <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                  Connect with Our Team
                </h1>
                <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
                  Whether you need support, want to mentor, or contribute to our mission — we&apos;re here to help.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-12 bg-gray-100 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-6xl px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {stats.map((stat, idx) => (
                <div key={idx} className="rounded-3xl bg-white dark:bg-[#0C1220] border border-gray-200 dark:border-white/10 p-6 text-center shadow-sm">
                  <p className="text-3xl lg:text-4xl font-bold text-[#1E3A5F] dark:text-white">{stat.value}</p>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Info Cards */}
        <section className="py-16 bg-white dark:bg-[#0C1220]">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="group rounded-2xl bg-gray-50 dark:bg-[#1D1D1F] border border-gray-200 dark:border-white/10 p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:hover:shadow-white/5 animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-black dark:bg-white transition-transform group-hover:scale-110">
                    <item.icon className="h-5 w-5 text-white dark:text-black" />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#1E3A5F] dark:hover:text-gray-300 transition-colors">
                      {item.value}
                    </a>
                  ) : (
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{item.value}</p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Mentor Section */}
        <section className="py-16 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="relative rounded-3xl overflow-hidden h-[400px]">
                <Image
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Mentors helping students"
                  fill
                  className="object-cover"
                />
              </div>
              <div>
                <span className="inline-block rounded-full bg-[#1E3A5F]/10 dark:bg-white/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#1E3A5F] dark:text-white mb-4">
                  Mentorship
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Become a Mentor
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Share your expertise with students from Africa and around the world. Help guide them through applications, interviews, and their academic journey. Your experience can change someone&apos;s life.
                </p>
                <ul className="space-y-3 mb-8">
                  {["Share knowledge with aspiring scholars", "Flexible mentoring schedule", "Join a global community of mentors", "Make a lasting impact"].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700 dark:text-gray-300">
                      <CheckCircle className="h-5 w-5 text-[#22C55E]" />
                      {item}
                    </li>
                  ))}
                </ul>
                <Button className="rounded-full bg-[#1E3A5F] text-white hover:bg-[#152C4A]" onClick={() => { setActiveSection("mentor"); window.scrollTo({ top: document.getElementById('form-section')?.offsetTop || 0, behavior: 'smooth' }); }}>
                  Apply as Mentor
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Support Section */}
        <section className="py-16 bg-white dark:bg-[#0C1220]">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="grid gap-12 lg:grid-cols-2 items-center">
              <div className="order-2 lg:order-1">
                <span className="inline-block rounded-full bg-[#F59E0B]/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-[#F59E0B] mb-4">
                  Support
                </span>
                <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 dark:text-white mb-6">
                  Support Our Mission
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                  Your contribution directly helps students cover application fees, testing costs, and visa expenses. Every dollar makes a difference in someone&apos;s educational journey.
                </p>
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {[
                    { amount: "$25", desc: "Covers transcript fees" },
                    { amount: "$50", desc: "Covers application fee" },
                    { amount: "$100", desc: "Covers GRE registration" },
                    { amount: "$250", desc: "Covers visa fees" },
                  ].map((item, i) => (
                    <div key={i} className="rounded-xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1D1D1F] p-4 text-center">
                      <p className="text-2xl font-bold text-[#F59E0B]">{item.amount}</p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{item.desc}</p>
                    </div>
                  ))}
                </div>
                <Button className="rounded-full bg-[#F59E0B] text-white hover:bg-[#D97706]" onClick={() => { setActiveSection("support"); window.scrollTo({ top: document.getElementById('form-section')?.offsetTop || 0, behavior: 'smooth' }); }}>
                  Make a Donation
                  <Heart className="ml-2 h-4 w-4" />
                </Button>
              </div>
              <div className="relative rounded-3xl overflow-hidden h-[400px] order-1 lg:order-2">
                <Image
                  src="https://images.pexels.com/photos/6646918/pexels-photo-6646918.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Supporting students"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Form Section */}
        <section id="form-section" className="py-16 bg-gray-50 dark:bg-[#1D1D1F]">
          <div className="mx-auto max-w-3xl px-6 lg:px-8">
            {/* Mobile Tab Navigation */}
            <div className="mb-8 flex justify-center md:hidden">
              <div className="inline-flex rounded-full bg-white dark:bg-[#0C1220] p-1.5 shadow-sm border border-gray-200 dark:border-gray-800">
                {[
                  { id: "contact" as const, label: "Contact", icon: Mail },
                  { id: "mentor" as const, label: "Mentor", icon: Users },
                  { id: "support" as const, label: "Support", icon: Heart },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveSection(tab.id); setSuccess(false); setError(""); }}
                    className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-medium transition-all ${
                      activeSection === tab.id
                        ? "bg-[#1E3A5F] text-white shadow-md"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <tab.icon className="h-3.5 w-3.5" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Container */}
            <div className="rounded-3xl bg-white dark:bg-[#0C1220] border border-gray-200 dark:border-white/10 p-8 shadow-xl dark:shadow-white/5 md:p-12 transition-all">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 text-center">
                {activeSection === "contact" ? "Get in Touch" : activeSection === "mentor" ? "Mentor Application" : "Make a Donation"}
              </h2>
              <p className="text-gray-600 dark:text-gray-400 text-center mb-8">
                {activeSection === "contact" 
                  ? "We'd love to hear from you. Fill out the form below." 
                  : activeSection === "mentor" 
                  ? "Join our network of mentors making a difference."
                  : "Your support helps students achieve their dreams."}
              </p>

              {success ? (
                <div className="py-12 text-center animate-in fade-in zoom-in duration-300">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#DCFCE7] dark:bg-[#166534]">
                    <CheckCircle className="h-10 w-10 text-[#16A34A] dark:text-[#86EFAC]" />
                  </div>
                  <h3 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                    {activeSection === "contact" ? "Message Sent!" : activeSection === "mentor" ? "Application Received!" : "Thank You!"}
                  </h3>
                  <p className="mb-8 text-gray-600 dark:text-gray-400">
                    {activeSection === "contact" 
                      ? "We will reply within 24-48 hours." 
                      : activeSection === "mentor" 
                      ? "We will review your application and get back to you soon."
                      : "Your generosity helps students achieve their dreams."}
                  </p>
                  <Button onClick={() => setSuccess(false)} className="rounded-full bg-[#1E3A5F] text-white px-8">
                    {activeSection === "contact" ? "Send Another" : "Go Back"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Form */}
                  {activeSection === "contact" && (
                    <>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name *</label>
                          <input
                            required
                            value={contactForm.name}
                            onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })}
                            placeholder="Your full name"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Email *</label>
                          <input
                            type="email"
                            required
                            value={contactForm.email}
                            onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })}
                            placeholder="you@example.com"
                            className={inputClass}
                          />
                        </div>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Phone</label>
                          <input
                            type="tel"
                            value={contactForm.phone}
                            onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })}
                            placeholder="+447404599897"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Subject *</label>
                          <select
                            required
                            value={contactForm.subject}
                            onChange={(e) => setContactForm({ ...contactForm, subject: e.target.value })}
                            className={inputClass}
                          >
                            <option value="">Select a subject</option>
                            <option value="wes">WES Evaluation Support</option>
                            <option value="gre">GRE / ETS Fee Support</option>
                            <option value="visa">Visa / SEVIS Fee Support</option>
                            <option value="mentorship">Mentorship Program</option>
                            <option value="general">General Inquiry</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Message *</label>
                        <textarea
                          required
                          rows={5}
                          value={contactForm.message}
                          onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })}
                          placeholder="Tell us how we can help you..."
                          className={inputClass + " resize-none"}
                        />
                      </div>
                    </>
                  )}

                  {/* Mentor Form */}
                  {activeSection === "mentor" && (
                    <>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name *</label>
                          <input required value={mentorForm.name} onChange={(e) => setMentorForm({ ...mentorForm, name: e.target.value })} placeholder="Your full name" className={inputClass} />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Email *</label>
                          <input type="email" required value={mentorForm.email} onChange={(e) => setMentorForm({ ...mentorForm, email: e.target.value })} placeholder="you@example.com" className={inputClass} />
                        </div>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Country *</label>
                          <input required value={mentorForm.country} onChange={(e) => setMentorForm({ ...mentorForm, country: e.target.value })} placeholder="Your country" className={inputClass} />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Area of Expertise *</label>
                          <select required value={mentorForm.expertise} onChange={(e) => setMentorForm({ ...mentorForm, expertise: e.target.value })} className={inputClass}>
                            <option value="">Select expertise</option>
                            <option value="applications">University Applications</option>
                            <option value="gre">GRE/Test Prep</option>
                            <option value="visa">Visa Process</option>
                            <option value="career">Career Guidance</option>
                            <option value="other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">LinkedIn Profile</label>
                        <input value={mentorForm.linkedin} onChange={(e) => setMentorForm({ ...mentorForm, linkedin: e.target.value })} placeholder="https://linkedin.com/in/..." className={inputClass} />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Why do you want to mentor? *</label>
                        <textarea required rows={4} value={mentorForm.motivation} onChange={(e) => setMentorForm({ ...mentorForm, motivation: e.target.value })} placeholder="Tell us about your motivation..." className={inputClass + " resize-none"} />
                      </div>
                    </>
                  )}

                  {/* Support Form */}
                  {activeSection === "support" && (
                    <>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name *</label>
                          <input required value={supportForm.name} onChange={(e) => setSupportForm({ ...supportForm, name: e.target.value })} placeholder="Your full name" className={inputClass} />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Email *</label>
                          <input type="email" required value={supportForm.email} onChange={(e) => setSupportForm({ ...supportForm, email: e.target.value })} placeholder="you@example.com" className={inputClass} />
                        </div>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Donation Amount *</label>
                          <select required value={supportForm.amount} onChange={(e) => setSupportForm({ ...supportForm, amount: e.target.value })} className={inputClass}>
                            <option value="">Select amount</option>
                            <option value="25">$25 - Transcript fees</option>
                            <option value="50">$50 - Application fee</option>
                            <option value="100">$100 - GRE registration</option>
                            <option value="250">$250 - Visa fees</option>
                            <option value="custom">Custom amount</option>
                          </select>
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Frequency</label>
                          <select value={supportForm.frequency} onChange={(e) => setSupportForm({ ...supportForm, frequency: e.target.value })} className={inputClass}>
                            <option value="one-time">One-time donation</option>
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Message (Optional)</label>
                        <textarea rows={3} value={supportForm.message} onChange={(e) => setSupportForm({ ...supportForm, message: e.target.value })} placeholder="Any message for us..." className={inputClass + " resize-none"} />
                      </div>
                    </>
                  )}

                  {error && (
                    <div className="rounded-xl bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 p-4 text-sm text-red-600 dark:text-red-400">
                      {error}
                    </div>
                  )}

                  <Button
                    type="submit"
                    disabled={loading}
                    className={`w-full rounded-full py-4 text-white transition-all h-14 text-base font-semibold ${
                      activeSection === "support" ? "bg-[#F59E0B] hover:bg-[#D97706]" : "bg-[#1E3A5F] hover:bg-[#152C4A]"
                    }`}
                  >
                    {loading ? "Sending..." : activeSection === "contact" ? "Send Message" : activeSection === "mentor" ? "Submit Application" : "Complete Donation"}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
