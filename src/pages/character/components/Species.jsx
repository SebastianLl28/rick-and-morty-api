import { useState, useEffect, useContext } from "react";
import { FilterContext } from "../../../context/filterContext";

const Species = () => {
  const { initialState, setInitialState } = useContext(FilterContext);
  const [text, setText] = useState(initialState.species);

  const handleOnchange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setInitialState({ ...initialState, species: text }),
      1200
    );
    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <div>
      <p className="text-lg font-bold mb-3">Species</p>
      <input
        type="text"
        autoComplete="off"
        className="w-full px-3 py-2 rounded text-gray-900"
        placeholder="Ejm: Human, Animal, Alien..."
        onChange={handleOnchange}
        value={text}
      />
    </div>
  );
};

export default Species;
