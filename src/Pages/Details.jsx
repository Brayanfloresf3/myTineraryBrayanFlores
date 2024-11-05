import { useParams, Link } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchCityDetailsAsync } from "../../store/action/detailsAction.js";
import { ButtonSecundary } from "../Components/ButtonSecudary";
import { Itinerary } from "../Components/Itinerary.jsx";


export function Details() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { city, loading } = useSelector((state) => state.details);

  useEffect(() => {
    dispatch(fetchCityDetailsAsync(id));
  }, [id, dispatch]);

  if (loading) return <p>Loading city details...</p>;

  if (!city) return <p>City not found.</p>;

  return (
    <>
      <div className="flex flex-col lg:flex-row h-auto lg:h-screen overflow-hidden mt-14">
        {/* Panel izquierdo con imagen de fondo */}
        <div
          className="lg:w-5/6 w-full relative flex flex-col justify-between bg-cover bg-center text-white p-6 md:p-8 border-none lg:rounded-br-3xl"
          style={{ backgroundImage: `url(${city.photo})` }}
        >
          <div className="text-white bg-black rounded-lg p-4 bg-opacity-60 mt-10">
            <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold uppercase"><span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            {city.name}
                    </span></h1>
            <p className="text-lg md:text-2xl mt-4 md:mt-6 font-semibold">{city.description}</p>
          </div>

          {/* Icono de temperatura */}
          <div className="absolute top-4 right-6 flex items-center space-x-2 bg-white bg-opacity-50 p-2 rounded-lg">
            <span className="material-symbols-outlined text-black">
              thermostat
            </span>
            <span className="text-sm md:text-lg lg:text-xl text-black font-bold">

              {city.weather.averageTemperature}°C

            </span>
          </div>
        </div>

        {/* Panel derecho con contenido */}
        <div className="lg:w-2/5 w-full bg-sky-50 p-6 md:p-10 flex flex-col justify-between border-none lg:rounded-bl-3xl lg:mt-0">
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-black mt-4 md:mt-4 mb-2">
              {city.country}
            </h2>
            <div className="grid grid-cols-2 gap-4 mt-4 md:mt-6">
            <div className=" bg-white flex flex-col items-center justify-center rounded-lg shadow-md shadow-teal-500">
                <span className="material-symbols-outlined text-8xl mb-2">
                  south_america
                </span>
                {city.continent}
              </div>
              <div className=" bg-white flex flex-col items-center justify-center rounded-lg shadow-md shadow-teal-500">
                <span className="material-symbols-outlined text-8xl mb-2">
                  language_chinese_cangjie
                </span>
                {city.languages}
              </div>
              <div className=" bg-white flex flex-col items-center justify-center rounded-lg shadow-md shadow-teal-500">
                <span className="material-symbols-outlined text-8xl mb-2">payments</span>
                {city.currency.code} ({city.currency.symbol})
              </div>
             <div className=" bg-white flex flex-col items-center justify-center rounded-lg shadow-md shadow-teal-500">
                <span className="material-symbols-outlined text-8xl mb-2">
                  pace
                </span>
                {city.timeZone}
              </div>
             <div className=" bg-white flex flex-col items-center justify-center rounded-lg shadow-md shadow-teal-500">
                <span className="material-symbols-outlined text-8xl mb-2">
                  weather_mix
                </span>
                {city.weather.climate}
              </div>
             <div className=" bg-white flex flex-col items-center justify-center rounded-lg shadow-md shadow-teal-500">
                <span className="material-symbols-outlined text-8xl mb-2">
                  flight_land
                </span>
                {city.transportation.hasAirport ? "Yes" : "No"}
              </div>
             <div className=" bg-white flex flex-col items-center justify-center rounded-lg shadow-md shadow-teal-500">
                <span className="material-symbols-outlined text-8xl mb-2">
                  hotel
                </span>
                ${city.costs.averageHotelPrice}
              </div>
             <div className=" bg-white flex flex-col items-center justify-center rounded-lg shadow-md shadow-teal-500">
                <span className="material-symbols-outlined text-8xl mb-2">
                  fastfood
                </span>
                ${city.costs.averageMealPrice}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-auto flex flex-col items-center justify-center bg-center bg-cover px-4  ">
        <Itinerary />
      </div>

    </>
  );
}
