import React, { useEffect } from 'react';
import { Card } from '../Components/Card';
import { SearchBar } from '../Components/SearchBar';
import { useDispatch, useSelector } from 'react-redux';
import { setSearchTerm, fetchCitiesAsync } from '../../store/action/citiesAction';

export function Cities() {
  const dispatch = useDispatch();
  const cities = useSelector((state) => state.cities.cities);
  const searchTerm = useSelector((state) => state.cities.searchTerm);

  const handleSearch = (term) => {
    dispatch(setSearchTerm(term)); // Despacha la acción para actualizar el término de búsqueda
  };

  useEffect(() => {
    dispatch(fetchCitiesAsync(searchTerm)); // Carga las ciudades al montar el componente o al cambiar el término de búsqueda
  }, [dispatch, searchTerm]);


  const backgroundStyle = {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, #0D0D0D 100%), url("/assets/imageHero2.jpg")',
  };

  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="w-full h-64 bg-cover" style={backgroundStyle}>
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-white pt-28">
          Unlock the secrets of iconic{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
            Cities
          </span>
        </h1>
      </div>
      <SearchBar onSearch={handleSearch} />
      <div className="w-full p-4 ">
      <Card searchTerm={searchTerm} />
      </div>
    </>
  );
}
