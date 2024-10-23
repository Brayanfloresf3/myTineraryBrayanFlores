
export function SearchBar() {
    return (

        <div className="w-full p-4 pt-6 pl-9 justify-center items-center flex">
            <form class="form relative">
            <button class="absolute left-2 -translate-y-1/2 top-1/2 p-1">
                <svg
                    width="17"
                    height="16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    role="img"
                    aria-labelledby="search"
                    class="w-5 h-5 text-gray-700"
                >
                    <path
                        d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
                        stroke="currentColor"
                        strokewidth="1.333"
                        strokelinecap="round"
                        strokelinejoin="round"
                    ></path>
                </svg>
            </button>
            <input
                class="input rounded-full px-12 py-2 border-2 border-transparent hover:shadow-teal-100  focus:shadow-teal-100 focus:outline-none  placeholder-gray-400 transition-all duration-300 shadow-md"
                placeholder="Search to City"
                required=""
                type="text"
            />
            <button type="reset" class="absolute right-3 -translate-y-1/2 top-1/2 p-1">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5 text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokelinecap="round"
                        strokelinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                    ></path>
                </svg>
            </button>
        </form>
        </div>

    )
}