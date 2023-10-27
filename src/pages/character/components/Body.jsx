import { useContext } from "react";
import Card from "./Card";
import { useCharacters } from "../../../hooks/useCharacters";
import { FilterContext } from "../../../context/filterContext";

const Body = () => {
  const { initialState } = useContext(FilterContext);
  const { data, isLoading, isError } = useCharacters(initialState);
  return (
    <div className="w-full grid grid-cols-4 gap-10">
      {!isLoading &&
        !isError &&
        data &&
        data.results.map((element) => (
          <Card
            id={element.id}
            image={element.image}
            name={element.name}
            key={element.id}
            status={element.status}
            especies={element.species}
          />
        ))}
    </div>
  );
};

export default Body;
