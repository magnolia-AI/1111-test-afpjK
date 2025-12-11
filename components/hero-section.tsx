import { Search } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"

export function HeroSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-24">
      <div className="container px-4 text-center">
        <h1 className="mb-8 text-4xl font-bold tracking-tight text-[#333333] md:text-5xl lg:text-6xl">
          Vad vill du göra?
        </h1>
        
        <div className="mx-auto max-w-2xl relative">
          <div className="relative flex items-center">
            <Search className="absolute left-4 h-6 w-6 text-muted-foreground" />
            <Input 
              type="search" 
              placeholder="Sök på 1177.se..." 
              className="h-14 rounded-full border-2 border-primary/20 bg-white pl-12 text-lg focus-visible:ring-primary shadow-sm"
            />
            <Button className="absolute right-2 rounded-full px-6 h-10" size="sm">
              Sök
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}


