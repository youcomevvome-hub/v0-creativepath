import { NextResponse } from "next/server"

const TO_EMAIL = "vicecreativepath@gmail.com"

function buildContactHtml(data: Record<string, string>) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1F2937">
      <div style="background:#1E3A5F;padding:24px;border-radius:16px 16px 0 0">
        <h2 style="color:#ffffff;margin:0;font-size:20px">New Contact Form Submission</h2>
        <p style="color:#ffffff99;margin:6px 0 0;font-size:13px">Creative Path Inspired</p>
      </div>
      <div style="background:#fff;padding:24px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;width:35%;color:#6B7280;font-weight:600">Name</td><td style="padding:8px 0">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}" style="color:#1E3A5F">${data.email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;font-weight:600">Phone</td><td style="padding:8px 0">${data.phone || "Not provided"}</td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;font-weight:600">Subject</td><td style="padding:8px 0">${data.subject}</td></tr>
        </table>
        <div style="margin-top:20px;padding-top:20px;border-top:1px solid #E5E7EB">
          <p style="font-weight:600;color:#374151;margin:0 0 8px">Message:</p>
          <p style="color:#4B5563;line-height:1.7;white-space:pre-wrap;margin:0">${data.message}</p>
        </div>
      </div>
      <div style="background:#F3F4F6;padding:14px;border-radius:0 0 16px 16px;text-align:center">
        <p style="color:#9CA3AF;font-size:12px;margin:0">Sent via Creative Path Inspired contact form</p>
      </div>
    </div>
  `
}

function buildMentorHtml(data: Record<string, string>) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1F2937">
      <div style="background:#1E3A5F;padding:24px;border-radius:16px 16px 0 0">
        <h2 style="color:#ffffff;margin:0;font-size:20px">New Mentor Application</h2>
        <p style="color:#ffffff99;margin:6px 0 0;font-size:13px">Creative Path Inspired — Become a Mentor</p>
      </div>
      <div style="background:#fff;padding:24px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;width:35%;color:#6B7280;font-weight:600">Full Name</td><td style="padding:8px 0">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}" style="color:#1E3A5F">${data.email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;font-weight:600">Country</td><td style="padding:8px 0">${data.country || "Not provided"}</td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;font-weight:600">Area of Expertise</td><td style="padding:8px 0">${data.expertise || "Not provided"}</td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;font-weight:600">LinkedIn</td><td style="padding:8px 0">${data.linkedin ? `<a href="${data.linkedin}" style="color:#1E3A5F">${data.linkedin}</a>` : "Not provided"}</td></tr>
        </table>
        <div style="margin-top:20px;padding-top:20px;border-top:1px solid #E5E7EB">
          <p style="font-weight:600;color:#374151;margin:0 0 8px">Motivation / Why they want to mentor:</p>
          <p style="color:#4B5563;line-height:1.7;white-space:pre-wrap;margin:0">${data.motivation || "Not provided"}</p>
        </div>
      </div>
      <div style="background:#F3F4F6;padding:14px;border-radius:0 0 16px 16px;text-align:center">
        <p style="color:#9CA3AF;font-size:12px;margin:0">Sent via Creative Path Inspired mentor application form</p>
      </div>
    </div>
  `
}

function buildSupportHtml(data: Record<string, string>) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:auto;color:#1F2937">
      <div style="background:#1E3A5F;padding:24px;border-radius:16px 16px 0 0">
        <h2 style="color:#ffffff;margin:0;font-size:20px">New Support / Donation Inquiry</h2>
        <p style="color:#ffffff99;margin:6px 0 0;font-size:13px">Creative Path Inspired — Support Us</p>
      </div>
      <div style="background:#fff;padding:24px">
        <table style="width:100%;border-collapse:collapse;font-size:14px">
          <tr><td style="padding:8px 0;width:35%;color:#6B7280;font-weight:600">Full Name</td><td style="padding:8px 0">${data.name}</td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;font-weight:600">Email</td><td style="padding:8px 0"><a href="mailto:${data.email}" style="color:#1E3A5F">${data.email}</a></td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;font-weight:600">Donation Amount</td><td style="padding:8px 0">${data.amount ? `$${data.amount}` : "Not specified"}</td></tr>
          <tr><td style="padding:8px 0;color:#6B7280;font-weight:600">Frequency</td><td style="padding:8px 0">${data.frequency || "One-time"}</td></tr>
        </table>
        ${data.message ? `
        <div style="margin-top:20px;padding-top:20px;border-top:1px solid #E5E7EB">
          <p style="font-weight:600;color:#374151;margin:0 0 8px">Additional message:</p>
          <p style="color:#4B5563;line-height:1.7;white-space:pre-wrap;margin:0">${data.message}</p>
        </div>` : ""}
      </div>
      <div style="background:#F3F4F6;padding:14px;border-radius:0 0 16px 16px;text-align:center">
        <p style="color:#9CA3AF;font-size:12px;margin:0">Sent via Creative Path Inspired support form</p>
      </div>
    </div>
  `
}

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { type = "contact", ...data } = body

    // Basic validation
    if (!data.name || !data.email) {
      return NextResponse.json({ error: "Name and email are required" }, { status: 400 })
    }

    const subjects: Record<string, string> = {
      contact: `[Contact] ${data.subject || "General Inquiry"} — from ${data.name}`,
      mentor:  `[Mentor Application] ${data.name} — ${data.expertise || "New applicant"}`,
      support: `[Support / Donation] ${data.name} — ${data.amount ? `$${data.amount}` : "Unspecified amount"}`,
    }

    const htmlBuilders: Record<string, (d: Record<string, string>) => string> = {
      contact: buildContactHtml,
      mentor:  buildMentorHtml,
      support: buildSupportHtml,
    }

    const emailSubject = subjects[type] ?? subjects.contact
    const emailHtml    = (htmlBuilders[type] ?? buildContactHtml)(data as Record<string, string>)

    const RESEND_API_KEY = process.env.RESEND_API_KEY

    if (RESEND_API_KEY) {
      const res = await fetch("https://api.resend.com/emails", {
        method: "POST",
        headers: {
          Authorization: `Bearer ${RESEND_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          from: "Creative Path Inspired <onboarding@resend.dev>",
          to: [TO_EMAIL],
          reply_to: data.email,
          subject: emailSubject,
          html: emailHtml,
        }),
      })

      if (!res.ok) {
        const err = await res.json()
        console.error("[Resend error]", err)
        // Still return success — form data was received, email failed silently
      }
    } else {
      // No API key — log the submission
      console.log(`[Form Submission — ${type}]`, data)
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[Contact API Error]", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
