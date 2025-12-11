import Link from "next/link"
import { Menu, Search, User } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background">
      <div className="container flex h-20 items-center justify-between px-4">
        {/* Mobile Menu & Logo */}
        <div className="flex items-center gap-4">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Meny</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#" className="text-lg font-semibold hover:text-primary">
                  Sjukdomar & besvär
                </Link>
                <Link href="#" className="text-lg font-semibold hover:text-primary">
                  Hitta vård
                </Link>
                <Link href="#" className="text-lg font-semibold hover:text-primary">
                  Liv & hälsa
                </Link>
                <Link href="#" className="text-lg font-semibold hover:text-primary">
                  Barn & föräldrar
                </Link>
              </nav>
            </SheetContent>
          </Sheet>

          <Link href="/" className="flex items-center gap-2">
            {/* 1177 Logo Simulation */}
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground font-bold text-lg">
              1177
            </div>
            <span className="text-2xl font-bold text-primary tracking-tight hidden sm:inline-block">
              1177
            </span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 ml-8">
          <Link href="#" className="text-sm font-medium hover:underline hover:text-primary underline-offset-4">
            Sjukdomar & besvär
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline hover:text-primary underline-offset-4">
            Hitta vård
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline hover:text-primary underline-offset-4">
            Liv & hälsa
          </Link>
          <Link href="#" className="text-sm font-medium hover:underline hover:text-primary underline-offset-4">
            Barn & föräldrar
          </Link>
        </nav>

        {/* Right Side Actions */}
        <div className="flex items-center gap-4">
          {/* Region Selector (Mock) */}
          <Button variant="ghost" className="hidden md:flex text-muted-foreground">
            Välj region
          </Button>
          
          <Button className="font-semibold gap-2 rounded-full px-6">
            <User className="h-4 w-4" />
            Logga in
          </Button>
        </div>
      </div>
    </header>
  )
}

