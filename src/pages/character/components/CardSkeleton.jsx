import Skeleton from "../../../components/Skeleton";

const CardSkeleton = () => {
  return (
    <div className="space-y-2">
      <Skeleton className="h-[17.6rem] w-full" />
      <div className="space-y-3">
        <Skeleton className="h-8 w-10/12" />
        <Skeleton className="h-4 w-20" />
      </div>
    </div>
  );
};

export default CardSkeleton;
