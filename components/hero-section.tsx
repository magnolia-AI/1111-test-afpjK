import { Search, Calendar, MapPin, Pill, ArrowRight } from "lucide-react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Enhanced Gradient Overlay */}
      <div className="absolute inset-0 z-0 select-none">
        <Image
          src="/images/hero-1177.jpg"
          alt="Vårdgivare som samtalar med patient i ljus miljö"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw" />

        <div className="absolute inset-0 bg-gradient-to-r from-white/95 via-white/80 to-white/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-transparent opacity-80" />
      </div>

      <div className="container relative z-10 px-4 pt-16 pb-24 md:py-32">
        <div className="max-w-3xl">
          <h1 className='mb-6 font-bold tracking-tight md:text-5xl lg:text-6xl drop-shadow-sm bg-transparent text-[#333333]'>
            Vad vill du göra nu??
          </h1>
          <p className="mb-10 text-lg md:text-xl text-muted-foreground/90 max-w-xl leading-relaxed">
            Här hittar du kvalitetssäkrad information om hälsa, sjukdomar och var du kan få vård.
          </p>
          
          <div className="relative mb-8 max-w-2xl group">
            <div className="relative flex items-center shadow-xl rounded-full bg-white transition-all duration-300 ring-1 ring-black/5 focus-within:ring-primary/30 focus-within:shadow-2xl focus-within:-translate-y-1">
              <Search className="absolute left-6 h-6 w-6 text-muted-foreground z-10 group-focus-within:text-primary transition-colors" />
              <Input
                type="search"
                placeholder="Sök på 1177.se..."
                className="h-16 w-full rounded-full border-0 bg-transparent pl-16 pr-32 text-lg file:text-foreground placeholder:text-muted-foreground/60 focus-visible:ring-0 focus-visible:ring-offset-0" />

              <div className="absolute right-2 top-2 bottom-2">
                <Button className="h-full rounded-full px-8 text-base font-bold bg-[#3B6694] hover:bg-[#2A4A6D] text-white shadow-sm transition-all hover:scale-105" size="sm">
                  Sök
                </Button>
              </div>
            </div>
            {/* Decorative glow */}
            <div className="absolute -inset-1 bg-primary/20 blur-xl opacity-0 rounded-full group-focus-within:opacity-100 transition-opacity duration-500 -z-10" />
          </div>

          <div className="flex flex-wrap gap-3 items-center text-sm font-medium">
            <span className="text-[#333333] mr-2">Populära tjänster:</span>
            <Button variant="outline" className="rounded-full border-primary/20 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-primary hover:text-primary transition-all">
              <Calendar className="mr-2 h-3.5 w-3.5" />
              Boka tid
            </Button>
            <Button variant="outline" className="rounded-full border-primary/20 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-primary hover:text-primary transition-all">
              <MapPin className="mr-2 h-3.5 w-3.5" />
              Hitta vårdcentral
            </Button>
            <Button variant="outline" className="rounded-full border-primary/20 bg-white/50 backdrop-blur-sm hover:bg-white hover:border-primary hover:text-primary transition-all">
              <Pill className="mr-2 h-3.5 w-3.5" />
              Förnya recept
            </Button>
          </div>
        </div>
      </div>
    </section>);

}
