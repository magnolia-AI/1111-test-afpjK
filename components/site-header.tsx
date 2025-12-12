"use client"

import * as React from "react"
import Link from "next/link"
import { Menu, Search, User, Globe, MapPin, ChevronDown, Phone } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"

const menuData = [
  {
    title: "Sjukdomar & besvär",
    featured: {
      title: "När ska jag söka vård?",
      description: "Läs om vanliga symtom och när du behöver kontakta vården.",
      image: "/images/news-easy-swedish.jpg" // Reusing an existing image for now
    },
    links: [
      "Allergier", "Barns sjukdomar", "Cancer", "Diabetes", "Förkylning & influensa",
      "Hud & hår", "Hjärta & blodkärl", "Infecktioner", "Mage & tarm", "Psykisk hälsa"
    ]
  },
  {
    title: "Barn & gravid",
    featured: {
      title: "Graviditetskalender",
      description: "Följ fostrets utveckling vecka för vecka.",
       image: "/images/news-lice-check.jpg"
    },
    links: [
      "Att bli förälder", "Graviditet", "Förlossning", "Amning", 
      "Barns utveckling", "Barns rättigheter", "Sjukdomar hos barn", "Vård av barn"
    ]
  },
  {
    title: "Liv & hälsa",
    links: [
      "Alkohol & tobak", "Arbetshälsa", "Fysisk aktivitet", "Mat & näring", 
      "Stress & återhämtning", "Sexuell hälsa", "Tandhälsa", "Träning"
    ]
  }
]

export function SiteHeader() {
  const [isScrolled, setIsScrolled] = React.useState(false)

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200 border-b",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm" : "bg-white"
    )}>
      {/* Top Utility Bar - Hidden on mobile, visible on desktop */}
      <div className="hidden lg:block bg-[#F5F5F5] border-b border-gray-100 py-2 text-sm text-[#333333]">
        <div className="container px-4 flex justify-between items-center">
          <div className="flex items-center gap-6">
            <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <MapPin className="h-3.5 w-3.5" />
              <span className="font-medium">Välj region</span>
            </Link>
            <Link href="#" className="flex items-center gap-2 hover:text-primary transition-colors">
              <Globe className="h-3.5 w-3.5" />
              <span>Other languages</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
             <Link href="#" className="hover:text-primary transition-colors">Teckenspråk</Link>
             <Link href="#" className="hover:text-primary transition-colors">Lättläst</Link>
             <div className="w-px h-3 bg-gray-300"></div>
             <Link href="#" className="flex items-center gap-2 font-semibold hover:text-primary transition-colors">
              <Phone className="h-3.5 w-3.5" />
              <span>Kontakt</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container px-4">
        <div className="flex h-20 items-center justify-between gap-4">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#D11241] text-white font-bold text-xl shadow-sm group-hover:scale-105 transition-transform duration-200">
              1177
            </div>
            <div className="hidden xl:flex flex-col">
              <span className="text-[#D11241] font-bold leading-none text-xl tracking-tight">Vårdguiden</span>
              <span className="text-xs text-muted-foreground font-medium tracking-wide uppercase mt-0.5">Tryggt om din hälsa</span>
            </div>
          </Link>

          {/* Desktop Navigation - Mega Menu */}
          <div className="hidden lg:flex flex-1 justify-center px-4">
            <NavigationMenu>
              <NavigationMenuList>
                {menuData.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger className="bg-transparent text-base font-semibold text-[#333333] hover:text-[#D11241] data-[state=open]:text-[#D11241] focus:bg-transparent hover:bg-transparent px-3">
                      {category.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[600px] lg:grid-cols-[1fr_1.5fr]">
                        {category.featured ? (
                          <li className="row-span-3">
                            <Link
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted to-muted/80 p-6 no-underline outline-none focus:shadow-md hover:shadow-lg transition-shadow duration-200 relative overflow-hidden group"
                              href="#"
                            >
                              {/* Abstract visual decoration */}
                              <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                                <div className="h-24 w-24 rounded-full bg-[#D11241] blur-2xl"></div>
                              </div>
                              
                              <div className="relative z-10">
                                <div className="mb-2 mt-4 text-lg font-bold leading-tight text-[#D11241]">
                                  {category.featured.title}
                                </div>
                                <p className="text-sm leading-tight text-muted-foreground">
                                  {category.featured.description}
                                </p>
                              </div>
                            </Link>
                          </li>
                        ) : (
                          <li className="row-span-3">
                            <div className="flex h-full w-full items-center justify-center bg-muted/50 rounded-md p-6">
                              <span className="text-muted-foreground italic">Ingen utvald artikel</span>
                            </div>
                          </li>
                        )}
                        <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                           {category.links?.map((link) => (
                             <ListItem key={link} href="#" title={link} />
                           ))}
                           <ListItem href="#" title="Se allt..." className="text-[#D11241] font-bold" />
                        </div>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                
                {/* Regular links for items without submenus */}
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-base font-semibold text-[#333333] hover:text-[#D11241] focus:bg-transparent hover:bg-transparent px-3 cursor-pointer")}>
                      Hitta vård
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="icon" className="hidden sm:flex text-[#333333] hover:text-[#D11241] hover:bg-[#D11241]/5">
              <Search className="h-5 w-5" />
              <span className="sr-only">Sök</span>
            </Button>
            
            <Button className="font-semibold gap-2 rounded-full px-6 bg-[#3B6694] hover:bg-[#2A4A6D] text-white shadow-sm transition-all hover:shadow-md">
              <User className="h-4 w-4" />
              Logga in
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-[#333333]">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Meny</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col h-full mt-6">
                   <nav className="flex flex-col gap-1">
                     {menuData.map((category) => (
                       <div key={category.title} className="border-b py-4">
                         <div className="font-semibold text-lg hover:text-[#D11241] mb-2">{category.title}</div>
                         <div className="flex flex-col gap-2 pl-4 border-l-2 border-muted">
                           {category.links.slice(0, 4).map(link => (
                             <Link key={link} href="#" className="text-sm text-muted-foreground hover:text-[#D11241]">{link}</Link>
                           ))}
                         </div>
                       </div>
                     ))}
                     <Link href="#" className="text-lg font-semibold py-4 hover:text-[#D11241] border-b">
                       Hitta vård
                     </Link>
                   </nav>
                   
                   <div className="mt-auto py-6 space-y-4">
                      <Button variant="outline" className="w-full justify-start gap-2 border-primary/20 text-primary hover:bg-primary/5">
                        <MapPin className="h-4 w-4" /> Välj region
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-2 border-primary/20 text-primary hover:bg-primary/5">
                        <Globe className="h-4 w-4" /> Other languages
                      </Button>
                   </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>

        </div>
      </div>
    </header>
  )
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          {children && (
             <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
              {children}
            </p>
          )} 
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

