"use client"

import type React from "react"

import { useState } from "react"
import { MapPin, Clock, Camera, Send, Globe, ArrowRight, Check } from "lucide-react"

const HOURS = [
  { day: "Monday – Thursday", time: "7:00 — 20:00" },
  { day: "Friday", time: "7:00 — 22:00" },
  { day: "Saturday", time: "8:00 — 22:00" },
  { day: "Sunday", time: "8:00 — 18:00" },
]

export function SiteFooter() {
  const [email, setEmail] = useState("")
  const [sent, setSent] = useState(false)

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!email) return
    setSent(true)
    setEmail("")
    setTimeout(() => setSent(false), 3000)
  }

  return (
    <footer id="visit" className="relative border-t border-border pt-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid gap-10 lg:grid-cols-2">
          {/* Left: info + newsletter */}
          <div>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
              Come sit with us.
            </h2>
            <p className="mt-4 max-w-md text-muted-foreground leading-relaxed">
              Reserve a table, or simply wander in. The pour is always waiting.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <MapPin className="h-5 w-5" />
                </span>
                <div>
                  <p className="font-medium text-foreground">The Roastery</p>
                  <p className="text-sm text-muted-foreground">
                    Amman, Jordan — Abdoun, Sweifieh
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span className="mt-0.5 inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/12 text-primary">
                  <Clock className="h-5 w-5" />
                </span>
                <div className="w-full max-w-sm">
                  {HOURS.map((h) => (
                    <div
                      key={h.day}
                      className="flex items-center justify-between border-b border-border py-1.5 text-sm last:border-0"
                    >
                      <span className="text-muted-foreground">{h.day}</span>
                      <span className="font-medium text-foreground">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Newsletter */}
            <form onSubmit={onSubmit} className="mt-10">
              <label
                htmlFor="newsletter"
                className="mb-3 block text-xs font-medium uppercase tracking-[0.25em] text-primary"
              >
                Join the inner circle
              </label>
              <div className="flex flex-col gap-3 sm:flex-row">
                <input
                  id="newsletter"
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className="w-full rounded-full border border-border bg-card/50 px-5 py-3.5 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary"
                />
                <button
                  type="submit"
                  className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
                >
                  {sent ? (
                    <>
                      Subscribed <Check className="h-4 w-4" />
                    </>
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Right: map container */}
          <div className="relative min-h-80 overflow-hidden rounded-3xl border border-border">
            <iframe
              title="Map to Bean & Bite"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d108342.33230852086!2d35.8362544!3d31.9552179!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x151b5f8a11132451%3A0x9a85f34023924370!2sAmman!5e0!3m2!1sen!2sjo!4v1700000000000"
              className="absolute inset-0 h-full w-full grayscale-[0.4] contrast-125"
              style={{ border: 0, filter: "invert(0.9) hue-rotate(180deg) saturate(0.6)" }}
              loading="lazy"
            />
            <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-border" />
            <div className="pointer-events-none absolute bottom-4 left-4 rounded-2xl border border-border bg-background/70 px-4 py-3 backdrop-blur-xl">
              <p className="font-serif text-base font-semibold text-foreground">
                Bean &amp; Bite
              </p>
              <p className="text-xs text-muted-foreground">42 Amber Lane · Open now</p>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 flex flex-col items-center justify-between gap-6 border-t border-border py-8 sm:flex-row">
          <p className="font-serif text-lg font-semibold text-foreground">
            Bean <span className="text-primary">&amp;</span> Bite
          </p>

          <div className="flex items-center gap-3">
            {[Camera, Send, Globe].map((Icon, i) => (
              <a
                key={i}
                href="#"
                aria-label="Social media"
                className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary"
              >
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>

          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Bean &amp; Bite. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
