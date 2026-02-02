import type { Metadata } from "next"
import "@/app/ui/globals.css"
import { garamond } from "@/app/ui/fonts"

export const metadata: Metadata = {
  title: {
    template: "%s | Milena e Vitor 14/11/2026",
    default: "Milena e Vitor 14/11/2026",
  },
  description: "Site do casamento de Milena e Vitor, marcado para 14/11/2026",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-BR">
      <body className={garamond.className}>{children}</body>
    </html>
  )
}
