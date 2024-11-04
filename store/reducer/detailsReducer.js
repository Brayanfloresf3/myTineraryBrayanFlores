import { createReducer } from '@reduxjs/toolkit';
import { fetchCityDetailsAsync } from '../action/detailsAction.js';

const initialState = {
  city: null,
  loading: false,
  error: null
};

const detailsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchCityDetailsAsync.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(fetchCityDetailsAsync.fulfilled, (state, action) => {
      state.loading = false;
      state.city = action.payload;
    })
    .addCase(fetchCityDetailsAsync.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    })
});

export default detailsReducer;
