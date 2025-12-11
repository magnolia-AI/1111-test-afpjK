import Link from "next/link"
import { Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#333333] text-white pt-16 pb-8">
      <div className="container px-4">
        {/* Emergency Section */}
        <div className="mb-12 rounded-xl bg-white/10 p-6 md:p-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white animate-pulse">
              <Phone className="h-6 w-6" />
            </div>
            <div>
              <h3 className="text-xl font-bold">Är det akut?</h3>
              <p className="text-gray-300">Ring 112 vid livsfara.</p>
            </div>
          </div>
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="text-left md:text-right">
              <div className="font-bold text-lg">Sjukvårdsrådgivning</div>
              <div className="text-gray-300">Ring 1177 dygnet runt</div>
            </div>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-4 mb-12 border-b border-white/10 pb-12">
          <div>
            <h4 className="mb-4 text-lg font-bold">Om 1177</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#" className="hover:text-white hover:underline">Om 1177</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Redaktionen</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Kvalitetssäkring</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Tillgänglighet</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">För vårdgivare</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#" className="hover:text-white hover:underline">Vårdgivarwebben</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Jobba hos oss</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">För press</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">Hjälp & Kontakt</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#" className="hover:text-white hover:underline">Kontakta 1177</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Synpunkter</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Tolkning</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="mb-4 text-lg font-bold">Följ oss</h4>
            <ul className="space-y-3 text-gray-300">
              <li><Link href="#" className="hover:text-white hover:underline">Facebook</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">Instagram</Link></li>
              <li><Link href="#" className="hover:text-white hover:underline">LinkedIn</Link></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-400">
          <div>&copy; {new Date().getFullYear()} 1177 Vårdguiden</div>
          <div className="flex gap-6">
            <Link href="#" className="hover:text-white hover:underline">Dataskydd</Link>
            <Link href="#" className="hover:text-white hover:underline">Kakcookies</Link>
            <Link href="#" className="hover:text-white hover:underline">Juridisk information</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}

