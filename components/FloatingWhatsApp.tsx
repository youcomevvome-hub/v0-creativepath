"use client"

import { useState, useEffect } from "react"

const WHATSAPP_CHANNEL = "https://whatsapp.com/channel/0029Vb7zSwH6LwHqQBzAxM0A"

export function FloatingWhatsApp() {
  const [isVisible, setIsVisible] = useState(false)
  const [showTooltip, setShowTooltip] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true)
      // Show tooltip after button appears
      setTimeout(() => setShowTooltip(true), 800)
      setTimeout(() => setShowTooltip(false), 4500)
    }, 1200)
    return () => clearTimeout(timer)
  }, [])

  if (!isVisible) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-2">
      {/* Tooltip */}
      <div
        className={`
          pointer-events-none flex items-center gap-2 rounded-2xl
          bg-[#1E3A5F] px-4 py-2.5 shadow-xl
          transition-all duration-500
          ${showTooltip ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}
        `}
      >
        <span className="text-xs font-semibold text-white whitespace-nowrap">Join our WhatsApp channel</span>
        {/* small arrow pointing right-down */}
        <span className="absolute -bottom-1.5 right-6 h-3 w-3 rotate-45 bg-[#1E3A5F]" />
      </div>

      {/* Button */}
      <a
        href={WHATSAPP_CHANNEL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Join our WhatsApp channel"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        className="relative flex h-16 w-16 items-center justify-center"
      >
        {/* Outermost slow ring */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]/25"
          style={{ animation: "wa-ring 3.5s ease-out infinite" }}
        />
        {/* Middle ring — offset delay */}
        <span
          className="absolute inset-0 rounded-full bg-[#25D366]/20"
          style={{ animation: "wa-ring 3.5s ease-out infinite 1.2s" }}
        />

        {/* Main button — glassmorphism + gradient */}
        <span
          className="
            relative flex h-14 w-14 items-center justify-center rounded-full
            bg-gradient-to-br from-[#25D366] to-[#128C7E]
            shadow-[0_8px_32px_rgba(37,211,102,0.45)]
            ring-2 ring-white/30
            transition-all duration-300
            hover:scale-110 hover:shadow-[0_12px_40px_rgba(37,211,102,0.6)]
            active:scale-95
          "
        >
          {/* WhatsApp logo SVG */}
          <svg
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 drop-shadow-sm"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M16 2C8.268 2 2 8.268 2 16c0 2.425.648 4.7 1.782 6.665L2 30l7.565-1.744A13.93 13.93 0 0016 30c7.732 0 14-6.268 14-14S23.732 2 16 2z"
              fill="white"
              fillOpacity="0.2"
            />
            <path
              d="M23.5 19.914c-.246-.123-1.455-.717-1.68-.799-.224-.082-.387-.123-.55.123-.164.246-.635.8-.778.963-.143.164-.287.184-.533.061-.246-.123-1.038-.382-1.976-1.218-.73-.651-1.223-1.455-1.366-1.7-.143-.246-.015-.379.107-.501.11-.11.246-.287.369-.43.123-.143.164-.246.246-.41.082-.164.041-.307-.02-.43-.062-.123-.551-1.328-.755-1.818-.199-.477-.401-.412-.551-.42l-.47-.008c-.163 0-.43.061-.655.307-.225.246-.86.84-.86 2.048s.88 2.377 1.002 2.541c.123.164 1.731 2.643 4.194 3.705.586.253 1.044.404 1.401.517.589.187 1.124.161 1.547.097.472-.07 1.455-.595 1.66-1.17.205-.573.205-1.065.143-1.168-.061-.103-.225-.164-.471-.287z"
              fill="white"
            />
            <path
              d="M16 4.5C9.649 4.5 4.5 9.649 4.5 16c0 2.21.638 4.272 1.741 6.011L4.5 27.5l5.657-1.725A11.455 11.455 0 0016 27.5c6.351 0 11.5-5.149 11.5-11.5S22.351 4.5 16 4.5z"
              stroke="white"
              strokeWidth="0.5"
              strokeOpacity="0.4"
              fill="none"
            />
          </svg>

          {/* Online status dot */}
          <span className="absolute bottom-0.5 right-0.5 h-3.5 w-3.5 rounded-full bg-white ring-2 ring-[#25D366] flex items-center justify-center">
            <span className="h-2 w-2 rounded-full bg-[#25D366]" />
          </span>
        </span>
      </a>
    </div>
  )
}
