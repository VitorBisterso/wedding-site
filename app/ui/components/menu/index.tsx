"use client"

import clsx from "clsx"
import Link from "next/link"
import { usePathname } from "next/navigation"

import Button from "../button"

enum MenuItem {
  ourHistory = "ourHistory",
  eventDetails = "eventDetails",
  gifts = "gifts",
  messages = "messages",
  rsvp = "rsvp",
}

const items: Record<MenuItem, { text: string; isButton: boolean }> = {
  [MenuItem.ourHistory]: { text: "Nossa história", isButton: false },
  [MenuItem.eventDetails]: { text: "Detalhes do evento", isButton: false },
  [MenuItem.gifts]: { text: "Presentes", isButton: false },
  [MenuItem.messages]: { text: "Recados", isButton: false },
  [MenuItem.rsvp]: { text: "Confirme sua presença", isButton: true },
}

function Item({
  text,
  href,
  isActive,
  isButton = false,
  className,
}: {
  text: string
  href: string
  isActive: boolean
  isButton?: boolean
  className?: string
}) {
  return (
    <li
      className={clsx("list-none text-2xl text-(--color-primary)", className, {
        underline: isActive,
        "underline-offset-4": isActive,
      })}
    >
      <Link href={`/${href}`}>{isButton ? <Button title={text} /> : text}</Link>
    </li>
  )
}

export default function Menu() {
  const pathname = usePathname()

  return (
    <ul className="flex flex-row items-center justify-between gap-24 p-3 shadow-sm">
      <Item
        className="flex-1 text-6xl"
        text="M & V"
        href="/"
        isActive={false}
      />
      {Object.keys(items).map((key: string) => {
        const { text, isButton } = items[key as MenuItem]
        const isActive = pathname.toUpperCase().includes(key.toUpperCase())

        return (
          <Item
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
