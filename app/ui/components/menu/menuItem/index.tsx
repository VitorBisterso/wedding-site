import clsx from "clsx"
import Link from "next/link"

import Button from "../../button"

export enum MenuItemTypes {
  ourHistory = "ourHistory",
  eventDetails = "eventDetails",
  gifts = "gifts",
  messages = "messages",
  rsvp = "rsvp",
}

export interface MenuItemProps {
  text: string
  href: string
  isActive: boolean
  isButton?: boolean
  className?: string
  buttonClassName?: string
  onItemClick?: VoidFunction
}

export default function MenuItem({
  text,
  href,
  isActive,
  isButton = false,
  className,
  buttonClassName,
  onItemClick,
}: MenuItemProps) {
  return (
    <li
      className={clsx(
        "list-none text-2xl text-(--color-primary) transition-opacity hover:opacity-70",
        className,
        {
          underline: isActive,
          "underline-offset-4": isActive,
        }
      )}
    >
      <Link href={`/${href}`} onClick={onItemClick}>
        {isButton ? <Button className={buttonClassName} title={text} /> : text}
      </Link>
    </li>
  )
}
