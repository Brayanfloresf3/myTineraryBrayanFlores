import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCityDetailsAsync = createAsyncThunk(
  'details/fetchCityDetails',
  async (id) => {
    const response = await fetch(`http://localhost:8080/api/cities/${id}`);
    const data = await response.json();
    return data;
  }
);



