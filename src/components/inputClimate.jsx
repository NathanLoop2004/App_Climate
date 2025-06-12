import { useState } from "react";
import cities from "./cities.json"





export default function InputClimate({ toggleModal, isModalOpen, onCitySelect }) {
  const [inputValue, setInputValue] = useState("");
  const [filteredCities, setFilteredCities] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [activeCityIndex, setActiveCityIndex] = useState(null);
  




  const handleInputChange = (e) => {
    const query = e.target.value.toLowerCase();
    setInputValue(query);
    setErrorMessage("");

    const matches = cities.filter(
      (city) =>
        city.name.toLowerCase().includes(query) ||
        city.country.toLowerCase().includes(query)
    );
    setFilteredCities(matches);
  };

  const handleCityClick = (index) => {
    setActiveCityIndex(index);

    const city = filteredCities[index];
    onCitySelect(city.lat, city.lon); // Envía los datos al componente App
toggleModal();
  };

  return (
    <>
      {isModalOpen && (
        <div className="fixed inset-0 w-[375px] h-[680px] lg:w-[500px] xl:h-[900px] bg-[#1e213a]  border-white z-50">
          <section className="border-white w-[375px] lg:w-[500px] h-[60px] flex mt-[-7px] justify-end ml-[-25px]">
            <button className="mt-6 mr-4 " onClick={toggleModal}>
              <img src="/close.svg" className="w-[25px] h-[25px]" />
            </button>
          </section>

          <div className="flex flex-row  border-white w-[375px]  lg:w-[500px] h-[50px] mt-1 ">
            <form className="flex flex-row items-start" onSubmit={(e) => e.preventDefault()}>
              <div className="flex flex-row h-[38px] ml-5 w-[210px] lg:w-[300px] lg:h-[42px] border border-white items-center">
                <img className="w-[25px] h-[25px] ml-2" src="/search.svg" />
                <input
                  type="text"
                  placeholder="search Location"
                  className="ml-2 text-[#9ca3ab] font-semibold placeholder-[#9ca3ab] w-[162px] lg:w-[300px] focus:outline-none"
                  value={inputValue}
                  onChange={handleInputChange}
                />
              </div>
              <button
                type="submit"
                className="bg-[#3c47e9] h-[38px] lg:h-[42px] w-[80px] lg:w-[100px] ml-[41px] font-semibold text-white"
              >
                Search
              </button>
            </form>
          </div>

          {errorMessage && (
            <div className="mt-3 bg-red-100 text-red-600 p-2 rounded">
              {errorMessage}
            </div>
          )}

          {inputValue.trim() && filteredCities.length > 0 && (
            <div
              className="mt-5 bg-[#1e213a] p-4 rounded overflow-y-auto scrollbar-none h-[325px] lg:h-[580px]  "
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {filteredCities.map((city, index) => (
                <div
                  key={index}
                  onClick={() => handleCityClick(index)}
                  className={`mb-2 ml-8 h-[55px] flex bg-[#1e213a] items-center flex-row relative ${
                    activeCityIndex === index ? "border border-white bg-[#1e213a]" : ""
                  }`}
                >
                  <h1 className="text-lg font-bold text-[15px] ml-3 text-[#939fb1]">
                    {city.name}, {city.country}
                  </h1>
                  {activeCityIndex === index && (
                    <img
                      src="/arrow.svg"
                      className="w-[20px] h-[20px] absolute right-10"
                    />
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </>
  );
}