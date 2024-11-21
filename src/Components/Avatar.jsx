import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import { setUser } from "../../store/action/authAction";

export default function Avatar() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const { user } = useSelector((state) => state.authStore);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    dispatch(setUser({ user: null, token: null })); // Limpia Redux
    navigate("/signout");
  };

  const toggleDropdown = () => {
    setDropdownOpen((prev) => !prev);
  };

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = JSON.parse(localStorage.getItem("user"));
  
    console.log("Intentando sincronizar LocalStorage con Redux:");
    console.log("Token:", token);
    console.log("User:", user);
  
    if (token && user) {
      dispatch(setUser({ user, token }));
    }
  }, [dispatch]);

  return (
    <div className="relative">
      <img
        id="avatarButton"
        onClick={toggleDropdown}
        className="w-10 h-10 rounded-full cursor-pointer"
        src={user?.photoUrl || "/default-avatar.jpg"}
        alt="User dropdown"
      />

      <div
        className={`absolute right-0 z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-44 transition-transform ${
          dropdownOpen ? "scale-100 opacity-100" : "scale-95 opacity-0"
        }`}
      >
        <div className="px-4 py-3 text-sm text-gray-900">
          <div>{user?.name || "User Name"}</div>
          <div className="font-medium truncate">{user?.email || "email@example.com"}</div>
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
