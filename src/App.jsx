import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home } from './Pages/Home.jsx'
import { Cities } from './Pages/Cities.jsx';
import { NoFound } from './Pages/NotFound.jsx';
import { Details } from './Pages/Details.jsx';
import { StandarLayout } from './Layouts/StandardLayaout.jsx';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { setUser } from '../store/action/authAction.js';
import { SignIn } from './Pages/SignIn.jsx';
import SignInRoute from './Components/SignInRoute.jsx';
import SignUp from './Pages/SignUp.jsx';
import SignOut from './Pages/SignOut.jsx';

const router = createBrowserRouter([
  {
    element: <StandarLayout />,
    children: [
      { path: '/', element: <Home /> },
      { path: '/home', element: <Home /> },
      { path: '/cities', element: <Cities />},
      { path: '/details/:id', element: <Details /> },
      { path: '/signin', element:<SignInRoute><SignIn /></SignInRoute> } ,
      { path: '/signup', element: <SignUp /> },
      { path: '/signout', element: <SignOut /> }
    ]
  },
  { path: '/*', element: <NoFound /> } 
]);
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
    
    return response.data.response;
  } catch (error) {
    console.log("error", error);
  }
};


function App() {

  const dispatch = useDispatch();
  let token = localStorage.getItem("token");
  if (token) {
    loginWithToken(token).then((user) => {
      dispatch(setUser({ user, token }));
    });
  }

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;