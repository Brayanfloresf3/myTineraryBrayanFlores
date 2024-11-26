import { Link, NavLink } from 'react-router-dom';
import { ButtonPrimary } from './ButtonPrimary';
import { useEffect, useState } from 'react';

export function CallToAction() {
    const [hasToken, setHasToken] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem("token");
        setHasToken(!!token);
    }, []);

    return (
        <div className="inset-0 flex flex-col md:items-start justify-center items-center space-y-5 sm:space-y-8  md:space-y-10 relative md:h-5/6 h-full md:pt-40 pt-20 pb-10 md:pl-7"
            style={{
                backgroundImage: 'linear-gradient(to bottom, #202E2D, #0D0D0D)',
            }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white z-10 ml-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-400">Discover </span>
                and <span className="text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-400">Share</span> <br />
                Your <span className="text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-400">Adventures</span>
            </h2>
            <p className="text-lg sm:text-2xl md:text-xl lg:text-2xl font-semibold text-gray-300 z-10 md:ml-5">
                Get inspired by the experiences of <br /> other travelers as you explore cities. <br />The adventure begins here!
            </p>
            {!hasToken && ( // Renderiza el NavLink solo si no hay token
                <NavLink to="/signin" className="z-10 text-sm sm:text-sm md:text-sm lg:text-lg font-semibold text-gray-300 md:ml-5">
                    <div className='flex'>
                        <p>Bring your travels to life!</p>
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hand-index text-gray-300 mt-1 mx-1" viewBox="0 0 16 16">
                            <path d="M6.75 1a.75.75 0 0 1 .75.75V8a.5.5 0 0 0 1 0V5.467l.086-.004c.317-.012.637-.008.816.027.134.027.294.096.448.182.077.042.15.147.15.314V8a.5.5 0 1 0 1 0V6.435l.106-.01c.316-.024.584-.01.708.04.118.046.3.207.486.43.081.096.15.19.2.259V8.5a.5.5 0 0 0 1 0v-1h.342a1 1 0 0 1 .995 1.1l-.271 2.715a2.5 2.5 0 0 1-.317.991l-1.395 2.442a.5.5 0 0 1-.434.252H6.035a.5.5 0 0 1-.416-.223l-1.433-2.15a1.5 1.5 0 0 1-.243-.666l-.345-3.105a.5.5 0 0 1 .399-.546L5 8.11V9a.5.5 0 0 0 1 0V1.75A.75.75 0 0 1 6.75 1M8.5 4.466V1.75a1.75 1.75 0 1 0-3.5 0v5.34l-1.2.24a1.5 1.5 0 0 0-1.196 1.636l.345 3.106a2.5 2.5 0 0 0 .405 1.11l1.433 2.15A1.5 1.5 0 0 0 6.035 16h6.385a1.5 1.5 0 0 0 1.302-.756l1.395-2.441a3.5 3.5 0 0 0 .444-1.389l.271-2.715a2 2 0 0 0-1.99-2.199h-.581a5 5 0 0 0-.195-.248c-.191-.229-.51-.568-.88-.716-.364-.146-.846-.132-1.158-.108l-.132.012a1.26 1.26 0 0 0-.56-.642 2.6 2.6 0 0 0-.738-.288c-.31-.062-.739-.058-1.05-.046zm2.094 2.025" />
                        </svg>
                    </div>
                    <p>Access your account or sign up to start planning.</p>
                </NavLink>
            )}
            <img src="/assets/walkingToCity.jpg" alt="Person walking in a small town" className="w-72 h-5/6 sm:w-5/6 md:w-4/6  object-cover flex justify-center items-center md:absolute md:right-0 md:bottom-0 md:rounded-l-lg shadow-2xl shadow-custom" />
            <Link to="/cities">
                <ButtonPrimary
                    name="Visit Cities"
                    className=" text-3xl px-3 py-3 ml-5 mb-2 gap-2"
                    icon={<span className="material-symbols-outlined text-white text-3xl">
                        travel
                    </span>}
                />
            </Link>
        </div>
    );
}
