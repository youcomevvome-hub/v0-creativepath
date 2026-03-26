import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_APP_PASSWORD,
  },
})

export interface EmailOptions {
  to: string
  subject: string
  html: string
  replyTo?: string
}

export async function sendEmail({ to, subject, html, replyTo }: EmailOptions) {
  try {
    if (!process.env.GMAIL_USER || !process.env.GMAIL_APP_PASSWORD) {
      console.error('[Email] Missing Gmail credentials in environment')
      return { success: false, error: 'Email service not configured' }
    }

    const result = await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to,
      subject,
      html,
      replyTo: replyTo || process.env.GMAIL_USER,
    })

    console.log('[Email] Sent successfully:', result.messageId)
    return { success: true, messageId: result.messageId }
  } catch (error) {
    console.error('[Email] Failed to send:', error instanceof Error ? error.message : error)
    return { success: false, error: error instanceof Error ? error.message : 'Unknown error' }
  }
}
