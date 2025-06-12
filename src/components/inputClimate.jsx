import axios from "axios";

export default function inputClimate({ toggleModal, isModalOpen}) {
   
    const handleSubmit = (e) => {
    e.preventDefault(); // Evita el comportamiento predeterminado del formulario
    console.log('Formulario enviado');
    
  };
 
 const API_KEY = '68eced32006658951a4c9461553df01f';
 try {
  const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_KEY}}&units=metric`)
 } catch (error) {
  console.error('Error fetching weather datos:', error)
 }




  return (
    <>
      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 w-[375px] h-[680px] bg-[#1e213a]  z-50">
            {/* Button to close Modal */}
           <section className=" border-white w-[375px] h-[60px] flex mt-[-7px] justify-end  ml-[-25px]">
            <button className="mt-6 mr-4" onClick={toggleModal}>
                <img src="/close.svg" className="w-[25px] h-[25px]" />
            </button>
           </section>


           <div className="flex flex-row  border-white w-[375px] h-[50px] mt-1">

                 {/* Input Setcion */}
                 <form className="flex flex-row  items-start" onSubmit={handleSubmit}>
                      {/* input */}
                       <div className="flex flex-row h-[38px] ml-5 w-[210px] border  border-white items-center">
                          <img className="w-[25px] h-[25px] ml-2" src="/public/search.svg"/>
                          <input type="text" placeholder="search Location" className="ml-2 text-[#9ca3ab] font-semibold placeholder-[#9ca3ab] w-[162px] focus:outline-none"/>
                       </div>
                         {/* Button Submit */}
                          <button className="bg-[#3c47e9] h-[38px] w-[80px]  ml-[41px] font-semibold text-white">Search</button>
                 </form>
            </div>





       </div>





      )}
    </>
  )
}
