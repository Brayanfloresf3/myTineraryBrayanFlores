import React from 'react';
import Carousel from './Components/Carousel.jsx';
import { NavBar } from './Components/NavBar.jsx';
import { Hero } from './Components/Hero.jsx';
import { Footer } from './Components/Footer.jsx';
import { CallToAction } from './Components/CallToAction.jsx';

function App() {
  return (
    <>
      <div className="App">
      <div 
  className="relative w-full h-screen bg-cover bg-center" 
  style={{
    backgroundImage: 
      'linear-gradient(to bottom, rgba(0, 0, 0, 0) 70%, #405C59 100%), url("/assets/pexels-ozgomz-840663.jpg")'
  }}
>
          {/* Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-50">
            
          </div>
          <NavBar></NavBar>
          <Hero></Hero>
          <CallToAction></CallToAction>
        <Carousel></Carousel>

        
        
          <Footer></Footer>


        </div>
      </div>


    </>
  );
}

export default App;