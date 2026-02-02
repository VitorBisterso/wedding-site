import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { title, onClick, className } = props

  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx(
        className,
        "rounded-lg bg-(--color-primary) hover:cursor-pointer"
      )}
    >
      {title}
    </button>
  )
}
