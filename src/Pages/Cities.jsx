import React from 'react';
import { Skeleton } from '../Components/Skeleton';

export function Cities() {
  return (
    <>
      <div className=" w-full bg-black mt-15">
        <h1 className='text-2xl font-bold text-center mt-20 text-white'>CITIES</h1>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 px-4">
        
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-10 px-4">
        <Skeleton />
        <Skeleton />
        <Skeleton />
      </div>
    </>
  );
}
