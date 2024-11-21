import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction("setUser");

export const login = createAsyncThunk("login", async ({ email, password }) => {
    console.log("entramos a login");
    const credentials = {
        email: email,
        password: password,
    };

    const response = await axios.post("https://jl92x5-8080.csb.app/api/auth/signIn", credentials);
    console.log("se proceso la peticion");
    console.log(response.data);
    localStorage.setItem("token", response.data.token);

    return response.data;
});


export const signUp = createAsyncThunk("signUp", async (formData, { dispatch }) => {
    try {
      // Realizar el registro
      const registerResponse = await axios.post(
        "https://jl92x5-8080.csb.app/api/users/register",
        formData
      );
      console.log("User registered:", registerResponse.data);
  
      // Si el registro es exitoso, iniciar sesión automáticamente
      const credentials = {
        email: formData.email,
        password: formData.password,
      };
  
      const loginResponse = await axios.post(
        "https://jl92x5-8080.csb.app/api/auth/signIn",
        credentials
      );
      console.log("User logged in:", loginResponse.data);
  
      // Guardar token en localStorage
      localStorage.setItem("token", loginResponse.data.token);
  
      // Disparar la acción para establecer el usuario en Redux
      dispatch(setUser(loginResponse.data.user));
  
      // Retornar los datos del usuario
      return loginResponse.data;
    } catch (error) {
      console.error("Error in signUp:", error);
      throw error.response?.data?.message || "Registration failed";
    }
  });
  