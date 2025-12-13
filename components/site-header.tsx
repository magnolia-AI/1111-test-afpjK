"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Search, User, Globe, MapPin, Phone, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
  SheetHeader,
  SheetDescription,
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
      image: "/images/news-easy-swedish.jpg",
      href: "#"
    },
    links: [
      "Allergier", "Barns sjukdomar", "Cancer", "Diabetes", "Förkylning & influensa",
      "Hud & hår", "Hjärta & blodkärl", "Infektioner", "Mage & tarm", "Psykisk hälsa"
    ]
  },
  {
    title: "Barn & gravid",
    featured: {
      title: "Graviditetskalender",
      description: "Följ fostrets utveckling vecka för vecka genom hela graviditeten.",
      image: "/images/news-lice-check.jpg",
      href: "#"
    },
    links: [
      "Att bli förälder", "Graviditet", "Förlossning", "Amning", 
      "Barns utveckling", "Barns rättigheter", "Sjukdomar hos barn", "Vård av barn"
    ]
  },
  {
    title: "Liv & hälsa",
    featured: {
        title: "Hälsosamma vanor",
        description: "Tips och råd för ett friskare liv genom motion och bra mat.",
        image: "/images/news-sexual-health.jpg", // Using another available image
        href: "#"
    },
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
      "sticky top-0 z-50 w-full transition-all duration-300 ease-in-out border-b",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-sm border-gray-200" : "bg-white border-transparent"
    )}>
      {/* Top Utility Bar */}
      <div className="hidden lg:block bg-[#F5F5F5] border-b border-gray-200/60 py-2.5 text-[13px] font-medium text-[#333333]">
        <div className="container px-4 flex justify-between items-center max-w-7xl mx-auto">
          <div className="flex items-center gap-6">
            <Link href="#" className="flex items-center gap-1.5 hover:text-[#D11241] transition-colors group">
              <MapPin className="h-3.5 w-3.5 text-muted-foreground group-hover:text-[#D11241]" />
              <span>Välj region</span>
            </Link>
            <Link href="#" className="flex items-center gap-1.5 hover:text-[#D11241] transition-colors group">
              <Globe className="h-3.5 w-3.5 text-muted-foreground group-hover:text-[#D11241]" />
              <span>Other languages</span>
            </Link>
          </div>
          <div className="flex items-center gap-6">
             <Link href="#" className="hover:text-[#D11241] transition-colors">Teckenspråk</Link>
             <Link href="#" className="hover:text-[#D11241] transition-colors">Lättläst</Link>
             <div className="w-px h-3.5 bg-gray-300"></div>
             <Link href="#" className="flex items-center gap-1.5 hover:text-[#D11241] transition-colors group">
              <Phone className="h-3.5 w-3.5 text-muted-foreground group-hover:text-[#D11241]" />
              <span>Kontakt</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <div className="container px-4 max-w-7xl mx-auto">
        <div className="flex h-20 items-center justify-between gap-6">
          
          {/* Logo Section */}
          <Link href="/" className="flex items-center gap-3 group relative z-50">
            <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#D11241] text-white font-bold text-lg shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-300">
              1177
            </div>
            <div className="hidden xl:flex flex-col">
              <span className="text-[#D11241] font-bold leading-none text-xl tracking-tighter">Vårdguiden</span>
              <span className="text-[11px] text-[#555] font-semibold tracking-widest uppercase mt-0.5 opacity-80">Tryggt om din hälsa</span>
            </div>
          </Link>

          {/* Desktop Navigation - Mega Menu */}
          <div className="hidden lg:flex flex-1 justify-center">
            <NavigationMenu>
              <NavigationMenuList className="gap-1">
                {menuData.map((category) => (
                  <NavigationMenuItem key={category.title}>
                    <NavigationMenuTrigger className="bg-transparent text-[15px] font-semibold text-[#1a1a1a] hover:text-[#D11241] data-[state=open]:text-[#D11241] data-[state=open]:bg-primary/5 focus:bg-primary/5 hover:bg-primary/5 px-4 py-2.5 h-auto rounded-full transition-all">
                      {category.title}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[500px] lg:w-[750px] lg:grid-cols-[280px_1fr]">
                        {/* Featured High-Quality Image Card */}
                        <li className="row-span-3">
                          <Link
                            className="flex h-full w-full select-none flex-col justify-end rounded-lg no-underline outline-none focus:shadow-md transition-all duration-300 relative overflow-hidden group/card shadow-sm hover:shadow-lg border border-gray-100"
                            href={category.featured.href}
                          >
                            <div className="absolute inset-0 z-0">
                                <Image 
                                    src={category.featured.image}
                                    alt={category.featured.title}
                                    fill
                                    className="object-cover group-hover/card:scale-105 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover/card:opacity-90 transition-opacity" />
                            </div>
                            
                            <div className="relative z-10 p-6">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="inline-flex px-2 py-0.5 rounded text-[10px] font-bold bg-[#D11241] text-white uppercase tracking-wider">
                                    Utvalt
                                </span>
                              </div>
                              <div className="mb-2 text-xl font-bold leading-tight text-white group-hover/card:text-[#FBE6EA] transition-colors">
                                {category.featured.title}
                              </div>
                              <p className="text-sm leading-relaxed text-gray-200 line-clamp-3">
                                {category.featured.description}
                              </p>
                              <div className="mt-4 flex items-center text-xs font-bold text-white uppercase tracking-wider group-hover/card:translate-x-1 transition-transform">
                                Läs mer <ChevronRight className="h-3 w-3 ml-1" />
                              </div>
                            </div>
                          </Link>
                        </li>

                        {/* Link List */}
                        <div className="grid grid-cols-2 gap-x-6 gap-y-1 p-2">
                           {category.links?.map((link) => (
                             <ListItem key={link} href="#" title={link} />
                           ))}
                           <div className="col-span-2 mt-2 pt-3 border-t border-gray-100">
                                <ListItem href="#" title="Se alla artiklar" className="text-[#D11241] hover:text-[#D11241] hover:bg-[#D11241]/5 font-bold" icon={<ChevronRight className="h-4 w-4 ml-auto" />} />
                           </div>
                        </div>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>
                ))}
                
                <NavigationMenuItem>
                  <Link href="#" legacyBehavior passHref>
                    <NavigationMenuLink className={cn(navigationMenuTriggerStyle(), "bg-transparent text-[15px] font-semibold text-[#1a1a1a] hover:text-[#D11241] focus:bg-primary/5 hover:bg-primary/5 px-4 py-2.5 h-auto rounded-full transition-all cursor-pointer")}>
                      Hitta vård
                    </NavigationMenuLink>
                  </Link>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>

          {/* Right Side Actions */}
          <div className="flex items-center gap-2 sm:gap-4">
            <button className="hidden sm:flex items-center gap-2 px-3 py-2 rounded-full text-sm font-medium text-muted-foreground hover:text-[#333333] hover:bg-gray-100 transition-colors group">
              <Search className="h-4 w-4 group-hover:scale-110 transition-transform" />
              <span className="hidden lg:inline">Sök</span>
            </button>
            
            <Button className="font-bold gap-2 rounded-full px-5 h-10 bg-[#3B6694] hover:bg-[#2A4A6D] text-white shadow-sm hover:shadow-md transition-all active:scale-95">
              <User className="h-4 w-4" />
              <span>Logga in</span>
            </Button>

            {/* Mobile Menu Trigger */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden text-[#333333] hover:bg-gray-100 rounded-full h-10 w-10">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Öppna meny</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] p-0 border-l border-gray-200">
                <SheetHeader className="px-6 py-4 border-b bg-gray-50/50">
                  <SheetTitle className="text-left flex items-center gap-2">
                    <div className="h-8 w-8 rounded-full bg-[#D11241] text-white flex items-center justify-center text-sm font-bold">1177</div>
                    <span className="text-[#333333]">Meny</span>
                  </SheetTitle>
                  <SheetDescription className="sr-only">Navigationsmeny</SheetDescription>
                </SheetHeader>
                
                <div className="flex flex-col h-[calc(100vh-80px)] overflow-y-auto">
                   <nav className="flex flex-col p-4 gap-2">
                     {menuData.map((category) => (
                       <div key={category.title} className="rounded-lg border border-gray-100 shadow-sm overflow-hidden mb-2">
                         <div className="bg-gray-50/80 px-4 py-3 font-bold text-[#333333]">{category.title}</div>
                         <div className="bg-white p-2 flex flex-col gap-1">
                           {category.links.slice(0, 5).map(link => (
                             <Link key={link} href="#" className="px-3 py-2 text-sm text-gray-600 hover:text-[#D11241] hover:bg-[#D11241]/5 rounded-md transition-colors flex items-center justify-between group">
                                {link}
                                <ChevronRight className="h-3 w-3 opacity-0 group-hover:opacity-100 transition-opacity text-[#D11241]" />
                             </Link>
                           ))}
                           <div className="relative h-24 mt-2 rounded-md overflow-hidden group">
                              <Image 
                                src={category.featured.image} 
                                alt={category.featured.title} 
                                fill 
                                className="object-cover group-hover:scale-105 transition-transform duration-500" 
                              />
                              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-3">
                                <span className="text-white text-xs font-bold">{category.featured.title}</span>
                              </div>
                           </div>
                         </div>
                       </div>
                     ))}
                     <Link href="#" className="flex items-center justify-between px-4 py-3 font-semibold text-[#333333] hover:text-[#D11241] border rounded-lg hover:border-[#D11241]/20 hover:bg-[#D11241]/5 transition-all">
                       Hitta vård
                       <Search className="h-4 w-4" />
                     </Link>
                   </nav>
                   
                   <div className="mt-auto p-4 bg-gray-50 border-t space-y-3">
                      <Button variant="outline" className="w-full justify-start gap-3 border-gray-200 hover:border-[#D11241] hover:text-[#D11241]">
                        <MapPin className="h-4 w-4 text-muted-foreground" /> Välj region
                      </Button>
                      <Button variant="outline" className="w-full justify-start gap-3 border-gray-200 hover:border-[#D11241] hover:text-[#D11241]">
                        <Globe className="h-4 w-4 text-muted-foreground" /> Other languages
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
  React.ComponentPropsWithoutRef<"a"> & { icon?: React.ReactNode }
>(({ className, title, children, icon, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "flex select-none items-center space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground text-sm font-medium text-gray-700 hover:text-[#D11241] group",
            className
          )}
          {...props}
        >
          <div className="flex-1">
            <div className="leading-none">{title}</div>
            {children && (
              <p className="line-clamp-2 text-sm leading-snug text-muted-foreground mt-1">
                {children}
              </p>
            )}
          </div>
          {icon}
        </a>
      </NavigationMenuLink>
    </li>
  )
})
ListItem.displayName = "ListItem"

