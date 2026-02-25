"use client"

import Image from "next/image"

import { useTheme } from "../../theme"

export default function HomeImage() {
  const theme = useTheme()

  const image = theme?.homePageImage?.[0]
  return (
    <div className="mx-auto mt-6 w-50 md:w-75 lg:mt-12 lg:w-125 xl:w-150">
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${image?.url}`}
        alt="Home logo"
        width={image?.width}
        height={image?.height}
        className="h-auto w-full"
      />
    </div>
  )
}
