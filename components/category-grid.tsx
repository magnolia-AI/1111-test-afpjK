import { 
  FileText, 
  Pill, 
  Calendar, 
  MapPin, 
  FileCheck, 
  Mail,
  ArrowRight
} from "lucide-react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"

const shortcuts = [
  {
    title: "Läsa journalen",
    description: "Se din journalinformation via nätet.",
    icon: FileText,
    href: "#",
    color: "bg-blue-50 text-blue-700",
  },
  {
    title: "Förnya recept",
    description: "Begär receptförnyelse hos din mottagning.",
    icon: Pill,
    href: "#",
    color: "bg-green-50 text-green-700",
  },
  {
    title: "Se bokade tider",
    description: "Håll koll på dina kommande vårdbesök.",
    icon: Calendar,
    href: "#",
    color: "bg-purple-50 text-purple-700",
  },
  {
    title: "Hitta vård",
    description: "Sök mottagningar och vårdgivare.",
    icon: MapPin,
    href: "#",
    color: "bg-red-50 text-primary",
  },
  {
    title: "Läsa och skicka intyg",
    description: "Hantera dina intyg digitalt.",
    icon: FileCheck,
    href: "#",
    color: "bg-yellow-50 text-yellow-700",
  },
  {
    title: "Läsa och skicka meddelanden",
    description: "Kontakta vården via 1177 inkorg.",
    icon: Mail,
    href: "#",
    color: "bg-indigo-50 text-indigo-700",
  },
]

export function CategoryGrid() {
  return (
    <section className="container py-8 px-4 -mt-12 relative z-10">
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {shortcuts.map((shortcut) => (
          <Link key={shortcut.title} href={shortcut.href} className="group">
            <Card className="h-full border-none shadow-md transition-all hover:shadow-lg bg-white">
              <CardContent className="p-6 flex items-start gap-4 h-full">
                <div className={`w-12 h-12 shrink-0 rounded-full flex items-center justify-center ${shortcut.color}`}>
                  <shortcut.icon className="h-6 w-6" />
                </div>
                <div className="flex flex-col">
                  <h3 className="text-lg font-bold mb-1 group-hover:text-primary transition-colors flex items-center">
                    {shortcut.title}
                    <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all text-primary" />
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {shortcut.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          </Link>
        ))}
      </div>
      <div className="mt-8 text-center md:hidden">
        <Link href="#" className="text-primary font-semibold hover:underline">
          Se alla tjänster
        </Link>
      </div>
    </section>
  )
}

