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
    const token = useSelector((state) => state.authStore.user); // Asegúrate de que se accede a 'token'
    const user = useSelector((state) => state.authStore.user); // Asegúrate de que se accede a 'user'
  
    useEffect(() => {
        const token = localStorage.getItem("token");
        const user = JSON.parse(localStorage.getItem("user"));
    
        // console.log("LocalStorage User:", user);
        // console.log("LocalStorage Token:", token);
    
        // Sincronizar Redux solo si los datos son diferentes
        if (token && user && (!user || token !== token)) {
          console.log("Sincronizando Redux con LocalStorage");
          dispatch(setUser({ user, token }));
        }
      }, [dispatch, user, token]);

    
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
                        MY<img src="/assets/faviconLogo.png" alt="logo" className='w-6 h-5 hidden md:inline-block mb-2' />TINERARY
                    </span>
                </NavLink>
                <div className="flex md:order-2 space-x-3 md:space-x-0 gap-2">
                    {!token && (
                        <>
                            <NavLink to="/signin">
                                <ButtonPrimary
                                    name="Sign In"
                                    className="text-sm"
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>}
                                />
                            </NavLink>
                            <NavLink to="/signup">
                                <ButtonPrimary
                                    name="Sign Up"
                                    className="text-sm"
                                    icon={<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-fill" viewBox="0 0 16 16"><path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" /></svg>}
                                />
                            </NavLink>
                        </>
                    )}
                    {token && <Avatar />}
                    
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
