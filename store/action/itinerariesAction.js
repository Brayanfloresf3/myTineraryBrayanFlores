import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItineraryAsync = createAsyncThunk(
    'itineraries/fetchItinerariesByCity',
    async (cityId) => {
        const response = await fetch(`https://jl92x5-8080.csb.app/api/itineraries/city/${cityId}`);
        const data = await response.json();
        return data.response;
    }
);
