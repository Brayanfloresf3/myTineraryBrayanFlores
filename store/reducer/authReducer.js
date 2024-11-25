import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, signUp, updateFormField, resetForm } from "../action/authAction";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  token: localStorage.getItem("token") || null,
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
  // Acción de login
  builder
    .addCase(login.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(login.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
      
      // Guardar en localStorage
      // localStorage.setItem("user", JSON.stringify(action.payload.user));
      // localStorage.setItem("token", action.payload.token);
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

  // Acción de signUp
  builder
    .addCase(signUp.pending, (state) => {
      state.loading = true;
      state.error = null;
    })
    .addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload.user;
      state.token = action.payload.token;
      state.loading = false;
    })
    .addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;
    });

  // Acción de setUser (Limpiar token y user si es null)
  builder.addCase(setUser,(state,action)=>{

    state.user = action.payload.user,
    state.token = action.payload.token
})

  // Acción para actualizar los campos del formulario
  builder.addCase(updateFormField, (state, action) => {
    const { field, value } = action.payload;
    state.formData[field] = value;
  });

  // Acción para resetear los datos del formulario
  builder.addCase(resetForm, (state) => {
    state.formData = initialState.formData;
  });


});

export default authReducer;
