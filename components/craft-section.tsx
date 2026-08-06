import { Flame, Leaf, Timer } from "lucide-react"

const CARDS = [
  {
    icon: Leaf,
    title: "Single Origin Sourcing",
    body: "We travel to remote estates, hand-selecting micro-lots from farmers who share our obsession with terroir.",
  },
  {
    icon: Flame,
    title: "Small-Batch Roasting",
    body: "Every batch is roasted in-house on vintage drum roasters, profiled to coax out each bean's rarest notes.",
  },
  {
    icon: Timer,
    title: "Precision Brewing",
    body: "Water temperature, grind, and timing calibrated to the gram — a discipline practiced thousands of times over.",
  },
]

export function CraftSection() {
  return (
    <section id="craft" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-16 max-w-2xl">
          <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-primary">
            <span className="h-px w-8 bg-primary" />
            The Roast Craft
          </span>
          <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
            A devotion to the bean, from farm to final pour.
          </h2>
        </div>

        {/* Asymmetrical grid */}
        <div className="grid gap-6 lg:grid-cols-12">
          {/* Large image container */}
          <div className="group relative overflow-hidden rounded-3xl lg:col-span-7 lg:row-span-2">
            <img
              src="/roaster.png"
              alt="A brass coffee roasting machine in a moody roastery"
              className="h-full min-h-80 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
            <div className="absolute bottom-0 left-0 p-8">
              <p className="font-serif text-2xl font-semibold text-foreground">
                The Roastery
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted-foreground">
                Where green beans become liquid gold — our heart of operations,
                open to the few who wish to witness the craft.
              </p>
            </div>
          </div>

          {/* Secondary image */}
          <div className="group relative overflow-hidden rounded-3xl lg:col-span-5">
            <img
              src="/roast-craft.png"
              alt="Close up of glossy roasted coffee beans"
              className="h-56 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 lg:h-full"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
          </div>

          {/* Interactive cards */}
          <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-2">
            {CARDS.map((card) => (
              <article
                key={card.title}
                className="group rounded-3xl border border-border bg-card/60 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 hover:bg-card"
              >
                <div className="mb-5 inline-flex h-11 w-11 items-center justify-center rounded-full bg-primary/12 text-primary transition-colors duration-300 group-hover:bg-primary group-hover:text-primary-foreground">
                  <card.icon className="h-5 w-5" />
                </div>
                <h3 className="font-serif text-lg font-semibold text-foreground">
                  {card.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {card.body}
                </p>
              </article>
            ))}
            <div className="flex flex-col justify-center rounded-3xl border border-primary/30 bg-primary/10 p-6">
              <p className="font-serif text-4xl font-semibold text-primary">12yrs</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Refining a single craft — the perfect cup.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
