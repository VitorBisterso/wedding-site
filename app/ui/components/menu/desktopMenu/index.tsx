"use client"

import { usePathname } from "next/navigation"

import MenuItem, { MenuItemTypes } from "../menuItem"

interface DesktopMenuProps {
  items: Record<MenuItemTypes, { text: string; isButton: boolean }>
}

export default function DesktopMenu({ items }: DesktopMenuProps) {
  const pathname = usePathname()

  return (
    <ul className="hidden gap-18 p-3 shadow-sm lg:flex lg:flex-row lg:items-center lg:justify-between xl:gap-24">
      <MenuItem
        className="flex-1 text-4xl xl:text-6xl"
        text="M & V"
        href="/"
        isActive={false}
      />
      {Object.keys(items).map((key: string) => {
        const { text, isButton } = items[key as MenuItemTypes]
        const isActive = pathname.toUpperCase().includes(key.toUpperCase())

        return (
          <MenuItem
            key={key}
            text={text}
            href={key}
            isActive={isActive}
            isButton={isButton}
          />
        )
      })}
    </ul>
  )
}
