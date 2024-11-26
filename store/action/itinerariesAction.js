import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchItineraryAsync = createAsyncThunk(
    'itineraries/fetchItinerariesByCity',
    async (cityId) => {
        const token = localStorage.getItem("token"); 

        const response = await fetch(`http://localhost:8080/api/itineraries/city/${cityId}`, {
            headers: {
                Authorization: `Bearer ${token}`,
            }
        });
        if (!response.ok) {
            throw new Error("Error fetching itineraries");
        }

        const data = await response.json();
        return data.response; 
    }
);
