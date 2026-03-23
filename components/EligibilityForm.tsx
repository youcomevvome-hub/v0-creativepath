"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft, CheckCircle, ChevronRight, Copy, Check,
  User, School, BookOpen, Star, GraduationCap,
  Target, FileText, Send,
} from "lucide-react"
import Link from "next/link"

interface EligibilityFormProps {
  serviceSlug: string
  serviceTitle: string
}

const waiverOptions = [
  { id: "100-app",   label: "100% Application fee waiver" },
  { id: "50-app",    label: "50% Application fee waiver" },
  { id: "100-wes",   label: "100% WES fee waiver" },
  { id: "50-wes",    label: "50% WES fee waiver" },
  { id: "mentorship",label: "Mentorship" },
]

function generateEligibilityCode(serviceSlug: string): string {
  const prefix = "VP"
  const serviceCode = serviceSlug.split("-")[0].toUpperCase().slice(0, 4)
  const year = new Date().getFullYear()
  const uniqueNum = Math.floor(Math.random() * 999999).toString().padStart(6, "0")
  return `${prefix}-${serviceCode}-${year}-${uniqueNum}`
}

const SECTIONS = [
  { id: "personal",     label: "Personal Info",        icon: User },
  { id: "academic",     label: "Academic Details",     icon: School },
  { id: "application",  label: "Application Status",   icon: BookOpen },
  { id: "opportunity",  label: "Opportunity Essay",    icon: Star },
]

