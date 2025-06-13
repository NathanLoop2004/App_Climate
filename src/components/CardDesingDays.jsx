import React from 'react'
import axios from 'axios';
import { useState, useEffect } from 'react';

export default function CardDesingDays({ lat, lon}) {
const API_KEY = '68eced32006658951a4c9461553df01f';
   
    const [temperatura, setTemperature] = useState("")
    const [minTemp, setMinTemp] = useState("")

    const [temperatura1, setTemperature1] = useState("")
    const [minTemp1, setMinTemp1] = useState("")

    const [temperatura2, setTemperature2] = useState("")
    const [minTemp2, setMinTemp2] = useState("")

    const [temperatura3, setTemperature3] = useState("")
    const [minTemp3, setMinTemp3] = useState("")

    const [temperatura4, setTemperature4] = useState("")
    const [minTemp4, setMinTemp4] = useState("")


   const [icon,  setIcon] = useState("");
   const [icon1,  setIcon1] = useState("");
   const [icon2,  setIcon2] = useState("");
   const [icon3,  setIcon3] = useState("");
   const [icon4,  setIcon4] = useState("");


const getFormattedDate = (offset = 0) => {
  const date = new Date();
  date.setDate(date.getDate() + offset); // Ajusta la fecha según el offset
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
         
          const temp = response.data.list[0].main.temp;
           setTemperature(temp);
          //minTemp
           const minTemp = response.data.list[0].main.temp_min
          setMinTemp(minTemp)
         
          //tempdia1
          const temp1 = response.data.list[8].main.temp;
          setTemperature1(temp1);
          //minTemp
          const minTemp1 = response.data.list[8].main.temp_min;
          setMinTemp1(minTemp1)
          //tempDia2
          const temp2 = response.data.list[16].main.temp;
           setTemperature2(temp2)
           //minTemp 2
          const minTemp2 = response.data.list[16].main.temp_min;
          setMinTemp2(minTemp2)
          //tempDia3
           const temp3 = response.data.list[24].main.temp;
           setTemperature3(temp3)
           //minTemp 3
          const minTemp3 = response.data.list[24].main.temp_min;
          setMinTemp3(minTemp3)
          //tempDia4
           const temp4 = response.data.list[32].main.temp;
           setTemperature4(temp4)
          //minTemp 4
          const minTemp4 = response.data.list[32].main.temp_min;
          setMinTemp4(minTemp4)


          // Icono
          const icon = response.data.list[0].weather[0].icon
          setIcon(icon)
          
          const icon1 = response.data.list[8].weather[0].icon
          setIcon1(icon1)

          const icon2 = response.data.list[16].weather[0].icon
          setIcon2(icon2)
          
          const icon3 = response.data.list[24].weather[0].icon
          setIcon3(icon3)

          const icon4 = response.data.list[32].weather[0].icon
          setIcon4(icon4)
        })
        .catch((error) => {
          console.error("Error fetching weather data:", error); // Maneja errores
        });
    }
}, [lat, lon]);


  return (
    <div className=' lg:mt-15  w-[300px] lg:w-[80%] h-[600px] lg:h-[200px] ml-10 grid grid-cols-2 lg:grid-cols-none lg:flex lg:flex-row lg:justify-center gap-2'>
       {/* primera card */}
      <section className='bg-[#1e213a] w-[140px] h-[160px] flex  flex-col items-center'>
        {/* Titulo */}
          <section className="mt-3">
            <h1 className='text-[#e7e7eb] font-semibold text-[17px]'>Today</h1>
          </section>

         {/* Foto de la card */}
        <section className="mt-6">
            <img src={`/src/images/${icon}.png`} alt="" className='w-[40px] h-[40px]' />
        </section>



          <section className=" gap-2 flex flex-row mt-4">
            <h1 className=" border-white text-[#e7e7df] font-semibold ">{temperatura !== "" ? Math.round(temperatura) : "-"}°C</h1>
            <span className=" border-white text-[#a09fa5] font-semibold ">{minTemp !== "" ? Math.round(minTemp) : "-"}°C</span>
     </section>
     </section>

       {/*---------------------------------------------------------------------------------------------------------------------------------- */}

      {/* Segunda card */}
      <section className='bg-[#1e213a] w-[140px] h-[160px] flex  flex-col items-center'>
        {/* Titulo */}
          <section className="mt-3">
            <h1 className='text-[#e7e7eb] font-semibold text-[17px]'>{getFormattedDate(1)}</h1>
          </section>

         {/* Foto de la card */}
        <section className="mt-6">
            <img src={`/src/images/${icon1}.png`} alt="" className='w-[40px] h-[40px]' />
        </section>



          <section className=" gap-2 flex flex-row mt-4">
            <h1 className=" border-white text-[#e7e7df] font-semibold ">{temperatura1 !== "" ? Math.round(temperatura1) : "-"}°C</h1>
            <span className=" border-white text-[#a09fa5] font-semibold ">{minTemp1 !== "" ? Math.round(minTemp1) : "-"}°C</span>
          </section>


      </section>
{/* ------------------------------------------------------------------------------------------------------------------------------*/}
 {/* Tercera card */}
      <section className='bg-[#1e213a] w-[140px] h-[160px] flex  flex-col items-center'>
        {/* Titulo */}
          <section className="mt-3">
            <h1 className='text-[#e7e7eb] font-semibold text-[17px]'>{getFormattedDate(2)}</h1>
          </section>

         {/* Foto de la card */}
        <section className="mt-6">
            <img src={`/src/images/${icon2}.png`} alt="" className='w-[40px] h-[40px]' />
        </section>



          <section className=" gap-2 flex flex-row mt-4">
            <h1 className=" border-white text-[#e7e7df] font-semibold ">{temperatura2 !== "" ? Math.round(temperatura2) : "-"}°C</h1>
            <span className=" border-white text-[#a09fa5] font-semibold ">{minTemp2 !== "" ? Math.round(minTemp2) : "-"}°C</span>
          </section>


      </section>

{/*-------------------------------------------------------------------------------------------------------------------------------*/}

{/* Cuarta card */}
      <section className='bg-[#1e213a] w-[140px] h-[160px] flex  flex-col items-center'>
        {/* Titulo */}
          <section className="mt-3">
            <h1 className='text-[#e7e7eb] font-semibold text-[17px]'>{getFormattedDate(3)}</h1>
          </section>

         {/* Foto de la card */}
        <section className="mt-6">
            <img src={`/src/images/${icon3}.png`} alt="" className='w-[40px] h-[40px]' />
        </section>



          <section className=" gap-2 flex flex-row mt-4">
            <h1 className=" border-white text-[#e7e7df] font-semibold ">{temperatura3 !== "" ? Math.round(temperatura3) : "-"}°C</h1>
            <span className=" border-white text-[#a09fa5] font-semibold ">{minTemp3 !== "" ? Math.round(minTemp3) : "-"}°C</span>
          </section>


      </section>

  {/* ------------------------------------------------------------------------------------------------------------------------- */}


  {/* Cuarta card */}
      <section className='bg-[#1e213a] w-[140px] h-[160px] flex  flex-col items-center'>
        {/* Titulo */}
          <section className="mt-3">
            <h1 className='text-[#e7e7eb] font-semibold text-[17px]'>{getFormattedDate(4)}</h1>
          </section>

         {/* Foto de la card */}
        <section className="mt-6">
            <img src={`/src/images/${icon4}.png`} alt="" className='w-[40px] h-[40px]' />
        </section>



          <section className=" gap-2 flex flex-row mt-4">
            <h1 className=" border-white text-[#e7e7df] font-semibold ">{temperatura4 !== "" ? Math.round(temperatura4) : "-"}°C</h1>
            <span className=" border-white text-[#a09fa5] font-semibold ">{minTemp4 !== "" ? Math.round(minTemp4) : "-"}°C</span>
          </section>


      </section>

    </div>
  )
}
