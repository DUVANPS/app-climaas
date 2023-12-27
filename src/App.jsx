import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'
import WeatherCards from './components/WeatherCards'

function App() {

  const [coords, setCoords] = useState()
  const [weather, setWeather] = useState()
  const [tem, setTem] = useState()
  const [isLoading, setIsLoading] = useState(true)
  

  const success = pos => {
  const obj = {
    lat: pos.coords.latitude,
    lon: pos.coords.longitude
  }
  setCoords(obj)
  }

  useEffect(() => {
    setIsLoading(true)
  navigator.geolocation.getCurrentPosition(success)
  }, [])

  useEffect(() => {
    if(coords){
      const API_KEY = '1eee63bbf5f5d98ab224e89dbbe29e49'
      const { lat, lon } = coords
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}`
    axios.get(url)
    .then(res => {
      setWeather(res.data)
      
      const obj = {
        celsius: (res.data.main.temp - 273.15).toFixed(1),
        fahrenheit: (res.data.main.temp - 273.15).toFixed(1) * 9 / 5 + 32,

      }
      setTem(obj)
    })

    .catch(err => console.log(err))
    .finally(() => setIsLoading(false))

    }
  
  }, [coords])
  console.log(weather)
  
  


  return (
    <div className='app'>
      {
        isLoading
        ? <h2>LOADING...</h2>
        : (
          <WeatherCards
      weather={weather}
      tem={tem}
      />
        )
      }
      
    
    </div>
  )
}

export default App
//
