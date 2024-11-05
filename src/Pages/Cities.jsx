import React, { useState } from 'react';
import { Card } from '../Components/Card';
import { SearchBar } from '../Components/SearchBar';

export function Cities() {
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda

  const backgroundStyle = {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, #0D0D0D 100%), url("/assets/imageHero2.jpg")',
  };

  const handleSearch = (term) => {
    setSearchTerm(term); // Actualiza el término de búsqueda
  };

  return (
    <>
      <div className="w-full h-64 bg-cover" style={backgroundStyle}>
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-white pt-28">
          Unlock the secrets of iconic <span className="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">
                        Cities
                    </span>
        </h1>
      </div>
      <SearchBar onSearch={handleSearch} /> {/* función de búsqueda */}
      <div className="w-full p-4 ">
        <Card searchTerm={searchTerm} /> {/* término de búsqueda como prop */}
      </div>
    </>
  );
}
