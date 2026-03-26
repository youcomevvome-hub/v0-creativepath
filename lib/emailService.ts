import nodemailer from 'nodemailer'

export interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  const user = process.env.GMAIL_USER
  const pass = process.env.GMAIL_APP_PASSWORD

  if (!user || !pass) {
    console.error('[Email] Missing Gmail credentials — GMAIL_USER or GMAIL_APP_PASSWORD not set')
    return { success: false, error: 'Email service not configured' }
  }

  // Create a fresh transporter per invocation so cold-start serverless works correctly
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: { user, pass },
  })

  try {
    const result = await transporter.sendMail({
      from: `"Creative Path Inspired" <${user}>`,
      to,
      subject,
      html,
      replyTo: replyTo || user,
    })
    console.log('[Email] Sent successfully:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('[Email] Failed to send:', error instanceof Error ? error.message : error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
