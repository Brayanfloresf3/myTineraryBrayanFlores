import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ButtonSecundary } from "./ButtonSecudary";

export function Card() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    console.log("Fetching cities...");
  
    fetch("https://g7sjdq-8080.csb.app/api/cities")
      .then((response) => response.json())
      .then((data) => {
        if (data && data.response) {
          setCities(data.response);
          console.log(data.response);
        }
      });
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {cities.map((city) => (
        <div
          key={city._id}
          className="group max-w-sm h-64 rounded-lg shadow-md p-6 bg-cover bg-center relative"
          style={{
            backgroundImage: `url(${city.photo})`,
          }}
        >
          {/* Overlay con efecto hover */}
          <div className="absolute inset-0 rounded-lg bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-200"></div>

          {/* Contenido */}
          <div className="relative z-10 text-white">
            <h5 className="text-2xl font-bold tracking-tight mb-2">
              {city.name}
            </h5>
            <p className="font-normal mb-4">{city.country}</p>
          </div>

          <Link to={`/details/${city._id}`}>
            <ButtonSecundary
              name="Read more"
              className="absolute bottom-3 right-2"
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
      ))}
    </div>
  );
}
