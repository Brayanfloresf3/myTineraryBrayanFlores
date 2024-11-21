import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, signUp, updateFormField, resetForm, fetchUserFromToken } from "../action/authAction";

const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null, // Datos del usuario de localStorage
  token: localStorage.getItem("token") || null, // Token de localStorage
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
      localStorage.setItem("user", JSON.stringify(action.payload.user));
      localStorage.setItem("token", action.payload.token);
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
  builder.addCase(setUser, (state, action) => {
    const { user, token } = action.payload;

    if (token === null) {
      // Eliminar datos de localStorage si no hay token
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      state.token = null;
      state.user = null;
    } else {
      // Actualizar el estado si el token es válido
      state.token = token;
      state.user = user;
      
      if (user) {
        localStorage.setItem("user", JSON.stringify(user));
      }
      if (token) {
        localStorage.setItem("token", token);
      }
    }
  });

  // Acción para actualizar los campos del formulario
  builder.addCase(updateFormField, (state, action) => {
    const { field, value } = action.payload;
    state.formData[field] = value;
  });

  // Acción para resetear los datos del formulario
  builder.addCase(resetForm, (state) => {
    state.formData = initialState.formData;
  });

  // Acción para obtener el usuario del token
  builder
    .addCase(fetchUserFromToken.pending, (state) => {
      state.loading = true;
    })
    .addCase(fetchUserFromToken.fulfilled, (state, action) => {
      state.user = action.payload;
      state.loading = false;
      state.error = null;
      
      // Actualiza los datos del usuario en localStorage
      localStorage.setItem("user", JSON.stringify(action.payload));
    })
    .addCase(fetchUserFromToken.rejected, (state, action) => {
      state.loading = false;
      state.error = action.payload;
    });
});

export default authReducer;
