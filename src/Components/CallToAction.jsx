import { Link } from 'react-router-dom';
import { ButtonPrimary } from './ButtonPrimary';

export function CallToAction() {
    return (
        <div className="inset-0 flex flex-col md:items-start justify-center items-center space-y-5 sm:space-y-8  md:space-y-10 relative md:h-5/6 h-full md:pt-40 pt-20 pb-10 md:pl-7"
            style={{
                backgroundImage: 'linear-gradient(to bottom, #202E2D, black)',
            }}>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white z-10 ml-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-400">Discover </span>
                and <span className="text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-400">Share</span> <br />
                Your <span className="text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-400">Adventures</span>
            </h2>
            <p className="text-lg sm:text-2xl md:text-xl lg:text-2xl font-semibold text-gray-300 z-10 md:ml-5">
                Get inspired by the experiences of <br /> other travelers as you explore cities. <br />The adventure begins here!
            </p>
            <img src="/assets/walkingToCity.jpg" alt="Person walking in a small town" className="w-72 h-5/6 sm:w-5/6 md:w-4/6  object-cover flex justify-center items-center md:absolute md:right-0 md:bottom-0 md:rounded-l-lg shadow-2xl shadow-custom" />
            <Link to="/cities">
                <ButtonPrimary
                    name="Visit Cities"
                    className=" text-3xl px-3 py-3 ml-5 mb-2 gap-2"
                    icon={<span className="material-symbols-outlined text-white text-3xl">
                    travel
                </span>}
                >
                </ButtonPrimary>
            </Link>

        </div>
    );
}
