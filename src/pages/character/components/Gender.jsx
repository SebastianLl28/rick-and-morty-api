import { useContext, useState } from "react";
import { FilterContext } from "../../../context/filterContext";

const Gender = () => {
  const [active, setActive] = useState(true);
  const { initialState, setInitialState } = useContext(FilterContext);

  const handleOptionChange = (e) => {
    setInitialState({ ...initialState, gender: e.target.value });
  };

  return (
    <div className="flex flex-col">
      <div
        className="bg-gray-800 p-3 rounded flex justify-between items-center cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <p className="text-lg font-bold select-none">Gender</p>
        <svg
          width="25"
          height="25"
          viewBox="0 0 24 24"
          fill="none"
          className={`transition-transform ${
            active ? "-rotate-90" : "rotate-0"
          }`}
        >
          <path
            d="M16.2426 6.34317L14.8284 4.92896L7.75739 12L14.8285 19.0711L16.2427 17.6569L10.5858 12L16.2426 6.34317Z"
            fill="currentColor"
          />
        </svg>
      </div>
      <div
        className={`space-y-2 overflow-hidden w-[95%] rounded-b mx-auto bg-gray-900 px-4 ${
          active ? "h-auto py-4" : "h-0"
        }`}
      >
        <div className="flex justify-between">
          <label htmlFor="gender0">All</label>
          <input
            type="radio"
            name="gender"
            id="gender0"
            value=""
            checked={initialState.gender === ""}
            onChange={handleOptionChange}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="gender1">Female</label>
          <input
            type="radio"
            name="gender"
            id="gender1"
            value="female"
            checked={initialState.gender === "female"}
            onChange={handleOptionChange}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="gender2">Male</label>
          <input
            type="radio"
            name="gender"
            id="gender2"
            value="male"
            checked={initialState.gender === "male"}
            onChange={handleOptionChange}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="gender3">Genderless</label>
          <input
            type="radio"
            name="gender"
            id="gender3"
            value="genderless"
            checked={initialState.gender === "genderless"}
            onChange={handleOptionChange}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="gender4">Unknown</label>
          <input
            type="radio"
            name="gender"
            id="gender4"
            value="unknown"
            checked={initialState.gender === "unknown"}
            onChange={handleOptionChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Gender;
