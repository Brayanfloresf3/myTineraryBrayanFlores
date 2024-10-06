import React, { useState, useEffect } from 'react';

const cities = [
  { name: "New York", image: "https://via.placeholder.com/150?text=New+York" },
  { name: "Tokyo", image: "https://via.placeholder.com/150?text=Tokyo" },
  { name: "Paris", image: "https://via.placeholder.com/150?text=Paris" },
  { name: "London", image: "https://via.placeholder.com/150?text=London" },
  { name: "Sydney", image: "https://via.placeholder.com/150?text=Sydney" },
  { name: "Dubai", image: "https://via.placeholder.com/150?text=Dubai" },
  { name: "Rome", image: "https://via.placeholder.com/150?text=Rome" },
  { name: "Berlin", image: "https://via.placeholder.com/150?text=Berlin" },
  { name: "Los Angeles", image: "https://via.placeholder.com/150?text=Los+Angeles" },
  { name: "Moscow", image: "https://via.placeholder.com/150?text=Moscow" },
  { name: "Shanghai", image: "https://via.placeholder.com/150?text=Shanghai" },
  { name: "Toronto", image: "https://via.placeholder.com/150?text=Toronto" }
];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Cambiar automáticamente las slides cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);
    return () => clearInterval(interval);
  }, [currentIndex]);

  // Mostrar la siguiente slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % Math.ceil(cities.length / 4));
  };

  // Mostrar la slide anterior
  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + Math.ceil(cities.length / 4)) % Math.ceil(cities.length / 4));
  };

  // Dividir las ciudades en slides de 4 fotos cada una
  const slides = [];
  for (let i = 0; i < cities.length; i += 4) {
    slides.push(cities.slice(i, i + 4));
  }

  return (
    <div className="max-w-4xl mx-auto my-8">
      <h2 className="text-center text-3xl font-bold mb-6">Popular Mytineraries</h2>
      <div className="relative w-full overflow-hidden">
        {/* Renderizar las slides */}
        <div className="flex transition-transform ease-in-out duration-500" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
          {slides.map((slide, index) => (
            <div key={index} className="min-w-full grid grid-cols-4 gap-4">
              {slide.map((city, i) => (
                <div key={i} className="text-center">
                  <img src={city.image} alt={city.name} className="w-full h-40 object-cover" />
                  <p className="mt-2 font-semibold">{city.name}</p>
                </div>
              ))}
            </div>
          ))}
        </div>

        {/* Botón para slide anterior */}
        <button
          onClick={prevSlide}
          className="absolute top-1/2 left-5 text-2xl bg-black/30 text-white p-2 rounded-full cursor-pointer -translate-y-1/2"
        >
          ❮
        </button>

        {/* Botón para slide siguiente */}
        <button
          onClick={nextSlide}
          className="absolute top-1/2 right-5 text-2xl bg-black/30 text-white p-2 rounded-full cursor-pointer -translate-y-1/2"
        >
          ❯
        </button>
      </div>
    </div>
  );
};

export default Carousel;
