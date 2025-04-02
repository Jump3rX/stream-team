import React, { useState } from "react";

function SearchBar({ searchStation }) {
  const [inputValue, setInputValue] = useState("");
  function handleSearch() {
    searchStation(inputValue);
  }
  return (
    <div className="mt-4 flex items-center bg-gray-200 px-4 py-2 rounded-full">
      <input
        type="text"
        placeholder="Search station"
        className="flex-1 bg-transparent outline-none px-2"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <button
        onClick={() => handleSearch()}
        className="ml-2 bg-purple-500 text-white px-3 py-1 rounded-full hover:bg-purple-600 transition"
      >
        Search
      </button>
    </div>
  );
}

export default SearchBar;
