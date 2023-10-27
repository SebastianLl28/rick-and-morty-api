import React from "react";
import { useEffect } from "react";
import { FilterContext } from "../../../context/filterContext";
import { useContext } from "react";

const Search = () => {
  const { initialState, setInitialState } = useContext(FilterContext);

  const handleOnChange = (e) => {
    setInitialState({ ...initialState, name: e.target.value });
  };

  useEffect(() => {
    const timeoutId = setTimeout(() => console.log(initialState.name), 1800);
    return () => clearTimeout(timeoutId);
  }, [initialState.name]);

  return (
    <div className="pb-7">
      <p className="text-lg font-bold">Search:</p>
      <input
        type="text"
        autoComplete="off"
        className="w-full px-3 py-2 rounded text-gray-900"
        placeholder="Search your character favorite"
        onChange={handleOnChange}
        value={initialState.name}
      />
    </div>
  );
};

export default Search;
