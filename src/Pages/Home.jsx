import { Hero } from "../Components/Hero";
import { CallToAction } from "../Components/CallToAction";
import { Carousel } from "../Components/Carousel";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import axios from "axios";
import { setUser } from "../../store/action/authAction";

const loginWithToken = async (token) => {
  try {
    const response = await axios.get(
      "https://j8s3rt-8080.csb.app/api/auth/validateToken",
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data.response;
  } catch (error) {
    console.log("Error al validar el token:", error);
  }
};

export function Home() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
  
    const token = params.get("token");
    const photoUrl = params.get("photoUrl");
    const email = params.get("email");
    const name = params.get("name");
  
    if (token) {
      const user = {
        token,
        photoUrl: photoUrl || "",
        email: email || "",
        name: name || "",
      };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);

      loginWithToken(token).then((userData) => {
        dispatch(setUser({ user: userData, token }));
      });
      navigate("/home");
    }
  }, [dispatch, navigate]);

  return (
    <>
    
      <Hero />
      <CallToAction />
      <Carousel />
    </>
  );
}
