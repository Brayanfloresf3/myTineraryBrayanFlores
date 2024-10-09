import React, { useState, useEffect } from 'react';

const cities = [
  { name: "Egipto", image: "https://images.pexels.com/photos/7566890/pexels-photo-7566890.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Tokyo", image: "https://images.pexels.com/photos/2385210/pexels-photo-2385210.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Paris", image: "https://images.pexels.com/photos/460740/pexels-photo-460740.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "London", image: "https://images.pexels.com/photos/912897/pexels-photo-912897.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Sydney", image: "https://images.pexels.com/photos/15453729/pexels-photo-15453729/free-photo-of-mar-ciudad-australia-sidney.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Rio", image: "https://images.pexels.com/photos/1118877/pexels-photo-1118877.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Roma", image: "https://images.pexels.com/photos/21550396/pexels-photo-21550396/free-photo-of-italia-viaje-viajar-roma.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Peru", image: "https://images.pexels.com/photos/16756127/pexels-photo-16756127/free-photo-of-montanas-punto-de-referencia-viaje-viajar.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Suiza", image: "https://images.pexels.com/photos/21938815/pexels-photo-21938815/free-photo-of-vista-del-matterhorn-desde-la-ruta-de-senderismo-en-zermatt.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Moscu", image: "https://images.pexels.com/photos/16647488/pexels-photo-16647488/free-photo-of-punto-de-referencia-tarde-noche-multitud.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" },
  { name: "Colombia", image: "https://images.pexels.com/photos/17745834/pexels-photo-17745834/free-photo-of-ciudad-calle-edificio-callejon.jpeg?auto=compress&cs=tinysrgb&w=600" },
  { name: "Bolivia", image: "https://images.pexels.com/photos/7358860/pexels-photo-7358860.jpeg?auto=compress&cs=tinysrgb&w=600" }
];

// Dividir las ciudades en grupos de 4
const groupedCities = [];
for (let i = 0; i < cities.length; i += 4) {
  groupedCities.push(cities.slice(i, i + 4));
}

export function Carousel() {
  
  const [currentSlide, setCurrentSlide] = useState(0);

  // Avanzar automáticamente 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % groupedCities.length);
    }, 4000); 

    return () => clearInterval(interval); // Limpiar el intervalo cuando el componente se desmonte
  }, []);

  const handleNext = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % groupedCities.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + groupedCities.length) % groupedCities.length);
  };

  return (
    <div className="relative w-full md:h-[400px] h-[384px] bg-black md:my-24 mb-20">
      <h2 className="text-white text-center text-3xl md:text-5xl font-bold">
        Explore incredible destinations
      </h2>
      
      <div className="relative h-full overflow-hidden rounded-lg mt-10">
        {groupedCities.map((group, index) => (
          <div
            key={index}
            className={`absolute px-14 justify-center items-center inset-0 sm:grid sm:grid-cols-2 md:grid md:grid-cols-2 lg:grid-cols-4 gap-4 transition-opacity duration-700 ease-in-out ${index === currentSlide ? 'opacity-100' : 'opacity-0'}`}
          >
            {group.map((city) => {
              return (
                <div key={city.name} className="relative flex h-96 flex-col items-center">
                  <img
                    src={city.image}
                    alt={city.name}
                    className="w-full h-full object-cover rounded-lg"
                  />
                </div>
              );
            })}
          </div>
        ))}
      </div>
    
      {/* Indicadores del carrusel */}
      <div className="absolute  left-1/2 transform -translate-x-1/2 z-30 flex space-x-3 ">
        {groupedCities.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
            aria-label={`Slide ${index + 1}`}
          />
        ))}
      </div>
    
      {/* Botones de navegación */}
      <button
        className="absolute top-16 left-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-8 h-20 opacity-70 bg-white rounded-full">
          <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </span>
      </button>
      <button
        className="absolute top-16 right-0 z-30 flex items-center justify-center h-full px-4 focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-8 h-20 opacity-70 bg-white rounded-full">
          <svg className="w-6 h-6 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </span>
      </button>
    </div>
  );
}
