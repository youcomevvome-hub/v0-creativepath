'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { Button } from '@/components/ui/button'

const testimonials = [
  {
    id: 1,
    name: 'Adaeze Okonkwo',
    country: 'Nigeria',
    university: 'Stanford University',
    program: 'Computer Science PhD',
    quote: 'Creative Path Inspired covered my entire WES evaluation and application fees. Without their support, I wouldn\'t have been able to apply to my dream schools. Now I\'m pursuing my PhD at Stanford!',
    image: 'https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 2,
    name: 'Kwame Mensah',
    country: 'Ghana',
    university: 'MIT',
    program: 'Electrical Engineering MS',
    quote: 'The mentorship program was invaluable. My mentor helped me craft a compelling statement of purpose and navigate the entire application process. I received full funding at MIT!',
    image: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 3,
    name: 'Fatima Hassan',
    country: 'Kenya',
    university: 'Harvard University',
    program: 'Public Health MPH',
    quote: 'They supported me with SEVIS fees and visa application costs. The team was incredibly responsive and genuinely cared about my success. Forever grateful for this opportunity.',
    image: 'https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 4,
    name: 'Samuel Osei',
    country: 'Ghana',
    university: 'Yale University',
    program: 'Economics MA',
    quote: 'From GRE fee support to visa guidance, Creative Path Inspired was with me every step of the way. Their dedication to helping African students is truly remarkable.',
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
  },
  {
    id: 5,
    name: 'Amina Diallo',
    country: 'Senegal',
    university: 'Columbia University',
    program: 'International Affairs MIA',
    quote: 'The application fee support allowed me to apply to multiple top universities. I received offers from 5 schools and chose Columbia with a full scholarship!',
    image: 'https://images.pexels.com/photos/3765114/pexels-photo-3765114.jpeg?auto=compress&cs=tinysrgb&w=200',
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
      className="bg-white dark:bg-[#0C1220] py-20 lg:py-28 transition-colors overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#2563EB]">
              Testimonials
            </p>
            <h2 className="text-4xl font-bold text-gray-900 dark:text-white lg:text-5xl text-balance">
              Success Stories<br />From Our Community
            </h2>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex gap-3">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="h-12 w-12 rounded-full border-2 border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button
              size="icon"
              onClick={next}
              className="h-12 w-12 rounded-full bg-[#2563EB] text-white hover:bg-[#1D4ED8] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Carousel */}
        <div className="relative overflow-hidden">
          <div 
            className="flex gap-6 transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${current * (100 / 1.5)}%)` }}
          >
            {testimonials.map((testimonial) => (
              <article
                key={testimonial.id}
                className="min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] flex-shrink-0"
              >
                <div className="h-full rounded-2xl border border-gray-200 dark:border-white/10 bg-gray-50 dark:bg-[#1D1D1F] p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                  {/* Top Section - Avatar and Rating */}
                  <div className="mb-6 flex items-start justify-between">
                    <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#2563EB]/20">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                      ))}
                    </div>
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 text-base leading-relaxed text-gray-700 dark:text-gray-300">
                    <Quote className="inline h-4 w-4 text-[#2563EB] mr-1 -mt-1" />
                    {testimonial.quote}
                  </blockquote>

                  {/* Author Info */}
                  <div className="border-t border-gray-200 dark:border-white/10 pt-6">
                    <p className="font-semibold text-gray-900 dark:text-white">{testimonial.name}</p>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.program}
                    </p>
                    <p className="text-xs text-[#2563EB] mt-1">
                      {testimonial.university} • {testimonial.country}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Pagination dots */}
        <div className="mt-12 flex justify-center gap-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`transition-all duration-300 rounded-full ${
                index === current 
                  ? 'w-8 h-3 bg-[#2563EB]' 
                  : 'w-3 h-3 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/30'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
