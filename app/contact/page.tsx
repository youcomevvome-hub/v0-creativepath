"use client"

import { useState } from "react"
import { Navbar } from "@/components/Navbar"
import { Footer } from "@/components/Footer"
import Link from "next/link"
import { Mail, Phone, MapPin, Send, CheckCircle, Clock, Heart, Users, DollarSign, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const contactInfo = [
  { icon: Mail, label: "Email Us", value: "vicecreativepath@gmail.com", href: "mailto:vicecreativepath@gmail.com" },
  { icon: Phone, label: "Call Us", value: "+1 (234) 567-890", href: "tel:+1234567890" },
  { icon: Clock, label: "Response Time", value: "Within 24-48 hours", href: null },
  { icon: MapPin, label: "Operations", value: "Global - serving students worldwide", href: null },
]

const tabs = [
  { id: "contact", label: "Contact Us", icon: Mail },
  { id: "mentor", label: "Become a Mentor", icon: Users },
  { id: "donate", label: "Support Our Mission", icon: Heart },
]

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState("contact")
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState("")

  // Contact form
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" })
  // Mentor form
  const [mentorForm, setMentorForm] = useState({ name: "", email: "", country: "", expertise: "", linkedin: "", motivation: "" })
  // Donate form
  const [donateForm, setDonateForm] = useState({ name: "", email: "", amount: "", frequency: "", message: "" })

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    const formData = activeTab === "contact" ? contactForm : activeTab === "mentor" ? mentorForm : donateForm

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: activeTab }),
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

  const inputClass = "w-full rounded-2xl border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-[#2D2D2F] px-4 py-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none transition-all focus:border-[#2563EB] focus:bg-white dark:focus:bg-[#1D1D1F] focus:ring-4 focus:ring-[#2563EB]/10"

  return (
    <div className="min-h-screen bg-[#F5F5F7] dark:bg-[#0A0A0A] transition-colors">
      <Navbar />

      <main>
        {/* Hero - Apple style minimal */}
        <section className="relative overflow-hidden bg-[#1D1D1F] py-20 lg:py-28">
          <div
            className="absolute inset-0 opacity-20 blur-[1px]"
            style={{
              backgroundImage: "radial-gradient(circle, #B7F34B 1px, transparent 1px)",
              backgroundSize: "32px 32px",
            }}
          />
          <div className="relative mx-auto max-w-7xl px-6 lg:px-8 text-center">
            <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#B7F34B] animate-in fade-in duration-500">
              Get in Touch
            </p>
            <h1 className="mb-6 text-4xl font-bold text-white md:text-6xl lg:text-7xl animate-in fade-in duration-500 delay-100">
              We would love to<br />
              <span className="text-[#B7F34B]">hear from you</span>
            </h1>
            <p className="mx-auto max-w-2xl text-lg text-white/70 animate-in fade-in duration-500 delay-200">
              Whether you are a student seeking support, a professional wanting to mentor, 
              or someone who wants to contribute to our mission.
            </p>
          </div>
        </section>

        {/* Contact Info Cards - Apple style */}
        <section className="py-12 -mt-8">
          <div className="mx-auto max-w-5xl px-6 lg:px-8">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {contactInfo.map((item, index) => (
                <div
                  key={item.label}
                  className="group rounded-3xl bg-white dark:bg-[#1D1D1F] p-6 shadow-sm transition-all hover:-translate-y-1 hover:shadow-xl animate-in fade-in slide-in-from-bottom-4 duration-500"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-[#2563EB] transition-transform group-hover:scale-110">
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                  <p className="mb-1 text-xs font-semibold uppercase tracking-widest text-gray-400">{item.label}</p>
                  {item.href ? (
                    <a href={item.href} className="text-sm font-medium text-gray-900 dark:text-white hover:text-[#2563EB] transition-colors">
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

        {/* Tabbed Forms - Apple style */}
        <section className="py-16">
          <div className="mx-auto max-w-4xl px-6 lg:px-8">
            {/* Tab Navigation */}
            <div className="mb-8 flex justify-center">
              <div className="inline-flex rounded-full bg-white dark:bg-[#1D1D1F] p-1.5 shadow-sm">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => { setActiveTab(tab.id); setSuccess(false); setError(""); }}
                    className={`flex items-center gap-2 rounded-full px-6 py-3 text-sm font-medium transition-all ${
                      activeTab === tab.id
                        ? "bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] shadow-md"
                        : "text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    <tab.icon className="h-4 w-4" />
                    {tab.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Container */}
            <div className="rounded-[2rem] bg-white dark:bg-[#1D1D1F] p-8 shadow-xl md:p-12 transition-all">
              {success ? (
                <div className="py-12 text-center animate-in fade-in zoom-in duration-300">
                  <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-[#DCFCE7] dark:bg-[#166534]">
                    <CheckCircle className="h-10 w-10 text-[#16A34A] dark:text-[#86EFAC]" />
                  </div>
                  <h2 className="mb-3 text-2xl font-bold text-gray-900 dark:text-white">
                    {activeTab === "contact" ? "Message Sent!" : activeTab === "mentor" ? "Application Received!" : "Thank You!"}
                  </h2>
                  <p className="mb-8 text-gray-600 dark:text-gray-400">
                    {activeTab === "contact" 
                      ? "We will reply within 24-48 hours." 
                      : activeTab === "mentor" 
                      ? "We will review your application and get back to you soon."
                      : "Your generosity helps students achieve their dreams."}
                  </p>
                  <Button onClick={() => setSuccess(false)} className="rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] px-8">
                    {activeTab === "contact" ? "Send Another" : "Go Back"}
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Contact Form */}
                  {activeTab === "contact" && (
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
                            placeholder="+1 (234) 567-890"
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
                  {activeTab === "mentor" && (
                    <>
                      <div className="rounded-2xl bg-[#EFF6FF] dark:bg-[#1E3A5F] p-6 mb-6">
                        <h3 className="font-semibold text-[#1D4ED8] dark:text-[#60A5FA] mb-2">Become a Mentor</h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          Share your expertise with students from Africa and around the world. 
                          Help guide them through applications, interviews, and their academic journey.
                        </p>
                      </div>
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
                            <option value="">Select area</option>
                            <option value="admissions">University Admissions</option>
                            <option value="scholarships">Scholarships & Funding</option>
                            <option value="visa">Visa & Immigration</option>
                            <option value="career">Career Guidance</option>
                            <option value="research">Research & Academia</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">LinkedIn Profile</label>
                        <input value={mentorForm.linkedin} onChange={(e) => setMentorForm({ ...mentorForm, linkedin: e.target.value })} placeholder="https://linkedin.com/in/yourprofile" className={inputClass} />
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Why do you want to mentor? *</label>
                        <textarea required rows={4} value={mentorForm.motivation} onChange={(e) => setMentorForm({ ...mentorForm, motivation: e.target.value })} placeholder="Share your motivation..." className={inputClass + " resize-none"} />
                      </div>
                    </>
                  )}

                  {/* Donate Form */}
                  {activeTab === "donate" && (
                    <>
                      <div className="rounded-2xl bg-[#FEF3C7] dark:bg-[#78350F] p-6 mb-6">
                        <div className="flex items-center gap-3 mb-2">
                          <DollarSign className="h-6 w-6 text-[#B45309] dark:text-[#FCD34D]" />
                          <h3 className="font-semibold text-[#B45309] dark:text-[#FCD34D]">Support Our Mission</h3>
                        </div>
                        <p className="text-sm text-gray-700 dark:text-gray-200">
                          Your contribution directly helps students cover application fees, testing costs, 
                          and visa expenses. Every dollar makes a difference.
                        </p>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Full Name *</label>
                          <input required value={donateForm.name} onChange={(e) => setDonateForm({ ...donateForm, name: e.target.value })} placeholder="Your full name" className={inputClass} />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Email *</label>
                          <input type="email" required value={donateForm.email} onChange={(e) => setDonateForm({ ...donateForm, email: e.target.value })} placeholder="you@example.com" className={inputClass} />
                        </div>
                      </div>
                      <div className="grid gap-6 sm:grid-cols-2">
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Amount (USD) *</label>
                          <div className="flex gap-2 mb-3">
                            {["25", "50", "100", "250"].map((amt) => (
                              <button
                                key={amt}
                                type="button"
                                onClick={() => setDonateForm({ ...donateForm, amount: amt })}
                                className={`flex-1 rounded-xl py-3 text-sm font-semibold transition-all ${
                                  donateForm.amount === amt
                                    ? "bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F]"
                                    : "bg-gray-100 dark:bg-[#2D2D2F] text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-[#3D3D3F]"
                                }`}
                              >
                                ${amt}
                              </button>
                            ))}
                          </div>
                          <input
                            type="number"
                            value={donateForm.amount}
                            onChange={(e) => setDonateForm({ ...donateForm, amount: e.target.value })}
                            placeholder="Or enter custom amount"
                            className={inputClass}
                          />
                        </div>
                        <div>
                          <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Frequency</label>
                          <select value={donateForm.frequency} onChange={(e) => setDonateForm({ ...donateForm, frequency: e.target.value })} className={inputClass}>
                            <option value="one-time">One-time</option>
                            <option value="monthly">Monthly</option>
                            <option value="quarterly">Quarterly</option>
                            <option value="yearly">Yearly</option>
                          </select>
                        </div>
                      </div>
                      <div>
                        <label className="mb-2 block text-sm font-semibold text-gray-700 dark:text-gray-300">Message (Optional)</label>
                        <textarea rows={3} value={donateForm.message} onChange={(e) => setDonateForm({ ...donateForm, message: e.target.value })} placeholder="Leave a message of support..." className={inputClass + " resize-none"} />
                      </div>
                    </>
                  )}

                  {error && <p className="rounded-xl bg-red-50 dark:bg-red-900/30 px-4 py-3 text-sm text-red-600 dark:text-red-400">{error}</p>}

                  <Button
                    type="submit"
                    disabled={loading}
                    className="w-full rounded-2xl bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] py-6 text-base font-semibold hover:opacity-90 transition-all h-auto"
                  >
                    {loading ? (
                      <span className="flex items-center gap-2">
                        <svg className="h-5 w-5 animate-spin" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Processing...
                      </span>
                    ) : (
                      <span className="flex items-center gap-2">
                        {activeTab === "contact" && <><Send className="h-5 w-5" /> Send Message</>}
                        {activeTab === "mentor" && <><Users className="h-5 w-5" /> Submit Application</>}
                        {activeTab === "donate" && <><Heart className="h-5 w-5" /> Complete Donation</>}
                      </span>
                    )}
                  </Button>
                </form>
              )}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="bg-[#1D1D1F] py-16">
          <div className="mx-auto max-w-4xl px-6 text-center lg:px-8">
            <h2 className="mb-4 text-3xl font-bold text-white md:text-4xl">
              Ready to Start Your Journey?
            </h2>
            <p className="mb-8 text-lg text-white/70">
              Browse our services and apply for the support that matches your needs.
            </p>
            <Button size="lg" className="rounded-full bg-white text-[#1D1D1F] hover:bg-gray-100 px-8 h-12" asChild>
              <Link href="/#services">
                Explore Services <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
