import { useContext } from "react";
import { FilterContext } from "../../../context/filterContext";

const Gender = () => {
  const { initialState, setInitialState } = useContext(FilterContext);

  const handleOptionChange = (e) => {
    setInitialState({ ...initialState, gender: e.target.value });
  };

  return (
    <div className="flex flex-col">
      <p className="text-lg font-bold mb-3">Gender</p>
      <div className="space-y-2">
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
