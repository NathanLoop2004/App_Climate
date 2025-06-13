import React from 'react'
import Datos_Climate from './Datos_Climate'
import CardDesingDays from './CardDesingDays'
import CardToday from './CardToday'
import axios from 'axios'
import { useState, useEffect } from 'react'





export default function ClimateChange({toggleModal, lat, lon , icono,onUnitChange , selectedUnit, setLat, setLon}) {

  const API_KEY = '68eced32006658951a4c9461553df01f';  


    const [unit, setUnit] = useState("metric")

  useEffect(() => {
    if (lat && lon) {
      axios
        .get(`https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=${unit}`)
        .then((response) => {
          response // Actualiza la temperatura
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error);
        });
    }
  }, [lat, lon, unit])

  const handleUnitChange = (newUnit) => {
    setUnit(newUnit);
    onUnitChange(newUnit) 
    console.log(`Metric changed to: ${newUnit}`);
  };

   function getCurrentLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (position) => {
         setLat(position.coords.latitude);
         setLon(position.coords.longitude);
        console.log(`Latitude: ${lat}, Longitude: ${lon}`);
      },
      (error) => {
        console.error("Error getting location:", error.message);
      }
    );
  } else {
    console.error("Geolocation is not supported by this browser.");
  }
}

  






  return (
    <div className='lg:flex lg:flex-row'>
      {/* Section 1 */}
      <section className="w-[375px] lg:w-[480px] h-[680px] xl:h-[850px] bg-[#1e213a]  border-white">
        {/* Section Input y búsqueda por IP */}
        <section className=" border-white pt-8 flex flex-row justify-around xl:mt-2 ">
          <button className="bg-[#6e707a] w-[175px] h-[35px] mt-1 text-[#E7E7EB] cursor-pointer"
          onClick={toggleModal}>
            Search for Places
          </button>
          <button className="bg-[#4b4d61] h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer" onClick={getCurrentLocation} >
            <img className="w-[25px] h-[25px] ml-[1px]" src="/location.svg" alt="Location Icon" />
          </button>
        </section>

        {/* Section 2 */}
        <section className="relative  border-white w-[375px] lg:w-[480px] h-[300px] flex justify-center items-center mt-[-10px] xl:mt-20">
          {/* Fondo con opacidad usando pseudo-elemento */}
          <div className="absolute inset-0 bg-[url('/Cloud-background.png')] bg-no-repeat bg-center bg-cover opacity-10 pointer-events-none"></div>

          {/* div de las nubes o cualquier cosa */}
          <div className="relative z-10  flex justify-center items-center border-white w-[200px] h-[200px] xl:mt-5">
              <img className='w-[150px] lg:w-[300px] h-[150px] lg:h-[200px] 'src={`/images/${icono}.png`} alt='Loading...'/>
          </div>
        </section>




        {/* Section 3 */}
        <section className=" border-white w-[375px] h-[290px] ">
        <Datos_Climate lat={lat} lon={lon} selectedUnit={selectedUnit} />
        </section>

      </section>
{/* ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////// */}
       {/* Segunda section parte de diseño */}
<section className="bg-[#100e1d] w-[375px] md:w-[100%] h-[1700px] md:h-[850px]  border-white">

   

   {/* buTton Celsius y fahrenheit */}
   <section className="  border-white w-[375px] lg:w-[100%] h-[80px] flex items-end gap-4  ">
        
        {/* Celsius button */}
          <button
          className={` rounded-full h-[40px] w-[40px] ml-[210px] lg:ml-[80%] ${
            unit === "metric" ? "font-bold bg-amber-50 text-[#100e1d]" : "bg-[#585676] text-white"
          }`}
          onClick={() => handleUnitChange("metric")}
        ><h1>°C</h1>
        </button>
        

        {/* fahrenheit button */}
        <button
          className={` rounded-full h-[40px] w-[40px] ${
            unit === "imperial" ? "font-bold bg-amber-50 text-[#100e1d]" : "bg-[#585676] text-white"
          }`}
          onClick={() => handleUnitChange("imperial")}
        >
          °F
        </button>
   </section>






  {/* Section Cards 5 dias */}
   <section className="border-white w-[375px] md:w-[100%] h-[700px] lg:h-[200px]  flex justify-start items-center">
      <CardDesingDays  selectedUnit={selectedUnit} lat={lat} lon={lon}/>
   </section>



   <section className=" border-white w-[375px] h-[50px] lg:ml-25 xl:ml-42">
    <h1 className='text-[#e7e7eb] text-[26px] font-semibold ml-6'>Today`s Hightlights</h1>
   </section>
   



   <section className=" border-white w-[375px] lg:w-[730px] h-[500px] lg:h-[400px] lg:ml-30 grid grid-cols-1 lg:grid-cols-2">
      <CardToday lat ={lat} lon={lon} selectedUnit={selectedUnit} />
   </section>
</section>

    </div>
  )
}
