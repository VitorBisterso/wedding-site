"use client"

import { createContext, useContext } from "react"

import { SiteConfig } from "@/app/lib/types"

export const ThemeContext = createContext<Partial<SiteConfig>>({})

export function ThemeProvider({
  children,
  value,
}: {
  children: React.ReactNode
  value: SiteConfig
}) {
  return (
    <ThemeContext.Provider value={value}>
      <div
        style={
          {
            "--color-primary": value.primaryColor,
            "--color-secondary": value.secondaryColor,
            "--color-bg-1": value.bgColor1,
            "--color-bg-2": value.bgColor2,
            "--text-color-primary": value.textPrimaryColor,
            "--text-color-secondary": value.textSecondaryColor,
            "--color-neutral": value.neutral,
            "--color-overlay": value.overlay,
          } as React.CSSProperties
        }
      >
        {children}
      </div>
    </ThemeContext.Provider>
  )
}

export function useTheme() {
  return useContext(ThemeContext)
}
