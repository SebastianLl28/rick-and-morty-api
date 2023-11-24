const Card = ({ location: { name, dimension } }) => {
  return (
    <li className="border-white border p-4 rounded-md space-y-2 grid relative transition-transform cursor-pointer shadow-white/40 shadow-md hover:scale-105">
      <p className="text-sm text-gray-400">{dimension}</p>
      <p className="text text-end leading-normal font-bold">{name}</p>
    </li>
  );
};

export default Card;
