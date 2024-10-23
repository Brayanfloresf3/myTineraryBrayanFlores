import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonSecundary } from "./ButtonSecudary";
import { Skeleton } from "./Skeleton";

export function Card({ searchTerm }) {
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchCities = (searchTerm = "") => {
    const query = searchTerm ? `?name=${searchTerm}` : ""; // Si hay búsqueda, añadir query param
    fetch(`http://localhost:8080/api/cities${query}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.response) {
          setCities(data.response);
          setLoading(false); // Cuando los datos se carguen, cambiamos el estado de loading
        }
      })
      .catch((error) => {
        console.error("Error fetching cities:", error);
        setLoading(false); // Incluso si hay un error, dejamos de cargar
      });
  };

  useEffect(() => {
    setLoading(true); // Establecer el estado de carga al iniciar la búsqueda
    fetchCities(searchTerm); // Llamar a fetchCities cada vez que searchTerm cambie
  }, [searchTerm]); // Se vuelve a ejecutar cuando searchTerm cambie

  return (
    <div className="md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {loading ? (
        // Mostrar Skeletons mientras se cargan las ciudades
        Array(8)
          .fill(0)
          .map((_, index) => (
            <div key={index} className="max-w-sm h-80 gap-6 mt-4">
              <Skeleton height={230} />
            </div>
          ))
      ) : (
        cities.map((city) => (
          <div
            key={city._id}
            className="group max-w-sm h-64 rounded-lg shadow-md relative overflow-hidden"
          >
            {/* Imagen con efecto de hover */}
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundImage: `url(${city.photo})`,
              }}
            ></div>

            {/* Overlay para oscurecer con hover */}
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>

            <div className="relative z-15 p-6 h-full flex flex-col justify-between">
              <div>
                <h5 className="text-2xl font-bold tracking-tight mb-2 text-white">
                  {city.name}
                </h5>
                <p className="font-normal mb-4 text-white">{city.country}</p>
              </div>
              <Link to={`/details/${city._id}`}>
                <ButtonSecundary
                  name="Read more"
                  className="absolute bottom-4 right-4"
                  icon={
                    <svg
                      className="ml-2 h-5 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                      />
                    </svg>
                  }
                />
              </Link>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
