"use client"

import { useReveal } from "@/hooks/useReveal"

/** Mounts the scroll-reveal IntersectionObserver globally. Renders nothing. */
export function RevealObserver() {
  useReveal()
  return null
}
