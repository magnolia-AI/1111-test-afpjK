import { Search } from "lucide-react"
import Image from "next/image"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-1177.jpg"
          alt="Vårdgivare som samtalar med patient i ljus miljö"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-white/90 via-white/80 to-white/90" />
      </div>

      <div className="container relative z-10 px-4 text-center py-16 md:py-24">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-[#333333] md:text-5xl lg:text-6xl max-w-4xl mx-auto">
          Vad vill du göra?
        </h1>
        
        <div className="mx-auto max-w-2xl relative">
          <div className="relative flex items-center shadow-lg rounded-full">
            <Search className="absolute left-6 h-6 w-6 text-muted-foreground z-10" />
            <Input 
              type="search" 
              placeholder="Sök på 1177.se..." 
              className="h-16 rounded-full border-2 border-primary/10 bg-white pl-14 text-lg focus-visible:ring-primary shadow-sm hover:border-primary/30 transition-colors"
            />
            <Button className="absolute right-2 rounded-full px-8 h-12 text-base font-semibold" size="sm">
              Sök
            </Button>
          </div>
          <div className="mt-4 flex flex-wrap justify-center gap-2 text-sm text-muted-foreground font-medium">
            <span>Populärt:</span>
            <button className="hover:text-primary hover:underline">Boka tid</button>
            <span>•</span>
            <button className="hover:text-primary hover:underline">Hitta vårdcentral</button>
            <span>•</span>
            <button className="hover:text-primary hover:underline">Förnya recept</button>
          </div>
        </div>
      </div>
    </section>
  )
}

