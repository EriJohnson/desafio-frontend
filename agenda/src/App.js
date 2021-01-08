import { useEffect, useState } from 'react'

import './App.css'
import api from './services/api'

function App() {
  const [events, setEvents] = useState([])
  useEffect(() => {
    async function getEvents() {
      try {
        const { data } = await api.get('/events')
        console.log('data', data)
        setEvents(data)
      } catch (error) {
        alert('Ocorreu um erro ao buscar os eventos')
      }
    }
    getEvents()
  }, [])

  return (
    <div className='App'>
      <header className='App-header'>
        <ul>
          {events.map(e => (
            <li key={e.id}>{e.title}</li>
          ))}
        </ul>
      </header>
    </div>
  )
}

export default App
