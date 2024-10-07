
export function CallToAction() {
  return (
    <div className=" inset-0 flex flex-col items-start justify-center space-y-10 relative h-5/6 w-full"
      style={{
        backgroundImage: 'linear-gradient(to bottom, #202E2D, black)'
      }}>
      <h2 className="text-6xl font-bold text-white z-10 ml-5">
        Explore the World’s Best Cities
      </h2>
      <p className="text-3xl font-semibold text-gray-300 z-10 ml-5 ">
        Discover your next adventure <br /> and see what each city has to offer.
      </p>
      <img src="/assets/pexels-dico-baskoro-693731013-18070636.jpg" alt="walk" className="w-4/6 h-5/6 object-cover absolute right-0 bottom-0 rounded-l-lg  shadow-2xl shadow-custom" />
      <a to="/cities">
        <button type="button" class=" flex text-white font-bold text-2xl  bg-gradient-to-r from-teal-400 via-teal-500 to-teal-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-large rounded-lg px-7 py-4 pb-3text-center ml-5 mb-2 gap-2"> Visit To Cities

          <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 me-2 mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
          </svg>
        </button>

      </a>
    </div>


  );
}


