import { useState } from "react";
import { createContext } from "react";

export const LocationContext = createContext();

const LocationProvider = ({ children }) => {
  const [locationFilter, setLocationFilter] = useState({
    name: "",
    type: "",
    dimension: "",
  });

  return (
    <LocationContext.Provider value={{ locationFilter, setLocationFilter }}>
      {children}
    </LocationContext.Provider>
  );
};

export default LocationProvider;
