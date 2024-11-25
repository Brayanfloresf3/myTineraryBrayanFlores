import React, { useEffect, useState } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import axios from 'axios';

import { Home } from './Pages/Home.jsx';
import { Cities } from './Pages/Cities.jsx';
import { NoFound } from './Pages/NotFound.jsx';
import { Details } from './Pages/Details.jsx';
import { StandarLayout } from './Layouts/StandardLayaout.jsx';
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

// Función para obtener datos del usuario usando el token
const loginWithToken = async (token) => {
  try {
    console.log("Validando el token...");

    const response = await axios.get(
      "https://j8s3rt-8080.csb.app/api/auth/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );

    console.log("Usuario validado:", response.data.user);
    return response.data.user;
  } catch (error) {
    console.error("Error al validar el token:", error.response?.data || error.message);
    return null;
  }
};

function App() {
  const dispatch = useDispatch();
  const [isValidatingToken, setIsValidatingToken] = useState(true);

  useEffect(() => {
    const validateUserToken = async () => {
      const token = localStorage.getItem('token');

      if (!token) {
        console.log("No se encontró un token en el almacenamiento local.");
        setIsValidatingToken(false);
        return;
      }

      try {
        setIsValidatingToken(true);

        const user = await loginWithToken(token);

        if (user) {
          dispatch(setUser({ user, token }));
        } else {
          console.warn("El token no es válido o ha expirado.");
          localStorage.removeItem('token');
        }
      } catch (error) {
        console.error("Error inesperado durante la validación del token:", error);
      } finally {
        setIsValidatingToken(false);
      }
    };

    validateUserToken();
  }, [dispatch]);

  // Loader mientras se valida el token
  if (isValidatingToken) {
    return <p>Cargando...</p>;
  }

  return <RouterProvider router={router} />;
}

export default App;
