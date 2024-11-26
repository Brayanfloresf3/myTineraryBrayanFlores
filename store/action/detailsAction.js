import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCityDetailsAsync = createAsyncThunk(
  'details/fetchCityDetails',
  async (id) => {
    const token = localStorage.getItem("token"); 

    const response = await fetch(`http://localhost:8080/api/cities/${id}`, {
      headers: {
        Authorization: `Bearer ${token}`, 
      },
    });

    if (!response.ok) {
      throw new Error("Error fetching city details");
    }

    const data = await response.json();
    return data; 
  }
);


