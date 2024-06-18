import React, { useState } from "react";
import data from "../Assests/HomePageData";

function SearchBar({ setSearchedData }) {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    const filteredData = data.filter((item) =>
      item.title.toLowerCase().includes(query.toLowerCase())
    );
    setSearchedData(filteredData);
  };

  const clearSearch = () => {
    setQuery("");
    setSearchedData(data); // Clear searchedData to reset HomePage
  };

  return (
    <div className="w-[300px] relative flex items-center">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        name="q"
        className="border h-9 shadow px-4 py-2 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200 w-full"
        placeholder="Search"
      />
      <button
        type="submit"
        onClick={handleSearch}
        className="ml-2 bg-teal-500 text-white rounded-full p-2 hover:bg-teal-600 transition duration-200 ease-in-out"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 56.966 56.966"
          className="h-5 w-5"
          fill="currentColor"
        >
          <path d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"></path>
        </svg>
      </button>
      <button
        onClick={clearSearch}
        className="ml-2 bg-red-500 text-white rounded-full px-4 py-1 hover:bg-red-600 transition duration-200 ease-in-out"
      >
        Clear
      </button>
    </div>
  );
}

export default SearchBar;
