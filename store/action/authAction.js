import { createAction, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const setUser = createAction("setUser");

export const updateFormField = createAction('auth/updateFormField', (field, value) => ({
    payload: { field, value }
}));

export const resetForm = createAction('auth/resetForm');

export const login = createAsyncThunk("login", async ({ email, password }) => {
    const credentials = { email, password };
    const response = await axios.post("https://jl92x5-8080.csb.app/api/auth/signIn", credentials);
    localStorage.setItem("token", response.data.token);
    console.log(response.data);
    return response.data;
});

export const signUp = createAsyncThunk("signUp", async (formData, { dispatch }) => {
    try {
        const registerResponse = await axios.post(
            "https://jl92x5-8080.csb.app/api/users/register",
            formData
        );
        const credentials = { email: formData.email, password: formData.password };
        const loginResponse = await axios.post("https://jl92x5-8080.csb.app/api/auth/signIn", credentials);
        localStorage.setItem("token", loginResponse.data.token);
        dispatch(setUser(loginResponse.data.user));
        return loginResponse.data;
    } catch (error) {
        throw error.response?.data?.message || "Registration failed";
    }
});
