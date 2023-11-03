import { useState, useContext } from "react";
import { FilterContext } from "../../../context/filterContext";

const Status = () => {
  const [active, setActive] = useState(true);
  const { initialState, setInitialState } = useContext(FilterContext);

  const handleOptionChange = (e) => {
    setInitialState({ ...initialState, status: e.target.value });
  };

  return (
    <div className="flex flex-col">
      <div
        className="bg-gray-800 p-3 rounded flex justify-between items-center cursor-pointer"
        onClick={() => setActive(!active)}
      >
        <p className="text-lg font-bold select-none">Status</p>
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
          <label htmlFor="status0">All</label>
          <input
            type="radio"
            name="status"
            id="status0"
            value=""
            checked={initialState.status === ""}
            onChange={handleOptionChange}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="status1">Alive</label>
          <input
            type="radio"
            name="status"
            id="status1"
            value="alive"
            checked={initialState.status === "alive"}
            onChange={handleOptionChange}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="status2">Dead</label>
          <input
            type="radio"
            name="status"
            id="status2"
            value="dead"
            checked={initialState.status === "dead"}
            onChange={handleOptionChange}
          />
        </div>
        <div className="flex justify-between">
          <label htmlFor="status3">Unknown</label>
          <input
            type="radio"
            name="status"
            id="status3"
            value="unknown"
            checked={initialState.status === "unknown"}
            onChange={handleOptionChange}
          />
        </div>
      </div>
    </div>
  );
};

export default Status;
