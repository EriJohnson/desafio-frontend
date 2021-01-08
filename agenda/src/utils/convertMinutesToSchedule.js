export default function convertMinutesToSchedule(scheduleInMinutes) {
  const num = scheduleInMinutes
  const hours = num / 60
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)
  return [rhours, rminutes]
}
