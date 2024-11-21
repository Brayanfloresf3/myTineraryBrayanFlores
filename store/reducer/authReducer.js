import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, signUp } from "../action/authAction";

const initialState = {
    user: null,
    token: null,
    loading: false,
    error: null,
};

const authReducer = createReducer(initialState, (builder) => {
    // (login)
    builder.addCase(login.pending, (state) => {
        console.log("Login request in progress");
        state.loading = true;
        state.error = null;
        state.user = null;
        state.token = null;
    });

    builder.addCase(login.fulfilled, (state, action) => {
        console.log("Login successful");
        console.log(action);
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
    });

    builder.addCase(login.rejected, (state, action) => {
        console.log("Login failed");
        localStorage.removeItem("token");
        console.log(action);
        state.loading = false;
        state.error = action.error.message;
        state.user = null;
        state.token = null;
    });

    // (signUp)
    builder.addCase(signUp.pending, (state) => {
        console.log("SignUp request in progress");
        state.loading = true;
        state.error = null;
    });

    builder.addCase(signUp.fulfilled, (state, action) => {
        console.log("SignUp successful");
        console.log(action);
        state.loading = false;
        state.error = null;
        state.user = action.payload.user;
        state.token = action.payload.token;
    });

    builder.addCase(signUp.rejected, (state, action) => {
        console.log("SignUp failed");
        console.log(action);
        state.loading = false;
        state.error = action.error.message;
    });

    builder.addCase(setUser, (state, action) => {
        state.user = action.payload.user;
        state.token = action.payload.token;
    });
});

export default authReducer;
