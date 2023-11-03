import Gender from "./Gender";
import Species from "./Species";
import Status from "./Status";
import Type from "./Type";

const Filter = () => {
  return (
    <div className="w-full xl:w-96 2xl:w-[26rem]">
      <div className="space-y-10 sticky top-0 sm:grid sm:grid-cols-2 sm:gap-x-10 sm:gap-y-6 sm:space-y-0 md:gap-x-16 xl:block xl:space-y-7">
        <Status />
        <Gender />
        <Species />
        <Type />
      </div>
    </div>
  );
};

export default Filter;
