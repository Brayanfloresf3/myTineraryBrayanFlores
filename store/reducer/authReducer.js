import { createReducer } from "@reduxjs/toolkit";
import { login, setUser, signUp, updateFormField, resetForm } from "../action/authAction";

// Función para obtener el estado inicial de manera segura
const getInitialState = () => {
  try {
    const storedUser = localStorage.getItem("user");
    const storedToken = localStorage.getItem("token");

    return {
      user: storedUser ? JSON.parse(storedUser) : null,
      token: storedToken || null,
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
  } catch (error) {
    console.error("Error loading initial state", error);
    return {
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
  }
};

const initialState = getInitialState();

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

      // Guardar en localStorage de manera segura
      try {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      } catch (error) {
        console.error("Error storing user data", error);
      }
    })
    .addCase(login.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;

      // Limpiar localStorage en caso de error
      localStorage.removeItem("user");
      localStorage.removeItem("token");
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

      try {
        localStorage.setItem("user", JSON.stringify(action.payload.user));
        localStorage.setItem("token", action.payload.token);
      } catch (error) {
        console.error("Error storing user data", error);
      }
    })
    .addCase(signUp.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message;

      // Limpiar localStorage en caso de error
      localStorage.removeItem("user");
      localStorage.removeItem("token");
    });

  // Acción de setUser (Manejar cambios de usuario)
  builder.addCase(setUser, (state, action) => {
    const { user, token } = action.payload;

    state.user = user;
    state.token = token;

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
});

export default authReducer;
