import React from 'react';
import { Hero } from "../Components/Hero"
import {CallToAction} from "../Components/CallToAction"
import { Carousel } from '../Components/Carousel';

export function Home() {
  return (
    <>
    <Hero></Hero>
    <CallToAction></CallToAction>
    <Carousel></Carousel>
    </>
  );
}
