import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function CardToday({lat, lon, selectedUnit}) {


const [windSpeed, setWindSpeed] = useState("");
const [windDeg, setWindDeg] = useState("");
const [humidity, setHumidity] = useState("")
const [visibility, setVisibility] =  useState("")
const [airPressure, setAirPressure] = useState("")





    const API_KEY = '68eced32006658951a4c9461553df01f';
useEffect(() => {
    if (lat && lon) {
      // Realiza la solicitud a la API de OpenWeather
      axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${selectedUnit}`)
        .then((response) => {
          const wind =  response.data.list[0].wind.speed
          setWindSpeed(wind)
          const windDeg =  response.data.list[0].wind.deg
          setWindDeg(windDeg)
          const humedad = response.data.list[0].main.humidity
          setHumidity(humedad)
          const visibility = response.data.list[0].visibility / 1000
          setVisibility(visibility)
          const airPressure = response.data.list[0].main.pressure
          setAirPressure(airPressure)

          // Actualiza el estado con el ícono
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [lat, lon, selectedUnit]);

const getWindDirection = (windDeg) => {
  if (windDeg >= 0 && windDeg < 22.5) return "N";
  if (windDeg >= 22.5 && windDeg < 45) return "NNE";
  if (windDeg >= 45 && windDeg < 67.5) return "NE";
  if (windDeg >= 67.5 && windDeg < 90) return "ENE";
  if (windDeg >= 90 && windDeg < 112.5) return "E";
  if (windDeg >= 112.5 && windDeg < 135) return "ESE";
  if (windDeg >= 135 && windDeg < 157.5) return "SE";
  if (windDeg >= 157.5 && windDeg < 180) return "SSE";
  if (windDeg >= 180 && windDeg < 202.5) return "S";
  if (windDeg >= 202.5 && windDeg < 225) return "SSW";
  if (windDeg >= 225 && windDeg < 247.5) return "SW";
  if (windDeg >= 247.5 && windDeg < 270) return "WSW";
  if (windDeg >= 270 && windDeg < 292.5) return "W";
  if (windDeg >= 292.5 && windDeg < 315) return "WNW";
  if (windDeg >= 315 && windDeg < 337.5) return "NW";
  if (windDeg >= 337.5 && windDeg <= 360) return "NNW";
  return "N"; // Valor por defecto si no coincide
};

  return (
    <div className='grid grid-cols-1 gap-y-10 lg:gap-y-10 lg:grid-cols-2 gap-x-95 xl:ml-20'>
     {/* Primera Card  */}
     <section className="bg-[#1e213a] w-[275px] ml-10 lg:w-[350px] lg:ml-0 h-[170px] flex flex-col items-center">
         
      {/* WindStatus    */}
         <section className="text-[#e7e7eb] mt-2 text-[18px]">
            <h1>Wind status</h1>
         </section>

         {/* WinStatus info */}
         <section className=" flex flex-row text-[#e7e7eb]">
            <h1 className='text-[55px] font-bold'>{windSpeed}</h1>
            <h1 className='mt-2 text-[35px] font-semibold'>{selectedUnit === "imperial" ? "mph" : "ms"}</h1>
         </section>
         <section className="flex flex-row">
            <img
    src="/navigation.svg"
    className="mt-1 h-[30px] w-[30px]"
    style={{ transform: `rotate(${windDeg}deg)` }} // Aplicar rotación dinámica
    alt="Wind Direction"
  />
              <h1 className=' text-[#e7e7eb] text-[20px]'>{getWindDirection(windDeg)}</h1>
         </section>
     </section>




     <section className="bg-[#1e213a] w-[275px] ml-10 lg:w-[350px] lg:ml-0 h-[170px]  flex items-center flex-col border-white ">
              {/* WindStatus    */}
         <section className="text-[#e7e7eb] mt-2 text-[18px]">
            <h1>Humidity</h1>
         </section>

         <section className="text-[#e7e7eb] flex flex-row mt-[-25px]">
            <h1 className='text-[75px] font-bold text-[#e7e7eb]'>{humidity}</h1>
            <h1 className='mt-8 text-[35px] font-semibold'>%</h1>
         </section>

         <section className="">
            {/* //////////////////////// */}
            <section className="flex flex-row justify-between  border-white w-[240px] mt-[-13px] font-semibold text-[17px] text-[#e7e7eb] ">
                <h1>0</h1>
                <h1>50</h1>
                <h1>100</h1>
            </section>

            <section className="w-[240px] bg-amber-50 h-[10px]  rounded-[25px]">
                <div className=' h-[10px] rounded-[25px]  bg-amber-300 z-10'
                style={{width:`${humidity}%`}}></div>
            </section>

            <section className="ml-55 text-[#e7e7eb] font-semibold">%</section>

         </section>
     </section>


     <section className="bg-[#1e213a] w-[275px] ml-10 lg:w-[350px] lg:ml-0 h-[170px] flex items-center flex-col">
        <section className='mt-3'>
            <h1 className='text-[#e7e7eb] mt-2 text-[18px]'>Visibility</h1>
        </section>
        <section className='flex flex-row mt-[-15px] '>
            <h1 className='text-[75px] font-bold text-[#e7e7eb]'>{visibility}</h1>
            <h1 className='text-[35px] font-bold text-[#e7e7eb] mt-10'>Km</h1>
        </section>
     </section>
     

      <section className="bg-[#1e213a] w-[275px] ml-10 lg:w-[350px] lg:ml-0 h-[170px] flex items-center flex-col">
        <section className='mt-3'>
            <h1 className='text-[#e7e7eb] mt-2 text-[18px]'>Air Pressure</h1>
        </section>
        <section className='flex flex-row mt-[-15px] '>
            <h1 className='text-[75px] font-bold text-[#e7e7eb]'>{airPressure}</h1>
            <h1 className='text-[35px] font-bold text-[#e7e7eb] mt-10'>Mb</h1>
        </section>
     </section>



        <section className=' border-white w-[375px] h-[30px] ml-10 lg:mt-0 xl:ml-60 lg:ml-60 text-[#a09fa3] text-[13px]'><h1>Created by
<span className='font-bold'>NathanLoop2004</span>
- devChallenges.io</h1></section>

    </div>
  )
}
