import { useContext } from "react";
import { FilterContext } from "../../../context/filterContext";

const Status = () => {
  const { initialState, setInitialState } = useContext(FilterContext);

  const handleOptionChange = (e) => {
    setInitialState({ ...initialState, status: e.target.value });
  };

  return (
    <div className="flex flex-col">
      <p className="text-lg font-bold mb-3">Status</p>
      <div className="space-y-2">
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
