import { Provider } from "jotai"
import type { Metadata } from "next"

import "@/app/ui/globals.css"

import { garamond } from "@/app/ui/fonts"

import { fetchGeneralInfo, fetchSiteConfig } from "./lib/data"
import Menu from "./ui/components/menu"
import { GeneralInfoProvider } from "./ui/providers/generalInfo"
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
  const [siteConfig, generalInfo] = await Promise.all([
    fetchSiteConfig(),
    fetchGeneralInfo(),
  ])

  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={garamond.className}>
        <Provider>
          <ThemeProvider value={siteConfig}>
            <GeneralInfoProvider value={generalInfo}>
              <Menu />
              {children}
            </GeneralInfoProvider>
          </ThemeProvider>
        </Provider>
      </body>
    </html>
  )
}
