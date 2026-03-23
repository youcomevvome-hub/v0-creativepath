"use client"

import { useState, useMemo } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft, CheckCircle, ChevronRight, Copy, Check,
  User, School, BookOpen, Star, Send,
  FileCheck, GraduationCap, CreditCard, Languages,
  Stamp, Plane, DollarSign, FileText, Users, Building, LucideIcon,
} from "lucide-react"
import Link from "next/link"

interface EligibilityFormProps {
  serviceSlug: string
  serviceTitle: string
}

const waiverOptions = [
  { id: "100-app", label: "100% Application fee waiver" },
  { id: "50-app", label: "50% Application fee waiver" },
  { id: "100-wes", label: "100% WES fee waiver" },
  { id: "50-wes", label: "50% WES fee waiver" },
  { id: "mentorship", label: "Mentorship" },
]

function generateEligibilityCode(serviceSlug: string): string {
  const prefix = "VP"
  const serviceCode = serviceSlug.split("-")[0].toUpperCase().slice(0, 4)
  const year = new Date().getFullYear()
  const uniqueNum = Math.floor(Math.random() * 999999).toString().padStart(6, "0")
  return `${prefix}-${serviceCode}-${year}-${uniqueNum}`
}

const iconMap: Record<string, LucideIcon> = {
  User, School, BookOpen, Star, FileCheck, GraduationCap,
  CreditCard, Languages, Stamp, Plane, DollarSign, FileText, Users, Building,
}

const SECTIONS = [
  { id: "personal", label: "Personal Info", iconName: "User" },
  { id: "academic", label: "Academic Details", iconName: "School" },
  { id: "application", label: "Application Status", iconName: "BookOpen" },
  { id: "opportunity", label: "Opportunity Essay", iconName: "Star" },
]

// Service-specific questions based on the service slug
const serviceQuestions: Record<string, { label: string; placeholder: string; hint?: string }[]> = {
  "wes-support": [
    { label: "Which country did you complete your education in?", placeholder: "e.g. Nigeria, Ghana, Kenya" },
    { label: "Have you started the WES application process?", placeholder: "Describe your current status" },
    { label: "What degree are you seeking evaluation for?", placeholder: "e.g. Bachelor's in Computer Science" },
  ],
  "gre-support": [
    { label: "Have you registered for the GRE?", placeholder: "Yes/No and registration details" },
    { label: "What is your target GRE score?", placeholder: "e.g. 320+ (Verbal: 155, Quant: 165)" },
    { label: "How are you preparing for the GRE?", placeholder: "Describe your study plan and resources" },
  ],
  "application-fee-support": [
    { label: "How many universities are you applying to?", placeholder: "e.g. 5-10 universities" },
    { label: "List the universities you plan to apply to", placeholder: "University names and programs" },
    { label: "What is the total application fee amount needed?", placeholder: "e.g. $500 for 5 applications" },
  ],
  "initial-deposit-support": [
    { label: "Which university requires the deposit?", placeholder: "University name and program" },
    { label: "What is the deposit amount required?", placeholder: "e.g. $500 USD" },
    { label: "What is the deadline for the deposit?", placeholder: "e.g. May 1, 2026" },
  ],
  "english-test-support": [
    { label: "Which English test are you taking?", placeholder: "IELTS, TOEFL, or Duolingo" },
    { label: "Have you registered for the test?", placeholder: "Registration status and test date" },
    { label: "What is your target score?", placeholder: "e.g. IELTS 7.0 or TOEFL 100" },
  ],
  "sevis-fee-support": [
    { label: "Have you received your I-20 form?", placeholder: "Yes/No and details" },
    { label: "What is your SEVIS ID number?", placeholder: "Your SEVIS ID (if available)" },
    { label: "When is your visa interview scheduled?", placeholder: "Date of interview or expected date" },
  ],
  "visa-fee-support": [
    { label: "Which country's visa are you applying for?", placeholder: "e.g. United States, United Kingdom, Canada" },
    { label: "What type of visa are you applying for?", placeholder: "e.g. F-1 Student Visa" },
    { label: "Have you received your admission letter?", placeholder: "Yes/No and university details" },
  ],
  "tuition-fee-support": [
    { label: "What is the total tuition amount per year?", placeholder: "e.g. $35,000 USD" },
    { label: "Do you have other funding sources?", placeholder: "Scholarships, loans, family support, etc." },
    { label: "How much tuition support do you need?", placeholder: "Specific amount or percentage" },
  ],
  "transcript-support": [
    { label: "Which institution issued your transcript?", placeholder: "University or college name" },
    { label: "What type of transcript evaluation do you need?", placeholder: "e.g. Course-by-course, document-by-document" },
    { label: "How many copies do you need evaluated?", placeholder: "Number of transcripts" },
  ],
  "college-board-support": [
    { label: "Which College Board services do you need?", placeholder: "SAT, AP, CSS Profile, etc." },
    { label: "Have you registered for the SAT?", placeholder: "Registration status and test date" },
    { label: "What is your target SAT score?", placeholder: "e.g. 1400+" },
  ],
  "mentorship-program": [
    { label: "What area do you need mentorship in?", placeholder: "Application strategy, essay writing, interview prep, etc." },
    { label: "What is your biggest challenge in the application process?", placeholder: "Describe your main obstacles" },
    { label: "What are your career goals after completing your degree?", placeholder: "Your long-term aspirations" },
  ],
  "enrollment-deposit-support": [
    { label: "Which university requires the enrollment deposit?", placeholder: "University name" },
    { label: "What is the enrollment deposit amount?", placeholder: "e.g. $300 USD" },
    { label: "Have you been officially admitted?", placeholder: "Yes/No and admission details" },
  ],
}

