import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home.jsx'
import { Cities } from './Pages/Cities.jsx';
import { NoFound } from './Pages/NotFound.jsx';
import { Details } from './Pages/Details.jsx';
import { StandarLayout } from './Layouts/StandardLayaout.jsx';

const router = createBrowserRouter([
  {
    element: <StandarLayout></StandarLayout>,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/cities', element: <Cities /> },
      { path: '/details/:id', element: <Details /> }
    ]
  },
  { path: '/*', element: <NoFound /> }
]);


function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;