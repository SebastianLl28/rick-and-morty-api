import Card from "../components/Card";
import { useCharacters } from "../../../hooks/useCharacters";
import Pagination from "../components/Pagination";
import Skeleton from "../../../components/Skeleton";
import CardSkeleton from "../components/CardSkeleton";

const Body = () => {
  const { data, isLoading, isError, isSuccess } = useCharacters();
  return (
    <div className="w-full">
      {!isLoading && isSuccess && data && (
        <div className="w-full space-y-5">
          <Pagination info={data.info} />
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 2xl:grid-cols-4">
            {data.results.map((element) => (
              <Card key={element.id} character={element} />
            ))}
          </div>
        </div>
      )}
      {isLoading && (
        <div className="w-full space-y-5">
          <Skeleton className="h-9 w-80 ml-auto rounded-md" />
          <div className="grid grid-cols-2 gap-10 md:grid-cols-3 2xl:grid-cols-4">
            {Array.from({ length: 20 }).map((_, index) => (
              <CardSkeleton key={index} />
            ))}
          </div>
        </div>
      )}
      {!isLoading && isError && <p className="text-center">No results found</p>}
    </div>
  );
};

export default Body;
