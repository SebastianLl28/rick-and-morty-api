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
  });

  return (
    <FilterContext.Provider value={{ initialState, setInitialState }}>
      {children}
    </FilterContext.Provider>
  );
};

export default UseFilter;
