export const useStatus = (status) => {
  const Status = () => {
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

  return Status;
};
