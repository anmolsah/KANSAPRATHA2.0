import React from "react";

const Search = ({ setPerPage, setSearchValue, searchValue }) => {
  return (
    <div className="flex justify-between items-center mb-4">
      <select
        onChange={(e) => setPerPage(parseInt(e.target.value))}
        className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
      >
        <option value="5">5</option>
        <option value="10">10</option>
        <option value="15">15</option>
        <option value="20">20</option>
      </select>
      <input
        onChange={(e) => setSearchValue(e.target.value)}
        value={searchValue}
        type="text"
        placeholder="Search..."
        className="p-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-300"
      />
    </div>
  );
};

export default Search;
