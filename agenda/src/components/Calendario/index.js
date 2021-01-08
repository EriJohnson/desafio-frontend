import { useEffect, useState } from 'react'
import Paper from '@material-ui/core/Paper'
import { ViewState } from '@devexpress/dx-react-scheduler'
import {
  Scheduler,
  WeekView,
  Appointments,
  Toolbar,
  DateNavigator,
  AppointmentTooltip,
} from '@devexpress/dx-react-scheduler-material-ui'

import formatEventsToTheLibFormat from '../../utils/formatEventsToTheLibFormat'

import api from '../../services/api'

const Calendario = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function getEvents() {
      try {
        const { data } = await api.get('/events')
        const eventsConverted = data.map(e => formatEventsToTheLibFormat(e))
        setEvents(eventsConverted)
      } catch (error) {
        alert('Ocorreu um erro ao buscar os eventos')
      }
    }
    getEvents()
  }, [])

  return (
    <Paper>
      <Scheduler data={events} height='auto' locale='pt-BR'>
        <ViewState defaultCurrentDate={'2020-02-01'} />
        <WeekView startDayHour={8} endDayHour={18} />
        <Toolbar />
        <DateNavigator />
        <Appointments />
        <AppointmentTooltip />
      </Scheduler>
    </Paper>
  )
}

export default Calendario
