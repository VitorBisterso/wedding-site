import clsx from "clsx"
import { ButtonHTMLAttributes } from "react"

export default function Button(props: ButtonHTMLAttributes<HTMLButtonElement>) {
  const { title, onClick, className } = props

  return (
    <button
      {...props}
      onClick={onClick}
      className={clsx(
        "rounded-lg bg-(--color-primary) p-3 text-white hover:cursor-pointer",
        className
      )}
    >
      {title}
    </button>
  )
}
