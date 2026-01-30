import { fetchSiteConfig } from "./lib/data"

export default async function Home() {
  const siteConfig = await fetchSiteConfig()

  return (
    <div>
      <h1 style={{ color: siteConfig.primaryColor }}>Teste</h1>
    </div>
  )
}
