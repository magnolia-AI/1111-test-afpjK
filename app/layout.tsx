import './globals.css'
import type { Metadata } from 'next'
import { Open_Sans } from 'next/font/google'
import { Toaster } from "@/components/ui/toaster"
import { ThemeProvider } from '@/components/theme-provider'

const openSans = Open_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-open-sans',
})

export const metadata: Metadata = {
  title: '1177 - Vårdguiden',
  description: '1177 Vårdguiden – tryggt om din hälsa och vård',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="sv" className={`h-full ${openSans.variable}`} suppressHydrationWarning>
      <body className={`h-full flex flex-col antialiased font-body`}>
        <ThemeProvider defaultTheme="light" attribute="class">
          {children}
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}

