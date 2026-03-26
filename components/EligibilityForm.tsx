"use client"

import { useState, useMemo, useEffect, useRef } from "react"
import { useRouter } from "next/navigation"
import {
  ArrowLeft, CheckCircle, ChevronRight, Copy, Check,
  User, School, BookOpen, Star, Send,
  FileCheck, GraduationCap, CreditCard, Languages,
  Stamp, Plane, DollarSign, FileText, Users, Building, type LucideIcon,
} from "lucide-react"
import Link from "next/link"

interface EligibilityFormProps {
  serviceSlug: string
  serviceTitle: string
}

const waiverOptions = [
  { id: "100-support", label: "100% — Full fee support" },
  { id: "75-support",  label: "75% — Three-quarter fee support" },
  { id: "50-support",  label: "50% — Half fee support" },
  { id: "25-support",  label: "25% — Quarter fee support" },
  { id: "mentorship",  label: "Mentorship only (no fee waiver)" },
  { id: "custom",      label: "Custom — I want to specify my own percentage" },
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

const serviceQuestions: Record<string, { label: string; placeholder: string; hint?: string }[]> = {
  "wes-support": [
    {
      label: "Which country did you complete your highest level of education in?",
      placeholder: "e.g. Nigeria, Ghana, Kenya, Cameroon",
      hint: "WES evaluates credentials from most countries worldwide.",
    },
    {
      label: "What degree are you seeking WES evaluation for?",
      placeholder: "e.g. Bachelor's in Computer Science from University of Lagos",
    },
    {
      label: "Have you already started the WES application? If yes, what is your current progress?",
      placeholder: "e.g. Created account, uploaded documents, waiting for results, not started yet",
    },
    {
      label: "Which universities or employers require this WES evaluation?",
      placeholder: "List the institutions or programs that requested it",
    },
  ],
  "gre-support": [
    {
      label: "Have you registered for the GRE? If yes, what is your test date?",
      placeholder: "e.g. Yes, scheduled for March 15 2026 / Not yet registered",
    },
    {
      label: "What is your target GRE score, and what is your goal program?",
      placeholder: "e.g. 320+ for PhD in Computer Science at MIT",
    },
    {
      label: "What study resources are you currently using to prepare?",
      placeholder: "e.g. Magoosh, Manhattan Prep, ETS Official Guide, private tutor",
    },
    {
      label: "Have you taken the GRE before? If yes, what was your score?",
      placeholder: "e.g. First attempt: 305. Looking to improve to 318+",
    },
  ],
  "application-fee-support": [
    {
      label: "How many universities are you applying to, and what is the approximate total application fee?",
      placeholder: "e.g. 8 universities, ~$600 total ($50–$100 per application)",
    },
    {
      label: "List the universities and programs you are applying to",
      placeholder: "e.g. MIT – Computer Science, Stanford – Electrical Engineering, UT Austin – MBA",
    },
    {
      label: "What is your intended start term (semester and year)?",
      placeholder: "e.g. Fall 2026, Spring 2027",
    },
    {
      label: "Have any of these universities already offered you a fee waiver?",
      placeholder: "Yes/No — and if yes, which ones and why were you denied/approved?",
    },
  ],
  "initial-deposit-support": [
    {
      label: "Which university and program requires the enrollment deposit?",
      placeholder: "e.g. University of Toronto – MSc Data Science",
    },
    {
      label: "What is the exact deposit amount and deadline?",
      placeholder: "e.g. $500 USD, due by April 30 2026",
    },
    {
      label: "Have you received your official admission letter?",
      placeholder: "Yes/No — and attach or describe any offer details",
    },
    {
      label: "Do you have any other offer letters? Are you deciding between schools?",
      placeholder: "e.g. Also admitted to Georgia Tech but prefer Toronto",
    },
  ],
  "english-test-support": [
    {
      label: "Which English proficiency test are you planning to take?",
      placeholder: "IELTS Academic, TOEFL iBT, Duolingo English Test, PTE Academic",
    },
    {
      label: "What is your target score, and which programs require it?",
      placeholder: "e.g. IELTS 7.0 overall for University of Edinburgh MSc programs",
    },
    {
      label: "Have you taken this test before? If yes, what was your score?",
      placeholder: "e.g. First attempt IELTS: 6.5 — need to improve Listening and Writing",
    },
    {
      label: "What is your planned test date?",
      placeholder: "e.g. February 20 2026 or not yet scheduled",
    },
  ],
  "sevis-fee-support": [
    {
      label: "Have you received your I-20 / DS-2019 form from your university?",
      placeholder: "Yes — provide SEVIS ID if available / No — expected date",
    },
    {
      label: "What is your SEVIS ID number (if you have it)?",
      placeholder: "Starts with N — e.g. N0012345678",
    },
    {
      label: "When is your US visa interview scheduled or expected?",
      placeholder: "e.g. March 10 2026 at US Embassy Lagos",
    },
    {
      label: "Have you paid the MRV (visa application) fee already?",
      placeholder: "Yes/No — and current status of your DS-160 application",
    },
  ],
  "visa-fee-support": [
    {
      label: "Which country's student visa are you applying for?",
      placeholder: "e.g. United States (F-1), United Kingdom (Tier 4), Canada (Study Permit)",
    },
    {
      label: "Have you received your official admission letter from the university?",
      placeholder: "Yes/No — university name and program",
    },
    {
      label: "Have you started the visa application process (e.g. DS-160, UK Visa Application)?",
      placeholder: "Describe your current progress",
    },
    {
      label: "What is your intended travel / program start date?",
      placeholder: "e.g. August 2026 for Fall semester",
    },
  ],
  "tuition-fee-support": [
    {
      label: "What is the total annual tuition fee for your program?",
      placeholder: "e.g. $32,000 USD per year at Boston University",
    },
    {
      label: "Do you have any existing funding (scholarships, loans, sponsorships)?",
      placeholder: "e.g. 50% departmental scholarship, family support of $5,000",
    },
    {
      label: "How much of the tuition gap are you seeking support for?",
      placeholder: "e.g. Need $15,000 to cover the remaining balance",
    },
    {
      label: "Have you applied for external scholarships? If yes, which ones?",
      placeholder: "e.g. Applied to Mastercard Foundation, Chevening, AAUW",
    },
  ],
  "transcript-support": [
    {
      label: "Which institution(s) issued your transcripts?",
      placeholder: "e.g. Kwame Nkrumah University of Science and Technology",
    },
    {
      label: "What type of transcript evaluation do you need?",
      placeholder: "e.g. Course-by-course (for admissions), Document-by-document (for employment)",
      hint: "Course-by-course gives the most detailed report and is typically required for graduate admissions.",
    },
    {
      label: "How many official transcript copies do you need evaluated?",
      placeholder: "e.g. 3 copies for 3 separate university applications",
    },
    {
      label: "Do you have a transcript verification letter from your institution?",
      placeholder: "Yes/No — some evaluation agencies require this alongside official transcripts",
    },
  ],
  "college-board-support": [
    {
      label: "Which College Board service(s) do you need support with?",
      placeholder: "SAT exam, AP exam registration, CSS Financial Aid Profile, Score sending",
    },
    {
      label: "Have you registered for the SAT or AP exams? What is your test date?",
      placeholder: "e.g. SAT registered for May 3 2026 / Not yet registered",
    },
    {
      label: "What is your target SAT / AP score, and which programs need it?",
      placeholder: "e.g. SAT 1450+ for admission to University of Michigan",
    },
    {
      label: "How many schools do you need to send scores to?",
      placeholder: "e.g. 6 schools — first 4 are free, need support for additional 2",
    },
  ],
  "mentorship-program": [
    {
      label: "What specific area(s) do you need mentorship in?",
      placeholder: "e.g. Statement of purpose writing, selecting programs, interview preparation, networking with professors",
    },
    {
      label: "What is your biggest challenge or fear in the graduate application process?",
      placeholder: "Be honest — e.g. Low GPA, no research experience, limited funds, weak recommendation letters",
    },
    {
      label: "What are your 3 top target graduate programs and universities?",
      placeholder: "e.g. 1. MIT – EECS PhD  2. CMU – MSML  3. Stanford – MS Statistics",
    },
    {
      label: "How much time per week can you commit to mentorship sessions and self-study?",
      placeholder: "e.g. 5 hours/week — 2 for sessions, 3 for independent tasks",
    },
  ],
  "enrollment-deposit-support": [
    {
      label: "Which university and program requires the enrollment deposit?",
      placeholder: "e.g. University of Edinburgh – MSc Artificial Intelligence",
    },
    {
      label: "What is the exact deposit amount and submission deadline?",
      placeholder: "e.g. £500 GBP, deadline June 1 2026",
    },
    {
      label: "Have you been officially admitted? Do you have a conditional or unconditional offer?",
      placeholder: "e.g. Unconditional offer received on Feb 14 2026",
    },
    {
      label: "What happens if you miss the deposit deadline?",
      placeholder: "e.g. Offer will be withdrawn / placed on waitlist — describe urgency",
    },
  ],
}

// ─── Field component defined OUTSIDE EligibilityForm so it never gets recreated ───
function Field({
  id, label, required = true, children, hint,
}: {
  id: string; label: string; required?: boolean; children: React.ReactNode; hint?: string
}) {
  return (
    <div className="flex flex-col gap-1.5">
      <label htmlFor={id} className="text-sm font-semibold text-foreground">
        {label}{required && <span className="ml-1 text-destructive">*</span>}
      </label>
      {hint && <p className="text-xs text-muted-foreground">{hint}</p>}
      {children}
    </div>
  )
}

const INPUT_CLS =
  "w-full rounded-2xl border-2 border-gray-200 dark:border-gray-700 bg-white dark:bg-[#1D1D1F] px-4 py-4 text-sm text-gray-900 dark:text-white placeholder-gray-400 outline-none focus:border-[#1E3A5F] focus:ring-2 focus:ring-[#1E3A5F]/20 transition-colors"

// ─── Step sub-components defined OUTSIDE EligibilityForm ───────────────────────

function StepPersonal({
  formData, onChange,
}: {
  formData: Record<string, string>
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="fullName" label="Full Name">
          <input id="fullName" name="fullName" value={formData.fullName} onChange={onChange} required placeholder="Your full name" className={INPUT_CLS} />
        </Field>
        <Field id="email" label="Email Address">
          <input id="email" name="email" type="email" value={formData.email} onChange={onChange} required placeholder="you@example.com" className={INPUT_CLS} />
        </Field>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="phone" label="Phone Number" required={false}>
          <input id="phone" name="phone" type="tel" value={formData.phone} onChange={onChange} placeholder="+447404599897" className={INPUT_CLS} />
        </Field>
        <Field id="country" label="Country of Residence">
          <input id="country" name="country" value={formData.country} onChange={onChange} required placeholder="e.g. Nigeria" className={INPUT_CLS} />
        </Field>
      </div>
    </div>
  )
}

function StepAcademic({
  formData, onChange,
}: {
  formData: Record<string, string>
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-5">
      <Field id="university" label="University Attended">
        <input id="university" name="university" value={formData.university} onChange={onChange} required placeholder="Your undergraduate university" className={INPUT_CLS} />
      </Field>
      <div className="grid gap-5 md:grid-cols-2">
        <Field id="course" label="Course Studied">
          <input id="course" name="course" value={formData.course} onChange={onChange} required placeholder="e.g. Computer Science" className={INPUT_CLS} />
        </Field>
        <Field id="graduationYear" label="Year of Graduation">
          <input id="graduationYear" name="graduationYear" value={formData.graduationYear} onChange={onChange} required placeholder="e.g. 2023" className={INPUT_CLS} />
        </Field>
      </div>
      <Field id="gpa" label="GPA / CWA Obtained">
        <input id="gpa" name="gpa" value={formData.gpa} onChange={onChange} required placeholder="e.g. 3.7 / 4.0 or 3.8 CGPA" className={INPUT_CLS} />
      </Field>
    </div>
  )
}

function StepApplication({
  formData, onChange, onRadio, onCheckbox, questions, serviceTitle,
}: {
  formData: Record<string, string> & { waiverOptions: string[]; customPercentage?: string }
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
  onRadio: (name: string, value: string) => void
  onCheckbox: (id: string, checked: boolean) => void
  questions: { label: string; placeholder: string; hint?: string }[]
  serviceTitle: string
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-6">
      {questions.length > 0 && (
        <div className="rounded-2xl border border-scholarship/20 bg-scholarship/5 p-5 space-y-5">
          <p className="text-sm font-bold text-scholarship">Questions specific to {serviceTitle}</p>
          {questions.map((q, idx) => (
            <Field key={q.label} id={`serviceQuestion${idx + 1}`} label={q.label} hint={q.hint}>
              <textarea
                id={`serviceQuestion${idx + 1}`}
                name={`serviceQuestion${idx + 1}`}
                value={formData[`serviceQuestion${idx + 1}`] ?? ""}
                onChange={onChange}
                rows={2}
                required
                placeholder={q.placeholder}
                className={`${INPUT_CLS} resize-none`}
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
                onChange={() => onRadio("hasStartedApplication", v)}
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
                onChange={(e) => onCheckbox(opt.id, e.target.checked)}
                className="h-4 w-4 rounded accent-scholarship"
              />
              <span className="text-sm font-medium text-foreground">{opt.label}</span>
            </label>
          ))}
        </div>
        {/* Custom percentage input — only shown when "custom" is selected */}
        {formData.waiverOptions.includes("custom") && (
          <div className="mt-3">
            <Field id="customPercentage" label="Specify your desired support percentage">
              <input
                id="customPercentage"
                name="customPercentage"
                type="text"
                value={formData.customPercentage ?? ""}
                onChange={onChange}
                placeholder="e.g. 60% or 80%"
                className={INPUT_CLS}
              />
            </Field>
          </div>
        )}
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
                onChange={() => onRadio("acceptPartialWaiver", v)}
                className="sr-only"
              />
              {v === "yes" ? "Yes, I accept" : "No, 100% only"}
            </label>
          ))}
        </div>
      </div>

      <Field id="paymentPlan" label="If YES — how do you plan to pay the remaining half? If NO, type N/A.">
        <textarea id="paymentPlan" name="paymentPlan" value={formData.paymentPlan} onChange={onChange} rows={3} required placeholder="Describe your payment plan or type N/A" className={`${INPUT_CLS} resize-none`} />
      </Field>
    </div>
  )
}

