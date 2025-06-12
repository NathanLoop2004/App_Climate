import React, { useState } from 'react'
import { useEffect } from 'react';
import axios from 'axios';

export default function Datos_Climate({lat,lon}) {
 
 const API_KEY = '68eced32006658951a4c9461553df01f';
    const [ubicacion, setUbicacion] = useState("")
    const [temperatura, setTemperature] = useState("")
    const [descripcion, setDescripcion] = useState("")
    


   const getFormattedDate = () => {
    const date = new Date();
    const day = date.toLocaleDateString("en-US", { weekday: "long" }); // Día de la semana
    const month = date.toLocaleDateString("en-US", { month: "long" }); // Mes
    const dayNumber = date.getDate(); // Día del mes
    return `${day}, ${month} ${dayNumber}`; // Formato: "Wednesday, June 12"
  };


 
    // Funcion para obtener datos del clima 

     useEffect(() => {
    if (lat && lon) {
      // Realiza la solicitud a la API de OpenWeather
      axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`)
        .then((response) => {
          const ubicacion = response.data.city.name;
          setUbicacion(ubicacion)
          const temp = response.data.list[0].main.temp;
          setTemperature(temp);
          
          const descripcion = response.data.list[0].weather[0].description;
          setDescripcion(descripcion)
        
          console.log(response.data); // Muestra los datos en la consola
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error); // Maneja errores
        });
    }
  }, [lat, lon]);
 
 
 
 
 
  return (
    <div className='flex flex-col items-center'>

        {/* Datos de Grados */}
      <section className=" border-white w-[250px] lg:ml-30 mt-[-25px] mb-[15px] h-[120px] flex justify-center items-center flex-row">
        <h1 className='text-[#e7e7eb] text-[125px]'>{temperatura !== "" ? Math.round(temperatura) : "-"} </h1>
        <span className='text-[#a09fb1] text-[45px] '>°C</span>
      </section>
         {/* Datos del tipo de clima */}
      <section className=" border-white w-[260px] h-[55px] mb-[13px] lg:ml-30 flex justify-center items-center  ">
        <h1 className='text-[35px] text-[#a09fb1]'>{descripcion  !== "" ? descripcion : "Loading..."}</h1>
      </section>

     {/* Datos del dia */}
      <section className="text-[#a09fb1] mt-10 text-[13px] lg:ml-30">
        <h1 className='font-semibold'>Today  .    {getFormattedDate()}</h1>
      </section>


      <section className="flex flex-row text-[#a09fb1] mt-5 gap-1 lg:ml-30">
        <img className='w-[25px] h-[25px]' src='/location_on.svg'/>
        <h1 className=' text-[13px]'>{ubicacion|| "Loading..."}</h1>
      </section>
    </div>
  )
}
