"use client"

import { useEffect, useState, useCallback } from "react"
import { ChevronLeft, ChevronRight, Quote } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    id: 1,
    name: "Adaeze Okonkwo",
    country: "Nigeria",
    university: "Stanford University",
    program: "Computer Science PhD",
    quote: "Creative Path Inspired covered my entire WES evaluation and application fees. Without their support, I wouldn't have been able to apply to my dream schools. Now I'm pursuing my PhD at Stanford!",
    avatar: "AO",
    color: "bg-[#B7F34B]",
  },
  {
    id: 2,
    name: "Kwame Mensah",
    country: "Ghana",
    university: "MIT",
    program: "Electrical Engineering MS",
    quote: "The mentorship program was invaluable. My mentor helped me craft a compelling statement of purpose and navigate the entire application process. I received full funding at MIT!",
    avatar: "KM",
    color: "bg-[#2563EB]",
  },
  {
    id: 3,
    name: "Fatima Hassan",
    country: "Kenya",
    university: "Harvard University",
    program: "Public Health MPH",
    quote: "They supported me with SEVIS fees and visa application costs. The team was incredibly responsive and genuinely cared about my success. Forever grateful for this opportunity.",
    avatar: "FH",
    color: "bg-[#DB2777]",
  },
  {
    id: 4,
    name: "Samuel Osei",
    country: "Ghana",
    university: "Yale University",
    program: "Economics MA",
    quote: "From GRE fee support to visa guidance, Creative Path Inspired was with me every step of the way. Their dedication to helping African students is truly remarkable.",
    avatar: "SO",
    color: "bg-[#0891B2]",
  },
  {
    id: 5,
    name: "Amina Diallo",
    country: "Senegal",
    university: "Columbia University",
    program: "International Affairs MIA",
    quote: "The application fee support allowed me to apply to multiple top universities. I received offers from 5 schools and chose Columbia with a full scholarship!",
    avatar: "AD",
    color: "bg-[#7C3AED]",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length)
  }, [])

  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  // Auto-scroll carousel
  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isPaused, next])

  return (
    <section 
      id="testimonials" 
      className="bg-[#F5F5F7] dark:bg-[#0A0A0A] py-20 lg:py-28 transition-colors overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header - IMG_1338 style */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-2 inline-block text-xs font-semibold uppercase tracking-widest text-[#2563EB]">
              04 &nbsp; Testimonial
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white md:text-4xl">
              From Our<br />Scholar<br />Community
            </h2>
          </div>
          
          {/* Navigation */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-12 w-12 rounded-full border-2 border-gray-300 dark:border-gray-700 bg-white dark:bg-[#1D1D1F] hover:bg-gray-100 dark:hover:bg-gray-800"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              onClick={next}
              className="h-12 w-12 rounded-full bg-[#1D1D1F] dark:bg-white text-white dark:text-[#1D1D1F] hover:opacity-90"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel Container */}
        <div className="relative">
          <div 
            className="flex transition-transform duration-500 ease-out gap-6"
            style={{ transform: `translateX(-${current * (100 / 3)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="min-w-[calc(33.333%-16px)] flex-shrink-0 group"
              >
                <div className="h-full rounded-3xl bg-white dark:bg-[#1D1D1F] p-8 shadow-sm transition-all duration-300 hover:shadow-xl">
                  {/* Avatar & Quote icon */}
                  <div className="mb-6 flex items-center justify-between">
                    <div
                      className={`flex h-14 w-14 items-center justify-center rounded-full ${testimonial.color} text-sm font-bold text-white`}
                    >
                      {testimonial.avatar}
                    </div>
                    <Quote className="h-8 w-8 text-[#FACC15]" />
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    &ldquo;{testimonial.quote}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-gray-100 dark:border-gray-800 pt-4">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">
                      {testimonial.program}
                    </p>
                    <p className="text-xs text-gray-400 dark:text-gray-500">
                      {testimonial.university} &middot; {testimonial.country}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-8 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                index === current 
                  ? "w-8 bg-[#1D1D1F] dark:bg-white" 
                  : "w-2 bg-gray-300 dark:bg-gray-700 hover:bg-gray-400"
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
