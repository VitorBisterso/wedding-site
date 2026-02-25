"use client"

import { format } from "date-fns"

import { useGeneralInfo } from "../../providers/generalInfo"
import TimeCountdown from "../timeCountdown"

export default function GeneralInfo() {
  const generalInfo = useGeneralInfo()

  function formatDate() {
    return format(generalInfo.fullDate, "dd.MM.yyyy")
  }

  return (
    <div className="align-center flex flex-col gap-8">
      <h1 className="mt-4 text-center text-xl text-(--color-primary) lg:text-4xl">
        {formatDate()}
      </h1>
      <div className="mx-auto">
        <TimeCountdown date={new Date(generalInfo.fullDate)} />
      </div>
    </div>
  )
}
