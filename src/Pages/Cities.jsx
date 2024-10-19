import React from 'react';
import { Skeleton } from '../Components/Skeleton';
import { Card } from '../Components/Card';
import { SearchBar } from '../Components/SearchBar';

export function Cities() {
  const backgroundStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, #000000 100%), url("/assets/imageHero2.jpg")',
};
  const skeletonCount = 12;

  return (
    <>
    <div className=" w-full h-64 bg-cover " style={backgroundStyle}>
    <h1 className='text-2xl sm:text-4xl font-bold text-center text-white pt-28'>Unlock the secrets of iconic Cities</h1>
    </div>
    <SearchBar></SearchBar>

    <div className="w-full p-4 md:px-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 ">
      {Array.from({ length: skeletonCount }, (_, index) => (
        <Card key={index}></Card>

      ))}
      </div>

      
    </>
  );
}



{/*  */}