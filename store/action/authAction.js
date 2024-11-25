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

export const login = createAsyncThunk("login", async ({ email, password }) => {
  const credentials = { email, password };
  const response = await axios.post("https://j8s3rt-8080.csb.app/api/auth/signIn", credentials);

  // Guardar token y usuario en localStorage
  localStorage.setItem("token", response.data.token);
  localStorage.setItem("user", JSON.stringify(response.data.user));

  return response.data;
});

export const signUp = createAsyncThunk("signUp", async (formData, { dispatch }) => {
  try {
    const registerResponse = await axios.post(
      "https://j8s3rt-8080.csb.app/api/users/register",
      formData
    );
    const credentials = { email: formData.email, password: formData.password };
    const loginResponse = await axios.post("https://j8s3rt-8080.csb.app/api/auth/signIn", credentials);

    // Guardar token y usuario
    localStorage.setItem("token", loginResponse.data.token);
    localStorage.setItem("user", JSON.stringify(loginResponse.data.user));

    // Actualiza el estado de Redux
    dispatch(setUser({ user: loginResponse.data.user, token: loginResponse.data.token }));
    return loginResponse.data;
  } catch (error) {
    throw error.response?.data?.message || "Registration failed";
  }
});

// export const fetchUserFromToken = createAsyncThunk(
//   "auth/fetchUserFromToken",
//   async (_, { rejectWithValue }) => {
//     const token = localStorage.getItem("token");
//     if (!token) return rejectWithValue("No token found");

//     try {
//       const response = await axios.get("https://tu-backend/api/auth/me", {
//         headers: { Authorization: `Bearer ${token}` },
//       });
//       return response.data.user;
//     } catch (error) {
//       return rejectWithValue(error.response?.data || "Error fetching user");
//     }
//   }
// );
