
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { CiSearch } from "react-icons/ci";
function SearchBar() {
  const navigate = useNavigate();
  const [query ,setQuery]=useState('');
  const handleSearch = (e) => {
    e.preventDefault();
    // console.log('searching for query', query);
    navigate(`/category/${query}`);

  };

  return (
    <div className="w-[300px]">
       <div className="inline dark:bg-gray-800 relative">
      <input
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="text"
        name="q"
        className="border h-9 shadow px-4 py-2 rounded-full dark:text-gray-800 dark:border-gray-700 dark:bg-gray-200"
        placeholder="Search"
      />

      <button
        type="button"
        onClick={handleSearch}
        className="absolute right-0 top-1/2 transform  -translate-y-1/2 pr-3  "
      >
        <CiSearch className="w-6 h-6 text-gray-800 dark:text-gray-700 " />
      </button>
    </div>
    </div>
  );
}

export default SearchBar;
