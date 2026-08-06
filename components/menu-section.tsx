"use client"

import { useState } from "react"

type Item = {
  name: string
  desc: string
  price: string
  image: string
  tags: string[]
}

const MENU: Record<string, Item[]> = {
  Espresso: [
    {
      name: "Reserve Espresso",
      desc: "A concentrated shot of our rarest Ethiopian micro-lot, syrupy and floral.",
      price: "$6",
      image: "/menu-espresso.png",
      tags: ["Single Origin", "Bestseller"],
    },
    {
      name: "Cortado Noir",
      desc: "Equal parts espresso and velvet-steamed milk, balanced to perfection.",
      price: "$7",
      image: "/menu-espresso.png",
      tags: ["House Favourite"],
    },
    {
      name: "Gold Flat White",
      desc: "Double ristretto crowned with silk microfoam and a whisper of honey.",
      price: "$8",
      image: "/menu-espresso.png",
      tags: ["Signature"],
    },
  ],
  "Cold Brews": [
    {
      name: "24-Hour Cold Brew",
      desc: "Slow-steeped for a full day — smooth, chocolatey, and impossibly clean.",
      price: "$9",
      image: "/menu-coldbrew.png",
      tags: ["Bestseller"],
    },
    {
      name: "Nitro Reserve",
      desc: "Cascading nitrogen pour with a cascading crema and creamy body.",
      price: "$10",
      image: "/menu-coldbrew.png",
      tags: ["Limited"],
    },
    {
      name: "Tonic & Origin",
      desc: "Bright single-origin cold brew lengthened with artisanal tonic.",
      price: "$11",
      image: "/menu-coldbrew.png",
      tags: ["Single Origin"],
    },
  ],
  "Artisanal Pastries": [
    {
      name: "Cru Croissant",
      desc: "36-layer laminated pastry, baked golden with French cultured butter.",
      price: "$7",
      image: "/menu-pastry.png",
      tags: ["Bestseller"],
    },
    {
      name: "Pistachio Escargot",
      desc: "Buttery spiral filled with house pistachio cream and orange zest.",
      price: "$9",
      image: "/menu-pastry.png",
      tags: ["Signature"],
    },
    {
      name: "Dark Cocoa Bostock",
      desc: "Brioche soaked in espresso syrup, almond frangipane, single-origin cocoa.",
      price: "$8",
      image: "/menu-pastry.png",
      tags: ["New"],
    },
  ],
}

const TABS = Object.keys(MENU)

export function MenuSection() {
  const [active, setActive] = useState(TABS[0])

  return (
    <section id="menu" className="relative py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="mb-12 flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
          <div className="max-w-xl">
            <span className="mb-4 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.35em] text-primary">
              <span className="h-px w-8 bg-primary" />
              Signature Menu
            </span>
            <h2 className="font-serif text-4xl font-semibold leading-tight tracking-tight text-balance text-foreground sm:text-5xl">
              A curated selection, brewed with intent.
            </h2>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2 rounded-full border border-border bg-card/50 p-1.5 backdrop-blur-sm">
            {TABS.map((tab) => (
              <button
                key={tab}
                type="button"
                onClick={() => setActive(tab)}
                className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
                  active === tab
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {MENU[active].map((item) => (
            <article
              key={item.name}
              className="group relative overflow-hidden rounded-3xl border border-border bg-card/60 backdrop-blur-sm transition-all duration-500 hover:-translate-y-1.5 hover:border-primary/40"
            >
              <div className="absolute inset-0 -z-10 opacity-0 blur-2xl transition-opacity duration-500 group-hover:opacity-100">
                <div className="absolute inset-x-8 top-1/2 h-24 rounded-full bg-primary/25" />
              </div>

              <div className="relative overflow-hidden">
                <img
                  src={item.image || "/placeholder.svg"}
                  alt={item.name}
                  className="h-52 w-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent" />
                <div className="absolute left-4 top-4 flex flex-wrap gap-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-border bg-background/60 px-3 py-1 text-[11px] font-medium uppercase tracking-wide text-primary backdrop-blur-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-start justify-between gap-3">
                  <h3 className="font-serif text-xl font-semibold text-foreground">
                    {item.name}
                  </h3>
                  <span className="rounded-full bg-primary/12 px-3 py-1 font-serif text-base font-semibold text-primary">
                    {item.price}
                  </span>
                </div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {item.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
