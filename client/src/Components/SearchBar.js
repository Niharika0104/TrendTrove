
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

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
          placeholder="search"
        />
        <button type="button" onClick={handleSearch}>
          <svg
            className="text-teal-400 h-5 w-5 absolute top-1 right-3 fill-current dark:text-teal-300"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: 'new 0 0 56.966 56.966' }}
          >
            <path
              d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z"
            ></path>
          </svg>
        </button>
      </div>

    </div>
  );
}

export default SearchBar;
