import React from 'react';
import { Skeleton } from '../Components/Skeleton';


export function Cities() {
  const backgroundStyle = {
    backgroundImage: 'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, #000000 100%), url("/assets/imageHero2.jpg")',
};
  const skeletonCount = 6;

  return (
    <>
    <div className=" w-full h-64 bg-cover " style={backgroundStyle}>
    <h1 className='text-2xl sm:text-4xl font-bold text-center text-white pt-28'>Unlock the secrets of iconic Cities</h1>
    </div>
  

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 px-4 mx-16">
      {Array.from({ length: skeletonCount }, (_, index) => (
        <Skeleton key={index} />

      ))}
      </div>
    </>
  );
}

