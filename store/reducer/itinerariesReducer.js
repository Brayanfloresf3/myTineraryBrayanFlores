import { createReducer } from '@reduxjs/toolkit';
import { fetchItineraryAsync } from '../action/itinerariesAction';

const initialState = {
    itineraries: [],
    loading: false,
    error: null
};

const itinerariesReducer = createReducer(initialState, (builder) => {
    builder
        .addCase(fetchItineraryAsync.pending, (state) => {
            state.loading = true;
            state.error = null;
        })
        .addCase(fetchItineraryAsync.fulfilled, (state, action) => {
            state.loading = false;
            state.itineraries = action.payload; 
        })
        .addCase(fetchItineraryAsync.rejected, (state, action) => {
            state.loading = false;
            state.error = action.error.message;
        });
});

export default itinerariesReducer;

