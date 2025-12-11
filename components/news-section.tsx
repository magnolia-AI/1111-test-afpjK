import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const articles = [
  {
    title: "Texter på lättläst svenska",
    summary: "Läs korta texter om bland annat sjukdomar, graviditet och hur vården i Sverige fungerar.",
    category: "Information",
    href: "#"
  },
  {
    title: "Så hittar du lössen",
    summary: "Läs mer om hur du hittar lössen och hur du blir av med dem.",
    category: "Barn & Skola",
    href: "#"
  },
  {
    title: "Anmäl dig till donationsregistret",
    summary: "Du kan säga ja eller nej till att donera organ och vävnader efter din död.",
    category: "Viktigt",
    href: "#"
  },
  {
    title: "Sexuell hälsa",
    summary: "Sexuell hälsa handlar om att må bra och kunna bestämma över sin kropp och sexualitet.",
    category: "Hälsa",
    href: "#"
  }
]

export function NewsSection() {
  return (
    <section className="bg-white py-16">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#333333]">Aktuellt</h2>
          <Button variant="link" className="text-primary font-semibold hidden md:flex">
            Se alla artiklar <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {articles.map((item, index) => (
            <Card key={index} className="overflow-hidden border shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
              <div className="h-40 bg-muted/30 w-full relative">
                 {/* Placeholder for images */}
                <div className={`absolute inset-0 flex items-center justify-center text-muted-foreground bg-primary/${5 + (index * 5)}`}>
                  Bild
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="text-xs font-bold text-primary mb-2 uppercase tracking-wide">
                  {item.category}
                </div>
                <CardTitle className="text-lg leading-tight group-hover:text-primary transition-colors">
                  <Link href={item.href} className="hover:underline decoration-primary decoration-2 underline-offset-4">
                    {item.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent className="flex-1">
                <p className="text-muted-foreground text-sm">
                  {item.summary}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-8 text-center md:hidden">
          <Button variant="outline" className="w-full">
            Se alla artiklar
          </Button>
        </div>
      </div>
    </section>
  )
}

