import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, phone, subject, message } = body

    if (!name || !email || !subject || !message) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 })
    }

    // Build a mailto-compatible email body to send via a simple fetch to an email API.
    // We use Resend or a simple fallback. For now we log and return success.
    // The form content is captured and would be forwarded to vicecreativepath@gmail.com
    // via whichever email provider is connected. In production, add RESEND_API_KEY.
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
          to: ["vicecreativepath@gmail.com"],
          reply_to: email,
          subject: `[Contact Form] ${subject} — from ${name}`,
          html: `
            <div style="font-family:sans-serif;max-width:600px;margin:auto">
              <h2 style="color:#1F2937">New Contact Form Submission</h2>
              <table style="width:100%;border-collapse:collapse">
                <tr><td style="padding:8px 0;font-weight:bold;color:#374151">Name:</td><td>${name}</td></tr>
                <tr><td style="padding:8px 0;font-weight:bold;color:#374151">Email:</td><td><a href="mailto:${email}">${email}</a></td></tr>
                <tr><td style="padding:8px 0;font-weight:bold;color:#374151">Phone:</td><td>${phone || "Not provided"}</td></tr>
                <tr><td style="padding:8px 0;font-weight:bold;color:#374151">Subject:</td><td>${subject}</td></tr>
              </table>
              <h3 style="color:#1F2937;margin-top:24px">Message:</h3>
              <p style="color:#4B5563;line-height:1.6;white-space:pre-wrap">${message}</p>
              <hr style="margin:24px 0;border-color:#E5E7EB"/>
              <p style="color:#9CA3AF;font-size:12px">Sent from Creative Path Inspired contact form.</p>
            </div>
          `,
        }),
      })

      if (!res.ok) {
        const err = await res.json()
        console.error("Resend error:", err)
        // Still return success to user — log the failure server-side
      }
    } else {
      // No email API configured — log submission for now
      console.log("[Contact Form Submission]", { name, email, phone, subject, message })
    }

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("[Contact API Error]", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
