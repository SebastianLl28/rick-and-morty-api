import React from "react";
import { flushSync } from "react-dom";
import { useNavigate } from "react-router-dom";
import { useStatus } from "../hooks/useStatus";

const Card = ({ character: { id, name, status, image, especies } }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!document.startViewTransition) {
      navigate(`/characters/${id}`);
      return;
    }
    document.startViewTransition(() =>
      flushSync(() => navigate(`/characters/${id}`))
    );
  };

  const Status = useStatus(status);

  return (
    <div className="rounded overflow-hidden" onClick={handleClick}>
      <div className="relative">
        <img
          src={image}
          alt={`image ${name}`}
          className="object-cover w-full h-72"
          style={{ viewTransitionName: `card-${id}` }}
        />
        <Status />
      </div>
      <div>
        <p className="font-bold text-2xl whitespace-nowrap overflow-hidden text-ellipsis relative">
          {name}
        </p>
        <p className="text-gray-400 -translate-y-1">{especies}</p>
        <button className="mt-1 underline">View More</button>
      </div>
    </div>
  );
};

export default Card;
