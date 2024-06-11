import { Search } from "lucide-react";
import React from "react";

function SearchBar() {
  return (
    <div className="w-4/6">
      <div class="inline dark:bg-gray-800 relative">
        <input
          type="text"
          name="q"
          className="border-none rounded-lg px-4 shadow-xl bg-white py-3 w-full text-base outline-none text-black placeholder:md:text-lg placeholder:text-sm placeholder:text-neutral-400"
          placeholder="Search for products (eg. shoes, bags, sarees)"
        />
        <button type="submit">
          <Search className="h-5 w-5 text-gray-800 absolute top-0.5 right-3" />
        </button>
      </div>
    </div>
  );
}

export default SearchBar;
