import { SiteConfig } from "./types"

export async function fetchSiteConfig(): Promise<SiteConfig> {
  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/site-config`
    )
    const siteConfig = await response.json()

    return siteConfig.data
  } catch (error) {
    console.error("Error fetching site config", error)
    throw new Error("Failed to fetch site config")
  }
}
