import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../store/action/authAction";
import { NavLink, useNavigate } from "react-router-dom";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const authStore = useSelector((state) => state.authStore);
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();

        if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            alert("Invalid email format");
            return;
        }
        dispatch(login({ email, password }));
    };

    // Redirección al dashboard si está autenticado
    useEffect(() => {
        if (authStore.isAuthenticated) {
            navigate("/home");

        }
    }, [authStore.isAuthenticated, navigate]);

    const { loading, error } = authStore;

    const signInGoogle = () => {
        window.location.href = "http://localhost:8080/api/auth/signIn/google/";
    };

    return (
        <div
            className="min-h-screen flex items-center justify-center mx-3 mt-10"

        >
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md" style={{
                background: "linear-gradient(135deg, #2B78D9, #45CC8F, #1F9DF2, #45CC8F)",
                backgroundSize: "400% 400%",
                animation: "gradientBG 12s ease infinite",
            }}>
                <h3 className="text-xl font-bold text-gray-900 mb-6 text-center">
                    Sign in to <span className="tracking-wide md:self-center md:text-md text-black" style={{ fontFamily: 'Bungee, cursive' }}>
                        MY<img src="/assets/faviconLogo.png" alt="logo" className='w-6 h-5 hidden sm:inline-block mb-2' />TINERARY
                    </span>

                </h3>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-900">
                            Your email
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            className="w-full p-2.5 mt-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="name@mytinerary.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>

                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-900">
                            Your password
                        </label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            className="w-full p-2.5 mt-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500"
                            placeholder="••••••••"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>

                    <div className="flex justify-between items-center">
                        <div className="flex items-center">
                            <input
                                id="remember"
                                type="checkbox"
                                className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300"
                            />
                            <label htmlFor="remember" className="ml-2 text-sm text-gray-900">
                                Remember me
                            </label>
                        </div>
                    </div>

                    <button
                        type="submit"
                        className={`w-full py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm ${loading ? "opacity-50 cursor-not-allowed" : ""
                            }`}
                        disabled={loading}
                    >
                        {loading ? "Signing in..." : "Login to your account"}
                    </button>

                    <button
                        type="button"
                        className="w-full py-2.5 text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 rounded-lg text-sm flex items-center justify-center gap-2"
                        onClick={() => signInGoogle()}
                    >
                        <img
                            src="https://webimages.mongodb.com/_com_assets/cms/kr6fvgdym4qzsgqo3-Google%20Icon.svg?auto=format%252Ccompress"
                            className="w-5 h-5"
                            alt="google_logo"
                        />
                        Sign in with Google
                    </button>

                    <div className="text-sm text-center text-gray-500">
                        Not registered?{" "}
                        <NavLink to="/signup" className="text-blue-700 hover:underline">
                            Create account
                        </NavLink>
                    </div>

                    {error && (
                        <div className="mt-4 p-2 bg-red-50 text-red-700 border border-red-300 rounded-lg text-sm">
                            An error occurred while trying to sign in. Please try again later.
                        </div>
                    )}
                </form>
            </div>
        </div>
    );
}
