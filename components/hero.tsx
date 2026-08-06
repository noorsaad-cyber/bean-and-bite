import { Star, ArrowDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img
          src="/hero-coffee.png"
          alt="A barista pouring espresso in a dimly lit luxury coffee bar"
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/80 to-background/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/40" />
      </div>

      <div className="relative mx-auto w-full max-w-7xl px-6 pt-28 lg:px-10">
        <div className="max-w-2xl">
          <span className="mb-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-8 bg-primary" />
            Specialty Coffee House
          </span>

          <h1 className="font-serif text-5xl font-semibold leading-[1.05] tracking-tight text-balance text-foreground sm:text-6xl lg:text-7xl">
            Crafted to Perfection. Brewed for the Few.
          </h1>

          <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground text-pretty">
            An intimate temple of single-origin roasts and artisanal pastries.
            Every cup is a ritual, every detail obsessed over — reserved for those
            who savour the extraordinary.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-4">
            <a
              href="#menu"
              className="group inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-sm font-semibold text-primary-foreground transition-transform duration-300 hover:scale-105"
            >
              Explore Menu
              <ArrowDown className="h-4 w-4 transition-transform duration-300 group-hover:translate-y-0.5" />
            </a>
            <a
              href="#craft"
              className="inline-flex items-center gap-2 rounded-full border border-border px-7 py-3.5 text-sm font-semibold text-foreground transition-colors duration-300 hover:bg-foreground/5"
            >
              Our Craft
            </a>
          </div>
        </div>
      </div>

      {/* Floating glassmorphism rating badge */}
      <div className="absolute bottom-10 right-6 z-10 lg:bottom-16 lg:right-10">
        <div className="flex items-center gap-4 rounded-2xl border border-border bg-card/40 px-5 py-4 backdrop-blur-xl">
          <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/15">
            <Star className="h-6 w-6 fill-primary text-primary" />
          </div>
          <div>
            <p className="font-serif text-xl font-semibold text-foreground">4.9&#9733;</p>
            <p className="text-xs uppercase tracking-widest text-muted-foreground">
              Rated Coffee
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
