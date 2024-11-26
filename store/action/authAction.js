import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction('setUser', (userData) => {
  const { user = null, token = null } = userData || {};
  return {
    payload: { user, token }
  };
});

export const updateFormField = createAction("auth/updateFormField", (field, value) => ({
  payload: { field, value },
}));

export const resetForm = createAction("auth/resetForm");

export const login = createAsyncThunk("login", async ({ email, password }, { rejectWithValue }) => {
  try {
    const credentials = { email, password };
    const response = await axios.post("http://localhost:8080/api/auth/signIn", credentials);

    localStorage.setItem("token", response.data.token);
    localStorage.setItem("user", JSON.stringify(response.data.user));

    return response.data; 
  } catch (error) {
   
    const errorMessage =
      error.response?.data?.message ||
      "An unexpected error occurred while trying to sign in. Please try again later.";
    return rejectWithValue(errorMessage); 
  }
});


export const signUp = createAsyncThunk("signUp", async (formData, { dispatch }) => {
  try {
    const registerResponse = await axios.post(
      "http://localhost:8080/api/users/register",
      formData
    );
    const credentials = { email: formData.email, password: formData.password };
    const loginResponse = await axios.post("http://localhost:8080/api/auth/signIn", credentials);

    localStorage.setItem("token", loginResponse.data.token);
    localStorage.setItem("user", JSON.stringify(loginResponse.data.user));

    // Actualiza el estado de Redux
    dispatch(setUser({ user: loginResponse.data.user, token: loginResponse.data.token }));
    return loginResponse.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
    
  }
});

