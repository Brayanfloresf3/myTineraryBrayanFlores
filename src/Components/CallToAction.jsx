import { Link } from 'react-router-dom';

export function CallToAction() {
    return (
        <div className="inset-0 flex flex-col md:items-start justify-center items-center space-y-5 md:space-y-10 relative md:h-5/6 h-full pt-40 pb-10 md:pl-7"
            style={{
                backgroundImage: 'linear-gradient(to bottom, #202E2D, black)',
            }}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white z-10 ml-5">
                <span className="text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-400">Discover </span>
                and <span className="text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-400">Share</span> <br />
                Your <span className="text-transparent bg-clip-text bg-gradient-to-l to-emerald-600 from-sky-400">Adventures</span>
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-300 z-10 md:ml-5">
                Get inspired by the experiences of <br /> other travelers as you explore cities. <br />The adventure begins here!
            </p>
            <img src="/assets/hombre-en-pueblito.jpg" alt="Person walking in a small town" className="w-72 md:w-4/6 h-5/6 object-cover flex justify-center items-center md:absolute md:right-0 md:bottom-0 md:rounded-l-lg shadow-2xl shadow-custom" />
            <Link to="/cities">
                <button type="button" className="flex text-white font-bold text-2xl bg-gradient-to-br from-green-400 to-blue-600 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none rounded-lg px-3 py-4 text-center ml-5 mb-2 gap-2">
                    Visit Cities
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 ml-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
                    </svg>
                </button>
            </Link>
        </div>
    );
}
