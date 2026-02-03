import { Provider } from "jotai"
import type { Metadata } from "next"

import "@/app/ui/globals.css"

import { garamond } from "@/app/ui/fonts"

import { fetchSiteConfig } from "./lib/data"
import Menu from "./ui/components/menu"
import { ThemeProvider } from "./ui/theme"

export const metadata: Metadata = {
  title: {
    template: "%s | Milena e Vitor 14/11/2026",
    default: "Milena e Vitor 14/11/2026",
  },
  description: "Site do casamento de Milena e Vitor, marcado para 14/11/2026",
}

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  const siteConfig = await fetchSiteConfig()

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={garamond.className}>
        <Provider>
          <ThemeProvider value={siteConfig}>
            <Menu />
            {children}
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  )
}
