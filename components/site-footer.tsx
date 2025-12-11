import Link from "next/link"
import { Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#333333] text-white pt-16 pb-8">
      <div className="container px-4">
        {/* Top Section with Phone Number Highlight */}
        <div className="mb-12 rounded-xl bg-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6 border border-white/5">
          <div className="flex items-center gap-5">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary text-white animate-pulse">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Ring 1177 för sjukvårdsrådgivning</h3>
              <p className="text-gray-300">Öppet dygnet runt. Ring 112 vid livsfara.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            {/* Additional info or CTA could go here */}
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4 mb-16 border-b border-white/10 pb-12">
          {/* Column 1: Brand & Mission */}
          <div className="lg:col-span-1">
            <h4 className="mb-4 text-xl font-bold text-white">1177</h4>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Tryggt om din hälsa och vård. På 1177.se får du råd om hälsa och information om sjukdomar och vilka mottagningar du kan kontakta.
            </p>
            <div className="space-y-2">
              <Link href="#" className="block text-gray-300 hover:text-white hover:underline decoration-1 underline-offset-4">Other languages</Link>
              <Link href="#" className="block text-gray-300 hover:text-white hover:underline decoration-1 underline-offset-4">Lättläst svenska</Link>
              <Link href="#" className="block text-gray-300 hover:text-white hover:underline decoration-1 underline-offset-4">Teckenspråk</Link>
            </div>
          </div>

          {/* Column 2: Om 1177 */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">Om 1177</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Om 1177</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">E-tjänster</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Aktuellt</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Kvalitetssäkring</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Redaktionen</Link></li>
            </ul>
          </div>

           {/* Column 3: Kontakt & Press */}
           <div>
            <h4 className="mb-4 text-lg font-bold text-white">Hjälp & Kontakt</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Kontakta 1177</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Synpunkter</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Press</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Digital tillgänglighet</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Juridisk information</Link></li>
            </ul>
          </div>

          {/* Column 4: För vårdgivare */}
          <div>
            <h4 className="mb-4 text-lg font-bold text-white">För vårdgivare</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Vårdgivarwebben</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Jobba hos oss</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">För leverantörer</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center gap-2">
            <span>1177 – en tjänst från Inera</span>
          </div>
          <div className="flex flex-wrap gap-6 justify-center">
            <Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Hantering av personuppgifter</Link>
            <Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Hantering av kakor</Link>
            <Link href="#" className="hover:text-white hover:underline decoration-1 underline-offset-4">Inställningar för kakor</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

