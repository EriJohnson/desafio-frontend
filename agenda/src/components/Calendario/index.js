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

import convertMinutesToSchedule from '../../utils/convertMinutesToSchedule'
import api from '../../services/api'

const Calendario = () => {
  const [events, setEvents] = useState([])

  useEffect(() => {
    async function getEvents() {
      try {
        const { data } = await api.get('/events')
        const eventsConverted = data.map(e => ({
          title: e.title,
          startDate: new Date(
            e.date.substring(0, 4),
            e.date.substring(5, 7),
            e.date.substring(8, 10),
            convertMinutesToSchedule(e.start)[0],
            convertMinutesToSchedule(e.start)[1]
          ),
          endDate: new Date(
            e.date.substring(0, 4),
            e.date.substring(5, 7),
            e.date.substring(8, 10),
            convertMinutesToSchedule(e.finish)[0],
            convertMinutesToSchedule(e.finish)[1]
          ),
          description: e.description,
        }))

        setEvents(eventsConverted)
      } catch (error) {
        alert('Ocorreu um erro ao buscar os eventos')
      }
    }
    getEvents()
  }, [])

  return (
    <Paper>
      <Scheduler data={events} height={800}>
        <ViewState defaultCurrentDate={'2020-01-01'} />
        <WeekView startDayHour={6} endDayHour={24} />
        <Toolbar />
        <DateNavigator />
        <Appointments />
        <AppointmentTooltip contentComponent />
      </Scheduler>
    </Paper>
  )
}

export default Calendario