function StepEssay({
  formData, onChange,
}: {
  formData: Record<string, string>
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => void
}) {
  return (
    <div className="animate-in fade-in slide-in-from-right-4 duration-300 space-y-5">
      <Field
        id="concreteStep"
        label="Describe one concrete step you have taken toward your graduate application"
        hint="Examples: Preparing for GRE, Writing statement of purpose, Contacting professors"
      >
        <textarea id="concreteStep" name="concreteStep" value={formData.concreteStep} onChange={onChange} rows={4} required placeholder="Describe the concrete step you have taken..." className={`${INPUT_CLS} resize-none`} />
      </Field>
      <Field
        id="whySelected"
        label="In 100–150 words, why should you be selected and how will you maximize this opportunity?"
      >
        <textarea id="whySelected" name="whySelected" value={formData.whySelected} onChange={onChange} rows={6} required placeholder="Explain why you should be selected..." className={`${INPUT_CLS} resize-none`} />
      </Field>
      <Field
        id="targetUniversities"
        label="Which universities do you intend to apply to, and what research have you done about them?"
      >
        <textarea id="targetUniversities" name="targetUniversities" value={formData.targetUniversities} onChange={onChange} rows={5} required placeholder="List your target universities and the research you have conducted..." className={`${INPUT_CLS} resize-none`} />
      </Field>
    </div>
  )
}

