import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItineraryAsync = createAsyncThunk(
    'itineraries/fetchItinerariesByCity',
    async (cityId) => {
        const response = await fetch(`http://localhost:8080/api/itineraries/city/${cityId}`);
        const data = await response.json();
        return data.response;
    }
);
