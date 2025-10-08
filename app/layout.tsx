import type React from "react"
import type { Metadata } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { Analytics } from "@vercel/analytics/next"
import { Suspense } from "react"
import "./globals.css"
import { ScrollToTop } from "@/components/scroll-to-top"

export const metadata: Metadata = {
  title: "PL 52 Vikāsa",
  description: "Únete a nuestras jornadas lúdicas. Regala sonrisas y multiplica alegría en las comunidades.",
  generator: "Vikāsa",
  icons: {
    icon: "/ico.ico",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`font-sans ${GeistSans.variable} ${GeistMono.variable} antialiased`}>
        <ScrollToTop />
        <Suspense fallback={<div>Loading...</div>}>{children}</Suspense>
        <Analytics />
      </body>
    </html>
  )
}
