import { useEffect } from "react";
import { useContext, useState } from "react";
import { FilterContext } from "../../../context/filterContext";

const Search = () => {
  const { initialState, setInitialState } = useContext(FilterContext);
  const [text, setText] = useState(initialState.name);

  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  useEffect(() => {
    const timeoutId = setTimeout(
      () => setInitialState({ ...initialState, name: text }),
      1200
    );
    return () => clearTimeout(timeoutId);
  }, [text]);

  return (
    <div className="pb-7">
      <p className="text-lg font-bold">Search:</p>
      <input
        type="text"
        autoComplete="off"
        className="w-full px-3 py-2 rounded text-gray-900"
        placeholder="Search your character favorite"
        onChange={handleOnChange}
      />
    </div>
  );
};

export default Search;
