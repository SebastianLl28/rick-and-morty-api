import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";
import Type from "./Type";

const Filter = () => {
  return (
    <div className="w-96">
      <div className="space-y-10 sticky top-0">
        <Status />
        <Gender />
        <Species />
        <Type />
      </div>
    </div>
  );
};

export default Filter;
