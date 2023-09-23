import React from "react";

const Card = ({ id, name, status, image, especies }) => {
  return (
    <div className="rounded overflow-hidden">
      <div className="relative">
        <img
          src={image}
          alt={`image ${name}`}
          className="object-cover w-full h-72"
        />
        <Status status={status} />
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

const Status = ({ status }) => {
  return (
    <div
      className={`absolute top-2 right-2 px-2 py-1 font-bold rounded-md flex items-center gap-1 ${
        (status === "Alive" && "bg-green-500") ||
        (status === "Dead" && "bg-red-500") ||
        (status === "unknown" && "bg-stone-500")
      }`}
    >
      <div
        className={`w-3  h-3 rounded-full shadow shadow-[#0000005c] ${
          (status === "Alive" && "status-alive") ||
          (status === "Dead" && "status-death") ||
          (status === "unknown" && "status-unknow")
        }`}
      ></div>
      <p className="text-black">{status}</p>
    </div>
  );
};

export default Card;
