import { useContext } from "react";
import { LocationContext } from "../../../context/locationContext";
import { useLocations } from "../../../hooks/useLocations";
import Card from "./Card";

const Body = () => {
  const { locationFilter } = useContext(LocationContext);

  const { data, isLoading, isError } = useLocations(locationFilter);

  if (!isLoading && !isError && data) {
    console.log(data);
  }

  return (
    <main className="container mx-auto px-4 pt-12">
      {!isLoading && !isError && data && (
        <>
          <ul className="grid grid-cols-4 gap-7">
            {data.results.map((element) => (
              <Card key={element.id} location={element} />
            ))}
          </ul>
        </>
      )}
    </main>
  );
};

export default Body;
