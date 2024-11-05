import { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { fetchCitiesAsync } from "../../store/action/citiesAction.js";
import { ButtonSecundary } from "./ButtonSecudary.jsx";
import { Skeleton } from "./Skeleton";

export function Card({ searchTerm }) {
  const dispatch = useDispatch();

  const cities = useSelector((state) => state.cities.cities); 
  const loading = useSelector((state) => state.cities.loading);

  useEffect(() => {
    dispatch(fetchCitiesAsync(searchTerm)); 
  }, [dispatch, searchTerm]);

  return (
    <div className="md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-5">
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
            <div
              className="absolute inset-0 bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
              style={{
                backgroundImage: `url(${city.photo})`,
              }}
            ></div>

            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-70 transition-all duration-300"></div>

            <div className="relative z-15 p-6 h-full flex flex-col justify-between">
              <div>
                <h5 className="text-2xl font-bold tracking-tight mb-2 text-white">
                  {city.name}
                </h5>
                <p className="font-normal mb-4 text-white">{city.country}</p>
              </div>
              <NavLink to={`/details/${city._id}`}>
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
              </NavLink>
            </div>
          </div>
        ))
      )}
    </div>
  );
}
