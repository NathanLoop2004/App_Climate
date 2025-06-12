import React from 'react'
import Datos_Climate from './Datos_Climate'

export default function ClimateChange({toggleModal}) {
  return (
    <div>
      {/* Section 1 */}
      <section className="w-[375px] h-[680px] bg-[#1e213a]">
        {/* Section Input y búsqueda por IP */}
        <section className=" border-white pt-8 flex flex-row justify-around ">
          <button className="bg-[#6e707a] w-[175px] h-[35px] mt-1 text-[#E7E7EB] cursor-pointer"
          onClick={toggleModal}>
            Search for Places
          </button>
          <button className="bg-[#4b4d61] h-[40px] w-[40px] rounded-full flex items-center justify-center cursor-pointer">
            <img className="w-[25px] h-[25px] ml-[1px]" src="/location.svg" alt="Location Icon" />
          </button>
        </section>

        {/* Section 2 */}
        <section className="relative  border-white w-[375px] h-[300px] flex justify-center items-center mt-[-10px]">
          {/* Fondo con opacidad usando pseudo-elemento */}
          <div className="absolute inset-0 bg-[url('/Cloud-background.png')] bg-no-repeat bg-center bg-cover opacity-10 pointer-events-none"></div>

          {/* div de las nubes o cualquier cosa */}
          <div className="relative z-10  flex justify-center items-center border-white w-[200px] h-[200px]">
              <img className='w-[150px] h-[150px]'src='/src/images/01d.png' />
          </div>
        </section>




        {/* Section 3 */}
        <section className=" border-white w-[375px] h-[290px]">
        <Datos_Climate />
        </section>
      </section>
    </div>
  )
}
