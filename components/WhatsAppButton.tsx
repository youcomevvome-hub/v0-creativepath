'use client'

import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export function WhatsAppButton() {
  return (
    <a
      href="https://whatsapp.com/channel/0029Vb7zSwH6LwHqQBzAxM0A"
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-xl"
      aria-label="WhatsApp Channel"
      title="Join our WhatsApp Channel"
    >
      <MessageCircle className="h-6 w-6" />
    </a>
  )
}
