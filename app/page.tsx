import TimeCountdown from "./ui/components/timeCountdown"

export default async function Home() {
  return (
    <div className="p-6">
      <TimeCountdown date={new Date(2026, 10, 14, 17, 30)} />
    </div>
  )
}
