import { createAsyncThunk } from '@reduxjs/toolkit';

export const fetchCityDetailsAsync = createAsyncThunk(
  'details/fetchCityDetails',
  async (id) => {
    const response = await fetch(`https://j8s3rt-8080.csb.app/api/cities/${id}`);
    const data = await response.json();
    return data;
  }
);



