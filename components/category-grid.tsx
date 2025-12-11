import { 
  Stethoscope, 
  MapPin, 
  Heart, 
  Baby, 
  Scale, 
  Monitor,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const categories = [
  {
    title: "Sjukdomar & besvär",
    description: "Fakta och råd om sjukdomar och besvär.",
    icon: Stethoscope,
    href: "#",
    color: "bg-red-100 text-primary",
  },
  {
    title: "Hitta vård",
    description: "Kontaktuppgifter till vården i hela Sverige.",
    icon: MapPin,
    href: "#",
    color: "bg-blue-100 text-blue-700",
  },
  {
    title: "Liv & hälsa",
    description: "Om hälsa, träning, mat och sex.",
    icon: Heart,
    href: "#",
    color: "bg-green-100 text-green-700",
  },
  {
    title: "Barn & föräldrar",
    description: "Att vänta och ha barn.",
    icon: Baby,
    href: "#",
    color: "bg-yellow-100 text-yellow-700",
  },
  {
    title: "Regler & rättigheter",
    description: "Dina rättigheter i vården.",
    icon: Scale,
    href: "#",
    color: "bg-purple-100 text-purple-700",
  },
  {
    title: "E-tjänster",
    description: "Gör dina vårdärenden via nätet.",
    icon: Monitor,
    href: "#",
    color: "bg-primary/10 text-primary",
  },
]

export function CategoryGrid() {
  return (
    <section className="container py-12 px-4">
      <h2 className="text-3xl font-bold mb-8 text-[#333333]">Utforska 1177</h2>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {categories.map((category) => (
          <Link key={category.title} href={category.href} className="group">
            <Card className="h-full border-none shadow-sm transition-all hover:shadow-md bg-white">
              <CardContent className="p-6 flex flex-col h-full">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${category.color}`}>
                  <category.icon className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4 flex-1">
                  {category.description}
                </p>
                <div className="flex items-center text-primary font-medium mt-auto group-hover:underline">
                  Läs mer <ArrowRight className="ml-1 h-4 w-4" />
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  )
}

