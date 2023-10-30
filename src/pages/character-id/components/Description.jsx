import formatDate from "../../../helpers/formatDate";

const Description = ({
  character: {
    id,
    image,
    name,
    status,
    species,
    type,
    gender,
    origin,
    created,
  },
}) => {
  return (
    <div className="w-full flex flex-col items-center gap-2">
      <img src={image} alt="" style={{ viewTransitionName: `card-${id}` }} />
      <div className="space-y-3 max-w-xl">
        <p className="text-6xl font-bold leading-normal text-center">{name}</p>
        <div className="w-full flex justify-between">
          <p className="font-semibold">Status:</p>
          <p>{status}</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-semibold">Species:</p>
          <p>{species}</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-semibold">Type:</p>
          <p className="max-w-[10em] text-end">{type || "none"}</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-semibold">Gender:</p>
          <p>{gender}</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-semibold">Origin:</p>
          <p>{origin.name}</p>
        </div>
        <div className="w-full flex justify-between">
          <p className="font-semibold">Created:</p>
          <p>{formatDate(created)}</p>
        </div>
      </div>
    </div>
  );
};

export default Description;
