import { createAction, createAsyncThunk } from '@reduxjs/toolkit';

export const setSearchTerm = createAction('cities/setSearchTerm'); 
export const fetchCities = createAction('cities/fetchCities');

export const fetchCitiesAsync = createAsyncThunk(
  'cities/fetchCities',
  async (searchTerm = "") => {
    const query = searchTerm ? `?name=${searchTerm}` : "";
    const response = await fetch(`https://9hs6lp-8080.csb.app/api/cities${query}`);
    const data = await response.json(); 
    return data.response;
  }
);
