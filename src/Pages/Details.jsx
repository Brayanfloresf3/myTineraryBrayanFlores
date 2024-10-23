import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonSecundary } from "../Components/ButtonSecudary";

export function Details() {
  const { id } = useParams(); // Obtiene el id de la URL
  const [city, setCity] = useState(null);
  const [loading, setLoading] = useState(true); // Agregamos un estado para manejar la carga

  useEffect(() => {
    fetch(`https://g7sjdq-8080.csb.app/api/cities/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setCity(data);
        setLoading(false); // Cambiamos el estado de carga cuando tenemos datos
      })
      .catch((error) => {
        console.error("Error fetching city details:", error);
      });
  }, [id]);

  if (loading) return <p>Loading city details...</p>; // Muestra un mensaje de carga

  if (!city) return <p>City not found.</p>; // Manejo si la ciudad no se encuentra

  return (
    <>
      <div
        className="flex flex-col items-center justify-center bg-center mt-14 md:pt-14 md:h-screen bg-cover"
        style={{ backgroundImage: `url(${city.photo})` }}
      >

        <div className="bg-black bg-opacity-70 p-6 sm:rounded-lg text-center md:mb-10">
          <h1 className="text-4xl font-bold text-white mb-4 text-center">{city.name}</h1>
          <p className="text-lg text-white mb-2">{city.description}</p>
          <p className="text-md text-white">Country: {city.country}</p>
          <p className="text-md text-white">Continent: {city.continent}</p>
          <p className="text-md text-white">Population: {city.population}</p>
          <p className="text-md text-white">Currency: {city.currency.code} ({city.currency.symbol})</p>
          <p className="text-md text-white">Languages: {city.languages}</p>
          <p className="text-md text-white">Time Zone: {city.timeZone}</p>
          <p className="text-md text-white">Weather: {city.weather.climate} | Average Temperature: {city.weather.averageTemperature}°C</p>
          <p className="text-md text-white">Best Time to Visit: {city.weather.bestTimeToVisit}</p>
          <p className="text-md text-white">Has Airport: {city.transportation.hasAirport ? "Yes" : "No"}</p>
          <p className="text-md text-white">Has Public Transport: {city.transportation.hasPublicTransport ? "Yes" : "No"}</p>
          <p className="text-md text-white">Safety Index: {city.safety.safetyIndex}</p>
          <p className="text-md text-white">Average Hotel Price: ${city.costs.averageHotelPrice}</p>
          <p className="text-md text-white">Average Meal Price: ${city.costs.averageMealPrice}</p>
          <p className="text-md text-white">Transportation Price: ${city.costs.transportationPrice}</p>
          <p className="text-md text-white">Is Capital: {city.isCapital ? "Yes" : "No"}</p>
          <p className="text-3xl text-white font-bold mb-4">Under construction</p>
          <Link to="/cities">
            <ButtonSecundary name="Back to Cities" />
          </Link>

        </div>

      </div>
    </>
  );
}