export function EligibilityForm({ serviceSlug, serviceTitle }: EligibilityFormProps) {
  const router = useRouter()
  const [step, setStep]         = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess]       = useState(false)
  const [eligibilityCode, setEligibilityCode] = useState("")
  const [copied, setCopied]     = useState(false)

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    university: "",
    course: "",
    gpa: "",
    graduationYear: "",
    hasStartedApplication: "",
    waiverOptions: [] as string[],
    acceptPartialWaiver: "",
    paymentPlan: "",
    concreteStep: "",
    whySelected: "",
    targetUniversities: "",
  })

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleRadio = (name: string, value: string) =>
    setFormData((prev) => ({ ...prev, [name]: value }))

  const handleCheckbox = (id: string, checked: boolean) =>
    setFormData((prev) => ({
      ...prev,
      waiverOptions: checked
        ? [...prev.waiverOptions, id]
        : prev.waiverOptions.filter((x) => x !== id),
    }))

  const handleCopy = () => {
    navigator.clipboard.writeText(eligibilityCode)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      const code = generateEligibilityCode(serviceSlug)

      // Send application data to API — which emails vicecreativepath@gmail.com
      await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: serviceSlug,
          serviceTitle,
          eligibilityCode: code,
        }),
      })

      setEligibilityCode(code)
      setIsSuccess(true)
    } catch (err) {
      console.error("Submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  /* ── Success Screen ─────────────────────────────── */
  if (isSuccess) {
    return (
      <div className="mx-auto max-w-2xl">
        <div className="rounded-3xl bg-white p-8 shadow-2xl md:p-12">
          <div className="text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-[#DCFCE7]">
              <CheckCircle className="h-12 w-12 text-[#16A34A]" />
            </div>
            <h2 className="mb-2 text-2xl font-black uppercase text-[#1F2937] md:text-3xl">
              Application Received!
            </h2>
            <p className="mb-8 text-[#6B7280]">
              Your eligibility application for{" "}
              <span className="font-semibold text-[#2563EB]">{serviceTitle}</span>{" "}
              has been submitted. Our team will review it within 48 hours.
            </p>

            {/* Code box */}
            <div className="mb-6 overflow-hidden rounded-2xl border-2 border-dashed border-[#B7F34B] bg-[#F7FDED] p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-[#6B7280]">
                Your Eligibility Code
              </p>
              <p className="mb-4 font-mono text-2xl font-black tracking-widest text-[#1F2937] md:text-3xl">
                {eligibilityCode}
              </p>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full bg-[#1F2937] px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-[#374151]"
              >
                {copied ? <Check className="h-4 w-4 text-[#B7F34B]" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>

            {/* Instructions */}
            <div className="mb-8 rounded-2xl bg-[#F3F4F6] p-5 text-left">
              <p className="mb-3 text-sm font-bold text-[#1F2937]">Next Steps:</p>
              <ul className="space-y-2 text-sm text-[#4B5563]">
                {[
                  "Save your eligibility code — you will need it for payment verification.",
                  "Check your email for a confirmation from our team.",
                  "Our team will review your application within 48 hours.",
                  "Once approved, use your code to redeem your financial support.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#B7F34B] text-xs font-bold text-[#1F2937]">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 rounded-full bg-[#1F2937] px-8 py-3 font-semibold text-white transition-all hover:bg-[#374151]"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  /* ── Field Component ─────────────────────────────── */
  const Field = ({
    id, label, required = true, children,
    hint,
  }: {
    id: string; label: string; required?: boolean; children: React.ReactNode; hint?: string
  }) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-[#374151]">
        {label}{required && <span className="ml-1 text-red-500">*</span>}
      </label>
      {hint && <p className="text-xs text-[#9CA3AF]">{hint}</p>}
      {children}
    </div>
  )

  const inputCls =
    "rounded-xl border border-[#E5E7EB] bg-[#F9FAFB] px-4 py-3 text-sm text-[#1F2937] placeholder-[#9CA3AF] outline-none transition focus:border-[#2563EB] focus:bg-white focus:ring-2 focus:ring-[#2563EB]/20"

  /* ── Step Content ────────────────────────────────── */
  const steps = [
    /* Step 0 — Personal Info */
    <div key="personal" className="space-y-5">
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="fullName" label="Full Name">
          <input id="fullName" name="fullName" value={formData.fullName} onChange={handleInput} required placeholder="Your full name" className={inputCls} />
        </Field>
        <Field id="email" label="Email Address">
          <input id="email" name="email" type="email" value={formData.email} onChange={handleInput} required placeholder="you@example.com" className={inputCls} />
        </Field>
      </div>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="phone" label="Phone Number" required={false}>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInput} placeholder="+234 801 234 5678" className={inputCls} />
        </Field>
        <Field id="country" label="Country of Residence">
          <input id="country" name="country" value={formData.country} onChange={handleInput} required placeholder="e.g. Nigeria" className={inputCls} />
        </Field>
      </div>
    </div>,

    /* Step 1 — Academic Details */
    <div key="academic" className="space-y-5">
      <Field id="university" label="University Attended">
        <input id="university" name="university" value={formData.university} onChange={handleInput} required placeholder="Your undergraduate university" className={inputCls} />
      </Field>
      <div className="grid gap-5 sm:grid-cols-2">
        <Field id="course" label="Course Studied">
          <input id="course" name="course" value={formData.course} onChange={handleInput} required placeholder="e.g. Computer Science" className={inputCls} />
        </Field>
        <Field id="graduationYear" label="Year of Graduation">
          <input id="graduationYear" name="graduationYear" value={formData.graduationYear} onChange={handleInput} required placeholder="e.g. 2023" className={inputCls} />
        </Field>
      </div>
      <Field id="gpa" label="GPA / CWA Obtained">
        <input id="gpa" name="gpa" value={formData.gpa} onChange={handleInput} required placeholder="e.g. 3.7 / 4.0 or 3.8 CGPA" className={inputCls} />
      </Field>
    </div>,

    /* Step 2 — Application Status */
    <div key="application" className="space-y-6">
      <div>
        <p className="mb-3 text-sm font-semibold text-[#374151]">
          Have you started your graduate application? <span className="text-red-500">*</span>
        </p>
        <div className="flex gap-4">
          {["yes", "no"].map((v) => (
            <label
              key={v}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-5 py-3 transition-all ${
                formData.hasStartedApplication === v
                  ? "border-[#2563EB] bg-[#DBEAFE] font-semibold text-[#2563EB]"
                  : "border-[#E5E7EB] text-[#6B7280] hover:border-[#2563EB]/40"
              }`}
            >
              <input
                type="radio"
                name="hasStartedApplication"
                value={v}
                checked={formData.hasStartedApplication === v}
                onChange={() => handleRadio("hasStartedApplication", v)}
                className="sr-only"
              />
              {v === "yes" ? "Yes, I have started" : "Not yet"}
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-[#374151]">
          Which support would you like to subscribe to? <span className="text-red-500">*</span>
        </p>
        <div className="space-y-3">
          {waiverOptions.map((opt) => (
            <label
              key={opt.id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 transition-all ${
                formData.waiverOptions.includes(opt.id)
                  ? "border-[#2563EB] bg-[#DBEAFE]"
                  : "border-[#E5E7EB] hover:border-[#2563EB]/40"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.waiverOptions.includes(opt.id)}
                onChange={(e) => handleCheckbox(opt.id, e.target.checked)}
                className="h-4 w-4 rounded accent-[#2563EB]"
              />
              <span className="text-sm font-medium text-[#1F2937]">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-[#374151]">
          100% waiver is limited. Would you accept a partial waiver? <span className="text-red-500">*</span>
        </p>
        <div className="flex gap-4">
          {["yes", "no"].map((v) => (
            <label
              key={v}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-5 py-3 transition-all ${
                formData.acceptPartialWaiver === v
                  ? "border-[#2563EB] bg-[#DBEAFE] font-semibold text-[#2563EB]"
                  : "border-[#E5E7EB] text-[#6B7280] hover:border-[#2563EB]/40"
              }`}
            >
              <input
                type="radio"
                name="acceptPartialWaiver"
                value={v}
                checked={formData.acceptPartialWaiver === v}
                onChange={() => handleRadio("acceptPartialWaiver", v)}
                className="sr-only"
              />
              {v === "yes" ? "Yes, I accept" : "No, 100% only"}
            </label>
          ))}
        </div>
      </div>

      <Field id="paymentPlan" label="If YES — how do you plan to pay the remaining half? If NO, type N/A.">
        <textarea id="paymentPlan" name="paymentPlan" value={formData.paymentPlan} onChange={handleInput} rows={3} required placeholder="Describe your payment plan or type N/A" className={`${inputCls} resize-none`} />
      </Field>
    </div>,

    /* Step 3 — Essay */
    <div key="opportunity" className="space-y-5">
      <Field
        id="concreteStep"
        label="Describe one concrete step you have taken toward your graduate application"
        hint="Examples: Preparing for GRE, Writing statement of purpose, Contacting professors"
      >
        <textarea id="concreteStep" name="concreteStep" value={formData.concreteStep} onChange={handleInput} rows={4} required placeholder="Describe the concrete step you have taken..." className={`${inputCls} resize-none`} />
      </Field>
      <Field
        id="whySelected"
        label="In 100–150 words, why should you be selected and how will you maximize this opportunity?"
      >
        <textarea id="whySelected" name="whySelected" value={formData.whySelected} onChange={handleInput} rows={6} required placeholder="Explain why you should be selected..." className={`${inputCls} resize-none`} />
      </Field>
      <Field
        id="targetUniversities"
        label="Which universities do you intend to apply to, and what research have you done about them?"
      >
        <textarea id="targetUniversities" name="targetUniversities" value={formData.targetUniversities} onChange={handleInput} rows={5} required placeholder="List your target universities and the research you have conducted..." className={`${inputCls} resize-none`} />
      </Field>
    </div>,
  ]

  const isLastStep = step === SECTIONS.length - 1

  return (
    <div className="mx-auto max-w-3xl">
      {/* Back */}
      <Link
        href="/#services"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-[#6B7280] transition-colors hover:text-[#1F2937]"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Services
      </Link>

      <div className="overflow-hidden rounded-3xl bg-white shadow-2xl">
        {/* Progress bar */}
        <div className="h-1.5 bg-[#F3F4F6]">
          <div
            className="h-full bg-[#2563EB] transition-all duration-500"
            style={{ width: `${((step + 1) / SECTIONS.length) * 100}%` }}
          />
        </div>

        {/* Step tabs */}
        <div className="grid grid-cols-4 border-b border-[#E5E7EB]">
          {SECTIONS.map((s, i) => {
            const Icon = s.icon
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => i <= step && setStep(i)}
                className={`flex flex-col items-center gap-1 px-2 py-4 text-center transition-colors ${
                  i === step
                    ? "bg-[#EFF6FF] text-[#2563EB]"
                    : i < step
                    ? "cursor-pointer text-[#16A34A] hover:bg-[#F0FDF4]"
                    : "cursor-default text-[#D1D5DB]"
                }`}
              >
                {i < step ? (
                  <CheckCircle className="h-5 w-5" />
                ) : (
                  <Icon className="h-5 w-5" />
                )}
                <span className="hidden text-xs font-semibold sm:block">{s.label}</span>
                <span className="text-xs font-semibold sm:hidden">{i + 1}</span>
              </button>
            )
          })}
        </div>

        {/* Form body */}
        <form onSubmit={isLastStep ? handleSubmit : (e) => { e.preventDefault(); setStep(step + 1) }}>
          <div className="p-8 md:p-10">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-[#9CA3AF]">
                Step {step + 1} of {SECTIONS.length}
              </p>
              <h2 className="mt-1 text-xl font-bold text-[#1F2937]">{SECTIONS[step].label}</h2>
            </div>

            {steps[step]}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-[#6B7280] transition-all hover:bg-[#F3F4F6]"
                >
                  <ArrowLeft className="h-4 w-4" />
                  Previous
                </button>
              ) : (
                <div />
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex items-center gap-2 rounded-xl bg-[#1F2937] px-8 py-3 text-sm font-bold text-white shadow-lg transition-all hover:bg-[#374151] hover:shadow-xl disabled:opacity-60"
              >
                {isSubmitting ? (
                  <>
                    <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                    </svg>
                    Submitting...
                  </>
                ) : isLastStep ? (
                  <>
                    <Send className="h-4 w-4" />
                    Submit Application
                  </>
                ) : (
                  <>
                    Next Step
                    <ChevronRight className="h-4 w-4" />
                  </>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
