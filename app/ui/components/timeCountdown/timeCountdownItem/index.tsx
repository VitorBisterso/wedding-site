interface TimeCountdownItemProps {
  timeLeft: number
  text: string
}

export default function TimeCountdownItem({
  timeLeft,
  text,
}: TimeCountdownItemProps) {
  return (
    <div className="flex size-20 flex-col gap-6 rounded-lg shadow-sm xl:size-30 xl:gap-3">
      <div className="justify-center p-3 text-center text-3xl text-(--text-color-primary) xl:p-6 xl:text-6xl">
        {timeLeft}
      </div>
      <p className="text-center text-xl text-(--text-color-primary) xl:text-4xl">
        {text}
      </p>
    </div>
  )
}
