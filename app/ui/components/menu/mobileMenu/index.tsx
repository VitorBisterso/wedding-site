"use client"

import clsx from "clsx"
import { usePathname } from "next/navigation"
import { useState } from "react"

import useClickOutside from "@/app/hooks/useClickOutside"

import MenuItem, { MenuItemTypes } from "../menuItem"

interface HamburgerLineProps {
  className?: string
}

function HamburgerLine({ className }: HamburgerLineProps) {
  return <div className={clsx("h-0.5 w-5 bg-(--color-primary)", className)} />
}

interface MobileMenuProps {
  items: Record<
    MenuItemTypes,
    { text: string; isButton: boolean; className?: string }
  >
}

export default function MobileMenu({ items }: MobileMenuProps) {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)

  const domRef = useClickOutside(() => setIsOpen(false))

  return (
    <div ref={domRef}>
      <div
        className={
          "flex items-center justify-between px-3 py-1 shadow-sm lg:hidden"
        }
      >
        <MenuItem
          className="flex-1 text-3xl"
          text="M & V"
          href="/"
          isActive={false}
        />
        <button
          className="z-20 flex cursor-pointer flex-col gap-1"
          onClick={(e) => {
            e.stopPropagation()
            setIsOpen((prev) => !prev)
          }}
        >
          <HamburgerLine
            className={clsx("transition-transform", {
              "rotate-45": isOpen,
            })}
          />
          <HamburgerLine
            className={clsx("transition-transform", {
              "-rotate-45": isOpen,
              "-translate-y-1.5": isOpen,
            })}
          />
          <HamburgerLine
            className={clsx("transition-opacity", {
              hidden: isOpen,
            })}
          />
        </button>
      </div>

      <div
        className={clsx(
          "absolute top-0 right-0 z-10 flex flex-col gap-1 bg-(--color-bg-1) p-2 pt-4 pr-7 shadow-sm lg:hidden",
          {
            hidden: !isOpen,
          }
        )}
      >
        {Object.keys(items).map((key: string) => {
          const { text, isButton, className } = items[key as MenuItemTypes]
          const isActive = pathname.toUpperCase().includes(key.toUpperCase())

          return (
            <MenuItem
              key={key}
              text={text}
              href={key}
              isActive={isActive}
              isButton={isButton}
              className="text-base"
              buttonClassName={className}
              onItemClick={() => setIsOpen(false)}
            />
          )
        })}
      </div>
    </div>
  )
}