export function EligibilityForm({ serviceSlug, serviceTitle }: EligibilityFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [eligibilityCode, setEligibilityCode] = useState("")
  const [copied, setCopied] = useState(false)

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
    // Service-specific fields
    serviceQuestion1: "",
    serviceQuestion2: "",
    serviceQuestion3: "",
  })

  const questions = useMemo(() => serviceQuestions[serviceSlug] || [], [serviceSlug])

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

  /* Success Screen */
  if (isSuccess) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="rounded-3xl bg-white dark:bg-[#1D1D1F] p-8 shadow-2xl md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="mb-2 text-2xl font-black uppercase text-foreground md:text-3xl">
              Application Received!
            </h2>
            <p className="mb-8 text-muted-foreground">
              Your eligibility application for{" "}
              <span className="font-semibold text-scholarship">{serviceTitle}</span>{" "}
              has been submitted. Our team will review it within 48 hours.
            </p>

            <div className="mb-6 overflow-hidden rounded-2xl border-2 border-dashed border-highlight bg-highlight/10 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Your Eligibility Code
              </p>
              <p className="mb-4 font-mono text-2xl font-black tracking-widest text-foreground md:text-3xl">
                {eligibilityCode}
              </p>
              <button
                onClick={handleCopy}
                className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-all hover:opacity-90"
              >
                {copied ? <Check className="h-4 w-4 text-highlight" /> : <Copy className="h-4 w-4" />}
                {copied ? "Copied!" : "Copy Code"}
              </button>
            </div>

            <div className="mb-8 rounded-2xl bg-muted p-5 text-left">
              <p className="mb-3 text-sm font-bold text-foreground">Next Steps:</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {[
                  "Save your eligibility code — you will need it for payment verification.",
                  "Check your email for a confirmation from our team.",
                  "Our team will review your application within 48 hours.",
                  "Once approved, use your code to redeem your financial support.",
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-highlight text-xs font-bold text-accent-foreground">
                      {i + 1}
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <button
              onClick={() => router.push("/")}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition-all hover:opacity-90"
            >
              Return to Home
            </button>
          </div>
        </div>
      </div>
    )
  }

  /* Field Component */
  const Field = ({
    id, label, required = true, children, hint,
  }: {
    id: string; label: string; required?: boolean; children: React.ReactNode; hint?: string
  }) => (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}{required && <span className="ml-1 text-destructive">*</span>}
      </label>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      {children}
    </div>
  )

  const inputCls =
    "w-full rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1D1D1F] px-4 py-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none ring-0 focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20"

  /* Step Content */
  const steps = [
    /* Step 0 — Personal Info */
    <div key="personal" className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="fullName" label="Full Name">
          <input id="fullName" name="fullName" value={formData.fullName} onChange={handleInput} required placeholder="Your full name" className={inputCls} />
        </Field>
        <Field id="email" label="Email Address">
          <input id="email" name="email" type="email" value={formData.email} onChange={handleInput} required placeholder="you@example.com" className={inputCls} />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="phone" label="Phone Number" required={false}>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleInput} placeholder="+234 801 234 5678" className={inputCls} />
        </Field>
        <Field id="country" label="Country of Residence">
          <input id="country" name="country" value={formData.country} onChange={handleInput} required placeholder="e.g. Nigeria" className={inputCls} />
        </Field>
      </div>
    </div>,

    /* Step 1 — Academic Details */
    <div key="academic" className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-5">
      <Field id="university" label="University Attended">
        <input id="university" name="university" value={formData.university} onChange={handleInput} required placeholder="Your undergraduate university" className={inputCls} />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
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

    /* Step 2 — Application Status with Service-Specific Questions */
    <div key="application" className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
      {/* Service-specific questions */}
      {questions.length > 0 && (
        <div className="rounded-2xl border border-scholarship/20 bg-scholarship/5 p-5 space-y-5">
          <p className="text-sm font-bold text-scholarship">Questions specific to {serviceTitle}</p>
          {questions.map((q, idx) => (
            <Field key={idx} id={`serviceQuestion${idx + 1}`} label={q.label} hint={q.hint}>
              <textarea
                id={`serviceQuestion${idx + 1}`}
                name={`serviceQuestion${idx + 1}`}
                value={formData[`serviceQuestion${idx + 1}` as keyof typeof formData] as string}
                onChange={handleInput}
                rows={2}
                required
                placeholder={q.placeholder}
                className={`${inputCls} resize-none`}
              />
            </Field>
          ))}
        </div>
      )}

      <div>
        <p className="mb-3 text-sm font-semibold text-foreground">
          Have you started your graduate application? <span className="text-destructive">*</span>
        </p>
        <div className="flex flex-wrap gap-4">
          {["yes", "no"].map((v) => (
            <label
              key={v}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-5 py-3 transition-all duration-200 ${
                formData.hasStartedApplication === v
                  ? "border-scholarship bg-scholarship/10 font-semibold text-scholarship"
                  : "border-border text-muted-foreground hover:border-scholarship/40"
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
        <p className="mb-3 text-sm font-semibold text-foreground">
          Which support would you like to subscribe to? <span className="text-destructive">*</span>
        </p>
        <div className="space-y-3">
          {waiverOptions.map((opt) => (
            <label
              key={opt.id}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-4 py-3 transition-all duration-200 ${
                formData.waiverOptions.includes(opt.id)
                  ? "border-scholarship bg-scholarship/10"
                  : "border-border hover:border-scholarship/40"
              }`}
            >
              <input
                type="checkbox"
                checked={formData.waiverOptions.includes(opt.id)}
                onChange={(e) => handleCheckbox(opt.id, e.target.checked)}
                className="h-4 w-4 rounded accent-scholarship"
              />
              <span className="text-sm font-medium text-foreground">{opt.label}</span>
            </label>
          ))}
        </div>
      </div>

      <div>
        <p className="mb-3 text-sm font-semibold text-foreground">
          100% waiver is limited. Would you accept a partial waiver? <span className="text-destructive">*</span>
        </p>
        <div className="flex flex-wrap gap-4">
          {["yes", "no"].map((v) => (
            <label
              key={v}
              className={`flex cursor-pointer items-center gap-3 rounded-xl border-2 px-5 py-3 transition-all duration-200 ${
                formData.acceptPartialWaiver === v
                  ? "border-scholarship bg-scholarship/10 font-semibold text-scholarship"
                  : "border-border text-muted-foreground hover:border-scholarship/40"
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
    <div key="opportunity" className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-5">
      <Field
        id="concreteStep"
        label="Describe one concrete step you have taken toward your graduate application"
        hint="Examples: Preparing for GRE, Writing statement of purpose, Contacting professors"
      >
        <textarea id="concreteStep" name="concreteStep" value={formData.concreteStep} onChange={handleInput} rows={4} required placeholder="Describe the concrete step you have taken..." className={`${inputCls} resize-none`} />
      </Field>
      <Field
        id="whySelected"
        label="In 100-150 words, why should you be selected and how will you maximize this opportunity?"
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
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Back */}
      <Link
        href="/#services"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Services
      </Link>

      <div className="overflow-hidden rounded-3xl bg-white dark:bg-[#1D1D1F] shadow-2xl">
        {/* Progress bar */}
        <div className="h-1.5 bg-muted">
          <div
            className="h-full bg-scholarship transition-all duration-500"
            style={{ width: `${((step + 1) / SECTIONS.length) * 100}%` }}
          />
        </div>

        {/* Step tabs */}
        <div className="grid grid-cols-4 border-b border-border">
          {SECTIONS.map((s, i) => {
            const Icon = iconMap[s.iconName] || User
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => i <= step && setStep(i)}
                className={`flex flex-col items-center gap-1 px-2 py-4 text-center transition-all duration-200 ${
                  i === step
                    ? "bg-scholarship/10 text-scholarship"
                    : i < step
                    ? "cursor-pointer text-green-600 dark:text-green-400 hover:bg-muted"
                    : "cursor-default text-muted-foreground/50"
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
          <div className="p-6 md:p-10">
            <div className="mb-6">
              <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
                Step {step + 1} of {SECTIONS.length}
              </p>
              <h2 className="mt-1 text-xl font-bold text-foreground">{SECTIONS[step].label}</h2>
            </div>

            {steps[step]}

            {/* Navigation */}
            <div className="mt-8 flex items-center justify-between">
              {step > 0 ? (
                <button
                  type="button"
                  onClick={() => setStep(step - 1)}
                  className="flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold text-muted-foreground transition-all hover:bg-muted"
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
                className="flex items-center gap-2 rounded-xl bg-primary px-8 py-3 text-sm font-bold text-primary-foreground shadow-lg transition-all hover:opacity-90 hover:shadow-xl disabled:opacity-60"
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
