import { useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { ButtonPrimary } from './ButtonPrimary';
import { useSelector, useDispatch } from 'react-redux';
import { setScrolled, toggleMenu } from '../../store/reducer/navBarReducer';
import Avatar from './Avatar';
import { setUser } from "../../store/action/authAction";

export function NavBar() {
    const dispatch = useDispatch();
    const isScrolled = useSelector((state) => state.navbar.isScrolled);
    const isMenuOpen = useSelector((state) => state.navbar.isMenuOpen);
    const reduxUser = useSelector((state) => state.authStore.user);
    const reduxToken = useSelector((state) => state.authStore.token);

    useEffect(() => {
        const token = localStorage.getItem("token");
        const storedUser = localStorage.getItem("user");

        try {
            const user = storedUser ? JSON.parse(storedUser) : null;

            if (token && user && (!reduxUser || !reduxToken)) {
                dispatch(setUser({ user, token }));
            }
        } catch (error) {
            console.error("Error parsing user from localStorage:", error);
            localStorage.removeItem("user");
            localStorage.removeItem("token");
        }
    }, [dispatch, reduxUser, reduxToken]);

    useEffect(() => {
        const handleScroll = () => {
            dispatch(setScrolled(window.scrollY > 0));
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);

    const routes = [
        { to: '/', text: 'Home' },
        { to: '/cities', text: 'Cities' },
    ];

    return (
        <nav className={`fixed w-full z-20 top-0 start-0 transition-all duration-300 ${isScrolled ? 'bg-black bg-opacity-80' : 'bg-transparent'}`}>
            <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
                <NavLink to="/" className="flex items-center">
                    <span className="tracking-wide md:self-center md:text-xl text-white" style={{ fontFamily: 'Bungee, cursive' }}>
                        MY<img src="/assets/faviconLogo.png" alt="logo" className='w-6 h-5 hidden sm:inline-block mb-2' />TINERARY
                    </span>
                </NavLink>
                <div className="flex md:order-2 space-x-3 md:space-x-0 gap-2">
                    {!reduxToken && (
                        <>
                            <NavLink to="/signin">
                                <ButtonPrimary
                                    name="Sign In"
                                    className="text-sm"
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>}
                                />
                            </NavLink>
                            <NavLink to="/signup" className="hidden sm:block">
                                <ButtonPrimary
                                    name="Sign Up"
                                    className="text-sm"
                                    icon={
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            width="16"
                                            height="16"
                                            fill="currentColor"
                                            className="bi bi-person-add"
                                            viewBox="0 0 16 16"
                                        >
                                            <path d="M12.5 16a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7m.5-5v1h1a.5.5 0 0 1 0 1h-1v1a.5.5 0 0 1-1 0v-1h-1a.5.5 0 0 1 0-1h1v-1a.5.5 0 0 1 1 0m-2-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0M8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4" />
                                            <path d="M8.256 14a4.5 4.5 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10q.39 0 .74.025c.226-.341.496-.65.804-.918Q8.844 9.002 8 9c-5 0-6 3-6 4s1 1 1 1z" />
                                        </svg>
                                    }
                                />
                            </NavLink>

                        </>
                    )}
                    {reduxToken && <Avatar />}

                    <button
                        onClick={() => dispatch(toggleMenu())}
                        type="button"
                        className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
                        aria-controls="navbar-sticky"
                        aria-expanded={isMenuOpen ? "true" : "false"}
                        aria-label="Open main menu"
                    >
                        <span className="sr-only">Open main menu</span>
                        <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                        </svg>
                    </button>
                </div>
                <div className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${isMenuOpen ? 'block' : 'hidden'}`} id="navbar-sticky">
                    <ul className="flex flex-col text-lg p-4 md:p-0 mt-4 font-medium md:space-x-8 md:flex-row md:mt-0">
                        {routes.map((route, index) => (
                            <li key={index}>
                                <NavLink
                                    to={route.to}
                                    className={`block py-2 px-3 text-white rounded hover:text-[#21ABB8] md:p-0 hover:bg-gray-100 md:hover:bg-transparent`}
                                >
                                    {route.text}
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    );
}
