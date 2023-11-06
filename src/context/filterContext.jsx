import { useState } from "react";
import { createContext } from "react";

export const FilterContext = createContext();

import React from "react";

const UseFilter = ({ children }) => {
  const [initialState, setInitialState] = useState({
    name: "",
    status: "",
    species: "",
    type: "",
    gender: "",
    page: 1,
  });

  return (
    <FilterContext.Provider value={{ initialState, setInitialState }}>
      {children}
    </FilterContext.Provider>
  );
};

export default UseFilter;
