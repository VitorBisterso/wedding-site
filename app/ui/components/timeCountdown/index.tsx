"use client"

import { useCallback, useEffect, useState } from "react"

import TimeCountdownItem from "./timeCountdownItem"

interface TimeCountdownProps {
  date: Date
}

type DateDiff = {
  days: number
  hours: number
  minutes: number
  seconds: number
}

export default function TimeCountdown({ date }: TimeCountdownProps) {
  const [dateDiff, setDateDiff] = useState<DateDiff>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  })

  const getDateDiff = useCallback(() => {
    const today = new Date()

    let delta = Math.floor(Math.abs(date.getTime() - today.getTime()) / 1000)

    // calculate (and subtract) whole days
    const days = Math.floor(delta / 86400)
    delta -= days * 86400

    // calculate (and subtract) whole hours
    const hours = Math.floor(delta / 3600) % 24
    delta -= hours * 3600

    // calculate (and subtract) whole minutes
    const minutes = Math.floor(delta / 60) % 60
    delta -= minutes * 60

    // what's left is seconds
    const seconds = delta % 60

    return {
      days,
      hours,
      minutes,
      seconds,
    }
  }, [date])

  useEffect(() => {
    const interval = setInterval(() => {
      const dateDiff = getDateDiff()
      setDateDiff(dateDiff)
    }, 1000)

    return () => clearInterval(interval)
  }, [getDateDiff])

  function getLabel() {
    const today = new Date()

    const isFuture = date.getTime() > today.getTime()

    if (isFuture) return "Faltam apenas"

    return "Já se passaram"
  }

  const { days, hours, minutes, seconds } = dateDiff

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-center text-xl text-(--color-primary) lg:text-4xl">
        {getLabel()}
      </h1>
      <div className="flex flex-row gap-8">
        <TimeCountdownItem timeLeft={days} text="Dias" />
        <TimeCountdownItem timeLeft={hours} text="Horas" />
        <TimeCountdownItem timeLeft={minutes} text="Minutos" />
        <TimeCountdownItem timeLeft={seconds} text="Segundos" />
      </div>
    </div>
  )
}
