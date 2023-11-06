import { useContext, useEffect } from "react";
import Card from "./Card";
import { useCharacters } from "../../../hooks/useCharacters";
import { FilterContext } from "../../../context/filterContext";
import Pagination from "./Pagination";

const Body = () => {
  const { initialState } = useContext(FilterContext);
  const { data, isLoading, isError, refetch, isFetching } =
    useCharacters(initialState);
  useEffect(() => {
    refetch();
  }, [initialState]);
  return (
    <div className="w-full">
      {!isLoading && !isError && data && (
        <div className="w-full space-y-5">
          <Pagination info={data.info} />
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 2xl:grid-cols-4">
            {data.results.map((element) => (
              <Card key={element.id} character={element} />
            ))}
          </div>
        </div>
      )}
      {isLoading && isFetching && <p>Esta cargando</p>}
      {!isLoading && isError && <p>No se encontro</p>}
    </div>
  );
};

export default Body;
