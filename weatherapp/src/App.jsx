import { useState } from 'react'
import WeatherData from './components/WeatherData'
import FormArea from './components/FormArea'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Hello</h1>
      <FormArea/>
      <WeatherData/>
    </>
  )
}

export default App