// ─── Main Form ─────────────────────────────────────────────────────────────────

export function EligibilityForm({ serviceSlug, serviceTitle }: EligibilityFormProps) {
  const router = useRouter()
  const [step, setStep] = useState(0)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [eligibilityCode, setEligibilityCode] = useState("")
  const [copied, setCopied] = useState(false)
  const formTopRef = useRef<HTMLDivElement>(null)

  // Scroll to form top and focus first input whenever step changes
  useEffect(() => {
    if (formTopRef.current) {
      formTopRef.current.scrollIntoView({ behavior: "smooth", block: "start" })
    }
    // Focus the first focusable input/textarea/select inside the form body
    const timer = setTimeout(() => {
      const firstField = formTopRef.current?.querySelector<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
        "input:not([type=hidden]):not([type=checkbox]):not([type=radio]), textarea, select"
      )
      firstField?.focus()
    }, 150)
    return () => clearTimeout(timer)
  }, [step])

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
    serviceQuestion1: "",
    serviceQuestion2: "",
    serviceQuestion3: "",
    customPercentage: "",
  })

  const questions = useMemo(() => serviceQuestions[serviceSlug] || [], [serviceSlug])

  const handleInput = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
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
        body: JSON.stringify({ ...formData, service: serviceSlug, serviceTitle, eligibilityCode: code }),
      })
      setEligibilityCode(code)
      setIsSuccess(true)
    } catch (err) {
      console.error("Submission error:", err)
    } finally {
      setIsSubmitting(false)
    }
  }

  // Flat formData cast for sub-components
  const flatData = formData as unknown as Record<string, string> & { waiverOptions: string[] }

  /* ── Success Screen ── */
  if (isSuccess) {
    return (
      <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
        <div className="rounded-3xl bg-white dark:bg-[#1D1D1F] p-8 shadow-2xl md:p-12">
          <div className="mx-auto max-w-2xl text-center">
            <div className="mx-auto mb-6 flex h-24 w-24 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
              <CheckCircle className="h-12 w-12 text-green-600 dark:text-green-400" />
            </div>
            <h2 className="mb-2 text-2xl font-black uppercase text-foreground md:text-3xl">Application Received!</h2>
            <p className="mb-8 text-muted-foreground">
              Your eligibility application for{" "}
              <span className="font-semibold text-scholarship">{serviceTitle}</span>{" "}
              has been submitted. Our team will review it within 48 hours.
            </p>
            <div className="mb-6 overflow-hidden rounded-2xl border-2 border-dashed border-highlight bg-highlight/10 p-6">
              <p className="mb-2 text-xs font-bold uppercase tracking-widest text-muted-foreground">Your Eligibility Code</p>
              <p className="mb-4 font-mono text-2xl font-black tracking-widest text-foreground md:text-3xl">{eligibilityCode}</p>
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
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-highlight text-xs font-bold text-accent-foreground">{i + 1}</span>
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

  const isLastStep = step === SECTIONS.length - 1

  /* ── Form ── */
  return (
    <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
      <Link
        href="/services"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Services
      </Link>

      <div ref={formTopRef} className="overflow-hidden rounded-3xl bg-white dark:bg-[#1D1D1F] shadow-2xl">
        {/* Progress bar */}
        <div className="h-1.5 bg-muted">
          <div className="h-full bg-scholarship transition-all duration-500" style={{ width: `${((step + 1) / SECTIONS.length) * 100}%` }} />
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
                {i < step ? <CheckCircle className="h-5 w-5" /> : <Icon className="h-5 w-5" />}
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

            {/* Render the correct step — no JSX array, no remounting */}
            {step === 0 && <StepPersonal formData={flatData} onChange={handleInput} />}
            {step === 1 && <StepAcademic formData={flatData} onChange={handleInput} />}
            {step === 2 && (
              <StepApplication
                formData={formData}
                onChange={handleInput}
                onRadio={handleRadio}
                onCheckbox={handleCheckbox}
                questions={questions}
                serviceTitle={serviceTitle}
              />
            )}
            {step === 3 && <StepEssay formData={flatData} onChange={handleInput} />}

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
              ) : <div />}

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
                  <><Send className="h-4 w-4" /> Submit Application</>
                ) : (
                  <>Next Step <ChevronRight className="h-4 w-4" /></>
                )}
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
