import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";
import Type from "./Type";

const Filter = () => {
  return (
    <div className="w-96 space-y-10">
      <Status />
      <Gender />
      <Species />
      <Type />
    </div>
  );
};

export default Filter;
