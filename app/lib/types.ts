export interface SiteConfig {
  primaryColor: string
  secondaryColor: string
  bgColor1: string
  bgColor2?: string
  textPrimaryColor: string
  textSecondaryColor?: string
  neutral: string
  overlay: string
  homePageImage: Array<StrapiImage>
}

export interface GeneralInfo {
  fullDate: string
  date: string
  startingHours: string
  endingHours: string
  locationName: string
  city: string
  state: string
  stateAbbreviation: string
}

export interface StrapiImage {
  id: number
  documentId: string
  width: number
  height: number
  ext: string
  url: string
}
