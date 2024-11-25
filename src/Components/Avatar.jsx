import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../../store/action/authAction";

export default function Avatar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.authStore); // Accedemos al estado global de Redux
  const navigate = useNavigate();
  const dispatch = useDispatch();

  // Función para cerrar sesión
  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(setUser({ user: null, token: null }));
    navigate("/signout");
  };

  // Función para abrir/cerrar el dropdown de opciones
  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    // Solo cargamos los datos del localStorage si no hay un usuario en el estado global
    const token = localStorage.getItem("token");
    const userFromStorage = JSON.parse(localStorage.getItem("user"));

    // Si el token y el usuario existen en el localStorage, los cargamos en el estado global
    if (token && userFromStorage) {
      dispatch(setUser({ user: userFromStorage, token }));
    }
  }, [dispatch]); // Ejecutamos este efecto solo una vez cuando el componente se monta

  // Si no tenemos un usuario cargado aún, evitamos renderizar el componente
  if (!user) {
    return null; // O podrías mostrar un "cargando..." si prefieres
  }

  return (
    <div className="relative">
      {/* Avatar de usuario */}
      <img
        id="avatarButton"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={user?.photoUrl || "/default-avatar.jpg"} // Usamos la foto del usuario o una predeterminada
        alt="User dropdown"
      />

      <div
        className={`absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 transition-transform ${
          dropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="px-4 py-3 text-sm text-gray-900">
          <div>{user?.name || "User Name"}</div> {/* Mostramos el nombre del usuario */}
          <div className="font-medium truncate">{user?.email || "email@example.com"}</div> {/* Mostramos el email */}
        </div>

        <ul className="py-2 text-sm text-gray-700">
          <li>
            <NavLink to="/home" className="block px-4 py-2 hover:bg-gray-100">
              Home
            </NavLink>
          </li>
          <li>
            <span className="block px-4 py-2 text-gray-400 cursor-not-allowed">
              My itineraries
            </span>
          </li>
        </ul>

        <div className="py-1">
          {/* Botón de cerrar sesión */}
          <button
            onClick={handleSignOut}
            className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
          >
            Sign out
          </button>
        </div>
      </div>
    </div>
  );
}
