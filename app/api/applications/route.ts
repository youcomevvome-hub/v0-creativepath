import { NextRequest, NextResponse } from "next/server"
import { sendEmail } from "@/lib/emailService"

// In-memory storage for demo purposes
const applications: Map<string, Application> = new Map()

interface Application {
  id: string
  fullName: string
  email: string
  phone: string
  country: string
  university: string
  course: string
  gpa: string
  graduationYear: string
  service: string
  serviceTitle: string
  hasStartedApplication: string
  waiverOptions: string[]
  acceptPartialWaiver: string
  paymentPlan: string
  concreteStep: string
  whySelected: string
  targetUniversities: string
  eligibilityCode: string
  status: "pending" | "approved" | "rejected"
  createdAt: string
}

async function sendApplicationEmail(app: Application) {
  const html = `
    <div style="font-family:sans-serif;max-width:640px;margin:auto;color:#1F2937">
      <div style="background:#1E3A5F;padding:24px;border-radius:16px 16px 0 0">
        <h2 style="color:#ffffff;margin:0;font-size:22px">New Eligibility Application</h2>
        <p style="color:#ffffff99;margin:6px 0 0">Creative Path Inspired Support Platform</p>
      </div>
      <div style="background:#F7F8FA;padding:24px;border-left:4px solid #1E3A5F">
        <p style="margin:0;font-size:13px;font-weight:bold;color:#6B7280;text-transform:uppercase;letter-spacing:1px">Service</p>
        <p style="margin:4px 0 0;font-size:18px;font-weight:bold">${app.serviceTitle}</p>
        <p style="margin:4px 0 0;font-size:14px;color:#6B7280">Code: <strong style="color:#1E3A5F">${app.eligibilityCode}</strong></p>
      </div>
      <div style="background:#fff;padding:24px">
        <h3 style="color:#1F2937;margin:0 0 16px;font-size:16px;border-bottom:1px solid #E5E7EB;padding-bottom:8px">Applicant Details</h3>
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:6px 0;width:40%;color:#6B7280;font-weight:600">Full Name</td><td>${app.fullName}</td></tr>
          <tr><td style="padding:6px 0;color:#6B7280;font-weight:600">Email</td><td><a href="mailto:${app.email}">${app.email || "N/A"}</a></td></tr>
          <tr><td style="padding:6px 0;color:#6B7280;font-weight:600">Phone</td><td>${app.phone || "N/A"}</td></tr>
          <tr><td style="padding:6px 0;color:#6B7280;font-weight:600">Country</td><td>${app.country || "N/A"}</td></tr>
          <tr><td style="padding:6px 0;color:#6B7280;font-weight:600">University</td><td>${app.university}</td></tr>
          <tr><td style="padding:6px 0;color:#6B7280;font-weight:600">Course</td><td>${app.course}</td></tr>
          <tr><td style="padding:6px 0;color:#6B7280;font-weight:600">GPA / CWA</td><td>${app.gpa}</td></tr>
          <tr><td style="padding:6px 0;color:#6B7280;font-weight:600">Graduation Year</td><td>${app.graduationYear || "N/A"}</td></tr>
          <tr><td style="padding:6px 0;color:#6B7280;font-weight:600">Application Started</td><td>${app.hasStartedApplication}</td></tr>
          <tr><td style="padding:6px 0;color:#6B7280;font-weight:600">Waivers Requested</td><td>${app.waiverOptions?.join(", ") || "N/A"}</td></tr>
          <tr><td style="padding:6px 0;color:#6B7280;font-weight:600">Accepts Partial</td><td>${app.acceptPartialWaiver}</td></tr>
        </table>
        <h3 style="color:#1F2937;margin:24px 0 8px;font-size:16px">Payment Plan</h3>
        <p style="color:#4B5563;line-height:1.6;margin:0">${app.paymentPlan}</p>
        <h3 style="color:#1F2937;margin:24px 0 8px;font-size:16px">Concrete Step Taken</h3>
        <p style="color:#4B5563;line-height:1.6;margin:0">${app.concreteStep}</p>
        <h3 style="color:#1F2937;margin:24px 0 8px;font-size:16px">Why Selected Essay</h3>
        <p style="color:#4B5563;line-height:1.6;margin:0;white-space:pre-wrap">${app.whySelected}</p>
        <h3 style="color:#1F2937;margin:24px 0 8px;font-size:16px">Target Universities</h3>
        <p style="color:#4B5563;line-height:1.6;margin:0;white-space:pre-wrap">${app.targetUniversities}</p>
      </div>
      <div style="background:#F3F4F6;padding:16px;border-radius:0 0 16px 16px;text-align:center">
        <p style="color:#9CA3AF;font-size:12px;margin:0">Creative Path Inspired · Application submitted on ${new Date(app.createdAt).toLocaleString()}</p>
      </div>
    </div>
  `

  try {
    await sendEmail({
      to: "vicecreativepath@gmail.com",
      subject: `[New Application] ${app.serviceTitle} — ${app.fullName} | Code: ${app.eligibilityCode}`,
      html,
      replyTo: app.email,
    })
  } catch (error) {
    console.error("[Applications] Email send error:", error)
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const id = `app-${Date.now()}-${Math.random().toString(36).slice(2, 9)}`

    const application: Application = {
      id,
      fullName:              body.fullName        || "",
      email:                 body.email           || "",
      phone:                 body.phone           || "",
      country:               body.country         || "",
      university:            body.university      || "",
      course:                body.course          || "",
      gpa:                   body.gpa             || "",
      graduationYear:        body.graduationYear  || "",
      service:               body.service         || "",
      serviceTitle:          body.serviceTitle    || "",
      hasStartedApplication: body.hasStartedApplication || "",
      waiverOptions:         body.waiverOptions   || [],
      acceptPartialWaiver:   body.acceptPartialWaiver   || "",
      paymentPlan:           body.paymentPlan     || "",
      concreteStep:          body.concreteStep    || "",
      whySelected:           body.whySelected     || "",
      targetUniversities:    body.targetUniversities    || "",
      eligibilityCode:       body.eligibilityCode || "",
      status:                "pending",
      createdAt:             new Date().toISOString(),
    }

    applications.set(id, application)

    // Await email — critical for Vercel serverless (function terminates before fire-and-forget resolves)
    await sendApplicationEmail(application)

    return NextResponse.json(
      { success: true, data: { id, eligibilityCode: application.eligibilityCode } },
      { status: 201 }
    )
  } catch (error) {
    console.error("Error creating application:", error)
    return NextResponse.json({ success: false, error: "Failed to create application" }, { status: 500 })
  }
}

export async function GET() {
  return NextResponse.json({ success: true, data: Array.from(applications.values()) })
}
