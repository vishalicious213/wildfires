// Note: We're not importing React anymore!
import { useState, useEffect } from 'react'
import Map from './components/Map'

function App() {
  const [eventData, setEventData] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const fetchEvents = async () => {
      setLoading(true)
      const response = await fetch('https://eonet.sci.gsfc.nasa.gov/api/v2.1/events')
      const { events } = await response.json()  // Get & destructure the events array

      setEventData(events)
      setLoading(false)
    }
  })

  return (
    <div>
      <Map />
    </div>
  );
}

export default App;
