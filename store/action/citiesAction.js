import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setSearchTerm = createAction('cities/setSearchTerm'); 
export const fetchCities = createAction('cities/fetchCities');

export const fetchCitiesAsync = createAsyncThunk(
  'cities/fetchCities',
  async (searchTerm = "") => {
    const query = searchTerm ? `?name=${searchTerm}` : "";
    const token = localStorage.getItem("token"); 

    const response = await fetch(`http://localhost:8080/api/cities${query}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching cities");
    }

    const data = await response.json();
    return data.response;
  }
);
