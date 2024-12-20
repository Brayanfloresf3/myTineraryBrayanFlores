import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { setUser } from "../../store/action/authAction";

const SignOut = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    // Elimina tanto el token como el usuario de localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Restablece el estado de Redux
    dispatch(setUser({ user: null, token: null }));

    // Redirige al usuario a la página de inicio de sesión
    navigate("/signin");
  }, [dispatch, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <h2 className="text-xl font-semibold text-gray-900">
        Signing you out...
      </h2>
    </div>
  );
};

export default SignOut;
