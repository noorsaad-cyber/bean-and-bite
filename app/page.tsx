import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { CraftSection } from "@/components/craft-section"
import { MenuSection } from "@/components/menu-section"
import { Testimonials } from "@/components/testimonials"
import { SiteFooter } from "@/components/site-footer"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <CraftSection />
        <MenuSection />
        <Testimonials />
      </main>
      <SiteFooter />
    </div>
  )
}
