// Função que retorna as horas e os minutos baseados nas propiedades
// "start" e "finish" dos objetos retornados da API disponibilizada

export default function convertMinutesToSchedule(scheduleInMinutes) {
  const num = scheduleInMinutes
  const hours = num / 60
  const rhours = Math.floor(hours)
  const minutes = (hours - rhours) * 60
  const rminutes = Math.round(minutes)
  return [rhours, rminutes]
}
