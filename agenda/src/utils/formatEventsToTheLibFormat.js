// Essa função adaptar os eventos retornados da API disponibilizada
// para o formato aceito pelo biblioteca React Schedule

import convertMinutesToSchedule from './convertMinutesToSchedule'

export default function formatEventsToTheLibFormat(eventToFormat) {
  // Retorna o objeto que irá compor um evento
  return {
    title: eventToFormat.title,

    startDate: new Date(
      // Define o ano pegando os 4 primeiros caracteres da propriedade "date"
      eventToFormat.date.substring(0, 4),
      // Define o mês pegando o 6º e o 7º caracteres da propriedade "date"
      eventToFormat.date.substring(5, 7),
      // Define o dia pegando o 6º e o 7º caracteres da propriedade "date"
      eventToFormat.date.substring(8, 10),
      // Define a hora de início do evento pegando a primeira posição do
      // retorno da função "convertMinutesToSchedule"
      convertMinutesToSchedule(eventToFormat.start)[0],
      // Define os minutos de início do evento pegando a segunda posição do
      // retorno da função "convertMinutesToSchedule"
      convertMinutesToSchedule(eventToFormat.start)[1]
    ),
    endDate: new Date(
      // Define o ano pegando os 4 primeiros caracteres da propriedade "date"
      eventToFormat.date.substring(0, 4),
      // Define o mês pegando o 6º e o 7º caracteres da propriedade "date"
      eventToFormat.date.substring(5, 7),
      // Define o dia pegando o 6º e o 7º caracteres da propriedade "date"
      eventToFormat.date.substring(8, 10),
      // Define a hora de fim do evento pegando a primeira posição do
      // retorno da função "convertMinutesToSchedule"
      convertMinutesToSchedule(eventToFormat.finish)[0],
      // Define os minutos de fim do evento pegando a segunda posição do
      // retorno da função "convertMinutesToSchedule"
      convertMinutesToSchedule(eventToFormat.finish)[1]
    ),
    description: eventToFormat.description,
  }
}
