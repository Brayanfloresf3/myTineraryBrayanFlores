import React, { useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home.jsx';
import { Cities } from './Pages/Cities.jsx';
import { NoFound } from './Pages/NotFound.jsx';
import { Details } from './Pages/Details.jsx';
import { StandarLayout } from './Layouts/StandardLayaout.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { SignIn } from './Pages/SignIn.jsx';
import SignInRoute from './Components/SignInRoute.jsx';
import SignUp from './Pages/SignUp.jsx';
import SignOut from './Pages/SignOut.jsx';
import { setUser } from '../store/action/authAction.js';

const router = createBrowserRouter([
  {
    element: <StandarLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/cities', element: <Cities /> },
      { path: '/details/:id', element: <Details /> },
      { path: '/signin', element: <SignInRoute><SignIn /></SignInRoute> },
      { path: '/signup', element: <SignUp /> },
      { path: '/signout', element: <SignOut /> },
    ],
  },
  { path: '/*', element: <NoFound /> },
]);

// Lógica para validar el token
const loginWithToken = async (token) => {
  try {
    console.log("Se ejecuto Login With Token");

    const response = await axios.get(
      "https://jl92x5-8080.csb.app/api/auth/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Respuesta del servidor:", response.data);
    return response.data.user; // Devuelve el usuario directamente
  } catch (error) {
    console.log("Error al validar el token:", error.response?.data || error.message);
    return null; // Devuelve null si falla
  }
};

function App() {
  const dispatch = useDispatch();

  // useEffect para sincronizar el estado inicial
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      loginWithToken(token).then((user) => {
        if (user) {
          dispatch(setUser({ user, token })); // Guarda el usuario en Redux
        } else {
          console.error("Token inválido o usuario no encontrado.");
          localStorage.removeItem("token"); // Elimina el token inválido
        }
      });
    }
  }, [dispatch]); // Solo se ejecuta una vez al montar

  return (
    <RouterProvider router={router} />
  );
}

export default App;
