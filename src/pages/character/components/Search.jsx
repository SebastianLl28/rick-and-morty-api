import React from "react";

const Search = () => {
  return (
    <div className="pb-7">
      <p className="text-lg font-bold">Search:</p>
      <input
        type="text"
        className="w-full px-3 py-2 rounded text-gray-900"
        placeholder="Search your character favorite"
      />
    </div>
  );
};

export default Search;
