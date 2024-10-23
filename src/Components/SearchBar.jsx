import { useState } from "react";

export function SearchBar({ onSearch }) {
  const [search, setSearch] = useState("");

  const handleSearch = (e) => {
    const value = e.target.value;
    setSearch(value);
    onSearch(value); 
  };

  return (
    <div className="w-full p-4 pt-6 pl-9 justify-center items-center flex">
      <form className="form relative">
        <button className="absolute left-2 -translate-y-1/2 top-1/2 p-1">
          <svg
            width="17"
            height="16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-labelledby="search"
            className="w-5 h-5 text-gray-700"
          >
            <path
              d="M7.667 12.667A5.333 5.333 0 107.667 2a5.333 5.333 0 000 10.667zM14.334 14l-2.9-2.9"
              stroke="currentColor"
              strokeWidth="1.333"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
        </button>
        <input
          className="input rounded-full px-12 py-2 border-2 border-transparent hover:shadow-teal-100 focus:shadow-teal-100 focus:outline-none placeholder-gray-400 transition-all duration-300 shadow-md"
          placeholder="Search City"
          required=""
          type="text"
          value={search}
          onChange={handleSearch}
        />
        <button type="reset" className="absolute right-3 -translate-y-1/2 top-1/2 p-1">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-5 h-5 text-gray-700"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </button>
      </form>
    </div>
  );
}
