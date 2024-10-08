import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavBar } from '../Components/NavBar.jsx';
import { Footer } from '../Components/Footer.jsx';

export function StandarLayout() {
  return (
    <>
      <NavBar />
      <main className="min-h-screen">
        <Outlet />
      </main>
      <Footer />
    </>
  );
}
