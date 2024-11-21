
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, NavLink } from "react-router-dom";
import { signUp, updateFormField, resetForm } from "../../store/action/authAction";


const SignUp = () => {
  // Extraer datos del estado global usando useSelector
  const { formData, loading, error } = useSelector((state) => state.authStore);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    const { name, value } = e.target;
    dispatch(updateFormField(name, value)); // Actualiza el campo en Redux
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Despacha la acción signUp
      await dispatch(signUp(formData)).unwrap(); // Asegura que errores sean manejados correctamente
      navigate("/home"); // Redirige al usuario tras un registro exitoso
    } catch (error) {
      console.error("Error during sign up:", error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center mt-20 mb-7">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 text-center">
          Create your Mytinerary Account
        </h3>
        <form onSubmit={handleSubmit} className="space-y-2">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-900">
              First Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              className="w-full p-2.5 mt-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="John"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastname" className="block text-sm font-medium text-gray-900">
              Last Name
            </label>
            <input
              type="text"
              id="lastname"
              name="lastname"
              className="w-full p-2.5 mt-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="Doe"
              value={formData.lastname}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-900">
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="w-full p-2.5 mt-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="name@mytinerary.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-900">
              Your Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full p-2.5 mt-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="••••••••"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-900">
              Photo URL
            </label>
            <input
              type="url"
              id="photoUrl"
              name="photoUrl"
              className="w-full p-2.5 mt-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              placeholder="https://example.com/photo.jpg"
              value={formData.photoUrl}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="country" className="block text-sm font-medium text-gray-900">
              Country
            </label>
            <select
              id="country"
              name="country"
              className="w-full p-2.5 mt-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
              value={formData.country}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Select your country
              </option>
              <option value="USA">USA</option>
              <option value="Canada">Canada</option>
              <option value="Mexico">Mexico</option>
              <option value="Venezuela">Venezuela</option>
              <option value="Colombia">Colombia</option>
              <option value="Argentina">Argentina</option>
              <option value="Chile">Chile</option>
              <option value="Costa Rica">Costa Rica</option>
            </select>
          </div>
          <button
            type="submit"
            className={`w-full py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm ${
              loading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={loading}
          >
            
            {loading ? "Creating account..." : "Sign Up"}
          </button>
          <div className="text-sm text-center text-gray-500">
            Already have an account?{" "}
            < NavLink to="/signin" className="text-blue-700 hover:underline">
              Sign in
            </NavLink>
          </div>
          {error && <p className="text-red-500 text-center">{error}</p>}
        </form>
      </div>
    </div>
  );
};

export default SignUp;
