import { GeneralInfo, SiteConfig } from "./types"

const baseUrl = `${process.env.NEXT_PUBLIC_STRAPI_URL}/api`

export async function fetchSiteConfig(): Promise<SiteConfig> {
  try {
    const url = new URL(`${baseUrl}/site-config`)

    url.searchParams.set("populate", "*")

    const response = await fetch(url.toString())
    const siteConfig = await response.json()

    return siteConfig.data
  } catch (error) {
    console.error("Error fetching site config", error)
    throw new Error("Failed to fetch site config")
  }
}

export async function fetchGeneralInfo(): Promise<GeneralInfo> {
  try {
    const url = new URL(`${baseUrl}/event-general-info`)

    const response = await fetch(url.toString())
    const generalInfo = await response.json()

    return generalInfo.data
  } catch (error) {
    console.error("Error fetching general info", error)
    throw new Error("Failed to fetch general info")
  }
}
