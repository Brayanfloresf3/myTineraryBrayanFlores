import React from 'react';
import { Card } from '../Components/Card';
import { SearchBar } from '../Components/SearchBar';

export function Cities() {
  const backgroundStyle = {
    backgroundImage:
      'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, #000000 100%), url("/assets/imageHero2.jpg")',
  };

  return (
    <>
      <div className="w-full h-64 bg-cover" style={backgroundStyle}>
        <h1 className="text-2xl sm:text-4xl font-bold text-center text-white pt-28">
          Unlock the secrets of iconic Cities
        </h1>
      </div>
      <SearchBar />
      <div className="w-full p-5">
        <Card />
      </div>
    </>
  );
}