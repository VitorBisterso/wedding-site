"use client"

import "@/app/ui/globals.css"

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export default function GlobalError(_props: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body>
        <h2>Oops! Algo aconteceu... Tente recarregar a página</h2>
      </body>
    </html>
  )
}
