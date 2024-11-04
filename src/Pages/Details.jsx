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
      <div className="flex h-screen overflow-hidden mt-14 ">
        {/* Panel izquierdo con imagen de fondo */}
        <div className="relative flex flex-col justify-between w-3/5 bg-cover bg-center text-white p-8 border border-none rounded-br-3xl"
            style={{ backgroundImage: `url(${city.photo})` }}>
          <div className="text-white bg-black rounded-lg p-4 bg-opacity-60 mt-5">
            <h1 className="text-6xl font-bold uppercase">{city.name}</h1>
            <p className="text-2xl mt-6 font-semibold">{city.description}</p>
          </div>

          {/* Icono de temperatura */}
          <div className="absolute top-4 right-4 flex items-center space-x-2">
            <span className="text-lg">{city.weather.averageTemperature}°C</span>
          </div>
        </div>

        {/* Panel derecho con contenido */}
        <div className="w-2/5 bg-gradient-to-b from-white via-white to-white p-10 flex flex-col justify-between border border-none rounded-bl-3xl">
          <div>
            <h2 className="text-4xl font-bold text-black mt-4 mb-2">Country: {city.country}</h2>
            <p className="text-md text-black font-semibold mb-1">Continent: {city.continent}</p>
            <p className="text-md text-black font-semibold mb-1">Population: {city.population}</p>
            <p className="text-md text-black font-semibold mb-1">Currency: {city.currency.code} ({city.currency.symbol})</p>
            <p className="text-md text-black font-semibold mb-1">Languages: {city.languages}</p>
            <p className="text-md text-black font-semibold mb-1">Time Zone: {city.timeZone}</p>
            <p className="text-md text-black font-semibold mb-1">Weather: {city.weather.climate} | Average Temperature: {city.weather.averageTemperature}°C</p>
            <p className="text-md text-black font-semibold mb-1">Best Time to Visit: {city.weather.bestTimeToVisit}</p>
            <p className="text-md text-black font-semibold mb-1">Has Airport: {city.transportation.hasAirport ? "Yes" : "No"}</p>
            <p className="text-md text-black font-semibold mb-1">Has Public Transport: {city.transportation.hasPublicTransport ? "Yes" : "No"}</p>
            <p className="text-md text-black font-semibold mb-1">Safety Index: {city.safety.safetyIndex}</p>
            <p className="text-md text-black font-semibold mb-1">Average Hotel Price: ${city.costs.averageHotelPrice}</p>
            <p className="text-md text-black font-semibold mb-1">Average Meal Price: ${city.costs.averageMealPrice}</p>
            <p className="text-md text-black font-semibold mb-1">Transportation Price: ${city.costs.transportationPrice}</p>
            <p className="text-md text-black font-semibold mb-1">Is Capital: {city.isCapital ? "Yes" : "No"}</p>
          </div>
        </div>
      </div>

      <div className="h-screen flex flex-col items-center justify-center bg-center bg-cover">
        <Itinerary />
      </div>
    </>
  );
}
