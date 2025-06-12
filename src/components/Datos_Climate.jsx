import React from 'react'

export default function Datos_Climate() {
  return (
    <div className='flex flex-col items-center'>

        {/* Datos de Grados */}
      <section className=" border-white w-[250px] h-[120px] flex justify-center items-center flex-row">
        <h1 className='text-[#e7e7eb] text-[95px]'>16 </h1>
        <span className='text-[#a09fb1] text-[45px] '>°C</span>
      </section>
         {/* Datos del tipo de clima */}
      <section className=" border-white w-[250px] h-[50px] flex justify-center items-center ">
        <h1 className='text-[25px] text-[#a09fb1]'>Clear Sky</h1>
      </section>

     {/* Datos del dia */}
      <section className="text-[#a09fb1] mt-10">
        <h1 className='font-semibold'>Today , Wed, 11 Jun</h1>
      </section>


      <section className="flex flex-row text-[#a09fb1] mt-5 gap-1">
        <img className='w-[25px] h-[25px]' src='/location_on.svg'/>
        <h1 className='mt-[-2px] text-[20px]'>Capiata</h1>
      </section>
    </div>
  )
}
