'use client'

import { SiteHeader } from "@/components/site-header"
import { HeroSection } from "@/components/hero-section"
import { CategoryGrid } from "@/components/category-grid"
import { NewsSection } from "@/components/news-section"
import { SiteFooter } from "@/components/site-footer"

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex-1">
        <HeroSection />
        <CategoryGrid />
        <NewsSection />
        <section className="bg-primary text-white py-16">
          <div className="container px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">Vill du veta mer om hur 1177 fungerar?</h2>
            <p className="max-w-2xl mx-auto text-lg mb-8 opacity-90">
              1188 är hela Sveriges samlingsplats för information och tjänster inom hälsa och vård. 
              Vi finns på webben, på telefon och som app.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-white text-primary hover:bg-gray-100 font-bold py-3 px-8 rounded-full transition-colors">
                Läs om 1177
              </button>
              <button className="bg-transparent border-2 border-white hover:bg-white/10 text-white font-bold py-3 px-8 rounded-full transition-colors">
                Jobba med oss
              </button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  )
}


