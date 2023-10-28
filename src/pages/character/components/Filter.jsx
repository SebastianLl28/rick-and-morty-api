import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";

const Filter = () => {
  return (
    <div className="w-96 space-y-10">
      <Status />
      <Gender />
      <Species />
    </div>
  );
};

export default Filter;
