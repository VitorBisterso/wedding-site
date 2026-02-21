interface TimeCountdownItemProps {
  timeLeft: number
  text: string
}

export default function TimeCountdownItem({
  timeLeft,
  text,
}: TimeCountdownItemProps) {
  return (
    <div className="flex size-30 flex-col gap-3 rounded-lg shadow-sm">
      <div className="justify-center p-6 text-center text-6xl text-(--text-color-primary)">
        {timeLeft}
      </div>
      <p className="text-center text-4xl text-(--text-color-primary)">{text}</p>
    </div>
  )
}
