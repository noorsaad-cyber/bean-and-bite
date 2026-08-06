"use client"

import { useState } from "react"
import { Quote, ChevronLeft, ChevronRight } from "lucide-react"

const REVIEWS = [
  {
    quote:
      "Every visit feels like a private ceremony. The reserve espresso is the finest I've had outside of a roasting championship.",
    name: "Isabelle Moreau",
    role: "Food Editor, Palate Quarterly",
  },
  {
    quote:
      "Bean & Bite has quietly redefined what a coffee house can be. Moody, precise, and utterly unforgettable.",
    name: "Julian Reyes",
    role: "Michelin-listed Chef",
  },
  {
    quote:
      "The cold brew is a revelation and the pastries rival any patisserie in Paris. This is luxury done with restraint.",
    name: "Amara Okafor",
    role: "Travel Writer",
  },
]

export function Testimonials() {
  const [index, setIndex] = useState(0)

  const prev = () => setIndex((i) => (i - 1 + REVIEWS.length) % REVIEWS.length)
  const next = () => setIndex((i) => (i + 1) % REVIEWS.length)

  const review = REVIEWS[index]

  return (
    <section id="testimonials" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 text-center lg:px-10">
        <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-primary">
          Voices of the Few
        </span>

        <div className="relative mt-8 rounded-3xl border border-border bg-card/50 p-8 backdrop-blur-xl sm:p-12">
          <Quote className="mx-auto mb-6 h-10 w-10 fill-primary/20 text-primary" />

          <blockquote className="min-h-40 font-serif text-2xl font-medium leading-relaxed text-balance text-foreground sm:text-3xl">
            &ldquo;{review.quote}&rdquo;
          </blockquote>

          <div className="mt-8">
            <p className="font-semibold text-foreground">{review.name}</p>
            <p className="text-sm text-muted-foreground">{review.role}</p>
          </div>

          {/* Controls */}
          <div className="mt-10 flex items-center justify-center gap-4">
            <button
              type="button"
              aria-label="Previous testimonial"
              onClick={prev}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/5"
            >
              <ChevronLeft className="h-5 w-5" />
            </button>

            <div className="flex items-center gap-2">
              {REVIEWS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === index ? "w-8 bg-primary" : "w-2 bg-border"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              aria-label="Next testimonial"
              onClick={next}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-foreground/5"
            >
              <ChevronRight className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
