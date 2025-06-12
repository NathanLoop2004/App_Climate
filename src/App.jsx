
import axios from 'axios';
import ClimateChange from './components/ClimateChange'
import InputClimate from './components/inputClimate';
import { useState, useEffect } from 'react'


// `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`

//https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}

function App() {
    const API_KEY = '68eced32006658951a4c9461553df01f';
    const CITY = 'London';
    const lat =  "51.5085"
    const lon = "-0.1257" 
 
    const [isModalOpen, setIsModalOpen] = useState(false)

    const toggleModal = () => {
      setIsModalOpen(!isModalOpen)
    }


    useEffect(() => {
      const fetchWeather = async () => {
        try {
          const response = await axios.get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`)
           console.log('API Response:', response.data)
          
        } catch (error) {
console.log(error)
        }
      }

      fetchWeather();

    })

  return (
    <>
      <ClimateChange toggleModal={toggleModal} isModalOpen={isModalOpen} />
      <InputClimate toggleModal={toggleModal} isModalOpen={isModalOpen} />  
    </>
  )
}

export default App
