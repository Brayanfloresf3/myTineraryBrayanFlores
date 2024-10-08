import React from 'react';
import {Carousel } from './Components/Carousel.jsx';
import { NavBar } from './Components/NavBar.jsx';
import { Hero } from './Components/Hero.jsx';
import { Footer } from './Components/Footer.jsx';
import { CallToAction } from './Components/CallToAction.jsx';

function App() {
  return (
    <>
      <div className="App h-screen">
        <NavBar></NavBar>
        <Hero></Hero>
        <CallToAction></CallToAction>
        <Carousel></Carousel>
        <Footer></Footer>
      </div>
    </>
  );
}

export default App;