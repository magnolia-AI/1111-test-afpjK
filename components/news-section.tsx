import Link from "next/link"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const news = [
  {
    title: "Vaccination mot influensa och covid-19",
    summary: "Nu pågår vaccinationerna. Läs om rekommendationerna för just din åldersgrupp.",
    date: "2024-01-15",
    category: "Aktuellt",
    image: "/images/vaccin.jpg" // Placeholder path
  },
  {
    title: "Nya regler för tandvård",
    summary: "Se vad som gäller för tandvårdsstödet från och med årsskiftet.",
    date: "2024-01-10",
    category: "Nyheter",
    image: "/images/tandvard.jpg" 
  },
  {
    title: "RS-virus sprids just nu",
    summary: "Var uppmärksam på symtom hos små barn. Här är råden du behöver veta.",
    date: "2024-01-05",
    category: "Hälsa",
    image: "/images/rsvirus.jpg" 
  }
]

export function NewsSection() {
  return (
    <section className="bg-muted/30 py-16">
      <div className="container px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-[#333333]">Aktuellt</h2>
          <Button variant="link" className="text-primary font-semibold">
            Se alla nyheter <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </div>
        
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {news.map((item, index) => (
            <Card key={index} className="overflow-hidden border-none shadow-sm hover:shadow-md transition-shadow">
              <div className="h-48 bg-gray-200 w-full relative">
                {/* 
                  Using a colored div as placeholder since we don't have actual images. 
                  In a real app, <Image /> would go here.
                */}
                <div className={`absolute inset-0 flex items-center justify-center text-muted-foreground bg-primary/${10 + (index * 10)}`}>
                  BildSaknas
                </div>
              </div>
              <CardHeader className="pb-2">
                <div className="text-sm font-medium text-primary mb-2 uppercase tracking-wider">
                  {item.category}
                </div>
                <CardTitle className="text-xl group-hover:text-primary transition-colors">
                  <Link href="#" className="hover:underline decoration-primary decoration-2 underline-offset-4">
                    {item.title}
                  </Link>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">
                  {item.summary}
                </p>
                <div className="text-xs text-muted-foreground">
                  Publicerad: {item.date}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

