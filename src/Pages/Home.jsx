import { Hero } from "../Components/Hero"
import {CallToAction} from "../Components/CallToAction"
import { Carousel } from '../Components/Carousel';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from "react";
import axios from "axios";
import { setUser } from "../../store/action/authAction";

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

export function Home() {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    
    const params = new URLSearchParams(window.location.search);
    const token = params.get("token");
    if (token) {
      localStorage.setItem("token", token);
    
      loginWithToken(token).then((user) => {
        dispatch(setUser({ user, token }));
      });
      navigate("/home")
    }
    
  }, [dispatch,navigate]);


  return (
    <>
    <Hero></Hero>
    <CallToAction></CallToAction>
    <Carousel></Carousel>
    </>
  );
}
