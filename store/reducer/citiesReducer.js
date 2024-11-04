import { createReducer } from '@reduxjs/toolkit';
import { fetchCitiesAsync } from '../action/citiesAction';

const initialState = {
  items: [],
  loading: false,
  error: null
};

const citiesReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCitiesAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCitiesAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.items = action.payload;
    })
    .addCase(fetchCitiesAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });
});

export default citiesReducer;
