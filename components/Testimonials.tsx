'use client'

import { useEffect, useState, useCallback } from 'react'
import Image from 'next/image'
import { ChevronLeft, ChevronRight, Star } from 'lucide-react'

const testimonials = [
  {
    id: 1,
    name: 'Adaeze Okonkwo',
    country: 'Nigeria',
    university: 'Stanford University',
    program: 'Computer Science PhD',
    quote: 'CPI covered my WES evaluation and application fees. Without their support I would not have been able to apply to my dream schools.',
    image: 'https://i.pinimg.com/1200x/1f/c9/6e/1fc96e1619b913eade6eb6533f72cf83.jpg',
  },
  {
    id: 2,
    name: 'Kwame Mensah',
    country: 'Ghana',
    university: 'MIT',
    program: 'Electrical Engineering MS',
    quote: 'My mentor helped me craft a compelling statement of purpose and navigate the full application process. I received full funding at MIT!',
    image: 'https://i.pinimg.com/1200x/d9/d4/1f/d9d41f6b647531ad35b7af392cf1b939.jpg',
  },
  {
    id: 3,
    name: 'Fatima Hassan',
    country: 'Kenya',
    university: 'Harvard University',
    program: 'Public Health MPH',
    quote: 'They supported me with SEVIS fees and visa costs. The team genuinely cared about my success. Forever grateful for this opportunity.',
    image: 'https://i.pinimg.com/736x/08/06/df/0806dfe00e99e58f482759ad2e91a3c6.jpg',
  },
  {
    id: 4,
    name: 'Samuel Osei',
    country: 'Ghana',
    university: 'Yale University',
    program: 'Economics MA',
    quote: 'From GRE support to visa guidance, Creative Path Inspired was with me every step of the way. Their dedication is truly remarkable.',
    image: 'https://i.pinimg.com/736x/d5/ba/54/d5ba54723c280d0c23ea6d361cb348af.jpg',
  },
  {
    id: 5,
    name: 'Amina Diallo',
    country: 'Senegal',
    university: 'Columbia University',
    program: 'International Affairs MIA',
    quote: 'The application fee support allowed me to apply to multiple top universities. I received offers from 5 schools and chose Columbia!',
    image: 'https://i.pinimg.com/736x/00/f0/aa/00f0aa44ac079332cda0e57fc44fd241.jpg',
  },
]

export function Testimonials() {
  const [current, setCurrent] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [visibleCount, setVisibleCount] = useState(3)

  // Responsive visible count
  useEffect(() => {
    function update() {
      if (window.innerWidth < 640) setVisibleCount(1)
      else if (window.innerWidth < 1024) setVisibleCount(2)
      else setVisibleCount(3)
    }
    update()
    window.addEventListener('resize', update)
    return () => window.removeEventListener('resize', update)
  }, [])

  const total = testimonials.length
  const maxIndex = total - visibleCount

  const next = useCallback(() => {
    setCurrent((prev) => (prev >= maxIndex ? 0 : prev + 1))
  }, [maxIndex])

  const prev = useCallback(() => {
    setCurrent((prev) => (prev <= 0 ? maxIndex : prev - 1))
  }, [maxIndex])

  useEffect(() => {
    if (isPaused) return
    const interval = setInterval(next, 5000)
    return () => clearInterval(interval)
  }, [isPaused, next])

  // card width as percentage
  const cardWidthPct = 100 / visibleCount
  const translatePct = current * cardWidthPct

  return (
    <section
      className="bg-gray-50 dark:bg-[#0C1220] py-20 lg:py-28 transition-colors overflow-hidden"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">

        {/* Header */}
        <div className="mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between reveal">
          <div>
            <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-[#1E3A5F] dark:text-[#F59E0B]">
              Testimonials
            </p>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white lg:text-4xl text-balance">
              Success Stories
            </h2>
          </div>
          <div className="flex gap-3">
            <button
              onClick={prev}
              className="flex h-11 w-11 items-center justify-center rounded-full border-2 border-gray-300 dark:border-white/20 bg-white dark:bg-white/5 hover:bg-gray-100 dark:hover:bg-white/10 transition-colors"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="h-5 w-5 text-gray-700 dark:text-white" />
            </button>
            <button
              onClick={next}
              className="flex h-11 w-11 items-center justify-center rounded-full bg-[#1E3A5F] text-white hover:bg-[#152C4A] transition-colors"
              aria-label="Next testimonial"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>

        {/* Carousel track */}
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-500 ease-out"
            style={{ transform: `translateX(-${translatePct}%)` }}
          >
            {testimonials.map((t) => (
              <article
                key={t.id}
                className="flex-shrink-0 px-3"
                style={{ width: `${cardWidthPct}%` }}
              >
                <div className="flex h-full flex-col rounded-2xl border border-gray-200 dark:border-white/10 bg-white dark:bg-[#1D2535] p-6 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 dark:hover:shadow-white/5">

                  {/* Stars */}
                  <div className="mb-4 flex gap-0.5">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                    ))}
                  </div>

                  {/* Quote */}
                  <blockquote className="mb-6 flex-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300 line-clamp-4">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3 border-t border-gray-100 dark:border-white/10 pt-4">
                    <div className="relative h-10 w-10 shrink-0 overflow-hidden rounded-full ring-2 ring-[#1E3A5F]/20">
                      <Image src={t.image} alt={t.name} fill className="object-cover" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate text-sm font-semibold text-gray-900 dark:text-white">{t.name}</p>
                      <p className="truncate text-xs text-[#1E3A5F] dark:text-[#F59E0B]">
                        {t.university} &bull; {t.country}
                      </p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>

        {/* Dots */}
        <div className="mt-8 flex justify-center gap-2">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`rounded-full transition-all duration-300 ${
                i === current
                  ? 'w-7 h-2.5 bg-[#1E3A5F] dark:bg-[#F59E0B]'
                  : 'w-2.5 h-2.5 bg-gray-300 dark:bg-white/20 hover:bg-gray-400 dark:hover:bg-white/30'
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
