
export function CallToAction() {
  return (
    <div className="object-contain inset-0 flex flex-col md:items-start justify-center items-center space-y-5 md:space-y-10 relative md:h-5/6 h-full  w-full pt-40 pb-10"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #202E2D, black)'
      }}>
      <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white z-10 ml-5">
      Discover and Share <br />Your Adventures
      </h2>
      <p className="text-lg md:text-xl lg:text-2xl font-semibold text-gray-300 z-10 md:ml-5">
      Track Your Dreams, Live Your Itineraries
      </p>
      <img src="/assets/hombre-en-pueblito.jpg" alt="walk" className="w-72 md:w-4/6 h-5/6 object-cover flex justify-center items-center md:absolute md:right-0 md:bottom-0 md:rounded-l-lg  shadow-2xl shadow-custom " />
      <a to="/cities" >
        <button type="button" class=" flex text-white font-bold text-2xl  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-large rounded-lg px-3 py-4 pb-3text-center ml-5 mb-2 gap-2"> Visit To Cities

          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 me-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>

      </a>
    </div>


  );
}


