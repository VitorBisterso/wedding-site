"use client"

import { createContext, useContext } from "react"

import { GeneralInfo } from "@/app/lib/types"

export const GeneralInfoContext = createContext<GeneralInfo>({} as GeneralInfo)

export function GeneralInfoProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: GeneralInfo
}) {
  return (
    <GeneralInfoContext.Provider value={value}>
      {children}
    </GeneralInfoContext.Provider>
  )
}

export function useGeneralInfo() {
  return useContext(GeneralInfoContext)
}
