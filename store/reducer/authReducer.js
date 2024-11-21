import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, signUp, updateFormField, resetForm } from "../action/authAction";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
    formData: {
        name: "",
        lastname: "",
        email: "",
        password: "",
        photoUrl: "",
        country: "",
    },
};

const authReducer = createReducer(initialState, (builder) => {
    builder.addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
    });

    builder.addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });

    builder.addCase(signUp.pending, (state) => {
        state.loading = true;
        state.error = null;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.token = action.payload.token;
    });

    builder.addCase(signUp.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
    });

    builder.addCase(setUser, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
    });

    builder.addCase(updateFormField, (state, action) => {
        const { field, value } = action.payload;
        state.formData[field] = value;
    });

    builder.addCase(resetForm, (state) => {
        state.formData = initialState.formData;
    });
});

export default authReducer;
