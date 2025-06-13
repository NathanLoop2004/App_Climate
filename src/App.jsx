



// `https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}&units=metric`

//https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}

    const API_KEY = '68eced32006658951a4c9461553df01f';
import  { useState, useEffect } from "react";

import ClimateChange from "./components/ClimateChange";
import InputClimate from "./components/inputClimate"

import axios from "axios";


function App() {
  const [lat, setLat] = useState(51.5074);
  const [lon, setLon] = useState(-0.1278);
 const [isModalOpen, setIsModalOpen] = useState(false)
 const [icono, setIcono] = useState("")

  const handleCitySelect = (latitude, longitude) => {
    setLat(latitude);
    setLon(longitude);
  };
  
     const toggleModal = () => {
    setIsModalOpen((prevState) => !prevState); // Alterna el estado del modal
  };


   


  useEffect(() => {
    if (lat && lon) {
      // Realiza la solicitud a la API de OpenWeather
      axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then((response) => {
          const icon = response.data.list[0].weather[0].icon; // Obtiene el ícono del clima
          setIcono(icon); // Actualiza el estado con el ícono
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [lat, lon]);
  

  return (
    <div>
      <InputClimate
        toggleModal={toggleModal}
        isModalOpen={isModalOpen}
        onCitySelect={handleCitySelect} // Pasar la función como prop
      />
      {lat && lon && <ClimateChange lat={lat} lon={lon} icono={icono} toggleModal={toggleModal} />}
    </div>
  );
}

export default App
