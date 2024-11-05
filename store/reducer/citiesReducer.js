import { createReducer } from '@reduxjs/toolkit';
import { setSearchTerm, fetchCitiesAsync } from '../action/citiesAction';

const initialState = {
  cities: [],
  loading: false,
  searchTerm: '',
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(setSearchTerm, (state, action) => {
      state.searchTerm = action.payload;
    })
    .addCase(fetchCitiesAsync.pending, (state) => {
      state.loading = true; 
    })
    .addCase(fetchCitiesAsync.fulfilled, (state, action) => {
      state.loading = false; 
      state.cities = action.payload; 
    })
    .addCase(fetchCitiesAsync.rejected, (state) => {
      state.loading = false; 
    });
});

export default citiesReducer;
