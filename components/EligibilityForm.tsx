"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Spinner } from "@/components/ui/spinner"
import { ArrowLeft, CheckCircle } from "lucide-react"
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

export function EligibilityForm({ serviceSlug, serviceTitle }: EligibilityFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const [eligibilityCode, setEligibilityCode] = useState("")
  
  const [formData, setFormData] = useState({
    fullName: "",
    university: "",
    course: "",
    gpa: "",
    hasStartedApplication: "",
    waiverOptions: [] as string[],
    acceptPartialWaiver: "",
    paymentPlan: "",
    concreteStep: "",
    whySelected: "",
    targetUniversities: "",
  })

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleRadioChange = (name: string, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleCheckboxChange = (optionId: string, checked: boolean) => {
    setFormData((prev) => ({
      ...prev,
      waiverOptions: checked
        ? [...prev.waiverOptions, optionId]
        : prev.waiverOptions.filter((id) => id !== optionId),
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Generate eligibility code
      const code = generateEligibilityCode(serviceSlug)
      
      // Submit to API
      const response = await fetch("/api/applications", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          service: serviceSlug,
          eligibilityCode: code,
        }),
      })

      if (response.ok) {
        setEligibilityCode(code)
        setIsSuccess(true)
      }
    } catch (error) {
      console.error("Submission error:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (isSuccess) {
    return (
      <div className="mx-auto max-w-2xl rounded-3xl bg-card p-8 shadow-xl md:p-12">
        <div className="text-center">
          <div className="mx-auto mb-6 flex h-20 w-20 items-center justify-center rounded-full bg-success/10">
            <CheckCircle className="h-10 w-10 text-success" />
          </div>
          <h2 className="mb-4 text-2xl font-bold text-foreground md:text-3xl">
            Application Received!
          </h2>
          <p className="mb-8 text-muted-foreground">
            Your eligibility application has been successfully submitted.
          </p>
          
          <div className="mb-8 rounded-2xl bg-highlight/20 p-6">
            <p className="mb-2 text-sm font-medium text-muted-foreground">Your Eligibility Code</p>
            <p className="text-2xl font-bold tracking-wider text-primary md:text-3xl">
              {eligibilityCode}
            </p>
          </div>

          <div className="rounded-xl bg-muted p-4 text-left">
            <p className="text-sm font-medium text-foreground">Important:</p>
            <ul className="mt-2 list-inside list-disc text-sm text-muted-foreground">
              <li>Save this code for payment and verification</li>
              <li>You will receive an email confirmation shortly</li>
              <li>Our team will review your application within 48 hours</li>
            </ul>
          </div>

          <Button
            className="mt-8 rounded-full px-8"
            onClick={() => router.push("/")}
          >
            Return to Home
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-3xl">
      {/* Back Link */}
      <Link
        href="/#services"
        className="mb-6 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to Services
      </Link>

      <div className="rounded-3xl bg-card p-6 shadow-xl md:p-10">
        {/* Form Header */}
        <div className="mb-8 border-b border-border pb-6">
          <span className="mb-2 inline-block rounded-full bg-scholarship/10 px-3 py-1 text-xs font-medium text-scholarship">
            {serviceTitle}
          </span>
          <h1 className="text-2xl font-bold text-foreground md:text-3xl text-balance">
            Time To Take Off To Your Dream University
          </h1>
          <p className="mt-2 text-muted-foreground">
            Complete this form to apply for financial support. All fields are required.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Full Name */}
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium">
              Full Name <span className="text-destructive">*</span>
            </Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              placeholder="Enter your full name"
              required
              className="rounded-xl"
            />
          </div>

          {/* University */}
          <div className="space-y-2">
            <Label htmlFor="university" className="text-sm font-medium">
              University Attended <span className="text-destructive">*</span>
            </Label>
            <Input
              id="university"
              name="university"
              value={formData.university}
              onChange={handleInputChange}
              placeholder="Enter your university"
              required
              className="rounded-xl"
            />
          </div>

          {/* Course */}
          <div className="space-y-2">
            <Label htmlFor="course" className="text-sm font-medium">
              Course Studied <span className="text-destructive">*</span>
            </Label>
            <Input
              id="course"
              name="course"
              value={formData.course}
              onChange={handleInputChange}
              placeholder="Enter your course of study"
              required
              className="rounded-xl"
            />
          </div>

          {/* GPA */}
          <div className="space-y-2">
            <Label htmlFor="gpa" className="text-sm font-medium">
              GPA or CWA Obtained <span className="text-destructive">*</span>
            </Label>
            <Input
              id="gpa"
              name="gpa"
              value={formData.gpa}
              onChange={handleInputChange}
              placeholder="e.g., 3.5/4.0 or 3.8 CGPA"
              required
              className="rounded-xl"
            />
          </div>

          {/* Has Started Application */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Have you started your application? <span className="text-destructive">*</span>
            </Label>
            <RadioGroup
              value={formData.hasStartedApplication}
              onValueChange={(value) => handleRadioChange("hasStartedApplication", value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="started-yes" />
                <Label htmlFor="started-yes" className="font-normal">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="started-no" />
                <Label htmlFor="started-no" className="font-normal">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Waiver Options */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              Which offer do you want to subscribe? <span className="text-destructive">*</span>
            </Label>
            <div className="space-y-3">
              {waiverOptions.map((option) => (
                <div key={option.id} className="flex items-center space-x-3">
                  <Checkbox
                    id={option.id}
                    checked={formData.waiverOptions.includes(option.id)}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(option.id, checked as boolean)
                    }
                  />
                  <Label htmlFor={option.id} className="font-normal">
                    {option.label}
                  </Label>
                </div>
              ))}
            </div>
          </div>

          {/* Accept Partial Waiver */}
          <div className="space-y-3">
            <Label className="text-sm font-medium">
              100% waiver is limited. Would you like to be given partial waiver?{" "}
              <span className="text-destructive">*</span>
            </Label>
            <RadioGroup
              value={formData.acceptPartialWaiver}
              onValueChange={(value) => handleRadioChange("acceptPartialWaiver", value)}
              className="flex gap-6"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="yes" id="partial-yes" />
                <Label htmlFor="partial-yes" className="font-normal">Yes</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="no" id="partial-no" />
                <Label htmlFor="partial-no" className="font-normal">No</Label>
              </div>
            </RadioGroup>
          </div>

          {/* Payment Plan */}
          <div className="space-y-2">
            <Label htmlFor="paymentPlan" className="text-sm font-medium">
              If YES how do you intend to pay the Half? If NO reply N/A{" "}
              <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="paymentPlan"
              name="paymentPlan"
              value={formData.paymentPlan}
              onChange={handleInputChange}
              placeholder="Describe your payment plan or type N/A"
              required
              className="min-h-[100px] rounded-xl"
            />
          </div>

          {/* Concrete Step */}
          <div className="space-y-2">
            <Label htmlFor="concreteStep" className="text-sm font-medium">
              Describe one concrete step you have taken toward your graduate school application{" "}
              <span className="text-destructive">*</span>
            </Label>
            <p className="text-xs text-muted-foreground">
              Examples: Preparing for GRE, Writing statement of purpose, Contacting professors
            </p>
            <Textarea
              id="concreteStep"
              name="concreteStep"
              value={formData.concreteStep}
              onChange={handleInputChange}
              placeholder="Describe the concrete steps you've taken..."
              required
              className="min-h-[120px] rounded-xl"
            />
          </div>

          {/* Why Selected */}
          <div className="space-y-2">
            <Label htmlFor="whySelected" className="text-sm font-medium">
              Explain in 100-150 words why you should be selected and how you plan to maximize
              this opportunity <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="whySelected"
              name="whySelected"
              value={formData.whySelected}
              onChange={handleInputChange}
              placeholder="Explain why you should be selected..."
              required
              className="min-h-[150px] rounded-xl"
            />
          </div>

          {/* Target Universities */}
          <div className="space-y-2">
            <Label htmlFor="targetUniversities" className="text-sm font-medium">
              Which universities do you intend to apply to and what research have you done about
              them? <span className="text-destructive">*</span>
            </Label>
            <Textarea
              id="targetUniversities"
              name="targetUniversities"
              value={formData.targetUniversities}
              onChange={handleInputChange}
              placeholder="List your target universities and the research you've conducted..."
              required
              className="min-h-[150px] rounded-xl"
            />
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <Button
              type="submit"
              disabled={isSubmitting}
              className="w-full rounded-xl py-6 text-base font-semibold"
            >
              {isSubmitting ? (
                <>
                  <Spinner className="mr-2 h-5 w-5" />
                  Submitting Application...
                </>
              ) : (
                "Submit Application"
              )}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}
