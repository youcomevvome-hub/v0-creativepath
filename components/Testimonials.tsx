"use client"

import { useState } from "react"
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
    color: "bg-highlight",
  },
  {
    id: 2,
    name: "Kwame Mensah",
    country: "Ghana",
    university: "MIT",
    program: "Electrical Engineering MS",
    quote: "The mentorship program was invaluable. My mentor helped me craft a compelling statement of purpose and navigate the entire application process. I received full funding at MIT!",
    avatar: "KM",
    color: "bg-scholarship",
  },
  {
    id: 3,
    name: "Fatima Hassan",
    country: "Kenya",
    university: "Harvard University",
    program: "Public Health MPH",
    quote: "They supported me with SEVIS fees and visa application costs. The team was incredibly responsive and genuinely cared about my success. Forever grateful for this opportunity.",
    avatar: "FH",
    color: "bg-success",
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)

  const next = () => setCurrent((prev) => (prev + 1) % testimonials.length)
  const prev = () => setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length)

  return (
    <section id="testimonials" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="mb-4 inline-block rounded-full bg-success/10 px-4 py-2 text-sm font-medium text-success">
              SUCCESS STORIES
            </span>
            <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl text-balance">
              Hear From Our Scholars
            </h2>
          </div>
          
          {/* Navigation */}
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-12 w-12 rounded-full"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="h-12 w-12 rounded-full"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <article
              key={testimonial.id}
              className={`group relative overflow-hidden rounded-3xl bg-card p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                index === current ? "ring-2 ring-primary" : ""
              }`}
            >
              {/* Quote Icon */}
              <Quote className="mb-4 h-8 w-8 text-primary/20" />

              {/* Quote */}
              <blockquote className="mb-6 text-base leading-relaxed text-foreground">
                &ldquo;{testimonial.quote}&rdquo;
              </blockquote>

              {/* Author Info */}
              <div className="flex items-center gap-4">
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-full ${testimonial.color} text-sm font-bold text-primary`}
                >
                  {testimonial.avatar}
                </div>
                <div>
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.program}, {testimonial.university}
                  </p>
                  <p className="text-xs text-muted-foreground">{testimonial.country}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
